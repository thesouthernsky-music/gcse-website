window.CURRENT_LESSON = {
    title: "Simultaneous Equations",
    subtitle: "Solving one linear and one quadratic equation together",
    screens: [
        // --- CONCEPT SCREENS ---
        {
            type: 'concept',
            title: 'Why Substitution?',
            content: `
                <p>When solving a system with one <strong>linear</strong> and one <strong>quadratic</strong> equation, we use <strong>substitution</strong> rather than elimination.</p>
                <div class="lesson-box">
                    Elimination works for two linear equations, but here one equation is quadratic - so we substitute the linear equation into the quadratic one.
                </div>
                <p>The linear equation lets us express one variable in terms of the other, which we then substitute into the quadratic.</p>
            `
        },
        {
            type: 'concept',
            title: 'Step 1: Rearrange the Linear Equation',
            content: `
                <p>Start by rearranging the <strong>linear</strong> equation to make one variable the subject:</p>
                <div class="lesson-box">
                    For example, if \\(x + y = 5\\), rearrange to \\(y = 5 - x\\).
                </div>
                <p>Choose whichever rearrangement is simpler. If the linear equation is already in the form \\(y = mx + c\\), you can use it directly.</p>
                <div class="lesson-box warning">
                    <strong>Common mistake:</strong> Trying to rearrange the quadratic equation instead. Always rearrange the <em>linear</em> equation - it is much simpler.
                </div>
            `
        },
        {
            type: 'concept',
            title: 'Step 2: Substitute into the Quadratic',
            content: `
                <p>Replace the variable in the quadratic equation using your expression from Step 1.</p>
                <p>For example, if \\(y = 5 - x\\) and the quadratic is \\(y = x^2 - 3\\):</p>
                \\[5 - x = x^2 - 3\\]
                <p>Now rearrange to get everything on one side:</p>
                \\[0 = x^2 + x - 8\\]
                <div class="lesson-box">
                    After substitution, you should have a quadratic equation in <strong>one variable only</strong>. Solve it by factorising or using the quadratic formula.
                </div>
            `
        },
        {
            type: 'concept',
            title: 'Step 3: Solve the Quadratic',
            content: `
                <p>Solve the resulting quadratic equation to find the values of one variable.</p>
                <p>You will usually get <strong>two solutions</strong> (since a line can intersect a curve at up to two points).</p>
                <div class="lesson-box warning">
                    <strong>Common mistake:</strong> Stopping after finding \\(x\\). You must find the corresponding \\(y\\) values too! Substitute each \\(x\\) back into the <strong>linear</strong> equation to find \\(y\\).
                </div>
                <p>It is possible to get one solution (line is tangent to curve) or no solutions (line misses the curve).</p>
            `
        },
        {
            type: 'concept',
            title: 'Step 4: Find Both Variables',
            content: `
                <p>For each value of \\(x\\), substitute back into the <strong>linear</strong> equation to find the corresponding \\(y\\).</p>
                <div class="lesson-box">
                    <strong>Important:</strong> Substitute into the linear equation, not the quadratic. It is simpler and less error-prone.
                </div>
                <p>Write your final answer as <strong>coordinate pairs</strong>:</p>
                <p>e.g. \\(x = 2, y = 3\\) and \\(x = -1, y = 6\\)</p>
                <p>or as points: \\((2, 3)\\) and \\((-1, 6)\\).</p>
            `
        },
        {
            type: 'concept',
            title: 'Checking Your Solutions',
            content: `
                <p>Always verify your answers by substituting both coordinate pairs into <strong>both</strong> original equations.</p>
                <div class="lesson-box">
                    <p>A correct solution must satisfy both equations simultaneously.</p>
                    <p>If a pair does not satisfy both equations, go back and check your working.</p>
                </div>
                <p>This is a quick way to catch arithmetic errors, especially with signs.</p>
            `
        },
        {
            type: 'concept',
            title: 'Graphical Interpretation',
            content: `
                <p>Solving simultaneous equations is the same as finding where two graphs <strong>intersect</strong>.</p>
                <ul>
                    <li>The linear equation is a <strong>straight line</strong></li>
                    <li>The quadratic equation is a <strong>parabola</strong> (or other curve)</li>
                </ul>
                <div class="lesson-box">
                    <ul>
                        <li><strong>Two solutions</strong>: the line cuts the curve at two points</li>
                        <li><strong>One solution</strong>: the line is tangent to the curve (touches it)</li>
                        <li><strong>No solutions</strong>: the line misses the curve entirely</li>
                    </ul>
                    You can use the discriminant of the resulting quadratic to determine which case applies.
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><text x="160" y="16" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0" font-weight="bold">Line meets parabola</text><g transform="translate(10,25)"><line x1="5" y1="130" x2="130" y2="130" stroke="#444" stroke-width="0.5"/><line x1="65" y1="10" x2="65" y2="160" stroke="#444" stroke-width="0.5"/><path d="M15 20 Q30 50 45 80 Q55 110 65 125 Q75 110 85 85 Q100 50 120 20" stroke="#00e5c7" stroke-width="2.5" fill="none"/><line x1="10" y1="100" x2="125" y2="40" stroke="#feca57" stroke-width="2"/><circle cx="38" cy="89" r="4" fill="#ff6b6b"/><circle cx="100" cy="52" r="4" fill="#ff6b6b"/><text x="65" y="175" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">Two solutions</text></g><g transform="translate(175,25)"><line x1="5" y1="130" x2="130" y2="130" stroke="#444" stroke-width="0.5"/><line x1="65" y1="10" x2="65" y2="160" stroke="#444" stroke-width="0.5"/><path d="M15 20 Q30 50 45 80 Q55 110 65 125 Q75 110 85 85 Q100 50 120 20" stroke="#00e5c7" stroke-width="2.5" fill="none"/><line x1="5" y1="128" x2="130" y2="118" stroke="#54a0ff" stroke-width="2"/><circle cx="65" cy="124" r="4" fill="#ff6b6b"/><text x="65" y="175" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">One solution</text><text x="65" y="188" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#54a0ff">(tangent)</text></g></svg></div>
            `
        },
        // --- EXAMPLE SCREENS ---
        {
            type: 'example',
            title: 'Example: Solve \\(y = 2x + 1\\) and \\(y = x^2 + 3x - 1\\)',
            problem: 'Solve simultaneously: \\(y = 2x + 1\\) and \\(y = x^2 + 3x - 1\\).',
            steps: [
                { text: 'Both equations equal \\(y\\), so set them equal: \\(2x + 1 = x^2 + 3x - 1\\).' },
                { text: 'Rearrange: \\(0 = x^2 + 3x - 1 - 2x - 1 = x^2 + x - 2\\).' },
                { text: 'Factorise: \\((x + 2)(x - 1) = 0\\).' },
                { text: '\\(x = -2\\) or \\(x = 1\\).' },
                { text: 'When \\(x = -2\\): \\(y = 2(-2) + 1 = -3\\).' },
                { text: 'When \\(x = 1\\): \\(y = 2(1) + 1 = 3\\).' },
                { text: 'Solutions: \\((-2, -3)\\) and \\((1, 3)\\).' }
            ]
        },
        {
            type: 'example',
            title: 'Example: Solve \\(x + y = 5\\) and \\(y = x^2 - 3\\)',
            problem: 'Solve simultaneously: \\(x + y = 5\\) and \\(y = x^2 - 3\\).',
            steps: [
                { text: 'From the linear equation: \\(y = 5 - x\\).' },
                { text: 'Substitute into the quadratic: \\(5 - x = x^2 - 3\\).' },
                { text: 'Rearrange: \\(0 = x^2 + x - 8\\).' },
                { text: 'This does not factorise neatly, so use the formula: \\(x = \\dfrac{-1 \\pm \\sqrt{1 + 32}}{2} = \\dfrac{-1 \\pm \\sqrt{33}}{2}\\).' },
                { text: '\\(x = \\dfrac{-1 + \\sqrt{33}}{2} \\approx 2.37\\) or \\(x = \\dfrac{-1 - \\sqrt{33}}{2} \\approx -3.37\\).' },
                { text: 'Corresponding \\(y\\) values: \\(y \\approx 2.63\\) or \\(y \\approx 8.37\\).' },
                { text: 'Solutions: \\((2.37, 2.63)\\) and \\((-3.37, 8.37)\\) (2 d.p.).' }
            ]
        },
        // --- PRACTICE SCREENS ---
        {
            type: 'practice',
            generate: function() {
                // Generate: y = mx + c and y = x^2 + dx + e
                // Choose integer solutions for clean factorising
                var x1 = Math.floor(Math.random() * 7) - 3; // -3 to 3
                var x2 = Math.floor(Math.random() * 7) - 3;
                if (x1 === x2) x2 = x1 + 2;

                // Quadratic: y = x^2 + dx + e
                var d = Math.floor(Math.random() * 5) - 2;
                var e = Math.floor(Math.random() * 5) - 2;
                var y1 = x1 * x1 + d * x1 + e;
                var y2 = x2 * x2 + d * x2 + e;

                // Linear through (x1,y1) and (x2,y2)
                // m = (y2-y1)/(x2-x1), c = y1 - m*x1
                var m = (y2 - y1) / (x2 - x1);
                var c = y1 - m * x1;

                // Check m and c are integers (they should be since quadratic gives integer outputs for integer inputs)
                if (m !== Math.round(m) || c !== Math.round(c)) {
                    // Fallback: simple case
                    x1 = 1; x2 = -2; d = 0; e = -3;
                    y1 = 1 + 0 - 3; // -2
                    y2 = 4 + 0 - 3; // 1
                    m = (1 - (-2)) / (-2 - 1); // = -1
                    c = -2 - (-1) * 1; // = -1
                }
                m = Math.round(m);
                c = Math.round(c);

                var dStr = d > 0 ? '+ ' + d : d === 0 ? '' : '- ' + Math.abs(d);
                var eStr = e > 0 ? '+ ' + e : e === 0 ? '' : '- ' + Math.abs(e);
                var mStr = m === 1 ? '' : m === -1 ? '-' : '' + m;
                var cStr = c > 0 ? ' + ' + c : c === 0 ? '' : ' - ' + Math.abs(c);

                var s1 = x1 < x2 ? '(' + x1 + ', ' + y1 + ')' : '(' + x2 + ', ' + y2 + ')';
                var s2 = x1 < x2 ? '(' + x2 + ', ' + y2 + ')' : '(' + x1 + ', ' + y1 + ')';
                var correct = s1 + ' and ' + s2;

                // Wrong options
                var wy1 = -y1, wy2 = -y2;
                var w1s1 = x1 < x2 ? '(' + x1 + ', ' + wy1 + ')' : '(' + x2 + ', ' + wy2 + ')';
                var w1s2 = x1 < x2 ? '(' + x2 + ', ' + wy2 + ')' : '(' + x1 + ', ' + wy1 + ')';

                var options = [
                    correct,
                    w1s1 + ' and ' + w1s2,
                    '(' + (-x1) + ', ' + y1 + ') and (' + (-x2) + ', ' + y2 + ')',
                    '(' + x1 + ', ' + (y1 + 1) + ') and (' + x2 + ', ' + (y2 + 1) + ')'
                ];
                var unique = [correct];
                for (var k = 1; k < options.length; k++) {
                    if (unique.indexOf(options[k]) === -1) unique.push(options[k]);
                }
                while (unique.length < 4) unique.push('(' + (x1 + 1) + ', ' + (y1 - 1) + ') and (' + (x2 - 1) + ', ' + (y2 + 1) + ')');
                options = unique.slice(0, 4);

                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = options[i]; options[i] = options[j]; options[j] = temp;
                }

                return {
                    type: 'mc',
                    latex: 'Solve simultaneously: \\ y = ' + mStr + 'x' + cStr + ' \\ \\text{and} \\ y = x^2 ' + dStr + 'x ' + eStr,
                    options: options,
                    correctIdx: options.indexOf(correct),
                    answer: correct,
                    explain: 'Setting equal: \\(' + mStr + 'x' + cStr + ' = x^2 ' + dStr + 'x ' + eStr + '\\). Rearranging and solving gives \\(x = ' + Math.min(x1, x2) + '\\) or \\(x = ' + Math.max(x1, x2) + '\\). The solutions are ' + correct + '.'
                };
            }
        },
        {
            type: 'practice',
            generate: function() {
                // Simpler: x + y = s and y = x^2 + k
                var x1 = Math.floor(Math.random() * 5) - 2; // -2 to 2
                var x2 = x1 + Math.floor(Math.random() * 3) + 1; // x1+1 to x1+3
                var k = Math.floor(Math.random() * 5) - 2;
                var y1 = x1 * x1 + k;
                var y2 = x2 * x2 + k;
                var s1 = x1 + y1;
                var s2 = x2 + y2;
                // For x+y=s to be the same line for both, s1 must equal s2
                // That means x1 + x1^2 + k = x2 + x2^2 + k => x1 + x1^2 = x2 + x2^2
                // This won't hold in general, so let's construct properly.
                // Pick x1, x2 as roots of x^2 + x - s + k = 0 where y = s - x
                // sub: s - x = x^2 + k => x^2 + x + (k - s) = 0
                // For roots x1, x2: x1 + x2 = -1, x1*x2 = k - s
                // So x2 = -1 - x1
                x1 = Math.floor(Math.random() * 5) - 2;
                x2 = -1 - x1;
                k = Math.floor(Math.random() * 7) - 3;
                var s = k - x1 * x2;
                y1 = s - x1;
                y2 = s - x2;

                var kStr = k > 0 ? '+ ' + k : k === 0 ? '' : '- ' + Math.abs(k);

                var sm = Math.min(x1, x2);
                var bg = Math.max(x1, x2);
                var smy = sm === x1 ? y1 : y2;
                var bgy = bg === x1 ? y1 : y2;
                var correct = '(' + sm + ', ' + smy + ') and (' + bg + ', ' + bgy + ')';

                var options = [
                    correct,
                    '(' + sm + ', ' + (-smy) + ') and (' + bg + ', ' + (-bgy) + ')',
                    '(' + (-sm) + ', ' + smy + ') and (' + (-bg) + ', ' + bgy + ')',
                    '(' + smy + ', ' + sm + ') and (' + bgy + ', ' + bg + ')'
                ];
                var unique = [correct];
                for (var i = 1; i < options.length; i++) {
                    if (unique.indexOf(options[i]) === -1) unique.push(options[i]);
                }
                while (unique.length < 4) unique.push('(' + (sm + 1) + ', ' + (smy - 1) + ') and (' + (bg - 1) + ', ' + (bgy + 1) + ')');
                options = unique.slice(0, 4);

                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = options[i]; options[i] = options[j]; options[j] = temp;
                }

                return {
                    type: 'mc',
                    latex: 'Solve: \\ x + y = ' + s + ' \\ \\text{and} \\ y = x^2 ' + kStr,
                    options: options,
                    correctIdx: options.indexOf(correct),
                    answer: correct,
                    explain: 'Substituting \\(y = ' + s + ' - x\\) into \\(y = x^2 ' + kStr + '\\): \\(' + s + ' - x = x^2 ' + kStr + '\\). Rearranging and solving gives \\(x = ' + sm + '\\) or \\(x = ' + bg + '\\). Solutions: ' + correct + '.'
                };
            }
        },
        {
            type: 'practice',
            generate: function() {
                // Short answer: find the x-coordinates only
                var x1 = Math.floor(Math.random() * 5) - 2;
                var x2 = -1 - x1; // sum = -1
                var m = Math.floor(Math.random() * 5) + 1; // positive slope
                var k = Math.floor(Math.random() * 5) - 2;
                // y = mx + c and y = x^2 + k
                // mx + c = x^2 + k => x^2 - mx + (k - c) = 0
                // roots x1, x2: x1+x2 = m, x1*x2 = k-c
                // So m = x1 + x2 and c = k - x1*x2
                x1 = Math.floor(Math.random() * 5) - 2;
                x2 = Math.floor(Math.random() * 5) - 2;
                if (x1 === x2) x2 = x1 + 2;
                m = x1 + x2;
                k = Math.floor(Math.random() * 5) - 2;
                var cVal = k - x1 * x2;

                var mStr = m === 0 ? '' : m === 1 ? 'x' : m === -1 ? '-x' : m + 'x';
                var cValStr = cVal > 0 ? (mStr ? ' + ' + cVal : '' + cVal) : cVal === 0 ? '' : (mStr ? ' - ' + Math.abs(cVal) : '' + cVal);
                var kStr = k > 0 ? '+ ' + k : k === 0 ? '' : '- ' + Math.abs(k);

                var linExpr = mStr + cValStr;
                if (!linExpr) linExpr = '0';

                var sm = Math.min(x1, x2);
                var bg = Math.max(x1, x2);
                var correct = 'x = ' + sm + ' and x = ' + bg;

                return {
                    type: 'short',
                    latex: 'Find the x-coordinates where \\ y = ' + linExpr + ' \\ meets \\ y = x^2 ' + kStr,
                    answer: correct,
                    explain: 'Setting equal: \\(' + linExpr + ' = x^2 ' + kStr + '\\). Rearranging gives a quadratic with solutions \\(x = ' + sm + '\\) and \\(x = ' + bg + '\\).'
                };
            }
        },
        {
            type: 'practice',
            generate: function() {
                // Full coordinate pair answer
                var x1 = Math.floor(Math.random() * 5) - 2;
                var x2 = Math.floor(Math.random() * 5) - 2;
                if (x1 === x2) x2 = x1 + 3;
                // y = 2x + c and y = x^2 + dx + e
                var d = Math.floor(Math.random() * 5) - 2;
                var e = Math.floor(Math.random() * 5) - 2;
                var y1 = x1 * x1 + d * x1 + e;
                var y2 = x2 * x2 + d * x2 + e;
                // Line: slope = (y2-y1)/(x2-x1), intercept = y1 - slope*x1
                var slope = (y2 - y1) / (x2 - x1);
                var intercept = y1 - slope * x1;

                if (slope !== Math.round(slope) || intercept !== Math.round(intercept)) {
                    x1 = 2; x2 = -1; d = 1; e = -4;
                    y1 = 4 + 2 - 4; // 2
                    y2 = 1 - 1 - 4; // -4
                    slope = (2 - (-4)) / (2 - (-1)); // 2
                    intercept = 2 - 2 * 2; // -2
                }
                slope = Math.round(slope);
                intercept = Math.round(intercept);
                y1 = Math.round(y1);
                y2 = Math.round(y2);

                var slopeStr = slope === 0 ? '' : slope === 1 ? 'x' : slope === -1 ? '-x' : slope + 'x';
                var intStr = intercept > 0 ? (slopeStr ? ' + ' + intercept : '' + intercept) : intercept === 0 ? '' : (slopeStr ? ' - ' + Math.abs(intercept) : '' + intercept);
                var dStr = d > 0 ? '+ ' + d : d === 0 ? '' : '- ' + Math.abs(d);
                var eStr = e > 0 ? '+ ' + e : e === 0 ? '' : '- ' + Math.abs(e);

                var linExpr = slopeStr + intStr;
                if (!linExpr) linExpr = '0';

                var sm = Math.min(x1, x2);
                var bg = Math.max(x1, x2);
                var smy = sm === x1 ? y1 : y2;
                var bgy = bg === x1 ? y1 : y2;

                var correct = '(' + sm + ', ' + smy + ') and (' + bg + ', ' + bgy + ')';
                var options = [
                    correct,
                    '(' + sm + ', ' + (-smy) + ') and (' + bg + ', ' + (-bgy) + ')',
                    '(' + bg + ', ' + smy + ') and (' + sm + ', ' + bgy + ')',
                    '(' + (-sm) + ', ' + smy + ') and (' + (-bg) + ', ' + bgy + ')'
                ];
                var unique = [correct];
                for (var k = 1; k < options.length; k++) {
                    if (unique.indexOf(options[k]) === -1) unique.push(options[k]);
                }
                while (unique.length < 4) unique.push('(' + (sm - 1) + ', ' + (smy + 1) + ') and (' + (bg + 1) + ', ' + (bgy - 1) + ')');
                options = unique.slice(0, 4);

                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = options[i]; options[i] = options[j]; options[j] = temp;
                }

                return {
                    type: 'mc',
                    latex: 'Solve: \\ y = ' + linExpr + ' \\ \\text{and} \\ y = x^2 ' + dStr + 'x ' + eStr,
                    options: options,
                    correctIdx: options.indexOf(correct),
                    answer: correct,
                    explain: 'Substituting and solving the quadratic gives \\(x = ' + sm + '\\) and \\(x = ' + bg + '\\). The solutions are ' + correct + '.'
                };
            }
        },
        // --- SUMMARY ---
        {
            type: 'summary',
            title: 'Simultaneous Equations - Summary',
            content: '<p>You can now solve systems of one linear and one quadratic equation using substitution.</p>',
            points: [
                'Rearrange the linear equation to make \\(y\\) (or \\(x\\)) the subject',
                'Substitute into the quadratic equation to get a single-variable quadratic',
                'Solve the quadratic (factorise or use the formula)',
                'Find the other variable by substituting back into the linear equation',
                'Write answers as coordinate pairs and check in both original equations',
                'Graphically: solutions are intersection points of the line and curve'
            ]
        }
    ]
};
