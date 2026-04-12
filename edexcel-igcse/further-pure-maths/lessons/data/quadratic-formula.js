window.CURRENT_LESSON = {
    title: "The Quadratic Formula & Discriminant",
    subtitle: "Solving any quadratic and analysing its roots",
    screens: [
        // --- CONCEPT SCREENS ---
        {
            type: 'concept',
            title: 'The Quadratic Formula',
            content: `
                <p>Every quadratic equation \\(ax^2 + bx + c = 0\\) can be solved using the <strong>quadratic formula</strong>:</p>
                <div class="lesson-box">
                    \\[x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\]
                </div>
                <p>This formula works for <em>any</em> quadratic, whether or not it factorises neatly. It is derived by completing the square on the general quadratic.</p>
                <p>The \\(\\pm\\) means we get two solutions: one using \\(+\\) and one using \\(-\\).</p>
            `
        },
        {
            type: 'concept',
            title: 'When to Use the Formula',
            content: `
                <p>Use the quadratic formula when:</p>
                <ul>
                    <li>The quadratic does <strong>not factorise</strong> with integer factors</li>
                    <li>You need solutions as <strong>decimals or surds</strong></li>
                    <li>The question explicitly asks for the formula</li>
                </ul>
                <div class="lesson-box warning">
                    <strong>Common mistake:</strong> Forgetting to rearrange to \\(ax^2 + bx + c = 0\\) first. The formula only works when the right-hand side is zero.
                </div>
                <p>Always identify \\(a\\), \\(b\\), and \\(c\\) carefully before substituting - pay special attention to negative signs.</p>
            `
        },
        {
            type: 'concept',
            title: 'Using the Formula Step by Step',
            content: `
                <p>To solve \\(ax^2 + bx + c = 0\\):</p>
                <div class="lesson-box">
                    <ol>
                        <li>Identify \\(a\\), \\(b\\), and \\(c\\)</li>
                        <li>Calculate the discriminant: \\(b^2 - 4ac\\)</li>
                        <li>Substitute into \\(x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\)</li>
                        <li>Evaluate both solutions (\\(+\\) and \\(-\\))</li>
                        <li>Round or simplify as required</li>
                    </ol>
                </div>
                <div class="lesson-box warning">
                    <strong>Common mistake:</strong> The \\(-b\\) means the <em>negative</em> of \\(b\\). If \\(b = -3\\), then \\(-b = 3\\). Watch the double negative!
                </div>
            `
        },
        {
            type: 'concept',
            title: 'The Discriminant',
            content: `
                <p>The expression under the square root is called the <strong>discriminant</strong>:</p>
                <div class="lesson-box">
                    \\[\\Delta = b^2 - 4ac\\]
                </div>
                <p>The discriminant tells us about the <strong>nature of the roots</strong> before we solve. It determines how many times the parabola crosses the \\(x\\)-axis.</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><text x="160" y="16" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0" font-weight="bold">Three discriminant cases</text><g transform="translate(10,30)"><line x1="5" y1="100" x2="85" y2="100" stroke="#444" stroke-width="0.5"/><path d="M15 20 Q25 40 35 60 Q45 85 50 95 Q55 85 60 70 Q70 40 85 20" stroke="#00e5c7" stroke-width="2.5" fill="none"/><circle cx="35" cy="100" r="4" fill="#feca57"/><circle cx="65" cy="100" r="4" fill="#feca57"/><text x="45" y="125" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#00e5c7" font-weight="bold">b^2-4ac > 0</text><text x="45" y="140" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">two roots</text></g><g transform="translate(115,30)"><line x1="5" y1="100" x2="85" y2="100" stroke="#444" stroke-width="0.5"/><path d="M15 20 Q25 40 35 60 Q45 90 50 100 Q55 90 60 70 Q70 40 85 20" stroke="#54a0ff" stroke-width="2.5" fill="none"/><circle cx="50" cy="100" r="4" fill="#feca57"/><text x="45" y="125" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff" font-weight="bold">b^2-4ac = 0</text><text x="45" y="140" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">one root</text></g><g transform="translate(220,30)"><line x1="5" y1="100" x2="85" y2="100" stroke="#444" stroke-width="0.5"/><path d="M15 20 Q25 35 35 50 Q45 68 50 75 Q55 68 60 55 Q70 35 85 20" stroke="#ff6b6b" stroke-width="2.5" fill="none"/><text x="45" y="125" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#ff6b6b" font-weight="bold">b^2-4ac < 0</text><text x="45" y="140" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">no roots</text></g><text x="55" y="200" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#00e5c7">crosses axis</text><text x="55" y="212" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#00e5c7">twice</text><text x="160" y="200" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#54a0ff">touches axis</text><text x="160" y="212" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#54a0ff">once</text><text x="265" y="200" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#ff6b6b">misses axis</text><text x="265" y="212" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#ff6b6b">entirely</text></svg></div>
                <p>This is one of the most important tools in Further Pure Maths for analysing quadratics without solving them.</p>
            `
        },
        {
            type: 'concept',
            title: 'Discriminant > 0: Two Distinct Real Roots',
            content: `
                <p>When \\(b^2 - 4ac > 0\\):</p>
                <div class="lesson-box">
                    The quadratic has <strong>two distinct (different) real roots</strong>.
                    \\[x_1 = \\frac{-b + \\sqrt{\\Delta}}{2a} \\qquad x_2 = \\frac{-b - \\sqrt{\\Delta}}{2a}\\]
                </div>
                <p>Graphically, the parabola crosses the \\(x\\)-axis at <strong>two</strong> points.</p>
                <p>Example: \\(x^2 - 5x + 6 = 0\\) has \\(\\Delta = 25 - 24 = 1 > 0\\), so two distinct roots (\\(x = 2\\) and \\(x = 3\\)).</p>
            `
        },
        {
            type: 'concept',
            title: 'Discriminant = 0: Two Equal (Repeated) Roots',
            content: `
                <p>When \\(b^2 - 4ac = 0\\):</p>
                <div class="lesson-box">
                    The quadratic has <strong>two equal roots</strong> (also called a repeated root):
                    \\[x = \\frac{-b}{2a}\\]
                </div>
                <p>Graphically, the parabola just <strong>touches</strong> the \\(x\\)-axis at one point (the vertex).</p>
                <p>Example: \\(x^2 - 6x + 9 = 0\\) has \\(\\Delta = 36 - 36 = 0\\), so one repeated root (\\(x = 3\\)).</p>
            `
        },
        {
            type: 'concept',
            title: 'Discriminant < 0: No Real Roots',
            content: `
                <p>When \\(b^2 - 4ac < 0\\):</p>
                <div class="lesson-box">
                    The quadratic has <strong>no real roots</strong>.
                </div>
                <p>We cannot take the square root of a negative number (in real numbers), so the formula gives no solution.</p>
                <p>Graphically, the parabola does <strong>not cross or touch</strong> the \\(x\\)-axis at all.</p>
                <p>Example: \\(x^2 + 2x + 5 = 0\\) has \\(\\Delta = 4 - 20 = -16 < 0\\), so no real roots.</p>
            `
        },
        {
            type: 'concept',
            title: 'Finding \\(k\\) for Specific Root Conditions',
            content: `
                <p>A common exam question gives a quadratic with an unknown constant \\(k\\) and asks for conditions on \\(k\\).</p>
                <div class="lesson-box">
                    <p>For \\(ax^2 + bx + c = 0\\) (where \\(a\\), \\(b\\), or \\(c\\) involve \\(k\\)):</p>
                    <ul>
                        <li>Two distinct real roots: set \\(b^2 - 4ac > 0\\) and solve the inequality</li>
                        <li>Equal roots: set \\(b^2 - 4ac = 0\\) and solve for \\(k\\)</li>
                        <li>No real roots: set \\(b^2 - 4ac < 0\\) and solve the inequality</li>
                    </ul>
                </div>
                <p>Example: For \\(x^2 + kx + 9 = 0\\) to have equal roots: \\(k^2 - 36 = 0\\), so \\(k = \\pm 6\\).</p>
            `
        },
        // --- EXAMPLE SCREENS ---
        {
            type: 'example',
            title: 'Example: Solve \\(2x^2 + 3x - 1 = 0\\)',
            problem: 'Solve \\(2x^2 + 3x - 1 = 0\\), giving answers to 2 decimal places.',
            steps: [
                { text: 'Identify: \\(a = 2\\), \\(b = 3\\), \\(c = -1\\).' },
                { text: 'Discriminant: \\(b^2 - 4ac = 9 - 4(2)(-1) = 9 + 8 = 17\\).' },
                { text: 'Since \\(17 > 0\\), there are two distinct real roots.' },
                { text: '\\(x = \\dfrac{-3 \\pm \\sqrt{17}}{2(2)} = \\dfrac{-3 \\pm \\sqrt{17}}{4}\\)' },
                { text: '\\(x = \\dfrac{-3 + 4.123\\ldots}{4} = 0.28\\) (2 d.p.)' },
                { text: '\\(x = \\dfrac{-3 - 4.123\\ldots}{4} = -1.78\\) (2 d.p.)' }
            ]
        },
        {
            type: 'example',
            title: 'Example: Discriminant and Nature of Roots',
            problem: 'Find the discriminant of \\(3x^2 - 2x + 5 = 0\\) and state the nature of its roots.',
            steps: [
                { text: 'Identify: \\(a = 3\\), \\(b = -2\\), \\(c = 5\\).' },
                { text: '\\(\\Delta = b^2 - 4ac = (-2)^2 - 4(3)(5) = 4 - 60 = -56\\).' },
                { text: 'Since \\(\\Delta = -56 < 0\\), the equation has <strong>no real roots</strong>.' },
                { text: 'The parabola \\(y = 3x^2 - 2x + 5\\) does not cross the \\(x\\)-axis.' }
            ]
        },
        {
            type: 'example',
            title: 'Example: Find \\(k\\) for Equal Roots',
            problem: 'Find the values of \\(k\\) for which \\(x^2 + kx + 16 = 0\\) has equal roots.',
            steps: [
                { text: 'For equal roots, \\(\\Delta = 0\\).' },
                { text: '\\(b^2 - 4ac = k^2 - 4(1)(16) = k^2 - 64 = 0\\).' },
                { text: '\\(k^2 = 64\\).' },
                { text: '\\(k = \\pm 8\\).' }
            ]
        },
        // --- PRACTICE SCREENS ---
        {
            type: 'practice',
            generate: function() {
                // Solve using formula, give answers to 2dp
                var a = Math.random() < 0.5 ? 2 : 3;
                var b = Math.floor(Math.random() * 9) - 4; // -4 to 4
                if (b === 0) b = 1;
                var discriminant = -1;
                var c;
                // Ensure positive discriminant
                while (discriminant <= 0) {
                    c = Math.floor(Math.random() * 9) - 4;
                    if (c === 0) c = -1;
                    discriminant = b * b - 4 * a * c;
                }
                var sqrtD = Math.sqrt(discriminant);
                var x1 = (-b + sqrtD) / (2 * a);
                var x2 = (-b - sqrtD) / (2 * a);
                x1 = Math.round(x1 * 100) / 100;
                x2 = Math.round(x2 * 100) / 100;
                var small = Math.min(x1, x2);
                var big = Math.max(x1, x2);

                var bStr = b > 0 ? '+ ' + b : '- ' + Math.abs(b);
                var cStr = c > 0 ? '+ ' + c : '- ' + Math.abs(c);

                var correct = 'x = ' + small.toFixed(2) + ' or x = ' + big.toFixed(2);
                var w1 = 'x = ' + (small + 0.1).toFixed(2) + ' or x = ' + (big - 0.1).toFixed(2);
                var w2 = 'x = ' + (-small).toFixed(2) + ' or x = ' + (-big).toFixed(2);
                var w3 = 'x = ' + (small - 0.5).toFixed(2) + ' or x = ' + (big + 0.5).toFixed(2);

                var options = [correct, w1, w2, w3];
                var unique = [correct];
                for (var k = 1; k < options.length; k++) {
                    if (unique.indexOf(options[k]) === -1) unique.push(options[k]);
                }
                while (unique.length < 4) unique.push('x = ' + (small + 1).toFixed(2) + ' or x = ' + (big - 1).toFixed(2));
                options = unique.slice(0, 4);

                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = options[i]; options[i] = options[j]; options[j] = temp;
                }

                return {
                    type: 'mc',
                    latex: 'Solve \\ ' + a + 'x^2 ' + bStr + 'x ' + cStr + ' = 0 \\ \\text{(2 d.p.)}',
                    options: options,
                    correctIdx: options.indexOf(correct),
                    answer: correct,
                    explain: 'Using the formula with \\(a = ' + a + '\\), \\(b = ' + b + '\\), \\(c = ' + c + '\\): discriminant \\(= ' + discriminant + '\\). \\(x = \\dfrac{' + (-b) + ' \\pm \\sqrt{' + discriminant + '}}{' + (2 * a) + '}\\), giving \\(x = ' + big.toFixed(2) + '\\) or \\(x = ' + small.toFixed(2) + '\\).'
                };
            }
        },
        {
            type: 'practice',
            generate: function() {
                // Find discriminant and state nature
                var a = Math.floor(Math.random() * 3) + 1; // 1 to 3
                var b = Math.floor(Math.random() * 11) - 5; // -5 to 5
                // Randomly choose type of discriminant
                var type = Math.floor(Math.random() * 3); // 0=positive, 1=zero, 2=negative
                var c, discriminant;
                if (type === 0) {
                    // Positive discriminant
                    do {
                        c = Math.floor(Math.random() * 9) - 4;
                        discriminant = b * b - 4 * a * c;
                    } while (discriminant <= 0);
                } else if (type === 1) {
                    // Zero discriminant: c = b^2 / (4a)
                    if ((b * b) % (4 * a) === 0) {
                        c = (b * b) / (4 * a);
                    } else {
                        // fallback to positive
                        c = 0;
                    }
                    discriminant = b * b - 4 * a * c;
                } else {
                    // Negative discriminant
                    do {
                        c = Math.floor(Math.random() * 8) + 1;
                        discriminant = b * b - 4 * a * c;
                    } while (discriminant >= 0);
                }

                var nature;
                if (discriminant > 0) nature = 'Two distinct real roots';
                else if (discriminant === 0) nature = 'Two equal (repeated) roots';
                else nature = 'No real roots';

                var bStr = b > 0 ? '+ ' + b : b === 0 ? '' : '- ' + Math.abs(b);
                var cStr = c > 0 ? '+ ' + c : c === 0 ? '' : '- ' + Math.abs(c);

                var options = ['Two distinct real roots', 'Two equal (repeated) roots', 'No real roots'];
                // Add a distractor
                options.push('One real root and one complex root');
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = options[i]; options[i] = options[j]; options[j] = temp;
                }

                return {
                    type: 'mc',
                    latex: 'State the nature of the roots of \\ ' + (a === 1 ? '' : a) + 'x^2 ' + bStr + 'x ' + cStr + ' = 0',
                    options: options,
                    correctIdx: options.indexOf(nature),
                    answer: nature,
                    explain: '\\(\\Delta = (' + b + ')^2 - 4(' + a + ')(' + c + ') = ' + (b * b) + ' - ' + (4 * a * c) + ' = ' + discriminant + '\\). Since \\(\\Delta ' + (discriminant > 0 ? '> 0' : discriminant === 0 ? '= 0' : '< 0') + '\\), there are <strong>' + nature.toLowerCase() + '</strong>.'
                };
            }
        },
        {
            type: 'practice',
            generate: function() {
                // Find discriminant value
                var a = Math.floor(Math.random() * 3) + 1;
                var b = Math.floor(Math.random() * 13) - 6;
                var c = Math.floor(Math.random() * 13) - 6;
                if (b === 0) b = 3;
                var disc = b * b - 4 * a * c;

                var bStr = b > 0 ? '+ ' + b : '- ' + Math.abs(b);
                var cStr = c > 0 ? '+ ' + c : c === 0 ? '' : '- ' + Math.abs(c);

                return {
                    type: 'short',
                    latex: 'Find the discriminant of \\ ' + (a === 1 ? '' : a) + 'x^2 ' + bStr + 'x ' + cStr + ' = 0',
                    answer: '' + disc,
                    explain: '\\(\\Delta = b^2 - 4ac = (' + b + ')^2 - 4(' + a + ')(' + c + ') = ' + (b * b) + ' - ' + (4 * a * c) + ' = ' + disc + '\\).'
                };
            }
        },
        {
            type: 'practice',
            generate: function() {
                // Find k for equal roots: x^2 + kx + c = 0
                var c = Math.floor(Math.random() * 6) + 1; // 1 to 6
                c = c * c; // perfect square so k is integer: k^2 = 4c => k = +/- 2*sqrt(c)
                var sqrtC = Math.round(Math.sqrt(c));
                var k = 2 * sqrtC;
                var correct = 'k = ' + k + ' or k = -' + k;
                if (k === 0) {
                    c = 4;
                    sqrtC = 2;
                    k = 4;
                    correct = 'k = 4 or k = -4';
                }

                var options = [
                    correct,
                    'k = ' + k,
                    'k = ' + (k + 2) + ' or k = -' + (k + 2),
                    'k = ' + sqrtC + ' or k = -' + sqrtC
                ];
                var unique = [correct];
                for (var i = 1; i < options.length; i++) {
                    if (unique.indexOf(options[i]) === -1) unique.push(options[i]);
                }
                while (unique.length < 4) unique.push('k = ' + (k - 1) + ' or k = -' + (k - 1));
                options = unique.slice(0, 4);

                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = options[i]; options[i] = options[j]; options[j] = temp;
                }

                return {
                    type: 'mc',
                    latex: 'Find the values of \\(k\\) for which \\ x^2 + kx + ' + c + ' = 0 \\ has equal roots.',
                    options: options,
                    correctIdx: options.indexOf(correct),
                    answer: correct,
                    explain: 'For equal roots, \\(\\Delta = 0\\): \\(k^2 - 4(1)(' + c + ') = 0\\), so \\(k^2 = ' + (4 * c) + '\\), giving \\(k = \\pm ' + k + '\\).'
                };
            }
        },
        // --- SUMMARY ---
        {
            type: 'summary',
            title: 'The Quadratic Formula & Discriminant - Summary',
            content: '<p>You can now solve any quadratic using the formula and analyse roots using the discriminant.</p>',
            points: [
                'The quadratic formula: \\(x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\)',
                'Always rearrange to \\(ax^2 + bx + c = 0\\) before using the formula',
                'The discriminant \\(\\Delta = b^2 - 4ac\\) determines the nature of the roots',
                '\\(\\Delta > 0\\): two distinct real roots; \\(\\Delta = 0\\): repeated root; \\(\\Delta < 0\\): no real roots',
                'To find \\(k\\) for a given root condition, set up an equation or inequality using the discriminant'
            ]
        }
    ]
};
