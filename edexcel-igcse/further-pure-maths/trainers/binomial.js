/* ==============================
   Binomial Series Trainer - Question Generator
   Edexcel iGCSE Further Pure Maths
   ============================== */

const state = {
    correct: 0,
    total: 0,
    streak: 0,
    maxStreak: 10,
    currentAnswer: null,
    currentAccept: null,
    activeTopic: 'all',
    history: []
};

// DOM
const els = {
    questionType: document.getElementById('question-type'),
    questionText: document.getElementById('question-text'),
    answerInput: null,
    submitBtn: document.getElementById('submit-btn'),
    feedback: document.getElementById('feedback'),
    scoreCorrect: document.getElementById('score-correct'),
    scoreTotal: document.getElementById('score-total'),
    streakDots: document.getElementById('streak-dots'),
    streakLabel: document.getElementById('streak-label'),
    subtopicBar: document.getElementById('subtopic-bar')
};

// ==============================
// Utilities
// ==============================

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function round(n, dp) {
    return Math.round(n * Math.pow(10, dp)) / Math.pow(10, dp);
}

function gcd(a, b) {
    a = Math.abs(a); b = Math.abs(b);
    while (b) { [a, b] = [b, a % b]; }
    return a;
}

function frac(num, den) {
    return `<span class="math"><span class="frac"><span class="frac-num">${num}</span><span class="frac-den">${den}</span></span></span>`;
}

function op(symbol) {
    return `<span class="op">${symbol}</span>`;
}

function sup(base, exp) {
    return `<span class="math">${base}<sup>${exp}</sup></span>`;
}

function parseLatex(raw) {
    let s = raw.replace(/\\left|\\right/g, '').replace(/\s+/g, '').trim();
    s = s.replace(/\\sqrt\{([^}]+)\}/g, 'sqrt($1)');
    s = s.replace(/\\sqrt(\d)/g, 'sqrt($1)');
    s = s.replace(/\\times/g, 'x').replace(/\\cdot/g, 'x');
    const fm = s.match(/(-?)\\[cdt]?frac\{([^}]+)\}\{([^}]+)\}/);
    if (fm) {
        const sign = fm[1] === '-' ? '-' : '';
        const num = fm[2];
        const den = fm[3];
        if (/^-?[\d.]+$/.test(num) && /^-?[\d.]+$/.test(den)) {
            const n = parseFloat(sign + num);
            const d = parseFloat(den);
            const g = gcd(Math.abs(n), Math.abs(d));
            return `${n / g}/${d / g}`;
        }
        return `${sign}${num}/${den}`;
    }
    const fm2 = s.match(/(-?)\\[cdt]?frac(\d)(\d)/);
    if (fm2) {
        const sign = fm2[1] === '-' ? -1 : 1;
        const num = sign * parseInt(fm2[2]);
        const den = parseInt(fm2[3]);
        const g = gcd(Math.abs(num), Math.abs(den));
        return `${num / g}/${den / g}`;
    }
    s = s.replace(/\{(-?[\d.]+)\}/g, '$1');
    s = s.replace(/\{/g, '').replace(/\}/g, '');
    s = s.replace(/(\d+)\\sqrt/g, '$1sqrt');
    s = s.replace(/\\/g, '');
    s = s.replace(/(\d)x(\d)/g, '$1 x $2');
    return s;
}

function normalizeAnswer(s) {
    return s
        .toLowerCase()
        .replace(/\s+/g, '')
        .replace(/\u00d7/g, 'x')
        .replace(/\*/g, 'x')
        .replace(/\u00b7/g, 'x')
        .trim();
}

// nCr - binomial coefficient
function nCr(n, r) {
    if (r < 0 || r > n) return 0;
    if (r === 0 || r === n) return 1;
    if (r > n - r) r = n - r;
    let result = 1;
    for (let i = 0; i < r; i++) {
        result = result * (n - i) / (i + 1);
    }
    return Math.round(result);
}

// Factorial
function factorial(n) {
    if (n <= 1) return 1;
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
}

// ==============================
// Question Generators
// ==============================

const generators = {

    // --- Pascal's Triangle ---

    'pascals': [
        function pascalsRow() {
            const n = randInt(3, 7);
            const row = [];
            for (let r = 0; r <= n; r++) {
                row.push(nCr(n, r));
            }
            const answer = row.join(', ');
            return {
                type: "Pascal's Triangle",
                text: `Write out row ${n} of Pascal's triangle (starting from row 0).<br><small style="color:var(--text-muted)">Separate values with commas, e.g. 1, 3, 3, 1</small>`,
                answer: answer,
                accept: [row.join(','), row.join(' ')],
                hint: `Each entry is the sum of the two entries above it, or use nCr. Row ${n} has ${n + 1} entries.`,
                explainLatex: [
                    `\\text{Row } ${n}: \\binom{${n}}{0}, \\binom{${n}}{1}, \\ldots, \\binom{${n}}{${n}}`,
                    `= ${answer}`
                ]
            };
        },
        function nCrQuestion() {
            const n = randInt(4, 10);
            const r = randInt(1, Math.min(n - 1, 5));
            const answer = nCr(n, r);
            return {
                type: "Pascal's Triangle",
                text: `Calculate ${sup(`<sup>${n}</sup>C`, r)}<br><small style="color:var(--text-muted)">i.e. "from ${n} choose ${r}"</small>`,
                answer: String(answer),
                hint: 'nCr = n! / (r!(n-r)!)',
                explainLatex: [
                    `\\binom{${n}}{${r}} = \\frac{${n}!}{${r}! \\cdot ${n - r}!}`,
                    `= \\frac{${factorial(n)}}{${factorial(r)} \\times ${factorial(n - r)}} = ${answer}`
                ]
            };
        },
        function nCrLarger() {
            const n = randInt(8, 15);
            const r = pick([2, 3]);
            const answer = nCr(n, r);
            return {
                type: "Pascal's Triangle",
                text: `Calculate ${sup(`<sup>${n}</sup>C`, r)}`,
                answer: String(answer),
                hint: 'nCr = n! / (r!(n-r)!). For small r, simplify: nC2 = n(n-1)/2, nC3 = n(n-1)(n-2)/6.',
                explainLatex: r === 2 ? [
                    `\\binom{${n}}{2} = \\frac{${n} \\times ${n - 1}}{2} = \\frac{${n * (n - 1)}}{2} = ${answer}`
                ] : [
                    `\\binom{${n}}{3} = \\frac{${n} \\times ${n - 1} \\times ${n - 2}}{3!} = \\frac{${n * (n - 1) * (n - 2)}}{6} = ${answer}`
                ]
            };
        }
    ],

    // --- Binomial Expansion ---

    'expansion': [
        function expand1PlusX() {
            const n = randInt(2, 5);
            // (1+x)^n - ask for coefficient of x^k
            const k = randInt(1, n);
            const coeff = nCr(n, k);
            return {
                type: 'Binomial Expansion',
                text: `In the expansion of <span class="math">(1 + x)<sup>${n}</sup></span>, find the coefficient of <span class="math">x<sup>${k}</sup></span>.`,
                answer: String(coeff),
                hint: 'The coefficient of x^k in (1+x)^n is nCk.',
                explainLatex: [
                    `(1+x)^{${n}} = \\sum_{k=0}^{${n}} \\binom{${n}}{k} x^k`,
                    `\\text{Coefficient of } x^{${k}} = \\binom{${n}}{${k}} = ${coeff}`
                ]
            };
        },
        function expandAPlusBSmall() {
            const n = randInt(2, 4);
            const a = randInt(1, 3);
            const b = randInt(1, 3);
            // Expand (a+b)^n fully
            const terms = [];
            const termStrs = [];
            for (let k = 0; k <= n; k++) {
                const c = nCr(n, k);
                const aPow = Math.pow(a, n - k);
                const bPow = Math.pow(b, k);
                terms.push(c * aPow * bPow);
            }
            const answer = terms.join(', ');
            // Build LaTeX
            const latexTerms = [];
            for (let k = 0; k <= n; k++) {
                const c = nCr(n, k);
                latexTerms.push(`\\binom{${n}}{${k}} \\cdot ${a}^{${n - k}} \\cdot ${b}^{${k}} = ${terms[k]}`);
            }
            return {
                type: 'Binomial Expansion',
                text: `Expand <span class="math">(${a} + ${b})<sup>${n}</sup></span> using the binomial theorem.<br><small style="color:var(--text-muted)">List the ${n + 1} terms separated by commas</small>`,
                answer: answer,
                accept: [terms.join(','), String(terms.reduce((s, t) => s + t, 0))],
                hint: `Use (a+b)^n = sum of nCk * a^(n-k) * b^k for k = 0 to n.`,
                explainLatex: latexTerms
            };
        },
        function expand1PlusXPoly() {
            // (1+x)^n: write first 4 terms
            const n = randInt(4, 6);
            const t0 = 1;
            const t1 = nCr(n, 1);
            const t2 = nCr(n, 2);
            const t3 = nCr(n, 3);
            const answer = `1 + ${t1}x + ${t2}x^2 + ${t3}x^3`;
            return {
                type: 'Binomial Expansion',
                text: `Write the first 4 terms of the expansion of <span class="math">(1 + x)<sup>${n}</sup></span>.<br><small style="color:var(--text-muted)">Format: 1 + ax + bx^2 + cx^3</small>`,
                answer: answer,
                accept: [
                    `1+${t1}x+${t2}x^2+${t3}x^3`,
                    `1 +${t1}x +${t2}x^2 +${t3}x^3`
                ],
                hint: 'Use nCk for each coefficient: nC0, nC1, nC2, nC3.',
                explainLatex: [
                    `(1+x)^{${n}} = 1 + ${t1}x + ${t2}x^2 + ${t3}x^3 + \\ldots`,
                    `\\text{Coefficients: } \\binom{${n}}{0}=1,\\ \\binom{${n}}{1}=${t1},\\ \\binom{${n}}{2}=${t2},\\ \\binom{${n}}{3}=${t3}`
                ]
            };
        },
        function expand2PlusX() {
            const n = randInt(3, 5);
            // (2+x)^n - find coefficient of x^k
            const k = randInt(1, n - 1);
            const coeff = nCr(n, k) * Math.pow(2, n - k);
            return {
                type: 'Binomial Expansion',
                text: `In the expansion of <span class="math">(2 + x)<sup>${n}</sup></span>, find the coefficient of <span class="math">x<sup>${k}</sup></span>.`,
                answer: String(coeff),
                hint: 'Coefficient of x^k in (a+x)^n is nCk * a^(n-k).',
                explainLatex: [
                    `\\text{Term with } x^{${k}}: \\binom{${n}}{${k}} \\cdot 2^{${n - k}} \\cdot x^{${k}}`,
                    `= ${nCr(n, k)} \\times ${Math.pow(2, n - k)} \\cdot x^{${k}} = ${coeff}x^{${k}}`
                ]
            };
        }
    ],

    // --- Specific Terms ---

    'specific-terms': [
        function coefficientOfXk() {
            const n = randInt(4, 7);
            const a = randInt(1, 3);
            const b = randInt(1, 4);
            const k = randInt(1, n - 1);
            // (a + bx)^n: term with x^k is nCk * a^(n-k) * (bx)^k = nCk * a^(n-k) * b^k * x^k
            const coeff = nCr(n, k) * Math.pow(a, n - k) * Math.pow(b, k);
            return {
                type: 'Specific Terms',
                text: `Find the coefficient of <span class="math">x<sup>${k}</sup></span> in the expansion of <span class="math">(${a} + ${b}x)<sup>${n}</sup></span>.`,
                answer: String(coeff),
                hint: 'The general term is nCk * a^(n-k) * (bx)^k = nCk * a^(n-k) * b^k * x^k.',
                explainLatex: [
                    `\\text{General term: } \\binom{${n}}{${k}} (${a})^{${n - k}} (${b}x)^{${k}}`,
                    `= \\binom{${n}}{${k}} \\cdot ${Math.pow(a, n - k)} \\cdot ${Math.pow(b, k)} \\cdot x^{${k}}`,
                    `= ${nCr(n, k)} \\times ${Math.pow(a, n - k)} \\times ${Math.pow(b, k)} \\cdot x^{${k}} = ${coeff}x^{${k}}`
                ]
            };
        },
        function termIndependentOfX() {
            // (x + c/x)^n where n is even
            const halfN = randInt(2, 4);
            const n = halfN * 2;
            const c = randInt(1, 3);
            // General term: nCk * x^(n-k) * (c/x)^k = nCk * c^k * x^(n-2k)
            // Independent of x when n - 2k = 0, so k = n/2
            const k = n / 2;
            const coeff = nCr(n, k) * Math.pow(c, k);
            return {
                type: 'Specific Terms',
                text: `Find the term independent of <span class="math">x</span> in the expansion of <span class="math">(x + ${c}/x)<sup>${n}</sup></span>.`,
                answer: String(coeff),
                hint: `The general term is nCk * x^(n-k) * (${c}/x)^k = nCk * ${c}^k * x^(n-2k). Set the power of x to 0.`,
                explainLatex: [
                    `\\text{General term: } \\binom{${n}}{k} x^{${n}-k} \\left(\\frac{${c}}{x}\\right)^k = \\binom{${n}}{k} \\cdot ${c}^k \\cdot x^{${n}-2k}`,
                    `\\text{Independent of } x \\text{ when } ${n} - 2k = 0 \\Rightarrow k = ${k}`,
                    `\\text{Term} = \\binom{${n}}{${k}} \\cdot ${c}^{${k}} = ${nCr(n, k)} \\times ${Math.pow(c, k)} = ${coeff}`
                ]
            };
        },
        function coeffWithNegative() {
            const n = randInt(4, 6);
            const a = randInt(1, 3);
            const b = randInt(1, 3);
            const k = randInt(1, n - 1);
            // (a - bx)^n: term with x^k is nCk * a^(n-k) * (-bx)^k = nCk * a^(n-k) * (-b)^k * x^k
            const coeff = nCr(n, k) * Math.pow(a, n - k) * Math.pow(-b, k);
            return {
                type: 'Specific Terms',
                text: `Find the coefficient of <span class="math">x<sup>${k}</sup></span> in the expansion of <span class="math">(${a} - ${b}x)<sup>${n}</sup></span>.`,
                answer: String(coeff),
                hint: 'Be careful with signs. The general term is nCk * a^(n-k) * (-b)^k * x^k.',
                explainLatex: [
                    `\\text{General term: } \\binom{${n}}{${k}} (${a})^{${n - k}} (-${b}x)^{${k}}`,
                    `= ${nCr(n, k)} \\cdot ${Math.pow(a, n - k)} \\cdot (${Math.pow(-b, k)}) \\cdot x^{${k}}`,
                    `= ${coeff}x^{${k}}`
                ]
            };
        }
    ],

    // --- Applications ---

    'applications': [
        function binomialApprox() {
            // Use (1+x)^n to approximate values like 1.01^10
            const n = pick([5, 6, 8, 10]);
            const xVal = pick([0.01, 0.02, 0.05, -0.01, -0.02]);
            // First 3 terms: 1 + nx + n(n-1)/2 * x^2
            const t0 = 1;
            const t1 = n * xVal;
            const t2 = nCr(n, 2) * xVal * xVal;
            const approx = round(t0 + t1 + t2, 6);
            const base = round(1 + xVal, 2);
            const answer = String(approx);
            return {
                type: 'Applications',
                text: `Use the first 3 terms of the binomial expansion to approximate <span class="math">(${base})<sup>${n}</sup></span>.<br><small style="color:var(--text-muted)">Give your answer to 6 d.p. if needed</small>`,
                answer: answer,
                accept: [String(round(approx, 4)), String(round(approx, 5))],
                hint: `Write ${base} as (1 + ${xVal}), then use (1+x)^n approx 1 + nx + n(n-1)/2 x^2.`,
                explainLatex: [
                    `(${base})^{${n}} = (1 + ${xVal})^{${n}}`,
                    `\\approx 1 + ${n}(${xVal}) + \\frac{${n}(${n - 1})}{2}(${xVal})^2`,
                    `= 1 + ${round(t1, 6)} + ${round(t2, 6)}`,
                    `= ${approx}`
                ]
            };
        },
        function estimateValue() {
            // Approximate something like 2.01^4 using (2+0.01)^4
            const a = pick([2, 3]);
            const delta = pick([0.01, 0.02, -0.01, -0.02, 0.05]);
            const n = randInt(3, 5);
            const base = round(a + delta, 2);
            // (a + delta)^n: first 3 terms
            const t0 = Math.pow(a, n);
            const t1 = nCr(n, 1) * Math.pow(a, n - 1) * delta;
            const t2 = nCr(n, 2) * Math.pow(a, n - 2) * delta * delta;
            const approx = round(t0 + t1 + t2, 4);
            return {
                type: 'Applications',
                text: `Use the binomial expansion (first 3 terms) to estimate <span class="math">(${base})<sup>${n}</sup></span>.<br><small style="color:var(--text-muted)">Give your answer to 4 d.p.</small>`,
                answer: String(approx),
                accept: [String(round(approx, 2)), String(round(approx, 3))],
                hint: `Write ${base} as (${a} + ${delta}), then expand (${a} + ${delta})^${n} using the first 3 terms.`,
                explainLatex: [
                    `(${base})^{${n}} = (${a} + ${delta})^{${n}}`,
                    `\\approx ${a}^{${n}} + \\binom{${n}}{1} \\cdot ${a}^{${n - 1}} \\cdot ${delta} + \\binom{${n}}{2} \\cdot ${a}^{${n - 2}} \\cdot (${delta})^2`,
                    `= ${t0} + ${round(t1, 6)} + ${round(t2, 6)}`,
                    `\\approx ${approx}`
                ]
            };
        },
        function findConstantTerm() {
            // (1 + kx)^n given a condition
            const n = randInt(3, 5);
            const k = randInt(1, 4);
            // Coefficient of x^2 = nC2 * k^2
            const coeffX2 = nCr(n, 2) * k * k;
            return {
                type: 'Applications',
                text: `In the expansion of <span class="math">(1 + ${k}x)<sup>${n}</sup></span>, find the coefficient of <span class="math">x<sup>2</sup></span>.`,
                answer: String(coeffX2),
                hint: 'Coefficient of x^2 is nC2 * k^2.',
                explainLatex: [
                    `\\text{Coefficient of } x^2 = \\binom{${n}}{2} \\cdot ${k}^2`,
                    `= ${nCr(n, 2)} \\times ${k * k} = ${coeffX2}`
                ]
            };
        },
        function sumOfCoefficients() {
            // Sum of all coefficients of (1+x)^n = 2^n (set x=1)
            const n = randInt(4, 10);
            const answer = Math.pow(2, n);
            return {
                type: 'Applications',
                text: `Find the sum of all the coefficients in the expansion of <span class="math">(1 + x)<sup>${n}</sup></span>.<br><small style="color:var(--text-muted)">Hint: what value of x gives the sum of all coefficients?</small>`,
                answer: String(answer),
                hint: 'Set x = 1 to find the sum of all coefficients.',
                explainLatex: [
                    `\\text{Set } x = 1: (1+1)^{${n}} = 2^{${n}} = ${answer}`,
                    `\\text{So the sum of all coefficients is } ${answer}.`
                ]
            };
        }
    ]
};

// Default hints per topic
const defaultHints = {
    "Pascal's Triangle": "Each entry in Pascal's triangle is nCr = n!/(r!(n-r)!). Each entry is the sum of the two above.",
    'Binomial Expansion': '(a+b)^n = sum of nCk * a^(n-k) * b^k for k = 0 to n.',
    'Specific Terms': 'The general term in (a+bx)^n is nCk * a^(n-k) * (bx)^k. Match the power of x to find k.',
    'Applications': 'For approximations, write the base as (a + small), expand, and use the first few terms.'
};

// ==============================
// Question Flow
// ==============================

function generateQuestion() {
    const topics = state.activeTopic === 'all'
        ? Object.keys(generators)
        : [state.activeTopic];
    const topic = pick(topics);
    const gen = pick(generators[topic]);
    return gen();
}

function showQuestion() {
    const q = generateQuestion();
    state.currentQ = q;
    state.currentAnswer = q.answer.toLowerCase().trim();
    state.currentAccept = (q.accept || []).map(a => a.toLowerCase().trim());
    state.currentHint = q.hint || defaultHints[q.type] || '';
    state.currentExplain = q.explain || '';
    state.currentExplainLatex = q.explainLatex || null;

    els.questionType.textContent = q.type;
    els.questionText.innerHTML = q.text;
    els.feedback.textContent = '';
    els.feedback.className = 'feedback';

    document.getElementById('answer-section').innerHTML =
        '<math-field class="answer-input" id="answer-input" placeholder="Your answer..."></math-field>' +
        '<button class="submit-btn" id="submit-btn">Check</button>';

    setTimeout(() => {
        const mf = document.getElementById('answer-input');
        if (mf) {
            els.answerInput = mf;
            mf.focus();
            mf.addEventListener('keydown', e => {
                if (e.key === 'Enter') { e.preventDefault(); checkAnswer(); }
            });
        }
        document.getElementById('submit-btn')?.addEventListener('click', () => checkAnswer());
    }, 200);

    const hintBtn = document.getElementById('hint-btn');
    const hintText = document.getElementById('hint-text');
    if (hintBtn) { hintBtn.classList.remove('used'); hintBtn.textContent = 'Show hint'; }
    if (hintText) { hintText.classList.remove('show'); hintText.textContent = ''; }
}

let waitingForNext = false;
let lastAnswerTime = 0;

function checkAnswer() {
    if (waitingForNext) {
        if (Date.now() - lastAnswerTime < 250) return;
        waitingForNext = false;
        showQuestion();
        return;
    }

    if (!els.answerInput) return;
    const rawValue = els.answerInput.value.trim();
    if (!rawValue) return;
    const userAnswer = normalizeAnswer(parseLatex(rawValue));
    if (!userAnswer) return;

    state.total++;
    const normalizedCorrect = normalizeAnswer(state.currentAnswer);
    const normalizedAccept = state.currentAccept.map(normalizeAnswer);
    const isCorrect = userAnswer === normalizedCorrect ||
        normalizedAccept.includes(userAnswer);

    els.answerInput.disabled = true;
    els.answerInput.style.opacity = '0.5';

    let explainHtml = '';
    if (state.currentExplainLatex && typeof katex !== 'undefined') {
        const lines = state.currentExplainLatex.map(line => {
            try { return katex.renderToString(line, { throwOnError: false, displayMode: true }); }
            catch(e) { return line; }
        }).join('');
        explainHtml = `<div class="explain-box">${lines}</div>`;
    } else if (state.currentExplain) {
        explainHtml = `<div class="explain-box">${state.currentExplain}</div>`;
    } else if (!isCorrect) {
        explainHtml = `<div class="explain-box">${state.currentHint || 'Review this topic and try again.'}</div>`;
    }

    if (isCorrect) {
        state.correct++;
        state.streak++;
        els.feedback.innerHTML = `Correct!${explainHtml}<span class="next-hint">Enter for next</span>`;
        els.feedback.className = 'feedback correct';
    } else {
        state.streak = 0;
        els.feedback.innerHTML = `Incorrect. Answer: <span class="answer-reveal">${state.currentAnswer}</span>${explainHtml}<span class="next-hint">Enter for next</span>`;
        els.feedback.className = 'feedback incorrect';
        els.answerInput.classList.add('shake');
        setTimeout(() => els.answerInput.classList.remove('shake'), 400);
    }

    const btn = document.getElementById('submit-btn');
    if (btn) { btn.textContent = 'Next'; }

    updateScore();
    updateStreak(isCorrect);

    if (typeof saveActivityStats === 'function') {
        saveActivityStats('binomial', state, isCorrect);
    }

    waitingForNext = true;
    lastAnswerTime = Date.now();
}

function updateScore() {
    els.scoreCorrect.textContent = state.correct;
    els.scoreTotal.textContent = state.total;
    if (state.total > 0) {
        const pct = Math.round(state.correct / state.total * 100);
        els.streakLabel.textContent = `${state.total} Qs - ${pct}% accuracy`;
    }
}

function updateStreak(hit) {
    state.history.push(hit);
    if (state.history.length > state.maxStreak) state.history.shift();

    els.streakDots.innerHTML = '';
    for (let i = 0; i < state.maxStreak; i++) {
        const dot = document.createElement('span');
        dot.className = 'streak-dot';
        if (i < state.history.length) {
            dot.classList.add(state.history[i] ? 'hit' : 'miss');
        }
        els.streakDots.appendChild(dot);
    }
}

// ==============================
// Events
// ==============================

document.getElementById('hint-btn')?.addEventListener('click', () => {
    const hintBtn = document.getElementById('hint-btn');
    const hintText = document.getElementById('hint-text');
    if (!state.currentHint || hintBtn.classList.contains('used')) return;
    hintBtn.classList.add('used');
    hintBtn.textContent = 'Hint shown';
    hintText.textContent = state.currentHint;
    hintText.classList.add('show');
});

els.subtopicBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.subtopic-btn');
    if (!btn) return;

    els.subtopicBar.querySelectorAll('.subtopic-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeTopic = btn.dataset.topic;
    state.correct = 0;
    state.total = 0;
    state.streak = 0;
    state.history = [];
    updateScore();
    els.streakDots.innerHTML = '';
    els.streakLabel.textContent = 'Streak: 0';
    showQuestion();
});

// Init
function init() {
    if (typeof loadActivityStats === 'function') {
        loadActivityStats('binomial', state);
        updateScore();
    }
    updateStreak(null);
    showQuestion();
}

init();
