/* ================================================================
   TRACKER - Activity stats, daily streak, practice history,
             spaced repetition (wrong answer review).
   Adapted from Project 56 maths/js/utils.js
   ================================================================ */

// -- Activity Stats -------------------------------------------------------

function saveActivityStats(prefix, activity, ok) {
    try {
        var all = JSON.parse(localStorage.getItem('activityStats') || '{}');
        all[prefix] = {
            score: activity.score,
            total: activity.total,
            streak: activity.streak,
            bestStreak: Math.max(activity.streak, (all[prefix] && all[prefix].bestStreak) || 0),
            lastTs: Date.now()
        };
        localStorage.setItem('activityStats', JSON.stringify(all));

        // Daily streak
        updateDailyStreak();

        // Spaced repetition
        if (ok === false && activity.currentQ) saveWrongAnswer(prefix, activity.currentQ);
        if (ok === true && activity.currentQ) removeWrongAnswer(prefix, activity.currentQ);

        // Practice history
        savePracticeSession(prefix, activity.score, activity.total);

        // Cloud sync
        if (typeof Auth !== 'undefined') Auth.saveAndSync();
    } catch (e) {}
}

function loadActivityStats(prefix, activity) {
    try {
        var all = JSON.parse(localStorage.getItem('activityStats') || '{}');
        var s = all[prefix];
        if (s) {
            activity.score = s.score || 0;
            activity.total = s.total || 0;
            activity.streak = s.streak || 0;
        }
    } catch (e) {}
}

function getAllActivityStats() {
    try { return JSON.parse(localStorage.getItem('activityStats') || '{}'); } catch (e) { return {}; }
}

// -- Daily Streak ---------------------------------------------------------

function updateDailyStreak() {
    try {
        var today = new Date().toLocaleDateString('en-CA');
        var ds = JSON.parse(localStorage.getItem('dailyStreak') || '{}');
        if (ds.lastDate === today) return;

        // Anti-cheat: if more than 2 days jump, reset
        if (ds.lastDate) {
            var lastMs = new Date(ds.lastDate + 'T00:00:00').getTime();
            var todayMs = new Date(today + 'T00:00:00').getTime();
            if (todayMs - lastMs > 3 * 86400000) {
                ds.current = 1;
                ds.lastDate = today;
                ds.best = Math.max(ds.current, ds.best || 0);
                localStorage.setItem('dailyStreak', JSON.stringify(ds));
                updateDailyStreakUI();
                return;
            }
        }

        var yesterday = new Date(Date.now() - 86400000).toLocaleDateString('en-CA');
        if (ds.lastDate === yesterday) {
            ds.current = (ds.current || 0) + 1;
        } else {
            ds.current = 1;
        }
        ds.lastDate = today;
        ds.best = Math.max(ds.current, ds.best || 0);
        localStorage.setItem('dailyStreak', JSON.stringify(ds));
        updateDailyStreakUI();
    } catch (e) {}
}

function getDailyStreak() {
    try {
        var ds = JSON.parse(localStorage.getItem('dailyStreak') || '{}');
        var today = new Date().toLocaleDateString('en-CA');
        var yesterday = new Date(Date.now() - 86400000).toLocaleDateString('en-CA');
        if (ds.lastDate === today || ds.lastDate === yesterday) return ds;
        return { current: 0, best: ds.best || 0, lastDate: ds.lastDate };
    } catch (e) { return { current: 0, best: 0 }; }
}

function updateDailyStreakUI() {
    var el = document.getElementById('daily-streak');
    if (el) el.textContent = getDailyStreak().current || 0;
    var bestEl = document.getElementById('daily-streak-best');
    if (bestEl) bestEl.textContent = getDailyStreak().best || 0;
}

// -- Spaced Repetition (Wrong Answer Review) ------------------------------

function saveWrongAnswer(prefix, qData) {
    try {
        var all = JSON.parse(localStorage.getItem('wrongAnswers') || '{}');
        if (!all[prefix]) all[prefix] = [];
        all[prefix].push(qData);
        if (all[prefix].length > 10) all[prefix].shift();
        localStorage.setItem('wrongAnswers', JSON.stringify(all));
    } catch (e) {}
}

function getWrongAnswer(prefix) {
    try {
        var all = JSON.parse(localStorage.getItem('wrongAnswers') || '{}');
        var pool = all[prefix];
        if (!pool || pool.length === 0) return null;
        return pool[Math.floor(Math.random() * pool.length)];
    } catch (e) { return null; }
}

function removeWrongAnswer(prefix, qData) {
    try {
        var all = JSON.parse(localStorage.getItem('wrongAnswers') || '{}');
        var pool = all[prefix];
        if (!pool) return;
        var idx = pool.findIndex(function(q) { return JSON.stringify(q) === JSON.stringify(qData); });
        if (idx !== -1) pool.splice(idx, 1);
        localStorage.setItem('wrongAnswers', JSON.stringify(all));
    } catch (e) {}
}

// -- Practice History -----------------------------------------------------

function savePracticeSession(prefix, score, total) {
    try {
        var hist = JSON.parse(localStorage.getItem('practiceHistory') || '[]');
        var now = Date.now();
        // Debounce: update in place if same prefix within 2 minutes
        var last = hist[hist.length - 1];
        if (last && last.prefix === prefix && (now - last.date) < 120000) {
            last.score = score;
            last.total = total;
            last.date = now;
            last.count = (last.count || 0) + 1;
        } else {
            hist.push({ prefix: prefix, date: now, score: score, total: total, count: 1 });
        }
        if (hist.length > 200) hist.shift();
        localStorage.setItem('practiceHistory', JSON.stringify(hist));
    } catch (e) {}
}
