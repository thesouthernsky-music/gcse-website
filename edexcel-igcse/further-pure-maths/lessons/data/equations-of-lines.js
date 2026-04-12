window.CURRENT_LESSON = {
    title: "Equations of Straight Lines",
    subtitle: "Finding and using equations of lines",
    screens: [
        // Screen 1 - Concept: Introduction
        {
            type: 'concept',
            title: 'Forms of a Straight Line Equation',
            content: `
                <p>A straight line can be described by an equation linking \\(x\\) and \\(y\\). There are two main forms you need to know:</p>
                <ul>
                    <li><strong>Gradient-intercept form</strong>: \\(y = mx + c\\)</li>
                    <li><strong>Point-gradient form</strong>: \\(y - y_1 = m(x - x_1)\\)</li>
                </ul>
                <div class="lesson-box">
                    Both forms are equivalent - you can rearrange one into the other. The form you use depends on what information you are given.
                </div>
            `
        },
        // Screen 2 - Concept: y = mx + c
        {
            type: 'concept',
            title: 'Gradient-Intercept Form: y = mx + c',
            content: `
                <p>In the equation \\(y = mx + c\\):</p>
                <ul>
                    <li>\\(m\\) is the <strong>gradient</strong> of the line.</li>
                    <li>\\(c\\) is the <strong>\\(y\\)-intercept</strong> - the value of \\(y\\) where the line crosses the \\(y\\)-axis (i.e. when \\(x = 0\\)).</li>
                </ul>
                <div class="lesson-box">
                    \\[ y = mx + c \\]
                    The gradient \\(m\\) tells you the steepness and direction.<br>
                    The intercept \\(c\\) tells you where the line crosses the \\(y\\)-axis.
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg"><defs><marker id="eqn1-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#444"/></marker></defs><line x1="40" y1="100" x2="300" y2="100" stroke="#444" stroke-width="0.5" marker-end="url(#eqn1-arrow)"/><line x1="160" y1="190" x2="160" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#eqn1-arrow)"/><text x="290" y="118" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">x</text><text x="140" y="20" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">y</text><line x1="60" y1="170" x2="280" y2="26" stroke="#00e5c7" stroke-width="2.5" fill="none"/><circle cx="160" cy="82" r="4" fill="#feca57"/><text x="165" y="76" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">c = 1</text><line x1="160" y1="82" x2="225" y2="82" stroke="#54a0ff" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="225" y1="82" x2="225" y2="40" stroke="#54a0ff" stroke-width="1.5" stroke-dasharray="4 3"/><text x="180" y="96" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">run=1</text><text x="230" y="66" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">rise=2</text><text x="62" y="185" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#00e5c7">y = 2x + 1</text></svg></div>
                <p>This form is the most useful for quickly reading off the gradient and intercept, and for sketching lines.</p>
            `
        },
        // Screen 3 - Concept: y - y1 = m(x - x1)
        {
            type: 'concept',
            title: 'Point-Gradient Form: y - y\\u2081 = m(x - x\\u2081)',
            content: `
                <p>When you know the gradient \\(m\\) and one point \\((x_1, y_1)\\) on the line, use:</p>
                <div class="lesson-box">
                    \\[ y - y_1 = m(x - x_1) \\]
                </div>
                <p>This is especially useful when:</p>
                <ul>
                    <li>You are given a point and a gradient directly.</li>
                    <li>You have calculated the gradient from two points and want to write the equation quickly.</li>
                </ul>
                <p>You can always expand and rearrange to get \\(y = mx + c\\) form afterwards.</p>
            `
        },
        // Screen 4 - Concept: Finding Equation from Point and Gradient
        {
            type: 'concept',
            title: 'From a Point and a Gradient',
            content: `
                <p>If you know a point on the line and its gradient, finding the equation is straightforward:</p>
                <p><strong>Method:</strong></p>
                <ol>
                    <li>Write down \\(y - y_1 = m(x - x_1)\\) with the given values.</li>
                    <li>Expand and simplify to get \\(y = mx + c\\) if required.</li>
                </ol>
                <div class="lesson-box">
                    Given point \\((x_1, y_1)\\) and gradient \\(m\\), substitute straight into \\(y - y_1 = m(x - x_1)\\).
                </div>
            `
        },
        // Screen 5 - Example: Point and Gradient
        {
            type: 'example',
            title: 'Equation from a Point and Gradient',
            problem: 'Find the equation of the line through \\((2, 3)\\) with gradient 4.',
            steps: [
                { text: 'Use point-gradient form: \\(y - y_1 = m(x - x_1)\\).' },
                { text: 'Substitute \\(m = 4\\), \\(x_1 = 2\\), \\(y_1 = 3\\): \\(y - 3 = 4(x - 2)\\).' },
                { text: 'Expand: \\(y - 3 = 4x - 8\\).' },
                { text: '\\(y = 4x - 5\\).' }
            ]
        },
        // Screen 6 - Practice: Point and Gradient
        {
            type: 'practice',
            generate: function() {
                var m = Math.floor(Math.random() * 9) - 4;
                if (m === 0) m = 2;
                var x1 = Math.floor(Math.random() * 7) - 3;
                var y1 = Math.floor(Math.random() * 9) - 4;
                var c = y1 - m * x1;
                var cStr = c === 0 ? '' : (c > 0 ? ' + ' + c : ' - ' + Math.abs(c));
                var answer = 'y = ' + (m === 1 ? '' : (m === -1 ? '-' : m)) + 'x' + cStr;
                var options = [
                    'y = ' + m + 'x' + (c === 0 ? '' : (c > 0 ? ' + ' + c : ' - ' + Math.abs(c))),
                    'y = ' + m + 'x' + (c + 1 === 0 ? '' : (c + 1 > 0 ? ' + ' + (c + 1) : ' - ' + Math.abs(c + 1))),
                    'y = ' + (-m) + 'x' + (c === 0 ? '' : (c > 0 ? ' + ' + c : ' - ' + Math.abs(c))),
                    'y = ' + m + 'x' + (c - 1 === 0 ? '' : (c - 1 > 0 ? ' + ' + (c - 1) : ' - ' + Math.abs(c - 1)))
                ];
                options = [...new Set(options)];
                while (options.length < 4) options.push('y = ' + m + 'x + ' + (Math.abs(c) + options.length + 1));
                var correctStr = options[0];
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(correctStr);
                return {
                    type: 'mc',
                    latex: 'Find the equation of the line through \\((' + x1 + ', ' + y1 + ')\\) with gradient \\(' + m + '\\). Give your answer in the form \\(y = mx + c\\).',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: '\\(y - ' + (y1 < 0 ? '(' + y1 + ')' : y1) + ' = ' + m + '(x - ' + (x1 < 0 ? '(' + x1 + ')' : x1) + ')\\). Expanding: \\(y = ' + m + 'x' + (c === 0 ? '' : (c > 0 ? ' + ' + c : ' - ' + Math.abs(c))) + '\\).'
                };
            }
        },
        // Screen 7 - Concept: Finding Equation from Two Points
        {
            type: 'concept',
            title: 'From Two Points',
            content: `
                <p>If you know two points on the line, you can find the equation in two steps:</p>
                <p><strong>Method:</strong></p>
                <ol>
                    <li><strong>Find the gradient</strong>: \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\).</li>
                    <li><strong>Use point-gradient form</strong> with either point: \\(y - y_1 = m(x - x_1)\\).</li>
                </ol>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg"><defs><marker id="eqn2-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#444"/></marker></defs><line x1="40" y1="170" x2="300" y2="170" stroke="#444" stroke-width="0.5" marker-end="url(#eqn2-arrow)"/><line x1="40" y1="170" x2="40" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#eqn2-arrow)"/><text x="295" y="188" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">x</text><text x="20" y="20" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">y</text><line x1="60" y1="150" x2="270" y2="35" stroke="#00e5c7" stroke-width="2.5"/><circle cx="100" cy="128" r="4" fill="#54a0ff"/><circle cx="220" cy="62" r="4" fill="#54a0ff"/><text x="55" y="122" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">(x&#x2081;, y&#x2081;)</text><text x="225" y="56" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">(x&#x2082;, y&#x2082;)</text><text x="130" y="58" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">y = mx + c</text></svg></div>
                <div class="lesson-box">
                    It does not matter which point you use in step 2 - both give the same equation.
                </div>
            `
        },
        // Screen 8 - Example: Two Points
        {
            type: 'example',
            title: 'Equation from Two Points',
            problem: 'Find the equation of the line through \\((1, 5)\\) and \\((3, -1)\\).',
            steps: [
                { text: 'Find the gradient: \\(m = \\frac{-1 - 5}{3 - 1} = \\frac{-6}{2} = -3\\).' },
                { text: 'Use point-gradient form with \\((1, 5)\\): \\(y - 5 = -3(x - 1)\\).' },
                { text: 'Expand: \\(y - 5 = -3x + 3\\).' },
                { text: '\\(y = -3x + 8\\).' }
            ]
        },
        // Screen 9 - Practice: Two Points
        {
            type: 'practice',
            generate: function() {
                var x1 = Math.floor(Math.random() * 5) - 2;
                var x2 = x1 + Math.floor(Math.random() * 4) + 1;
                var m = Math.floor(Math.random() * 7) - 3;
                if (m === 0) m = 1;
                var y1 = Math.floor(Math.random() * 9) - 4;
                var y2 = y1 + m * (x2 - x1);
                var c = y1 - m * x1;
                var correctStr = 'y = ' + m + 'x' + (c === 0 ? '' : (c > 0 ? ' + ' + c : ' - ' + Math.abs(c)));
                var options = [
                    correctStr,
                    'y = ' + (-m) + 'x' + (c === 0 ? '' : (c > 0 ? ' + ' + c : ' - ' + Math.abs(c))),
                    'y = ' + m + 'x' + (c + 2 === 0 ? '' : (c + 2 > 0 ? ' + ' + (c + 2) : ' - ' + Math.abs(c + 2))),
                    'y = ' + (m + 1) + 'x' + (c === 0 ? '' : (c > 0 ? ' + ' + c : ' - ' + Math.abs(c)))
                ];
                options = [...new Set(options)];
                while (options.length < 4) options.push('y = ' + m + 'x + ' + (Math.abs(c) + options.length + 2));
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(correctStr);
                return {
                    type: 'mc',
                    latex: 'Find the equation of the line through \\((' + x1 + ', ' + y1 + ')\\) and \\((' + x2 + ', ' + y2 + ')\\).',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Gradient: \\(m = \\frac{' + y2 + ' - ' + (y1 < 0 ? '(' + y1 + ')' : y1) + '}{' + x2 + ' - ' + (x1 < 0 ? '(' + x1 + ')' : x1) + '} = ' + m + '\\). Then \\(y - ' + (y1 < 0 ? '(' + y1 + ')' : y1) + ' = ' + m + '(x - ' + (x1 < 0 ? '(' + x1 + ')' : x1) + ')\\) gives \\(' + correctStr + '\\).'
                };
            }
        },
        // Screen 10 - Concept: Rearranging Between Forms
        {
            type: 'concept',
            title: 'Rearranging Between Forms',
            content: `
                <p>You may need to rearrange an equation into a specific form:</p>
                <ul>
                    <li><strong>To \\(y = mx + c\\)</strong>: isolate \\(y\\) on the left.</li>
                    <li><strong>To \\(ax + by + c = 0\\)</strong>: move all terms to one side (integer coefficients, positive \\(a\\)).</li>
                </ul>
                <p><strong>Example:</strong> Rearrange \\(2x + 3y = 12\\) to gradient-intercept form:</p>
                <p>\\(3y = -2x + 12\\), so \\(y = -\\frac{2}{3}x + 4\\).</p>
                <div class="lesson-box">
                    When the question says "in the form \\(ax + by + c = 0\\)", make sure \\(a\\), \\(b\\), and \\(c\\) are integers with no common factor, and \\(a > 0\\).
                </div>
            `
        },
        // Screen 11 - Practice: Rearranging
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 5) + 1;
                var b = Math.floor(Math.random() * 5) + 1;
                if (a === b) b = a + 1;
                var c = Math.floor(Math.random() * 12) + 2;
                // Line: ax + by = c => y = (-a/b)x + c/b
                var mStr = (a % b === 0) ? '' + (-a / b) : '-\\frac{' + a + '}{' + b + '}';
                var cStr = (c % b === 0) ? '' + (c / b) : '\\frac{' + c + '}{' + b + '}';
                var correct = mStr;
                // Generate wrong answers
                var wrongs = [
                    (a % b === 0) ? '' + (a / b) : '\\frac{' + a + '}{' + b + '}',
                    (b % a === 0) ? '' + (-b / a) : '-\\frac{' + b + '}{' + a + '}',
                    (a % b === 0) ? '' + (-a / b - 1) : '-\\frac{' + (a + b) + '}{' + b + '}'
                ];
                var options = [correct, wrongs[0], wrongs[1], wrongs[2]];
                options = [...new Set(options)];
                while (options.length < 4) options.push('\\frac{' + (a + options.length) + '}{' + b + '}');
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'The line \\(' + a + 'x + ' + b + 'y = ' + c + '\\) has gradient:',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Rearrange: \\(' + b + 'y = -' + a + 'x + ' + c + '\\), so \\(y = ' + mStr + 'x + ' + cStr + '\\). The gradient is \\(' + mStr + '\\).'
                };
            }
        },
        // Screen 12 - Concept: Sketching Lines
        {
            type: 'concept',
            title: 'Sketching Lines from Equations',
            content: `
                <p>To sketch a line from its equation:</p>
                <ol>
                    <li><strong>Find the \\(y\\)-intercept</strong>: set \\(x = 0\\) and solve for \\(y\\).</li>
                    <li><strong>Find the \\(x\\)-intercept</strong>: set \\(y = 0\\) and solve for \\(x\\).</li>
                    <li>Plot these two points and draw a straight line through them.</li>
                </ol>
                <div class="lesson-box">
                    If you already know the line is \\(y = mx + c\\), the \\(y\\)-intercept is \\(c\\) and you can use the gradient to go "across 1, up \\(m\\)" from that point.
                </div>
                <p>For lines through the origin (\\(c = 0\\)), use the gradient and one other point instead.</p>
            `
        },
        // Screen 13 - Example: Sketching
        {
            type: 'example',
            title: 'Finding Intercepts for Sketching',
            problem: 'Find the \\(x\\)- and \\(y\\)-intercepts of the line \\(3x - 2y = 12\\).',
            steps: [
                { text: '\\(y\\)-intercept: set \\(x = 0\\). \\(3(0) - 2y = 12\\), so \\(y = -6\\). Point: \\((0, -6)\\).' },
                { text: '\\(x\\)-intercept: set \\(y = 0\\). \\(3x - 2(0) = 12\\), so \\(x = 4\\). Point: \\((4, 0)\\).' },
                { text: 'Plot \\((0, -6)\\) and \\((4, 0)\\) and draw a straight line through them.' }
            ]
        },
        // Screen 14 - Practice: y-intercept
        {
            type: 'practice',
            generate: function() {
                var m = Math.floor(Math.random() * 7) - 3;
                if (m === 0) m = 2;
                var c = Math.floor(Math.random() * 13) - 6;
                var options = [c, c + 1, c - 1, -c];
                options = [...new Set(options)];
                while (options.length < 4) options.push(c + options.length + 1);
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(c);
                return {
                    type: 'mc',
                    latex: 'What is the \\(y\\)-intercept of the line \\(y = ' + m + 'x' + (c >= 0 ? ' + ' + c : ' - ' + Math.abs(c)) + '\\)?',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'In \\(y = mx + c\\), the \\(y\\)-intercept is \\(c = ' + c + '\\). This is the value of \\(y\\) when \\(x = 0\\).'
                };
            }
        },
        // Screen 15 - Practice: Equation from Two Points (short answer)
        {
            type: 'practice',
            generate: function() {
                var x1 = 0;
                var y1 = Math.floor(Math.random() * 9) - 4;
                var dx = Math.floor(Math.random() * 3) + 1;
                var m = Math.floor(Math.random() * 7) - 3;
                if (m === 0) m = -2;
                var x2 = x1 + dx;
                var y2 = y1 + m * dx;
                var c = y1;
                var cPart = c === 0 ? '' : (c > 0 ? '+' + c : '' + c);
                var answer = m + 'x' + cPart;
                return {
                    type: 'short',
                    latex: 'Find the equation of the line through \\((' + x1 + ', ' + y1 + ')\\) and \\((' + x2 + ', ' + y2 + ')\\). Give your answer in the form \\(y = ...\\) (write only the right-hand side, e.g. 3x+2).',
                    answer: answer,
                    explain: 'Gradient: \\(m = \\frac{' + y2 + ' - ' + (y1 < 0 ? '(' + y1 + ')' : y1) + '}{' + x2 + ' - 0} = ' + m + '\\). Since the line passes through \\((0, ' + y1 + ')\\), the \\(y\\)-intercept is \\(' + y1 + '\\), giving \\(y = ' + m + 'x' + (c === 0 ? '' : (c > 0 ? ' + ' + c : ' - ' + Math.abs(c))) + '\\).'
                };
            }
        },
        // Screen 16 - Summary
        {
            type: 'summary',
            title: 'Summary: Equations of Straight Lines',
            content: '<p>You now have the tools to find and manipulate equations of straight lines in different forms.</p>',
            points: [
                'Gradient-intercept form: \\(y = mx + c\\) - read off gradient \\(m\\) and \\(y\\)-intercept \\(c\\).',
                'Point-gradient form: \\(y - y_1 = m(x - x_1)\\) - use when given a point and gradient.',
                'From two points: find the gradient first, then use point-gradient form.',
                'To sketch: find the \\(x\\)- and \\(y\\)-intercepts, or use the \\(y\\)-intercept and gradient.',
                'You can rearrange between forms by isolating \\(y\\) or collecting all terms on one side.'
            ]
        }
    ]
};
