window.CURRENT_LESSON = {
    title: "Factor & Remainder Theorems",
    subtitle: "Testing factors and finding remainders of polynomials",
    screens: [
        // --- CONCEPT 1: Introduction ---
        {
            type: 'concept',
            title: 'Why Factor & Remainder Theorems?',
            content: `
                <p>When working with polynomials, we often need to:</p>
                <ul>
                    <li>Check whether a given expression is a factor</li>
                    <li>Find the remainder when dividing one polynomial by another</li>
                    <li>Factorise cubics and higher-degree polynomials completely</li>
                </ul>
                <p>The <strong>Factor Theorem</strong> and <strong>Remainder Theorem</strong> give us efficient shortcuts - no long division required for these tasks.</p>
            `
        },
        // --- CONCEPT 2: Remainder Theorem ---
        {
            type: 'concept',
            title: 'The Remainder Theorem',
            content: `
                <p>When a polynomial \\(f(x)\\) is divided by \\((x - a)\\), the remainder is \\(f(a)\\).</p>
                <p>In other words:</p>
                \\[f(x) = (x - a) \\cdot Q(x) + f(a)\\]
                <p>where \\(Q(x)\\) is the quotient.</p>
                <p>To find the remainder, simply <strong>substitute</strong> \\(x = a\\) into \\(f(x)\\).</p>
                <p><strong>Note:</strong> When dividing by \\((x + a)\\), substitute \\(x = -a\\) since \\((x + a) = (x - (-a))\\).</p>
            `
        },
        // --- CONCEPT 3: Factor Theorem ---
        {
            type: 'concept',
            title: 'The Factor Theorem',
            content: `
                <p>The Factor Theorem is a special case of the Remainder Theorem:</p>
                <p>If \\(f(a) = 0\\), then \\((x - a)\\) is a factor of \\(f(x)\\).</p>
                <p>Conversely, if \\((x - a)\\) is a factor of \\(f(x)\\), then \\(f(a) = 0\\).</p>
                \\[f(a) = 0 \\iff (x - a) \\text{ is a factor of } f(x)\\]
                <p>This makes sense: if the remainder is zero, the division is exact, so \\((x - a)\\) divides evenly into \\(f(x)\\).</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px;width:100%"><defs><marker id="frt-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#e0e0e0"/></marker></defs><line x1="30" y1="130" x2="300" y2="130" stroke="#444" stroke-width="0.5" marker-end="url(#frt-arr)"/><line x1="40" y1="190" x2="40" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#frt-arr)"/><text x="305" y="134" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">x</text><text x="44" y="14" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">y</text><path d="M55,170 C80,160 95,80 120,50 C140,25 155,30 170,130 C180,190 200,185 220,130 C240,75 260,20 290,10" stroke="#00e5c7" stroke-width="2.5" fill="none"/><circle cx="80" cy="130" r="5" fill="#ff6b6b" stroke="#ff6b6b" stroke-width="1.5"/><circle cx="170" cy="130" r="5" fill="#ff6b6b" stroke="#ff6b6b" stroke-width="1.5"/><circle cx="250" cy="130" r="5" fill="#ff6b6b" stroke="#ff6b6b" stroke-width="1.5"/><text x="72" y="152" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">a</text><text x="162" y="152" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">b</text><text x="243" y="152" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">c</text><text x="55" y="188" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">f(a)=0 so (x-a) is a factor</text><text x="130" y="18" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#54a0ff">y = f(x)</text></svg></div>
            `
        },
        // --- CONCEPT 4: Evaluating f(a) ---
        {
            type: 'concept',
            title: 'Evaluating f(a) by Substitution',
            content: `
                <p>To apply either theorem, you substitute the value into the polynomial carefully.</p>
                <p>For example, if \\(f(x) = 2x^3 - 3x^2 + x - 5\\), then:</p>
                \\[f(2) = 2(2)^3 - 3(2)^2 + (2) - 5 = 16 - 12 + 2 - 5 = 1\\]
                <p>Key tips:</p>
                <ul>
                    <li>Be careful with <strong>negative numbers</strong> - remember \\((-2)^3 = -8\\) but \\((-2)^2 = 4\\)</li>
                    <li>Work term by term to avoid sign errors</li>
                    <li>If dividing by \\((x + 3)\\), substitute \\(x = -3\\)</li>
                </ul>
            `
        },
        // --- CONCEPT 5: Using Factor Theorem to find factors ---
        {
            type: 'concept',
            title: 'Finding Factors of Cubics',
            content: `
                <p>To find a linear factor of a cubic \\(f(x) = ax^3 + bx^2 + cx + d\\):</p>
                <ol>
                    <li>List the factors of the constant term \\(d\\): \\(\\pm 1, \\pm 2, \\pm 3, \\ldots\\)</li>
                    <li>Test each by substituting into \\(f(x)\\)</li>
                    <li>When you find \\(f(a) = 0\\), then \\((x - a)\\) is a factor</li>
                </ol>
                <p>For example, if \\(f(x) = x^3 - 6x^2 + 11x - 6\\), try \\(x = 1, -1, 2, -2, 3, -3, 6, -6\\).</p>
                <p><strong>Tip:</strong> Always try small values first - \\(\\pm 1, \\pm 2, \\pm 3\\) cover most exam questions.</p>
            `
        },
        // --- EXAMPLE 1: Show (x-2) is a factor ---
        {
            type: 'example',
            title: 'Show (x - 2) is a factor',
            problem: 'Show that \\((x - 2)\\) is a factor of \\(f(x) = x^3 - 3x^2 - 4x + 12\\).',
            steps: [
                { text: 'By the Factor Theorem, \\((x - 2)\\) is a factor if \\(f(2) = 0\\).' },
                { text: '\\(f(2) = (2)^3 - 3(2)^2 - 4(2) + 12\\)' },
                { text: '\\(= 8 - 12 - 8 + 12\\)' },
                { text: '\\(= 0\\)' },
                { text: 'Since \\(f(2) = 0\\), by the Factor Theorem, \\((x - 2)\\) is a factor of \\(f(x)\\). \\(\\checkmark\\)' }
            ]
        },
        // --- PRACTICE 1: Evaluate f(a) ---
        {
            type: 'practice',
            generate: function() {
                var a = [1, -1, 2, -2, 3, -3][Math.floor(Math.random() * 6)];
                var b = Math.floor(Math.random() * 7) - 3; // -3 to 3
                var c = Math.floor(Math.random() * 11) - 5; // -5 to 5
                var d = Math.floor(Math.random() * 11) - 5;
                // f(x) = x^3 + bx^2 + cx + d
                var result = a * a * a + b * a * a + c * a + d;
                var bStr = (b >= 0 ? '+' + b : '' + b);
                var cStr = (c >= 0 ? '+' + c : '' + c);
                var dStr = (d >= 0 ? '+' + d : '' + d);
                return {
                    type: 'short',
                    latex: 'Given \\(f(x) = x^3 ' + bStr + 'x^2 ' + cStr + 'x ' + dStr + '\\), find \\(f(' + a + ')\\).',
                    answer: '' + result,
                    explain: 'Substitute \\(x = ' + a + '\\): \\(f(' + a + ') = (' + a + ')^3 ' + bStr + '(' + a + ')^2 ' + cStr + '(' + a + ') ' + dStr + ' = ' + result + '\\).'
                };
            }
        },
        // --- EXAMPLE 2: Find remainder ---
        {
            type: 'example',
            title: 'Finding a Remainder',
            problem: 'Find the remainder when \\(f(x) = x^3 + 2x^2 - x + 3\\) is divided by \\((x + 1)\\).',
            steps: [
                { text: 'Dividing by \\((x + 1) = (x - (-1))\\), so substitute \\(x = -1\\).' },
                { text: '\\(f(-1) = (-1)^3 + 2(-1)^2 - (-1) + 3\\)' },
                { text: '\\(= -1 + 2 + 1 + 3\\)' },
                { text: '\\(= 5\\)' },
                { text: 'The remainder is \\(5\\).' }
            ]
        },
        // --- PRACTICE 2: Find remainder ---
        {
            type: 'practice',
            generate: function() {
                var a = [1, -1, 2, -2, 3][Math.floor(Math.random() * 5)];
                var p = Math.floor(Math.random() * 5) - 2;
                var q = Math.floor(Math.random() * 7) - 3;
                var r = Math.floor(Math.random() * 7) - 3;
                var remainder = a * a * a + p * a * a + q * a + r;
                var pStr = (p >= 0 ? '+' + p : '' + p);
                var qStr = (q >= 0 ? '+' + q : '' + q);
                var rStr = (r >= 0 ? '+' + r : '' + r);
                var divisor = a > 0 ? '(x - ' + a + ')' : '(x + ' + (-a) + ')';
                return {
                    type: 'short',
                    latex: 'Find the remainder when \\(x^3 ' + pStr + 'x^2 ' + qStr + 'x ' + rStr + '\\) is divided by \\(' + divisor + '\\).',
                    answer: '' + remainder,
                    explain: 'By the Remainder Theorem, substitute \\(x = ' + a + '\\): remainder \\(= (' + a + ')^3 ' + pStr + '(' + a + ')^2 ' + qStr + '(' + a + ') ' + rStr + ' = ' + remainder + '\\).'
                };
            }
        },
        // --- PRACTICE 3: Is it a factor? ---
        {
            type: 'practice',
            generate: function() {
                // Generate a cubic that sometimes has (x-a) as a factor
                var a = [1, -1, 2, -2, 3][Math.floor(Math.random() * 5)];
                var isFactor = Math.random() < 0.5;
                var b, c;
                if (isFactor) {
                    // f(x) = (x - a)(x^2 + bx + c)
                    b = Math.floor(Math.random() * 5) - 2;
                    c = Math.floor(Math.random() * 5) - 2;
                    // expand: x^3 + bx^2 + cx - ax^2 - abx - ac = x^3 + (b-a)x^2 + (c-ab)x - ac
                    var p = b - a;
                    var q = c - a * b;
                    var r = -a * c;
                    var pStr = (p >= 0 ? '+ ' + p : '- ' + (-p));
                    var qStr = (q >= 0 ? '+ ' + q : '- ' + (-q));
                    var rStr = (r >= 0 ? '+ ' + r : '- ' + (-r));
                    var divisor = a > 0 ? '(x - ' + a + ')' : '(x + ' + (-a) + ')';
                    return {
                        type: 'mc',
                        latex: 'Is \\(' + divisor + '\\) a factor of \\(x^3 ' + pStr + 'x^2 ' + qStr + 'x ' + rStr + '\\)?',
                        options: ['Yes', 'No'],
                        correctIdx: 0,
                        explain: 'Substituting \\(x = ' + a + '\\) gives \\(f(' + a + ') = 0\\), so yes, \\(' + divisor + '\\) is a factor.'
                    };
                } else {
                    var p2 = Math.floor(Math.random() * 7) - 3;
                    var q2 = Math.floor(Math.random() * 7) - 3;
                    var r2 = Math.floor(Math.random() * 7) - 3;
                    var val = a * a * a + p2 * a * a + q2 * a + r2;
                    if (val === 0) r2 += 1; // ensure not a factor
                    var newVal = a * a * a + p2 * a * a + q2 * a + r2;
                    var p2Str = (p2 >= 0 ? '+ ' + p2 : '- ' + (-p2));
                    var q2Str = (q2 >= 0 ? '+ ' + q2 : '- ' + (-q2));
                    var r2Str = (r2 >= 0 ? '+ ' + r2 : '- ' + (-r2));
                    var divisor2 = a > 0 ? '(x - ' + a + ')' : '(x + ' + (-a) + ')';
                    return {
                        type: 'mc',
                        latex: 'Is \\(' + divisor2 + '\\) a factor of \\(x^3 ' + p2Str + 'x^2 ' + q2Str + 'x ' + r2Str + '\\)?',
                        options: ['Yes', 'No'],
                        correctIdx: 1,
                        explain: 'Substituting \\(x = ' + a + '\\) gives \\(f(' + a + ') = ' + newVal + ' \\neq 0\\), so no, it is not a factor.'
                    };
                }
            }
        },
        // --- CONCEPT 6: Complete factorisation ---
        {
            type: 'concept',
            title: 'Complete Factorisation of Cubics',
            content: `
                <p>Once you find one factor \\((x - a)\\) using the Factor Theorem, you can find the remaining quadratic factor:</p>
                <ol>
                    <li>Use the Factor Theorem to find \\((x - a)\\) where \\(f(a) = 0\\)</li>
                    <li>Divide \\(f(x)\\) by \\((x - a)\\) to get a quadratic \\(Q(x)\\)</li>
                    <li>Factorise \\(Q(x)\\) (if possible) to get the complete factorisation</li>
                </ol>
                <p>You can divide using long division, inspection, or comparing coefficients.</p>
            `
        },
        // --- EXAMPLE 3: Factorise completely ---
        {
            type: 'example',
            title: 'Complete Factorisation',
            problem: 'Factorise \\(f(x) = x^3 - 6x^2 + 11x - 6\\) completely.',
            steps: [
                { text: 'Try \\(x = 1\\): \\(f(1) = 1 - 6 + 11 - 6 = 0\\). So \\((x - 1)\\) is a factor.' },
                { text: 'Divide: \\(x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6)\\)' },
                { text: 'Factorise the quadratic: \\(x^2 - 5x + 6 = (x - 2)(x - 3)\\)' },
                { text: 'Therefore: \\(f(x) = (x - 1)(x - 2)(x - 3)\\)' }
            ]
        },
        // --- PRACTICE 4: Factorise a cubic ---
        {
            type: 'practice',
            generate: function() {
                // Build (x - r1)(x - r2)(x - r3) with small integer roots
                var roots = [
                    [1, 2, 3], [1, 2, 4], [1, 3, 4], [1, 2, -1], [1, -1, 2],
                    [-1, 2, 3], [1, -2, 3], [-1, -2, 3], [1, 2, 5], [-1, 2, 4]
                ];
                var r = roots[Math.floor(Math.random() * roots.length)];
                var r1 = r[0], r2 = r[1], r3 = r[2];
                // x^3 - (r1+r2+r3)x^2 + (r1r2+r1r3+r2r3)x - r1r2r3
                var a = -(r1 + r2 + r3);
                var b = r1 * r2 + r1 * r3 + r2 * r3;
                var c = -(r1 * r2 * r3);
                var aStr = (a >= 0 ? '+ ' + a : '- ' + (-a));
                var bStr = (b >= 0 ? '+ ' + b : '- ' + (-b));
                var cStr = (c >= 0 ? '+ ' + c : '- ' + (-c));
                // Sort roots for consistent answer
                var sorted = [r1, r2, r3].sort(function(x, y) { return x - y; });
                var ans = sorted.map(function(v) { return v >= 0 ? '(x - ' + v + ')' : '(x + ' + (-v) + ')'; }).join('');
                return {
                    type: 'short',
                    latex: 'Factorise \\(x^3 ' + aStr + 'x^2 ' + bStr + 'x ' + cStr + '\\) completely.',
                    answer: ans,
                    explain: 'Testing values: \\(f(' + sorted[0] + ') = 0\\), so \\(' + (sorted[0] >= 0 ? '(x - ' + sorted[0] + ')' : '(x + ' + (-sorted[0]) + ')') + '\\) is a factor. Dividing and factorising the quadratic gives \\(' + ans + '\\).'
                };
            }
        },
        // --- CONCEPT 7: Remainder with (ax - b) ---
        {
            type: 'concept',
            title: 'Remainder When Dividing by (ax - b)',
            content: `
                <p>The Remainder Theorem extends to divisors of the form \\((ax - b)\\):</p>
                <p>The remainder when \\(f(x)\\) is divided by \\((ax - b)\\) is \\(f\\!\\left(\\dfrac{b}{a}\\right)\\).</p>
                <p>For example, to find the remainder when dividing by \\((2x - 1)\\), substitute \\(x = \\frac{1}{2}\\).</p>
                <p>This follows because \\((ax - b) = 0\\) when \\(x = \\frac{b}{a}\\).</p>
            `
        },
        // --- PRACTICE 5: Remainder with (2x - 1) etc. ---
        {
            type: 'practice',
            generate: function() {
                // Divide by (2x - 1), so sub x = 1/2
                var a = Math.floor(Math.random() * 5) + 1; // 1 to 5
                var b = Math.floor(Math.random() * 7) - 3;
                var c = Math.floor(Math.random() * 7) - 3;
                // f(x) = 4x^3 + ax^2 + bx + c, divide by (2x-1), sub x=1/2
                var val = 4 * (1/8) + a * (1/4) + b * (1/2) + c;
                // = 0.5 + a/4 + b/2 + c
                // Multiply by 4 to get integer: 2 + a + 2b + 4c ... not always integer
                // Use simpler: f(x) = 8x^3 + ax^2 + bx + c
                val = 8 * (1/8) + a * (1/4) + b * (1/2) + c;
                val = 1 + a/4 + b/2 + c;
                // Make it nice: use even a, even b
                a = 2 * (Math.floor(Math.random() * 4) - 1); // -2, 0, 2, 4
                b = 2 * (Math.floor(Math.random() * 4) - 1);
                c = Math.floor(Math.random() * 5) - 2;
                val = 1 + a/4 + b/2 + c;
                var aStr = (a >= 0 ? '+ ' + a : '- ' + (-a));
                var bStr = (b >= 0 ? '+ ' + b : '- ' + (-b));
                var cStr = (c >= 0 ? '+ ' + c : '- ' + (-c));
                // Express as fraction or integer
                var num = 4 + a + 2*b + 4*c; // multiply val by 4
                var ansStr;
                if (num % 4 === 0) {
                    ansStr = '' + (num / 4);
                } else if (num % 2 === 0) {
                    ansStr = (num / 2) + '/2';
                } else {
                    ansStr = num + '/4';
                }
                return {
                    type: 'short',
                    latex: 'Find the remainder when \\(8x^3 ' + aStr + 'x^2 ' + bStr + 'x ' + cStr + '\\) is divided by \\((2x - 1)\\).',
                    answer: ansStr,
                    explain: 'Substitute \\(x = \\frac{1}{2}\\): remainder \\(= 8\\left(\\frac{1}{8}\\right) ' + aStr + '\\left(\\frac{1}{4}\\right) ' + bStr + '\\left(\\frac{1}{2}\\right) ' + cStr + ' = ' + ansStr + '\\).'
                };
            }
        },
        // --- PRACTICE 6: Mixed factor/remainder ---
        {
            type: 'practice',
            generate: function() {
                var type = Math.floor(Math.random() * 2);
                if (type === 0) {
                    // Find value of k so (x-a) is a factor
                    var a = [1, -1, 2, -2][Math.floor(Math.random() * 4)];
                    var p = Math.floor(Math.random() * 5) - 2;
                    var q = Math.floor(Math.random() * 5) - 2;
                    // f(x) = x^3 + px^2 + qx + k, f(a)=0 => k = -(a^3 + pa^2 + qa)
                    var k = -(a * a * a + p * a * a + q * a);
                    var pStr = (p >= 0 ? '+ ' + p : '- ' + (-p));
                    var qStr = (q >= 0 ? '+ ' + q : '- ' + (-q));
                    var divisor = a > 0 ? '(x - ' + a + ')' : '(x + ' + (-a) + ')';
                    return {
                        type: 'short',
                        latex: 'Find the value of \\(k\\) given that \\(' + divisor + '\\) is a factor of \\(x^3 ' + pStr + 'x^2 ' + qStr + 'x + k\\).',
                        answer: '' + k,
                        explain: 'If \\(' + divisor + '\\) is a factor, then \\(f(' + a + ') = 0\\). Substituting: \\((' + a + ')^3 ' + pStr + '(' + a + ')^2 ' + qStr + '(' + a + ') + k = 0\\), so \\(k = ' + k + '\\).'
                    };
                } else {
                    // Find remainder when f(x) divided by (x-a)
                    var a2 = [1, -1, 2, 3][Math.floor(Math.random() * 4)];
                    var m = Math.floor(Math.random() * 3) + 1;
                    var n = Math.floor(Math.random() * 7) - 3;
                    var o = Math.floor(Math.random() * 7) - 3;
                    var rem = m * a2 * a2 * a2 + n * a2 * a2 + o * a2 + 1;
                    var mStr = m === 1 ? '' : '' + m;
                    var nStr = (n >= 0 ? '+ ' + n : '- ' + (-n));
                    var oStr = (o >= 0 ? '+ ' + o : '- ' + (-o));
                    var divisor2 = a2 > 0 ? '(x - ' + a2 + ')' : '(x + ' + (-a2) + ')';
                    return {
                        type: 'short',
                        latex: 'Find the remainder when \\(' + mStr + 'x^3 ' + nStr + 'x^2 ' + oStr + 'x + 1\\) is divided by \\(' + divisor2 + '\\).',
                        answer: '' + rem,
                        explain: 'Substitute \\(x = ' + a2 + '\\): remainder \\(= ' + m + '(' + a2 + ')^3 ' + nStr + '(' + a2 + ')^2 ' + oStr + '(' + a2 + ') + 1 = ' + rem + '\\).'
                    };
                }
            }
        },
        // --- SUMMARY ---
        {
            type: 'summary',
            title: 'Factor & Remainder Theorems - Summary',
            content: '<p>You can now use the Factor and Remainder Theorems to analyse polynomials efficiently.</p>',
            points: [
                'Remainder Theorem: the remainder when \\(f(x)\\) is divided by \\((x - a)\\) is \\(f(a)\\)',
                'Factor Theorem: \\((x - a)\\) is a factor of \\(f(x)\\) if and only if \\(f(a) = 0\\)',
                'To factorise a cubic: find one factor by testing, divide, then factorise the quadratic',
                'For divisors \\((ax - b)\\), substitute \\(x = \\frac{b}{a}\\)',
                'Always try small integer values first: \\(\\pm 1, \\pm 2, \\pm 3\\)'
            ]
        }
    ]
};
