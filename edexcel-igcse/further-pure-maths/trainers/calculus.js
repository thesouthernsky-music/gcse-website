/* ==============================
   Calculus Trainer - Question Generator
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

// ==============================
// Formatting helpers
// ==============================

// Format a polynomial term for display (HTML)
function termHtml(coeff, power, varName) {
    if (coeff === 0) return '';
    const v = varName || 'x';
    if (power === 0) return `${coeff}`;
    const c = coeff === 1 ? '' : coeff === -1 ? '-' : String(coeff);
    if (power === 1) return `${c}${v}`;
    return `${c}${v}<sup>${power}</sup>`;
}

// Format polynomial as HTML string from array of {c, p} sorted descending by power
function polyHtml(terms, varName) {
    const v = varName || 'x';
    let html = '';
    for (let i = 0; i < terms.length; i++) {
        const { c, p } = terms[i];
        if (c === 0) continue;
        if (html.length > 0) {
            html += c > 0 ? ' + ' : ' - ';
            const ac = Math.abs(c);
            if (p === 0) { html += `${ac}`; }
            else {
                const cc = ac === 1 ? '' : String(ac);
                html += p === 1 ? `${cc}${v}` : `${cc}${v}<sup>${p}</sup>`;
            }
        } else {
            html += termHtml(c, p, v);
        }
    }
    return html || '0';
}

// Format polynomial as KaTeX string
function polyKatex(terms, varName) {
    const v = varName || 'x';
    let s = '';
    for (let i = 0; i < terms.length; i++) {
        const { c, p } = terms[i];
        if (c === 0) continue;
        if (s.length > 0) {
            s += c > 0 ? ' + ' : ' - ';
            const ac = Math.abs(c);
            if (p === 0) { s += `${ac}`; }
            else {
                const cc = ac === 1 ? '' : String(ac);
                s += p === 1 ? `${cc}${v}` : `${cc}${v}^{${p}}`;
            }
        } else {
            if (p === 0) { s += `${c}`; }
            else {
                const cc = c === 1 ? '' : c === -1 ? '-' : String(c);
                s += p === 1 ? `${cc}${v}` : `${cc}${v}^{${p}}`;
            }
        }
    }
    return s || '0';
}

// Format answer string for a polynomial (canonical: descending powers, no spaces)
function polyAnswerStr(terms, varName) {
    const v = varName || 'x';
    let s = '';
    for (let i = 0; i < terms.length; i++) {
        const { c, p } = terms[i];
        if (c === 0) continue;
        if (s.length > 0) {
            s += c > 0 ? '+' : '-';
            const ac = Math.abs(c);
            if (p === 0) { s += `${ac}`; }
            else {
                const cc = ac === 1 ? '' : String(ac);
                s += p === 1 ? `${cc}${v}` : `${cc}${v}^${p}`;
            }
        } else {
            if (p === 0) { s += `${c}`; }
            else {
                const cc = c === 1 ? '' : c === -1 ? '-' : String(c);
                s += p === 1 ? `${cc}${v}` : `${cc}${v}^${p}`;
            }
        }
    }
    return s || '0';
}

// Differentiate a terms array
function differentiate(terms) {
    const result = [];
    for (const { c, p } of terms) {
        if (p === 0) continue;
        result.push({ c: c * p, p: p - 1 });
    }
    return result;
}

// Integrate a terms array (no constant)
function integrate(terms) {
    const result = [];
    for (const { c, p } of terms) {
        result.push({ c: c / (p + 1), p: p + 1 });
    }
    return result;
}

// Evaluate polynomial at x
function evalPoly(terms, x) {
    let total = 0;
    for (const { c, p } of terms) {
        total += c * Math.pow(x, p);
    }
    return total;
}

// Check if a number is "clean" (integer or simple fraction)
function isClean(n) {
    return Math.abs(n - Math.round(n * 4) / 4) < 0.0001;
}

// Format a number as fraction string if needed
function numStr(n) {
    if (Number.isInteger(n)) return String(n);
    // Check common fractions
    for (const d of [2, 3, 4, 5, 6]) {
        const num = Math.round(n * d);
        if (Math.abs(n - num / d) < 0.0001) {
            const g = gcd(Math.abs(num), d);
            return `${num / g}/${d / g}`;
        }
    }
    return String(round(n, 3));
}

// Format number as KaTeX fraction if needed
function numKatex(n) {
    if (Number.isInteger(n)) return String(n);
    for (const d of [2, 3, 4, 5, 6]) {
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

    // --- Differentiation ---

    'differentiation': [
        function diffPolynomial() {
            // ax^n for various n
            const n = pick([2, 3, 4, 5]);
            const a = randInt(1, 8) * pick([-1, 1]);
            const terms = [{ c: a, p: n }];
            const deriv = differentiate(terms);
            return {
                type: 'Differentiation',
                text: `Differentiate <span class="math">y = ${polyHtml(terms)}</span>`,
                answer: polyAnswerStr(deriv),
                accept: [polyAnswerStr(deriv).replace(/\^/g, '^')],
                hint: 'Multiply by the power, then reduce the power by 1: d/dx(ax^n) = nax^(n-1).',
                explainLatex: [
                    `y = ${polyKatex(terms)}`,
                    `\\frac{dy}{dx} = ${a * n}x^{${n - 1}}${n - 1 === 1 ? ' = ' + (a * n) + 'x' : ''}`
                ]
            };
        },
        function diffSum() {
            // Sum of 2-3 terms
            const numTerms = pick([2, 3]);
            const powers = pick(numTerms === 2 ? [[3, 1], [2, 1], [4, 2], [3, 0]] : [[3, 2, 1], [4, 2, 0], [3, 1, 0]]);
            const terms = powers.map(p => ({ c: randInt(1, 6) * pick([-1, 1]), p }));
            const deriv = differentiate(terms);
            return {
                type: 'Differentiation',
                text: `Differentiate <span class="math">y = ${polyHtml(terms)}</span>`,
                answer: polyAnswerStr(deriv),
                hint: 'Differentiate each term separately: d/dx(ax^n) = nax^(n-1). Constants differentiate to 0.',
                explainLatex: [
                    `y = ${polyKatex(terms)}`,
                    `\\frac{dy}{dx} = ${polyKatex(deriv)}`
                ]
            };
        },
        function diffNegativePower() {
            // e.g. 3x^(-2) written as 3/x^2
            const n = pick([-1, -2, -3]);
            const a = randInt(1, 6) * pick([-1, 1]);
            const terms = [{ c: a, p: n }];
            const deriv = differentiate(terms);
            const displayExp = Math.abs(n);
            const displayHtml = Math.abs(a) === 1
                ? `${a < 0 ? '-' : ''}${frac(1, 'x' + (displayExp > 1 ? '<sup>' + displayExp + '</sup>' : ''))}`
                : `${frac(a < 0 ? a : a, 'x' + (displayExp > 1 ? '<sup>' + displayExp + '</sup>' : ''))}`;
            return {
                type: 'Differentiation',
                text: `Differentiate <span class="math">y = ${displayHtml}</span><br><small style="color:var(--text-muted)">Give answer with negative powers, e.g. -6x^-3</small>`,
                answer: polyAnswerStr(deriv),
                accept: [`${a * n}x^${n - 1}`, `${a * n}x^(${n - 1})`],
                hint: 'Rewrite as ax^n first, then differentiate normally.',
                explainLatex: [
                    `y = ${a}x^{${n}}`,
                    `\\frac{dy}{dx} = ${a * n}x^{${n - 1}}`
                ]
            };
        },
        function diffFractionalPower() {
            // e.g. differentiate 4x^(1/2) -> 2x^(-1/2)
            const pairs = [
                { a: 4, p: '1/2', pn: 0.5, dc: 2, dp: -0.5 },
                { a: 6, p: '1/2', pn: 0.5, dc: 3, dp: -0.5 },
                { a: 9, p: '1/3', pn: 1/3, dc: 3, dp: -2/3 },
                { a: 3, p: '3/2', pn: 1.5, dc: 4.5, dp: 0.5 },
                { a: 2, p: '3/2', pn: 1.5, dc: 3, dp: 0.5 },
                { a: 8, p: '1/4', pn: 0.25, dc: 2, dp: -0.75 },
                { a: 5, p: '1/2', pn: 0.5, dc: 2.5, dp: -0.5 },
                { a: 10, p: '1/2', pn: 0.5, dc: 5, dp: -0.5 }
            ];
            const { a, p, pn, dc, dp } = pick(pairs);
            const ansCoeff = numStr(dc);
            const ansPow = numStr(dp);
            const answer = `${ansCoeff}x^${ansPow}`;
            return {
                type: 'Differentiation',
                text: `Differentiate <span class="math">y = ${a}x<sup>${p}</sup></span><br><small style="color:var(--text-muted)">Give answer as ax^(p), e.g. 2x^-1/2</small>`,
                answer: answer,
                accept: [`${ansCoeff}x^(${ansPow})`, `${ansCoeff}x^${ansPow}`],
                hint: 'Use d/dx(ax^n) = nax^(n-1) with fractional powers.',
                explainLatex: [
                    `y = ${a}x^{${numKatex(pn)}}`,
                    `\\frac{dy}{dx} = ${numKatex(pn)} \\times ${a} \\cdot x^{${numKatex(pn)} - 1} = ${numKatex(dc)}x^{${numKatex(dp)}}`
                ]
            };
        }
    ],

    // --- Gradients & Tangents ---

    'gradients': [
        function gradientAtPoint() {
            // y = ax^2 + bx + c, find gradient at x = k
            const a = randInt(1, 4) * pick([-1, 1]);
            const b = randInt(-5, 5);
            const c = randInt(-5, 5);
            const k = randInt(-3, 3);
            const terms = [{ c: a, p: 2 }, { c: b, p: 1 }, { c: c, p: 0 }];
            const deriv = differentiate(terms);
            const gradient = evalPoly(deriv, k);
            return {
                type: 'Gradients & Tangents',
                text: `Find the gradient of <span class="math">y = ${polyHtml(terms)}</span> at <span class="math">x = ${k}</span>`,
                answer: String(gradient),
                hint: 'Differentiate to find dy/dx, then substitute the x value.',
                explainLatex: [
                    `y = ${polyKatex(terms)}`,
                    `\\frac{dy}{dx} = ${polyKatex(deriv)}`,
                    `\\text{At } x = ${k}: \\frac{dy}{dx} = ${gradient}`
                ]
            };
        },
        function tangentEquation() {
            // y = ax^2 + bx + c, tangent at x = k
            const a = randInt(1, 3) * pick([-1, 1]);
            const b = randInt(-4, 4);
            const c = randInt(-5, 5);
            const k = randInt(-2, 3);
            const terms = [{ c: a, p: 2 }, { c: b, p: 1 }, { c: c, p: 0 }];
            const deriv = differentiate(terms);
            const m = evalPoly(deriv, k);
            const yVal = evalPoly(terms, k);
            // Tangent: y - yVal = m(x - k) => y = mx + (yVal - mk)
            const intercept = yVal - m * k;
            const tanTerms = [{ c: m, p: 1 }, { c: intercept, p: 0 }].filter(t => t.c !== 0);
            if (tanTerms.length === 0) tanTerms.push({ c: 0, p: 0 });
            const answer = `y=${polyAnswerStr(tanTerms)}`;
            return {
                type: 'Gradients & Tangents',
                text: `Find the equation of the tangent to <span class="math">y = ${polyHtml(terms)}</span> at <span class="math">x = ${k}</span><br><small style="color:var(--text-muted)">Give answer in the form y = mx + c</small>`,
                answer: answer,
                accept: [
                    `y=${polyAnswerStr(tanTerms)}`,
                    polyAnswerStr(tanTerms),
                    `y = ${polyAnswerStr(tanTerms)}`
                ],
                hint: 'Find dy/dx, evaluate at the point to get m. Find y at the point. Use y = mx + c.',
                explainLatex: [
                    `\\frac{dy}{dx} = ${polyKatex(deriv)}`,
                    `\\text{At } x = ${k}: m = ${m}, \\quad y = ${yVal}`,
                    `\\text{Tangent: } y - ${yVal} = ${m}(x - ${k === 0 ? '0' : k})`,
                    `y = ${polyKatex(tanTerms)}`
                ]
            };
        },
        function normalEquation() {
            // Normal is perpendicular to tangent: m_normal = -1/m_tangent
            const a = randInt(1, 3) * pick([-1, 1]);
            const b = randInt(-3, 3);
            const c = randInt(-4, 4);
            // Choose k so gradient is a non-zero integer that divides 1 cleanly
            // gradient = 2ak + b, pick k so this is +/-1, +/-2, +/-4
            let k, m;
            for (let attempt = 0; attempt < 20; attempt++) {
                k = randInt(-3, 3);
                m = 2 * a * k + b;
                if (m !== 0 && (m === 1 || m === -1 || m === 2 || m === -2 || m === 4 || m === -4)) break;
            }
            if (m === 0) { m = 1; k = 0; } // fallback
            const terms = [{ c: a, p: 2 }, { c: b, p: 1 }, { c: c, p: 0 }];
            const yVal = evalPoly(terms, k);
            // Normal gradient: -1/m
            const normMNum = -1;
            const normMDen = m;
            const g = gcd(Math.abs(normMNum), Math.abs(normMDen));
            const nm = normMNum / normMDen; // as decimal for calculation
            const intercept = yVal - nm * k;

            // Build answer
            let answer;
            if (Math.abs(m) === 1) {
                // Normal gradient is integer (-1 or 1)
                const normInt = -m;
                const normTerms = [{ c: normInt, p: 1 }, { c: round(intercept, 4), p: 0 }].filter(t => t.c !== 0);
                if (normTerms.length === 0) normTerms.push({ c: 0, p: 0 });
                answer = `y=${polyAnswerStr(normTerms)}`;
            } else {
                // Fractional gradient
                const nSign = (normMNum < 0) !== (normMDen < 0) ? '-' : '';
                const nNum = Math.abs(normMNum) / g;
                const nDen = Math.abs(normMDen) / g;
                const intStr = Number.isInteger(intercept)
                    ? (intercept > 0 ? `+${intercept}` : intercept < 0 ? `${intercept}` : '')
                    : (intercept > 0 ? `+${numStr(intercept)}` : intercept < 0 ? `${numStr(intercept)}` : '');
                answer = `y=${nSign}${nNum === 1 ? '' : nNum}/${nDen}x${intStr}`;
            }

            return {
                type: 'Gradients & Tangents',
                text: `Find the equation of the normal to <span class="math">y = ${polyHtml(terms)}</span> at <span class="math">x = ${k}</span><br><small style="color:var(--text-muted)">Give answer in the form y = mx + c (use fractions if needed)</small>`,
                answer: answer,
                accept: [answer.replace('y=', ''), answer],
                hint: 'Find the tangent gradient m. The normal gradient is -1/m. Then use y - y1 = m_n(x - x1).',
                explainLatex: [
                    `\\text{Tangent gradient} = ${m}`,
                    `\\text{Normal gradient} = -\\frac{1}{${m}} = ${numKatex(nm)}`,
                    `\\text{At } x = ${k}: y = ${yVal}`,
                    `\\text{Normal: } y = ${numKatex(nm)}x ${intercept >= 0 ? '+' : ''} ${numKatex(intercept)}`
                ]
            };
        }
    ],

    // --- Stationary Points ---

    'stationary-points': [
        function findStationaryPoints() {
            // y = ax^3 + bx^2 + cx + d with nice stationary points
            // Use factored form: dy/dx = 3a(x - p)(x - q) so stationary at x = p, q
            const p = randInt(-3, 0);
            const q = randInt(1, 3);
            // dy/dx = k(x - p)(x - q) = k(x^2 - (p+q)x + pq)
            // Choose k so coefficients are integers
            const k = pick([3, 6]); // must be multiple of 3 for cubic
            // dy/dx = kx^2 - k(p+q)x + kpq
            // y = (k/3)x^3 - (k(p+q)/2)x^2 + kpq*x + d
            // For clean integration, use k = 3: y = x^3 - (3(p+q)/2)x^2 + 3pq*x
            // Better: pick a so that 3a is nice
            const a = 1;
            // dy/dx = 3x^2 - 2*(p+q)*... no, let's just build directly
            // y = x^3 + bx^2 + cx where dy/dx = 3x^2 + 2bx + c = 0 at p and q
            // 3x^2 + 2bx + c = 3(x-p)(x-q) = 3x^2 - 3(p+q)x + 3pq
            // So 2b = -3(p+q) => b = -3(p+q)/2 (need p+q even)
            const sum = p + q;
            let b, c2;
            if (sum % 2 === 0) {
                b = -3 * sum / 2;
                c2 = 3 * p * q;
            } else {
                // Scale: y = 2x^3 + ... dy/dx = 6x^2 + ... = 6(x-p)(x-q)
                b = -3 * sum;
                c2 = 6 * p * q;
                // dy/dx = 6x^2 + 2bx + c2
                // Actually let's just use integer stationary points
                // dy/dx = 6x^2 - 6(p+q)x + 6pq, so y = 2x^3 - 3(p+q)x^2 + 6pq*x
                b = -3 * sum; // coefficient of x^2
                c2 = 6 * p * q; // coefficient of x
            }
            const d = randInt(-3, 3);
            const yTerms = sum % 2 === 0
                ? [{ c: 1, p: 3 }, { c: b, p: 2 }, { c: c2, p: 1 }, { c: d, p: 0 }]
                : [{ c: 2, p: 3 }, { c: b, p: 2 }, { c: c2, p: 1 }, { c: d, p: 0 }];

            const yAtP = evalPoly(yTerms, p);
            const yAtQ = evalPoly(yTerms, q);

            return {
                type: 'Stationary Points',
                text: `Find the x-coordinates of the stationary points of <span class="math">y = ${polyHtml(yTerms)}</span><br><small style="color:var(--text-muted)">Give both values separated by a comma, e.g. -1, 2</small>`,
                answer: `${p},${q}`,
                accept: [`${q},${p}`, `${p}, ${q}`, `${q}, ${p}`, `x=${p},x=${q}`, `x=${q},x=${p}`],
                hint: 'Set dy/dx = 0 and solve. For a cubic y = ax^3 + bx^2 + cx + d, dy/dx is a quadratic.',
                explainLatex: [
                    `y = ${polyKatex(yTerms)}`,
                    `\\frac{dy}{dx} = ${polyKatex(differentiate(yTerms))}`,
                    `\\text{Setting } \\frac{dy}{dx} = 0:`,
                    `x = ${p} \\text{ or } x = ${q}`
                ]
            };
        },
        function classifyStationary() {
            // Quadratic y = a(x - h)^2 + k, find and classify the stationary point
            const h = randInt(-4, 4);
            const a = pick([1, 2, 3, -1, -2, -3]);
            const k = randInt(-5, 5);
            // y = a(x^2 - 2hx + h^2) + k = ax^2 - 2ahx + ah^2 + k
            const terms = [{ c: a, p: 2 }, { c: -2 * a * h, p: 1 }, { c: a * h * h + k, p: 0 }];
            const nature = a > 0 ? 'minimum' : 'maximum';
            return {
                type: 'Stationary Points',
                text: `Find the stationary point of <span class="math">y = ${polyHtml(terms)}</span> and state whether it is a maximum or minimum.<br><small style="color:var(--text-muted)">Format: (x, y) max or (x, y) min</small>`,
                answer: `(${h},${k})${nature === 'minimum' ? 'min' : 'max'}`,
                accept: [
                    `(${h}, ${k}) ${nature}`, `(${h},${k}) ${nature}`,
                    `(${h}, ${k}) ${nature === 'minimum' ? 'min' : 'max'}`,
                    `(${h},${k})${nature}`,
                    `${h},${k}${nature === 'minimum' ? 'min' : 'max'}`,
                    `(${h},${k}) ${nature === 'minimum' ? 'min' : 'max'}`
                ],
                hint: 'Set dy/dx = 0 to find x. Find d^2y/dx^2: if positive it is a minimum, if negative it is a maximum.',
                explainLatex: [
                    `\\frac{dy}{dx} = ${polyKatex(differentiate(terms))} = 0`,
                    `x = ${h}`,
                    `y = ${k}`,
                    `\\frac{d^2y}{dx^2} = ${2 * a} \\Rightarrow \\text{${nature}}`
                ]
            };
        },
        function findMaxMinValue() {
            // Find max or min value of a quadratic
            const h = randInt(-3, 3);
            const a = pick([1, -1, 2, -2]);
            const k = randInt(-6, 6);
            const terms = [{ c: a, p: 2 }, { c: -2 * a * h, p: 1 }, { c: a * h * h + k, p: 0 }];
            const nature = a > 0 ? 'minimum' : 'maximum';
            return {
                type: 'Stationary Points',
                text: `Find the ${nature} value of <span class="math">y = ${polyHtml(terms)}</span>`,
                answer: String(k),
                hint: `Differentiate and set dy/dx = 0 to find x. Substitute back to find y. Since the x^2 coefficient is ${a > 0 ? 'positive' : 'negative'}, this is a ${nature}.`,
                explainLatex: [
                    `\\frac{dy}{dx} = ${polyKatex(differentiate(terms))} = 0`,
                    `x = ${h}`,
                    `y_{\\text{${nature}}} = ${k}`
                ]
            };
        }
    ],

    // --- Integration ---

    'integration': [
        function integratePolynomial() {
            // Integrate ax^n
            const n = pick([1, 2, 3, 4]);
            const a = pick([2, 3, 4, 5, 6]) * pick([-1, 1]);
            const terms = [{ c: a, p: n }];
            const result = integrate(terms);
            // Add + C
            const coeffStr = numStr(result[0].c);
            const answer = `${coeffStr === '1' ? '' : coeffStr === '-1' ? '-' : coeffStr}x^${n + 1}+c`;
            return {
                type: 'Integration',
                text: `Find <span class="math">&int; ${polyHtml(terms)} dx</span><br><small style="color:var(--text-muted)">Don't forget + C</small>`,
                answer: answer,
                accept: [
                    answer.replace('+c', '+ c'),
                    answer.replace('+c', '+C'),
                    answer.replace('+c', '+ C')
                ],
                hint: 'Increase the power by 1 and divide by the new power: integral of ax^n = (a/(n+1))x^(n+1) + C.',
                explainLatex: [
                    `\\int ${polyKatex(terms)} \\, dx = ${numKatex(result[0].c)}x^{${n + 1}} + C`
                ]
            };
        },
        function integrateSum() {
            // Integrate sum of terms
            const powers = pick([[3, 1], [2, 1], [2, 0], [3, 2, 1]]);
            const terms = powers.map(p => ({ c: randInt(1, 6) * pick([-1, 1]), p }));
            const result = integrate(terms);
            // Filter out near-zero and format
            const cleanResult = result.filter(t => Math.abs(t.c) > 0.0001);
            const answerParts = cleanResult.map(t => {
                const cs = numStr(t.c);
                if (t.p === 0) return cs;
                if (t.p === 1) return `${cs === '1' ? '' : cs === '-1' ? '-' : cs}x`;
                return `${cs === '1' ? '' : cs === '-1' ? '-' : cs}x^${t.p}`;
            });
            const answer = answerParts.join('+').replace(/\+\-/g, '-') + '+c';
            return {
                type: 'Integration',
                text: `Find <span class="math">&int; (${polyHtml(terms)}) dx</span><br><small style="color:var(--text-muted)">Don't forget + C</small>`,
                answer: answer,
                accept: [
                    answer.replace('+c', '+ c'),
                    answer.replace('+c', '+C'),
                    answer.replace('+c', '+ C')
                ],
                hint: 'Integrate each term separately. Increase each power by 1 and divide by the new power.',
                explainLatex: [
                    `\\int (${polyKatex(terms)}) \\, dx`,
                    `= ${cleanResult.map(t => `${numKatex(t.c)}x^{${t.p}}`).join(' + ').replace(/\+ -/g, '- ')} + C`
                ]
            };
        },
        function findFGivenFPrime() {
            // Given f'(x) and f(a) = b, find f(x)
            const powers = pick([[2, 1], [2, 0], [3, 1]]);
            const fPrimeTerms = powers.map(p => ({ c: randInt(1, 4) * pick([-1, 1]) * (p + 1), p }));
            // Integrate to get f(x) (without C)
            const fTermsNoC = integrate(fPrimeTerms);
            // Choose a point x = a and desired f(a)
            const a = pick([0, 1, 2, -1]);
            const desiredFa = randInt(-5, 5);
            // f(a) = eval(fTermsNoC, a) + C = desiredFa => C = desiredFa - eval(fTermsNoC, a)
            const faNoC = evalPoly(fTermsNoC, a);
            const C = desiredFa - faNoC;

            const fTerms = [...fTermsNoC, { c: C, p: 0 }].filter(t => Math.abs(t.c) > 0.0001);
            if (fTerms.length === 0) fTerms.push({ c: 0, p: 0 });

            // Build answer parts
            const answerParts = fTerms.map(t => {
                const cs = numStr(t.c);
                if (t.p === 0) return cs;
                if (t.p === 1) return `${cs === '1' ? '' : cs === '-1' ? '-' : cs}x`;
                return `${cs === '1' ? '' : cs === '-1' ? '-' : cs}x^${t.p}`;
            });
            const answer = answerParts.join('+').replace(/\+\-/g, '-');

            return {
                type: 'Integration',
                text: `Given that <span class="math">f'(x) = ${polyHtml(fPrimeTerms)}</span> and <span class="math">f(${a}) = ${desiredFa}</span>, find <span class="math">f(x)</span>.`,
                answer: answer,
                accept: [answer, `f(x)=${answer}`],
                hint: 'Integrate f\'(x) to get f(x) + C. Then use the given point to find C.',
                explainLatex: [
                    `f(x) = \\int (${polyKatex(fPrimeTerms)}) \\, dx = ${fTermsNoC.map(t => `${numKatex(t.c)}x^{${t.p}}`).join(' + ').replace(/\+ -/g, '- ')} + C`,
                    `f(${a}) = ${desiredFa} \\Rightarrow C = ${numKatex(C)}`,
                    `f(x) = ${polyKatex(fTerms)}`
                ]
            };
        }
    ],

    // --- Definite Integrals ---

    'definite-integrals': [
        function evaluateDefinite() {
            // Integrate ax^n from a to b
            const n = pick([1, 2, 3]);
            const coeff = randInt(1, 4) * pick([-1, 1]);
            const lower = randInt(0, 2);
            const upper = lower + randInt(1, 3);
            const terms = [{ c: coeff, p: n }];
            const integrated = integrate(terms);
            const valUpper = evalPoly(integrated, upper);
            const valLower = evalPoly(integrated, lower);
            const answer = round(valUpper - valLower, 4);
            return {
                type: 'Definite Integrals',
                text: `Evaluate <span class="math">&int;<sub>${lower}</sub><sup>${upper}</sup> ${polyHtml(terms)} dx</span><br><small style="color:var(--text-muted)">Give exact answer (fraction if needed)</small>`,
                answer: numStr(answer),
                accept: [String(round(answer, 2)), numStr(answer)],
                hint: 'Integrate, then substitute the upper limit minus the lower limit: F(b) - F(a).',
                explainLatex: [
                    `\\int_{${lower}}^{${upper}} ${polyKatex(terms)} \\, dx = \\left[ ${integrated.map(t => `${numKatex(t.c)}x^{${t.p}}`).join(' + ')} \\right]_{${lower}}^{${upper}}`,
                    `= ${numKatex(valUpper)} - ${numKatex(valLower)} = ${numKatex(answer)}`
                ]
            };
        },
        function definiteIntegralSum() {
            // Integrate sum from a to b
            const powers = pick([[2, 1], [2, 0], [3, 1]]);
            const terms = powers.map(p => ({ c: randInt(1, 4) * pick([-1, 1]), p }));
            const lower = randInt(0, 1);
            const upper = lower + randInt(1, 3);
            const integrated = integrate(terms);
            const valUpper = evalPoly(integrated, upper);
            const valLower = evalPoly(integrated, lower);
            const answer = round(valUpper - valLower, 4);
            return {
                type: 'Definite Integrals',
                text: `Evaluate <span class="math">&int;<sub>${lower}</sub><sup>${upper}</sup> (${polyHtml(terms)}) dx</span><br><small style="color:var(--text-muted)">Give exact answer (fraction if needed)</small>`,
                answer: numStr(answer),
                accept: [String(round(answer, 2)), numStr(answer)],
                hint: 'Integrate each term, then evaluate F(upper) - F(lower).',
                explainLatex: [
                    `\\int_{${lower}}^{${upper}} (${polyKatex(terms)}) \\, dx`,
                    `= \\left[ ${integrated.map(t => `${numKatex(t.c)}x^{${t.p}}`).join(' + ').replace(/\+ -/g, '- ')} \\right]_{${lower}}^{${upper}}`,
                    `= ${numKatex(answer)}`
                ]
            };
        },
        function areaUnderCurve() {
            // Area between curve and x-axis (positive region)
            const a = pick([1, 2, 3]);
            const lower = randInt(0, 2);
            const upper = lower + randInt(1, 3);
            const b = randInt(-3, 3);
            const terms = [{ c: a, p: 2 }, { c: b, p: 0 }];
            const integrated = integrate(terms);
            const valUpper = evalPoly(integrated, upper);
            const valLower = evalPoly(integrated, lower);
            const answer = round(Math.abs(valUpper - valLower), 4);
            return {
                type: 'Definite Integrals',
                text: `Find the area bounded by the curve <span class="math">y = ${polyHtml(terms)}</span>, the x-axis, and the lines <span class="math">x = ${lower}</span> and <span class="math">x = ${upper}</span><br><small style="color:var(--text-muted)">Give exact answer (fraction if needed)</small>`,
                answer: numStr(answer),
                accept: [String(round(answer, 2)), numStr(answer)],
                hint: 'Area = integral from a to b of y dx. If the curve goes below the x-axis, take the absolute value.',
                explainLatex: [
                    `\\text{Area} = \\int_{${lower}}^{${upper}} (${polyKatex(terms)}) \\, dx`,
                    `= \\left[ ${integrated.map(t => `${numKatex(t.c)}x^{${t.p}}`).join(' + ').replace(/\+ -/g, '- ')} \\right]_{${lower}}^{${upper}}`,
                    `= ${numKatex(answer)}`
                ]
            };
        }
    ]
};

// Default hints per topic
const defaultHints = {
    'Differentiation': 'To differentiate ax^n: multiply by the power, then reduce the power by 1, giving nax^(n-1).',
    'Gradients & Tangents': 'Differentiate to find dy/dx (the gradient function). Substitute the x-value to find the gradient at that point.',
    'Stationary Points': 'Set dy/dx = 0 to find stationary points. Use d^2y/dx^2 to classify: positive = minimum, negative = maximum.',
    'Integration': 'To integrate ax^n: increase the power by 1 and divide by the new power. Don\'t forget + C for indefinite integrals.',
    'Definite Integrals': 'Integrate, then evaluate F(upper) - F(lower). No + C needed for definite integrals.'
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
        saveActivityStats('calculus', state, isCorrect);
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
        loadActivityStats('calculus', state);
        updateScore();
    }
    updateStreak(null);
    showQuestion();
}

init();
