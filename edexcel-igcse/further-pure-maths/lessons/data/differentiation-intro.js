window.CURRENT_LESSON = {
    title: "Introduction to Differentiation",
    subtitle: "Finding the gradient of a curve at any point",
    screens: [
        // Screen 1 - Concept: What is Differentiation?
        {
            type: 'concept',
            title: 'What is Differentiation?',
            content: `
                <p>Differentiation is one of the most powerful tools in mathematics. It lets us find the <strong>rate of change</strong> of one quantity with respect to another.</p>
                <p>In practical terms, differentiation tells us <strong>how fast something is changing</strong> at any given moment.</p>
                <div class="lesson-box">
                    Differentiation finds the <strong>gradient</strong> (slope) of a curve at any point. This gradient tells us the rate of change.
                </div>
                <p>Examples of rates of change include speed (rate of change of distance with time), acceleration (rate of change of speed), and growth rates.</p>
            `
        },
        // Screen 2 - Concept: Gradient of a Straight Line vs Curve
        {
            type: 'concept',
            title: 'Gradient of a Line vs a Curve',
            content: `
                <p>For a <strong>straight line</strong>, the gradient is constant everywhere. We calculate it as:</p>
                \\[ \\text{gradient} = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1} \\]
                <p>For a <strong>curve</strong>, the gradient is different at every point. The curve gets steeper or flatter as you move along it.</p>
                <p>To find the gradient of a curve at a particular point, we draw a <strong>tangent line</strong> at that point and find its gradient.</p>
                <div class="lesson-box">
                    The gradient of a curve at a point = the gradient of the tangent to the curve at that point.
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg"><defs><marker id="diff1-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#444"/></marker></defs><line x1="40" y1="170" x2="300" y2="170" stroke="#444" stroke-width="0.5" marker-end="url(#diff1-arrow)"/><line x1="40" y1="170" x2="40" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#diff1-arrow)"/><text x="295" y="188" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">x</text><text x="20" y="20" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">y</text><path d="M 60 150 Q 120 160 160 100 Q 200 40 270 30" fill="none" stroke="#54a0ff" stroke-width="2.5"/><circle cx="110" cy="148" r="4" fill="#feca57"/><circle cx="220" cy="42" r="4" fill="#feca57"/><line x1="70" y1="163" x2="260" y2="18" stroke="#feca57" stroke-width="1.5" stroke-dasharray="5 3"/><circle cx="160" cy="100" r="4" fill="#00e5c7"/><line x1="100" y1="120" x2="230" y2="77" stroke="#00e5c7" stroke-width="2"/><text x="222" y="35" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">B</text><text x="95" y="143" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">A</text><text x="140" y="124" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#00e5c7">tangent</text><text x="230" y="15" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">secant</text></svg></div>
                <p>Differentiation gives us a formula that calculates this gradient at <em>any</em> point on the curve, without needing to draw anything.</p>
            `
        },
        // Screen 3 - Concept: The Derivative dy/dx
        {
            type: 'concept',
            title: 'The Derivative \\(\\frac{dy}{dx}\\)',
            content: `
                <p>When we differentiate \\(y\\) with respect to \\(x\\), we write the result as \\(\\frac{dy}{dx}\\) (read as "dee y by dee x").</p>
                <p>This is called the <strong>derivative</strong> of \\(y\\) with respect to \\(x\\).</p>
                <div class="lesson-box">
                    \\(\\frac{dy}{dx}\\) gives the gradient of the curve \\(y = f(x)\\) at any point. Substitute in a value of \\(x\\) to find the gradient at that specific point.
                </div>
                <p>Other common notations for the derivative include:</p>
                <ul>
                    <li>\\(f'(x)\\) - "f prime of x"</li>
                    <li>\\(\\dot{y}\\) - used in physics for derivatives with respect to time</li>
                </ul>
            `
        },
        // Screen 4 - Concept: The Power Rule
        {
            type: 'concept',
            title: 'Differentiating \\(x^n\\) - The Power Rule',
            content: `
                <p>The fundamental rule of differentiation is the <strong>power rule</strong>:</p>
                <div class="lesson-box">
                    If \\(y = x^n\\), then \\(\\frac{dy}{dx} = nx^{n-1}\\)
                    <br><br>
                    <strong>Bring down</strong> the power as a multiplier, then <strong>reduce</strong> the power by 1.
                </div>
                <p>For example:</p>
                <ul>
                    <li>\\(y = x^3 \\Rightarrow \\frac{dy}{dx} = 3x^2\\)</li>
                    <li>\\(y = x^5 \\Rightarrow \\frac{dy}{dx} = 5x^4\\)</li>
                    <li>\\(y = x^1 = x \\Rightarrow \\frac{dy}{dx} = 1x^0 = 1\\)</li>
                </ul>
                <p>This rule works for <strong>any</strong> value of \\(n\\) - positive, negative, or fractional.</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg"><defs><marker id="diff2-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#444"/></marker></defs><line x1="40" y1="170" x2="300" y2="170" stroke="#444" stroke-width="0.5" marker-end="url(#diff2-arrow)"/><line x1="40" y1="170" x2="40" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#diff2-arrow)"/><text x="295" y="188" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">x</text><text x="20" y="20" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">y</text><path d="M 50 160 Q 100 155 140 120 Q 180 85 200 50 Q 225 20 270 10" fill="none" stroke="#54a0ff" stroke-width="2.5"/><circle cx="180" cy="85" r="4" fill="#00e5c7"/><line x1="115" y1="145" x2="245" y2="25" stroke="#00e5c7" stroke-width="2" fill="none"/><text x="185" y="80" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">(2, 4)</text><text x="250" y="23" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">m = 4</text><text x="255" y="50" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#54a0ff">y = x&#xb2;</text><line x1="180" y1="170" x2="180" y2="85" stroke="#feca57" stroke-width="1" stroke-dasharray="3 3"/><text x="183" y="185" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">x=2</text></svg></div>
            `
        },
        // Screen 5 - Concept: Differentiating with a Coefficient
        {
            type: 'concept',
            title: 'Differentiating \\(ax^n\\)',
            content: `
                <p>When there is a coefficient (a constant multiplier) in front of \\(x^n\\), it stays as a multiplier:</p>
                <div class="lesson-box">
                    If \\(y = ax^n\\), then \\(\\frac{dy}{dx} = anx^{n-1}\\)
                </div>
                <p>For example:</p>
                <ul>
                    <li>\\(y = 3x^4 \\Rightarrow \\frac{dy}{dx} = 3 \\times 4x^3 = 12x^3\\)</li>
                    <li>\\(y = 5x^2 \\Rightarrow \\frac{dy}{dx} = 5 \\times 2x = 10x\\)</li>
                    <li>\\(y = -2x^6 \\Rightarrow \\frac{dy}{dx} = -2 \\times 6x^5 = -12x^5\\)</li>
                </ul>
            `
        },
        // Screen 6 - Concept: Differentiating Polynomials & Constants
        {
            type: 'concept',
            title: 'Polynomials and Constants',
            content: `
                <p>To differentiate a polynomial, simply differentiate each term separately:</p>
                <p>\\(y = 3x^3 + 2x^2 - 5x + 1\\)</p>
                <p>\\(\\frac{dy}{dx} = 9x^2 + 4x - 5\\)</p>
                <div class="lesson-box">
                    <strong>Constants differentiate to zero.</strong><br>
                    A constant \\(c\\) is really \\(cx^0\\), so \\(\\frac{d}{dx}(c) = c \\times 0 \\times x^{-1} = 0\\).
                </div>
                <div class="lesson-box warning">
                    Don't forget that a lone \\(x\\) term is \\(x^1\\). So \\(\\frac{d}{dx}(5x) = 5 \\times 1 \\times x^0 = 5\\), not 0.
                </div>
            `
        },
        // Screen 7 - Example: Differentiate y = 3x^4
        {
            type: 'example',
            title: 'Differentiating a Single Power Term',
            problem: 'Differentiate \\(y = 3x^4\\)',
            steps: [
                { text: 'We use the power rule: bring down the power, reduce by 1.' },
                { text: 'The coefficient is 3 and the power is 4.' },
                { text: '\\(\\frac{dy}{dx} = 3 \\times 4x^{4-1}\\)' },
                { text: '\\(\\frac{dy}{dx} = 12x^3\\)' }
            ]
        },
        // Screen 8 - Practice: Differentiate ax^n
        {
            type: 'practice',
            generate: function() {
                var coeffs = [2, 3, 4, 5, 6];
                var powers = [2, 3, 4, 5, 6];
                var a = coeffs[Math.floor(Math.random() * coeffs.length)];
                var n = powers[Math.floor(Math.random() * powers.length)];
                var newCoeff = a * n;
                var newPow = n - 1;
                var correct = newCoeff + 'x^{' + newPow + '}';
                var options = [
                    newCoeff + 'x^{' + newPow + '}',
                    a + 'x^{' + newPow + '}',
                    newCoeff + 'x^{' + n + '}',
                    (a * (n - 1)) + 'x^{' + (n - 2) + '}'
                ];
                options = [...new Set(options)];
                while (options.length < 4) options.push((newCoeff + 1) + 'x^{' + newPow + '}');
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'Differentiate \\(y = ' + a + 'x^{' + n + '}\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Using the power rule: \\(\\frac{dy}{dx} = ' + a + ' \\times ' + n + 'x^{' + n + '-1} = ' + newCoeff + 'x^{' + newPow + '}\\).'
                };
            }
        },
        // Screen 9 - Example: Differentiate a polynomial
        {
            type: 'example',
            title: 'Differentiating a Polynomial',
            problem: 'Differentiate \\(y = x^3 - 5x^2 + 2x - 7\\)',
            steps: [
                { text: 'Differentiate each term separately using the power rule.' },
                { text: '\\(\\frac{d}{dx}(x^3) = 3x^2\\)' },
                { text: '\\(\\frac{d}{dx}(-5x^2) = -10x\\)' },
                { text: '\\(\\frac{d}{dx}(2x) = 2\\)' },
                { text: '\\(\\frac{d}{dx}(-7) = 0\\)' },
                { text: 'Putting it together: \\(\\frac{dy}{dx} = 3x^2 - 10x + 2\\)' }
            ]
        },
        // Screen 10 - Practice: Differentiate a polynomial
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 4) + 2;
                var b = Math.floor(Math.random() * 7) - 3;
                var c = Math.floor(Math.random() * 9) - 4;
                var d = Math.floor(Math.random() * 11) - 5;
                var bSign = b >= 0 ? '+' : '';
                var cSign = c >= 0 ? '+' : '';
                var dSign = d >= 0 ? '+' : '';
                var question = a + 'x^3' + bSign + b + 'x^2' + cSign + c + 'x' + dSign + d;
                var da = 3 * a;
                var db = 2 * b;
                var dbSign = db >= 0 ? '+' : '';
                var dcSign = c >= 0 ? '+' : '';
                var answer = da + 'x^2' + dbSign + db + 'x' + dcSign + c;
                return {
                    type: 'short',
                    latex: 'Differentiate \\(y = ' + question + '\\). Write your answer in the form \\(ax^2+bx+c\\).',
                    answer: answer,
                    explain: 'Differentiate term by term: \\(\\frac{d}{dx}(' + a + 'x^3) = ' + da + 'x^2\\), \\(\\frac{d}{dx}(' + b + 'x^2) = ' + db + 'x\\), \\(\\frac{d}{dx}(' + c + 'x) = ' + c + '\\), and the constant ' + d + ' differentiates to 0.'
                };
            }
        },
        // Screen 11 - Concept: Negative Powers
        {
            type: 'concept',
            title: 'Negative Powers',
            content: `
                <p>Before differentiating terms like \\(\\frac{1}{x}\\), \\(\\frac{3}{x^2}\\), etc., we must <strong>rewrite them using negative powers</strong>:</p>
                <div class="lesson-box">
                    \\(\\frac{1}{x} = x^{-1}\\), \\quad \\(\\frac{1}{x^2} = x^{-2}\\), \\quad \\(\\frac{a}{x^n} = ax^{-n}\\)
                </div>
                <p>Then apply the power rule as normal:</p>
                <ul>
                    <li>\\(y = x^{-1} \\Rightarrow \\frac{dy}{dx} = -1 \\times x^{-2} = -\\frac{1}{x^2}\\)</li>
                    <li>\\(y = 3x^{-2} \\Rightarrow \\frac{dy}{dx} = -6x^{-3} = -\\frac{6}{x^3}\\)</li>
                </ul>
                <div class="lesson-box warning">
                    You <strong>must</strong> rewrite fractions as negative powers before differentiating. You cannot differentiate \\(\\frac{1}{x}\\) directly.
                </div>
            `
        },
        // Screen 12 - Concept: Fractional Powers
        {
            type: 'concept',
            title: 'Fractional Powers',
            content: `
                <p>Roots must also be rewritten as fractional powers before differentiating:</p>
                <div class="lesson-box">
                    \\(\\sqrt{x} = x^{\\frac{1}{2}}\\), \\quad \\(\\sqrt[3]{x} = x^{\\frac{1}{3}}\\), \\quad \\(\\sqrt[n]{x} = x^{\\frac{1}{n}}\\)
                </div>
                <p>Then apply the power rule:</p>
                <p>\\(y = x^{\\frac{1}{2}} \\Rightarrow \\frac{dy}{dx} = \\frac{1}{2}x^{-\\frac{1}{2}} = \\frac{1}{2\\sqrt{x}}\\)</p>
                <p>More generally:</p>
                <p>\\(y = x^{\\frac{3}{2}} \\Rightarrow \\frac{dy}{dx} = \\frac{3}{2}x^{\\frac{1}{2}} = \\frac{3\\sqrt{x}}{2}\\)</p>
            `
        },
        // Screen 13 - Example: Rewrite then differentiate
        {
            type: 'example',
            title: 'Differentiating with Rewriting',
            problem: 'Differentiate \\(y = \\frac{4}{x} + \\sqrt{x}\\)',
            steps: [
                { text: 'First, rewrite using index notation.' },
                { text: '\\(y = 4x^{-1} + x^{\\frac{1}{2}}\\)' },
                { text: 'Now differentiate each term using the power rule.' },
                { text: '\\(\\frac{d}{dx}(4x^{-1}) = 4 \\times (-1) \\times x^{-2} = -4x^{-2}\\)' },
                { text: '\\(\\frac{d}{dx}(x^{\\frac{1}{2}}) = \\frac{1}{2}x^{-\\frac{1}{2}}\\)' },
                { text: '\\(\\frac{dy}{dx} = -4x^{-2} + \\frac{1}{2}x^{-\\frac{1}{2}} = -\\frac{4}{x^2} + \\frac{1}{2\\sqrt{x}}\\)' }
            ]
        },
        // Screen 14 - Practice: Rewrite and differentiate
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 5) + 2;
                var correct = '-' + a + 'x^{-2}';
                var options = [
                    '-' + a + 'x^{-2}',
                    a + 'x^{-2}',
                    '-' + a + 'x^{0}',
                    a + 'x^{-1}'
                ];
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'Differentiate \\(y = \\frac{' + a + '}{x}\\). Give your answer using index notation.',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Rewrite as \\(y = ' + a + 'x^{-1}\\). Then \\(\\frac{dy}{dx} = ' + a + ' \\times (-1) \\times x^{-2} = -' + a + 'x^{-2}\\).'
                };
            }
        },
        // Screen 15 - Practice: Fractional power differentiation
        {
            type: 'practice',
            generate: function() {
                var coeffs = [2, 3, 4, 6, 8];
                var a = coeffs[Math.floor(Math.random() * coeffs.length)];
                var halfA = a / 2;
                var correct = '\\frac{' + a + '}{2}x^{-\\frac{1}{2}}';
                var display = (a % 2 === 0) ? (a/2) + 'x^{-\\frac{1}{2}}' : '\\frac{' + a + '}{2}x^{-\\frac{1}{2}}';
                var options = [
                    display,
                    a + 'x^{\\frac{1}{2}}',
                    '\\frac{' + a + '}{2}x^{\\frac{1}{2}}',
                    a + 'x^{-\\frac{1}{2}}'
                ];
                options = [...new Set(options)];
                while (options.length < 4) options.push('\\frac{1}{2}x^{-\\frac{1}{2}}');
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(display);
                return {
                    type: 'mc',
                    latex: 'Differentiate \\(y = ' + a + '\\sqrt{x}\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Rewrite as \\(y = ' + a + 'x^{\\frac{1}{2}}\\). Then \\(\\frac{dy}{dx} = ' + a + ' \\times \\frac{1}{2} x^{-\\frac{1}{2}} = ' + display + '\\).'
                };
            }
        },
        // Screen 16 - Practice: Mixed differentiation
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 4) + 2;
                var n = Math.floor(Math.random() * 3) + 3;
                var b = Math.floor(Math.random() * 5) + 1;
                var da = a * n;
                var newPow = n - 1;
                var aSign = '';
                var bPart = ' - \\frac{' + b + '}{x^2}';
                var derA = da + 'x^{' + newPow + '}';
                var derB = '+' + (2 * b) + 'x^{-3}';
                var answer = derA + derB;
                var wrong1 = da + 'x^{' + n + '}' + '-' + b + 'x^{-1}';
                var wrong2 = da + 'x^{' + newPow + '}-' + (2*b) + 'x^{-3}';
                var wrong3 = (a*n) + 'x^{' + newPow + '}+' + b + 'x^{-2}';
                var options = [answer, wrong1, wrong2, wrong3];
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(answer);
                return {
                    type: 'mc',
                    latex: 'Differentiate \\(y = ' + a + 'x^{' + n + '} + \\frac{' + b + '}{x^2}\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Rewrite as \\(y = ' + a + 'x^{' + n + '} + ' + b + 'x^{-2}\\). Then \\(\\frac{dy}{dx} = ' + da + 'x^{' + newPow + '} + ' + b + ' \\times (-2)x^{-3} = ' + answer + '\\).'
                };
            }
        },
        // Screen 17 - Practice: Full polynomial with fractions
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 5) + 1;
                var b = Math.floor(Math.random() * 6) + 2;
                var c = Math.floor(Math.random() * 5) + 1;
                var da = 3 * a;
                var db = b;
                var answer = da + 'x^2+' + db;
                var wrong1 = a + 'x^2+' + db;
                var wrong2 = da + 'x^2+' + db + 'x';
                var wrong3 = da + 'x^3+' + db + 'x';
                var options = [answer, wrong1, wrong2, wrong3];
                options = [...new Set(options)];
                while (options.length < 4) options.push(da + 'x^2-' + db);
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(answer);
                return {
                    type: 'mc',
                    latex: 'Differentiate \\(y = ' + a + 'x^3 + ' + b + 'x - ' + c + '\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: '\\(\\frac{d}{dx}(' + a + 'x^3) = ' + da + 'x^2\\), \\(\\frac{d}{dx}(' + b + 'x) = ' + b + '\\), and the constant \\(-' + c + '\\) gives 0. So \\(\\frac{dy}{dx} = ' + answer + '\\).'
                };
            }
        },
        // Screen 18 - Summary
        {
            type: 'summary',
            title: 'Differentiation - Key Points',
            content: '<p>You have learned the foundations of differentiation, including the power rule and how to handle polynomials, negative powers, and fractional powers.</p>',
            points: [
                'Differentiation finds the gradient (rate of change) of a curve at any point',
                'The power rule: if \\(y = ax^n\\), then \\(\\frac{dy}{dx} = anx^{n-1}\\)',
                'Differentiate polynomials term by term',
                'Constants differentiate to 0',
                'Rewrite fractions as negative powers: \\(\\frac{a}{x^n} = ax^{-n}\\)',
                'Rewrite roots as fractional powers: \\(\\sqrt{x} = x^{\\frac{1}{2}}\\)',
                'Then apply the power rule as normal'
            ]
        }
    ]
};