/* ==============================
   Vectors Trainer - Question Generator
   Edexcel iGCSE Further Pure Mathematics
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

// Render a fraction as stacked HTML
function frac(num, den) {
    return `<span class="math"><span class="frac"><span class="frac-num">${num}</span><span class="frac-den">${den}</span></span></span>`;
}

function op(symbol) {
    return `<span class="op">${symbol}</span>`;
}

function sup(base, exp) {
    return `<span class="math">${base}<sup>${exp}</sup></span>`;
}

// Column vector display
function colVec(x, y) {
    return `<span class="math" style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 6px;font-family:'JetBrains Mono',monospace;font-weight:600;"><span style="font-size:1.6em;line-height:0.8;">(</span><span style="display:flex;flex-direction:column;align-items:center;line-height:1.4;padding:2px 6px;"><span>${x}</span><span>${y}</span></span><span style="font-size:1.6em;line-height:0.8;">)</span></span>`;
}

// Column vector using KaTeX-style parentheses
function colVecKatex(x, y) {
    return `\\begin{pmatrix} ${x} \\\\ ${y} \\end{pmatrix}`;
}

// Parse MathLive LaTeX output into a usable string for answer comparison
function parseLatex(raw) {
    let s = raw.replace(/\\left|\\right/g, '').replace(/\s+/g, '').trim();

    // Normalize sqrt
    s = s.replace(/\\sqrt\{([^}]+)\}/g, 'sqrt($1)');
    s = s.replace(/\\sqrt(\d)/g, 'sqrt($1)');

    // \times, \cdot -> x
    s = s.replace(/\\times/g, 'x').replace(/\\cdot/g, 'x');

    // \frac{...}{...} -> .../...
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

    // \frac12 (single digit)
    const fm2 = s.match(/(-?)\\[cdt]?frac(\d)(\d)/);
    if (fm2) {
        const sign = fm2[1] === '-' ? -1 : 1;
        const num = sign * parseInt(fm2[2]);
        const den = parseInt(fm2[3]);
        const g = gcd(Math.abs(num), Math.abs(den));
        return `${num / g}/${den / g}`;
    }

    // Remove remaining braces
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

// ==============================
// Question Generators
// ==============================

const generators = {

    // --- Vector Operations ---

    'operations': [
        function addVectors() {
            const ax = randInt(-8, 8), ay = randInt(-8, 8);
            const bx = randInt(-8, 8), by = randInt(-8, 8);
            const rx = ax + bx, ry = ay + by;
            return {
                type: 'Vector Operations',
                text: `Find <b>a</b> + <b>b</b> where <b>a</b> = ${colVec(ax, ay)} and <b>b</b> = ${colVec(bx, by)}<br><small style="color:var(--text-muted)">Give your answer as (x,y)</small>`,
                answer: `(${rx},${ry})`,
                accept: [`${rx},${ry}`],
                hint: 'Add corresponding components: top + top, bottom + bottom.',
                explainLatex: [
                    `\\mathbf{a} + \\mathbf{b} = ${colVecKatex(ax, ay)} + ${colVecKatex(bx, by)} = ${colVecKatex(rx, ry)}`
                ]
            };
        },
        function subtractVectors() {
            const ax = randInt(-8, 8), ay = randInt(-8, 8);
            const bx = randInt(-8, 8), by = randInt(-8, 8);
            const rx = ax - bx, ry = ay - by;
            return {
                type: 'Vector Operations',
                text: `Find <b>a</b> - <b>b</b> where <b>a</b> = ${colVec(ax, ay)} and <b>b</b> = ${colVec(bx, by)}<br><small style="color:var(--text-muted)">Give your answer as (x,y)</small>`,
                answer: `(${rx},${ry})`,
                accept: [`${rx},${ry}`],
                hint: 'Subtract corresponding components: top - top, bottom - bottom.',
                explainLatex: [
                    `\\mathbf{a} - \\mathbf{b} = ${colVecKatex(ax, ay)} - ${colVecKatex(bx, by)} = ${colVecKatex(rx, ry)}`
                ]
            };
        },
        function scalarMultiply() {
            const k = pick([-3, -2, -1, 2, 3, 4, 5]);
            const vx = randInt(-6, 6), vy = randInt(-6, 6);
            if (vx === 0 && vy === 0) return scalarMultiply();
            const rx = k * vx, ry = k * vy;
            return {
                type: 'Vector Operations',
                text: `Find <span class="math">${k}</span><b>v</b> where <b>v</b> = ${colVec(vx, vy)}<br><small style="color:var(--text-muted)">Give your answer as (x,y)</small>`,
                answer: `(${rx},${ry})`,
                accept: [`${rx},${ry}`],
                hint: 'Multiply each component by the scalar.',
                explainLatex: [
                    `${k}\\mathbf{v} = ${k} ${colVecKatex(vx, vy)} = ${colVecKatex(rx, ry)}`
                ]
            };
        },
        function resultantVector() {
            const ax = randInt(-5, 5), ay = randInt(-5, 5);
            const bx = randInt(-5, 5), by = randInt(-5, 5);
            const cx = randInt(-5, 5), cy = randInt(-5, 5);
            const rx = ax + bx + cx, ry = ay + by + cy;
            return {
                type: 'Vector Operations',
                text: `Find <b>a</b> + <b>b</b> + <b>c</b> where <b>a</b> = ${colVec(ax, ay)}, <b>b</b> = ${colVec(bx, by)}, <b>c</b> = ${colVec(cx, cy)}<br><small style="color:var(--text-muted)">Give your answer as (x,y)</small>`,
                answer: `(${rx},${ry})`,
                accept: [`${rx},${ry}`],
                hint: 'Add all corresponding components together.',
                explainLatex: [
                    `${colVecKatex(ax, ay)} + ${colVecKatex(bx, by)} + ${colVecKatex(cx, cy)} = ${colVecKatex(rx, ry)}`
                ]
            };
        }
    ],

    // --- Position Vectors ---

    'position': [
        function midpointVector() {
            const ax = randInt(-8, 8), ay = randInt(-8, 8);
            const bx = randInt(-8, 8), by = randInt(-8, 8);
            // Ensure integer midpoint
            if ((ax + bx) % 2 !== 0 || (ay + by) % 2 !== 0) return midpointVector();
            const mx = (ax + bx) / 2, my = (ay + by) / 2;
            return {
                type: 'Position Vectors',
                text: `A has position vector ${colVec(ax, ay)} and B has position vector ${colVec(bx, by)}. Find the position vector of the midpoint of AB.<br><small style="color:var(--text-muted)">Give your answer as (x,y)</small>`,
                answer: `(${mx},${my})`,
                accept: [`${mx},${my}`],
                hint: 'Midpoint position vector = (a + b) / 2. Average the x-components and the y-components.',
                explainLatex: [
                    `\\mathbf{m} = \\frac{1}{2}(\\mathbf{a} + \\mathbf{b}) = \\frac{1}{2}\\left(${colVecKatex(ax, ay)} + ${colVecKatex(bx, by)}\\right)`,
                    `= \\frac{1}{2}${colVecKatex(ax + bx, ay + by)} = ${colVecKatex(mx, my)}`
                ]
            };
        },
        function vectorAB() {
            const ax = randInt(-8, 8), ay = randInt(-8, 8);
            const bx = randInt(-8, 8), by = randInt(-8, 8);
            const abx = bx - ax, aby = by - ay;
            return {
                type: 'Position Vectors',
                text: `A has position vector ${colVec(ax, ay)} and B has position vector ${colVec(bx, by)}. Find the vector <span class="math">AB</span>.<br><small style="color:var(--text-muted)">Give your answer as (x,y)</small>`,
                answer: `(${abx},${aby})`,
                accept: [`${abx},${aby}`],
                hint: 'Vector AB = position of B - position of A = b - a.',
                explainLatex: [
                    `\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a} = ${colVecKatex(bx, by)} - ${colVecKatex(ax, ay)} = ${colVecKatex(abx, aby)}`
                ]
            };
        },
        function vectorBA() {
            const ax = randInt(-8, 8), ay = randInt(-8, 8);
            const bx = randInt(-8, 8), by = randInt(-8, 8);
            const bax = ax - bx, bay = ay - by;
            return {
                type: 'Position Vectors',
                text: `A has position vector ${colVec(ax, ay)} and B has position vector ${colVec(bx, by)}. Find the vector <span class="math">BA</span>.<br><small style="color:var(--text-muted)">Give your answer as (x,y)</small>`,
                answer: `(${bax},${bay})`,
                accept: [`${bax},${bay}`],
                hint: 'Vector BA = position of A - position of B = a - b.',
                explainLatex: [
                    `\\overrightarrow{BA} = \\mathbf{a} - \\mathbf{b} = ${colVecKatex(ax, ay)} - ${colVecKatex(bx, by)} = ${colVecKatex(bax, bay)}`
                ]
            };
        }
    ],

    // --- Magnitude ---

    'magnitude': [
        function magnitudeOfVector() {
            // Pick components that give nice-ish magnitudes
            const pairs = [[3,4],[5,12],[6,8],[8,15],[7,24],[9,12],[4,3],[12,5],[8,6],[15,8]];
            const [x, y] = pick(pairs);
            const sx = pick([-1, 1]) * x;
            const sy = pick([-1, 1]) * y;
            const mag = Math.sqrt(sx * sx + sy * sy);
            return {
                type: 'Magnitude',
                text: `Find the magnitude of the vector ${colVec(sx, sy)}.<br><small style="color:var(--text-muted)">Give an exact integer answer</small>`,
                answer: String(mag),
                hint: 'Magnitude |v| = sqrt(x^2 + y^2).',
                explainLatex: [
                    `|\\mathbf{v}| = \\sqrt{${sx}^2 + ${sy}^2} = \\sqrt{${sx*sx} + ${sy*sy}} = \\sqrt{${sx*sx + sy*sy}} = ${mag}`
                ]
            };
        },
        function magnitudeGeneral() {
            const x = randInt(-9, 9);
            const y = randInt(-9, 9);
            if (x === 0 && y === 0) return magnitudeGeneral();
            const magSq = x * x + y * y;
            const mag = Math.sqrt(magSq);
            const isInteger = Number.isInteger(mag);
            const answer = isInteger ? String(mag) : `sqrt(${magSq})`;
            return {
                type: 'Magnitude',
                text: `Find |<b>v</b>| where <b>v</b> = ${colVec(x, y)}.<br><small style="color:var(--text-muted)">${isInteger ? 'Give an exact answer' : 'Give your answer in surd form sqrt(n)'}</small>`,
                answer: answer,
                accept: isInteger ? [] : [String(round(mag, 2))],
                hint: 'Magnitude |v| = sqrt(x^2 + y^2).',
                explainLatex: [
                    `|\\mathbf{v}| = \\sqrt{(${x})^2 + (${y})^2} = \\sqrt{${x*x} + ${y*y}} = \\sqrt{${magSq}}${isInteger ? ' = ' + mag : ''}`
                ]
            };
        },
        function distanceBetweenPoints() {
            const ax = randInt(-8, 8), ay = randInt(-8, 8);
            const bx = randInt(-8, 8), by = randInt(-8, 8);
            if (ax === bx && ay === by) return distanceBetweenPoints();
            const dx = bx - ax, dy = by - ay;
            const distSq = dx * dx + dy * dy;
            const dist = Math.sqrt(distSq);
            const isInteger = Number.isInteger(dist);
            const answer = isInteger ? String(dist) : `sqrt(${distSq})`;
            return {
                type: 'Magnitude',
                text: `Points A and B have position vectors ${colVec(ax, ay)} and ${colVec(bx, by)}. Find the distance AB.<br><small style="color:var(--text-muted)">${isInteger ? 'Give an exact answer' : 'Give your answer in surd form sqrt(n)'}</small>`,
                answer: answer,
                accept: isInteger ? [] : [String(round(dist, 2))],
                hint: 'Distance = |AB| = sqrt((bx - ax)^2 + (by - ay)^2).',
                explainLatex: [
                    `\\overrightarrow{AB} = ${colVecKatex(dx, dy)}`,
                    `|AB| = \\sqrt{(${dx})^2 + (${dy})^2} = \\sqrt{${distSq}}${isInteger ? ' = ' + dist : ''}`
                ]
            };
        }
    ],

    // --- Unit Vectors ---

    'unit-vectors': [
        function unitVectorNice() {
            // Use Pythagorean triples for clean answers
            const triples = [[3,4,5],[5,12,13],[6,8,10],[8,15,17],[4,3,5],[12,5,13]];
            const [a, b, c] = pick(triples);
            const sx = pick([-1, 1]) * a;
            const sy = pick([-1, 1]) * b;
            // Unit vector = (sx/c, sy/c)
            const g1 = gcd(Math.abs(sx), c);
            const g2 = gcd(Math.abs(sy), c);
            const uxNum = sx / g1, uxDen = c / g1;
            const uyNum = sy / g2, uyDen = c / g2;
            const uxStr = uxDen === 1 ? String(uxNum) : `${uxNum}/${uxDen}`;
            const uyStr = uyDen === 1 ? String(uyNum) : `${uyNum}/${uyDen}`;
            const answer = `(${uxStr},${uyStr})`;
            return {
                type: 'Unit Vectors',
                text: `Find the unit vector in the direction of ${colVec(sx, sy)}.<br><small style="color:var(--text-muted)">Give your answer as (x,y) using fractions</small>`,
                answer: answer,
                accept: [`${uxStr},${uyStr}`],
                hint: 'Unit vector = v / |v|. First find the magnitude, then divide each component by it.',
                explainLatex: [
                    `|\\mathbf{v}| = \\sqrt{${sx}^2 + ${sy}^2} = \\sqrt{${sx*sx + sy*sy}} = ${c}`,
                    `\\hat{\\mathbf{v}} = \\frac{1}{${c}}${colVecKatex(sx, sy)} = ${colVecKatex(`\\frac{${sx}}{${c}}`, `\\frac{${sy}}{${c}}`)}`
                ]
            };
        },
        function unitVectorAxis() {
            const x = pick([-1, 1]) * randInt(1, 10);
            const isHorizontal = Math.random() > 0.5;
            const vx = isHorizontal ? x : 0;
            const vy = isHorizontal ? 0 : x;
            const ux = isHorizontal ? (x > 0 ? 1 : -1) : 0;
            const uy = isHorizontal ? 0 : (x > 0 ? 1 : -1);
            return {
                type: 'Unit Vectors',
                text: `Find the unit vector in the direction of ${colVec(vx, vy)}.<br><small style="color:var(--text-muted)">Give your answer as (x,y)</small>`,
                answer: `(${ux},${uy})`,
                accept: [`${ux},${uy}`],
                hint: 'A unit vector has magnitude 1. Divide the vector by its magnitude.',
                explainLatex: [
                    `|\\mathbf{v}| = ${Math.abs(x)}`,
                    `\\hat{\\mathbf{v}} = \\frac{1}{${Math.abs(x)}}${colVecKatex(vx, vy)} = ${colVecKatex(ux, uy)}`
                ]
            };
        }
    ],

    // --- Geometric Proofs ---

    'proofs': [
        function parallelVectors() {
            const ax = randInt(-4, 4), ay = randInt(-4, 4);
            if (ax === 0 && ay === 0) return parallelVectors();
            const k = pick([-3, -2, 2, 3, 4, 5]);
            const bx = k * ax, by = k * ay;
            return {
                type: 'Geometric Proofs',
                text: `<b>a</b> = ${colVec(ax, ay)} and <b>b</b> = ${colVec(bx, by)}.<br>If <b>b</b> = <i>k</i><b>a</b>, find the value of <i>k</i>.<br><small style="color:var(--text-muted)">This proves the vectors are parallel.</small>`,
                answer: String(k),
                hint: 'If b = ka, then each component of b divided by the corresponding component of a gives k.',
                explainLatex: [
                    `\\mathbf{b} = ${colVecKatex(bx, by)} = ${k}${colVecKatex(ax, ay)} = ${k}\\mathbf{a}`,
                    `k = ${k}`
                ]
            };
        },
        function divisionRatio() {
            const ax = randInt(-6, 6), ay = randInt(-6, 6);
            const bx = randInt(-6, 6), by = randInt(-6, 6);
            if (ax === bx && ay === by) return divisionRatio();
            const m = randInt(1, 4), n = randInt(1, 4);
            if (m === n) return divisionRatio();
            // P divides AB in ratio m:n
            // P = a + (m/(m+n))(b - a) = ((n*a + m*b)) / (m+n)
            const pxNum = n * ax + m * bx;
            const pyNum = n * ay + m * by;
            const den = m + n;
            // Ensure integer result
            if (pxNum % den !== 0 || pyNum % den !== 0) return divisionRatio();
            const px = pxNum / den;
            const py = pyNum / den;
            return {
                type: 'Geometric Proofs',
                text: `A has position vector ${colVec(ax, ay)} and B has position vector ${colVec(bx, by)}. P divides AB in the ratio <span class="math">${m}:${n}</span>. Find the position vector of P.<br><small style="color:var(--text-muted)">Give your answer as (x,y)</small>`,
                answer: `(${px},${py})`,
                accept: [`${px},${py}`],
                hint: `P divides AB in ratio m:n means OP = a + (m/(m+n))(b - a), or equivalently OP = (n*a + m*b)/(m+n).`,
                explainLatex: [
                    `\\overrightarrow{OP} = \\frac{${n}\\mathbf{a} + ${m}\\mathbf{b}}{${m} + ${n}}`,
                    `= \\frac{${n}${colVecKatex(ax, ay)} + ${m}${colVecKatex(bx, by)}}{${den}}`,
                    `= \\frac{1}{${den}}${colVecKatex(pxNum, pyNum)} = ${colVecKatex(px, py)}`
                ]
            };
        },
        function showParallelCheck() {
            // Give two vectors, ask if parallel (yes/no + the scalar)
            const ax = randInt(1, 5), ay = randInt(1, 5);
            const k = pick([2, 3, -2, -3]);
            // Parallel case
            const bx = k * ax, by = k * ay;
            return {
                type: 'Geometric Proofs',
                text: `<b>p</b> = ${colVec(ax, ay)} and <b>q</b> = ${colVec(bx, by)}.<br>Show that <b>q</b> is parallel to <b>p</b> by finding the scalar <i>k</i> such that <b>q</b> = <i>k</i><b>p</b>.`,
                answer: String(k),
                hint: 'Two vectors are parallel if one is a scalar multiple of the other. Check: q_x / p_x = q_y / p_y = k.',
                explainLatex: [
                    `\\frac{${bx}}{${ax}} = ${k}, \\quad \\frac{${by}}{${ay}} = ${k}`,
                    `\\therefore \\mathbf{q} = ${k}\\mathbf{p} \\text{, so they are parallel.}`
                ]
            };
        }
    ]
};

// Default hints per topic
const defaultHints = {
    'Vector Operations': 'Add or subtract corresponding components. For scalar multiplication, multiply each component by the scalar.',
    'Position Vectors': 'Vector AB = b - a (position of B minus position of A). Midpoint = (a + b) / 2.',
    'Magnitude': '|v| = sqrt(x^2 + y^2). Distance between points = magnitude of the vector between them.',
    'Unit Vectors': 'Unit vector = v / |v|. First find the magnitude, then divide each component by it.',
    'Geometric Proofs': 'Parallel vectors: one is a scalar multiple of the other. Section formula: P divides AB in m:n gives OP = (n*a + m*b)/(m+n).'
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

    // Inject math-field
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

    // Reset hint
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

    // Lock input
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
        saveActivityStats('vectors', state, isCorrect);
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
        loadActivityStats('vectors', state);
        updateScore();
    }
    updateStreak(null);
    showQuestion();
}

init();
