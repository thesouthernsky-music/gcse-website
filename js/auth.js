/* ================================================================
   AUTH + CLOUD SYNC - GCSE Hub
   Local-first storage with debounced Firestore backup.
   Pattern adapted from Project 56.
   ================================================================ */
const Auth = {
    user: null,
    db: null,
    _ready: false,
    _syncTimer: null,

    init() {
        if (!FIREBASE_CONFIG || !FIREBASE_CONFIG.apiKey) { this._ready = true; return; }
        if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
        this.db = firebase.firestore();

        firebase.auth().onAuthStateChanged(async user => {
            this.user = user;
            this._ready = true;
            this.updateUI();
            if (user) {
                await this.pullFromCloud();
                updateDailyStreakUI();
            }
        });

        this._initUnloadFlush();
    },

    /* ---- Sign in / out ---- */

    signIn() {
        if (!this.db) return;
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).catch(e => console.error('Sign-in failed:', e.message));
    },

    signOut() {
        if (!this.db) return;
        firebase.auth().signOut().then(() => location.reload()).catch(() => location.reload());
    },

    /* ---- UI ---- */

    updateUI() {
        const btn = document.getElementById('auth-btn');
        const info = document.getElementById('auth-info');
        if (btn) {
            if (this.user) {
                btn.textContent = 'Sign out';
                btn.onclick = () => Auth.signOut();
            } else {
                btn.textContent = 'Sign in';
                btn.onclick = () => Auth.signIn();
            }
        }
        if (info) {
            if (this.user) {
                const name = this.user.displayName || this.user.email || 'User';
                const photo = this.user.photoURL;
                info.textContent = '';
                if (photo && /^https?:\/\//.test(photo)) {
                    const img = document.createElement('img');
                    img.src = photo; img.alt = '';
                    img.style.cssText = 'width:24px;height:24px;border-radius:50%;vertical-align:middle;';
                    info.appendChild(img);
                }
                const span = document.createElement('span');
                span.textContent = ' ' + name.split(' ')[0];
                info.appendChild(span);
            } else {
                info.textContent = '';
            }
        }
    },

    /* ---- Cloud Pull ---- */

    async pullFromCloud() {
        if (!this.db || !this.user) return;
        try {
            const doc = await this.db.collection('users').doc(this.user.uid).get();
            if (!doc.exists) return;
            const cloud = doc.data();

            // Activity stats (score/total per trainer)
            if (cloud.activityStats) {
                var local = {};
                try { local = JSON.parse(localStorage.getItem('activityStats') || '{}'); } catch(e) {}
                // Merge: keep whichever has more total questions per prefix
                for (var prefix in cloud.activityStats) {
                    var cl = cloud.activityStats[prefix];
                    var lo = local[prefix];
                    if (!lo || (cl.total || 0) >= (lo.total || 0)) {
                        local[prefix] = cl;
                    }
                }
                localStorage.setItem('activityStats', JSON.stringify(local));
            }

            // Daily streak
            if (cloud.dailyStreak) {
                var localDs = {};
                try { localDs = JSON.parse(localStorage.getItem('dailyStreak') || '{}'); } catch(e) {}
                if ((cloud.dailyStreak.current || 0) >= (localDs.current || 0)) {
                    localStorage.setItem('dailyStreak', JSON.stringify(cloud.dailyStreak));
                }
            }

            // Practice history
            if (cloud.practiceHistory) {
                var localHist = [];
                try { localHist = JSON.parse(localStorage.getItem('practiceHistory') || '[]'); } catch(e) {}
                if (cloud.practiceHistory.length >= localHist.length) {
                    localStorage.setItem('practiceHistory', JSON.stringify(cloud.practiceHistory));
                }
            }

            // Wrong answers (spaced repetition)
            if (cloud.wrongAnswers) {
                localStorage.setItem('wrongAnswers', JSON.stringify(cloud.wrongAnswers));
            }

        } catch (e) { console.error('Cloud pull failed:', e.message); }
    },

    /* ---- Cloud Push (debounced) ---- */

    saveAndSync() {
        clearTimeout(this._syncTimer);
        this._syncTimer = setTimeout(() => this.pushToCloud(), 2000);
    },

    async pushToCloud() {
        if (!this.db || !this.user) return;
        try {
            var data = { updatedAt: firebase.firestore.FieldValue.serverTimestamp() };

            var as = localStorage.getItem('activityStats');
            if (as) data.activityStats = JSON.parse(as);

            var ds = localStorage.getItem('dailyStreak');
            if (ds) data.dailyStreak = JSON.parse(ds);

            var ph = localStorage.getItem('practiceHistory');
            if (ph) data.practiceHistory = JSON.parse(ph);

            var wa = localStorage.getItem('wrongAnswers');
            if (wa) data.wrongAnswers = JSON.parse(wa);

            await this.db.collection('users').doc(this.user.uid).set(data, { merge: true });
        } catch (e) { console.error('Cloud push failed:', e.message); }
    },

    /* ---- Flush on page hide ---- */

    _initUnloadFlush() {
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden' && this._syncTimer) {
                clearTimeout(this._syncTimer);
                this._syncTimer = null;
                this.pushToCloud();
            }
        });
    }
};
