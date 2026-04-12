window.CURRENT_LESSON = {
    title: "Introduction to Integration",
    subtitle: "Reversing differentiation to find areas",
    screens: [
        // Screen 1 - Concept: What is Integration?
        {
            type: 'concept',
            title: 'What is Integration?',
            content: `
                <p>Integration is the <strong>reverse process of differentiation</strong>. If differentiation finds the gradient, integration "undoes" this to recover the original function.</p>
                <p>We sometimes call integration <strong>anti-differentiation</strong>.</p>
                <div class="lesson-box">
                    If \\(\\frac{dy}{dx} = f(x)\\), then integrating \\(f(x)\\) gives us back \\(y\\).
                    <br><br>
                    For example: if \\(\\frac{dy}{dx} = 2x\\), then \\(y = x^2 + C\\).
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="30" width="90" height="40" rx="6" fill="none" stroke="#00e5c7" stroke-width="2"/><text x="75" y="55" font-family="'Space Grotesk',sans-serif" font-size="14" fill="#00e5c7">f(x)</text><rect x="190" y="30" width="90" height="40" rx="6" fill="none" stroke="#54a0ff" stroke-width="2"/><text x="205" y="55" font-family="'Space Grotesk',sans-serif" font-size="14" fill="#54a0ff">F(x)</text><line x1="150" y1="42" x2="185" y2="42" stroke="#feca57" stroke-width="2" marker-end="url(#int1-arrow)"/><line x1="185" y1="58" x2="150" y2="58" stroke="#ff6b6b" stroke-width="2" marker-end="url(#int1-arrow2)"/><defs><marker id="int1-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#feca57"/></marker><marker id="int1-arrow2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#ff6b6b"/></marker></defs><text x="145" y="35" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">differentiate</text><text x="148" y="78" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#ff6b6b">integrate</text><text x="60" y="120" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">derivative</text><text x="195" y="120" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">original function</text></svg></div>
                <p>The symbol for integration is \\(\\int\\). We write \\(\\int f(x)\\, dx\\) to mean "integrate \\(f(x)\\) with respect to \\(x\\)".</p>
            `
        },
        // Screen 2 - Concept: The Power Rule for Integration
        {
            type: 'concept',
            title: 'Integrating \\(x^n\\)',
            content: `
                <p>Since differentiation brings the power down and reduces it by 1, integration does the opposite:</p>
                <div class="lesson-box">
                    \\[\\int x^n\\, dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)\\]
                    <br>
                    <strong>Increase</strong> the power by 1, then <strong>divide</strong> by the new power.
                </div>
                <p>For example:</p>
                <ul>
                    <li>\\(\\int x^3\\, dx = \\frac{x^4}{4} + C\\)</li>
                    <li>\\(\\int x^5\\, dx = \\frac{x^6}{6} + C\\)</li>
                </ul>
                <div class="lesson-box warning">
                    This rule does <strong>not</strong> work when \\(n = -1\\), because we would be dividing by zero. The integral of \\(x^{-1} = \\frac{1}{x}\\) is \\(\\ln|x| + C\\), which is covered later.
                </div>
            `
        },
        // Screen 3 - Concept: The Constant of Integration
        {
            type: 'concept',
            title: 'The Constant of Integration \\(C\\)',
            content: `
                <p>When we differentiate, any constant disappears (it becomes 0). This means when we integrate, we could be missing an unknown constant.</p>
                <p>Consider: \\(\\frac{d}{dx}(x^2) = 2x\\), but also \\(\\frac{d}{dx}(x^2 + 5) = 2x\\) and \\(\\frac{d}{dx}(x^2 - 3) = 2x\\).</p>
                <p>All three functions have the same derivative!</p>
                <div class="lesson-box">
                    When integrating, we <strong>always</strong> add \\(+ C\\) (the constant of integration) to account for any constant that was lost during differentiation.
                    <br><br>
                    This is called an <strong>indefinite integral</strong>.
                </div>
                <div class="lesson-box warning">
                    Forgetting \\(+C\\) is one of the most common mistakes in integration. Always include it for indefinite integrals!
                </div>
            `
        },
        // Screen 4 - Concept: Integrating with Coefficients
        {
            type: 'concept',
            title: 'Integrating \\(ax^n\\)',
            content: `
                <p>Just as with differentiation, coefficients carry through to the integral:</p>
                <div class="lesson-box">
                    \\[\\int ax^n\\, dx = \\frac{ax^{n+1}}{n+1} + C\\]
                </div>
                <p>For example:</p>
                <ul>
                    <li>\\(\\int 6x^2\\, dx = \\frac{6x^3}{3} + C = 2x^3 + C\\)</li>
                    <li>\\(\\int 10x^4\\, dx = \\frac{10x^5}{5} + C = 2x^5 + C\\)</li>
                    <li>\\(\\int 3\\, dx = 3x + C\\) (since \\(3 = 3x^0\\), so \\(\\frac{3x^1}{1} = 3x\\))</li>
                </ul>
            `
        },
        // Screen 5 - Concept: Integrating Polynomials Term by Term
        {
            type: 'concept',
            title: 'Integrating Polynomials',
            content: `
                <p>Just like differentiation, we integrate polynomials <strong>term by term</strong>:</p>
                <p>\\(\\int (4x^3 - 6x + 5)\\, dx = \\frac{4x^4}{4} - \\frac{6x^2}{2} + 5x + C\\)</p>
                <p>\\(= x^4 - 3x^2 + 5x + C\\)</p>
                <div class="lesson-box">
                    Integrate each term separately using the power rule, then add a single \\(+C\\) at the end.
                </div>
                <p>You can check your answer by differentiating it - you should get back the original expression.</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg"><defs><marker id="int2-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#444"/></marker></defs><line x1="40" y1="160" x2="300" y2="160" stroke="#444" stroke-width="0.5" marker-end="url(#int2-arrow)"/><line x1="40" y1="160" x2="40" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#int2-arrow)"/><text x="295" y="178" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">x</text><text x="20" y="20" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">y</text><path d="M 60 150 Q 120 130 160 80 Q 200 30 270 20" fill="none" stroke="#54a0ff" stroke-width="2.5"/><path d="M 100 160 L 100 138 Q 130 118 160 80 Q 180 55 210 38 L 210 160 Z" fill="#00e5c7" fill-opacity="0.2" stroke="none"/><line x1="100" y1="160" x2="100" y2="138" stroke="#00e5c7" stroke-width="1.5"/><line x1="210" y1="160" x2="210" y2="38" stroke="#00e5c7" stroke-width="1.5"/><text x="95" y="178" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">a</text><text x="205" y="178" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">b</text><text x="130" y="120" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">Area</text><text x="250" y="40" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#54a0ff">y = f(x)</text></svg></div>
            `
        },
        // Screen 6 - Example: Integrate 3x^2
        {
            type: 'example',
            title: 'Integrating a Simple Power',
            problem: 'Find \\(\\int 3x^2\\, dx\\)',
            steps: [
                { text: 'Use the rule: increase the power by 1, divide by the new power.' },
                { text: '\\(\\int 3x^2\\, dx = \\frac{3x^{2+1}}{2+1} + C\\)' },
                { text: '\\(= \\frac{3x^3}{3} + C\\)' },
                { text: '\\(= x^3 + C\\)' }
            ]
        },
        // Screen 7 - Practice: Integrate ax^n
        {
            type: 'practice',
            generate: function() {
                var coeffs = [2, 3, 4, 6, 8, 10, 12];
                var powers = [1, 2, 3, 4, 5];
                var a = coeffs[Math.floor(Math.random() * coeffs.length)];
                var n = powers[Math.floor(Math.random() * powers.length)];
                var newPow = n + 1;
                var newCoeff = a / newPow;
                var isWhole = (a % newPow === 0);
                var correct = isWhole ? newCoeff + 'x^{' + newPow + '} + C' : '\\frac{' + a + '}{' + newPow + '}x^{' + newPow + '} + C';
                var wrong1 = a + 'x^{' + newPow + '} + C';
                var wrong2 = isWhole ? (newCoeff + 1) + 'x^{' + newPow + '} + C' : '\\frac{' + a + '}{' + n + '}x^{' + n + '} + C';
                var wrong3 = (a * newPow) + 'x^{' + (n - 1) + '} + C';
                var options = [correct, wrong1, wrong2, wrong3];
                options = [...new Set(options)];
                while (options.length < 4) options.push('\\frac{' + (a+1) + '}{' + newPow + '}x^{' + newPow + '} + C');
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'Find \\(\\int ' + a + 'x^{' + n + '}\\, dx\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: '\\(\\int ' + a + 'x^{' + n + '}\\, dx = \\frac{' + a + 'x^{' + newPow + '}}{' + newPow + '} + C = ' + correct + '\\).'
                };
            }
        },
        // Screen 8 - Example: Integrate a polynomial
        {
            type: 'example',
            title: 'Integrating a Polynomial',
            problem: 'Find \\(\\int (x^3 - 2x + 5)\\, dx\\)',
            steps: [
                { text: 'Integrate each term separately.' },
                { text: '\\(\\int x^3\\, dx = \\frac{x^4}{4}\\)' },
                { text: '\\(\\int -2x\\, dx = \\frac{-2x^2}{2} = -x^2\\)' },
                { text: '\\(\\int 5\\, dx = 5x\\)' },
                { text: 'Combine and add \\(C\\): \\(\\frac{x^4}{4} - x^2 + 5x + C\\)' }
            ]
        },
        // Screen 9 - Practice: Integrate a polynomial
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 4) + 2;
                var b = Math.floor(Math.random() * 7) - 3;
                var c = Math.floor(Math.random() * 6) + 1;
                var bSign = b >= 0 ? '+' : '';
                var question = a + 'x^2' + bSign + b + 'x+' + c;
                var intA = a % 3 === 0 ? (a/3) + 'x^3' : '\\frac{' + a + '}{3}x^3';
                var intB = b === 0 ? '' : (Math.abs(b) % 2 === 0 ? (b >= 0 ? '+' : '-') + (Math.abs(b)/2) + 'x^2' : (b >= 0 ? '+' : '-') + '\\frac{' + Math.abs(b) + '}{2}x^2');
                var answer = intA + intB + '+' + c + 'x+C';
                return {
                    type: 'short',
                    latex: 'Find \\(\\int (' + question + ')\\, dx\\). Include \\(+C\\).',
                    answer: answer,
                    explain: 'Integrate term by term: \\(\\int ' + a + 'x^2\\,dx = ' + intA + '\\), \\(\\int ' + b + 'x\\,dx = ' + intB + '\\), \\(\\int ' + c + '\\,dx = ' + c + 'x\\). Don\'t forget \\(+C\\)!'
                };
            }
        },
        // Screen 10 - Concept: Negative and Fractional Powers
        {
            type: 'concept',
            title: 'Integrating Negative and Fractional Powers',
            content: `
                <p>Just as with differentiation, we can integrate negative and fractional powers by rewriting first:</p>
                <div class="lesson-box">
                    \\(\\int x^{-2}\\, dx = \\frac{x^{-1}}{-1} + C = -\\frac{1}{x} + C\\)
                    <br><br>
                    \\(\\int x^{\\frac{1}{2}}\\, dx = \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} + C = \\frac{2}{3}x^{\\frac{3}{2}} + C\\)
                </div>
                <p>Remember: to divide by a fraction, multiply by its reciprocal. So dividing by \\(\\frac{3}{2}\\) is the same as multiplying by \\(\\frac{2}{3}\\).</p>
                <p>\\(\\int \\sqrt{x}\\, dx = \\int x^{\\frac{1}{2}}\\, dx = \\frac{2}{3}x^{\\frac{3}{2}} + C = \\frac{2}{3}x\\sqrt{x} + C\\)</p>
            `
        },
        // Screen 11 - Practice: Integrate negative power
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 5) + 2;
                var n = Math.floor(Math.random() * 3) + 2;
                var newPow = -n + 1;
                var correct = '-\\frac{' + a + '}{' + (n-1) + '}x^{' + newPow + '} + C';
                if (n - 1 === 1) correct = '-' + a + 'x^{' + newPow + '} + C';
                var wrong1 = '\\frac{' + a + '}{' + (n-1) + '}x^{' + newPow + '} + C';
                var wrong2 = '-\\frac{' + a + '}{' + n + '}x^{' + (-n-1) + '} + C';
                var wrong3 = a + 'x^{' + (-n+1) + '} + C';
                var options = [correct, wrong1, wrong2, wrong3];
                options = [...new Set(options)];
                while (options.length < 4) options.push('-\\frac{' + (a+1) + '}{' + (n-1) + '}x^{' + newPow + '} + C');
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'Find \\(\\int ' + a + 'x^{-' + n + '}\\, dx\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: '\\(\\int ' + a + 'x^{-' + n + '}\\, dx = \\frac{' + a + 'x^{' + newPow + '}}{' + newPow + '} + C = ' + correct + '\\).'
                };
            }
        },
        // Screen 12 - Practice: Integrate fractional power
        {
            type: 'practice',
            generate: function() {
                var correct = '\\frac{2}{3}x^{\\frac{3}{2}} + C';
                var options = [
                    '\\frac{2}{3}x^{\\frac{3}{2}} + C',
                    '\\frac{3}{2}x^{\\frac{3}{2}} + C',
                    '\\frac{1}{2}x^{-\\frac{1}{2}} + C',
                    '2x^{\\frac{3}{2}} + C'
                ];
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'Find \\(\\int \\sqrt{x}\\, dx\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Rewrite as \\(\\int x^{\\frac{1}{2}}\\, dx = \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} + C = \\frac{2}{3}x^{\\frac{3}{2}} + C\\).'
                };
            }
        },
        // Screen 13 - Concept: Finding C using a Point
        {
            type: 'concept',
            title: 'Finding \\(C\\) Using a Known Point',
            content: `
                <p>If we know a point on the curve, we can find the specific value of \\(C\\):</p>
                <div class="lesson-box">
                    Given \\(\\frac{dy}{dx} = f(x)\\) and a point \\((a, b)\\) on the curve:<br><br>
                    1. Integrate to find \\(y = F(x) + C\\)<br>
                    2. Substitute \\(x = a\\) and \\(y = b\\)<br>
                    3. Solve for \\(C\\)
                </div>
                <p>This gives us the <strong>particular solution</strong> rather than the general solution.</p>
            `
        },
        // Screen 14 - Example: Finding C
        {
            type: 'example',
            title: 'Finding the Constant of Integration',
            problem: 'Given \\(\\frac{dy}{dx} = 4x - 1\\) and \\(y = 3\\) when \\(x = 1\\), find \\(y\\)',
            steps: [
                { text: 'Integrate: \\(y = \\int (4x - 1)\\, dx = 2x^2 - x + C\\)' },
                { text: 'Substitute the known point \\(x = 1, y = 3\\):' },
                { text: '\\(3 = 2(1)^2 - (1) + C\\)' },
                { text: '\\(3 = 2 - 1 + C = 1 + C\\)' },
                { text: '\\(C = 2\\)' },
                { text: 'Therefore \\(y = 2x^2 - x + 2\\)' }
            ]
        },
        // Screen 15 - Practice: Find C given a point
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 4) + 1;
                var b = Math.floor(Math.random() * 5) + 1;
                var xVal = Math.floor(Math.random() * 3) + 1;
                var yVal = Math.floor(Math.random() * 10) + 1;
                var intVal = a * xVal * xVal + b * xVal;
                var C = yVal - intVal;
                var cSign = C >= 0 ? '+' : '-';
                var cAbs = Math.abs(C);
                var answer = a + 'x^2+' + b + 'x' + cSign + cAbs;
                var options = [C, C + 1, C - 1, intVal];
                options = [...new Set(options)];
                while (options.length < 4) options.push(C + options.length);
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(C);
                return {
                    type: 'mc',
                    latex: 'Given \\(\\frac{dy}{dx} = ' + (2*a) + 'x + ' + b + '\\) and \\(y = ' + yVal + '\\) when \\(x = ' + xVal + '\\), find the value of \\(C\\).',
                    options: options.map(function(o) { return '\\(C = ' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Integrate: \\(y = ' + a + 'x^2 + ' + b + 'x + C\\). Substitute \\(x = ' + xVal + ', y = ' + yVal + '\\): \\(' + yVal + ' = ' + a + '(' + xVal + ')^2 + ' + b + '(' + xVal + ') + C = ' + intVal + ' + C\\). So \\(C = ' + C + '\\).'
                };
            }
        },
        // Screen 16 - Practice: Full integration with C
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 3) + 1;
                var xVal = Math.floor(Math.random() * 2) + 1;
                var yVal = Math.floor(Math.random() * 8) + 2;
                var intVal = a * xVal * xVal * xVal;
                var C = yVal - intVal;
                var cSign = C >= 0 ? ' + ' : ' - ';
                var cAbs = Math.abs(C);
                var answer = a + 'x^3' + cSign + cAbs;
                if (C === 0) answer = a + 'x^3';
                var wrong1 = (3*a) + 'x^2' + cSign + cAbs;
                var wrong2 = a + 'x^3' + (C >= 0 ? ' - ' : ' + ') + cAbs;
                var wrong3 = a + 'x^3 + ' + yVal;
                var options = [answer, wrong1, wrong2, wrong3];
                options = [...new Set(options)];
                while (options.length < 4) options.push(a + 'x^3 + ' + (C + 2));
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(answer);
                return {
                    type: 'mc',
                    latex: 'Given \\(\\frac{dy}{dx} = ' + (3*a) + 'x^2\\) and the curve passes through \\((' + xVal + ', ' + yVal + ')\\), find \\(y\\).',
                    options: options.map(function(o) { return '\\(y = ' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Integrate: \\(y = ' + a + 'x^3 + C\\). At \\((' + xVal + ', ' + yVal + ')\\): \\(' + yVal + ' = ' + a + '(' + xVal + ')^3 + C = ' + intVal + ' + C\\), so \\(C = ' + C + '\\). Therefore \\(y = ' + answer + '\\).'
                };
            }
        },
        // Screen 17 - Summary
        {
            type: 'summary',
            title: 'Integration - Key Points',
            content: '<p>You have learned the fundamentals of integration as the reverse of differentiation.</p>',
            points: [
                'Integration is the reverse of differentiation',
                'Power rule: \\(\\int x^n\\, dx = \\frac{x^{n+1}}{n+1} + C\\) (where \\(n \\neq -1\\))',
                'Always include \\(+C\\) for indefinite integrals',
                'Integrate polynomials term by term',
                'Rewrite fractions and roots before integrating',
                'Use a known point on the curve to find the value of \\(C\\)',
                'Check your answer by differentiating - you should get back the original expression'
            ]
        }
    ]
};