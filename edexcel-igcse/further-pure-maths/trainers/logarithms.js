/* ==============================
   Logarithms & Indices Trainer - Question Generator
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

function gcd(a, b) {
    a = Math.abs(a); b = Math.abs(b);
    while (b) { [a, b] = [b, a % b]; }
    return a;
}

function round(n, dp) {
    return Math.round(n * Math.pow(10, dp)) / Math.pow(10, dp);
}

// Render a fraction as stacked HTML
function frac(num, den) {
    return `<span class="math"><span class="frac"><span class="frac-num">${num}</span><span class="frac-den">${den}</span></span></span>`;
}

function op(symbol) {
    return `<span class="op">${symbol}</span>`;
}

// Render base^exp with proper superscript
function sup(base, exp) {
    return `<span class="math">${base}<sup>${exp}</sup></span>`;
}

// Render square root
function sqrt(n) {
    return `<span class="math">&radic;<span style="text-decoration:overline">${n}</span></span>`;
}

// Render log_base(value) as styled HTML
function logHtml(base, value) {
    return `<span class="math">log<sub>${base}</sub>(${value})</span>`;
}

// Render log base 10 as styled HTML
function log10Html(value) {
    return `<span class="math">log(${value})</span>`;
}

// Parse MathLive LaTeX output into a usable string for answer comparison
function parseLatex(raw) {
    let s = raw.replace(/\\left|\\right/g, '').replace(/\s+/g, '').trim();

    // Normalize sqrt FIRST (before frac extraction)
    s = s.replace(/\\sqrt\{([^}]+)\}/g, 'sqrt($1)');
    s = s.replace(/\\sqrt(\d)/g, 'sqrt($1)');

    // \times, \cdot -> x
    s = s.replace(/\\times/g, 'x').replace(/\\cdot/g, 'x');

    // \log_ subscript forms: \log_{base}(value) or \log_b(value)
    s = s.replace(/\\log_\{([^}]+)\}/g, 'log_$1');
    s = s.replace(/\\log_(\d+)/g, 'log_$1');
    s = s.replace(/\\log/g, 'log');
    s = s.replace(/\\ln/g, 'ln');

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

    // Clean up remaining backslashes
    s = s.replace(/\\/g, '');

    // Normalize spaces around x in standard form
    s = s.replace(/(\d)x(\d)/g, '$1 x $2');

    return s;
}

// Strip all spaces, lowercase, normalize multiplication signs
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

    // --- Laws of Indices (revision/extension) ---

    'indices': [
        function simplifyMultiply() {
            const base = pick(['a', 'b', 'x', 'y', 'p']);
            const e1 = randInt(2, 8);
            const e2 = randInt(2, 8);
            return {
                type: 'Laws of Indices',
                text: `Simplify ${sup(base, e1)} ${op('&times;')} ${sup(base, e2)}`,
                answer: `${base}^${e1 + e2}`,
                hint: 'When multiplying with the same base, add the indices.',
                explainLatex: [
                    `${base}^{${e1}} \\times ${base}^{${e2}} = ${base}^{${e1}+${e2}}`,
                    `= ${base}^{${e1 + e2}}`
                ]
            };
        },
        function simplifyDivide() {
            const base = pick(['a', 'b', 'x', 'y', 'p']);
            const e1 = randInt(5, 12);
            const e2 = randInt(2, e1 - 1);
            return {
                type: 'Laws of Indices',
                text: `Simplify ${sup(base, e1)} ${op('&div;')} ${sup(base, e2)}`,
                answer: `${base}^${e1 - e2}`,
                hint: 'When dividing with the same base, subtract the indices.',
                explainLatex: [
                    `${base}^{${e1}} \\div ${base}^{${e2}} = ${base}^{${e1}-${e2}}`,
                    `= ${base}^{${e1 - e2}}`
                ]
            };
        },
        function simplifyPower() {
            const base = pick(['a', 'b', 'x', 'y']);
            const e1 = randInt(2, 5);
            const e2 = randInt(2, 4);
            return {
                type: 'Laws of Indices',
                text: `Simplify (${sup(base, e1)})<sup>${e2}</sup>`,
                answer: `${base}^${e1 * e2}`,
                hint: 'For a power of a power, multiply the indices.',
                explainLatex: [
                    `(${base}^{${e1}})^{${e2}} = ${base}^{${e1} \\times ${e2}}`,
                    `= ${base}^{${e1 * e2}}`
                ]
            };
        },
        function negativeIndex() {
            const base = pick([2, 3, 4, 5, 10]);
            const exp = pick([1, 2, 3]);
            const den = Math.pow(base, exp);
            return {
                type: 'Laws of Indices',
                text: `Evaluate ${sup(base, '&minus;' + exp)}<br><small style="color:var(--text-muted)">Give your answer as a fraction</small>`,
                answer: `1/${den}`,
                accept: [String(round(1 / den, 6))],
                hint: 'A negative index means take the reciprocal: a^(-n) = 1/a^n.',
                explainLatex: [
                    `${base}^{-${exp}} = \\frac{1}{${base}^{${exp}}}`,
                    `= \\frac{1}{${den}}`
                ]
            };
        },
        function fractionalIndex() {
            const pairs = [[4, 2], [9, 3], [16, 4], [25, 5], [36, 6], [49, 7], [64, 8], [81, 9], [100, 10]];
            const [n, root] = pick(pairs);
            return {
                type: 'Laws of Indices',
                text: `Evaluate ${sup(n, '1/2')}`,
                answer: String(root),
                hint: 'A fractional index of 1/2 means square root.',
                explainLatex: [
                    `${n}^{\\frac{1}{2}} = \\sqrt{${n}}`,
                    `= ${root}`
                ]
            };
        },
        function fractionalIndexGeneral() {
            // e.g. 16^(3/4) = (16^(1/4))^3 = 2^3 = 8
            const cases = [
                [8, 2, 3, 2], [27, 2, 3, 3], [16, 3, 4, 2],
                [32, 2, 5, 2], [64, 2, 3, 4], [125, 2, 3, 5],
                [81, 3, 4, 3], [16, 5, 4, 2], [27, 4, 3, 3],
                [8, 5, 3, 2], [100, 3, 2, 10], [4, 3, 2, 2],
                [9, 3, 2, 3], [25, 3, 2, 5]
            ];
            const [base, numer, denom, rootVal] = pick(cases);
            const answer = Math.pow(rootVal, numer);
            return {
                type: 'Laws of Indices',
                text: `Evaluate ${sup(base, numer + '/' + denom)}`,
                answer: String(answer),
                hint: `a^(m/n) means take the nth root first, then raise to the power m.`,
                explainLatex: [
                    `${base}^{\\frac{${numer}}{${denom}}} = \\left(${base}^{\\frac{1}{${denom}}}\\right)^{${numer}}`,
                    `= \\left(\\sqrt[${denom}]{${base}}\\right)^{${numer}} = ${rootVal}^{${numer}}`,
                    `= ${answer}`
                ]
            };
        },
        function solveIndexEquation() {
            // 2^x = 8, 3^x = 81, etc.
            const cases = [
                [2, 3, 8], [2, 4, 16], [2, 5, 32], [2, 6, 64], [2, 7, 128],
                [3, 2, 9], [3, 3, 27], [3, 4, 81],
                [4, 2, 16], [4, 3, 64],
                [5, 2, 25], [5, 3, 125],
                [6, 2, 36], [7, 2, 49], [10, 2, 100], [10, 3, 1000]
            ];
            const [base, exp, result] = pick(cases);
            return {
                type: 'Laws of Indices',
                text: `Solve ${sup(base, 'x')} = <span class="math">${result}</span>`,
                answer: String(exp),
                hint: `Think: ${base} to what power gives ${result}?`,
                explainLatex: [
                    `${base}^x = ${result}`,
                    `${base}^{${exp}} = ${result}`,
                    `\\therefore x = ${exp}`
                ]
            };
        },
        function simplifyBracketExpression() {
            // (2x^3)^2 = 4x^6
            const coeff = pick([2, 3, 4, 5]);
            const variable = pick(['x', 'y', 'a']);
            const innerExp = randInt(2, 4);
            const outerExp = pick([2, 3]);
            const newCoeff = Math.pow(coeff, outerExp);
            const newExp = innerExp * outerExp;
            return {
                type: 'Laws of Indices',
                text: `Simplify (${sup(coeff + variable, innerExp)})<sup>${outerExp}</sup>`,
                answer: `${newCoeff}${variable}^${newExp}`,
                hint: 'Raise the coefficient to the outer power and multiply the indices.',
                explainLatex: [
                    `(${coeff}${variable}^{${innerExp}})^{${outerExp}} = ${coeff}^{${outerExp}} \\times ${variable}^{${innerExp} \\times ${outerExp}}`,
                    `= ${newCoeff}${variable}^{${newExp}}`
                ]
            };
        }
    ],

    // --- Logarithms (definition & basic evaluation) ---

    'logarithms': [
        function evaluateLogInteger() {
            const cases = [
                [2, 4, 2], [2, 8, 3], [2, 16, 4], [2, 32, 5], [2, 64, 6], [2, 128, 7],
                [3, 9, 2], [3, 27, 3], [3, 81, 4], [3, 243, 5],
                [4, 16, 2], [4, 64, 3], [4, 256, 4],
                [5, 25, 2], [5, 125, 3], [5, 625, 4],
                [6, 36, 2], [6, 216, 3],
                [7, 49, 2], [7, 343, 3],
                [8, 64, 2], [9, 81, 2], [10, 100, 2], [10, 1000, 3], [10, 10000, 4]
            ];
            const [base, value, answer] = pick(cases);
            return {
                type: 'Logarithms',
                text: `Evaluate ${logHtml(base, value)}`,
                answer: String(answer),
                hint: `log_a(b) = c means a^c = b. So ${base} to what power gives ${value}?`,
                explainLatex: [
                    `\\log_{${base}}(${value}) = c \\implies ${base}^c = ${value}`,
                    `${base}^{${answer}} = ${value}`,
                    `\\therefore \\log_{${base}}(${value}) = ${answer}`
                ]
            };
        },
        function evaluateLogOne() {
            const base = pick([2, 3, 4, 5, 7, 10]);
            return {
                type: 'Logarithms',
                text: `Evaluate ${logHtml(base, 1)}`,
                answer: '0',
                hint: 'Any number to the power 0 equals 1.',
                explainLatex: [
                    `\\log_{${base}}(1) = c \\implies ${base}^c = 1`,
                    `${base}^0 = 1`,
                    `\\therefore \\log_{${base}}(1) = 0`
                ]
            };
        },
        function evaluateLogSelf() {
            const base = pick([2, 3, 5, 7, 10, 'a', 'e']);
            return {
                type: 'Logarithms',
                text: `Evaluate ${logHtml(base, base)}`,
                answer: '1',
                hint: 'Any number to the power 1 equals itself.',
                explainLatex: [
                    `\\log_{${base}}(${base}) = c \\implies ${base}^c = ${base}`,
                    `${base}^1 = ${base}`,
                    `\\therefore \\log_{${base}}(${base}) = 1`
                ]
            };
        },
        function convertLogToIndex() {
            // Given log_a(b) = c, write in index form
            const cases = [
                [2, 8, 3], [3, 27, 3], [5, 125, 3], [4, 64, 3],
                [2, 16, 4], [3, 81, 4], [10, 1000, 3], [7, 49, 2]
            ];
            const [base, value, exp] = pick(cases);
            return {
                type: 'Logarithms',
                text: `Write in index form: ${logHtml(base, value)} = <span class="math">${exp}</span><br><small style="color:var(--text-muted)">Format: a^b = c</small>`,
                answer: `${base}^${exp} = ${value}`,
                accept: [`${base}^${exp}=${value}`],
                hint: 'log_a(b) = c is equivalent to a^c = b.',
                explainLatex: [
                    `\\log_{${base}}(${value}) = ${exp}`,
                    `\\iff ${base}^{${exp}} = ${value}`
                ]
            };
        },
        function convertIndexToLog() {
            // Given a^c = b, write in log form
            const cases = [
                [2, 3, 8], [3, 2, 9], [5, 2, 25], [4, 3, 64],
                [2, 5, 32], [3, 4, 81], [10, 2, 100], [6, 2, 36]
            ];
            const [base, exp, value] = pick(cases);
            return {
                type: 'Logarithms',
                text: `Write in logarithmic form: ${sup(base, exp)} = <span class="math">${value}</span><br><small style="color:var(--text-muted)">Format: log_a(b) = c</small>`,
                answer: `log_${base}(${value}) = ${exp}`,
                accept: [`log_${base}(${value})=${exp}`],
                hint: 'a^c = b is equivalent to log_a(b) = c.',
                explainLatex: [
                    `${base}^{${exp}} = ${value}`,
                    `\\iff \\log_{${base}}(${value}) = ${exp}`
                ]
            };
        },
        function evaluateLog10() {
            const power = pick([1, 2, 3, 4, 5, 6]);
            const value = Math.pow(10, power);
            return {
                type: 'Logarithms',
                text: `Evaluate ${log10Html(value.toLocaleString('en-GB'))}`,
                answer: String(power),
                hint: 'log base 10 of 10^n = n.',
                explainLatex: [
                    `\\log(${value.toLocaleString('en-GB')}) = \\log(10^{${power}})`,
                    `= ${power}`
                ]
            };
        },
        function evaluateLogFraction() {
            // e.g. log_2(1/8) = -3
            const cases = [
                [2, 4, -2], [2, 8, -3], [2, 16, -4],
                [3, 9, -2], [3, 27, -3],
                [5, 25, -2], [5, 125, -3],
                [10, 10, -1], [10, 100, -2], [10, 1000, -3]
            ];
            const [base, den, answer] = pick(cases);
            return {
                type: 'Logarithms',
                text: `Evaluate ${logHtml(base, frac(1, den))}`,
                answer: String(answer),
                hint: `log_a(1/b) = -log_a(b). Think: ${base} to what negative power gives 1/${den}?`,
                explainLatex: [
                    `\\log_{${base}}\\left(\\frac{1}{${den}}\\right) = \\log_{${base}}(${base}^{${answer}})`,
                    `= ${answer}`
                ]
            };
        }
    ],

    // --- Laws of Logarithms ---

    'log-laws': [
        function logAdditionToSingle() {
            // log(a) + log(b) = log(ab)
            const base = pick([2, 3, 5, 10]);
            const a = randInt(2, 12);
            const b = randInt(2, 12);
            const product = a * b;
            const baseLabel = base === 10 ? 'log' : `log_${base}`;
            const baseHtml = base === 10 ? 'log' : `log<sub>${base}</sub>`;
            return {
                type: 'Laws of Logs',
                text: `Write as a single logarithm:<br><span class="math">${baseHtml}(${a}) + ${baseHtml}(${b})</span>`,
                answer: `${baseLabel}(${product})`,
                accept: [`${baseLabel}(${product})`],
                hint: 'log(a) + log(b) = log(a * b).',
                explainLatex: [
                    `\\log_{${base}}(${a}) + \\log_{${base}}(${b}) = \\log_{${base}}(${a} \\times ${b})`,
                    `= \\log_{${base}}(${product})`
                ]
            };
        },
        function logSubtractionToSingle() {
            // log(a) - log(b) = log(a/b)
            const base = pick([2, 3, 5, 10]);
            const b = randInt(2, 8);
            const multiplier = randInt(2, 6);
            const a = b * multiplier;
            const baseLabel = base === 10 ? 'log' : `log_${base}`;
            const baseHtml = base === 10 ? 'log' : `log<sub>${base}</sub>`;
            return {
                type: 'Laws of Logs',
                text: `Write as a single logarithm:<br><span class="math">${baseHtml}(${a}) - ${baseHtml}(${b})</span>`,
                answer: `${baseLabel}(${multiplier})`,
                accept: [`${baseLabel}(${multiplier})`],
                hint: 'log(a) - log(b) = log(a/b).',
                explainLatex: [
                    `\\log_{${base}}(${a}) - \\log_{${base}}(${b}) = \\log_{${base}}\\left(\\frac{${a}}{${b}}\\right)`,
                    `= \\log_{${base}}(${multiplier})`
                ]
            };
        },
        function logPowerRule() {
            // n*log(a) = log(a^n)
            const base = pick([2, 3, 10]);
            const a = randInt(2, 7);
            const n = pick([2, 3, 4]);
            const result = Math.pow(a, n);
            const baseLabel = base === 10 ? 'log' : `log_${base}`;
            const baseHtml = base === 10 ? 'log' : `log<sub>${base}</sub>`;
            return {
                type: 'Laws of Logs',
                text: `Write as a single logarithm:<br><span class="math">${n}${baseHtml}(${a})</span>`,
                answer: `${baseLabel}(${result})`,
                accept: [`${baseLabel}(${a}^${n})`],
                hint: `n * log(a) = log(a^n).`,
                explainLatex: [
                    `${n}\\log_{${base}}(${a}) = \\log_{${base}}(${a}^{${n}})`,
                    `= \\log_{${base}}(${result})`
                ]
            };
        },
        function expandLogExpression() {
            // log(x^2 * y / z) = 2log(x) + log(y) - log(z)
            const variable1 = pick(['x', 'y', 'a', 'p']);
            const variable2 = pick(['y', 'z', 'b', 'q'].filter(v => v !== variable1));
            const variable3 = pick(['z', 'w', 'c', 'r'].filter(v => v !== variable1 && v !== variable2));
            const exp1 = randInt(2, 4);
            return {
                type: 'Laws of Logs',
                text: `Expand: <span class="math">log(${variable1}<sup>${exp1}</sup>${variable2} / ${variable3})</span><br><small style="color:var(--text-muted)">Format: 2log(x) + log(y) - log(z)</small>`,
                answer: `${exp1}log(${variable1}) + log(${variable2}) - log(${variable3})`,
                accept: [
                    `${exp1}log(${variable1})+log(${variable2})-log(${variable3})`,
                    `${exp1} log(${variable1}) + log(${variable2}) - log(${variable3})`
                ],
                hint: 'Use: log(ab) = log(a) + log(b), log(a/b) = log(a) - log(b), log(a^n) = n*log(a).',
                explainLatex: [
                    `\\log\\left(\\frac{${variable1}^{${exp1}} ${variable2}}{${variable3}}\\right)`,
                    `= \\log(${variable1}^{${exp1}}) + \\log(${variable2}) - \\log(${variable3})`,
                    `= ${exp1}\\log(${variable1}) + \\log(${variable2}) - \\log(${variable3})`
                ]
            };
        },
        function combineLogExpression() {
            // 2log(3) + log(4) = log(9*4) = log(36)
            const a = randInt(2, 5);
            const n = pick([2, 3]);
            const b = randInt(2, 8);
            const aPow = Math.pow(a, n);
            const result = aPow * b;
            return {
                type: 'Laws of Logs',
                text: `Write as a single logarithm:<br><span class="math">${n}log(${a}) + log(${b})</span>`,
                answer: `log(${result})`,
                accept: [`log(${result})`],
                hint: 'First use the power rule to write n*log(a) = log(a^n), then use the addition rule.',
                explainLatex: [
                    `${n}\\log(${a}) + \\log(${b})`,
                    `= \\log(${a}^{${n}}) + \\log(${b})`,
                    `= \\log(${aPow}) + \\log(${b})`,
                    `= \\log(${aPow} \\times ${b}) = \\log(${result})`
                ]
            };
        },
        function combineLogSubtract() {
            // 3log(2) - log(4) = log(8) - log(4) = log(2)
            const a = randInt(2, 5);
            const n = pick([2, 3]);
            const aPow = Math.pow(a, n);
            // Pick b that divides aPow evenly
            const divisors = [];
            for (let i = 2; i < aPow; i++) {
                if (aPow % i === 0) divisors.push(i);
            }
            if (divisors.length === 0) return combineLogExpression();
            const b = pick(divisors);
            const result = aPow / b;
            return {
                type: 'Laws of Logs',
                text: `Write as a single logarithm:<br><span class="math">${n}log(${a}) - log(${b})</span>`,
                answer: `log(${result})`,
                accept: [`log(${result})`],
                hint: 'First use the power rule, then the subtraction rule: log(a) - log(b) = log(a/b).',
                explainLatex: [
                    `${n}\\log(${a}) - \\log(${b})`,
                    `= \\log(${a}^{${n}}) - \\log(${b})`,
                    `= \\log(${aPow}) - \\log(${b})`,
                    `= \\log\\left(\\frac{${aPow}}{${b}}\\right) = \\log(${result})`
                ]
            };
        }
    ],

    // --- Solving Equations Using Logarithms ---

    'log-equations': [
        function solveExponentialBasic() {
            // Solve a^x = b, answer to 3sf
            const base = pick([2, 3, 5, 7]);
            const target = pick([10, 15, 20, 30, 50, 75, 100, 200, 500, 1000]);
            const answer = round(Math.log(target) / Math.log(base), 3);
            return {
                type: 'Equations with Logs',
                text: `Solve ${sup(base, 'x')} = <span class="math">${target}</span><br><small style="color:var(--text-muted)">Give your answer to 3 significant figures</small>`,
                answer: String(answer),
                accept: [String(round(answer, 2))],
                hint: `Take logs of both sides: x * log(${base}) = log(${target}), so x = log(${target}) / log(${base}).`,
                explainLatex: [
                    `${base}^x = ${target}`,
                    `\\log(${base}^x) = \\log(${target})`,
                    `x \\log(${base}) = \\log(${target})`,
                    `x = \\frac{\\log(${target})}{\\log(${base})}`,
                    `x = ${answer} \\text{ (3 s.f.)}`
                ]
            };
        },
        function solveExponentialShifted() {
            // Solve a^(x+k) = b
            const base = pick([2, 3, 5]);
            const k = pick([1, 2, -1, -2, 3]);
            const target = pick([10, 20, 30, 50, 100, 150, 200]);
            const rawX = Math.log(target) / Math.log(base) - k;
            const answer = round(rawX, 3);
            const kStr = k > 0 ? `x + ${k}` : `x - ${Math.abs(k)}`;
            return {
                type: 'Equations with Logs',
                text: `Solve ${sup(base, kStr)} = <span class="math">${target}</span><br><small style="color:var(--text-muted)">Give your answer to 3 significant figures</small>`,
                answer: String(answer),
                accept: [String(round(answer, 2))],
                hint: `Take logs of both sides: (${kStr}) * log(${base}) = log(${target}). Solve for x.`,
                explainLatex: [
                    `${base}^{${kStr}} = ${target}`,
                    `(${kStr}) \\log(${base}) = \\log(${target})`,
                    `${kStr} = \\frac{\\log(${target})}{\\log(${base})} = ${round(Math.log(target) / Math.log(base), 4)}`,
                    `x = ${round(Math.log(target) / Math.log(base), 4)} ${k > 0 ? '-' : '+'} ${Math.abs(k)}`,
                    `x = ${answer} \\text{ (3 s.f.)}`
                ]
            };
        },
        function solveWithCoefficient() {
            // Solve c * a^x = d, e.g. 5 * 2^x = 160
            const base = pick([2, 3, 5]);
            const coeff = pick([2, 3, 4, 5, 6, 7, 8, 10]);
            const exp = randInt(2, 5);
            const result = coeff * Math.pow(base, exp);
            return {
                type: 'Equations with Logs',
                text: `Solve <span class="math">${coeff}</span> ${op('&times;')} ${sup(base, 'x')} = <span class="math">${result}</span>`,
                answer: String(exp),
                hint: `First divide both sides by ${coeff} to get ${base}^x = ${result / coeff}. Then take logs or recognise the power.`,
                explainLatex: [
                    `${coeff} \\times ${base}^x = ${result}`,
                    `${base}^x = \\frac{${result}}{${coeff}} = ${result / coeff}`,
                    `${base}^{${exp}} = ${result / coeff}`,
                    `\\therefore x = ${exp}`
                ]
            };
        },
        function solveExponentialNonInteger() {
            // Solve c * a^x = d where answer is non-integer
            const base = pick([2, 3, 5]);
            const coeff = pick([3, 4, 5, 6, 8, 10]);
            const target = pick([50, 100, 200, 500, 1000]);
            const divided = target / coeff;
            const answer = round(Math.log(divided) / Math.log(base), 3);
            return {
                type: 'Equations with Logs',
                text: `Solve <span class="math">${coeff}</span> ${op('&times;')} ${sup(base, 'x')} = <span class="math">${target}</span><br><small style="color:var(--text-muted)">Give your answer to 3 significant figures</small>`,
                answer: String(answer),
                accept: [String(round(answer, 2))],
                hint: `Divide both sides by ${coeff}, then take logs: x = log(${divided}) / log(${base}).`,
                explainLatex: [
                    `${coeff} \\times ${base}^x = ${target}`,
                    `${base}^x = \\frac{${target}}{${coeff}} = ${round(divided, 4)}`,
                    `x = \\frac{\\log(${round(divided, 4)})}{\\log(${base})}`,
                    `x = ${answer} \\text{ (3 s.f.)}`
                ]
            };
        },
        function solveDoubleExponential() {
            // Solve a^x = b^(x-k), using logs
            const a = pick([2, 3, 5]);
            const b = pick([2, 3, 5, 7].filter(v => v !== a));
            const k = pick([1, 2, 3]);
            // a^x = b^(x-k) => x*log(a) = (x-k)*log(b) => x(log(a)-log(b)) = -k*log(b) => x = -k*log(b)/(log(a)-log(b))
            const answer = round(-k * Math.log(b) / (Math.log(a) - Math.log(b)), 3);
            return {
                type: 'Equations with Logs',
                text: `Solve ${sup(a, 'x')} = ${sup(b, 'x - ' + k)}<br><small style="color:var(--text-muted)">Give your answer to 3 significant figures</small>`,
                answer: String(answer),
                accept: [String(round(answer, 2))],
                hint: 'Take logs of both sides and collect x terms.',
                explainLatex: [
                    `${a}^x = ${b}^{x-${k}}`,
                    `x\\log(${a}) = (x-${k})\\log(${b})`,
                    `x\\log(${a}) = x\\log(${b}) - ${k}\\log(${b})`,
                    `x(\\log(${a}) - \\log(${b})) = -${k}\\log(${b})`,
                    `x = \\frac{-${k}\\log(${b})}{\\log(${a}) - \\log(${b})} = ${answer} \\text{ (3 s.f.)}`
                ]
            };
        }
    ],

    // --- Change of Base ---

    'change-of-base': [
        function changeOfBaseEvaluate() {
            // Evaluate log_a(b) using change of base, answer to 3sf
            const base = pick([2, 3, 5, 6, 7, 8, 9]);
            const value = pick([3, 5, 6, 7, 10, 11, 12, 13, 15, 20, 30, 50, 100].filter(v => v !== base));
            const answer = round(Math.log(value) / Math.log(base), 3);
            return {
                type: 'Change of Base',
                text: `Evaluate ${logHtml(base, value)} using the change of base formula.<br><small style="color:var(--text-muted)">Give your answer to 3 significant figures</small>`,
                answer: String(answer),
                accept: [String(round(answer, 2))],
                hint: `log_a(b) = log(b) / log(a). Use your calculator for log base 10.`,
                explainLatex: [
                    `\\log_{${base}}(${value}) = \\frac{\\log(${value})}{\\log(${base})}`,
                    `= \\frac{${round(Math.log10(value), 5)}}{${round(Math.log10(base), 5)}}`,
                    `= ${answer} \\text{ (3 s.f.)}`
                ]
            };
        },
        function changeOfBaseSimplify() {
            // log_a(b) * log_b(a) = 1
            const a = pick([2, 3, 5, 7]);
            const b = pick([2, 3, 5, 7].filter(v => v !== a));
            return {
                type: 'Change of Base',
                text: `Evaluate ${logHtml(a, b)} ${op('&times;')} ${logHtml(b, a)}`,
                answer: '1',
                hint: 'Use change of base: log_a(b) = log(b)/log(a) and log_b(a) = log(a)/log(b). Multiply them.',
                explainLatex: [
                    `\\log_{${a}}(${b}) \\times \\log_{${b}}(${a})`,
                    `= \\frac{\\log(${b})}{\\log(${a})} \\times \\frac{\\log(${a})}{\\log(${b})}`,
                    `= 1`
                ]
            };
        },
        function changeOfBaseChain() {
            // log_a(b) * log_b(c) = log_a(c)
            const a = pick([2, 3, 5]);
            const b = pick([2, 3, 5, 7].filter(v => v !== a));
            // c = a^n for a nice integer answer
            const n = randInt(2, 4);
            const c = Math.pow(a, n);
            if (c > 1000 || c === b) return changeOfBaseEvaluate();
            return {
                type: 'Change of Base',
                text: `Evaluate ${logHtml(a, b)} ${op('&times;')} ${logHtml(b, c)}`,
                answer: String(n),
                hint: `Use the chain rule: log_a(b) * log_b(c) = log_a(c). Then evaluate log_${a}(${c}).`,
                explainLatex: [
                    `\\log_{${a}}(${b}) \\times \\log_{${b}}(${c})`,
                    `= \\log_{${a}}(${c}) \\quad \\text{(chain rule)}`,
                    `= \\log_{${a}}(${a}^{${n}})`,
                    `= ${n}`
                ]
            };
        },
        function changeOfBaseReciprocal() {
            // log_a(b) = 1 / log_b(a)
            const cases = [
                [2, 8, 3], [3, 27, 3], [2, 16, 4], [5, 25, 2], [4, 64, 3], [3, 81, 4]
            ];
            const [base, value, answer] = pick(cases);
            return {
                type: 'Change of Base',
                text: `Given that ${logHtml(value, base)} = ${frac(1, answer)}, find ${logHtml(base, value)}`,
                answer: String(answer),
                hint: `log_a(b) and log_b(a) are reciprocals: log_a(b) = 1 / log_b(a).`,
                explainLatex: [
                    `\\log_{${value}}(${base}) = \\frac{1}{${answer}}`,
                    `\\log_{${base}}(${value}) = \\frac{1}{\\log_{${value}}(${base})}`,
                    `= \\frac{1}{\\frac{1}{${answer}}} = ${answer}`
                ]
            };
        },
        function changeOfBaseConvert() {
            // Express log_a(x) in terms of log_b
            const a = pick([2, 3, 5]);
            const b = pick([2, 3, 5, 10].filter(v => v !== a));
            const bLabel = b === 10 ? 'log' : `log_${b}`;
            const x = pick(['x', 'y', 'n', 'k']);
            return {
                type: 'Change of Base',
                text: `Express ${logHtml(a, x)} in terms of ${b === 10 ? '<span class="math">log</span>' : logHtml(b, '')}.<br><small style="color:var(--text-muted)">Format: ${bLabel}(${x}) / ${bLabel}(${a})</small>`,
                answer: `${bLabel}(${x})/${bLabel}(${a})`,
                accept: [`${bLabel}(${x}) / ${bLabel}(${a})`],
                hint: `Change of base formula: log_a(x) = log_b(x) / log_b(a).`,
                explainLatex: [
                    `\\log_{${a}}(${x}) = \\frac{\\log_{${b}}(${x})}{\\log_{${b}}(${a})}`
                ]
            };
        }
    ]
};

// Default hints per topic
const defaultHints = {
    'Laws of Indices': 'Multiply: add powers. Divide: subtract powers. Power of power: multiply. Negative: reciprocal. Fractional: root.',
    'Logarithms': 'log_a(b) = c means a^c = b. log_a(1) = 0. log_a(a) = 1.',
    'Laws of Logs': 'log(ab) = log(a) + log(b). log(a/b) = log(a) - log(b). log(a^n) = n*log(a).',
    'Equations with Logs': 'Take logs of both sides. Use log(a^x) = x*log(a). Rearrange for x.',
    'Change of Base': 'log_a(b) = log(b) / log(a). This lets you evaluate any log using your calculator.'
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

    // Inject math-field via innerHTML (P56 pattern)
    document.getElementById('answer-section').innerHTML =
        '<math-field class="answer-input" id="answer-input" placeholder="Your answer..."></math-field>' +
        '<button class="submit-btn" id="submit-btn">Check</button>';

    // Bind events after MathLive upgrades the element (P56 pattern: setTimeout 200ms)
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
    // If already answered, go to next question (with debounce)
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

    // Change Check button to Next
    const btn = document.getElementById('submit-btn');
    if (btn) { btn.textContent = 'Next'; }

    updateScore();
    updateStreak(isCorrect);

    // Persist stats + cloud sync
    if (typeof saveActivityStats === 'function') {
        saveActivityStats('logarithms', state, isCorrect);
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

// Hint button
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
        loadActivityStats('logarithms', state);
        updateScore();
    }
    updateStreak(null);
    showQuestion();
}

init();
