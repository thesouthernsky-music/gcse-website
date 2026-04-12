window.CURRENT_LESSON = {
    title: "Tangents, Normals & Stationary Points",
    subtitle: "Applying differentiation to curve analysis",
    screens: [
        // Screen 1 - Concept: Gradient at a Point
        {
            type: 'concept',
            title: 'Gradient at a Point',
            content: `
                <p>Once we have the derivative \\(\\frac{dy}{dx}\\), we can find the gradient of a curve at any specific point by <strong>substituting the x-coordinate</strong> into the derivative.</p>
                <div class="lesson-box">
                    To find the gradient at \\(x = a\\):<br>
                    1. Differentiate to find \\(\\frac{dy}{dx}\\)<br>
                    2. Substitute \\(x = a\\) into \\(\\frac{dy}{dx}\\)
                </div>
                <p>For example, if \\(y = x^2\\) then \\(\\frac{dy}{dx} = 2x\\). At \\(x = 3\\), the gradient is \\(2(3) = 6\\).</p>
            `
        },
        // Screen 2 - Concept: Equation of a Tangent
        {
            type: 'concept',
            title: 'Equation of a Tangent',
            content: `
                <p>A <strong>tangent</strong> to a curve at a point is the straight line that just touches the curve at that point and has the same gradient as the curve there.</p>
                <div class="lesson-box">
                    To find the equation of the tangent at \\(x = a\\):<br>
                    1. Find the y-coordinate: substitute \\(x = a\\) into the curve equation<br>
                    2. Find the gradient: substitute \\(x = a\\) into \\(\\frac{dy}{dx}\\)<br>
                    3. Use \\(y - y_1 = m(x - x_1)\\) with the point \\((a, y_1)\\) and gradient \\(m\\)
                </div>
                <p>The result is a straight line equation, usually written in the form \\(y = mx + c\\).</p>
            `
        },
        // Screen 3 - Concept: Equation of a Normal
        {
            type: 'concept',
            title: 'Equation of a Normal',
            content: `
                <p>A <strong>normal</strong> to a curve at a point is the line that is perpendicular (at right angles) to the tangent at that point.</p>
                <div class="lesson-box">
                    If the tangent has gradient \\(m\\), the normal has gradient \\(-\\frac{1}{m}\\).
                    <br><br>
                    The gradients of perpendicular lines multiply to give \\(-1\\): \\(m_1 \\times m_2 = -1\\).
                </div>
                <p>To find the normal equation, follow the same steps as for a tangent, but use \\(-\\frac{1}{m}\\) as the gradient instead of \\(m\\).</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg"><defs><marker id="tn1-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#444"/></marker></defs><line x1="30" y1="170" x2="300" y2="170" stroke="#444" stroke-width="0.5" marker-end="url(#tn1-arrow)"/><line x1="30" y1="170" x2="30" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#tn1-arrow)"/><path d="M 50 150 Q 100 155 150 100 Q 200 45 270 30" fill="none" stroke="#54a0ff" stroke-width="2.5"/><circle cx="150" cy="100" r="4" fill="#feca57"/><line x1="80" y1="140" x2="230" y2="57" stroke="#00e5c7" stroke-width="2.5"/><line x1="115" y1="55" x2="190" y2="150" stroke="#ff6b6b" stroke-width="2.5"/><path d="M 143 92 L 135 96 L 139 104" fill="none" stroke="#feca57" stroke-width="1.5"/><text x="215" y="50" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">tangent</text><text x="192" y="148" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b">normal</text><text x="155" y="97" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">P</text></svg></div>
                <div class="lesson-box warning">
                    Don't confuse tangent and normal. The tangent has the <strong>same</strong> gradient as the curve; the normal is <strong>perpendicular</strong> to it.
                </div>
            `
        },
        // Screen 4 - Example: Find gradient at a point
        {
            type: 'example',
            title: 'Finding the Gradient at a Point',
            problem: 'Find the gradient of \\(y = x^3 - 3x\\) at \\(x = 2\\)',
            steps: [
                { text: 'Differentiate: \\(\\frac{dy}{dx} = 3x^2 - 3\\)' },
                { text: 'Substitute \\(x = 2\\): \\(\\frac{dy}{dx} = 3(2)^2 - 3\\)' },
                { text: '\\(= 3(4) - 3 = 12 - 3\\)' },
                { text: 'The gradient at \\(x = 2\\) is \\(9\\).' }
            ]
        },
        // Screen 5 - Practice: Find gradient at a point
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 4) + 1;
                var b = Math.floor(Math.random() * 6) + 1;
                var xVal = Math.floor(Math.random() * 3) + 1;
                var gradient = 2 * a * xVal - b;
                var options = [gradient, gradient + 2, gradient - 2, 2 * a * xVal + b];
                options = [...new Set(options)];
                while (options.length < 4) options.push(gradient + options.length);
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(gradient);
                var bSign = b >= 0 ? '+' : '';
                return {
                    type: 'mc',
                    latex: 'Find the gradient of \\(y = ' + a + 'x^2 ' + bSign + (-b) + 'x\\) at \\(x = ' + xVal + '\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: '\\(\\frac{dy}{dx} = ' + (2*a) + 'x - ' + b + '\\). At \\(x = ' + xVal + '\\): \\(' + (2*a) + '(' + xVal + ') - ' + b + ' = ' + (2*a*xVal) + ' - ' + b + ' = ' + gradient + '\\).'
                };
            }
        },
        // Screen 6 - Example: Find tangent equation
        {
            type: 'example',
            title: 'Finding the Equation of a Tangent',
            problem: 'Find the equation of the tangent to \\(y = x^2 - 4x + 1\\) at \\(x = 3\\)',
            steps: [
                { text: 'Find the y-coordinate: \\(y = (3)^2 - 4(3) + 1 = 9 - 12 + 1 = -2\\). The point is \\((3, -2)\\).' },
                { text: 'Differentiate: \\(\\frac{dy}{dx} = 2x - 4\\)' },
                { text: 'Find the gradient at \\(x = 3\\): \\(m = 2(3) - 4 = 2\\)' },
                { text: 'Use \\(y - y_1 = m(x - x_1)\\): \\(y - (-2) = 2(x - 3)\\)' },
                { text: '\\(y + 2 = 2x - 6\\)' },
                { text: '\\(y = 2x - 8\\)' }
            ]
        },
        // Screen 7 - Practice: Tangent equation
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 3) + 1;
                var b = Math.floor(Math.random() * 7) - 3;
                var xVal = Math.floor(Math.random() * 3) + 1;
                var yVal = a * xVal * xVal + b * xVal;
                var m = 2 * a * xVal + b;
                var c = yVal - m * xVal;
                var cSign = c >= 0 ? '+' : '';
                var answer = 'y=' + m + 'x' + cSign + c;
                var wrong1 = 'y=' + (m+1) + 'x' + cSign + c;
                var wrong2 = 'y=' + m + 'x' + (c >= 0 ? '+' : '') + (c+2);
                var wrong3 = 'y=' + (2*a) + 'x' + (b >= 0 ? '+' : '') + b;
                var options = [answer, wrong1, wrong2, wrong3];
                options = [...new Set(options)];
                while (options.length < 4) options.push('y=' + (m-1) + 'x' + cSign + c);
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(answer);
                var bSign = b >= 0 ? '+' : '';
                return {
                    type: 'mc',
                    latex: 'Find the equation of the tangent to \\(y = ' + a + 'x^2' + bSign + b + 'x\\) at \\(x = ' + xVal + '\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'At \\(x=' + xVal + '\\): \\(y=' + yVal + '\\), \\(\\frac{dy}{dx}=' + (2*a) + 'x' + bSign + b + '=' + m + '\\). Tangent: \\(y-' + yVal + '=' + m + '(x-' + xVal + ')\\), so \\(' + answer + '\\).'
                };
            }
        },
        // Screen 8 - Practice: Normal equation
        {
            type: 'practice',
            generate: function() {
                var xVal = Math.floor(Math.random() * 3) + 1;
                var yVal = xVal * xVal;
                var m = 2 * xVal;
                var normalM = '-\\frac{1}{' + m + '}';
                var options = [
                    normalM,
                    '\\frac{1}{' + m + '}',
                    '-' + m,
                    '' + m
                ];
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(normalM);
                return {
                    type: 'mc',
                    latex: 'The curve \\(y = x^2\\) passes through the point \\((' + xVal + ', ' + yVal + ')\\). What is the gradient of the <strong>normal</strong> at this point?',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: '\\(\\frac{dy}{dx} = 2x\\). At \\(x=' + xVal + '\\), tangent gradient \\(= ' + m + '\\). Normal gradient \\(= -\\frac{1}{' + m + '}\\).'
                };
            }
        },
        // Screen 9 - Concept: Stationary Points
        {
            type: 'concept',
            title: 'Stationary Points',
            content: `
                <p>A <strong>stationary point</strong> is a point on a curve where the gradient is zero - the curve is momentarily "flat".</p>
                <div class="lesson-box">
                    At a stationary point, \\(\\frac{dy}{dx} = 0\\).
                    <br><br>
                    To find stationary points, set \\(\\frac{dy}{dx} = 0\\) and solve for \\(x\\).
                </div>
                <p>There are three types of stationary point:</p>
                <ul>
                    <li><strong>Local maximum</strong> - the curve goes up then down</li>
                    <li><strong>Local minimum</strong> - the curve goes down then up</li>
                    <li><strong>Point of inflection</strong> - the curve flattens then continues in the same direction</li>
                </ul>
            `
        },
        // Screen 10 - Concept: Second Derivative Test
        {
            type: 'concept',
            title: 'Classifying Stationary Points',
            content: `
                <p>We classify stationary points using the <strong>second derivative</strong> \\(\\frac{d^2y}{dx^2}\\), which is found by differentiating \\(\\frac{dy}{dx}\\) again.</p>
                <div class="lesson-box">
                    At a stationary point (where \\(\\frac{dy}{dx} = 0\\)):<br><br>
                    If \\(\\frac{d^2y}{dx^2} > 0\\) - it is a <strong>minimum</strong> (curve is concave up)<br><br>
                    If \\(\\frac{d^2y}{dx^2} < 0\\) - it is a <strong>maximum</strong> (curve is concave down)<br><br>
                    If \\(\\frac{d^2y}{dx^2} = 0\\) - the test is inconclusive (could be max, min, or inflection)
                </div>
                <div class="lesson-box warning">
                    When the second derivative is zero, you need to use another method (e.g. check the sign of the gradient either side) to determine the nature of the point.
                </div>
            `
        },
        // Screen 11 - Concept: Finding Max/Min Values
        {
            type: 'concept',
            title: 'Finding Maximum and Minimum Values',
            content: `
                <p>Once you have found and classified the stationary points, you can find the actual <strong>maximum or minimum values</strong> by substituting the x-coordinates back into the <em>original equation</em>.</p>
                <div class="lesson-box">
                    To find the maximum/minimum value of \\(y\\):<br>
                    1. Find \\(\\frac{dy}{dx}\\) and set it equal to 0<br>
                    2. Solve for \\(x\\)<br>
                    3. Use \\(\\frac{d^2y}{dx^2}\\) to classify<br>
                    4. Substitute the \\(x\\) value back into \\(y = f(x)\\) to find the \\(y\\) value
                </div>
                <p>This is extremely useful in optimization problems - finding the largest or smallest value a function can take.</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 240" width="320" height="240" xmlns="http://www.w3.org/2000/svg"><defs><marker id="tn2-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#444"/></marker></defs><line x1="30" y1="190" x2="300" y2="190" stroke="#444" stroke-width="0.5" marker-end="url(#tn2-arrow)"/><line x1="30" y1="190" x2="30" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#tn2-arrow)"/><text x="290" y="208" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">x</text><text x="12" y="20" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">y</text><path d="M 40 160 Q 80 180 110 60 Q 130 -10 160 100 Q 180 180 210 160 Q 250 140 280 30" fill="none" stroke="#54a0ff" stroke-width="2.5"/><circle cx="110" cy="60" r="4" fill="#00e5c7"/><circle cx="200" cy="165" r="4" fill="#ff6b6b"/><line x1="70" y1="60" x2="155" y2="60" stroke="#00e5c7" stroke-width="1.5" stroke-dasharray="5 3"/><line x1="160" y1="165" x2="245" y2="165" stroke="#ff6b6b" stroke-width="1.5" stroke-dasharray="5 3"/><text x="115" y="50" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">max</text><text x="205" y="158" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b">min</text><text x="80" y="78" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">dy/dx = 0</text><text x="170" y="183" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">dy/dx = 0</text></svg></div>
            `
        },
        // Screen 12 - Example: Find and classify stationary points
        {
            type: 'example',
            title: 'Finding and Classifying Stationary Points',
            problem: 'Find and classify the stationary points of \\(y = x^3 - 6x^2 + 9x + 1\\)',
            steps: [
                { text: 'Differentiate: \\(\\frac{dy}{dx} = 3x^2 - 12x + 9\\)' },
                { text: 'Set \\(\\frac{dy}{dx} = 0\\): \\(3x^2 - 12x + 9 = 0\\)' },
                { text: 'Divide by 3: \\(x^2 - 4x + 3 = 0\\)' },
                { text: 'Factorise: \\((x - 1)(x - 3) = 0\\), so \\(x = 1\\) or \\(x = 3\\)' },
                { text: 'Find the second derivative: \\(\\frac{d^2y}{dx^2} = 6x - 12\\)' },
                { text: 'At \\(x = 1\\): \\(\\frac{d^2y}{dx^2} = 6(1) - 12 = -6 < 0\\), so this is a <strong>maximum</strong>.' },
                { text: 'At \\(x = 1\\): \\(y = 1 - 6 + 9 + 1 = 5\\). Maximum at \\((1, 5)\\).' },
                { text: 'At \\(x = 3\\): \\(\\frac{d^2y}{dx^2} = 6(3) - 12 = 6 > 0\\), so this is a <strong>minimum</strong>.' },
                { text: 'At \\(x = 3\\): \\(y = 27 - 54 + 27 + 1 = 1\\). Minimum at \\((3, 1)\\).' }
            ]
        },
        // Screen 13 - Practice: Find stationary points
        {
            type: 'practice',
            generate: function() {
                var p = Math.floor(Math.random() * 3) + 1;
                var q = p + Math.floor(Math.random() * 3) + 1;
                var a = 1;
                var b = -(p + q);
                var c = p * q;
                var bSign = b >= 0 ? '+' : '';
                var cSign = c >= 0 ? '+' : '';
                var options = [
                    'x = ' + p + ' \\text{ and } x = ' + q,
                    'x = ' + (-p) + ' \\text{ and } x = ' + (-q),
                    'x = ' + (p + q) + ' \\text{ and } x = ' + (p * q),
                    'x = ' + p + ' \\text{ only}'
                ];
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correct = 'x = ' + p + ' \\text{ and } x = ' + q;
                var correctIdx = options.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'Find the x-coordinates of the stationary points of \\(y = \\frac{1}{3}x^3 ' + bSign + '\\frac{' + Math.abs(b) + '}{2}x^2' + cSign + c + 'x\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: '\\(\\frac{dy}{dx} = x^2 ' + bSign + Math.abs(b) + 'x ' + cSign + c + ' = (x-' + p + ')(x-' + q + ') = 0\\). So \\(x = ' + p + '\\) or \\(x = ' + q + '\\).'
                };
            }
        },
        // Screen 14 - Practice: Classify stationary point
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 3) + 1;
                var b = (Math.floor(Math.random() * 4) + 2) * 2;
                var xStat = b / (2 * a);
                var secondDeriv = 2 * a;
                var nature = secondDeriv > 0 ? 'Minimum' : 'Maximum';
                var options = ['Minimum', 'Maximum', 'Point of inflection', 'Cannot be determined'];
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(nature);
                return {
                    type: 'mc',
                    latex: 'The curve \\(y = ' + a + 'x^2 - ' + b + 'x + 3\\) has a stationary point at \\(x = ' + xStat + '\\). Classify this stationary point.',
                    options: options,
                    correctIdx: correctIdx,
                    explain: '\\(\\frac{d^2y}{dx^2} = ' + (2*a) + '\\). Since \\(' + (2*a) + ' > 0\\), the stationary point is a <strong>minimum</strong>.'
                };
            }
        },
        // Screen 15 - Practice: Find gradient at a point (harder)
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 3) + 1;
                var b = Math.floor(Math.random() * 5) + 2;
                var c = Math.floor(Math.random() * 6) + 1;
                var xVal = Math.floor(Math.random() * 3) + 1;
                var gradient = 3 * a * xVal * xVal - 2 * b * xVal + c;
                var options = [gradient, gradient + 2, 3 * a * xVal * xVal + 2 * b * xVal + c, gradient - b];
                options = [...new Set(options)];
                while (options.length < 4) options.push(gradient + options.length * 2);
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(gradient);
                return {
                    type: 'mc',
                    latex: 'Find the gradient of \\(y = ' + a + 'x^3 - ' + b + 'x^2 + ' + c + 'x\\) at \\(x = ' + xVal + '\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: '\\(\\frac{dy}{dx} = ' + (3*a) + 'x^2 - ' + (2*b) + 'x + ' + c + '\\). At \\(x = ' + xVal + '\\): \\(' + (3*a) + '(' + (xVal*xVal) + ') - ' + (2*b) + '(' + xVal + ') + ' + c + ' = ' + gradient + '\\).'
                };
            }
        },
        // Screen 16 - Practice: Maximum value
        {
            type: 'practice',
            generate: function() {
                var p = Math.floor(Math.random() * 3) + 2;
                var a = -1;
                var b = 2 * p;
                var yMax = p * p;
                var options = [yMax, yMax + 1, yMax - 1, p];
                options = [...new Set(options)];
                while (options.length < 4) options.push(yMax + options.length);
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(yMax);
                return {
                    type: 'mc',
                    latex: 'Find the maximum value of \\(y = -x^2 + ' + b + 'x\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: '\\(\\frac{dy}{dx} = -2x + ' + b + ' = 0 \\Rightarrow x = ' + p + '\\). \\(\\frac{d^2y}{dx^2} = -2 < 0\\), so this is a maximum. \\(y = -(' + p + ')^2 + ' + b + '(' + p + ') = -' + (p*p) + ' + ' + (b*p) + ' = ' + yMax + '\\).'
                };
            }
        },
        // Screen 17 - Practice: Tangent equation from cubic
        {
            type: 'practice',
            generate: function() {
                var xVal = Math.floor(Math.random() * 2) + 1;
                var a = 1;
                var b = -(Math.floor(Math.random() * 4) + 2);
                var yVal = xVal * xVal * xVal + b * xVal;
                var m = 3 * xVal * xVal + b;
                var c_val = yVal - m * xVal;
                var cSign = c_val >= 0 ? ' + ' : ' - ';
                var cAbs = Math.abs(c_val);
                var answer = 'y = ' + m + 'x' + cSign + cAbs;
                if (c_val === 0) answer = 'y = ' + m + 'x';
                var wrong1 = 'y = ' + (m + 1) + 'x' + cSign + cAbs;
                var wrong2 = 'y = ' + m + 'x' + (c_val >= 0 ? ' - ' : ' + ') + cAbs;
                var wrong3 = 'y = ' + (3 * xVal * xVal) + 'x' + cSign + (cAbs + 1);
                var options = [answer, wrong1, wrong2, wrong3];
                options = [...new Set(options)];
                while (options.length < 4) options.push('y = ' + (m - 1) + 'x' + cSign + cAbs);
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(answer);
                return {
                    type: 'mc',
                    latex: 'Find the equation of the tangent to \\(y = x^3 ' + (b >= 0 ? '+' : '') + b + 'x\\) at \\(x = ' + xVal + '\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'At \\(x = ' + xVal + '\\): \\(y = ' + yVal + '\\), \\(\\frac{dy}{dx} = 3x^2 ' + (b >= 0 ? '+' : '') + b + ' = ' + m + '\\). Using \\(y - ' + yVal + ' = ' + m + '(x - ' + xVal + ')\\) gives \\(' + answer + '\\).'
                };
            }
        },
        // Screen 18 - Summary
        {
            type: 'summary',
            title: 'Tangents, Normals & Stationary Points - Key Points',
            content: '<p>You can now use differentiation to find tangents, normals, and stationary points on curves.</p>',
            points: [
                'Gradient at a point: substitute into \\(\\frac{dy}{dx}\\)',
                'Tangent equation: use \\(y - y_1 = m(x - x_1)\\) with \\(m = \\frac{dy}{dx}\\) at the point',
                'Normal gradient = \\(-\\frac{1}{m}\\) (negative reciprocal of tangent gradient)',
                'Stationary points occur where \\(\\frac{dy}{dx} = 0\\)',
                'Use \\(\\frac{d^2y}{dx^2}\\) to classify: positive means minimum, negative means maximum',
                'Substitute back into the original equation to find the actual max/min y-values'
            ]
        }
    ]
};