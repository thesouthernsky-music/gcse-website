/* ==============================
   Quadratics Trainer - Question Generator
   Edexcel iGCSE Further Pure Maths (4PM1)
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

// Format a signed term for display: +3, -5, etc
function signedTerm(coeff, variable, forceSign) {
    if (coeff === 0) return '';
    const sign = coeff > 0 ? (forceSign ? ' + ' : '') : ' - ';
    const abs = Math.abs(coeff);
    if (!variable) return sign + abs;
    if (abs === 1) return sign + variable;
    return sign + abs + variable;
}

// Format quadratic ax^2 + bx + c for display HTML
function formatQuadratic(a, b, c) {
    let parts = '';
    // ax^2
    if (a === 1) parts += 'x<sup>2</sup>';
    else if (a === -1) parts += '-x<sup>2</sup>';
    else parts += a + 'x<sup>2</sup>';
    // bx
    if (b !== 0) {
        if (b > 0) parts += ' + ';
        else parts += ' - ';
        const absB = Math.abs(b);
        parts += (absB === 1 ? '' : absB) + 'x';
    }
    // c
    if (c !== 0) {
        if (c > 0) parts += ' + ';
        else parts += ' - ';
        parts += Math.abs(c);
    }
    return `<span class="math">${parts}</span>`;
}

// Parse MathLive LaTeX output into a usable string for answer comparison
function parseLatex(raw) {
    let s = raw.replace(/\\left|\\right/g, '').replace(/\s+/g, '').trim();

    // Normalize sqrt FIRST
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

    // --- Factorising ---

    'factorising': [
        // Factorise x^2 + bx + c (monic, integer roots)
        function factoriseSimple() {
            const r1 = randInt(-9, 9);
            let r2 = randInt(-9, 9);
            if (r1 === 0 && r2 === 0) r2 = randInt(1, 9);
            // Coefficients of x^2 + bx + c
            const b = -(r1 + r2);
            const c = r1 * r2;

            const answer = buildFactorisedAnswer(1, r1, 1, r2);
            const accept = buildFactorisedAccept(1, r1, 1, r2);

            return {
                type: 'Factorising',
                text: `Factorise ${formatQuadratic(1, b, c)}`,
                answer: answer,
                accept: accept,
                hint: 'Find two numbers that multiply to give c and add to give b.',
                explainLatex: [
                    `x^2 ${b >= 0 ? '+' : ''} ${b}x ${c >= 0 ? '+' : ''} ${c}`,
                    `\\text{Roots: } ${r1}, ${r2}`,
                    `= (x ${r1 <= 0 ? '+' : '-'} ${Math.abs(r1)})(x ${r2 <= 0 ? '+' : '-'} ${Math.abs(r2)})`
                ]
            };
        },

        // Factorise ax^2 + bx + c where a > 1
        function factoriseNonMonic() {
            // Generate (ax + p)(x + q) form
            const a = pick([2, 3, 5]);
            const p = randInt(-6, 6);
            const q = randInt(-6, 6);
            if (p === 0 && q === 0) return factoriseNonMonic();

            // Expand: ax^2 + (aq + p)x + pq
            const bCoeff = a * q + p;
            const cCoeff = p * q;

            const answer = buildFactorisedAnswer(a, -p, 1, -q);
            const accept = buildFactorisedAccept(a, -p, 1, -q);

            return {
                type: 'Factorising',
                text: `Factorise ${formatQuadratic(a, bCoeff, cCoeff)}`,
                answer: answer,
                accept: accept,
                hint: 'Find two numbers that multiply to give ac and add to give b, then split the middle term.'
            };
        },

        // Difference of two squares: x^2 - a^2 = (x+a)(x-a)
        function differenceTwoSquares() {
            const a = randInt(2, 12);
            const c = -(a * a);

            const answer = `(x+${a})(x-${a})`;
            const accept = [
                `(x-${a})(x+${a})`,
                `(x + ${a})(x - ${a})`,
                `(x - ${a})(x + ${a})`
            ];

            return {
                type: 'Factorising',
                text: `Factorise ${formatQuadratic(1, 0, c)}`,
                answer: answer,
                accept: accept,
                hint: 'This is a difference of two squares: a^2 - b^2 = (a+b)(a-b).',
                explainLatex: [
                    `x^2 - ${a * a} = x^2 - ${a}^2`,
                    `= (x + ${a})(x - ${a})`
                ]
            };
        }
    ],

    // --- Completing the Square ---

    'completing-square': [
        // Write x^2 + bx + c in the form (x+p)^2 + q
        function completeSquareMonic() {
            const b = randInt(-8, 8);
            if (b === 0) return completeSquareMonic();
            const c = randInt(-10, 10);

            // (x + b/2)^2 - (b/2)^2 + c
            const half = b / 2;
            const q = c - half * half;

            let answer;
            // Format p part
            const pStr = half > 0 ? `+${formatNum(half)}` : `${formatNum(half)}`;
            const qStr = formatNum(q);

            if (q === 0) {
                answer = `(x${pStr})^2`;
            } else if (q > 0) {
                answer = `(x${pStr})^2+${qStr}`;
            } else {
                answer = `(x${pStr})^2${qStr}`;
            }

            const acceptList = buildCompleteSquareAccept(1, half, q);

            return {
                type: 'Completing the Square',
                text: `Write ${formatQuadratic(1, b, c)} in the form <span class="math">(x + p)<sup>2</sup> + q</span>`,
                answer: answer,
                accept: acceptList,
                hint: 'Halve the coefficient of x. Square it. Subtract to compensate.',
                explainLatex: [
                    `x^2 ${b >= 0 ? '+' : ''} ${b}x ${c >= 0 ? '+' : ''} ${c}`,
                    `= \\left(x ${half >= 0 ? '+' : ''} ${formatNumLatex(half)}\\right)^2 - ${formatNumLatex(half * half)} ${c >= 0 ? '+' : ''} ${c}`,
                    `= \\left(x ${half >= 0 ? '+' : ''} ${formatNumLatex(half)}\\right)^2 ${q >= 0 ? '+' : ''} ${formatNumLatex(q)}`
                ]
            };
        },

        // Complete the square for ax^2 + bx + c
        function completeSquareNonMonic() {
            const a = pick([2, 3, -2, -3]);
            const bInner = randInt(-4, 4);
            if (bInner === 0) return completeSquareNonMonic();
            const c = randInt(-6, 6);

            // a(x^2 + (b/a)x) + c = a(x + b/(2a))^2 - b^2/(4a) + c
            const b = a * bInner;
            const halfInner = bInner / 2;
            const q = c - a * halfInner * halfInner;

            // Answer: a(x + halfInner)^2 + q
            const pStr = halfInner > 0 ? `+${formatNum(halfInner)}` : `${formatNum(halfInner)}`;
            let answer;
            if (q === 0) {
                answer = `${a}(x${pStr})^2`;
            } else if (q > 0) {
                answer = `${a}(x${pStr})^2+${formatNum(q)}`;
            } else {
                answer = `${a}(x${pStr})^2${formatNum(q)}`;
            }

            return {
                type: 'Completing the Square',
                text: `Write ${formatQuadratic(a, b, c)} in the form <span class="math">a(x + p)<sup>2</sup> + q</span>`,
                answer: answer,
                accept: [],
                hint: 'Factor out a from the first two terms, then complete the square inside the bracket.'
            };
        }
    ],

    // --- Quadratic Formula ---

    'quadratic-formula': [
        // Solve ax^2 + bx + c = 0 (irrational roots, 2dp)
        function solveQuadratic() {
            let a, b, c, disc;
            // Keep generating until we get irrational roots (disc > 0 but not perfect square)
            do {
                a = pick([1, 1, 1, 2, 3]);
                b = randInt(-10, 10);
                c = randInt(-10, 10);
                disc = b * b - 4 * a * c;
            } while (disc <= 0 || Number.isInteger(Math.sqrt(disc)));

            const sqrtDisc = Math.sqrt(disc);
            const x1 = round((-b - sqrtDisc) / (2 * a), 2);
            const x2 = round((-b + sqrtDisc) / (2 * a), 2);
            const smaller = Math.min(x1, x2);
            const larger = Math.max(x1, x2);

            const answer = `x=${smaller}orx=${larger}`;
            const accept = [
                `x=${larger}orx=${smaller}`,
                `${smaller}or${larger}`,
                `${larger}or${smaller}`,
                `x=${smaller},x=${larger}`,
                `x=${larger},x=${smaller}`,
                `${smaller},${larger}`,
                `${larger},${smaller}`,
                `${smaller}and${larger}`,
                `${larger}and${smaller}`
            ];

            return {
                type: 'Quadratic Formula',
                text: `Solve ${formatQuadratic(a, b, c)} = 0<br><small style="color:var(--text-muted)">Give answers to 2 d.p. Format: x = ___ or x = ___</small>`,
                answer: answer,
                accept: accept,
                hint: 'Use the quadratic formula: x = (-b +/- sqrt(b^2 - 4ac)) / 2a',
                explainLatex: [
                    `a = ${a},\\; b = ${b},\\; c = ${c}`,
                    `b^2 - 4ac = ${b}^2 - 4(${a})(${c}) = ${disc}`,
                    `x = \\frac{${-b} \\pm \\sqrt{${disc}}}{${2 * a}}`,
                    `x = ${smaller} \\;\\text{ or }\\; x = ${larger}`
                ]
            };
        }
    ],

    // --- Discriminant ---

    'discriminant': [
        // Find the discriminant
        function findDiscriminant() {
            const a = pick([1, 1, 2, 3, -1, -2]);
            const b = randInt(-10, 10);
            const c = randInt(-10, 10);
            const disc = b * b - 4 * a * c;

            return {
                type: 'Discriminant',
                text: `Find the discriminant of ${formatQuadratic(a, b, c)} = 0`,
                answer: String(disc),
                hint: 'The discriminant is b^2 - 4ac.',
                explainLatex: [
                    `a = ${a},\\; b = ${b},\\; c = ${c}`,
                    `\\Delta = b^2 - 4ac = (${b})^2 - 4(${a})(${c})`,
                    `= ${b * b} - ${4 * a * c} = ${disc}`
                ]
            };
        },

        // State nature of roots
        function natureOfRoots() {
            const a = pick([1, 1, 2, 3]);
            let b, c, disc;

            // Pick a random nature and ensure it matches
            const nature = pick(['two-distinct', 'equal', 'none']);
            if (nature === 'equal') {
                // b^2 = 4ac, pick a and c then compute b
                c = randInt(1, 8);
                b = Math.round(Math.sqrt(4 * a * c));
                if (b * b !== 4 * a * c) {
                    // fallback: force it
                    c = a;
                    b = 2 * a;
                }
                disc = b * b - 4 * a * c;
                if (disc !== 0) return findDiscriminant(); // fallback
                if (Math.random() > 0.5) b = -b;
            } else if (nature === 'two-distinct') {
                do {
                    b = randInt(-10, 10);
                    c = randInt(-10, 10);
                    disc = b * b - 4 * a * c;
                } while (disc <= 0);
            } else {
                do {
                    b = randInt(-6, 6);
                    c = randInt(1, 15);
                    disc = b * b - 4 * a * c;
                } while (disc >= 0);
            }

            disc = b * b - 4 * a * c;
            let answer;
            if (disc > 0) answer = '2 real distinct roots';
            else if (disc === 0) answer = '2 equal roots';
            else answer = 'no real roots';

            const accept = [];
            if (disc > 0) accept.push('2realdistinctroots', 'tworealdistinctroots', '2distinctrealroots', 'tworealroots', '2realroots');
            else if (disc === 0) accept.push('2equalroots', 'twoequalroots', 'equalroots', 'repeatedroots', '1repeatedroot', 'onerepeatedroot');
            else accept.push('norealroots', 'noroots', 'norealroot', '0realroots');

            return {
                type: 'Discriminant',
                text: `State the nature of the roots of ${formatQuadratic(a, b, c)} = 0<br><small style="color:var(--text-muted)">e.g. "2 real distinct roots", "2 equal roots", or "no real roots"</small>`,
                answer: answer,
                accept: accept,
                hint: 'Find b^2 - 4ac. If > 0: 2 real distinct roots. If = 0: 2 equal roots. If < 0: no real roots.',
                explainLatex: [
                    `\\Delta = (${b})^2 - 4(${a})(${c}) = ${disc}`,
                    disc > 0 ? `${disc} > 0 \\implies \\text{2 real distinct roots}` :
                    disc === 0 ? `${disc} = 0 \\implies \\text{2 equal roots}` :
                    `${disc} < 0 \\implies \\text{no real roots}`
                ]
            };
        },

        // Find k for equal roots: kx^2 + bx + c = 0
        function findKEqualRoots() {
            // ax^2 + bx + c = 0 has equal roots when b^2 - 4ac = 0
            // Let a = k. Pick b and c such that k = b^2 / (4c)
            const b = pick([2, 4, 6, 8, 10, -2, -4, -6, -8, -10]);
            const cChoices = [];
            // Find c values that make k = b^2/(4c) an integer
            for (let c = 1; c <= 20; c++) {
                if ((b * b) % (4 * c) === 0) {
                    cChoices.push(c);
                }
            }
            if (cChoices.length === 0) return findDiscriminant();
            const c = pick(cChoices);
            const k = (b * b) / (4 * c);

            // Question: kx^2 + bx + c = 0 has equal roots. Find k.
            let questionText = `<span class="math">k</span>`;
            questionText += `x<sup>2</sup>`;
            if (b > 0) questionText += ` + ${b === 1 ? '' : b}x`;
            else if (b < 0) questionText += ` - ${Math.abs(b) === 1 ? '' : Math.abs(b)}x`;
            if (c > 0) questionText += ` + ${c}`;
            else if (c < 0) questionText += ` - ${Math.abs(c)}`;

            return {
                type: 'Discriminant',
                text: `The equation <span class="math">${questionText} = 0</span> has equal roots. Find the value of <span class="math">k</span>.`,
                answer: String(k),
                hint: 'For equal roots, the discriminant = 0. Set b^2 - 4ac = 0 and solve for k.',
                explainLatex: [
                    `b^2 - 4ac = 0`,
                    `(${b})^2 - 4(k)(${c}) = 0`,
                    `${b * b} - ${4 * c}k = 0`,
                    `k = \\frac{${b * b}}{${4 * c}} = ${k}`
                ]
            };
        }
    ],

    // --- Simultaneous Equations (one linear, one quadratic) ---

    'simultaneous': [
        function solveSimultaneous() {
            // Generate integer solutions (x1, y1) and (x2, y2)
            const x1 = randInt(-5, 5);
            let x2 = randInt(-5, 5);
            if (x1 === x2) x2 = x1 + randInt(1, 4);

            // Quadratic: y = x^2 + bx + c
            // We need the quadratic to pass through both points
            // y = x^2 + px + q
            // For flexibility, use y = x^2 + px + q
            const p = randInt(-3, 3);
            const q = randInt(-5, 5);
            const y1 = x1 * x1 + p * x1 + q;
            const y2 = x2 * x2 + p * x2 + q;

            // Linear: y = mx + c passing through (x1,y1) and (x2,y2)
            // m = (y2-y1)/(x2-x1)
            const dy = y2 - y1;
            const dx = x2 - x1;
            if (dy % dx !== 0) return solveSimultaneous(); // need integer gradient
            const m = dy / dx;
            const cLin = y1 - m * x1;

            // Format linear: y = mx + c
            let linStr = 'y = ';
            if (m === 0) {
                linStr += String(cLin);
            } else if (m === 1) {
                linStr += 'x';
                if (cLin > 0) linStr += ` + ${cLin}`;
                else if (cLin < 0) linStr += ` - ${Math.abs(cLin)}`;
            } else if (m === -1) {
                linStr += '-x';
                if (cLin > 0) linStr += ` + ${cLin}`;
                else if (cLin < 0) linStr += ` - ${Math.abs(cLin)}`;
            } else {
                linStr += `${m}x`;
                if (cLin > 0) linStr += ` + ${cLin}`;
                else if (cLin < 0) linStr += ` - ${Math.abs(cLin)}`;
            }

            // Format quadratic: y = x^2 + px + q
            let quadStr = 'y = x<sup>2</sup>';
            if (p > 0) quadStr += ` + ${p === 1 ? '' : p}x`;
            else if (p < 0) quadStr += ` - ${Math.abs(p) === 1 ? '' : Math.abs(p)}x`;
            if (q > 0) quadStr += ` + ${q}`;
            else if (q < 0) quadStr += ` - ${Math.abs(q)}`;

            // Sort solutions by x value
            let sol1x, sol1y, sol2x, sol2y;
            if (x1 <= x2) {
                sol1x = x1; sol1y = y1; sol2x = x2; sol2y = y2;
            } else {
                sol1x = x2; sol1y = y2; sol2x = x1; sol2y = y1;
            }

            const answer = `x=${sol1x},y=${sol1y}andx=${sol2x},y=${sol2y}`;
            const accept = [
                `x=${sol2x},y=${sol2y}andx=${sol1x},y=${sol1y}`,
                `x=${sol1x},y=${sol1y};x=${sol2x},y=${sol2y}`,
                `x=${sol2x},y=${sol2y};x=${sol1x},y=${sol1y}`,
                `x=${sol1x}y=${sol1y}x=${sol2x}y=${sol2y}`,
                `x=${sol2x}y=${sol2y}x=${sol1x}y=${sol1y}`,
                `(${sol1x},${sol1y})and(${sol2x},${sol2y})`,
                `(${sol2x},${sol2y})and(${sol1x},${sol1y})`,
                `(${sol1x},${sol1y})(${sol2x},${sol2y})`,
                `(${sol2x},${sol2y})(${sol1x},${sol1y})`
            ];

            return {
                type: 'Simultaneous Equations',
                text: `Solve simultaneously:<br><span class="math">${linStr}</span><br><span class="math">${quadStr}</span><br><small style="color:var(--text-muted)">Format: x=_, y=_ and x=_, y=_</small>`,
                answer: answer,
                accept: accept,
                hint: 'Substitute the linear equation into the quadratic, then solve the resulting quadratic.',
                explainLatex: [
                    `\\text{Substitute } y = ${m === 0 ? cLin : (m === 1 ? 'x' : m === -1 ? '-x' : m + 'x') + (cLin > 0 ? '+' + cLin : cLin < 0 ? cLin : '')} \\text{ into } y = x^2 ${p >= 0 ? '+' : ''} ${p}x ${q >= 0 ? '+' : ''} ${q}`,
                    `\\text{Solutions: } (${sol1x},\\, ${sol1y}) \\text{ and } (${sol2x},\\, ${sol2y})`
                ]
            };
        }
    ]
};

// ==============================
// Helper: format numbers (fractions and integers)
// ==============================

function formatNum(n) {
    if (Number.isInteger(n)) return String(n);
    // Try to express as fraction
    const sign = n < 0 ? '-' : '';
    const abs = Math.abs(n);
    // Check common halves
    const num = Math.round(abs * 2);
    if (Math.abs(num / 2 - abs) < 0.0001) {
        const g = gcd(num, 2);
        return `${sign}${num / g}/${2 / g}`;
    }
    return String(round(n, 4));
}

function formatNumLatex(n) {
    if (Number.isInteger(n)) return String(n);
    const sign = n < 0 ? '-' : '';
    const abs = Math.abs(n);
    const num = Math.round(abs * 2);
    if (Math.abs(num / 2 - abs) < 0.0001) {
        const g = gcd(num, 2);
        const sn = num / g;
        const sd = 2 / g;
        if (sd === 1) return `${sign}${sn}`;
        return `${sign}\\frac{${sn}}{${sd}}`;
    }
    return String(round(n, 4));
}

// Build factorised answer string: (ax - r1)(bx - r2) where r1,r2 are the roots
function buildFactorisedAnswer(a, r1, b, r2) {
    function bracket(coeff, root) {
        // (coeff*x - root) means root is the actual root, so factor is (coeff*x - root)
        let s = '(';
        if (coeff === 1) s += 'x';
        else if (coeff === -1) s += '-x';
        else s += coeff + 'x';
        if (-root > 0) s += '+' + Math.abs(root);
        else if (-root < 0) s += '-' + Math.abs(root);
        // if root === 0, just x
        s += ')';
        return s;
    }
    return bracket(a, r1) + bracket(b, r2);
}

function buildFactorisedAccept(a, r1, b, r2) {
    // Generate alternate orderings
    const forward = buildFactorisedAnswer(a, r1, b, r2);
    const reversed = buildFactorisedAnswer(b, r2, a, r1);
    const accept = [];
    if (reversed !== forward) accept.push(reversed);
    // With spaces
    accept.push(forward.replace(/\)\(/g, ') ('));
    if (reversed !== forward) accept.push(reversed.replace(/\)\(/g, ') ('));
    return accept;
}

function buildCompleteSquareAccept(a, half, q) {
    const accept = [];
    // Various spacing and formatting
    const pStr = half > 0 ? `+${formatNum(half)}` : `${formatNum(half)}`;
    const qStr = formatNum(q);

    // With spaces
    const pStrSpaced = half > 0 ? ` + ${formatNum(half)}` : ` - ${formatNum(Math.abs(half))}`;
    let base = `(x${pStrSpaced})^2`;
    if (q > 0) accept.push(`${base} + ${qStr}`);
    else if (q < 0) accept.push(`${base} - ${formatNum(Math.abs(q))}`);
    else accept.push(base);

    // No-space variant
    let baseNoSpace = `(x${pStr})^2`;
    if (q > 0) accept.push(`${baseNoSpace}+${qStr}`);
    else if (q < 0) accept.push(`${baseNoSpace}${qStr}`);
    else accept.push(baseNoSpace);

    return accept;
}

// Default hints per topic
const defaultHints = {
    'Factorising': 'Find two numbers that multiply to give c (or ac) and add to give b.',
    'Completing the Square': 'Halve the coefficient of x, square it, then adjust the constant.',
    'Quadratic Formula': 'Use x = (-b +/- sqrt(b^2 - 4ac)) / 2a. Remember to find both roots.',
    'Discriminant': 'The discriminant is b^2 - 4ac. Positive = 2 distinct roots, zero = equal roots, negative = no real roots.',
    'Simultaneous Equations': 'Substitute the linear equation into the quadratic to eliminate y, then solve the resulting quadratic.'
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
        saveActivityStats('quadratics', state, isCorrect);
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

// Subtopic bar
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
        loadActivityStats('quadratics', state);
        updateScore();
    }
    updateStreak(null);
    showQuestion();
}

init();
