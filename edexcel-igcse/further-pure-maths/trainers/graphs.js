/* ==============================
   Graphs Trainer - Question Generator
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

// Parse MathLive LaTeX output
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

// Format a coefficient for display (omit 1, show -1 as -)
function coefStr(c, isFirst) {
    if (c === 1) return isFirst ? '' : '+';
    if (c === -1) return '-';
    if (c > 0 && !isFirst) return '+' + c;
    return String(c);
}

// Format a polynomial term ax^2 + bx + c as HTML
function polyHtml(a, b, c) {
    let parts = [];
    if (a !== 0) {
        const cs = a === 1 ? '' : (a === -1 ? '-' : a);
        parts.push(`${cs}x<sup>2</sup>`);
    }
    if (b !== 0) {
        const sign = (parts.length > 0 && b > 0) ? ' + ' : (parts.length > 0 && b < 0 ? ' - ' : '');
        const bAbs = Math.abs(b);
        const bStr = bAbs === 1 ? 'x' : bAbs + 'x';
        if (parts.length === 0 && b < 0) {
            parts.push('-' + bStr);
        } else {
            parts.push(sign + bStr);
        }
    }
    if (c !== 0) {
        const sign = (parts.length > 0 && c > 0) ? ' + ' : (parts.length > 0 && c < 0 ? ' - ' : '');
        if (parts.length === 0) {
            parts.push(String(c));
        } else {
            parts.push(sign + Math.abs(c));
        }
    }
    if (parts.length === 0) parts.push('0');
    return parts.join('');
}

// Format polynomial as LaTeX
function polyLatex(a, b, c) {
    let parts = [];
    if (a !== 0) {
        const cs = a === 1 ? '' : (a === -1 ? '-' : a);
        parts.push(`${cs}x^2`);
    }
    if (b !== 0) {
        const sign = (parts.length > 0 && b > 0) ? ' + ' : (parts.length > 0 && b < 0 ? ' - ' : '');
        const bAbs = Math.abs(b);
        const bStr = bAbs === 1 ? 'x' : bAbs + 'x';
        if (parts.length === 0 && b < 0) {
            parts.push('-' + bStr);
        } else {
            parts.push(sign + bStr);
        }
    }
    if (c !== 0) {
        const sign = (parts.length > 0 && c > 0) ? ' + ' : (parts.length > 0 && c < 0 ? ' - ' : '');
        if (parts.length === 0) {
            parts.push(String(c));
        } else {
            parts.push(sign + Math.abs(c));
        }
    }
    if (parts.length === 0) parts.push('0');
    return parts.join('');
}

// ==============================
// Question Generators
// ==============================

const generators = {

    // --- Function Notation ---

    'function-notation': [
        function evaluateFunction() {
            const a = randInt(1, 4);
            const b = randInt(-5, 5);
            const c = randInt(-8, 8);
            const xVal = pick([-3, -2, -1, 0, 1, 2, 3, 4, 5]);
            const result = a * xVal * xVal + b * xVal + c;
            const fStr = polyHtml(a, b, c);
            const fLatex = polyLatex(a, b, c);
            return {
                type: 'Function Notation',
                text: `Given <span class="math">f(x) = ${fStr}</span>, find <span class="math">f(${xVal})</span>`,
                answer: String(result),
                hint: `Substitute x = ${xVal} into the expression and evaluate each term.`,
                explainLatex: [
                    `f(x) = ${fLatex}`,
                    `f(${xVal}) = ${a}(${xVal})^2 + ${b >= 0 ? '' : '('}${b}${b >= 0 ? '' : ')'}(${xVal}) + ${c >= 0 ? '' : '('}${c}${c >= 0 ? '' : ')'}`,
                    `= ${a * xVal * xVal} + (${b * xVal}) + (${c})`,
                    `= ${result}`
                ]
            };
        },
        function compositeFunction() {
            // f(x) = ax + b, g(x) = cx + d, find fg(n)
            const a = randInt(2, 5);
            const b = randInt(-4, 4);
            const c = randInt(2, 5);
            const d = randInt(-4, 4);
            const n = randInt(-3, 5);
            const gn = c * n + d;
            const fgn = a * gn + b;
            return {
                type: 'Function Notation',
                text: `Given <span class="math">f(x) = ${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}</span> and <span class="math">g(x) = ${c}x ${d >= 0 ? '+ ' + d : '- ' + Math.abs(d)}</span>, find <span class="math">fg(${n})</span>`,
                answer: String(fgn),
                hint: `First find g(${n}), then substitute that result into f.`,
                explainLatex: [
                    `g(${n}) = ${c}(${n}) ${d >= 0 ? '+' : '-'} ${Math.abs(d)} = ${gn}`,
                    `fg(${n}) = f(${gn}) = ${a}(${gn}) ${b >= 0 ? '+' : '-'} ${Math.abs(b)} = ${fgn}`
                ]
            };
        },
        function domainRange() {
            // f(x) = (x - a)^2 + k, domain is all real x, range is f(x) >= k
            const a = randInt(-4, 4);
            const k = randInt(-5, 5);
            const answer = `f(x)>=${k}`;
            return {
                type: 'Function Notation',
                text: `<span class="math">f(x) = (x ${a >= 0 ? '- ' + a : '+ ' + Math.abs(a)})<sup>2</sup> ${k >= 0 ? '+ ' + k : '- ' + Math.abs(k)}</span><br>Find the range of f(x).<br><small style="color:var(--text-muted)">Format: f(x)>=k</small>`,
                answer: answer,
                accept: [
                    `f(x)>=${k}`,
                    `y>=${k}`,
                    `f(x) >= ${k}`,
                    `y >= ${k}`,
                    `f(x)≥${k}`,
                    `y≥${k}`
                ],
                hint: `The minimum value of (x - a)^2 is 0, so the minimum of f(x) is k.`,
                explainLatex: [
                    `(x ${a >= 0 ? '-' : '+'} ${Math.abs(a)})^2 \\geq 0`,
                    `\\text{So } f(x) \\geq ${k}`,
                    `\\text{Range: } f(x) \\geq ${k}`
                ]
            };
        }
    ],

    // --- Sketching Curves ---

    'sketching': [
        function yIntercept() {
            const a = pick([-3, -2, -1, 1, 2, 3]);
            const b = randInt(-6, 6);
            const c = randInt(-9, 9);
            const fStr = polyHtml(a, b, c);
            return {
                type: 'Sketching Curves',
                text: `Find the y-intercept of <span class="math">y = ${fStr}</span>`,
                answer: String(c),
                hint: `The y-intercept is where x = 0. Substitute x = 0 into the equation.`,
                explainLatex: [
                    `\\text{Set } x = 0:`,
                    `y = ${a}(0)^2 + ${b >= 0 ? '' : '('}${b}${b >= 0 ? '' : ')'}(0) + ${c >= 0 ? '' : '('}${c}${c >= 0 ? '' : ')'}`,
                    `y = ${c}`,
                    `\\text{y-intercept: } (0, ${c})`
                ]
            };
        },
        function xIntercepts() {
            // y = (x - p)(x - q) where p, q are integers
            const p = randInt(-6, 6);
            let q = randInt(-6, 6);
            if (q === p) q = p + randInt(1, 3);
            // Expand: x^2 - (p+q)x + pq
            const a = 1;
            const b = -(p + q);
            const c = p * q;
            const fStr = polyHtml(a, b, c);
            // Order roots
            const r1 = Math.min(p, q);
            const r2 = Math.max(p, q);
            const answer = `${r1},${r2}`;
            return {
                type: 'Sketching Curves',
                text: `Find the x-intercepts (roots) of <span class="math">y = ${fStr}</span><br><small style="color:var(--text-muted)">Format: smaller, larger (e.g. -2, 3)</small>`,
                answer: answer,
                accept: [
                    `${r1}, ${r2}`,
                    `${r1} and ${r2}`,
                    `x=${r1},x=${r2}`,
                    `x=${r1} and x=${r2}`,
                    `${r2},${r1}`,
                    `${r2}, ${r1}`
                ],
                hint: `Factorise the quadratic and set each bracket equal to zero.`,
                explainLatex: [
                    `y = ${fStr.replace(/<[^>]+>/g, '')}`,
                    `y = (x ${p >= 0 ? '-' : '+'} ${Math.abs(p)})(x ${q >= 0 ? '-' : '+'} ${Math.abs(q)})`,
                    `\\text{Set } y = 0: \\quad x = ${p} \\text{ or } x = ${q}`,
                    `\\text{x-intercepts: } (${r1}, 0) \\text{ and } (${r2}, 0)`
                ]
            };
        },
        function turningPoint() {
            // y = (x - h)^2 + k => turning point (h, k)
            const h = randInt(-5, 5);
            const k = randInt(-8, 8);
            // Expand: x^2 - 2hx + h^2 + k
            const a = 1;
            const b = -2 * h;
            const c = h * h + k;
            const fStr = polyHtml(a, b, c);
            const answer = `(${h},${k})`;
            return {
                type: 'Sketching Curves',
                text: `Find the turning point of <span class="math">y = ${fStr}</span><br><small style="color:var(--text-muted)">Format: (h, k)</small>`,
                answer: answer,
                accept: [
                    `(${h}, ${k})`,
                    `${h},${k}`,
                    `${h}, ${k}`
                ],
                hint: `Complete the square: write in the form (x - h)^2 + k. The turning point is (h, k).`,
                explainLatex: [
                    `y = ${polyLatex(a, b, c)}`,
                    `y = (x ${h >= 0 ? '-' : '+'} ${Math.abs(h)})^2 + ${k}`,
                    `\\text{Turning point: } (${h}, ${k})`
                ]
            };
        }
    ],

    // --- Transformations ---

    'transformations': [
        function describeTransformation() {
            const transforms = [
                { expr: 'f(x) + a', val: null, desc: null },
                { expr: 'f(x + a)', val: null, desc: null },
                { expr: 'af(x)', val: null, desc: null },
                { expr: 'f(ax)', val: null, desc: null }
            ];
            const a = randInt(2, 6);
            const choice = randInt(0, 3);
            let questionExpr, answer, accept, explainLines;

            if (choice === 0) {
                const sign = pick([1, -1]);
                const val = sign * a;
                questionExpr = val > 0 ? `f(x) + ${val}` : `f(x) - ${Math.abs(val)}`;
                const dir = val > 0 ? 'up' : 'down';
                answer = `translation ${Math.abs(val)} ${dir}`;
                accept = [
                    `translation (0, ${val})`,
                    `translate ${Math.abs(val)} ${dir}`,
                    `shift ${Math.abs(val)} ${dir}`,
                    `translation by (0,${val})`,
                    `(0,${val})`
                ];
                explainLines = [
                    `y = f(x) + ${val > 0 ? val : '(' + val + ')'}`,
                    `\\text{This is a translation by } \\begin{pmatrix} 0 \\\\ ${val} \\end{pmatrix}`,
                    `\\text{i.e. ${Math.abs(val)} units ${dir}}`
                ];
            } else if (choice === 1) {
                const sign = pick([1, -1]);
                const val = sign * a;
                questionExpr = val > 0 ? `f(x + ${val})` : `f(x - ${Math.abs(val)})`;
                const dir = val > 0 ? 'left' : 'right';
                answer = `translation ${Math.abs(val)} ${dir}`;
                accept = [
                    `translation (${-val}, 0)`,
                    `translate ${Math.abs(val)} ${dir}`,
                    `shift ${Math.abs(val)} ${dir}`,
                    `translation by (${-val},0)`,
                    `(${-val},0)`
                ];
                explainLines = [
                    `y = f(x + ${val > 0 ? val : '(' + val + ')'})`,
                    `\\text{This is a translation by } \\begin{pmatrix} ${-val} \\\\ 0 \\end{pmatrix}`,
                    `\\text{i.e. ${Math.abs(val)} units ${dir}}`
                ];
            } else if (choice === 2) {
                questionExpr = `${a}f(x)`;
                answer = `stretch sf ${a} y`;
                accept = [
                    `vertical stretch sf ${a}`,
                    `stretch scale factor ${a} in y`,
                    `stretch factor ${a} vertical`,
                    `stretch sf ${a} in y direction`,
                    `vertical stretch by ${a}`,
                    `stretch by ${a} in y`
                ];
                explainLines = [
                    `y = ${a}f(x)`,
                    `\\text{Stretch, scale factor } ${a}`,
                    `\\text{in the y-direction (parallel to the y-axis)}`
                ];
            } else {
                questionExpr = `f(${a}x)`;
                answer = `stretch sf 1/${a} x`;
                accept = [
                    `horizontal stretch sf 1/${a}`,
                    `stretch scale factor 1/${a} in x`,
                    `stretch factor 1/${a} horizontal`,
                    `stretch sf 1/${a} in x direction`,
                    `horizontal stretch by 1/${a}`,
                    `stretch by 1/${a} in x`
                ];
                explainLines = [
                    `y = f(${a}x)`,
                    `\\text{Stretch, scale factor } \\frac{1}{${a}}`,
                    `\\text{in the x-direction (parallel to the x-axis)}`
                ];
            }

            return {
                type: 'Transformations',
                text: `The curve <span class="math">y = f(x)</span> is transformed to <span class="math">y = ${questionExpr}</span>.<br>Describe the transformation.<br><small style="color:var(--text-muted)">e.g. "translation 3 up" or "stretch sf 2 y"</small>`,
                answer: answer,
                accept: accept,
                hint: 'f(x) + a: vertical translation. f(x + a): horizontal translation (opposite direction). af(x): vertical stretch. f(ax): horizontal stretch (scale factor 1/a).',
                explainLatex: explainLines
            };
        },
        function writeTransformedEquation() {
            const choice = randInt(0, 2);
            let desc, answer, accept, explainLines;

            if (choice === 0) {
                const k = randInt(1, 6) * pick([1, -1]);
                const dir = k > 0 ? 'up' : 'down';
                desc = `translated ${Math.abs(k)} units ${dir}`;
                answer = k > 0 ? `y=x^2+${k}` : `y=x^2-${Math.abs(k)}`;
                accept = [
                    k > 0 ? `y = x^2 + ${k}` : `y = x^2 - ${Math.abs(k)}`,
                    k > 0 ? `x^2+${k}` : `x^2-${Math.abs(k)}`
                ];
                explainLines = [
                    `\\text{Translation ${Math.abs(k)} ${dir}: add ${k} to y}`,
                    `y = x^2 ${k > 0 ? '+' : '-'} ${Math.abs(k)}`
                ];
            } else if (choice === 1) {
                const h = randInt(1, 5) * pick([1, -1]);
                const dir = h > 0 ? 'right' : 'left';
                desc = `translated ${Math.abs(h)} units ${dir}`;
                answer = `y=(x-${h})^2`;
                const innerStr = h > 0 ? `x-${h}` : `x+${Math.abs(h)}`;
                accept = [
                    `y = (${innerStr})^2`,
                    `(${innerStr})^2`,
                    `y=(${innerStr})^2`
                ];
                explainLines = [
                    `\\text{Translation ${Math.abs(h)} ${dir}: replace x with (x - ${h})}`,
                    `y = (${innerStr})^2`
                ];
            } else {
                const sf = pick([2, 3, 4, 5]);
                desc = `stretched by scale factor ${sf} in the y-direction`;
                answer = `y=${sf}x^2`;
                accept = [
                    `y = ${sf}x^2`,
                    `${sf}x^2`
                ];
                explainLines = [
                    `\\text{Vertical stretch sf } ${sf}\\text{: multiply f(x) by } ${sf}`,
                    `y = ${sf}x^2`
                ];
            }

            return {
                type: 'Transformations',
                text: `The curve <span class="math">y = x<sup>2</sup></span> is ${desc}.<br>Write the equation of the new curve.<br><small style="color:var(--text-muted)">Format: y = ...</small>`,
                answer: answer,
                accept: accept,
                hint: 'Translation up/down: add/subtract from y. Left/right: replace x with (x - h). Stretch: multiply by scale factor.',
                explainLatex: explainLines
            };
        },
        function translationVector() {
            const h = randInt(1, 6) * pick([1, -1]);
            const k = randInt(1, 6) * pick([1, -1]);
            const innerStr = h > 0 ? `x - ${h}` : `x + ${Math.abs(h)}`;
            const answer = `y=(x${h > 0 ? '-' : '+'}${Math.abs(h)})^2${k > 0 ? '+' : '-'}${Math.abs(k)}`;
            const prettyAnswer = `y = (${innerStr})^2 ${k > 0 ? '+' : '-'} ${Math.abs(k)}`;
            return {
                type: 'Transformations',
                text: `The curve <span class="math">y = x<sup>2</sup></span> is translated by the vector <span class="math">(${h}, ${k})</span>.<br>Write the equation of the new curve.<br><small style="color:var(--text-muted)">Format: y = (x-h)^2 + k</small>`,
                answer: answer,
                accept: [
                    prettyAnswer,
                    `(x${h > 0 ? '-' : '+'}${Math.abs(h)})^2${k > 0 ? '+' : '-'}${Math.abs(k)}`,
                    `y = (x${h > 0 ? '-' : '+'}${Math.abs(h)})^2 ${k > 0 ? '+' : '-'} ${Math.abs(k)}`
                ],
                hint: `Translation by (h, k) means replace x with (x - h) and add k to y.`,
                explainLatex: [
                    `\\text{Translation by } \\begin{pmatrix} ${h} \\\\ ${k} \\end{pmatrix}`,
                    `\\text{Replace } x \\text{ with } (x - ${h > 0 ? h : '(' + h + ')'}) = (${innerStr})`,
                    `\\text{Add } ${k} \\text{ to y}`,
                    `y = (${innerStr})^2 ${k > 0 ? '+' : '-'} ${Math.abs(k)}`
                ]
            };
        }
    ],

    // --- Reciprocal Graphs ---

    'reciprocal': [
        function evaluateReciprocal() {
            const a = randInt(1, 8) * pick([1, -1]);
            const b = randInt(-5, 5);
            let c = pick([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]);
            const yVal = a / c + b;
            // Ensure clean answer
            if (a % c !== 0 && b === 0) {
                // Use frac answer
                const g = gcd(Math.abs(a), Math.abs(c));
                const num = a / g;
                const den = c / g;
                const fracAnswer = den < 0 ? `${-num}/${-den}` : `${num}/${den}`;
                return {
                    type: 'Reciprocal Graphs',
                    text: `Given <span class="math">y = ${frac(a, 'x')}${b !== 0 ? (b > 0 ? ` + ${b}` : ` - ${Math.abs(b)}`) : ''}</span>, find <span class="math">y</span> when <span class="math">x = ${c}</span>`,
                    answer: fracAnswer,
                    accept: [String(a / c)],
                    hint: `Substitute x = ${c} into the expression.`,
                    explainLatex: [
                        `y = \\frac{${a}}{${c}} ${b !== 0 ? (b > 0 ? '+' : '-') + ' ' + Math.abs(b) : ''}`,
                        `y = ${fracAnswer}${b !== 0 ? (b > 0 ? ' + ' : ' - ') + Math.abs(b) : ''}`
                    ]
                };
            }
            const answer = String(round(yVal, 4)).replace(/\.?0+$/, '');
            return {
                type: 'Reciprocal Graphs',
                text: `Given <span class="math">y = ${frac(a, 'x')}${b !== 0 ? (b > 0 ? ` + ${b}` : ` - ${Math.abs(b)}`) : ''}</span>, find <span class="math">y</span> when <span class="math">x = ${c}</span>`,
                answer: answer,
                hint: `Substitute x = ${c} into the expression and simplify.`,
                explainLatex: [
                    `y = \\frac{${a}}{${c}} ${b !== 0 ? (b > 0 ? '+' : '-') + ' ' + Math.abs(b) : ''}`,
                    `y = ${a / c}${b !== 0 ? (b > 0 ? ' + ' : ' - ') + Math.abs(b) : ''}`,
                    `y = ${answer}`
                ]
            };
        },
        function reciprocalAsymptotes() {
            const a = randInt(1, 6) * pick([1, -1]);
            const h = randInt(-5, 5);
            const k = randInt(-5, 5);
            const hStr = h >= 0 ? `x - ${h}` : `x + ${Math.abs(h)}`;
            const answer = `x=${h},y=${k}`;
            return {
                type: 'Reciprocal Graphs',
                text: `Identify the asymptotes of <span class="math">y = ${frac(a, hStr)}${k !== 0 ? (k > 0 ? ` + ${k}` : ` - ${Math.abs(k)}`) : ''}</span><br><small style="color:var(--text-muted)">Format: x=h, y=k</small>`,
                answer: answer,
                accept: [
                    `x = ${h}, y = ${k}`,
                    `x=${h} and y=${k}`,
                    `x = ${h} and y = ${k}`,
                    `y=${k},x=${h}`,
                    `y = ${k}, x = ${h}`,
                    `y=${k} and x=${h}`
                ],
                hint: `For y = a/(x - h) + k, the vertical asymptote is x = h and the horizontal asymptote is y = k.`,
                explainLatex: [
                    `y = \\frac{${a}}{${hStr}} ${k !== 0 ? (k > 0 ? '+' : '-') + ' ' + Math.abs(k) : ''}`,
                    `\\text{Vertical asymptote: denominator} = 0 \\implies x = ${h}`,
                    `\\text{Horizontal asymptote: as } x \\to \\infty, y \\to ${k}`,
                    `\\text{Asymptotes: } x = ${h} \\text{ and } y = ${k}`
                ]
            };
        },
        function reciprocalIntersection() {
            // y = a/x intersects y = bx => a/x = bx => a = bx^2 => x^2 = a/b
            // Choose a, b so a/b is a perfect square
            const squares = [1, 4, 9, 16, 25];
            const sq = pick(squares);
            const b = pick([1, 2, 3, 4]);
            const a = sq * b;
            const xPos = Math.sqrt(sq);
            const yPos = b * xPos;
            const xNeg = -xPos;
            const yNeg = b * xNeg;
            const answer = `(${xPos},${yPos}),(${xNeg},${yNeg})`;
            return {
                type: 'Reciprocal Graphs',
                text: `Find the points where <span class="math">y = ${frac(a, 'x')}</span> intersects <span class="math">y = ${b === 1 ? '' : b}x</span><br><small style="color:var(--text-muted)">Format: (x1,y1), (x2,y2)</small>`,
                answer: answer,
                accept: [
                    `(${xPos}, ${yPos}), (${xNeg}, ${yNeg})`,
                    `(${xNeg},${yNeg}),(${xPos},${yPos})`,
                    `(${xNeg}, ${yNeg}), (${xPos}, ${yPos})`,
                    `(${xPos},${yPos}) and (${xNeg},${yNeg})`,
                    `(${xNeg},${yNeg}) and (${xPos},${yPos})`
                ],
                hint: `Set the two equations equal: a/x = bx, then solve for x.`,
                explainLatex: [
                    `\\frac{${a}}{x} = ${b === 1 ? '' : b}x`,
                    `${a} = ${b === 1 ? '' : b}x^2`,
                    `x^2 = ${sq}`,
                    `x = \\pm ${xPos}`,
                    `\\text{When } x = ${xPos}: y = ${b === 1 ? '' : b}(${xPos}) = ${yPos}`,
                    `\\text{When } x = ${xNeg}: y = ${b === 1 ? '' : b}(${xNeg}) = ${yNeg}`,
                    `\\text{Points: } (${xPos}, ${yPos}) \\text{ and } (${xNeg}, ${yNeg})`
                ]
            };
        }
    ],

    // --- Asymptotes ---

    'asymptotes': [
        function verticalAsymptote() {
            const a = randInt(-5, 5);
            if (a === 0) return verticalAsymptote();
            const aStr = a > 0 ? `x - ${a}` : `x + ${Math.abs(a)}`;
            return {
                type: 'Asymptotes',
                text: `Find the vertical asymptote of <span class="math">y = ${frac(1, aStr)}</span><br><small style="color:var(--text-muted)">Format: x = a</small>`,
                answer: `x=${a}`,
                accept: [`x = ${a}`],
                hint: `The vertical asymptote occurs where the denominator equals zero.`,
                explainLatex: [
                    `\\text{Set denominator} = 0`,
                    `${aStr} = 0`,
                    `x = ${a}`
                ]
            };
        },
        function horizontalAsymptote() {
            const a = randInt(1, 6) * pick([1, -1]);
            const b = randInt(-8, 8);
            const c = randInt(1, 5) * pick([1, -1]);
            const d = randInt(-8, 8);
            if (c === 0) return horizontalAsymptote();
            const g = gcd(Math.abs(a), Math.abs(c));
            const num = a / g;
            const den = c / g;
            const isFrac = den !== 1;
            const answer = isFrac ? `y=${num}/${den}` : `y=${num}`;
            const prettyAnswer = isFrac ? `y = ${num}/${den}` : `y = ${num}`;
            const numStr = `${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}`;
            const denStr = `${c}x ${d >= 0 ? '+ ' + d : '- ' + Math.abs(d)}`;
            return {
                type: 'Asymptotes',
                text: `Find the horizontal asymptote of <span class="math">y = ${frac(numStr, denStr)}</span><br><small style="color:var(--text-muted)">Format: y = a/c</small>`,
                answer: answer,
                accept: [
                    prettyAnswer,
                    isFrac ? `y = ${round(a / c, 6)}` : null,
                    isFrac ? `y=${round(a / c, 6)}` : null
                ].filter(Boolean),
                hint: `For a rational function where numerator and denominator have the same degree, divide the leading coefficients.`,
                explainLatex: [
                    `y = \\frac{${a}x ${b >= 0 ? '+' : '-'} ${Math.abs(b)}}{${c}x ${d >= 0 ? '+' : '-'} ${Math.abs(d)}}`,
                    `\\text{As } x \\to \\infty, \\text{ the } ${Math.abs(b)} \\text{ and } ${Math.abs(d)} \\text{ become negligible}`,
                    `y \\to \\frac{${a}x}{${c}x} = \\frac{${a}}{${c}}${g > 1 ? ` = \\frac{${num}}{${den}}` : ''}`,
                    `\\text{Horizontal asymptote: } ${prettyAnswer}`
                ]
            };
        },
        function bothAsymptotes() {
            const a = randInt(1, 8) * pick([1, -1]);
            const h = randInt(-5, 5);
            const k = randInt(-5, 5);
            const hStr = h >= 0 ? `x - ${h}` : `x + ${Math.abs(h)}`;
            const answer = `x=${h},y=${k}`;
            return {
                type: 'Asymptotes',
                text: `Find both asymptotes of <span class="math">y = ${frac(a, hStr)}${k !== 0 ? (k > 0 ? ` + ${k}` : ` - ${Math.abs(k)}`) : ''}</span><br><small style="color:var(--text-muted)">Format: x=h, y=k</small>`,
                answer: answer,
                accept: [
                    `x = ${h}, y = ${k}`,
                    `x=${h} and y=${k}`,
                    `x = ${h} and y = ${k}`,
                    `y=${k},x=${h}`,
                    `y = ${k}, x = ${h}`,
                    `y=${k} and x=${h}`
                ],
                hint: `Vertical asymptote: set the denominator to 0. Horizontal asymptote: the value y approaches as x tends to infinity.`,
                explainLatex: [
                    `y = \\frac{${a}}{${hStr}} ${k !== 0 ? (k > 0 ? '+' : '-') + ' ' + Math.abs(k) : ''}`,
                    `\\text{Vertical: } ${hStr} = 0 \\implies x = ${h}`,
                    `\\text{Horizontal: as } x \\to \\infty, \\frac{${a}}{${hStr}} \\to 0, \\text{ so } y \\to ${k}`,
                    `\\text{Asymptotes: } x = ${h} \\text{ and } y = ${k}`
                ]
            };
        }
    ]
};

// Default hints per topic
const defaultHints = {
    'Function Notation': 'Substitute the given value into the function. For composites fg(x), evaluate the inner function first, then substitute into the outer function.',
    'Sketching Curves': 'y-intercept: set x = 0. x-intercepts: set y = 0 and solve. Turning point: complete the square to get (x - h)^2 + k.',
    'Transformations': 'f(x) + a: up/down. f(x + a): left/right (opposite sign). af(x): vertical stretch. f(ax): horizontal stretch sf 1/a.',
    'Reciprocal Graphs': 'For y = a/x, the graph has asymptotes at x = 0 and y = 0. Adding constants shifts the asymptotes.',
    'Asymptotes': 'Vertical asymptote: denominator = 0. Horizontal asymptote: compare leading coefficients or consider behaviour as x tends to infinity.'
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
        saveActivityStats('graphs', state, isCorrect);
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

// Subtopic selector
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
        loadActivityStats('graphs', state);
        updateScore();
    }
    updateStreak(null);
    showQuestion();
}

init();
