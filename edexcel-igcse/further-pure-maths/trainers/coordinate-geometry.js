/* ==============================
   Coordinate Geometry Trainer - Question Generator
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

function frac(num, den) {
    return `<span class="math"><span class="frac"><span class="frac-num">${num}</span><span class="frac-den">${den}</span></span></span>`;
}

function op(symbol) {
    return `<span class="op">${symbol}</span>`;
}

function sup(base, exp) {
    return `<span class="math">${base}<sup>${exp}</sup></span>`;
}

// Format a gradient as a fraction string or integer
function formatGradient(dy, dx) {
    if (dx === 0) return 'undefined';
    if (dy === 0) return '0';
    const g = gcd(Math.abs(dy), Math.abs(dx));
    let n = dy / g, d = dx / g;
    if (d < 0) { n = -n; d = -d; }
    return d === 1 ? String(n) : `${n}/${d}`;
}

// Format y = mx + c nicely
function formatLineEq(m, c, mNum, mDen) {
    // m as fraction string
    let mStr;
    if (mDen === 1) {
        if (m === 1) mStr = '';
        else if (m === -1) mStr = '-';
        else mStr = String(m);
    } else {
        const sign = mNum < 0 ? '-' : '';
        mStr = `${sign}${Math.abs(mNum)}/${Math.abs(mDen)}`;
    }

    let cStr = '';
    if (c > 0) cStr = `+${c}`;
    else if (c < 0) cStr = String(c);

    if (m === 0) return `y=${c}`;
    if (c === 0) return `y=${mStr}x`;
    return `y=${mStr}x${cStr}`;
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
// Question Generators
// ==============================

const generators = {

    // --- Distance & Midpoint ---

    'distance-midpoint': [
        function distanceBetweenPoints() {
            const x1 = randInt(-8, 8), y1 = randInt(-8, 8);
            const x2 = randInt(-8, 8), y2 = randInt(-8, 8);
            if (x1 === x2 && y1 === y2) return distanceBetweenPoints();
            const dx = x2 - x1, dy = y2 - y1;
            const distSq = dx * dx + dy * dy;
            const dist = Math.sqrt(distSq);
            const isInteger = Number.isInteger(dist);
            const answer = isInteger ? String(dist) : `sqrt(${distSq})`;
            return {
                type: 'Distance & Midpoint',
                text: `Find the distance between the points <span class="math">(${x1}, ${y1})</span> and <span class="math">(${x2}, ${y2})</span>.<br><small style="color:var(--text-muted)">${isInteger ? 'Give an exact answer' : 'Give your answer in surd form sqrt(n)'}</small>`,
                answer: answer,
                accept: isInteger ? [] : [String(round(dist, 2))],
                hint: 'Distance = sqrt((x2-x1)^2 + (y2-y1)^2).',
                explainLatex: [
                    `d = \\sqrt{(${x2} - ${x1 < 0 ? '(' + x1 + ')' : x1})^2 + (${y2} - ${y1 < 0 ? '(' + y1 + ')' : y1})^2}`,
                    `= \\sqrt{${dx}^2 + ${dy}^2} = \\sqrt{${dx*dx} + ${dy*dy}} = \\sqrt{${distSq}}${isInteger ? ' = ' + dist : ''}`
                ]
            };
        },
        function midpointOfPoints() {
            let x1 = randInt(-8, 8), y1 = randInt(-8, 8);
            let x2 = randInt(-8, 8), y2 = randInt(-8, 8);
            // Ensure integer midpoint
            if ((x1 + x2) % 2 !== 0) x2 += 1;
            if ((y1 + y2) % 2 !== 0) y2 += 1;
            const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
            return {
                type: 'Distance & Midpoint',
                text: `Find the midpoint of <span class="math">(${x1}, ${y1})</span> and <span class="math">(${x2}, ${y2})</span>.<br><small style="color:var(--text-muted)">Give your answer as (x,y)</small>`,
                answer: `(${mx},${my})`,
                accept: [`${mx},${my}`],
                hint: 'Midpoint = ((x1+x2)/2, (y1+y2)/2).',
                explainLatex: [
                    `M = \\left(\\frac{${x1} + ${x2}}{2}, \\frac{${y1} + ${y2}}{2}\\right) = \\left(\\frac{${x1+x2}}{2}, \\frac{${y1+y2}}{2}\\right) = (${mx}, ${my})`
                ]
            };
        },
        function distanceNicePairs() {
            // Use Pythagorean triples for integer distances
            const triples = [[3,4,5],[5,12,13],[6,8,10],[8,15,17],[7,24,25]];
            const [a, b, c] = pick(triples);
            const x1 = randInt(-5, 5), y1 = randInt(-5, 5);
            const x2 = x1 + pick([-1,1]) * a;
            const y2 = y1 + pick([-1,1]) * b;
            return {
                type: 'Distance & Midpoint',
                text: `Find the distance between <span class="math">(${x1}, ${y1})</span> and <span class="math">(${x2}, ${y2})</span>.`,
                answer: String(c),
                hint: 'Distance = sqrt((x2-x1)^2 + (y2-y1)^2).',
                explainLatex: [
                    `d = \\sqrt{(${x2}-${x1 < 0 ? '('+x1+')' : x1})^2 + (${y2}-${y1 < 0 ? '('+y1+')' : y1})^2}`,
                    `= \\sqrt{${a}^2 + ${b}^2} = \\sqrt{${a*a+b*b}} = ${c}`
                ]
            };
        }
    ],

    // --- Gradient & Lines ---

    'gradient-lines': [
        function gradientTwoPoints() {
            const x1 = randInt(-6, 6), y1 = randInt(-6, 6);
            const x2 = randInt(-6, 6), y2 = randInt(-6, 6);
            if (x1 === x2) return gradientTwoPoints();
            const dy = y2 - y1, dx = x2 - x1;
            const answer = formatGradient(dy, dx);
            const g = gcd(Math.abs(dy), Math.abs(dx));
            return {
                type: 'Gradient & Lines',
                text: `Find the gradient of the line through <span class="math">(${x1}, ${y1})</span> and <span class="math">(${x2}, ${y2})</span>.<br><small style="color:var(--text-muted)">Give your answer as a fraction or integer</small>`,
                answer: answer,
                accept: [String(round(dy / dx, 4))],
                hint: 'Gradient m = (y2 - y1) / (x2 - x1).',
                explainLatex: [
                    `m = \\frac{${y2} - ${y1 < 0 ? '('+y1+')' : y1}}{${x2} - ${x1 < 0 ? '('+x1+')' : x1}} = \\frac{${dy}}{${dx}}${g > 1 ? ' = ' + answer.replace(/\//g, '/') : ''}`
                ]
            };
        },
        function equationTwoPoints() {
            const x1 = randInt(-5, 5), y1 = randInt(-5, 5);
            // Ensure integer gradient for clean answer
            const m = pick([-3, -2, -1, 1, 2, 3, 4]);
            const dx = pick([-2, -1, 1, 2]);
            const x2 = x1 + dx;
            const y2 = y1 + m * dx;
            const c = y1 - m * x1;

            let answer, accepts;
            if (c === 0) {
                answer = m === 1 ? 'y=x' : m === -1 ? 'y=-x' : `y=${m}x`;
                accepts = [`y=${m}x`, `y=${m}x+0`];
            } else {
                const cStr = c > 0 ? `+${c}` : String(c);
                const mStr = m === 1 ? '' : m === -1 ? '-' : String(m);
                answer = `y=${mStr}x${cStr}`;
                accepts = [`y=${m}x${cStr}`, `y=${mStr}x${cStr}`];
            }
            return {
                type: 'Gradient & Lines',
                text: `Find the equation of the line through <span class="math">(${x1}, ${y1})</span> and <span class="math">(${x2}, ${y2})</span>.<br><small style="color:var(--text-muted)">Give your answer in the form y = mx + c</small>`,
                answer: answer,
                accept: accepts,
                hint: 'Find the gradient m = (y2-y1)/(x2-x1), then use y - y1 = m(x - x1) to find c.',
                explainLatex: [
                    `m = \\frac{${y2} - ${y1 < 0 ? '('+y1+')' : y1}}{${x2} - ${x1 < 0 ? '('+x1+')' : x1}} = \\frac{${y2-y1}}{${x2-x1}} = ${m}`,
                    `y - ${y1 < 0 ? '('+y1+')' : y1} = ${m}(x - ${x1 < 0 ? '('+x1+')' : x1})`,
                    `y = ${m === 1 ? '' : m === -1 ? '-' : m}x ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)}`
                ]
            };
        },
        function equationPointGradient() {
            const m = pick([-3, -2, -1, 1, 2, 3, 4, 5]);
            const x1 = randInt(-5, 5), y1 = randInt(-5, 5);
            const c = y1 - m * x1;

            const mStr = m === 1 ? '' : m === -1 ? '-' : String(m);
            const cStr = c === 0 ? '' : c > 0 ? `+${c}` : String(c);
            const answer = c === 0 ? `y=${mStr}x` : `y=${mStr}x${cStr}`;
            return {
                type: 'Gradient & Lines',
                text: `Find the equation of the line with gradient <span class="math">${m}</span> passing through <span class="math">(${x1}, ${y1})</span>.<br><small style="color:var(--text-muted)">Give your answer in the form y = mx + c</small>`,
                answer: answer,
                accept: [`y=${m}x${cStr}`, `y=${mStr}x${cStr}`],
                hint: 'Use y - y1 = m(x - x1) and rearrange to y = mx + c.',
                explainLatex: [
                    `y - ${y1 < 0 ? '('+y1+')' : y1} = ${m}(x - ${x1 < 0 ? '('+x1+')' : x1})`,
                    `y = ${m === 1 ? '' : m === -1 ? '-' : m}x ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)}`
                ]
            };
        }
    ],

    // --- Parallel & Perpendicular ---

    'parallel-perp': [
        function parallelGradient() {
            const m = pick([-3, -2, -1, 1, 2, 3, 4, 5]);
            const c = randInt(-5, 5);
            const mStr = m === 1 ? '' : m === -1 ? '-' : String(m);
            const cStr = c === 0 ? '' : c > 0 ? ` + ${c}` : ` - ${Math.abs(c)}`;
            return {
                type: 'Parallel & Perpendicular',
                text: `A line is parallel to <span class="math">y = ${mStr}x${cStr}</span>. What is its gradient?`,
                answer: String(m),
                hint: 'Parallel lines have the same gradient.',
                explainLatex: [
                    `\\text{Parallel lines have equal gradients.}`,
                    `m = ${m}`
                ]
            };
        },
        function perpGradient() {
            const nums = [-3, -2, -1, 1, 2, 3, 4, 5];
            const m = pick(nums);
            // Perpendicular gradient = -1/m
            const perpNum = -1;
            const perpDen = m;
            const answer = formatGradient(perpNum, perpDen);
            const c = randInt(-5, 5);
            const mStr = m === 1 ? '' : m === -1 ? '-' : String(m);
            const cStr = c === 0 ? '' : c > 0 ? ` + ${c}` : ` - ${Math.abs(c)}`;
            return {
                type: 'Parallel & Perpendicular',
                text: `A line is perpendicular to <span class="math">y = ${mStr}x${cStr}</span>. What is its gradient?<br><small style="color:var(--text-muted)">Give your answer as a fraction or integer</small>`,
                answer: answer,
                accept: [String(round(-1 / m, 4))],
                hint: 'Perpendicular gradients multiply to -1. If one gradient is m, the other is -1/m.',
                explainLatex: [
                    `\\text{If } m_1 = ${m}, \\text{ then } m_2 = -\\frac{1}{${m}} = ${answer}`
                ]
            };
        },
        function parallelLineThrough() {
            const m = pick([-2, -1, 1, 2, 3]);
            const c1 = randInt(-5, 5);
            const px = randInt(-4, 4), py = randInt(-4, 4);
            const c2 = py - m * px;
            const mStr = m === 1 ? '' : m === -1 ? '-' : String(m);
            const c1Str = c1 === 0 ? '' : c1 > 0 ? ` + ${c1}` : ` - ${Math.abs(c1)}`;
            const c2Str = c2 === 0 ? '' : c2 > 0 ? `+${c2}` : String(c2);
            const answer = c2 === 0 ? `y=${mStr}x` : `y=${mStr}x${c2Str}`;
            return {
                type: 'Parallel & Perpendicular',
                text: `Find the equation of the line parallel to <span class="math">y = ${mStr}x${c1Str}</span> that passes through <span class="math">(${px}, ${py})</span>.<br><small style="color:var(--text-muted)">Give your answer in the form y = mx + c</small>`,
                answer: answer,
                accept: [`y=${m}x${c2Str}`, `y=${mStr}x${c2Str}`],
                hint: 'Same gradient as the given line. Use y - y1 = m(x - x1) with the point.',
                explainLatex: [
                    `\\text{Parallel } \\Rightarrow m = ${m}`,
                    `y - ${py < 0 ? '('+py+')' : py} = ${m}(x - ${px < 0 ? '('+px+')' : px})`,
                    `y = ${m === 1 ? '' : m === -1 ? '-' : m}x ${c2 >= 0 ? '+ ' + c2 : '- ' + Math.abs(c2)}`
                ]
            };
        },
        function perpLineThrough() {
            const m1 = pick([-2, -1, 1, 2]);
            const c1 = randInt(-5, 5);
            const px = randInt(-4, 4), py = randInt(-4, 4);
            // Perpendicular gradient: ensure integer c
            const m2Num = -1, m2Den = m1;
            const g = gcd(1, Math.abs(m1));
            let perpN = -1, perpD = m1;
            if (perpD < 0) { perpN = -perpN; perpD = -perpD; }
            // c2 = py - (perpN/perpD) * px -- ensure integer
            const c2Num = py * perpD - perpN * px;
            // Only proceed if c2 is integer (c2Num divisible by perpD)
            if (c2Num % perpD !== 0) return perpLineThrough();
            const c2 = c2Num / perpD;
            const m2 = perpN / perpD;

            const m1Str = m1 === 1 ? '' : m1 === -1 ? '-' : String(m1);
            const c1Str = c1 === 0 ? '' : c1 > 0 ? ` + ${c1}` : ` - ${Math.abs(c1)}`;

            let answer;
            const m2Str = perpD === 1 ? String(perpN) : `${perpN}/${perpD}`;
            const m2Display = perpD === 1 ? (perpN === 1 ? '' : perpN === -1 ? '-' : String(perpN)) : m2Str;
            const c2Str = c2 === 0 ? '' : c2 > 0 ? `+${c2}` : String(c2);
            answer = c2 === 0 ? `y=${m2Display}x` : `y=${m2Display}x${c2Str}`;

            return {
                type: 'Parallel & Perpendicular',
                text: `Find the equation of the line perpendicular to <span class="math">y = ${m1Str}x${c1Str}</span> that passes through <span class="math">(${px}, ${py})</span>.<br><small style="color:var(--text-muted)">Give your answer in the form y = mx + c</small>`,
                answer: answer,
                accept: [`y=${m2Str}x${c2Str}`],
                hint: 'Perpendicular gradient = -1/m. Then use y - y1 = m_perp(x - x1).',
                explainLatex: [
                    `m_1 = ${m1} \\Rightarrow m_2 = -\\frac{1}{${m1}} = ${m2Str}`,
                    `y - ${py < 0 ? '('+py+')' : py} = ${m2Str}(x - ${px < 0 ? '('+px+')' : px})`,
                    `y = ${m2Display}x ${c2 >= 0 ? '+ ' + c2 : '- ' + Math.abs(c2)}`
                ]
            };
        }
    ],

    // --- Equation of Circle ---

    'circles': [
        function circleFromCenterRadius() {
            const a = randInt(-5, 5), b = randInt(-5, 5);
            const r = randInt(1, 8);
            const rSq = r * r;
            // (x-a)^2 + (y-b)^2 = r^2
            const xPart = a === 0 ? 'x^2' : `(x${a > 0 ? '-' + a : '+' + Math.abs(a)})^2`;
            const yPart = b === 0 ? 'y^2' : `(y${b > 0 ? '-' + b : '+' + Math.abs(b)})^2`;
            const answer = `${xPart}+${yPart}=${rSq}`;
            return {
                type: 'Equation of Circle',
                text: `Write the equation of the circle with centre <span class="math">(${a}, ${b})</span> and radius <span class="math">${r}</span>.<br><small style="color:var(--text-muted)">Format: (x-a)^2+(y-b)^2=r^2</small>`,
                answer: answer,
                accept: [
                    `${xPart}+${yPart}=${rSq}`,
                    answer.replace(/\+/g, ' + ').replace(/=/g, ' = ')
                ],
                hint: 'Circle with centre (a,b) and radius r: (x-a)^2 + (y-b)^2 = r^2.',
                explainLatex: [
                    `\\text{Centre } (${a}, ${b}), \\text{ radius } ${r}`,
                    `(x - ${a < 0 ? '('+a+')' : a})^2 + (y - ${b < 0 ? '('+b+')' : b})^2 = ${r}^2 = ${rSq}`
                ]
            };
        },
        function circleFindCenter() {
            const a = randInt(-6, 6), b = randInt(-6, 6);
            const r = randInt(1, 7);
            // Expanded: x^2 + y^2 - 2ax - 2by + (a^2 + b^2 - r^2) = 0
            const p = -2 * a; // coefficient of x
            const q = -2 * b; // coefficient of y
            const k = a * a + b * b - r * r;

            const pStr = p === 0 ? '' : p > 0 ? `+ ${p}x` : `- ${Math.abs(p)}x`;
            const qStr = q === 0 ? '' : q > 0 ? `+ ${q}y` : `- ${Math.abs(q)}y`;
            const kStr = k === 0 ? '' : k > 0 ? `+ ${k}` : `- ${Math.abs(k)}`;

            return {
                type: 'Equation of Circle',
                text: `Find the centre of the circle <span class="math">x&sup2; + y&sup2; ${pStr} ${qStr} ${kStr} = 0</span>.<br><small style="color:var(--text-muted)">Give your answer as (x,y)</small>`,
                answer: `(${a},${b})`,
                accept: [`${a},${b}`],
                hint: 'Complete the square for x and y. The general form x^2 + y^2 + px + qy + k = 0 has centre (-p/2, -q/2).',
                explainLatex: [
                    `x^2 + y^2 ${p >= 0 ? '+' : ''} ${p}x ${q >= 0 ? '+' : ''} ${q}y ${k >= 0 ? '+' : ''} ${k} = 0`,
                    `\\text{Centre} = \\left(-\\frac{${p}}{2}, -\\frac{${q}}{2}\\right) = (${a}, ${b})`
                ]
            };
        },
        function circleFindRadius() {
            const a = randInt(-5, 5), b = randInt(-5, 5);
            const r = randInt(1, 7);
            const p = -2 * a;
            const q = -2 * b;
            const k = a * a + b * b - r * r;

            const pStr = p === 0 ? '' : p > 0 ? `+ ${p}x` : `- ${Math.abs(p)}x`;
            const qStr = q === 0 ? '' : q > 0 ? `+ ${q}y` : `- ${Math.abs(q)}y`;
            const kStr = k === 0 ? '' : k > 0 ? `+ ${k}` : `- ${Math.abs(k)}`;

            return {
                type: 'Equation of Circle',
                text: `Find the radius of the circle <span class="math">x&sup2; + y&sup2; ${pStr} ${qStr} ${kStr} = 0</span>.`,
                answer: String(r),
                hint: 'Complete the square. Radius = sqrt((p/2)^2 + (q/2)^2 - k) where the equation is x^2 + y^2 + px + qy + k = 0.',
                explainLatex: [
                    `\\text{Centre} = (${a}, ${b})`,
                    `r = \\sqrt{${a}^2 + ${b}^2 - ${k < 0 ? '('+k+')' : k}} = \\sqrt{${a*a} + ${b*b} ${k < 0 ? '+' + Math.abs(k) : '-' + k}} = \\sqrt{${r*r}} = ${r}`
                ]
            };
        }
    ],

    // --- Tangents & Normals ---

    'tangents': [
        function tangentToCircleAtPoint() {
            // Circle centred at origin for simplicity
            const r = pick([5, 10, 13, 15, 17, 25]);
            // Pick a point on the circle with integer coords (Pythagorean triples)
            const pts = {
                5: [[3,4],[4,3],[-3,4],[3,-4],[-4,3],[4,-3]],
                10: [[6,8],[8,6],[-6,8],[6,-8]],
                13: [[5,12],[12,5],[-5,12],[5,-12]],
                15: [[9,12],[12,9],[-9,12],[9,-12]],
                17: [[8,15],[15,8],[-8,15],[8,-15]],
                25: [[7,24],[24,7],[-7,24],[7,-24],[15,20],[20,15]]
            };
            const [px, py] = pick(pts[r]);
            // Gradient of radius to point = py/px
            // Tangent gradient = -px/py (perpendicular to radius)
            if (py === 0) return tangentToCircleAtPoint();
            const tGrad = formatGradient(-px, py);
            // y - py = m(x - px), find c
            const tGradVal = -px / py;
            const c = py - tGradVal * px;
            const cRound = round(c, 2);

            // Build answer as y = mx + c
            const tg = gcd(Math.abs(px), Math.abs(py));
            let mNum = -px / tg, mDen = py / tg;
            if (mDen < 0) { mNum = -mNum; mDen = -mDen; }
            // c = py + (px/py)*px = py + px^2/py = (py^2 + px^2)/py = r^2/py
            const cNum = r * r;
            const cDen = py;
            const cg = gcd(Math.abs(cNum), Math.abs(cDen));
            let cn = cNum / cg, cd = cDen / cg;
            if (cd < 0) { cn = -cn; cd = -cd; }
            const cFrac = cd === 1 ? String(cn) : `${cn}/${cd}`;

            const mFrac = mDen === 1 ? (mNum === 1 ? '' : mNum === -1 ? '-' : String(mNum)) : `${mNum}/${mDen}`;
            const cStr = cn > 0 ? `+${cFrac}` : cFrac;
            const answer = cn === 0 ? `y=${mFrac}x` : `y=${mFrac}x${cStr}`;

            return {
                type: 'Tangents & Normals',
                text: `Find the equation of the tangent to the circle <span class="math">x&sup2; + y&sup2; = ${r*r}</span> at the point <span class="math">(${px}, ${py})</span>.<br><small style="color:var(--text-muted)">Give your answer in the form y = mx + c (fractions OK)</small>`,
                answer: answer,
                accept: [`y=${mNum}/${mDen}x${cStr}`, `y=${tGrad}x${cStr}`],
                hint: 'The tangent is perpendicular to the radius. Find gradient of radius (from origin to point), then use negative reciprocal.',
                explainLatex: [
                    `\\text{Gradient of radius} = \\frac{${py}}{${px}} = ${formatGradient(py, px)}`,
                    `\\text{Tangent gradient} = -\\frac{${px}}{${py}} = ${tGrad}`,
                    `y - ${py} = ${tGrad}(x - ${px})`
                ]
            };
        },
        function tangentToCircleGeneral() {
            // Circle with centre (a,b), point on it
            const a = randInt(-3, 3), b = randInt(-3, 3);
            const r = pick([5, 10, 13]);
            const offsets = {
                5: [[3,4],[4,3],[-3,4],[3,-4]],
                10: [[6,8],[8,6],[-6,8],[6,-8]],
                13: [[5,12],[12,5],[-5,12],[5,-12]]
            };
            const [dx, dy] = pick(offsets[r]);
            const px = a + dx, py = b + dy;
            // Gradient of radius = dy/dx
            if (dx === 0) return tangentToCircleGeneral();
            const radGrad = formatGradient(dy, dx);
            // Tangent gradient = -dx/dy
            if (dy === 0) return tangentToCircleGeneral();
            const tanGrad = formatGradient(-dx, dy);
            const tanGradVal = -dx / dy;
            const c = py - tanGradVal * px;
            const cRound = round(c, 2);

            const tg = gcd(Math.abs(dx), Math.abs(dy));
            let mNum = -dx / tg, mDen = dy / tg;
            if (mDen < 0) { mNum = -mNum; mDen = -mDen; }
            const mFrac = mDen === 1 ? (mNum === 1 ? '' : mNum === -1 ? '-' : String(mNum)) : `${mNum}/${mDen}`;

            // c = py + (dx/dy)*px
            const cNumFull = py * (dy / tg) + (dx / tg) * px;
            const cDenFull = dy / tg;
            // Simplify
            const cIsInt = Number.isInteger(cRound) && Math.abs(cRound - Math.round(cRound)) < 0.001;
            const cInt = Math.round(cRound);
            const cDisplay = cIsInt ? String(cInt) : String(cRound);
            const cSuffix = cIsInt ? (cInt > 0 ? `+${cInt}` : cInt === 0 ? '' : String(cInt)) : (cRound > 0 ? `+${cRound}` : String(cRound));
            const answer = cSuffix === '' ? `y=${mFrac}x` : `y=${mFrac}x${cSuffix}`;

            const xPart = a === 0 ? 'x^2' : `(x${a > 0 ? '-'+a : '+'+Math.abs(a)})^2`;
            const yPart = b === 0 ? 'y^2' : `(y${b > 0 ? '-'+b : '+'+Math.abs(b)})^2`;

            return {
                type: 'Tangents & Normals',
                text: `Find the equation of the tangent to the circle <span class="math">${xPart} + ${yPart} = ${r*r}</span> at <span class="math">(${px}, ${py})</span>.<br><small style="color:var(--text-muted)">Give your answer in the form y = mx + c</small>`,
                answer: answer,
                accept: [],
                hint: 'Find gradient of radius from centre to point. Tangent gradient = negative reciprocal. Then use y - y1 = m(x - x1).',
                explainLatex: [
                    `\\text{Centre} = (${a}, ${b})`,
                    `\\text{Radius gradient} = \\frac{${py} - ${b}}{${px} - ${a}} = \\frac{${dy}}{${dx}} = ${radGrad}`,
                    `\\text{Tangent gradient} = ${tanGrad}`,
                    `y - ${py} = ${tanGrad}(x - ${px})`
                ]
            };
        },
        function normalToCircle() {
            // Normal at a point on circle passes through centre
            const a = randInt(-4, 4), b = randInt(-4, 4);
            const r = pick([5, 10, 13]);
            const offsets = {
                5: [[3,4],[4,3],[-3,4],[3,-4]],
                10: [[6,8],[8,6],[-6,8],[6,-8]],
                13: [[5,12],[12,5],[-5,12],[5,-12]]
            };
            const [dx, dy] = pick(offsets[r]);
            const px = a + dx, py = b + dy;
            if (dx === 0) return normalToCircle();
            // Normal gradient = dy/dx (same as radius)
            const normGrad = formatGradient(dy, dx);
            const normVal = dy / dx;
            const c = py - normVal * px;
            const cRound = round(c, 2);
            const cIsInt = Math.abs(cRound - Math.round(cRound)) < 0.001;
            const cInt = Math.round(cRound);

            const ng = gcd(Math.abs(dy), Math.abs(dx));
            let mNum = dy / ng, mDen = dx / ng;
            if (mDen < 0) { mNum = -mNum; mDen = -mDen; }
            const mFrac = mDen === 1 ? (mNum === 1 ? '' : mNum === -1 ? '-' : String(mNum)) : `${mNum}/${mDen}`;

            const cDisplay = cIsInt ? String(cInt) : String(cRound);
            const cSuffix = cIsInt ? (cInt > 0 ? `+${cInt}` : cInt === 0 ? '' : String(cInt)) : (cRound > 0 ? `+${cRound}` : String(cRound));
            const answer = cSuffix === '' ? `y=${mFrac}x` : `y=${mFrac}x${cSuffix}`;

            const xPart = a === 0 ? 'x^2' : `(x${a > 0 ? '-'+a : '+'+Math.abs(a)})^2`;
            const yPart = b === 0 ? 'y^2' : `(y${b > 0 ? '-'+b : '+'+Math.abs(b)})^2`;

            return {
                type: 'Tangents & Normals',
                text: `Find the equation of the normal to the circle <span class="math">${xPart} + ${yPart} = ${r*r}</span> at <span class="math">(${px}, ${py})</span>.<br><small style="color:var(--text-muted)">Give your answer in the form y = mx + c</small>`,
                answer: answer,
                accept: [],
                hint: 'The normal at a point on a circle passes through the centre. Its gradient equals the radius gradient.',
                explainLatex: [
                    `\\text{Centre} = (${a}, ${b}), \\text{ Point} = (${px}, ${py})`,
                    `\\text{Normal gradient} = \\frac{${py} - ${b}}{${px} - ${a}} = \\frac{${dy}}{${dx}} = ${normGrad}`,
                    `y - ${py} = ${normGrad}(x - ${px})`
                ]
            };
        }
    ]
};

// Default hints per topic
const defaultHints = {
    'Distance & Midpoint': 'Distance = sqrt((x2-x1)^2 + (y2-y1)^2). Midpoint = ((x1+x2)/2, (y1+y2)/2).',
    'Gradient & Lines': 'Gradient m = (y2-y1)/(x2-x1). Line equation: y - y1 = m(x - x1).',
    'Parallel & Perpendicular': 'Parallel: same gradient. Perpendicular: gradients multiply to -1.',
    'Equation of Circle': 'Circle with centre (a,b) radius r: (x-a)^2 + (y-b)^2 = r^2. General form: centre = (-p/2, -q/2).',
    'Tangents & Normals': 'Tangent is perpendicular to radius at the point. Normal passes through the centre.'
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
        saveActivityStats('coordinate-geometry', state, isCorrect);
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
        loadActivityStats('coordinate-geometry', state);
        updateScore();
    }
    updateStreak(null);
    showQuestion();
}

init();
