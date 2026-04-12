/* ==============================
   Number Trainer - Question Generator
   AQA GCSE Higher Tier
   ============================== */

const state = {
    correct: 0,
    total: 0,
    streak: 0,
    maxStreak: 10,
    currentAnswer: null,
    currentAccept: null, // alternate accepted answers
    activeTopic: 'all',
    history: []
};

// DOM
const els = {
    questionType: document.getElementById('question-type'),
    questionText: document.getElementById('question-text'),
    answerInput: null, // set after MathLive loads
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

function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

function primeFactors(n) {
    const factors = {};
    let d = 2;
    while (d * d <= n) {
        while (n % d === 0) {
            factors[d] = (factors[d] || 0) + 1;
            n /= d;
        }
        d++;
    }
    if (n > 1) factors[n] = (factors[n] || 0) + 1;
    return factors;
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

// Render standard form: 3.2 x 10^5
function sf(sig, power) {
    return `<span class="math">${sig} &times; 10<sup>${power}</sup></span>`;
}

// Render square root
function sqrt(n) {
    return `<span class="math">&radic;<span style="text-decoration:overline">${n}</span></span>`;
}

// Parse MathLive LaTeX output into a usable string for answer comparison
function parseLatex(raw) {
    let s = raw.replace(/\\left|\\right/g, '').replace(/\s+/g, '').trim();

    // Normalize sqrt FIRST (before frac extraction)
    s = s.replace(/\\sqrt\{([^}]+)\}/g, 'sqrt($1)');
    s = s.replace(/\\sqrt(\d)/g, 'sqrt($1)'); // \sqrt2 shorthand

    // \times, \cdot -> x
    s = s.replace(/\\times/g, 'x').replace(/\\cdot/g, 'x');

    // \frac{...}{...} -> .../...
    const fm = s.match(/(-?)\\[cdt]?frac\{([^}]+)\}\{([^}]+)\}/);
    if (fm) {
        const sign = fm[1] === '-' ? '-' : '';
        const num = fm[2];
        const den = fm[3];
        // If both are pure numbers, simplify
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

    // a\sqrt -> asqrt (fallback for any remaining)
    s = s.replace(/(\d+)\\sqrt/g, '$1sqrt');

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
        .replace(/\s+/g, '')       // remove all spaces
        .replace(/×/g, 'x')       // times symbol -> x
        .replace(/\*/g, 'x')      // asterisk -> x
        .replace(/·/g, 'x')       // middle dot -> x
        .trim();
}

// ==============================
// Question Generators
// ==============================

const generators = {

    // --- HCF & LCM ---

    'hcf-lcm': [
        function hcfQuestion() {
            // Ensure the pair shares a common factor > 1
            const factor = pick([2, 3, 4, 5, 6, 7, 8, 9, 10, 12]);
            const a = factor * randInt(2, 15);
            const b = factor * randInt(2, 15);
            if (a === b) return hcfQuestion();
            const answer = gcd(a, b);
            const pfa = Object.entries(primeFactors(a)).map(([p,e]) => e>1 ? `${p}^{${e}}` : p).join(' \\times ');
            const pfb = Object.entries(primeFactors(b)).map(([p,e]) => e>1 ? `${p}^{${e}}` : p).join(' \\times ');
            return {
                type: 'HCF & LCM',
                text: `Find the HCF of <span class="math">${a}</span> and <span class="math">${b}</span>`,
                answer: String(answer),
                hint: `Write the prime factorisation of both numbers. The HCF is the product of the shared prime factors (using the lowest powers).`,
                explainLatex: [
                    `${a} = ${pfa.replace(/\^/g, '^').replace(/ x /g, ' \\times ')}`,
                    `${b} = ${pfb.replace(/\^/g, '^').replace(/ x /g, ' \\times ')}`,
                    `\\text{HCF} = ${answer}`
                ]
            };
        },
        function lcmQuestion() {
            const a = randInt(4, 30);
            const b = randInt(4, 30);
            const answer = lcm(a, b);
            const pfa = Object.entries(primeFactors(a)).map(([p,e]) => e>1 ? `${p}^{${e}}` : p).join(' \\times ');
            const pfb = Object.entries(primeFactors(b)).map(([p,e]) => e>1 ? `${p}^{${e}}` : p).join(' \\times ');
            return {
                type: 'HCF & LCM',
                text: `Find the LCM of <span class="math">${a}</span> and <span class="math">${b}</span>`,
                answer: String(answer),
                hint: `Write the prime factorisation of both numbers. The LCM is the product of all prime factors (using the highest powers).`,
                explainLatex: [
                    `${a} = ${pfa}`,
                    `${b} = ${pfb}`,
                    `\\text{LCM} = ${answer}`
                ]
            };
        },
        function primeFactorQuestion() {
            const n = pick([36, 48, 60, 72, 84, 90, 96, 100, 108, 120, 144, 150, 168, 180, 200, 210, 216, 240, 252, 270, 288, 300, 360, 420, 480, 504, 540, 600]);
            const factors = primeFactors(n);
            // Answer format: 2^3 x 3^2 etc
            const answer = Object.entries(factors)
                .sort((a, b) => a[0] - b[0])
                .map(([p, e]) => e > 1 ? `${p}^${e}` : p)
                .join(' x ');
            return {
                type: 'HCF & LCM',
                text: `Write <span class="math">${n}</span> as a product of prime factors.<br><small style="color:var(--text-muted)">Format: 2^3 x 3^2</small>`,
                answer: answer,
                accept: [
                    answer.replace(/ /g, ''),
                    answer.replace(/ x /g, '*'),
                    answer.replace(/ x /g, ' * ')
                ],
                explain: `Divide ${n} by primes starting from 2:<br>${answer}`
            };
        }
    ],

    // --- Fractions ---

    'fractions': [
        function addFractions() {
            const d1 = pick([2, 3, 4, 5, 6, 7, 8, 9, 10]);
            const d2 = pick([2, 3, 4, 5, 6, 7, 8, 9, 10].filter(x => x !== d1));
            const n1 = randInt(1, d1 - 1);
            const n2 = randInt(1, d2 - 1);
            const resNum = n1 * d2 + n2 * d1;
            const resDen = d1 * d2;
            const g = gcd(resNum, resDen);
            const ansNum = resNum / g;
            const ansDen = resDen / g;
            const answer = ansDen === 1 ? String(ansNum) : `${ansNum}/${ansDen}`;
            const cd = d1 * d2;
            return {
                type: 'Fractions',
                text: `Calculate ${frac(n1, d1)} ${op('+')} ${frac(n2, d2)}<br><small style="color:var(--text-muted)">Give your answer as a simplified fraction</small>`,
                answer: answer,
                explainLatex: [
                    `\\text{Common denominator: }${cd}`,
                    `\\frac{${n1}}{${d1}} = \\frac{${n1*d2}}{${cd}}, \\quad \\frac{${n2}}{${d2}} = \\frac{${n2*d1}}{${cd}}`,
                    `\\frac{${n1*d2}}{${cd}} + \\frac{${n2*d1}}{${cd}} = \\frac{${resNum}}{${resDen}}${g > 1 ? ` = \\frac{${ansNum}}{${ansDen}}` : ''}`
                ]
            };
        },
        function subtractFractions() {
            const d1 = pick([2, 3, 4, 5, 6, 7, 8, 9, 10]);
            const d2 = pick([2, 3, 4, 5, 6, 7, 8, 9, 10].filter(x => x !== d1));
            let n1 = randInt(1, d1 - 1);
            let n2 = randInt(1, d2 - 1);
            // Ensure positive result
            if (n1 / d1 < n2 / d2) { [n1, n2] = [n2, n1]; }
            if (n1 / d1 < n2 / d2) { const td = d1; d1 = d2; d2 = td; }
            const resNum = n1 * d2 - n2 * d1;
            const resDen = d1 * d2;
            if (resNum <= 0) return addFractions(); // fallback
            const g = gcd(resNum, resDen);
            const ansNum = resNum / g;
            const ansDen = resDen / g;
            const answer = ansDen === 1 ? String(ansNum) : `${ansNum}/${ansDen}`;
            return {
                type: 'Fractions',
                text: `Calculate ${frac(n1, d1)} ${op('−')} ${frac(n2, d2)}<br><small style="color:var(--text-muted)">Give your answer as a simplified fraction</small>`,
                answer: answer
            };
        },
        function multiplyFractions() {
            const d1 = pick([2, 3, 4, 5, 6, 7, 8]);
            const d2 = pick([2, 3, 4, 5, 6, 7, 8]);
            const n1 = randInt(1, d1 - 1);
            const n2 = randInt(1, d2 - 1);
            const resNum = n1 * n2;
            const resDen = d1 * d2;
            const g = gcd(resNum, resDen);
            const ansNum = resNum / g;
            const ansDen = resDen / g;
            const answer = ansDen === 1 ? String(ansNum) : `${ansNum}/${ansDen}`;
            return {
                type: 'Fractions',
                text: `Calculate ${frac(n1, d1)} ${op('×')} ${frac(n2, d2)}<br><small style="color:var(--text-muted)">Give your answer as a simplified fraction</small>`,
                answer: answer
            };
        },
        function divideFractions() {
            const d1 = pick([2, 3, 4, 5, 6, 7, 8]);
            const d2 = pick([2, 3, 4, 5, 6, 7, 8]);
            const n1 = randInt(1, d1 - 1);
            const n2 = randInt(1, d2 - 1);
            const resNum = n1 * d2;
            const resDen = d1 * n2;
            const g = gcd(resNum, resDen);
            const ansNum = resNum / g;
            const ansDen = resDen / g;
            const answer = ansDen === 1 ? String(ansNum) : `${ansNum}/${ansDen}`;
            return {
                type: 'Fractions',
                text: `Calculate ${frac(n1, d1)} ${op('÷')} ${frac(n2, d2)}<br><small style="color:var(--text-muted)">Give your answer as a simplified fraction</small>`,
                answer: answer
            };
        },
        function fractionOfAmount() {
            const d = pick([3, 4, 5, 6, 8, 10]);
            const n = randInt(1, d - 1);
            const g = gcd(n, d);
            const sn = n / g, sd = d / g;
            const amount = sd * randInt(5, 20);
            const answer = (sn / sd) * amount;
            return {
                type: 'Fractions',
                text: `Find ${frac(sn, sd)} of <span class="math">${amount}</span>`,
                answer: String(answer)
            };
        }
    ],

    // --- Percentages ---

    'percentages': [
        function percentageOfAmount() {
            const pct = pick([5, 10, 12, 15, 17.5, 20, 25, 30, 35, 40, 45, 60, 75, 80]);
            const amount = randInt(2, 50) * 10;
            const answer = round(pct / 100 * amount, 2);
            return {
                type: 'Percentages',
                text: `Find <span class="math">${pct}%</span> of <span class="math">${amount}</span>`,
                answer: String(answer)
            };
        },
        function percentageIncrease() {
            const pct = pick([5, 10, 12, 15, 20, 25, 30, 40, 50]);
            const amount = randInt(5, 100) * 10;
            const answer = round(amount * (1 + pct / 100), 2);
            return {
                type: 'Percentages',
                text: `Increase <span class="math">${amount}</span> by <span class="math">${pct}%</span>`,
                answer: String(answer)
            };
        },
        function percentageDecrease() {
            const pct = pick([5, 10, 12, 15, 20, 25, 30, 40]);
            const amount = randInt(5, 100) * 10;
            const answer = round(amount * (1 - pct / 100), 2);
            return {
                type: 'Percentages',
                text: `Decrease <span class="math">${amount}</span> by <span class="math">${pct}%</span>`,
                answer: String(answer)
            };
        },
        function reversePercentage() {
            const pct = pick([10, 15, 20, 25, 30, 40, 50]);
            const original = randInt(5, 50) * 10;
            const after = round(original * (1 + pct / 100), 2);
            return {
                type: 'Percentages',
                text: `After a <span class="math">${pct}%</span> increase, the price is <span class="math">&pound;${after}</span>. What was the original price?<br><small style="color:var(--text-muted)">Give your answer without the &pound; sign</small>`,
                answer: String(original)
            };
        },
        function percentageChange() {
            const original = randInt(10, 200);
            const change = randInt(-Math.floor(original * 0.6), Math.floor(original * 0.8));
            if (change === 0) return percentageChange();
            const newVal = original + change;
            const answer = round(Math.abs(change / original * 100), 1);
            const direction = change > 0 ? 'increase' : 'decrease';
            return {
                type: 'Percentages',
                text: `A value changes from <span class="math">${original}</span> to <span class="math">${newVal}</span>. Find the percentage ${direction}.<br><small style="color:var(--text-muted)">Give answer to 1 d.p.</small>`,
                answer: String(answer),
                accept: [String(answer) + '%', String(Math.round(answer))]
            };
        },
        function compoundInterest() {
            const principal = pick([100, 200, 500, 1000, 1500, 2000, 3000, 5000]);
            const rate = pick([2, 3, 4, 5, 6, 8, 10]);
            const years = pick([2, 3, 4, 5]);
            const answer = round(principal * Math.pow(1 + rate / 100, years), 2);
            return {
                type: 'Percentages',
                text: `&pound;${principal} is invested at <span class="math">${rate}%</span> compound interest per year for <span class="math">${years} years</span>. What is the total amount?<br><small style="color:var(--text-muted)">Round to 2 d.p., no &pound; sign</small>`,
                answer: String(answer)
            };
        }
    ],

    // --- Indices ---

    'indices': [
        function evaluateIndex() {
            const base = pick([2, 3, 4, 5, 6, 7, 10]);
            const exp = pick([2, 3, 4]);
            if (Math.pow(base, exp) > 10000) return evaluateIndex();
            const answer = Math.pow(base, exp);
            return {
                type: 'Indices',
                text: `Evaluate ${sup(base, exp)}`,
                answer: String(answer)
            };
        },
        function negativeIndex() {
            const base = pick([2, 3, 4, 5, 10]);
            const exp = pick([1, 2, 3]);
            const den = Math.pow(base, exp);
            return {
                type: 'Indices',
                text: `Evaluate ${sup(base, '&minus;' + exp)}<br><small style="color:var(--text-muted)">Give your answer as a fraction</small>`,
                answer: `1/${den}`,
                accept: [String(round(1 / den, 6))]
            };
        },
        function fractionalIndex() {
            const squares = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144];
            const n = pick(squares);
            const root = Math.sqrt(n);
            return {
                type: 'Indices',
                text: `Evaluate ${sup(n, '&frac12;')}`,
                answer: String(root)
            };
        },
        function fractionalIndexCube() {
            const cubes = [[8, 2], [27, 3], [64, 4], [125, 5], [216, 6], [1000, 10]];
            const [n, root] = pick(cubes);
            return {
                type: 'Indices',
                text: `Evaluate ${sup(n, '&#8531;')}`,
                answer: String(root)
            };
        },
        function indexLawMultiply() {
            const base = pick(['a', 'b', 'x', 'y', 'n']);
            const e1 = randInt(2, 8);
            const e2 = randInt(2, 8);
            return {
                type: 'Indices',
                text: `Simplify ${sup(base, e1)} ${op('&times;')} ${sup(base, e2)}`,
                answer: `${base}^${e1 + e2}`
            };
        },
        function indexLawDivide() {
            const base = pick(['a', 'b', 'x', 'y', 'n']);
            const e1 = randInt(5, 12);
            const e2 = randInt(2, e1 - 1);
            return {
                type: 'Indices',
                text: `Simplify ${sup(base, e1)} ${op('&div;')} ${sup(base, e2)}`,
                answer: `${base}^${e1 - e2}`
            };
        },
        function indexLawPower() {
            const base = pick(['a', 'b', 'x', 'y']);
            const e1 = randInt(2, 5);
            const e2 = randInt(2, 4);
            return {
                type: 'Indices',
                text: `Simplify (${sup(base, e1)})<sup>${e2}</sup>`,
                answer: `${base}^${e1 * e2}`
            };
        }
    ],

    // --- Surds ---

    'surds': [
        function simplifySurd() {
            const pairs = [
                [8, 2, 2], [12, 2, 3], [18, 3, 2],
                [20, 2, 5], [24, 2, 6], [27, 3, 3],
                [28, 2, 7], [32, 4, 2], [45, 3, 5],
                [48, 4, 3], [50, 5, 2], [54, 3, 6],
                [63, 3, 7], [72, 6, 2], [75, 5, 3],
                [80, 4, 5], [98, 7, 2], [125, 5, 5],
                [128, 8, 2], [147, 7, 3], [200, 10, 2]
            ];
            const [n, coeff, rad] = pick(pairs);
            const answer = `${coeff}sqrt(${rad})`;
            return {
                type: 'Surds',
                text: `Simplify ${sqrt(n)}`,
                answer: answer,
                accept: [
                    `${coeff} sqrt(${rad})`,
                    `${coeff}xsqrt(${rad})`,
                    `${coeff} x sqrt(${rad})`
                ]
            };
        },
        function multiplySurds() {
            const a = pick([2, 3, 5, 6, 7]);
            const b = pick([2, 3, 5, 6, 7]);
            const product = a * b;
            const sqrtProduct = Math.sqrt(product);
            if (Number.isInteger(sqrtProduct)) {
                return {
                    type: 'Surds',
                    text: `Simplify ${sqrt(a)} ${op('&times;')} ${sqrt(b)}`,
                    answer: String(sqrtProduct)
                };
            }
            // Check if result can be simplified (e.g. sqrt(12) = 2sqrt(3))
            let simplified = null;
            for (let i = Math.floor(Math.sqrt(product)); i >= 2; i--) {
                if (product % (i * i) === 0) {
                    const rem = product / (i * i);
                    simplified = `${i}sqrt(${rem})`;
                    break;
                }
            }
            const answer = `sqrt(${product})`;
            const accept = simplified
                ? [simplified, `${simplified.replace('sqrt', ' sqrt')}`, `${simplified.replace('sqrt', 'xsqrt')}`]
                : [];
            return {
                type: 'Surds',
                text: `Simplify ${sqrt(a)} ${op('&times;')} ${sqrt(b)}`,
                answer: simplified || answer,
                accept: simplified ? [answer, ...accept] : [answer]
            };
        },
        function rationaliseDenominator() {
            const a = randInt(1, 6);
            const d = pick([2, 3, 5, 6, 7]);
            const g = gcd(a, d);
            const numCoeff = a / g;
            const den = d / g;
            let answer, accept = [];
            if (den === 1) {
                answer = numCoeff === 1 ? `sqrt(${d})` : `${numCoeff}sqrt(${d})`;
                if (numCoeff > 1) accept.push(`${numCoeff} sqrt(${d})`, `${numCoeff}xsqrt(${d})`);
            } else {
                answer = numCoeff === 1 ? `sqrt(${d})/${den}` : `${numCoeff}sqrt(${d})/${den}`;
                // Accept fraction form too
                if (numCoeff === 1) {
                    accept.push(`sqrt(${d})/${den}`);
                } else {
                    accept.push(`${numCoeff} sqrt(${d})/${den}`, `${numCoeff}xsqrt(${d})/${den}`);
                }
            }
            return {
                type: 'Surds',
                text: `Rationalise the denominator: ${frac(a, `&radic;<span style="text-decoration:overline">${d}</span>`)}`,
                answer: answer,
                accept: accept
            };
        }
    ],

    // --- Standard Form ---

    'standard-form': [
        function toStandardForm() {
            const isLarge = Math.random() > 0.4;
            let n, answer;
            if (isLarge) {
                const power = randInt(3, 8);
                const sig = round(randInt(11, 99) / 10, 1);
                n = sig * Math.pow(10, power);
                answer = `${sig} x 10^${power}`;
            } else {
                const power = randInt(2, 6);
                const sig = round(randInt(11, 99) / 10, 1);
                n = sig * Math.pow(10, -power);
                answer = `${sig} x 10^-${power}`;
            }
            const display = isLarge ? n.toLocaleString('en-GB') : n.toFixed(Math.max(0, Math.ceil(-Math.log10(n)) + 1));
            return {
                type: 'Standard Form',
                text: `Write <span class="math">${display}</span> in standard form.`,
                answer: answer,
                accept: [answer.replace(/ /g, ''), answer.replace(/ x /g, ' * ')]
            };
        },
        function fromStandardForm() {
            const isLarge = Math.random() > 0.4;
            const sig = round(randInt(11, 99) / 10, 1);
            const power = isLarge ? randInt(2, 6) : randInt(2, 5);
            const val = sig * Math.pow(10, isLarge ? power : -power);
            let answer;
            if (isLarge) {
                answer = String(val);
            } else {
                answer = val.toFixed(Math.max(0, power + 1));
                if (answer.includes('.')) {
                    answer = answer.replace(/0+$/, '').replace(/\.$/, '');
                }
            }
            return {
                type: 'Standard Form',
                text: `Write ${sf(sig, isLarge ? power : -power)} as an ordinary number.`,
                answer: answer
            };
        },
        function standardFormCalc() {
            const sig1 = round(randInt(11, 49) / 10, 1);
            const sig2 = round(randInt(11, 49) / 10, 1);
            const p1 = randInt(3, 7);
            const p2 = randInt(3, 7);
            const product = sig1 * sig2;
            const totalPower = p1 + p2;
            let finalSig = product;
            let finalPow = totalPower;
            while (finalSig >= 10) { finalSig /= 10; finalPow++; }
            finalSig = round(finalSig, 2);
            const sigStr = String(finalSig).replace(/\.?0+$/, '') || String(finalSig);
            return {
                type: 'Standard Form',
                text: `Calculate (${sf(sig1, p1)}) ${op('&times;')} (${sf(sig2, p2)})<br><small style="color:var(--text-muted)">Give answer in standard form</small>`,
                answer: `${sigStr} x 10^${finalPow}`,
                accept: [`${sigStr} x 10^${finalPow}`.replace(/ /g, ''), `${sigStr}x10^${finalPow}`]
            };
        }
    ],

    // --- Bounds ---

    'bounds': [
        function upperLowerBound() {
            const isLength = Math.random() > 0.5;
            let val, precision, unit;
            if (isLength) {
                val = randInt(10, 200);
                precision = pick([1, 5, 10]);
                unit = pick(['cm', 'm', 'mm']);
            } else {
                val = randInt(10, 100) * 10;
                precision = pick([10, 50, 100]);
                unit = pick(['g', 'kg', 'ml']);
            }
            // Round val to nearest precision
            val = Math.round(val / precision) * precision;
            const lower = val - precision / 2;
            const upper = val + precision / 2;
            const askUpper = Math.random() > 0.5;
            return {
                type: 'Bounds',
                text: `A measurement is <span class="math">${val} ${unit}</span>, rounded to the nearest <span class="math">${precision} ${unit}</span>. What is the ${askUpper ? 'upper' : 'lower'} bound?`,
                answer: String(askUpper ? upper : lower),
                accept: [`${askUpper ? upper : lower} ${unit}`, `${askUpper ? upper : lower}${unit}`]
            };
        },
        function boundsCalculation() {
            const l = randInt(5, 20);
            const w = randInt(3, 15);
            const precision = 1;
            const lLower = l - 0.5, lUpper = l + 0.5;
            const wLower = w - 0.5, wUpper = w + 0.5;
            const askMax = Math.random() > 0.5;
            const answer = askMax
                ? round(lUpper * wUpper, 2)
                : round(lLower * wLower, 2);
            return {
                type: 'Bounds',
                text: `A rectangle is <span class="math">${l} cm</span> by <span class="math">${w} cm</span>, each to the nearest cm. Find the ${askMax ? 'maximum' : 'minimum'} area.<br><small style="color:var(--text-muted)">Give answer in cm&sup2;</small>`,
                answer: String(answer),
                accept: [answer + ' cm2', answer + 'cm2']
            };
        }
    ]
};

// Default hints per topic
const defaultHints = {
    'HCF & LCM': 'Find the prime factorisation of each number. HCF = product of shared primes (lowest powers). LCM = product of all primes (highest powers).',
    'Fractions': 'To add/subtract: find a common denominator. To multiply: multiply tops and bottoms. To divide: flip the second fraction and multiply. Always simplify.',
    'Percentages': 'To find x%: multiply by x/100. To increase by x%: multiply by (1 + x/100). To reverse: divide by the multiplier.',
    'Indices': 'Multiply: add powers. Divide: subtract powers. Power of a power: multiply. Negative power: reciprocal. Fractional power: root.',
    'Surds': 'To simplify: find the largest square factor. To rationalise a/sqrt(b): multiply top and bottom by sqrt(b).',
    'Standard Form': 'A number in standard form is a x 10^n where 1 ≤ a < 10. Multiply: multiply the a values and add the powers.',
    'Bounds': 'The bound is half the precision either side. Lower = value - half. Upper = value + half. For max area use upper bounds, for min use lower.'
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
        saveActivityStats('number', state, isCorrect);
    }

    waitingForNext = true;
    lastAnswerTime = Date.now();
}

function updateScore() {
    els.scoreCorrect.textContent = state.correct;
    els.scoreTotal.textContent = state.total;
    // Update accuracy in streak label
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

// P56 pattern: bind after MathLive upgrades the element


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
    // Restore persisted stats
    if (typeof loadActivityStats === 'function') {
        loadActivityStats('number', state);
        updateScore();
    }
    updateStreak(null);
    showQuestion();
}

init();
