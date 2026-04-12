window.CURRENT_LESSON = {
    title: "Quadratic Inequalities",
    subtitle: "Solving inequalities involving quadratics",
    screens: [
        // --- CONCEPT 1: Introduction ---
        {
            type: 'concept',
            title: 'Quadratic Inequalities - The Idea',
            content: `
                <p>A quadratic inequality looks like:</p>
                \\[x^2 - 5x + 6 > 0 \\quad \\text{or} \\quad 2x^2 + x - 3 \\leq 0\\]
                <p>Unlike linear inequalities, the solution is usually a <strong>range</strong> (or two ranges) of values, not just "everything above" or "everything below" a single number.</p>
                <p>The key to solving them is understanding the <strong>shape of a parabola</strong> and where it sits relative to the \\(x\\)-axis.</p>
            `
        },
        // --- CONCEPT 2: Method ---
        {
            type: 'concept',
            title: 'The Method',
            content: `
                <p>To solve a quadratic inequality:</p>
                <ol>
                    <li><strong>Rearrange</strong> so one side is 0</li>
                    <li><strong>Factorise</strong> the quadratic (or use the formula to find roots)</li>
                    <li><strong>Find the critical values</strong> (where the expression equals zero)</li>
                    <li><strong>Sketch</strong> the parabola</li>
                    <li><strong>Read off</strong> the solution from the sketch</li>
                </ol>
                <p>The sketch is the most important step - it tells you which regions satisfy the inequality.</p>
            `
        },
        // --- CONCEPT 3: Greater than zero ---
        {
            type: 'concept',
            title: 'When the Quadratic is > 0 (or >= 0)',
            content: `
                <p>For a positive quadratic (\\(a > 0\\), the usual U-shape):</p>
                <p>If the roots are \\(\\alpha\\) and \\(\\beta\\) (where \\(\\alpha < \\beta\\)):</p>
                \\[(x - \\alpha)(x - \\beta) > 0 \\quad \\Rightarrow \\quad x < \\alpha \\text{ or } x > \\beta\\]
                <p>The parabola is <strong>above</strong> the \\(x\\)-axis when \\(x\\) is <strong>outside</strong> the roots.</p>
                <p>Think of it as: the expression is positive in the two "outer" regions.</p>
                \\[\\text{Solution: } x < \\alpha \\text{ or } x > \\beta\\]
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px;width:100%"><defs><marker id="qi-arr1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#e0e0e0"/></marker></defs><line x1="20" y1="130" x2="305" y2="130" stroke="#444" stroke-width="0.5" marker-end="url(#qi-arr1)"/><line x1="30" y1="190" x2="30" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#qi-arr1)"/><text x="308" y="134" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">x</text><text x="34" y="16" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">y</text><path d="M40,30 Q80,50 110,130 Q140,200 160,195 Q180,190 200,130 Q230,50 270,30" stroke="#00e5c7" stroke-width="2.5" fill="none"/><rect x="40" y="30" width="70" height="100" fill="#00e5c7" fill-opacity="0.12"/><rect x="200" y="30" width="70" height="100" fill="#00e5c7" fill-opacity="0.12"/><circle cx="110" cy="130" r="4" fill="#ff6b6b"/><circle cx="200" cy="130" r="4" fill="#ff6b6b"/><text x="106" y="150" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">2</text><text x="196" y="150" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">3</text><text x="160" y="18" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">x^2 - 5x + 6 > 0</text><text x="55" y="80" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">x&lt;2</text><text x="220" y="80" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">x&gt;3</text></svg></div>
            `
        },
        // --- CONCEPT 4: Less than zero ---
        {
            type: 'concept',
            title: 'When the Quadratic is < 0 (or <= 0)',
            content: `
                <p>For a positive quadratic (\\(a > 0\\)):</p>
                \\[(x - \\alpha)(x - \\beta) < 0 \\quad \\Rightarrow \\quad \\alpha < x < \\beta\\]
                <p>The parabola is <strong>below</strong> the \\(x\\)-axis when \\(x\\) is <strong>between</strong> the roots.</p>
                <p>This gives a single interval:</p>
                \\[\\text{Solution: } \\alpha < x < \\beta\\]
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px;width:100%"><defs><marker id="qi-arr2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#e0e0e0"/></marker></defs><line x1="20" y1="130" x2="305" y2="130" stroke="#444" stroke-width="0.5" marker-end="url(#qi-arr2)"/><line x1="30" y1="190" x2="30" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#qi-arr2)"/><text x="308" y="134" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">x</text><text x="34" y="16" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">y</text><path d="M40,30 Q80,50 110,130 Q140,200 160,195 Q180,190 200,130 Q230,50 270,30" stroke="#00e5c7" stroke-width="2.5" fill="none"/><rect x="110" y="130" width="90" height="65" fill="#ff6b6b" fill-opacity="0.15"/><circle cx="110" cy="130" r="4" fill="#ff6b6b"/><circle cx="200" cy="130" r="4" fill="#ff6b6b"/><text x="106" y="150" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">2</text><text x="196" y="150" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">3</text><text x="160" y="18" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b">x^2 - 5x + 6 &lt; 0</text><text x="130" y="180" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">2&lt;x&lt;3</text></svg></div>
                <p><strong>Memory aid:</strong></p>
                <ul>
                    <li>\\(> 0\\): outside the roots (two separate regions)</li>
                    <li>\\(< 0\\): between the roots (one region)</li>
                </ul>
            `
        },
        // --- EXAMPLE 1: > 0 ---
        {
            type: 'example',
            title: 'Solving a > 0 Inequality',
            problem: 'Solve \\(x^2 - 5x + 6 > 0\\).',
            steps: [
                { text: 'Factorise: \\(x^2 - 5x + 6 = (x - 2)(x - 3)\\)' },
                { text: 'Critical values: \\(x = 2\\) and \\(x = 3\\)' },
                { text: 'Sketch: U-shaped parabola crossing the \\(x\\)-axis at 2 and 3' },
                { text: 'We want where the curve is <strong>above</strong> the \\(x\\)-axis (\\(> 0\\))' },
                { text: 'Solution: \\(x < 2\\) or \\(x > 3\\)' }
            ]
        },
        // --- PRACTICE 1: > 0 type ---
        {
            type: 'practice',
            generate: function() {
                var r1 = Math.floor(Math.random() * 7) - 3; // -3 to 3
                var r2 = r1 + Math.floor(Math.random() * 5) + 1; // r2 > r1
                // (x - r1)(x - r2) > 0
                var b = -(r1 + r2);
                var c = r1 * r2;
                var bStr = (b >= 0 ? '+ ' + b : '- ' + (-b));
                var cStr = (c >= 0 ? '+ ' + c : '- ' + (-c));
                return {
                    type: 'short',
                    latex: 'Solve \\(x^2 ' + bStr + 'x ' + cStr + ' > 0\\).',
                    answer: 'x < ' + r1 + ' or x > ' + r2,
                    explain: 'Factorise: \\((x - ' + (r1 >= 0 ? r1 : '(' + r1 + ')') + ')(x - ' + (r2 >= 0 ? r2 : '(' + r2 + ')') + ') > 0\\). Roots at \\(x = ' + r1 + '\\) and \\(x = ' + r2 + '\\). U-shape above axis outside roots: \\(x < ' + r1 + '\\) or \\(x > ' + r2 + '\\).'
                };
            }
        },
        // --- EXAMPLE 2: <= 0 ---
        {
            type: 'example',
            title: 'Solving a <= 0 Inequality',
            problem: 'Solve \\(x^2 + 2x - 8 \\leq 0\\).',
            steps: [
                { text: 'Factorise: \\(x^2 + 2x - 8 = (x + 4)(x - 2)\\)' },
                { text: 'Critical values: \\(x = -4\\) and \\(x = 2\\)' },
                { text: 'Sketch: U-shaped parabola crossing at \\(-4\\) and \\(2\\)' },
                { text: 'We want where the curve is <strong>on or below</strong> the \\(x\\)-axis (\\(\\leq 0\\))' },
                { text: 'Solution: \\(-4 \\leq x \\leq 2\\)' },
                { text: 'The \\(\\leq\\) means we <strong>include</strong> the endpoints (filled circles on number line).' }
            ]
        },
        // --- PRACTICE 2: <= 0 type ---
        {
            type: 'practice',
            generate: function() {
                var r1 = Math.floor(Math.random() * 7) - 4;
                var r2 = r1 + Math.floor(Math.random() * 5) + 1;
                var b = -(r1 + r2);
                var c = r1 * r2;
                var bStr = (b >= 0 ? '+ ' + b : '- ' + (-b));
                var cStr = (c >= 0 ? '+ ' + c : '- ' + (-c));
                return {
                    type: 'short',
                    latex: 'Solve \\(x^2 ' + bStr + 'x ' + cStr + ' \\leq 0\\).',
                    answer: r1 + ' <= x <= ' + r2,
                    explain: 'Factorise to find roots at \\(x = ' + r1 + '\\) and \\(x = ' + r2 + '\\). Below axis (including endpoints): \\(' + r1 + ' \\leq x \\leq ' + r2 + '\\).'
                };
            }
        },
        // --- EXAMPLE 3: Leading coefficient != 1 ---
        {
            type: 'example',
            title: 'Non-unit Leading Coefficient',
            problem: 'Solve \\(2x^2 - x - 3 < 0\\).',
            steps: [
                { text: 'Factorise: \\(2x^2 - x - 3 = (2x - 3)(x + 1)\\)' },
                { text: 'Critical values: \\(2x - 3 = 0 \\Rightarrow x = \\frac{3}{2}\\) and \\(x + 1 = 0 \\Rightarrow x = -1\\)' },
                { text: 'Since the coefficient of \\(x^2\\) is positive, it is a U-shaped parabola.' },
                { text: 'We want \\(< 0\\), so between the roots.' },
                { text: 'Solution: \\(-1 < x < \\frac{3}{2}\\)' }
            ]
        },
        // --- PRACTICE 3: 2x^2 type ---
        {
            type: 'practice',
            generate: function() {
                // 2x^2 + bx + c with nice roots
                var r1_options = [[-1, 1], [-1, 2], [-2, 1], [-1, 3], [-3, 1], [1, 2], [-2, 3]];
                var pair = r1_options[Math.floor(Math.random() * r1_options.length)];
                var r1 = pair[0], r2 = pair[1]; // roots of (2x - p)(x - q) form
                // Actually let's do (2x - a)(x - b) = 2x^2 - (2b+a)x + ab, roots x = a/2, x = b
                var a = Math.floor(Math.random() * 5) - 1; // a/2 is one root
                var b2 = a + Math.floor(Math.random() * 4) + 2; // other root, ensure b > a/2
                // (2x - a)(x - b2) = 2x^2 - (2b2+a)x + ab2
                var coeff1 = -(2 * b2 + a);
                var coeff0 = a * b2;
                var root1 = a + '/2';
                if (a % 2 === 0) root1 = '' + (a / 2);
                var c1Str = (coeff1 >= 0 ? '+ ' + coeff1 : '- ' + (-coeff1));
                var c0Str = (coeff0 >= 0 ? '+ ' + coeff0 : '- ' + (-coeff0));
                var isLess = Math.random() < 0.5;
                var sign = isLess ? '<' : '>';
                var ansStr;
                if (isLess) {
                    ansStr = root1 + ' < x < ' + b2;
                } else {
                    ansStr = 'x < ' + root1 + ' or x > ' + b2;
                }
                return {
                    type: 'short',
                    latex: 'Solve \\(2x^2 ' + c1Str + 'x ' + c0Str + ' ' + sign + ' 0\\).',
                    answer: ansStr,
                    explain: 'Factorise: \\((2x - ' + a + ')(x - ' + b2 + ') ' + sign + ' 0\\). Roots at \\(x = ' + root1 + '\\) and \\(x = ' + b2 + '\\). ' + (isLess ? 'Between the roots' : 'Outside the roots') + ': \\(' + ansStr + '\\).'
                };
            }
        },
        // --- CONCEPT 5: Including equals ---
        {
            type: 'concept',
            title: 'Strict vs Non-strict Inequalities',
            content: `
                <p>The difference between \\(>\\) and \\(\\geq\\) (or \\(<\\) and \\(\\leq\\)) matters:</p>
                <ul>
                    <li>\\(x^2 - 4 > 0\\): solution is \\(x < -2\\) or \\(x > 2\\) (open intervals)</li>
                    <li>\\(x^2 - 4 \\geq 0\\): solution is \\(x \\leq -2\\) or \\(x \\geq 2\\) (closed intervals)</li>
                </ul>
                <p>On the number line:</p>
                <ul>
                    <li>\\(>\\) or \\(<\\): <strong>open circles</strong> at the critical values</li>
                    <li>\\(\\geq\\) or \\(\\leq\\): <strong>filled circles</strong> at the critical values</li>
                </ul>
            `
        },
        // --- PRACTICE 4: MC - identify correct solution ---
        {
            type: 'practice',
            generate: function() {
                var r1 = Math.floor(Math.random() * 5) - 2;
                var r2 = r1 + Math.floor(Math.random() * 4) + 2;
                var b = -(r1 + r2);
                var c = r1 * r2;
                var bStr = (b >= 0 ? '+ ' + b : '- ' + (-b));
                var cStr = (c >= 0 ? '+ ' + c : '- ' + (-c));
                var type = Math.floor(Math.random() * 4);
                var signs = ['> 0', '\\geq 0', '< 0', '\\leq 0'];
                var answers = [
                    '\\(x < ' + r1 + '\\) or \\(x > ' + r2 + '\\)',
                    '\\(x \\leq ' + r1 + '\\) or \\(x \\geq ' + r2 + '\\)',
                    '\\(' + r1 + ' < x < ' + r2 + '\\)',
                    '\\(' + r1 + ' \\leq x \\leq ' + r2 + '\\)'
                ];
                var wrongs = [
                    '\\(' + r1 + ' < x < ' + r2 + '\\)',
                    '\\(' + r1 + ' < x < ' + r2 + '\\)',
                    '\\(x < ' + r1 + '\\) or \\(x > ' + r2 + '\\)',
                    '\\(x < ' + r1 + '\\) or \\(x > ' + r2 + '\\)'
                ];
                var options;
                var correctIdx;
                if (Math.random() < 0.5) {
                    options = [answers[type], wrongs[type]];
                    correctIdx = 0;
                } else {
                    options = [wrongs[type], answers[type]];
                    correctIdx = 1;
                }
                return {
                    type: 'mc',
                    latex: 'Solve \\(x^2 ' + bStr + 'x ' + cStr + ' ' + signs[type] + '\\).',
                    options: options,
                    correctIdx: correctIdx,
                    explain: 'Roots at \\(' + r1 + '\\) and \\(' + r2 + '\\). For \\(' + signs[type] + '\\): ' + (type < 2 ? 'outside the roots' : 'between the roots') + '. Answer: ' + answers[type] + '.'
                };
            }
        },
        // --- CONCEPT 6: Number line representation ---
        {
            type: 'concept',
            title: 'Number Line Representation',
            content: `
                <p>Quadratic inequality solutions on a number line:</p>
                <ul>
                    <li><strong>Between roots</strong> (e.g. \\(2 < x < 5\\)): a line segment between the two values</li>
                    <li><strong>Outside roots</strong> (e.g. \\(x < 2\\) or \\(x > 5\\)): two rays going outward</li>
                </ul>
                <p>Always mark the critical values clearly with the appropriate circle type.</p>
                <p><strong>Set notation:</strong></p>
                <ul>
                    <li>Between: \\(\\{x : 2 < x < 5\\}\\) or \\((2, 5)\\)</li>
                    <li>Outside: \\(\\{x : x < 2\\} \\cup \\{x : x > 5\\}\\) or \\((-\\infty, 2) \\cup (5, \\infty)\\)</li>
                </ul>
            `
        },
        // --- PRACTICE 5: Solve and express ---
        {
            type: 'practice',
            generate: function() {
                var r1 = Math.floor(Math.random() * 5) - 2;
                var r2 = r1 + Math.floor(Math.random() * 4) + 1;
                var b = -(r1 + r2);
                var c = r1 * r2;
                var bStr = (b >= 0 ? '+ ' + b : '- ' + (-b));
                var cStr = (c >= 0 ? '+ ' + c : '- ' + (-c));
                var isGreater = Math.random() < 0.5;
                if (isGreater) {
                    return {
                        type: 'short',
                        latex: 'Solve \\(x^2 ' + bStr + 'x ' + cStr + ' \\geq 0\\) and write in interval notation.',
                        answer: '(-inf, ' + r1 + '] U [' + r2 + ', inf)',
                        explain: 'Roots at \\(' + r1 + '\\) and \\(' + r2 + '\\). \\(\\geq 0\\) means outside (including endpoints): \\((-\\infty, ' + r1 + '] \\cup [' + r2 + ', \\infty)\\).'
                    };
                } else {
                    return {
                        type: 'short',
                        latex: 'Solve \\(x^2 ' + bStr + 'x ' + cStr + ' < 0\\) and write in interval notation.',
                        answer: '(' + r1 + ', ' + r2 + ')',
                        explain: 'Roots at \\(' + r1 + '\\) and \\(' + r2 + '\\). \\(< 0\\) means between the roots (not including): \\((' + r1 + ', ' + r2 + ')\\).'
                    };
                }
            }
        },
        // --- PRACTICE 6: Rearrange first ---
        {
            type: 'practice',
            generate: function() {
                // x^2 + bx > c => x^2 + bx - c > 0
                var r1 = Math.floor(Math.random() * 5) - 3;
                var r2 = r1 + Math.floor(Math.random() * 4) + 2;
                // (x - r1)(x - r2) = x^2 - (r1+r2)x + r1*r2
                var sum = r1 + r2;
                var prod = r1 * r2;
                // x^2 - sum*x + prod > 0 => x^2 - sum*x > -prod
                var lhsB = (sum === 0 ? '' : (sum > 0 ? ' - ' + sum + 'x' : ' + ' + (-sum) + 'x'));
                var rhsVal = -prod;
                return {
                    type: 'short',
                    latex: 'Solve \\(x^2' + lhsB + ' > ' + rhsVal + '\\).',
                    answer: 'x < ' + r1 + ' or x > ' + r2,
                    explain: 'Rearrange: \\(x^2' + lhsB + ' - ' + (rhsVal >= 0 ? rhsVal : '(' + rhsVal + ')') + ' > 0\\), i.e. \\((x - ' + (r1 >= 0 ? r1 : '(' + r1 + ')') + ')(x - ' + (r2 >= 0 ? r2 : '(' + r2 + ')') + ') > 0\\). Outside roots: \\(x < ' + r1 + '\\) or \\(x > ' + r2 + '\\).'
                };
            }
        },
        // --- SUMMARY ---
        {
            type: 'summary',
            title: 'Quadratic Inequalities - Summary',
            content: '<p>You can now solve quadratic inequalities using factorisation and sketching.</p>',
            points: [
                'Method: rearrange to 0, factorise, find critical values, sketch, read off',
                'For \\(> 0\\) or \\(\\geq 0\\): solution is OUTSIDE the roots (two regions)',
                'For \\(< 0\\) or \\(\\leq 0\\): solution is BETWEEN the roots (one region)',
                'Use open circles for strict inequalities, filled circles for non-strict',
                'Always sketch the parabola - it prevents sign errors',
                'Express answers as inequalities, set notation, or interval notation as required'
            ]
        }
    ]
};
