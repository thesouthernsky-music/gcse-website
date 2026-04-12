window.CURRENT_LESSON = {
    title: "Distance, Midpoint & Gradient",
    subtitle: "Fundamental coordinate geometry tools",
    screens: [
        // Screen 1 - Concept: Introduction
        {
            type: 'concept',
            title: 'Coordinate Geometry Overview',
            content: `
                <p>Coordinate geometry gives us powerful algebraic tools for working with points, lines and shapes on the Cartesian plane.</p>
                <p>In this lesson we cover three fundamental calculations:</p>
                <ul>
                    <li><strong>Distance</strong> between two points</li>
                    <li><strong>Midpoint</strong> of a line segment</li>
                    <li><strong>Gradient</strong> (slope) of a line</li>
                </ul>
                <div class="lesson-box">
                    Every point in the plane is described by an ordered pair \\((x, y)\\). All three formulas take two points as input.
                </div>
            `
        },
        // Screen 2 - Concept: Distance Formula
        {
            type: 'concept',
            title: 'The Distance Formula',
            content: `
                <p>The distance between two points \\(A(x_1, y_1)\\) and \\(B(x_2, y_2)\\) is found using Pythagoras' theorem on the right-angled triangle formed by the horizontal and vertical differences.</p>
                <div class="lesson-box">
                    \\[ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\]
                </div>
                <p>The horizontal leg has length \\(|x_2 - x_1|\\) and the vertical leg has length \\(|y_2 - y_1|\\). The distance is the hypotenuse.</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg"><defs><marker id="dist-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#444"/></marker></defs><line x1="40" y1="170" x2="300" y2="170" stroke="#444" stroke-width="0.5" marker-end="url(#dist-arrow)"/><line x1="40" y1="170" x2="40" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#dist-arrow)"/><text x="295" y="188" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">x</text><text x="20" y="20" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">y</text><circle cx="80" cy="140" r="4" fill="#54a0ff"/><circle cx="240" cy="40" r="4" fill="#54a0ff"/><text x="55" y="155" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">A(x&#x2081;, y&#x2081;)</text><text x="195" y="33" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">B(x&#x2082;, y&#x2082;)</text><line x1="80" y1="140" x2="240" y2="140" stroke="#feca57" stroke-width="2" stroke-dasharray="6 4"/><line x1="240" y1="140" x2="240" y2="40" stroke="#feca57" stroke-width="2" stroke-dasharray="6 4"/><line x1="80" y1="140" x2="240" y2="40" stroke="#00e5c7" stroke-width="2.5"/><text x="135" y="160" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">|x&#x2082; - x&#x2081;|</text><text x="248" y="95" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">|y&#x2082; - y&#x2081;|</text><text x="120" y="82" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#00e5c7">d</text><rect x="228" y="128" width="12" height="12" fill="none" stroke="#feca57" stroke-width="1"/></svg></div>
                <p>Because we square the differences, it does not matter which point you call \\((x_1, y_1)\\) and which you call \\((x_2, y_2)\\).</p>
            `
        },
        // Screen 3 - Example: Distance
        {
            type: 'example',
            title: 'Finding the Distance Between Two Points',
            problem: 'Find the distance between \\(A(1, 3)\\) and \\(B(4, 7)\\).',
            steps: [
                { text: 'Identify the coordinates: \\(x_1 = 1,\\; y_1 = 3,\\; x_2 = 4,\\; y_2 = 7\\).' },
                { text: 'Substitute into the distance formula: \\(d = \\sqrt{(4-1)^2 + (7-3)^2}\\).' },
                { text: '\\(d = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16}\\).' },
                { text: '\\(d = \\sqrt{25} = 5\\).' }
            ]
        },
        // Screen 4 - Practice: Distance
        {
            type: 'practice',
            generate: function() {
                var x1 = Math.floor(Math.random() * 9) - 4;
                var y1 = Math.floor(Math.random() * 9) - 4;
                var dx = Math.floor(Math.random() * 5) + 1;
                var dy = Math.floor(Math.random() * 5) + 1;
                var x2 = x1 + dx;
                var y2 = y1 + dy;
                var distSq = dx * dx + dy * dy;
                var dist = Math.sqrt(distSq);
                var isInteger = dist === Math.floor(dist);
                var answer = isInteger ? '' + dist : '\\sqrt{' + distSq + '}';
                var displayAnswer = isInteger ? '\\(' + dist + '\\)' : '\\(\\sqrt{' + distSq + '}\\)';
                var wrong1 = distSq + 1;
                var wrong2 = distSq - 1 > 0 ? distSq - 1 : distSq + 3;
                var wrong3 = dx + dy;
                var options, correctIdx;
                if (isInteger) {
                    options = [dist, dist + 1, dist - 1 > 0 ? dist - 1 : dist + 2, Math.abs(dx) + Math.abs(dy)];
                    options = [...new Set(options)];
                    while (options.length < 4) options.push(dist + options.length);
                    for (var i = options.length - 1; i > 0; i--) {
                        var j = Math.floor(Math.random() * (i + 1));
                        var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                    }
                    correctIdx = options.indexOf(dist);
                    return {
                        type: 'mc',
                        latex: 'Find the distance between \\((' + x1 + ', ' + y1 + ')\\) and \\((' + x2 + ', ' + y2 + ')\\).',
                        options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                        correctIdx: correctIdx,
                        explain: '\\(d = \\sqrt{(' + x2 + '-' + (x1 < 0 ? '(' + x1 + ')' : x1) + ')^2 + (' + y2 + '-' + (y1 < 0 ? '(' + y1 + ')' : y1) + ')^2} = \\sqrt{' + (dx * dx) + ' + ' + (dy * dy) + '} = ' + dist + '\\).'
                    };
                } else {
                    options = [distSq, wrong1, wrong2, wrong3 * wrong3];
                    options = [...new Set(options)];
                    while (options.length < 4) options.push(distSq + options.length + 1);
                    for (var i = options.length - 1; i > 0; i--) {
                        var j = Math.floor(Math.random() * (i + 1));
                        var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                    }
                    correctIdx = options.indexOf(distSq);
                    return {
                        type: 'mc',
                        latex: 'Find the distance between \\((' + x1 + ', ' + y1 + ')\\) and \\((' + x2 + ', ' + y2 + ')\\). Give an exact answer.',
                        options: options.map(function(o) { return '\\(\\sqrt{' + o + '}\\)'; }),
                        correctIdx: correctIdx,
                        explain: '\\(d = \\sqrt{(' + x2 + '-' + (x1 < 0 ? '(' + x1 + ')' : x1) + ')^2 + (' + y2 + '-' + (y1 < 0 ? '(' + y1 + ')' : y1) + ')^2} = \\sqrt{' + (dx * dx) + ' + ' + (dy * dy) + '} = \\sqrt{' + distSq + '}\\).'
                    };
                }
            }
        },
        // Screen 5 - Concept: Midpoint Formula
        {
            type: 'concept',
            title: 'The Midpoint Formula',
            content: `
                <p>The midpoint of a line segment is the point exactly halfway between the two endpoints.</p>
                <div class="lesson-box">
                    \\[ M = \\left(\\frac{x_1 + x_2}{2},\\; \\frac{y_1 + y_2}{2}\\right) \\]
                </div>
                <p>To find the midpoint, we simply <strong>average</strong> the \\(x\\)-coordinates and average the \\(y\\)-coordinates.</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg"><defs><marker id="mid-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#444"/></marker></defs><line x1="40" y1="170" x2="300" y2="170" stroke="#444" stroke-width="0.5" marker-end="url(#mid-arrow)"/><line x1="40" y1="170" x2="40" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#mid-arrow)"/><text x="295" y="188" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">x</text><text x="20" y="20" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">y</text><circle cx="80" cy="145" r="4" fill="#54a0ff"/><circle cx="250" cy="45" r="4" fill="#54a0ff"/><circle cx="165" cy="95" r="5" fill="#00e5c7"/><line x1="80" y1="145" x2="250" y2="45" stroke="#54a0ff" stroke-width="2"/><line x1="165" y1="95" x2="165" y2="170" stroke="#feca57" stroke-width="1" stroke-dasharray="4 3"/><line x1="40" y1="95" x2="165" y2="95" stroke="#feca57" stroke-width="1" stroke-dasharray="4 3"/><text x="55" y="160" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">A(x&#x2081;, y&#x2081;)</text><text x="215" y="38" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">B(x&#x2082;, y&#x2082;)</text><text x="170" y="108" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#00e5c7">M</text></svg></div>
                <p>This works because the midpoint is at equal distances from both endpoints along each axis.</p>
            `
        },
        // Screen 6 - Example: Midpoint
        {
            type: 'example',
            title: 'Finding the Midpoint',
            problem: 'Find the midpoint of \\(A(-2, 5)\\) and \\(B(6, 1)\\).',
            steps: [
                { text: 'Average the \\(x\\)-coordinates: \\(\\frac{-2 + 6}{2} = \\frac{4}{2} = 2\\).' },
                { text: 'Average the \\(y\\)-coordinates: \\(\\frac{5 + 1}{2} = \\frac{6}{2} = 3\\).' },
                { text: 'So the midpoint is \\(M(2, 3)\\).' }
            ]
        },
        // Screen 7 - Practice: Midpoint
        {
            type: 'practice',
            generate: function() {
                var x1 = Math.floor(Math.random() * 12) - 5;
                var y1 = Math.floor(Math.random() * 12) - 5;
                var x2 = x1 + 2 * (Math.floor(Math.random() * 5) + 1);
                var y2 = y1 + 2 * (Math.floor(Math.random() * 5) + 1) * (Math.random() < 0.5 ? 1 : -1);
                var mx = (x1 + x2) / 2;
                var my = (y1 + y2) / 2;
                var correctStr = '(' + mx + ', ' + my + ')';
                var options = [
                    '(' + mx + ', ' + my + ')',
                    '(' + (mx + 1) + ', ' + my + ')',
                    '(' + mx + ', ' + (my - 1) + ')',
                    '(' + (x2 - x1) + ', ' + (y2 - y1) + ')'
                ];
                options = [...new Set(options)];
                while (options.length < 4) options.push('(' + (mx + options.length) + ', ' + (my + options.length) + ')');
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(correctStr);
                return {
                    type: 'mc',
                    latex: 'Find the midpoint of \\((' + x1 + ', ' + y1 + ')\\) and \\((' + x2 + ', ' + y2 + ')\\).',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: '\\(M = \\left(\\frac{' + x1 + ' + ' + x2 + '}{2},\\; \\frac{' + y1 + ' + ' + (y2 < 0 ? '(' + y2 + ')' : y2) + '}{2}\\right) = (' + mx + ', ' + my + ')\\).'
                };
            }
        },
        // Screen 8 - Concept: Gradient Introduction
        {
            type: 'concept',
            title: 'What is Gradient?',
            content: `
                <p>The <strong>gradient</strong> (or slope) of a line measures how steep it is. It tells us how much the \\(y\\)-value changes for each unit increase in \\(x\\).</p>
                <div class="lesson-box">
                    \\[ m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}} \\]
                </div>
                <p>The gradient is the ratio of the vertical change (rise) to the horizontal change (run) between any two points on the line.</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg"><defs><marker id="grad-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#444"/></marker></defs><line x1="30" y1="100" x2="300" y2="100" stroke="#444" stroke-width="0.5" marker-end="url(#grad-arrow)"/><line x1="160" y1="190" x2="160" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#grad-arrow)"/><text x="290" y="118" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">x</text><text x="140" y="20" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">y</text><line x1="60" y1="160" x2="260" y2="30" stroke="#00e5c7" stroke-width="2.5"/><line x1="60" y1="40" x2="260" y2="170" stroke="#ff6b6b" stroke-width="2.5"/><text x="245" y="25" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">m &gt; 0</text><text x="245" y="185" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b">m &lt; 0</text></svg></div>
                <p>A larger absolute value of \\(m\\) means a steeper line.</p>
            `
        },
        // Screen 9 - Concept: Types of Gradient
        {
            type: 'concept',
            title: 'Positive, Negative, Zero & Undefined Gradients',
            content: `
                <p>The sign of the gradient tells us the direction of the line:</p>
                <ul>
                    <li><strong>Positive gradient</strong> (\\(m > 0\\)): line goes uphill from left to right.</li>
                    <li><strong>Negative gradient</strong> (\\(m < 0\\)): line goes downhill from left to right.</li>
                    <li><strong>Zero gradient</strong> (\\(m = 0\\)): the line is horizontal.</li>
                    <li><strong>Undefined gradient</strong>: the line is vertical (division by zero since \\(x_2 = x_1\\)).</li>
                </ul>
                <div class="lesson-box">
                    A horizontal line has equation \\(y = c\\) and gradient 0.<br>
                    A vertical line has equation \\(x = c\\) and its gradient is undefined.
                </div>
            `
        },
        // Screen 10 - Concept: Gradient as Rate of Change
        {
            type: 'concept',
            title: 'Gradient as Rate of Change',
            content: `
                <p>In real-world contexts, the gradient represents a <strong>rate of change</strong>.</p>
                <p>For example:</p>
                <ul>
                    <li>On a distance-time graph, gradient = speed.</li>
                    <li>On a cost vs quantity graph, gradient = price per item.</li>
                    <li>On a temperature vs time graph, gradient = rate of heating or cooling.</li>
                </ul>
                <div class="lesson-box">
                    The gradient \\(m = \\frac{\\Delta y}{\\Delta x}\\) always means "the change in \\(y\\) per unit change in \\(x\\)".
                </div>
                <p>The units of the gradient are the units of \\(y\\) divided by the units of \\(x\\).</p>
            `
        },
        // Screen 11 - Example: Gradient
        {
            type: 'example',
            title: 'Finding the Gradient',
            problem: 'Find the gradient of the line through \\(A(2, -1)\\) and \\(B(5, 8)\\).',
            steps: [
                { text: 'Identify the coordinates: \\(x_1 = 2,\\; y_1 = -1,\\; x_2 = 5,\\; y_2 = 8\\).' },
                { text: 'Substitute into the gradient formula: \\(m = \\frac{8 - (-1)}{5 - 2}\\).' },
                { text: '\\(m = \\frac{9}{3} = 3\\).' },
                { text: 'The gradient is 3, meaning the line rises 3 units for every 1 unit across.' }
            ]
        },
        // Screen 12 - Practice: Gradient
        {
            type: 'practice',
            generate: function() {
                var x1 = Math.floor(Math.random() * 7) - 3;
                var y1 = Math.floor(Math.random() * 9) - 4;
                var dx = Math.floor(Math.random() * 5) + 1;
                var dy = (Math.floor(Math.random() * 9) - 4);
                if (dy === 0) dy = 1;
                var x2 = x1 + dx;
                var y2 = y1 + dy;
                var g = function(a, b) { return b === 0 ? a : g(b, a % b); };
                var gcdVal = Math.abs(g(dy, dx));
                var num = dy / gcdVal;
                var den = dx / gcdVal;
                var answer = den === 1 ? '' + num : num + '/' + den;
                var displayAnswer = den === 1 ? '' + num : '\\frac{' + num + '}{' + den + '}';
                return {
                    type: 'short',
                    latex: 'Find the gradient of the line through \\((' + x1 + ', ' + y1 + ')\\) and \\((' + x2 + ', ' + y2 + ')\\). Give your answer as a fraction or integer.',
                    answer: answer,
                    explain: '\\(m = \\frac{' + y2 + ' - ' + (y1 < 0 ? '(' + y1 + ')' : y1) + '}{' + x2 + ' - ' + (x1 < 0 ? '(' + x1 + ')' : x1) + '} = \\frac{' + dy + '}{' + dx + '} = ' + displayAnswer + '\\).'
                };
            }
        },
        // Screen 13 - Concept: Combining the Tools
        {
            type: 'concept',
            title: 'Combining Distance, Midpoint & Gradient',
            content: `
                <p>Many problems require using two or more of these formulas together.</p>
                <p>Common combined tasks include:</p>
                <ul>
                    <li>Showing a triangle is right-angled (calculate distances and check Pythagoras).</li>
                    <li>Finding the equation of a perpendicular bisector (midpoint + gradient).</li>
                    <li>Proving a quadrilateral is a parallelogram (equal gradients for opposite sides).</li>
                    <li>Checking if a point lies on a line segment (distance check).</li>
                </ul>
                <div class="lesson-box">
                    Always identify what the question is asking for, then decide which formula(s) you need.
                </div>
            `
        },
        // Screen 14 - Example: Combined Problem
        {
            type: 'example',
            title: 'A Combined Problem',
            problem: 'The points \\(P(1, 2)\\) and \\(Q(7, 10)\\) are the endpoints of a diameter of a circle. Find the centre and radius of the circle.',
            steps: [
                { text: 'The centre is the midpoint of the diameter: \\(C = \\left(\\frac{1+7}{2},\\; \\frac{2+10}{2}\\right) = (4, 6)\\).' },
                { text: 'The radius is half the length of the diameter.' },
                { text: 'Length of diameter: \\(d = \\sqrt{(7-1)^2 + (10-2)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\).' },
                { text: 'So the radius is \\(\\frac{10}{2} = 5\\).' }
            ]
        },
        // Screen 15 - Practice: Combined
        {
            type: 'practice',
            generate: function() {
                var cx = Math.floor(Math.random() * 7) - 3;
                var cy = Math.floor(Math.random() * 7) - 3;
                var dx = Math.floor(Math.random() * 4) + 1;
                var dy = Math.floor(Math.random() * 4) + 1;
                var x1 = cx - dx;
                var y1 = cy - dy;
                var x2 = cx + dx;
                var y2 = cy + dy;
                var correctStr = '(' + cx + ', ' + cy + ')';
                var options = [
                    '(' + cx + ', ' + cy + ')',
                    '(' + (cx + 1) + ', ' + (cy + 1) + ')',
                    '(' + (cx - 1) + ', ' + cy + ')',
                    '(' + (2 * dx) + ', ' + (2 * dy) + ')'
                ];
                options = [...new Set(options)];
                while (options.length < 4) options.push('(' + (cx + options.length) + ', ' + (cy - options.length) + ')');
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(correctStr);
                return {
                    type: 'mc',
                    latex: '\\(A(' + x1 + ', ' + y1 + ')\\) and \\(B(' + x2 + ', ' + y2 + ')\\) are endpoints of a diameter. Find the centre of the circle.',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'The centre is the midpoint: \\(\\left(\\frac{' + x1 + '+' + x2 + '}{2},\\; \\frac{' + y1 + '+' + y2 + '}{2}\\right) = (' + cx + ', ' + cy + ')\\).'
                };
            }
        },
        // Screen 16 - Practice: Gradient Sign
        {
            type: 'practice',
            generate: function() {
                var types = [
                    { desc: 'goes uphill from left to right', answer: 'Positive' },
                    { desc: 'goes downhill from left to right', answer: 'Negative' },
                    { desc: 'is horizontal', answer: 'Zero' },
                    { desc: 'is vertical', answer: 'Undefined' }
                ];
                var chosen = types[Math.floor(Math.random() * types.length)];
                var options = ['Positive', 'Negative', 'Zero', 'Undefined'];
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(chosen.answer);
                return {
                    type: 'mc',
                    latex: 'A line ' + chosen.desc + '. What type of gradient does it have?',
                    options: options,
                    correctIdx: correctIdx,
                    explain: 'A line that ' + chosen.desc + ' has a <strong>' + chosen.answer.toLowerCase() + '</strong> gradient.'
                };
            }
        },
        // Screen 17 - Summary
        {
            type: 'summary',
            title: 'Summary: Distance, Midpoint & Gradient',
            content: '<p>You have learned three fundamental coordinate geometry formulas and how to combine them to solve problems.</p>',
            points: [
                'Distance: \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)',
                'Midpoint: \\(M = \\left(\\frac{x_1 + x_2}{2},\\; \\frac{y_1 + y_2}{2}\\right)\\)',
                'Gradient: \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\)',
                'Positive gradient = uphill, negative = downhill, zero = horizontal, undefined = vertical.',
                'Gradient represents a rate of change - the change in \\(y\\) per unit change in \\(x\\).'
            ]
        }
    ]
};
