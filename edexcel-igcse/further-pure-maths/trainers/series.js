/* ==============================
   Series Trainer - Question Generator
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

// Format a fraction string, simplifying if possible
function simplifiedFrac(num, den) {
    if (den < 0) { num = -num; den = -den; }
    const g = gcd(Math.abs(num), Math.abs(den));
    num /= g; den /= g;
    if (den === 1) return String(num);
    return `${num}/${den}`;
}

// ==============================
// Question Generators
// ==============================

const generators = {

    // --- Arithmetic Sequences ---

    'arith-seq': [
        function findNthTermArith() {
            const a = randInt(-10, 15);
            const d = randInt(-8, 8);
            if (d === 0) return findNthTermArith();
            const n = randInt(5, 20);
            const answer = a + (n - 1) * d;
            return {
                type: 'Arithmetic Sequences',
                text: `An arithmetic sequence has first term <span class="math">a = ${a}</span> and common difference <span class="math">d = ${d}</span>. Find the ${n}th term.`,
                answer: String(answer),
                hint: 'Use the formula: nth term = a + (n-1)d',
                explainLatex: [
                    `u_n = a + (n-1)d`,
                    `u_{${n}} = ${a} + (${n}-1)(${d})`,
                    `u_{${n}} = ${a} + ${(n - 1) * d} = ${answer}`
                ]
            };
        },
        function findGivenTermArith() {
            const a = randInt(1, 10);
            const d = randInt(2, 7);
            const n = randInt(3, 10);
            const term = a + (n - 1) * d;
            // Ask for a or d given the nth term
            const askForA = Math.random() > 0.5;
            if (askForA) {
                return {
                    type: 'Arithmetic Sequences',
                    text: `An arithmetic sequence has common difference <span class="math">d = ${d}</span> and the ${n}th term is <span class="math">${term}</span>. Find the first term.`,
                    answer: String(a),
                    hint: 'Rearrange: a = nth term - (n-1)d',
                    explainLatex: [
                        `u_n = a + (n-1)d`,
                        `${term} = a + (${n}-1)(${d})`,
                        `${term} = a + ${(n - 1) * d}`,
                        `a = ${term} - ${(n - 1) * d} = ${a}`
                    ]
                };
            } else {
                return {
                    type: 'Arithmetic Sequences',
                    text: `An arithmetic sequence has first term <span class="math">a = ${a}</span> and the ${n}th term is <span class="math">${term}</span>. Find the common difference.`,
                    answer: String(d),
                    hint: 'Rearrange: d = (nth term - a) / (n-1)',
                    explainLatex: [
                        `u_n = a + (n-1)d`,
                        `${term} = ${a} + (${n}-1)d`,
                        `${term - a} = ${n - 1}d`,
                        `d = \\frac{${term - a}}{${n - 1}} = ${d}`
                    ]
                };
            }
        },
        function findNForTermArith() {
            const a = randInt(1, 10);
            const d = randInt(2, 6);
            const n = randInt(8, 25);
            const term = a + (n - 1) * d;
            return {
                type: 'Arithmetic Sequences',
                text: `An arithmetic sequence has first term <span class="math">${a}</span> and common difference <span class="math">${d}</span>. Which term has value <span class="math">${term}</span>?`,
                answer: String(n),
                hint: 'Rearrange: n = (term - a)/d + 1',
                explainLatex: [
                    `u_n = a + (n-1)d`,
                    `${term} = ${a} + (n-1)(${d})`,
                    `${term - a} = ${d}(n-1)`,
                    `n - 1 = \\frac{${term - a}}{${d}} = ${n - 1}`,
                    `n = ${n}`
                ]
            };
        }
    ],

    // --- Arithmetic Series ---

    'arith-series': [
        function sumFirstNArith() {
            const a = randInt(1, 10);
            const d = randInt(1, 6);
            const n = randInt(5, 20);
            const sum = n / 2 * (2 * a + (n - 1) * d);
            return {
                type: 'Arithmetic Series',
                text: `Find the sum of the first <span class="math">${n}</span> terms of an arithmetic series with <span class="math">a = ${a}</span> and <span class="math">d = ${d}</span>.`,
                answer: String(sum),
                hint: 'Use S_n = n/2 (2a + (n-1)d)',
                explainLatex: [
                    `S_n = \\frac{n}{2}(2a + (n-1)d)`,
                    `S_{${n}} = \\frac{${n}}{2}(2(${a}) + (${n}-1)(${d}))`,
                    `S_{${n}} = \\frac{${n}}{2}(${2 * a} + ${(n - 1) * d})`,
                    `S_{${n}} = \\frac{${n}}{2} \\times ${2 * a + (n - 1) * d} = ${sum}`
                ]
            };
        },
        function findNGivenSumArith() {
            const a = randInt(1, 5);
            const d = randInt(1, 4);
            const n = randInt(5, 15);
            const sum = n / 2 * (2 * a + (n - 1) * d);
            return {
                type: 'Arithmetic Series',
                text: `An arithmetic series has <span class="math">a = ${a}</span> and <span class="math">d = ${d}</span>. The sum of the first <span class="math">n</span> terms is <span class="math">${sum}</span>. Find <span class="math">n</span>.`,
                answer: String(n),
                hint: 'Set up S_n = n/2 (2a + (n-1)d) = given sum, then solve the quadratic in n.',
                explainLatex: [
                    `S_n = \\frac{n}{2}(2(${a}) + (n-1)(${d})) = ${sum}`,
                    `\\frac{n}{2}(${2 * a} + ${d}n - ${d}) = ${sum}`,
                    `\\frac{n}{2}(${2 * a - d} + ${d}n) = ${sum}`,
                    `n = ${n}`
                ]
            };
        },
        function sumFirstLastArith() {
            const a = randInt(1, 10);
            const d = randInt(2, 5);
            const n = randInt(6, 15);
            const last = a + (n - 1) * d;
            const sum = n / 2 * (a + last);
            return {
                type: 'Arithmetic Series',
                text: `An arithmetic series has first term <span class="math">${a}</span>, last term <span class="math">${last}</span>, and <span class="math">${n}</span> terms. Find the sum.`,
                answer: String(sum),
                hint: 'Use S_n = n/2 (first + last)',
                explainLatex: [
                    `S_n = \\frac{n}{2}(a + l)`,
                    `S_{${n}} = \\frac{${n}}{2}(${a} + ${last})`,
                    `S_{${n}} = \\frac{${n}}{2} \\times ${a + last} = ${sum}`
                ]
            };
        }
    ],

    // --- Geometric Sequences ---

    'geo-seq': [
        function findNthTermGeo() {
            const a = randInt(2, 10);
            const r = pick([2, 3, -2, -3]);
            const n = randInt(3, 7);
            const answer = a * Math.pow(r, n - 1);
            return {
                type: 'Geometric Sequences',
                text: `A geometric sequence has first term <span class="math">a = ${a}</span> and common ratio <span class="math">r = ${r}</span>. Find the ${n}th term.`,
                answer: String(answer),
                hint: 'Use the formula: nth term = ar^(n-1)',
                explainLatex: [
                    `u_n = ar^{n-1}`,
                    `u_{${n}} = ${a} \\times ${r < 0 ? '(' + r + ')' : r}^{${n - 1}}`,
                    `u_{${n}} = ${a} \\times ${Math.pow(r, n - 1)} = ${answer}`
                ]
            };
        },
        function findRatioGeo() {
            const a = randInt(2, 8);
            const r = pick([2, 3, -2]);
            const n1 = randInt(2, 4);
            const n2 = n1 + 1;
            const term1 = a * Math.pow(r, n1 - 1);
            const term2 = a * Math.pow(r, n2 - 1);
            return {
                type: 'Geometric Sequences',
                text: `In a geometric sequence, the ${n1}th term is <span class="math">${term1}</span> and the ${n2}th term is <span class="math">${term2}</span>. Find the common ratio.`,
                answer: String(r),
                hint: 'Divide the (n+1)th term by the nth term to find r.',
                explainLatex: [
                    `r = \\frac{u_{${n2}}}{u_{${n1}}} = \\frac{${term2}}{${term1}} = ${r}`
                ]
            };
        },
        function findTermGeoFrac() {
            const a = randInt(2, 8);
            const rChoices = [
                { num: 1, den: 2 },
                { num: 1, den: 3 },
                { num: 2, den: 3 },
                { num: 1, den: 4 },
                { num: 3, den: 4 }
            ];
            const rObj = pick(rChoices);
            const n = randInt(2, 5);
            // Compute ar^(n-1) as fraction: a * rNum^(n-1) / rDen^(n-1)
            const numPow = Math.pow(rObj.num, n - 1);
            const denPow = Math.pow(rObj.den, n - 1);
            const ansNum = a * numPow;
            const ansDen = denPow;
            const answer = simplifiedFrac(ansNum, ansDen);
            return {
                type: 'Geometric Sequences',
                text: `A geometric sequence has first term <span class="math">a = ${a}</span> and common ratio <span class="math">r = </span>${frac(rObj.num, rObj.den)}. Find the ${n}th term.<br><small style="color:var(--text-muted)">Give your answer as a fraction if needed</small>`,
                answer: answer,
                hint: 'Use nth term = ar^(n-1). Keep as a fraction.',
                explainLatex: [
                    `u_n = ar^{n-1}`,
                    `u_{${n}} = ${a} \\times \\left(\\frac{${rObj.num}}{${rObj.den}}\\right)^{${n - 1}}`,
                    `u_{${n}} = ${a} \\times \\frac{${numPow}}{${denPow}} = ${answer.includes('/') ? '\\frac{' + answer.split('/')[0] + '}{' + answer.split('/')[1] + '}' : answer}`
                ]
            };
        }
    ],

    // --- Geometric Series ---

    'geo-series': [
        function sumNGeometric() {
            const a = randInt(2, 8);
            const r = pick([2, 3]);
            const n = randInt(4, 8);
            const rn = Math.pow(r, n);
            const sum = a * (rn - 1) / (r - 1);
            return {
                type: 'Geometric Series',
                text: `Find the sum of the first <span class="math">${n}</span> terms of a geometric series with <span class="math">a = ${a}</span> and <span class="math">r = ${r}</span>.`,
                answer: String(sum),
                hint: 'Use S_n = a(r^n - 1)/(r - 1) when r > 1',
                explainLatex: [
                    `S_n = \\frac{a(r^n - 1)}{r - 1}`,
                    `S_{${n}} = \\frac{${a}(${r}^{${n}} - 1)}{${r} - 1}`,
                    `S_{${n}} = \\frac{${a}(${rn} - 1)}{${r - 1}}`,
                    `S_{${n}} = \\frac{${a} \\times ${rn - 1}}{${r - 1}} = ${sum}`
                ]
            };
        },
        function sumNGeometricFrac() {
            const a = randInt(4, 16);
            const rChoices = [
                { num: 1, den: 2 },
                { num: 1, den: 3 },
                { num: 2, den: 3 },
                { num: 3, den: 4 }
            ];
            const rObj = pick(rChoices);
            const n = randInt(3, 6);
            // S_n = a(1 - r^n)/(1 - r) with |r| < 1
            const rn_num = Math.pow(rObj.num, n);
            const rn_den = Math.pow(rObj.den, n);
            // 1 - r^n = (rn_den - rn_num) / rn_den
            // 1 - r = (den - num) / den
            // S_n = a * ((rn_den - rn_num) / rn_den) / ((den - num) / den)
            //      = a * (rn_den - rn_num) * den / (rn_den * (den - num))
            const topNum = a * (rn_den - rn_num) * rObj.den;
            const topDen = rn_den * (rObj.den - rObj.num);
            const answer = simplifiedFrac(topNum, topDen);
            return {
                type: 'Geometric Series',
                text: `Find the sum of the first <span class="math">${n}</span> terms of a geometric series with <span class="math">a = ${a}</span> and <span class="math">r = </span>${frac(rObj.num, rObj.den)}.<br><small style="color:var(--text-muted)">Give your answer as a fraction if needed</small>`,
                answer: answer,
                hint: 'Use S_n = a(1 - r^n)/(1 - r) when |r| < 1',
                explainLatex: [
                    `S_n = \\frac{a(1 - r^n)}{1 - r}`,
                    `S_{${n}} = \\frac{${a}\\left(1 - \\left(\\frac{${rObj.num}}{${rObj.den}}\\right)^{${n}}\\right)}{1 - \\frac{${rObj.num}}{${rObj.den}}}`,
                    `S_{${n}} = ${answer.includes('/') ? '\\frac{' + answer.split('/')[0] + '}{' + answer.split('/')[1] + '}' : answer}`
                ]
            };
        },
        function sumNGeometricNeg() {
            const a = randInt(2, 10);
            const r = pick([-2, -3]);
            const n = randInt(4, 7);
            const rn = Math.pow(r, n);
            // S_n = a(1 - r^n)/(1 - r)
            const sum = a * (1 - rn) / (1 - r);
            return {
                type: 'Geometric Series',
                text: `Find the sum of the first <span class="math">${n}</span> terms of a geometric series with <span class="math">a = ${a}</span> and <span class="math">r = ${r}</span>.`,
                answer: String(sum),
                hint: 'Use S_n = a(1 - r^n)/(1 - r). Be careful with negative r.',
                explainLatex: [
                    `S_n = \\frac{a(1 - r^n)}{1 - r}`,
                    `S_{${n}} = \\frac{${a}(1 - (${r})^{${n}})}{1 - (${r})}`,
                    `S_{${n}} = \\frac{${a}(1 - ${rn})}{${1 - r}}`,
                    `S_{${n}} = \\frac{${a} \\times ${1 - rn}}{${1 - r}} = ${sum}`
                ]
            };
        }
    ],

    // --- Sum to Infinity ---

    'sum-infinity': [
        function sumToInfinity() {
            const a = randInt(2, 20);
            const rChoices = [
                { num: 1, den: 2 },
                { num: 1, den: 3 },
                { num: 2, den: 3 },
                { num: 1, den: 4 },
                { num: 3, den: 4 },
                { num: -1, den: 2 },
                { num: -1, den: 3 },
                { num: -2, den: 3 }
            ];
            const rObj = pick(rChoices);
            // S_inf = a / (1 - r) = a / ((den - num)/den) = a*den / (den - num)
            const ansNum = a * rObj.den;
            const ansDen = rObj.den - rObj.num;
            const answer = simplifiedFrac(ansNum, ansDen);
            const rSign = rObj.num < 0 ? '-' : '';
            const rDisplay = rObj.num < 0 ? frac(Math.abs(rObj.num), rObj.den) : frac(rObj.num, rObj.den);
            return {
                type: 'Sum to Infinity',
                text: `Find the sum to infinity of a geometric series with <span class="math">a = ${a}</span> and <span class="math">r = ${rSign}</span>${rDisplay}.<br><small style="color:var(--text-muted)">Give your answer as a fraction if needed</small>`,
                answer: answer,
                hint: 'Use S = a/(1-r). This only works when |r| < 1.',
                explainLatex: [
                    `S_\\infty = \\frac{a}{1 - r}`,
                    `S_\\infty = \\frac{${a}}{1 - \\left(${rObj.num < 0 ? '-' : ''}\\frac{${Math.abs(rObj.num)}}{${rObj.den}}\\right)}`,
                    `S_\\infty = \\frac{${a}}{\\frac{${ansDen}}{${rObj.den}}} = ${answer.includes('/') ? '\\frac{' + answer.split('/')[0] + '}{' + answer.split('/')[1] + '}' : answer}`
                ]
            };
        },
        function convergentOrNot() {
            const rChoices = [
                { val: '1/2', conv: true },
                { val: '2/3', conv: true },
                { val: '3/4', conv: true },
                { val: '-1/2', conv: true },
                { val: '1/5', conv: true },
                { val: '2', conv: false },
                { val: '-2', conv: false },
                { val: '3', conv: false },
                { val: '-3/2', conv: false },
                { val: '5/4', conv: false },
                { val: '1', conv: false },
                { val: '-1', conv: false }
            ];
            const choice = pick(rChoices);
            const answer = choice.conv ? 'yes' : 'no';
            return {
                type: 'Sum to Infinity',
                text: `A geometric series has common ratio <span class="math">r = ${choice.val}</span>. Does the series converge (have a sum to infinity)?<br><small style="color:var(--text-muted)">Answer "yes" or "no"</small>`,
                answer: answer,
                accept: choice.conv ? ['yes', 'converges', 'true'] : ['no', 'diverges', 'false'],
                hint: 'A geometric series converges if and only if |r| < 1.',
                explainLatex: [
                    `\\text{The series converges when } |r| < 1.`,
                    `|${choice.val}| ${choice.conv ? '< 1' : '\\geq 1'} \\text{, so it ${choice.conv ? 'converges' : 'does not converge'}}.`
                ]
            };
        },
        function sumToInfinityInt() {
            // Pick values that give integer sums
            const combos = [
                { a: 8, rNum: 1, rDen: 2 },    // 16
                { a: 9, rNum: 1, rDen: 3 },     // 13.5 -> use 9, 2/3 = 27
                { a: 6, rNum: 1, rDen: 3 },     // 9
                { a: 12, rNum: 1, rDen: 4 },    // 16
                { a: 10, rNum: 1, rDen: 2 },    // 20
                { a: 15, rNum: 2, rDen: 3 },    // 45
                { a: 4, rNum: 3, rDen: 4 },     // 16
                { a: 6, rNum: -1, rDen: 2 },    // 4
                { a: 12, rNum: -1, rDen: 3 },   // 9
            ];
            const c = pick(combos);
            const ansNum = c.a * c.rDen;
            const ansDen = c.rDen - c.rNum;
            const answer = simplifiedFrac(ansNum, ansDen);
            const rSign = c.rNum < 0 ? '-' : '';
            const rDisplay = frac(Math.abs(c.rNum), c.rDen);
            return {
                type: 'Sum to Infinity',
                text: `A geometric series has <span class="math">a = ${c.a}</span> and <span class="math">r = ${rSign}</span>${rDisplay}. Find the sum to infinity.<br><small style="color:var(--text-muted)">Give your answer as a fraction if needed</small>`,
                answer: answer,
                hint: 'Use S = a/(1-r)',
                explainLatex: [
                    `S_\\infty = \\frac{a}{1 - r} = \\frac{${c.a}}{1 - (${rSign}\\frac{${Math.abs(c.rNum)}}{${c.rDen}})}`,
                    `= \\frac{${c.a}}{\\frac{${ansDen}}{${c.rDen}}} = ${answer.includes('/') ? '\\frac{' + answer.split('/')[0] + '}{' + answer.split('/')[1] + '}' : answer}`
                ]
            };
        }
    ]
};

// Default hints per topic
const defaultHints = {
    'Arithmetic Sequences': 'The nth term of an arithmetic sequence is a + (n-1)d where a is the first term and d is the common difference.',
    'Arithmetic Series': 'Sum of n terms: S_n = n/2 (2a + (n-1)d) or S_n = n/2 (first + last).',
    'Geometric Sequences': 'The nth term of a geometric sequence is ar^(n-1) where a is the first term and r is the common ratio.',
    'Geometric Series': 'Sum of n terms: S_n = a(1-r^n)/(1-r) for |r| < 1 or S_n = a(r^n-1)/(r-1) for r > 1.',
    'Sum to Infinity': 'When |r| < 1, the sum to infinity is a/(1-r). The series diverges if |r| >= 1.'
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
        saveActivityStats('series', state, isCorrect);
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
        loadActivityStats('series', state);
        updateScore();
    }
    updateStreak(null);
    showQuestion();
}

init();
