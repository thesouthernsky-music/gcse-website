/* ==============================
   Identities & Inequalities Trainer - Question Generator
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

function frac(num, den) {
    return `<span class="math"><span class="frac"><span class="frac-num">${num}</span><span class="frac-den">${den}</span></span></span>`;
}

function op(symbol) {
    return `<span class="op">${symbol}</span>`;
}

function sup(base, exp) {
    return `<span class="math">${base}<sup>${exp}</sup></span>`;
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

    // Clean up remaining backslashes
    s = s.replace(/\\/g, '');

    // \geq, \leq, \ge, \le -> >=, <=
    s = s.replace(/geq/g, '>=').replace(/leq/g, '<=');
    s = s.replace(/ge(?=[^a-z]|$)/g, '>=').replace(/le(?=[^a-z]|$)/g, '<=');

    return s;
}

// Strip all spaces, lowercase, normalize for comparison
function normalizeAnswer(s) {
    return s
        .toLowerCase()
        .replace(/\s+/g, '')
        .replace(/×/g, 'x')
        .replace(/\*/g, 'x')
        .replace(/·/g, 'x')
        .replace(/≥/g, '>=')
        .replace(/≤/g, '<=')
        .replace(/⩾/g, '>=')
        .replace(/⩽/g, '<=')
        .trim();
}

// ==============================
// Polynomial helpers
// ==============================

// Format a coefficient for display: +3, -2, +1 (as ""), -1 (as "-")
function formatCoeff(c, isLeading) {
    if (c === 0) return '';
    if (isLeading) return c === 1 ? '' : c === -1 ? '-' : String(c);
    if (c === 1) return ' + ';
    if (c === -1) return ' - ';
    return c > 0 ? ` + ${c}` : ` - ${Math.abs(c)}`;
}

// Format polynomial ax^3 + bx^2 + cx + d as HTML
function formatCubic(a, b, c, d) {
    let s = '';
    // x^3 term
    if (a === 1) s += 'x<sup>3</sup>';
    else if (a === -1) s += '-x<sup>3</sup>';
    else s += `${a}x<sup>3</sup>`;
    // x^2 term
    if (b !== 0) {
        const sign = b > 0 ? ' + ' : ' - ';
        const abs = Math.abs(b);
        s += `${sign}${abs === 1 ? '' : abs}x<sup>2</sup>`;
    }
    // x term
    if (c !== 0) {
        const sign = c > 0 ? ' + ' : ' - ';
        const abs = Math.abs(c);
        s += `${sign}${abs === 1 ? '' : abs}x`;
    }
    // constant
    if (d !== 0) {
        s += d > 0 ? ` + ${d}` : ` - ${Math.abs(d)}`;
    }
    return `<span class="math">${s}</span>`;
}

// Format polynomial as LaTeX
function formatCubicLatex(a, b, c, d) {
    let s = '';
    if (a === 1) s += 'x^3';
    else if (a === -1) s += '-x^3';
    else s += `${a}x^3`;
    if (b !== 0) {
        const sign = b > 0 ? '+' : '-';
        const abs = Math.abs(b);
        s += `${sign}${abs === 1 ? '' : abs}x^2`;
    }
    if (c !== 0) {
        const sign = c > 0 ? '+' : '-';
        const abs = Math.abs(c);
        s += `${sign}${abs === 1 ? '' : abs}x`;
    }
    if (d !== 0) {
        s += d > 0 ? `+${d}` : `${d}`;
    }
    return s;
}

// Format quadratic ax^2 + bx + c as HTML
function formatQuadratic(a, b, c) {
    let s = '';
    if (a === 1) s += 'x<sup>2</sup>';
    else if (a === -1) s += '-x<sup>2</sup>';
    else s += `${a}x<sup>2</sup>`;
    if (b !== 0) {
        const sign = b > 0 ? ' + ' : ' - ';
        const abs = Math.abs(b);
        s += `${sign}${abs === 1 ? '' : abs}x`;
    }
    if (c !== 0) {
        s += c > 0 ? ` + ${c}` : ` - ${Math.abs(c)}`;
    }
    return s;
}

// Format quadratic as LaTeX
function formatQuadraticLatex(a, b, c) {
    let s = '';
    if (a === 1) s += 'x^2';
    else if (a === -1) s += '-x^2';
    else s += `${a}x^2`;
    if (b !== 0) {
        const sign = b > 0 ? '+' : '-';
        const abs = Math.abs(b);
        s += `${sign}${abs === 1 ? '' : abs}x`;
    }
    if (c !== 0) {
        s += c > 0 ? `+${c}` : `${c}`;
    }
    return s;
}

// Format linear factor (x - r) as HTML
function formatFactor(r) {
    if (r === 0) return 'x';
    return r > 0 ? `(x - ${r})` : `(x + ${Math.abs(r)})`;
}

// Format linear factor as LaTeX
function formatFactorLatex(r) {
    if (r === 0) return 'x';
    return r > 0 ? `(x-${r})` : `(x+${Math.abs(r)})`;
}

// Evaluate cubic at x = a
function evalCubic(a, b, c, d, x) {
    return a * x * x * x + b * x * x + c * x + d;
}

// Generate a monic cubic with three integer roots
function makeCubicFromRoots(r1, r2, r3) {
    // (x - r1)(x - r2)(x - r3) = x^3 - (r1+r2+r3)x^2 + (r1r2+r1r3+r2r3)x - r1r2r3
    const a = 1;
    const b = -(r1 + r2 + r3);
    const c = r1 * r2 + r1 * r3 + r2 * r3;
    const d = -(r1 * r2 * r3);
    return { a, b, c, d };
}

// Synthetic division: divide (a,b,c,d) by (x - r), return quotient [q1, q2, q3] and remainder
function syntheticDivide(a, b, c, d, r) {
    const q1 = a;
    const q2 = a * r + b;
    const q3 = q2 * r + c;
    const rem = q3 * r + d;
    return { quotient: [q1, q2, q3], remainder: rem };
}

// ==============================
// Question Generators
// ==============================

const generators = {

    // --- Factor Theorem ---

    'factor-theorem': [
        function factorTheoremEvaluate() {
            // Generate cubic with integer roots, ask f(a) where (x-a) is a factor
            const roots = [];
            while (roots.length < 3) {
                const r = randInt(-5, 5);
                if (r !== 0 && !roots.includes(r)) roots.push(r);
            }
            const { a, b, c, d } = makeCubicFromRoots(roots[0], roots[1], roots[2]);
            const testRoot = pick(roots);

            return {
                type: 'Factor Theorem',
                text: `Given f(x) = ${formatCubic(a, b, c, d)}, and that ${formatFactor(testRoot)} is a factor of f(x), what is f(${testRoot})?`,
                answer: '0',
                hint: 'If (x - a) is a factor of f(x), then by the Factor Theorem, f(a) = 0.',
                explainLatex: [
                    `f(x) = ${formatCubicLatex(a, b, c, d)}`,
                    `\\text{If } ${formatFactorLatex(testRoot)} \\text{ is a factor, then } f(${testRoot}) = 0`,
                    `\\text{This is the Factor Theorem.}`
                ]
            };
        },

        function factorTheoremFactorise() {
            // Generate cubic with 3 integer roots, give one factor, ask to factorise completely
            const roots = [];
            while (roots.length < 3) {
                const r = randInt(-4, 4);
                if (r !== 0 && !roots.includes(r)) roots.push(r);
            }
            roots.sort((a, b) => a - b);
            const { a, b, c, d } = makeCubicFromRoots(roots[0], roots[1], roots[2]);
            const givenRoot = pick(roots);

            // Answer: product of all three factors
            const answer = roots.map(r => formatFactor(r)).join('');
            // Accepted variants: different orderings
            const perms = [
                [0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]
            ];
            const accept = perms.map(p =>
                p.map(i => formatFactor(roots[i])).join('')
            );

            // Normalize the factors for matching: strip HTML
            const answerClean = roots.map(r => {
                if (r === 0) return 'x';
                return r > 0 ? `(x-${r})` : `(x+${Math.abs(r)})`;
            }).join('');

            const acceptClean = perms.map(p =>
                p.map(i => {
                    const r = roots[i];
                    if (r === 0) return 'x';
                    return r > 0 ? `(x-${r})` : `(x+${Math.abs(r)})`;
                }).join('')
            );

            return {
                type: 'Factor Theorem',
                text: `Given that ${formatFactor(givenRoot)} is a factor of f(x) = ${formatCubic(a, b, c, d)}, factorise f(x) completely.<br><small style="color:var(--text-muted)">Format: (x-a)(x-b)(x-c)</small>`,
                answer: answerClean,
                accept: acceptClean,
                hint: 'Divide f(x) by the given factor to get a quadratic, then factorise the quadratic.',
                explainLatex: [
                    `f(x) = ${formatCubicLatex(a, b, c, d)}`,
                    `f(x) = ${roots.map(r => formatFactorLatex(r)).join('')}`
                ]
            };
        }
    ],

    // --- Remainder Theorem ---

    'remainder-theorem': [
        function remainderTheoremBasic() {
            // f(x) = x^3 + bx^2 + cx + d, find remainder when divided by (x - a)
            const coeffB = randInt(-5, 5);
            const coeffC = randInt(-8, 8);
            const coeffD = randInt(-10, 10);
            let divisor = randInt(-4, 4);
            if (divisor === 0) divisor = 1;

            const remainder = evalCubic(1, coeffB, coeffC, coeffD, divisor);

            return {
                type: 'Remainder Theorem',
                text: `Find the remainder when f(x) = ${formatCubic(1, coeffB, coeffC, coeffD)} is divided by ${formatFactor(divisor)}.`,
                answer: String(remainder),
                hint: 'By the Remainder Theorem, the remainder when f(x) is divided by (x - a) is f(a). Substitute a into f(x).',
                explainLatex: [
                    `f(x) = ${formatCubicLatex(1, coeffB, coeffC, coeffD)}`,
                    `\\text{Remainder} = f(${divisor})`,
                    `= (${divisor})^3 ${coeffB >= 0 ? '+' : ''}${coeffB}(${divisor})^2 ${coeffC >= 0 ? '+' : ''}${coeffC}(${divisor}) ${coeffD >= 0 ? '+' : ''}${coeffD}`,
                    `= ${remainder}`
                ]
            };
        },

        function remainderTheoremFindCoeff() {
            // f(x) = x^3 + kx^2 + cx + d, remainder R when divided by (x-a), find k
            const roots = [randInt(-3, 3) || 1, randInt(-3, 3) || 2];
            const a = randInt(-3, 3) || 1;
            // Ensure a is not a root to get a non-zero remainder
            if (roots.includes(a)) roots[0] = a + 1;

            const coeffC = randInt(-5, 5);
            const coeffD = randInt(-6, 6);
            // Pick k, compute the remainder
            const k = randInt(-4, 4);
            const remainder = evalCubic(1, k, coeffC, coeffD, a);

            return {
                type: 'Remainder Theorem',
                text: `When f(x) = x<sup>3</sup> + kx<sup>2</sup> ${coeffC >= 0 ? '+' : '-'} ${Math.abs(coeffC) === 1 ? '' : Math.abs(coeffC)}x ${coeffD >= 0 ? '+' : '-'} ${Math.abs(coeffD)} is divided by ${formatFactor(a)}, the remainder is <span class="math">${remainder}</span>. Find the value of k.`,
                answer: String(k),
                hint: 'By the Remainder Theorem, f(a) = remainder. Substitute x = a and solve for k.',
                explainLatex: [
                    `f(${a}) = ${remainder}`,
                    `(${a})^3 + k(${a})^2 ${coeffC >= 0 ? '+' : ''}${coeffC}(${a}) ${coeffD >= 0 ? '+' : ''}${coeffD} = ${remainder}`,
                    `${a * a * a} + ${a * a}k ${coeffC * a >= 0 ? '+' : ''}${coeffC * a} ${coeffD >= 0 ? '+' : ''}${coeffD} = ${remainder}`,
                    `${a * a}k = ${remainder - (a * a * a + coeffC * a + coeffD)}`,
                    `k = ${k}`
                ]
            };
        }
    ],

    // --- Polynomial Division ---

    'polynomial-division': [
        function polyDivisionBasic() {
            // Divide x^3 + bx^2 + cx + d by (x - r), give quotient
            // Use roots to ensure clean division (remainder 0) most of the time
            const useClean = Math.random() > 0.3;
            let coeffA = 1, coeffB, coeffC, coeffD, divisor, remainder;

            if (useClean) {
                // Build from roots so it divides evenly
                const r1 = randInt(-4, 4) || 1;
                const r2 = randInt(-4, 4) || 2;
                const r3 = randInt(-4, 4) || -1;
                const poly = makeCubicFromRoots(r1, r2, r3);
                coeffB = poly.b; coeffC = poly.c; coeffD = poly.d;
                divisor = pick([r1, r2, r3]);
                remainder = 0;
            } else {
                coeffB = randInt(-5, 5);
                coeffC = randInt(-6, 6);
                coeffD = randInt(-8, 8);
                divisor = randInt(-3, 3) || 1;
                remainder = evalCubic(1, coeffB, coeffC, coeffD, divisor);
            }

            const { quotient } = syntheticDivide(1, coeffB, coeffC, coeffD, divisor);
            const [q1, q2, q3] = quotient;

            // Format quotient answer: ax^2+bx+c
            let ansStr = '';
            if (q1 === 1) ansStr += 'x^2';
            else if (q1 === -1) ansStr += '-x^2';
            else ansStr += `${q1}x^2`;
            if (q2 !== 0) {
                ansStr += q2 > 0 ? `+${q2 === 1 ? '' : q2}x` : `${q2 === -1 ? '-' : q2}x`;
            }
            if (q3 !== 0) {
                ansStr += q3 > 0 ? `+${q3}` : `${q3}`;
            }

            const qText = remainder === 0
                ? `Divide ${formatCubic(1, coeffB, coeffC, coeffD)} by ${formatFactor(divisor)}. Give the quotient.`
                : `Find the quotient when ${formatCubic(1, coeffB, coeffC, coeffD)} is divided by ${formatFactor(divisor)}.`;

            // Accept variants with spaces
            const acceptVariants = [
                ansStr.replace(/\+/g, ' + ').replace(/-/g, ' - ').replace(/^ - /, '-'),
                ansStr.replace(/\^2/g, '^2').replace(/\^/g, '^')
            ];

            return {
                type: 'Polynomial Division',
                text: `${qText}<br><small style="color:var(--text-muted)">Format: ax^2+bx+c</small>`,
                answer: ansStr,
                accept: acceptVariants,
                hint: 'Use polynomial long division or synthetic division. Divide the leading term, multiply back, subtract, and repeat.',
                explainLatex: [
                    `(${formatCubicLatex(1, coeffB, coeffC, coeffD)}) \\div ${formatFactorLatex(divisor)}`,
                    `\\text{Quotient} = ${formatQuadraticLatex(q1, q2, q3)}${remainder !== 0 ? `, \\text{ remainder } ${remainder}` : ''}`
                ]
            };
        }
    ],

    // --- Linear Inequalities ---

    'linear-inequalities': [
        function linearInequalitySimple() {
            // ax + b > c  or  ax + b < c  etc.
            const a = randInt(2, 8) * pick([1, -1]);
            const b = randInt(1, 15) * pick([1, -1]);
            const rhs = randInt(1, 20) * pick([1, -1]);
            const ineqType = pick(['>', '<', '>=', '<=']);
            const ineqDisplay = ineqType.replace('>=', '&ge;').replace('<=', '&le;');

            // Solve: ax + b > rhs  =>  ax > rhs - b  =>  x > (rhs-b)/a  (flip if a<0)
            const diff = rhs - b;
            const g = gcd(Math.abs(diff), Math.abs(a));
            const numSimp = diff / g;
            const denSimp = a / g;

            let resultIneq = ineqType;
            let ansNum, ansDen;
            if (denSimp < 0) {
                // Flip inequality
                if (resultIneq === '>') resultIneq = '<';
                else if (resultIneq === '<') resultIneq = '>';
                else if (resultIneq === '>=') resultIneq = '<=';
                else if (resultIneq === '<=') resultIneq = '>=';
                ansNum = -numSimp;
                ansDen = -denSimp;
            } else {
                ansNum = numSimp;
                ansDen = denSimp;
            }

            const ansVal = ansDen === 1 ? String(ansNum) : `${ansNum}/${ansDen}`;
            const answer = `x${resultIneq}${ansVal}`;

            // Accept variants with spaces
            const accept = [
                `x ${resultIneq} ${ansVal}`,
                `x${resultIneq} ${ansVal}`,
                `x ${resultIneq}${ansVal}`
            ];

            // Display
            const aDisplay = a === 1 ? '' : a === -1 ? '-' : String(a);
            const bSign = b > 0 ? ` + ${b}` : ` - ${Math.abs(b)}`;
            const qText = `Solve ${aDisplay}x${bSign} ${ineqDisplay} ${rhs}`;

            return {
                type: 'Linear Inequalities',
                text: `${qText}<br><small style="color:var(--text-muted)">Format: x > 2 or x >= 1/3</small>`,
                answer: answer,
                accept: accept,
                hint: 'Isolate x by subtracting from both sides, then dividing. Remember: if you divide by a negative number, flip the inequality sign.'
            };
        },

        function compoundInequality() {
            // a < 2x + c < b
            const coeff = pick([2, 3, 4, 5]);
            const offset = randInt(-5, 5);
            // Pick two values for the bounds after solving
            let lo = randInt(-5, 3);
            let hi = lo + randInt(2, 6);

            // The inequality is: coeff*lo + offset < coeff*x + offset < coeff*hi + offset
            const lhsBound = coeff * lo + offset;
            const rhsBound = coeff * hi + offset;

            const ineqType = pick(['<', '<=']);
            const ineqDisplay = ineqType === '<=' ? '&le;' : '&lt;';

            const offsetDisplay = offset >= 0 ? ` + ${offset}` : ` - ${Math.abs(offset)}`;
            const coeffDisplay = coeff === 1 ? '' : String(coeff);

            const answer = `${lo}${ineqType}x${ineqType}${hi}`;
            const accept = [
                `${lo} ${ineqType} x ${ineqType} ${hi}`,
                `${lo}${ineqType} x ${ineqType}${hi}`,
                `${lo} ${ineqType}x${ineqType} ${hi}`
            ];

            return {
                type: 'Linear Inequalities',
                text: `Solve ${lhsBound} ${ineqDisplay} ${coeffDisplay}x${offsetDisplay} ${ineqDisplay} ${rhsBound}<br><small style="color:var(--text-muted)">Format: a < x < b or a <= x <= b</small>`,
                answer: answer,
                accept: accept,
                hint: 'Subtract the constant from all three parts, then divide all three parts by the coefficient of x.'
            };
        }
    ],

    // --- Quadratic Inequalities ---

    'quadratic-inequalities': [
        function quadInequalityGreaterThan() {
            // (x - r1)(x - r2) > 0 type
            let r1 = randInt(-6, 6);
            let r2 = randInt(-6, 6);
            while (r2 === r1) r2 = randInt(-6, 6);
            if (r1 > r2) [r1, r2] = [r2, r1];

            // Expand: x^2 - (r1+r2)x + r1*r2
            const a = 1;
            const b = -(r1 + r2);
            const c = r1 * r2;

            const ineqType = pick(['>', '>=']);
            const ineqDisplay = ineqType === '>=' ? '&ge;' : '&gt;';

            // x^2 + bx + c > 0  =>  x < r1 or x > r2 (for >)
            // x^2 + bx + c < 0  =>  r1 < x < r2 (for <)
            const ltType = ineqType === '>' ? '<' : '<=';
            const gtType = ineqType;

            const answer = `x${ltType}${r1}orx${gtType}${r2}`;
            const accept = [
                `x ${ltType} ${r1} or x ${gtType} ${r2}`,
                `x${ltType}${r1} or x${gtType}${r2}`,
                `x ${ltType}${r1} or x ${gtType}${r2}`,
                `x${ltType} ${r1} or x${gtType} ${r2}`,
                // Reversed order
                `x${gtType}${r2}orx${ltType}${r1}`,
                `x ${gtType} ${r2} or x ${ltType} ${r1}`,
                `x${gtType}${r2} or x${ltType}${r1}`
            ];

            return {
                type: 'Quadratic Inequalities',
                text: `Solve <span class="math">${formatQuadratic(a, b, c)}</span> ${ineqDisplay} 0<br><small style="color:var(--text-muted)">Format: x < 2 or x > 5</small>`,
                answer: `x ${ltType} ${r1} or x ${gtType} ${r2}`,
                accept: accept,
                hint: 'Factorise the quadratic. For > 0, the solution is outside the roots: x < smaller root or x > larger root.',
                explainLatex: [
                    `${formatQuadraticLatex(a, b, c)} ${ineqType === '>=' ? '\\geq' : '>'} 0`,
                    `${formatFactorLatex(r1)}${formatFactorLatex(r2)} ${ineqType === '>=' ? '\\geq' : '>'} 0`,
                    `x ${ltType === '<=' ? '\\leq' : '<'} ${r1} \\text{ or } x ${ineqType === '>=' ? '\\geq' : '>'} ${r2}`
                ]
            };
        },

        function quadInequalityLessThan() {
            // (x - r1)(x - r2) < 0 type
            let r1 = randInt(-6, 6);
            let r2 = randInt(-6, 6);
            while (r2 === r1) r2 = randInt(-6, 6);
            if (r1 > r2) [r1, r2] = [r2, r1];

            const a = 1;
            const b = -(r1 + r2);
            const c = r1 * r2;

            const ineqType = pick(['<', '<=']);
            const ineqDisplay = ineqType === '<=' ? '&le;' : '&lt;';

            // x^2 + bx + c < 0  =>  r1 < x < r2
            const boundIneq = ineqType;

            const answer = `${r1}${boundIneq}x${boundIneq}${r2}`;
            const accept = [
                `${r1} ${boundIneq} x ${boundIneq} ${r2}`,
                `${r1}${boundIneq} x ${boundIneq}${r2}`,
                `${r1} ${boundIneq}x${boundIneq} ${r2}`,
                // Also accept "x > r1 and x < r2" style
                `x${ineqType === '<' ? '>' : '>='}${r1}andx${ineqType}${r2}`,
                `x ${ineqType === '<' ? '>' : '>='} ${r1} and x ${ineqType} ${r2}`
            ];

            return {
                type: 'Quadratic Inequalities',
                text: `Solve <span class="math">${formatQuadratic(a, b, c)}</span> ${ineqDisplay} 0<br><small style="color:var(--text-muted)">Format: 2 < x < 5</small>`,
                answer: `${r1} ${boundIneq} x ${boundIneq} ${r2}`,
                accept: accept,
                hint: 'Factorise the quadratic. For < 0, the solution is between the roots: smaller root < x < larger root.',
                explainLatex: [
                    `${formatQuadraticLatex(a, b, c)} ${ineqType === '<=' ? '\\leq' : '<'} 0`,
                    `${formatFactorLatex(r1)}${formatFactorLatex(r2)} ${ineqType === '<=' ? '\\leq' : '<'} 0`,
                    `${r1} ${ineqType === '<=' ? '\\leq' : '<'} x ${ineqType === '<=' ? '\\leq' : '<'} ${r2}`
                ]
            };
        }
    ]
};

// Default hints per topic
const defaultHints = {
    'Factor Theorem': 'The Factor Theorem states: (x - a) is a factor of f(x) if and only if f(a) = 0.',
    'Remainder Theorem': 'The Remainder Theorem states: when f(x) is divided by (x - a), the remainder is f(a).',
    'Polynomial Division': 'Use polynomial long division or synthetic division. Divide leading terms, multiply back, subtract, bring down, repeat.',
    'Linear Inequalities': 'Solve like an equation, but flip the inequality sign when multiplying or dividing by a negative number.',
    'Quadratic Inequalities': 'Factorise, find the roots, then sketch the parabola to determine the solution region.'
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

    // Bind events after MathLive upgrades the element
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
        saveActivityStats('identities', state, isCorrect);
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
        loadActivityStats('identities', state);
        updateScore();
    }
    updateStreak(null);
    showQuestion();
}

init();
