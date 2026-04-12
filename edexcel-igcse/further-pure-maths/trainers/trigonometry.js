/* ==============================
   Trigonometry Trainer - Question Generator
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

    // Handle \pi
    s = s.replace(/\\pi/g, 'pi');

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
        .replace(/\u00b0/g, '')  // remove degree symbol
        .trim();
}

// ==============================
// Trig helpers
// ==============================

const DEG_TO_RAD = Math.PI / 180;

// Common angle pairs: degrees -> { numPi, denPi } meaning (numPi/denPi)*pi radians
const COMMON_ANGLES = [
    { deg: 30,  numPi: 1, denPi: 6 },
    { deg: 45,  numPi: 1, denPi: 4 },
    { deg: 60,  numPi: 1, denPi: 3 },
    { deg: 90,  numPi: 1, denPi: 2 },
    { deg: 120, numPi: 2, denPi: 3 },
    { deg: 150, numPi: 5, denPi: 6 },
    { deg: 180, numPi: 1, denPi: 1 },
    { deg: 270, numPi: 3, denPi: 2 },
    { deg: 360, numPi: 2, denPi: 1 }
];

// Format radian answer in terms of pi as a string: "pi/6", "2pi/3", "pi", "2pi"
function radianStr(numPi, denPi) {
    const g = gcd(Math.abs(numPi), Math.abs(denPi));
    const n = numPi / g;
    const d = denPi / g;
    if (d === 1) {
        if (n === 1) return 'pi';
        if (n === -1) return '-pi';
        return `${n}pi`;
    }
    if (n === 1) return `pi/${d}`;
    if (n === -1) return `-pi/${d}`;
    return `${n}pi/${d}`;
}

// Format radian as KaTeX
function radianKatex(numPi, denPi) {
    const g = gcd(Math.abs(numPi), Math.abs(denPi));
    const n = numPi / g;
    const d = denPi / g;
    if (d === 1) {
        if (n === 1) return '\\pi';
        if (n === -1) return '-\\pi';
        return `${n}\\pi`;
    }
    if (n === 1) return `\\frac{\\pi}{${d}}`;
    if (n === -1) return `-\\frac{\\pi}{${d}}`;
    return `\\frac{${n}\\pi}{${d}}`;
}

// Format number as fraction string if needed
function numStr(n) {
    if (Number.isInteger(n)) return String(n);
    for (const d of [2, 3, 4, 5, 6, 8, 10]) {
        const num = Math.round(n * d);
        if (Math.abs(n - num / d) < 0.0001) {
            const g = gcd(Math.abs(num), d);
            return `${num / g}/${d / g}`;
        }
    }
    return String(round(n, 3));
}

function numKatex(n) {
    if (Number.isInteger(n)) return String(n);
    for (const d of [2, 3, 4, 5, 6, 8, 10]) {
        const num = Math.round(n * d);
        if (Math.abs(n - num / d) < 0.0001) {
            const g = gcd(Math.abs(num), d);
            const sn = num / g;
            const sd = d / g;
            if (sd === 1) return String(sn);
            if (sn < 0) return `-\\frac{${Math.abs(sn)}}{${sd}}`;
            return `\\frac{${sn}}{${sd}}`;
        }
    }
    return String(round(n, 3));
}

// ==============================
// Question Generators
// ==============================

const generators = {

    // --- Radians ---

    'radians': [
        function degreesToRadians() {
            const angle = pick(COMMON_ANGLES);
            const answer = radianStr(angle.numPi, angle.denPi);
            return {
                type: 'Radians',
                text: `Convert <span class="math">${angle.deg}&deg;</span> to radians.<br><small style="color:var(--text-muted)">Give your answer in terms of pi, e.g. pi/6 or 2pi/3</small>`,
                answer: answer,
                accept: [
                    answer,
                    answer.replace('pi', '\u03C0'),
                    `${angle.numPi}pi/${angle.denPi}`,
                    radianStr(angle.numPi, angle.denPi)
                ],
                hint: 'To convert degrees to radians, multiply by pi/180.',
                explainLatex: [
                    `${angle.deg}^\\circ \\times \\frac{\\pi}{180} = ${radianKatex(angle.numPi, angle.denPi)}`
                ]
            };
        },
        function radiansToDegrees() {
            const angle = pick(COMMON_ANGLES);
            return {
                type: 'Radians',
                text: `Convert <span class="math">${radianStr(angle.numPi, angle.denPi)}</span> radians to degrees.`,
                answer: String(angle.deg),
                accept: [`${angle.deg}`, `${angle.deg}deg`, `${angle.deg}\u00b0`],
                hint: 'To convert radians to degrees, multiply by 180/pi.',
                explainLatex: [
                    `${radianKatex(angle.numPi, angle.denPi)} \\times \\frac{180}{\\pi} = ${angle.deg}^\\circ`
                ]
            };
        },
        function convertNonStandard() {
            // Convert multiples like 210, 240, 300, 315, 330
            const extras = [
                { deg: 210, numPi: 7, denPi: 6 },
                { deg: 240, numPi: 4, denPi: 3 },
                { deg: 300, numPi: 5, denPi: 3 },
                { deg: 315, numPi: 7, denPi: 4 },
                { deg: 330, numPi: 11, denPi: 6 }
            ];
            const angle = pick(extras);
            const toRad = Math.random() > 0.5;
            if (toRad) {
                const answer = radianStr(angle.numPi, angle.denPi);
                return {
                    type: 'Radians',
                    text: `Convert <span class="math">${angle.deg}&deg;</span> to radians.<br><small style="color:var(--text-muted)">Give your answer in terms of pi</small>`,
                    answer: answer,
                    accept: [answer, `${angle.numPi}pi/${angle.denPi}`],
                    hint: 'Multiply by pi/180 and simplify the fraction.',
                    explainLatex: [
                        `${angle.deg}^\\circ \\times \\frac{\\pi}{180} = ${radianKatex(angle.numPi, angle.denPi)}`
                    ]
                };
            } else {
                return {
                    type: 'Radians',
                    text: `Convert <span class="math">${radianStr(angle.numPi, angle.denPi)}</span> radians to degrees.`,
                    answer: String(angle.deg),
                    accept: [`${angle.deg}`, `${angle.deg}\u00b0`],
                    hint: 'Multiply by 180/pi.',
                    explainLatex: [
                        `${radianKatex(angle.numPi, angle.denPi)} \\times \\frac{180}{\\pi} = ${angle.deg}^\\circ`
                    ]
                };
            }
        }
    ],

    // --- Arc Length & Sector Area ---

    'arc-sector': [
        function arcLength() {
            // s = r * theta (radians)
            const r = randInt(3, 12);
            const angle = pick(COMMON_ANGLES.filter(a => a.deg <= 180));
            const theta = angle.numPi * Math.PI / angle.denPi;
            const arcLen = round(r * theta, 3);
            // Check if answer is clean in terms of pi
            // s = r * (numPi/denPi) * pi
            const sNum = r * angle.numPi;
            const sDen = angle.denPi;
            const g = gcd(sNum, sDen);
            const cleanNum = sNum / g;
            const cleanDen = sDen / g;
            let answer, answerKtx;
            if (cleanDen === 1) {
                answer = `${cleanNum}pi`;
                answerKtx = `${cleanNum}\\pi`;
            } else {
                answer = `${cleanNum}pi/${cleanDen}`;
                answerKtx = `\\frac{${cleanNum}\\pi}{${cleanDen}}`;
            }
            return {
                type: 'Arc Length & Sector Area',
                text: `Find the arc length of a sector with radius <span class="math">${r}</span> and angle <span class="math">${radianStr(angle.numPi, angle.denPi)}</span> radians.<br><small style="color:var(--text-muted)">Give your answer in terms of pi, e.g. 3pi/2</small>`,
                answer: answer,
                accept: [answer, String(round(arcLen, 2)), `${cleanNum}pi/${cleanDen}`],
                hint: 'Arc length = r * theta, where theta is in radians.',
                explainLatex: [
                    `s = r\\theta = ${r} \\times ${radianKatex(angle.numPi, angle.denPi)} = ${answerKtx}`
                ]
            };
        },
        function sectorArea() {
            // A = 0.5 * r^2 * theta
            const r = randInt(2, 8);
            const angle = pick(COMMON_ANGLES.filter(a => a.deg <= 180));
            const theta = angle.numPi * Math.PI / angle.denPi;
            const area = round(0.5 * r * r * theta, 3);
            // A = (r^2 * numPi) / (2 * denPi) * pi
            const aNum = r * r * angle.numPi;
            const aDen = 2 * angle.denPi;
            const g = gcd(aNum, aDen);
            const cleanNum = aNum / g;
            const cleanDen = aDen / g;
            let answer, answerKtx;
            if (cleanDen === 1) {
                answer = `${cleanNum}pi`;
                answerKtx = `${cleanNum}\\pi`;
            } else {
                answer = `${cleanNum}pi/${cleanDen}`;
                answerKtx = `\\frac{${cleanNum}\\pi}{${cleanDen}}`;
            }
            return {
                type: 'Arc Length & Sector Area',
                text: `Find the area of a sector with radius <span class="math">${r}</span> and angle <span class="math">${radianStr(angle.numPi, angle.denPi)}</span> radians.<br><small style="color:var(--text-muted)">Give your answer in terms of pi</small>`,
                answer: answer,
                accept: [answer, String(round(area, 2)), `${cleanNum}pi/${cleanDen}`],
                hint: 'Sector area = (1/2) * r^2 * theta, where theta is in radians.',
                explainLatex: [
                    `A = \\frac{1}{2}r^2\\theta = \\frac{1}{2} \\times ${r}^2 \\times ${radianKatex(angle.numPi, angle.denPi)} = ${answerKtx}`
                ]
            };
        },
        function findAngleFromArc() {
            // Given arc length and radius, find angle in radians
            const r = randInt(3, 10);
            const angle = pick(COMMON_ANGLES.filter(a => a.deg <= 180));
            const theta = angle.numPi * Math.PI / angle.denPi;
            const arcLen = r * theta;
            // arcLen = r * numPi*pi / denPi
            // theta = arcLen / r = (numPi/denPi)*pi
            const answer = radianStr(angle.numPi, angle.denPi);
            // Display arc length in terms of pi
            const sNum = r * angle.numPi;
            const sDen = angle.denPi;
            const g = gcd(sNum, sDen);
            const dispNum = sNum / g;
            const dispDen = sDen / g;
            const arcDisp = dispDen === 1 ? `${dispNum}\u03C0` : `${dispNum}\u03C0/${dispDen}`;
            return {
                type: 'Arc Length & Sector Area',
                text: `A sector has radius <span class="math">${r}</span> and arc length <span class="math">${arcDisp}</span>. Find the angle in radians.<br><small style="color:var(--text-muted)">Give answer in terms of pi</small>`,
                answer: answer,
                accept: [answer, `${angle.numPi}pi/${angle.denPi}`],
                hint: 'theta = arc length / radius.',
                explainLatex: [
                    `\\theta = \\frac{s}{r} = \\frac{${dispDen === 1 ? `${dispNum}\\pi` : `\\frac{${dispNum}\\pi}{${dispDen}}`}}{${r}} = ${radianKatex(angle.numPi, angle.denPi)}`
                ]
            };
        }
    ],

    // --- Trig Identities ---

    'identities': [
        function findCosFromSin() {
            // Given sin(x) = a/b (first quadrant), find cos(x)
            const triples = [
                [3, 5], [4, 5], [5, 13], [12, 13], [8, 17], [15, 17], [7, 25], [24, 25]
            ];
            const [a, b] = pick(triples);
            const cosVal = Math.sqrt(b * b - a * a);
            // cos = sqrt(b^2 - a^2) / b
            const cosNum = Math.round(cosVal);
            const g = gcd(cosNum, b);
            const ansNum = cosNum / g;
            const ansDen = b / g;
            const answer = ansDen === 1 ? String(ansNum) : `${ansNum}/${ansDen}`;
            return {
                type: 'Trig Identities',
                text: `Given that <span class="math">sin(x) = ${frac(a, b)}</span> and <span class="math">0 &lt; x &lt; 90&deg;</span>, find <span class="math">cos(x)</span>.<br><small style="color:var(--text-muted)">Give answer as a fraction</small>`,
                answer: answer,
                accept: [answer, String(round(cosNum / b, 6))],
                hint: 'Use sin^2(x) + cos^2(x) = 1, so cos(x) = sqrt(1 - sin^2(x)).',
                explainLatex: [
                    `\\sin^2 x + \\cos^2 x = 1`,
                    `\\cos^2 x = 1 - \\left(\\frac{${a}}{${b}}\\right)^2 = 1 - \\frac{${a * a}}{${b * b}} = \\frac{${b * b - a * a}}{${b * b}}`,
                    `\\cos x = \\frac{${cosNum}}{${b}}${g > 1 ? ` = \\frac{${ansNum}}{${ansDen}}` : ''}`
                ]
            };
        },
        function findSinFromCos() {
            const triples = [
                [3, 5], [4, 5], [5, 13], [12, 13], [8, 17], [15, 17]
            ];
            const [a, b] = pick(triples);
            const sinVal = Math.sqrt(b * b - a * a);
            const sinNum = Math.round(sinVal);
            const g = gcd(sinNum, b);
            const ansNum = sinNum / g;
            const ansDen = b / g;
            const answer = ansDen === 1 ? String(ansNum) : `${ansNum}/${ansDen}`;
            return {
                type: 'Trig Identities',
                text: `Given that <span class="math">cos(x) = ${frac(a, b)}</span> and <span class="math">0 &lt; x &lt; 90&deg;</span>, find <span class="math">sin(x)</span>.<br><small style="color:var(--text-muted)">Give answer as a fraction</small>`,
                answer: answer,
                accept: [answer, String(round(sinNum / b, 6))],
                hint: 'Use sin^2(x) + cos^2(x) = 1, so sin(x) = sqrt(1 - cos^2(x)).',
                explainLatex: [
                    `\\sin^2 x + \\cos^2 x = 1`,
                    `\\sin^2 x = 1 - \\left(\\frac{${a}}{${b}}\\right)^2 = \\frac{${b * b - a * a}}{${b * b}}`,
                    `\\sin x = \\frac{${sinNum}}{${b}}${g > 1 ? ` = \\frac{${ansNum}}{${ansDen}}` : ''}`
                ]
            };
        },
        function findTanFromSinCos() {
            // Given sin and cos, find tan
            const triples = [
                { s: 3, c: 4, h: 5 },
                { s: 5, c: 12, h: 13 },
                { s: 8, c: 15, h: 17 },
                { s: 7, c: 24, h: 25 },
                { s: 12, c: 5, h: 13 },
                { s: 4, c: 3, h: 5 }
            ];
            const t = pick(triples);
            const g = gcd(t.s, t.c);
            const ansNum = t.s / g;
            const ansDen = t.c / g;
            const answer = ansDen === 1 ? String(ansNum) : `${ansNum}/${ansDen}`;
            return {
                type: 'Trig Identities',
                text: `Given that <span class="math">sin(x) = ${frac(t.s, t.h)}</span> and <span class="math">cos(x) = ${frac(t.c, t.h)}</span>, find <span class="math">tan(x)</span>.<br><small style="color:var(--text-muted)">Give answer as a fraction</small>`,
                answer: answer,
                accept: [answer, String(round(t.s / t.c, 6))],
                hint: 'tan(x) = sin(x) / cos(x).',
                explainLatex: [
                    `\\tan x = \\frac{\\sin x}{\\cos x} = \\frac{${t.s}/${t.h}}{${t.c}/${t.h}} = \\frac{${t.s}}{${t.c}}${g > 1 ? ` = \\frac{${ansNum}}{${ansDen}}` : ''}`
                ]
            };
        },
        function simplifyIdentity() {
            // Simplify expressions using sin^2 + cos^2 = 1
            const questions = [
                {
                    text: `Simplify <span class="math">sin<sup>2</sup>(x) + cos<sup>2</sup>(x)</span>`,
                    answer: '1',
                    explainLatex: ['\\sin^2 x + \\cos^2 x = 1']
                },
                {
                    text: `Simplify <span class="math">1 - sin<sup>2</sup>(x)</span>`,
                    answer: 'cos^2(x)',
                    accept: ['cos^2x', 'cos^2(x)', 'cos2(x)'],
                    explainLatex: ['1 - \\sin^2 x = \\cos^2 x']
                },
                {
                    text: `Simplify <span class="math">1 - cos<sup>2</sup>(x)</span>`,
                    answer: 'sin^2(x)',
                    accept: ['sin^2x', 'sin^2(x)', 'sin2(x)'],
                    explainLatex: ['1 - \\cos^2 x = \\sin^2 x']
                },
                {
                    text: `Simplify <span class="math">${frac('sin(x)', 'cos(x)')}</span>`,
                    answer: 'tan(x)',
                    accept: ['tanx', 'tan(x)'],
                    explainLatex: ['\\frac{\\sin x}{\\cos x} = \\tan x']
                },
                {
                    text: `Simplify <span class="math">2sin<sup>2</sup>(x) + 2cos<sup>2</sup>(x)</span>`,
                    answer: '2',
                    explainLatex: ['2\\sin^2 x + 2\\cos^2 x = 2(\\sin^2 x + \\cos^2 x) = 2']
                }
            ];
            const q = pick(questions);
            return {
                type: 'Trig Identities',
                ...q,
                accept: q.accept || [],
                hint: 'Use the identity sin^2(x) + cos^2(x) = 1 and tan(x) = sin(x)/cos(x).'
            };
        }
    ],

    // --- Trig Equations ---

    'equations': [
        function solveSinBasic() {
            // sin(x) = value, 0 <= x <= 360
            const cases = [
                { val: '0.5', valKtx: '0.5', solutions: [30, 150] },
                { val: '-0.5', valKtx: '-0.5', solutions: [210, 330] },
                { val: '1', valKtx: '1', solutions: [90] },
                { val: '-1', valKtx: '-1', solutions: [270] },
                { val: '0', valKtx: '0', solutions: [0, 180, 360] },
                { val: 'sqrt(3)/2', valKtx: '\\frac{\\sqrt{3}}{2}', solutions: [60, 120] },
                { val: 'sqrt(2)/2', valKtx: '\\frac{\\sqrt{2}}{2}', solutions: [45, 135] }
            ];
            const c = pick(cases);
            const sorted = [...c.solutions].sort((a, b) => a - b);
            const answer = sorted.join(',');
            // Generate accept permutations
            const acceptList = [
                sorted.join(', '),
                sorted.join(','),
                ...sorted.map(s => `${s}\u00b0`).join(', '),
                `x=${sorted.join(',x=')}`
            ];
            return {
                type: 'Trig Equations',
                text: `Solve <span class="math">sin(x) = ${c.val}</span> for <span class="math">0 &le; x &le; 360&deg;</span><br><small style="color:var(--text-muted)">Give all solutions separated by commas</small>`,
                answer: answer,
                accept: acceptList,
                hint: 'Find the principal value using inverse sin. Use the symmetry of the sine curve to find all solutions in the range.',
                explainLatex: [
                    `\\sin x = ${c.valKtx}`,
                    `x = ${sorted.map(s => s + '^\\circ').join(', ')}`
                ]
            };
        },
        function solveCosBasic() {
            const cases = [
                { val: '0.5', valKtx: '0.5', solutions: [60, 300] },
                { val: '-0.5', valKtx: '-0.5', solutions: [120, 240] },
                { val: '1', valKtx: '1', solutions: [0, 360] },
                { val: '-1', valKtx: '-1', solutions: [180] },
                { val: '0', valKtx: '0', solutions: [90, 270] },
                { val: 'sqrt(3)/2', valKtx: '\\frac{\\sqrt{3}}{2}', solutions: [30, 330] },
                { val: 'sqrt(2)/2', valKtx: '\\frac{\\sqrt{2}}{2}', solutions: [45, 315] }
            ];
            const c = pick(cases);
            const sorted = [...c.solutions].sort((a, b) => a - b);
            const answer = sorted.join(',');
            return {
                type: 'Trig Equations',
                text: `Solve <span class="math">cos(x) = ${c.val}</span> for <span class="math">0 &le; x &le; 360&deg;</span><br><small style="color:var(--text-muted)">Give all solutions separated by commas</small>`,
                answer: answer,
                accept: [sorted.join(', '), sorted.join(','), `x=${sorted.join(',x=')}`],
                hint: 'Find the principal value using inverse cos. Use the symmetry of the cosine curve to find all solutions.',
                explainLatex: [
                    `\\cos x = ${c.valKtx}`,
                    `x = ${sorted.map(s => s + '^\\circ').join(', ')}`
                ]
            };
        },
        function solveTanBasic() {
            const cases = [
                { val: '1', valKtx: '1', solutions: [45, 225] },
                { val: '-1', valKtx: '-1', solutions: [135, 315] },
                { val: '0', valKtx: '0', solutions: [0, 180, 360] },
                { val: 'sqrt(3)', valKtx: '\\sqrt{3}', solutions: [60, 240] },
                { val: '-sqrt(3)', valKtx: '-\\sqrt{3}', solutions: [120, 300] },
                { val: '1/sqrt(3)', valKtx: '\\frac{1}{\\sqrt{3}}', solutions: [30, 210] }
            ];
            const c = pick(cases);
            const sorted = [...c.solutions].sort((a, b) => a - b);
            const answer = sorted.join(',');
            return {
                type: 'Trig Equations',
                text: `Solve <span class="math">tan(x) = ${c.val}</span> for <span class="math">0 &le; x &le; 360&deg;</span><br><small style="color:var(--text-muted)">Give all solutions separated by commas</small>`,
                answer: answer,
                accept: [sorted.join(', '), sorted.join(','), `x=${sorted.join(',x=')}`],
                hint: 'Find the principal value using inverse tan. Tan repeats every 180 degrees, so add 180 to find more solutions.',
                explainLatex: [
                    `\\tan x = ${c.valKtx}`,
                    `x = ${sorted.map(s => s + '^\\circ').join(', ')}`
                ]
            };
        },
        function solveCosDouble() {
            // cos(2x) = value, 0 <= x <= 360
            const cases = [
                { val: '1', valKtx: '1', solutions: [0, 180, 360] },
                { val: '-1', valKtx: '-1', solutions: [90, 270] },
                { val: '0.5', valKtx: '0.5', solutions: [30, 150, 210, 330] },
                { val: '-0.5', valKtx: '-0.5', solutions: [60, 120, 240, 300] },
                { val: '0', valKtx: '0', solutions: [45, 135, 225, 315] }
            ];
            const c = pick(cases);
            const sorted = [...c.solutions].sort((a, b) => a - b);
            const answer = sorted.join(',');
            return {
                type: 'Trig Equations',
                text: `Solve <span class="math">cos(2x) = ${c.val}</span> for <span class="math">0 &le; x &le; 360&deg;</span><br><small style="color:var(--text-muted)">Give all solutions separated by commas</small>`,
                answer: answer,
                accept: [sorted.join(', '), sorted.join(',')],
                hint: 'Let u = 2x. Solve cos(u) = value for 0 <= u <= 720, then divide each solution by 2.',
                explainLatex: [
                    `\\cos 2x = ${c.valKtx}`,
                    `\\text{Let } u = 2x, \\text{ solve for } 0 \\le u \\le 720^\\circ`,
                    `x = ${sorted.map(s => s + '^\\circ').join(', ')}`
                ]
            };
        }
    ],

    // --- Sine & Cosine Rule ---

    'sine-cosine-rule': [
        function sineRuleFindSide() {
            // a/sinA = b/sinB, find missing side
            const A = pick([30, 45, 60, 40, 50, 70, 80]);
            const B = pick([30, 45, 60, 40, 50, 70, 80].filter(x => x !== A && x + A < 180));
            const a = randInt(5, 15);
            const b = round(a * Math.sin(B * DEG_TO_RAD) / Math.sin(A * DEG_TO_RAD), 1);
            return {
                type: 'Sine & Cosine Rule',
                text: `In triangle ABC, angle A = <span class="math">${A}&deg;</span>, angle B = <span class="math">${B}&deg;</span>, and side a = <span class="math">${a}</span>. Find side b.<br><small style="color:var(--text-muted)">Round to 1 d.p.</small>`,
                answer: String(b),
                accept: [String(b), String(round(b, 0))],
                hint: 'Use the sine rule: a/sin(A) = b/sin(B). Rearrange to find b.',
                explainLatex: [
                    `\\frac{a}{\\sin A} = \\frac{b}{\\sin B}`,
                    `\\frac{${a}}{\\sin ${A}^\\circ} = \\frac{b}{\\sin ${B}^\\circ}`,
                    `b = \\frac{${a} \\times \\sin ${B}^\\circ}{\\sin ${A}^\\circ} = ${b}`
                ]
            };
        },
        function sineRuleFindAngle() {
            // Find missing angle using sine rule
            const A = pick([30, 40, 50, 60, 70]);
            const a = randInt(8, 20);
            const b = randInt(5, Math.min(a - 1, 15));
            const sinB = b * Math.sin(A * DEG_TO_RAD) / a;
            if (sinB > 1 || sinB < 0) return sineRuleFindAngle(); // retry
            const B = round(Math.asin(sinB) / DEG_TO_RAD, 1);
            return {
                type: 'Sine & Cosine Rule',
                text: `In triangle ABC, angle A = <span class="math">${A}&deg;</span>, side a = <span class="math">${a}</span>, and side b = <span class="math">${b}</span>. Find angle B.<br><small style="color:var(--text-muted)">Round to 1 d.p.</small>`,
                answer: String(B),
                accept: [String(B), String(round(B, 0)), `${B}\u00b0`],
                hint: 'Use the sine rule: sin(B)/b = sin(A)/a. Find sin(B), then use inverse sin.',
                explainLatex: [
                    `\\frac{\\sin B}{b} = \\frac{\\sin A}{a}`,
                    `\\sin B = \\frac{${b} \\times \\sin ${A}^\\circ}{${a}} = ${round(sinB, 4)}`,
                    `B = ${B}^\\circ`
                ]
            };
        },
        function cosineRuleFindSide() {
            // a^2 = b^2 + c^2 - 2bc*cosA
            const b = randInt(5, 12);
            const c = randInt(5, 12);
            const A = pick([30, 45, 60, 75, 90, 100, 110, 120]);
            const aSquared = b * b + c * c - 2 * b * c * Math.cos(A * DEG_TO_RAD);
            const a = round(Math.sqrt(aSquared), 1);
            return {
                type: 'Sine & Cosine Rule',
                text: `In triangle ABC, b = <span class="math">${b}</span>, c = <span class="math">${c}</span>, and angle A = <span class="math">${A}&deg;</span>. Find side a.<br><small style="color:var(--text-muted)">Round to 1 d.p.</small>`,
                answer: String(a),
                accept: [String(a), String(round(a, 0))],
                hint: 'Use the cosine rule: a^2 = b^2 + c^2 - 2bc*cos(A).',
                explainLatex: [
                    `a^2 = b^2 + c^2 - 2bc\\cos A`,
                    `a^2 = ${b}^2 + ${c}^2 - 2(${b})(${c})\\cos ${A}^\\circ`,
                    `a^2 = ${round(aSquared, 2)}`,
                    `a = ${a}`
                ]
            };
        },
        function cosineRuleFindAngle() {
            // cos(A) = (b^2 + c^2 - a^2) / (2bc)
            const b = randInt(5, 12);
            const c = randInt(5, 12);
            const A = pick([30, 45, 60, 75, 90, 100, 110, 120]);
            const aSquared = b * b + c * c - 2 * b * c * Math.cos(A * DEG_TO_RAD);
            const a = round(Math.sqrt(aSquared), 1);
            // Now ask them to find A given a, b, c
            const cosA = (b * b + c * c - a * a) / (2 * b * c);
            const calcA = round(Math.acos(cosA) / DEG_TO_RAD, 1);
            return {
                type: 'Sine & Cosine Rule',
                text: `In triangle ABC, a = <span class="math">${a}</span>, b = <span class="math">${b}</span>, and c = <span class="math">${c}</span>. Find angle A.<br><small style="color:var(--text-muted)">Round to 1 d.p.</small>`,
                answer: String(calcA),
                accept: [String(calcA), String(round(calcA, 0)), String(A), `${calcA}\u00b0`],
                hint: 'Use the cosine rule rearranged: cos(A) = (b^2 + c^2 - a^2) / (2bc).',
                explainLatex: [
                    `\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}`,
                    `\\cos A = \\frac{${b}^2 + ${c}^2 - ${a}^2}{2 \\times ${b} \\times ${c}} = ${round(cosA, 4)}`,
                    `A = ${calcA}^\\circ`
                ]
            };
        },
        function areaTriangle() {
            // Area = 0.5 * a * b * sin(C)
            const a = randInt(5, 15);
            const b = randInt(5, 15);
            const C = pick([30, 45, 60, 90, 120, 150]);
            const area = round(0.5 * a * b * Math.sin(C * DEG_TO_RAD), 1);
            return {
                type: 'Sine & Cosine Rule',
                text: `Find the area of triangle ABC where a = <span class="math">${a}</span>, b = <span class="math">${b}</span>, and angle C = <span class="math">${C}&deg;</span>.<br><small style="color:var(--text-muted)">Round to 1 d.p.</small>`,
                answer: String(area),
                accept: [String(area), String(round(area, 0))],
                hint: 'Area = (1/2) * a * b * sin(C).',
                explainLatex: [
                    `\\text{Area} = \\frac{1}{2}ab\\sin C = \\frac{1}{2} \\times ${a} \\times ${b} \\times \\sin ${C}^\\circ = ${area}`
                ]
            };
        }
    ]
};

// Default hints per topic
const defaultHints = {
    'Radians': 'To convert: degrees * pi/180 = radians. Radians * 180/pi = degrees.',
    'Arc Length & Sector Area': 'Arc length = r*theta. Sector area = (1/2)*r^2*theta. Theta must be in radians.',
    'Trig Identities': 'Key identities: sin^2(x) + cos^2(x) = 1, tan(x) = sin(x)/cos(x).',
    'Trig Equations': 'Find the principal value, then use symmetry/periodicity to find all solutions in the range.',
    'Sine & Cosine Rule': 'Sine rule: a/sinA = b/sinB. Cosine rule: a^2 = b^2 + c^2 - 2bc*cosA. Area = (1/2)ab*sinC.'
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
    state.currentAccept = (q.accept || []).map(a => String(a).toLowerCase().trim());
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

    // For multi-solution answers (comma-separated), sort both for comparison
    const sortedUser = userAnswer.split(',').map(s => s.trim()).sort().join(',');
    const sortedCorrect = normalizedCorrect.split(',').map(s => s.trim()).sort().join(',');
    const sortedAccept = normalizedAccept.map(a => a.split(',').map(s => s.trim()).sort().join(','));

    const isCorrect = userAnswer === normalizedCorrect ||
        normalizedAccept.includes(userAnswer) ||
        sortedUser === sortedCorrect ||
        sortedAccept.includes(sortedUser);

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
        saveActivityStats('trigonometry', state, isCorrect);
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
        loadActivityStats('trigonometry', state);
        updateScore();
    }
    updateStreak(null);
    showQuestion();
}

init();
