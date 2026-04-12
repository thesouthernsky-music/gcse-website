/* ==============================
   Lesson Engine
   Adapted from Project 56 LessonEngine
   ============================== */

const LessonEngine = {
    lesson: null,
    lessonId: null,
    screenIdx: 0,
    practiceCorrect: 0,
    practiceTotal: 0,
    exampleStepIdx: 0,
    answered: false,
    currentQuestion: null,

    start(lesson, lessonId) {
        this.lesson = lesson;
        this.lessonId = lessonId;
        this.screenIdx = 0;
        this.practiceCorrect = 0;
        this.practiceTotal = 0;
        this.exampleStepIdx = 0;
        this.answered = false;
        this.currentQuestion = null;

        // Set header
        document.getElementById('lesson-title').textContent = lesson.title || 'Lesson';
        document.getElementById('lesson-subtitle').textContent = lesson.subtitle || '';
        document.title = (lesson.title || 'Lesson') + ' - GCSE Hub';

        // Bind nav buttons
        document.getElementById('btn-prev').addEventListener('click', () => this.back());
        document.getElementById('btn-next').addEventListener('click', () => this.advance());

        this.renderScreen();
        this.updateProgress();
    },

    renderScreen() {
        const screen = this.lesson.screens[this.screenIdx];
        if (!screen) return;

        const content = document.getElementById('lesson-content');
        const btnNext = document.getElementById('btn-next');
        const btnPrev = document.getElementById('btn-prev');

        // Reset state
        this.answered = false;
        this.exampleStepIdx = 0;
        content.style.opacity = '0';

        // Update counter
        document.getElementById('screen-counter').textContent =
            (this.screenIdx + 1) + ' / ' + this.lesson.screens.length;

        // Prev button
        btnPrev.disabled = this.screenIdx === 0;

        // Determine if last screen
        const isLast = this.screenIdx === this.lesson.screens.length - 1;

        switch (screen.type) {
            case 'concept':
                this._renderConcept(screen, content);
                btnNext.textContent = isLast ? 'Complete' : 'Next';
                btnNext.disabled = false;
                btnNext.classList.toggle('complete-btn', isLast);
                break;

            case 'example':
                this._renderExample(screen, content);
                btnNext.textContent = isLast ? 'Complete' : 'Next';
                btnNext.disabled = false;
                btnNext.classList.toggle('complete-btn', isLast);
                break;

            case 'practice':
                this._renderPractice(screen, content);
                btnNext.textContent = isLast ? 'Complete' : 'Next';
                btnNext.disabled = true; // Enabled after answering
                btnNext.classList.toggle('complete-btn', isLast);
                break;

            case 'summary':
                this._renderSummary(screen, content);
                btnNext.textContent = 'Complete';
                btnNext.disabled = false;
                btnNext.classList.add('complete-btn');
                break;

            default:
                content.innerHTML = '<p>Unknown screen type: ' + screen.type + '</p>';
                btnNext.disabled = false;
        }

        // Fade in
        requestAnimationFrame(() => {
            content.style.transition = 'opacity 0.3s ease';
            content.style.opacity = '1';
        });
    },

    _renderConcept(screen, container) {
        let html = '';
        if (screen.title) html += '<h3>' + screen.title + '</h3>';
        if (screen.content) html += screen.content;
        container.innerHTML = html;
        this.typeset(container);
    },

    _renderExample(screen, container) {
        let html = '';
        if (screen.title) html += '<h3>' + screen.title + '</h3>';
        if (screen.problem) html += '<div class="example-problem">' + screen.problem + '</div>';

        // Render steps (hidden)
        if (screen.steps && screen.steps.length > 0) {
            screen.steps.forEach((step, i) => {
                html += '<div class="lesson-step" id="step-' + i + '">';
                html += '<div class="step-label">Step ' + (i + 1) + '</div>';
                html += '<div>' + step + '</div>';
                html += '</div>';
            });
            html += '<button class="reveal-btn" id="reveal-btn" onclick="LessonEngine.revealStep()">Show next step</button>';
        }

        container.innerHTML = html;
        this.typeset(container);
    },

    revealStep() {
        const screen = this.lesson.screens[this.screenIdx];
        if (!screen || !screen.steps) return;

        const stepEl = document.getElementById('step-' + this.exampleStepIdx);
        if (stepEl) {
            stepEl.classList.add('revealed');
            this.typeset(stepEl);
            this.exampleStepIdx++;
        }

        // Disable button if all steps revealed
        if (this.exampleStepIdx >= screen.steps.length) {
            const btn = document.getElementById('reveal-btn');
            if (btn) {
                btn.disabled = true;
                btn.textContent = 'All steps shown';
            }
        }
    },

    _renderPractice(screen, container) {
        // Generate a question
        const q = screen.generate();
        this.currentQuestion = q;

        let html = '';
        if (screen.title) html += '<h3>' + screen.title + '</h3>';

        // Score display
        html += '<div class="practice-score">Score: <span class="score-val">' +
            this.practiceCorrect + '</span> / ' + this.practiceTotal + '</div>';

        // Question prompt
        html += '<div class="question-prompt">' + q.prompt + '</div>';

        // MC or free input
        if (q.options) {
            // Multiple choice
            q.options.forEach((opt, i) => {
                html += '<button class="option-btn" onclick="LessonEngine.checkMC(this, ' +
                    q.correctIndex + ', ' + i + ')">' + opt + '</button>';
            });
        } else {
            // Free input (MathLive)
            html += '<div class="input-area">';
            html += '<math-field id="answer-field" placeholder="Type your answer..."></math-field>';
            html += '<button class="check-btn" onclick="LessonEngine.checkFree()">Check</button>';
            html += '</div>';
        }

        html += '<div class="feedback" id="practice-feedback"></div>';
        html += '<button class="try-another-btn" id="try-another-btn" onclick="LessonEngine._renderPractice(LessonEngine.lesson.screens[LessonEngine.screenIdx], document.getElementById(\'lesson-content\'))">Try another</button>';

        container.innerHTML = html;
        this.typeset(container);

        // Bind MathLive field after short delay
        if (!q.options) {
            setTimeout(() => {
                const mf = document.getElementById('answer-field');
                if (mf) {
                    mf.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter') this.checkFree();
                    });
                }
            }, 200);
        }
    },

    checkMC(btn, correctIdx, selectedIdx) {
        if (this.answered) return;
        this.answered = true;
        this.practiceTotal++;

        const buttons = document.querySelectorAll('.option-btn');
        const feedback = document.getElementById('practice-feedback');
        const btnNext = document.getElementById('btn-next');
        const tryAnother = document.getElementById('try-another-btn');

        // Disable all buttons
        buttons.forEach(b => b.disabled = true);

        if (selectedIdx === correctIdx) {
            this.practiceCorrect++;
            btn.classList.add('correct');
            feedback.textContent = 'Correct!';
            feedback.className = 'feedback show correct';
        } else {
            btn.classList.add('incorrect');
            buttons[correctIdx].classList.add('correct');
            feedback.textContent = 'Incorrect. The correct answer is shown above.';
            feedback.className = 'feedback show incorrect';
        }

        // Update score display
        const scoreEl = document.querySelector('.practice-score .score-val');
        if (scoreEl) scoreEl.textContent = this.practiceCorrect;
        const scoreTotal = document.querySelector('.practice-score');
        if (scoreTotal) {
            scoreTotal.innerHTML = 'Score: <span class="score-val">' +
                this.practiceCorrect + '</span> / ' + this.practiceTotal;
        }

        // Enable next and try another
        btnNext.disabled = false;
        tryAnother.classList.add('show');
    },

    checkFree() {
        if (this.answered) return;

        const mf = document.getElementById('answer-field');
        if (!mf) return;

        const userVal = mf.value.trim();
        if (!userVal) return;

        this.answered = true;
        this.practiceTotal++;

        const feedback = document.getElementById('practice-feedback');
        const btnNext = document.getElementById('btn-next');
        const tryAnother = document.getElementById('try-another-btn');
        const q = this.currentQuestion;

        // Parse user answer - try numeric comparison first, then string match
        let isCorrect = false;
        if (q.answer !== undefined) {
            // Normalize LaTeX: strip spaces, common wrappers
            const normalize = (s) => String(s).replace(/\\,/g, '').replace(/\s+/g, '').replace(/^\{|\}$/g, '');
            const userNorm = normalize(userVal);
            const ansNorm = normalize(String(q.answer));

            // Try numeric comparison
            const userNum = parseFloat(userNorm);
            const ansNum = parseFloat(ansNorm);
            if (!isNaN(userNum) && !isNaN(ansNum)) {
                isCorrect = Math.abs(userNum - ansNum) < 0.001;
            } else {
                isCorrect = userNorm === ansNorm;
            }

            // Also check acceptAlternatives
            if (!isCorrect && q.accept) {
                isCorrect = q.accept.some(alt => normalize(String(alt)) === userNorm);
            }
        }

        if (isCorrect) {
            this.practiceCorrect++;
            feedback.textContent = 'Correct!';
            feedback.className = 'feedback show correct';
        } else {
            let msg = 'Incorrect.';
            if (q.answer !== undefined) {
                msg += ' The answer is \\(' + q.answer + '\\).';
            }
            feedback.innerHTML = msg;
            feedback.className = 'feedback show incorrect';
            this.typeset(feedback);
        }

        // Update score
        const scoreEl = document.querySelector('.practice-score');
        if (scoreEl) {
            scoreEl.innerHTML = 'Score: <span class="score-val">' +
                this.practiceCorrect + '</span> / ' + this.practiceTotal;
        }

        // Enable next and try another
        btnNext.disabled = false;
        tryAnother.classList.add('show');
    },

    _renderSummary(screen, container) {
        let html = '';
        if (screen.title) html += '<h3>' + screen.title + '</h3>';

        // Show final score if practice was done
        if (this.practiceTotal > 0) {
            html += '<div class="lesson-complete">';
            html += '<div class="final-score">' + this.practiceCorrect + ' / ' + this.practiceTotal + '</div>';
            html += '<p>Practice questions answered correctly</p>';
            html += '</div>';
        }

        if (screen.content) html += screen.content;

        if (screen.points && screen.points.length > 0) {
            html += '<ul class="summary-points">';
            screen.points.forEach(p => {
                html += '<li>' + p + '</li>';
            });
            html += '</ul>';
        }

        container.innerHTML = html;
        this.typeset(container);
    },

    advance() {
        const isLast = this.screenIdx === this.lesson.screens.length - 1;
        if (isLast) {
            this.complete();
            return;
        }
        this.screenIdx++;
        this.renderScreen();
        this.updateProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    back() {
        if (this.screenIdx <= 0) return;
        this.screenIdx--;
        this.renderScreen();
        this.updateProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    updateProgress() {
        const total = this.lesson.screens.length;
        const pct = total > 1 ? (this.screenIdx / (total - 1)) * 100 : 100;
        document.getElementById('progress-fill').style.width = pct + '%';
    },

    complete() {
        // Save completion to localStorage
        const key = 'gcse_lesson_' + this.lessonId;
        const data = {
            completed: true,
            date: new Date().toISOString(),
            score: this.practiceTotal > 0 ? this.practiceCorrect + '/' + this.practiceTotal : null
        };
        localStorage.setItem(key, JSON.stringify(data));

        // Show completion screen
        const content = document.getElementById('lesson-content');
        let html = '<div class="lesson-complete">';
        html += '<span class="check-icon">&#10003;</span>';
        html += '<h3>Lesson Complete</h3>';

        if (this.practiceTotal > 0) {
            html += '<div class="final-score">' + this.practiceCorrect + ' / ' + this.practiceTotal + '</div>';
            html += '<p>Practice questions answered correctly</p>';
        } else {
            html += '<p>Well done - you\'ve completed this lesson.</p>';
        }

        html += '<br><a href="../" class="reveal-btn" style="text-decoration:none">Back to Topics</a>';
        html += '</div>';

        content.innerHTML = html;

        // Hide nav buttons
        document.getElementById('lesson-nav').style.display = 'none';

        // Full progress
        document.getElementById('progress-fill').style.width = '100%';
        document.getElementById('screen-counter').textContent =
            this.lesson.screens.length + ' / ' + this.lesson.screens.length;
    },

    typeset(el) {
        if (!el) return;
        // Wait for KaTeX to be available
        if (typeof renderMathInElement === 'function') {
            renderMathInElement(el, {
                delimiters: [
                    { left: '\\[', right: '\\]', display: true },
                    { left: '\\(', right: '\\)', display: false }
                ],
                throwOnError: false
            });
        } else if (typeof katex !== 'undefined') {
            // Fallback: manual regex replacement
            this._typesetManual(el);
        }
    },

    _typesetManual(el) {
        // Process display math \[...\]
        el.innerHTML = el.innerHTML.replace(/\\\[([\s\S]*?)\\\]/g, (match, tex) => {
            try {
                return katex.renderToString(tex.trim(), { displayMode: true, throwOnError: false });
            } catch (e) {
                return match;
            }
        });
        // Process inline math \(...\)
        el.innerHTML = el.innerHTML.replace(/\\\(([\s\S]*?)\\\)/g, (match, tex) => {
            try {
                return katex.renderToString(tex.trim(), { displayMode: false, throwOnError: false });
            } catch (e) {
                return match;
            }
        });
    }
};
