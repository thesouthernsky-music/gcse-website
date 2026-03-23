/* ==============================
   GCSE Hub - Desmos Calculator
   Draggable, resizable scientific calc
   + Copy to Workings (KaTeX)
   ============================== */

(function () {
    const calcBtn = document.getElementById('calc-btn');
    const calcModal = document.getElementById('calc-modal');
    const calcClose = document.getElementById('calc-close-btn');
    const calcTitlebar = document.getElementById('calc-titlebar');
    const calcDegBtn = document.getElementById('calc-deg-btn');
    const calcResize = document.getElementById('calc-resize-handle');
    const calcContainer = document.getElementById('calc-container');
    const copyCalcBtn = document.getElementById('copy-calc-btn');

    if (!calcBtn || !calcModal) return;

    let desmosCalc = null;
    let degreeMode = true;

    // Expose globally for copy function
    window.desmosCalc = null;

    // --- Open / Close ---

    function openCalc() {
        const prevFocus = document.activeElement;
        calcModal.classList.add('show');
        calcBtn.classList.add('active');

        if (!desmosCalc) {
            desmosCalc = Desmos.GraphingCalculator(calcContainer, {
                settingsMenu: false,
                border: false,
                degreeMode: true,
                expressions: true,
                keypad: true,
                graphpaper: false,
                zoomButtons: false,
                showResetButtonOnGraphpaper: false
            });
            window.desmosCalc = desmosCalc;
        }

        // Desmos steals focus - restore it
        if (prevFocus && ['INPUT', 'TEXTAREA', 'MATH-FIELD'].includes(prevFocus.tagName)) {
            setTimeout(() => { try { prevFocus.focus(); } catch (e) {} }, 300);
        }
    }

    function closeCalc() {
        calcModal.classList.remove('show');
        calcBtn.classList.remove('active');
    }

    calcBtn.addEventListener('click', () => {
        calcModal.classList.contains('show') ? closeCalc() : openCalc();
    });

    calcClose.addEventListener('click', closeCalc);

    // --- DEG/RAD toggle ---

    calcDegBtn.addEventListener('click', () => {
        degreeMode = !degreeMode;
        if (desmosCalc) {
            desmosCalc.updateSettings({ degreeMode });
        }
        calcDegBtn.textContent = degreeMode ? 'DEG' : 'RAD';
        calcDegBtn.classList.toggle('rad-mode', !degreeMode);
    });

    // --- Copy Calculator to Workings ---

    if (copyCalcBtn) {
        copyCalcBtn.addEventListener('click', () => {
            copyCalcToWorkout('workout-area');
        });
    }

    function copyCalcToWorkout(workoutId) {
        if (!window.desmosCalc) {
            showFlash('Open the calculator first!');
            return;
        }
        const workout = document.getElementById(workoutId);
        if (!workout) return;

        try {
            const state = typeof window.desmosCalc.getState === 'function' ? window.desmosCalc.getState() : {};
            const exprs = state.expressions?.list || [];
            const validExprs = exprs.filter(e => e.latex && e.latex.trim());

            if (validExprs.length === 0) {
                showFlash('No expressions in calculator. Type something first!');
                return;
            }

            const analysis = window.desmosCalc.expressionAnalysis || {};

            const box = document.createElement('div');
            box.style.cssText = 'background:rgba(0,229,199,0.05);border:1px solid rgba(0,229,199,0.15);border-radius:8px;padding:12px;margin:8px 0;';

            validExprs.forEach(e => {
                const line = document.createElement('div');
                line.style.cssText = 'margin:6px 0;font-size:1.1em;display:flex;align-items:center;gap:8px;flex-wrap:wrap;';

                const exprSpan = document.createElement('span');
                if (typeof katex !== 'undefined') {
                    exprSpan.innerHTML = katex.renderToString(e.latex, { throwOnError: false, displayMode: false });
                } else {
                    exprSpan.textContent = e.latex;
                }
                line.appendChild(exprSpan);

                // Try to get evaluated value
                let resolved = false;
                if (e.id && analysis[e.id] && analysis[e.id].evaluation !== undefined) {
                    const val = analysis[e.id].evaluation;
                    if (typeof val === 'number' && !isNaN(val)) {
                        const valSpan = document.createElement('span');
                        valSpan.style.cssText = 'color:#8888a0;margin-left:8px;';
                        const formatted = Number.isInteger(val) ? String(val) : val.toFixed(6).replace(/\.?0+$/, '');
                        if (typeof katex !== 'undefined') {
                            valSpan.innerHTML = katex.renderToString('= ' + formatted, { throwOnError: false });
                        } else {
                            valSpan.textContent = '= ' + formatted;
                        }
                        line.appendChild(valSpan);
                        resolved = true;
                    }
                }

                if (!resolved) {
                    try {
                        const helper = window.desmosCalc.HelperExpression({ latex: e.latex });
                        helper.observe('numericValue', () => {
                            const val = helper.numericValue;
                            if (val !== undefined && !isNaN(val)) {
                                const valSpan = document.createElement('span');
                                valSpan.style.cssText = 'color:#8888a0;margin-left:8px;';
                                const formatted = Number.isInteger(val) ? String(val) : val.toFixed(6).replace(/\.?0+$/, '');
                                if (typeof katex !== 'undefined') {
                                    valSpan.innerHTML = katex.renderToString('= ' + formatted, { throwOnError: false });
                                } else {
                                    valSpan.textContent = '= ' + formatted;
                                }
                                line.appendChild(valSpan);
                            }
                            helper.unobserve('numericValue');
                        });
                    } catch (evalErr) { /* ignore */ }
                }

                box.appendChild(line);
            });

            workout.appendChild(box);
            workout.focus();
            showFlash('Copied!');
        } catch (err) {
            console.error('Copy error:', err);
            showFlash('Error copying: ' + err.message);
        }
    }

    function showFlash(msg) {
        const flash = document.createElement('div');
        flash.textContent = msg;
        flash.style.cssText = 'position:fixed;top:20px;left:50%;transform:translateX(-50%);background:#16161f;border:1px solid #00e5c7;color:#00e5c7;padding:8px 20px;border-radius:8px;font-size:0.85rem;font-weight:600;z-index:10000;animation:fadeUp 0.3s ease;';
        document.body.appendChild(flash);
        setTimeout(() => flash.remove(), 2000);
    }

    // --- Drag ---

    let isDragging = false;
    let dragStartX, dragStartY, modalStartX, modalStartY;

    calcTitlebar.addEventListener('mousedown', (e) => {
        if (e.target === calcClose || e.target === calcDegBtn) return;
        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        const rect = calcModal.getBoundingClientRect();
        modalStartX = rect.left;
        modalStartY = rect.top;
        calcModal.style.right = 'auto';
        calcModal.style.bottom = 'auto';
        calcModal.style.left = modalStartX + 'px';
        calcModal.style.top = modalStartY + 'px';
        document.body.style.userSelect = 'none';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - dragStartX;
        const dy = e.clientY - dragStartY;
        calcModal.style.left = (modalStartX + dx) + 'px';
        calcModal.style.top = (modalStartY + dy) + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            document.body.style.userSelect = '';
        }
    });

    // --- Resize ---

    let isResizing = false;
    let resizeStartX, resizeStartY, startWidth, startHeight;

    calcResize.addEventListener('mousedown', (e) => {
        isResizing = true;
        resizeStartX = e.clientX;
        resizeStartY = e.clientY;
        startWidth = calcModal.offsetWidth;
        startHeight = calcModal.offsetHeight;
        document.body.style.userSelect = 'none';
        e.stopPropagation();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        const dx = e.clientX - resizeStartX;
        const dy = e.clientY - resizeStartY;
        const newW = Math.max(280, startWidth + dx);
        const newH = Math.max(300, startHeight + dy);
        calcModal.style.width = newW + 'px';
        calcModal.style.height = newH + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (isResizing) {
            isResizing = false;
            document.body.style.userSelect = '';
        }
    });

    // --- Keyboard shortcut: Escape to close ---

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && calcModal.classList.contains('show')) {
            closeCalc();
        }
    });
})();
