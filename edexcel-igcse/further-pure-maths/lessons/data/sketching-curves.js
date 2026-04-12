window.CURRENT_LESSON = {
    title: "Sketching Curves",
    subtitle: "Finding key features to sketch polynomials",
    screens: [
        {
            type: 'concept',
            title: 'Why Sketch?',
            content: `
                <p>Sketching a curve means drawing its approximate shape, showing the important features.</p>
                <div class="lesson-box">
                    <p><strong>Key features to find:</strong></p>
                    <ul>
                        <li>\\(y\\)-intercept (where the curve crosses the \\(y\\)-axis)</li>
                        <li>\\(x\\)-intercepts / roots (where the curve crosses the \\(x\\)-axis)</li>
                        <li>Turning points (maxima and minima)</li>
                        <li>Overall shape and end behaviour</li>
                    </ul>
                </div>
                <p>A sketch does not need to be plotted exactly - it should show the correct shape, intercepts, and relative positions of features.</p>
            `
        },
        {
            type: 'concept',
            title: 'Finding the y-Intercept',
            content: `
                <p>The \\(y\\)-intercept is where the curve crosses the \\(y\\)-axis, which occurs when \\(x = 0\\).</p>
                <div class="lesson-box">
                    <p><strong>Method:</strong> Set \\(x = 0\\) and evaluate \\(y\\).</p>
                </div>
                <p>For \\(y = 2x^2 - 3x + 7\\):</p>
                \\[y = 2(0)^2 - 3(0) + 7 = 7\\]
                <p>So the \\(y\\)-intercept is \\((0, 7)\\).</p>
                <p>For \\(y = (x-1)(x+3)(x-2)\\):</p>
                \\[y = (0-1)(0+3)(0-2) = (-1)(3)(-2) = 6\\]
                <p>So the \\(y\\)-intercept is \\((0, 6)\\).</p>
            `
        },
        {
            type: 'example',
            title: 'Finding the y-Intercept',
            problem: 'Find the \\(y\\)-intercept of \\(y = x^3 - 4x^2 + x + 6\\).',
            steps: [
                { text: 'Set \\(x = 0\\):' },
                { text: '\\(y = (0)^3 - 4(0)^2 + (0) + 6\\)' },
                { text: '\\(y = 6\\)' },
                { text: 'The \\(y\\)-intercept is \\((0, 6)\\).' }
            ]
        },
        {
            type: 'concept',
            title: 'Finding the x-Intercepts (Roots)',
            content: `
                <p>The \\(x\\)-intercepts are where the curve crosses the \\(x\\)-axis, which occurs when \\(y = 0\\).</p>
                <div class="lesson-box">
                    <p><strong>Method:</strong> Set \\(y = 0\\) and solve for \\(x\\).</p>
                </div>
                <p>If the equation is in factored form, this is straightforward:</p>
                \\[y = (x - 2)(x + 5) = 0\\]
                <p>gives \\(x = 2\\) or \\(x = -5\\), so the roots are \\((2, 0)\\) and \\((-5, 0)\\).</p>
                <p>If not factored, you may need to factorise, use the quadratic formula, or use the factor theorem.</p>
            `
        },
        {
            type: 'practice',
            generate: function() {
                var r1 = Math.floor(Math.random() * 7) - 3;
                var r2 = r1 + Math.floor(Math.random() * 5) + 1;
                var yInt = r1 * r2;
                var wrong1 = -yInt;
                var wrong2 = r1 + r2;
                var wrong3 = yInt + r1;
                var opts = [String(yInt), String(wrong1), String(wrong2), String(wrong3)];
                var correctIdx = 0;
                for (var i = opts.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = opts[i]; opts[i] = opts[j]; opts[j] = tmp;
                    if (j === correctIdx) correctIdx = i;
                    else if (i === correctIdx) correctIdx = j;
                }
                var r1Str = r1 >= 0 ? '- ' + r1 : '+ ' + Math.abs(r1);
                var r2Str = r2 >= 0 ? '- ' + r2 : '+ ' + Math.abs(r2);
                return {
                    type: 'mc',
                    latex: '\\text{Find the } y\\text{-intercept of } y = (x ' + r1Str + ')(x ' + r2Str + ').',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: 'Set \\(x = 0\\): \\(y = (0 ' + r1Str + ')(0 ' + r2Str + ') = (' + (-r1) + ')(' + (-r2) + ') = ' + yInt + '\\)'
                };
            }
        },
        {
            type: 'concept',
            title: 'Shape of Quadratics',
            content: `
                <p>A quadratic \\(y = ax^2 + bx + c\\) is a <strong>parabola</strong>.</p>
                <div class="lesson-box">
                    <p><strong>Shape rules:</strong></p>
                    <ul>
                        <li>If \\(a > 0\\): U-shape (opens upward) - has a <em>minimum</em></li>
                        <li>If \\(a < 0\\): n-shape (opens downward) - has a <em>maximum</em></li>
                    </ul>
                </div>
                <p>The vertex (turning point) is at \\(x = -\\frac{b}{2a}\\).</p>
                <p>The axis of symmetry passes through the vertex: \\(x = -\\frac{b}{2a}\\).</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px;width:100%"><defs><marker id="sc-arr1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#e0e0e0"/></marker></defs><line x1="30" y1="160" x2="300" y2="160" stroke="#444" stroke-width="0.5" marker-end="url(#sc-arr1)"/><line x1="50" y1="190" x2="50" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#sc-arr1)"/><text x="303" y="164" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">x</text><text x="54" y="16" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">y</text><path d="M60,40 Q110,25 155,160 Q160,175 165,175 Q170,175 175,160 Q220,25 270,40" stroke="#00e5c7" stroke-width="2.5" fill="none"/><circle cx="100" cy="115" r="3.5" fill="none" stroke="#ff6b6b" stroke-width="1.5"/><text x="75" y="115" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#ff6b6b">x-int</text><circle cx="230" cy="115" r="3.5" fill="none" stroke="#ff6b6b" stroke-width="1.5"/><text x="235" y="115" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#ff6b6b">x-int</text><circle cx="50" cy="40" r="3.5" fill="#54a0ff"/><text x="56" y="38" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#54a0ff">y-int (0, c)</text><circle cx="165" cy="175" r="3.5" fill="#feca57"/><text x="172" y="185" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#feca57">vertex (min)</text><line x1="165" y1="175" x2="165" y2="15" stroke="#feca57" stroke-width="0.5" stroke-dasharray="4,3"/><text x="170" y="28" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#feca57">axis of symmetry</text></svg></div>
            `
        },
        {
            type: 'example',
            title: 'Sketching a Quadratic',
            problem: 'Sketch \\(y = x^2 - 2x - 8\\), showing all key features.',
            steps: [
                { text: '\\(y\\)-intercept: set \\(x = 0\\), so \\(y = -8\\). Point: \\((0, -8)\\).' },
                { text: '\\(x\\)-intercepts: set \\(y = 0\\), so \\(x^2 - 2x - 8 = 0\\).' },
                { text: 'Factorise: \\((x - 4)(x + 2) = 0\\), giving \\(x = 4\\) and \\(x = -2\\).' },
                { text: 'Turning point: \\(x = -\\frac{-2}{2(1)} = 1\\). Then \\(y = 1 - 2 - 8 = -9\\). Vertex: \\((1, -9)\\).' },
                { text: 'Since \\(a = 1 > 0\\), the parabola is U-shaped.' },
                { text: 'Sketch shows a U-shape through \\((-2, 0)\\), \\((0, -8)\\), minimum at \\((1, -9)\\), and \\((4, 0)\\).' }
            ]
        },
        {
            type: 'concept',
            title: 'Shape of Cubics',
            content: `
                <p>A cubic \\(y = ax^3 + bx^2 + cx + d\\) has a distinctive S-shape.</p>
                <div class="lesson-box">
                    <p><strong>Shape rules:</strong></p>
                    <ul>
                        <li>If \\(a > 0\\): starts bottom-left, ends top-right (increasing overall)</li>
                        <li>If \\(a < 0\\): starts top-left, ends bottom-right (decreasing overall)</li>
                    </ul>
                </div>
                <p>A cubic can have:</p>
                <ul>
                    <li><strong>3 distinct real roots</strong> - crosses the \\(x\\)-axis three times</li>
                    <li><strong>1 repeated root + 1 other</strong> - touches the axis at the repeated root</li>
                    <li><strong>1 real root</strong> - crosses the axis once (the other two roots are complex)</li>
                </ul>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px;width:100%"><defs><marker id="sc-arr2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#e0e0e0"/></marker></defs><line x1="20" y1="110" x2="305" y2="110" stroke="#444" stroke-width="0.5" marker-end="url(#sc-arr2)"/><line x1="30" y1="195" x2="30" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#sc-arr2)"/><text x="308" y="114" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">x</text><text x="34" y="16" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">y</text><path d="M40,185 C60,170 75,130 90,110 C105,90 125,55 150,50 C165,48 178,70 185,110 C192,145 205,165 220,155 C235,145 250,110 265,75 C275,50 285,30 295,15" stroke="#54a0ff" stroke-width="2.5" fill="none"/><circle cx="90" cy="110" r="4" fill="#ff6b6b"/><circle cx="185" cy="110" r="4" fill="#ff6b6b"/><circle cx="260" cy="110" r="4" fill="#ff6b6b"/><circle cx="150" cy="50" r="3" fill="#feca57"/><text x="135" y="42" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#feca57">local max</text><circle cx="215" cy="155" r="3" fill="#feca57"/><text x="220" y="168" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#feca57">local min</text><text x="155" y="18" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#54a0ff">Positive cubic with 3 roots</text></svg></div>
            `
        },
        {
            type: 'concept',
            title: 'Repeated Roots',
            content: `
                <p>When a root is <strong>repeated</strong>, the curve <em>touches</em> the \\(x\\)-axis rather than crossing it.</p>
                <div class="lesson-box">
                    <p><strong>Behaviour at roots:</strong></p>
                    <ul>
                        <li>Single root \\((x - a)\\): curve <strong>crosses</strong> the axis at \\(x = a\\)</li>
                        <li>Double root \\((x - a)^2\\): curve <strong>touches</strong> the axis at \\(x = a\\)</li>
                        <li>Triple root \\((x - a)^3\\): curve crosses with a <strong>point of inflection</strong> at \\(x = a\\)</li>
                    </ul>
                </div>
                <p>For example, \\(y = (x-1)^2(x+3)\\) touches at \\(x = 1\\) and crosses at \\(x = -3\\).</p>
            `
        },
        {
            type: 'practice',
            generate: function() {
                var questions = [
                    { q: 'y = -2x^2 + 5x - 1', shape: 'n-shape (inverted parabola)', idx: 1 },
                    { q: 'y = 3x^2 - x + 4', shape: 'U-shape (parabola)', idx: 0 },
                    { q: 'y = x^3 - 2x', shape: 'Positive cubic (bottom-left to top-right)', idx: 2 },
                    { q: 'y = -x^3 + 4x^2', shape: 'Negative cubic (top-left to bottom-right)', idx: 3 }
                ];
                var pick = questions[Math.floor(Math.random() * questions.length)];
                var opts = ['U-shape (parabola)', 'n-shape (inverted parabola)', 'Positive cubic (bottom-left to top-right)', 'Negative cubic (top-left to bottom-right)'];
                return {
                    type: 'mc',
                    latex: '\\text{What is the overall shape of } ' + pick.q + ' \\text{?}',
                    options: opts,
                    correctIdx: pick.idx,
                    explain: 'Look at the leading coefficient and the degree. The sign of the leading term determines the shape.'
                };
            }
        },
        {
            type: 'concept',
            title: 'End Behaviour',
            content: `
                <p><strong>End behaviour</strong> describes what happens to \\(y\\) as \\(x \\to \\pm\\infty\\).</p>
                <div class="lesson-box">
                    <p><strong>The leading term dominates for large \\(|x|\\):</strong></p>
                    <ul>
                        <li>Even degree, positive leading coefficient: \\(y \\to +\\infty\\) as \\(x \\to \\pm\\infty\\)</li>
                        <li>Even degree, negative leading coefficient: \\(y \\to -\\infty\\) as \\(x \\to \\pm\\infty\\)</li>
                        <li>Odd degree, positive leading coefficient: \\(y \\to -\\infty\\) as \\(x \\to -\\infty\\), \\(y \\to +\\infty\\) as \\(x \\to +\\infty\\)</li>
                        <li>Odd degree, negative leading coefficient: \\(y \\to +\\infty\\) as \\(x \\to -\\infty\\), \\(y \\to -\\infty\\) as \\(x \\to +\\infty\\)</li>
                    </ul>
                </div>
            `
        },
        {
            type: 'example',
            title: 'Full Sketch of a Cubic',
            problem: 'Sketch \\(y = (x+1)(x-2)(x-4)\\), showing intercepts and shape.',
            steps: [
                { text: '\\(x\\)-intercepts: \\(x = -1, 2, 4\\) (three distinct roots, so three crossings).' },
                { text: '\\(y\\)-intercept: \\(y = (1)(-2)(-4) = 8\\). Point: \\((0, 8)\\).' },
                { text: 'Leading term: \\(x \\cdot x \\cdot x = x^3\\), so positive cubic shape.' },
                { text: 'End behaviour: \\(y \\to -\\infty\\) as \\(x \\to -\\infty\\), \\(y \\to +\\infty\\) as \\(x \\to +\\infty\\).' },
                { text: 'Sketch: comes from bottom-left, crosses at \\((-1, 0)\\), rises to a local max, passes through \\((0, 8)\\), drops to cross at \\((2, 0)\\), dips to a local min, then rises through \\((4, 0)\\) to top-right.' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var r1 = Math.floor(Math.random() * 5) - 2;
                var r2 = r1 + Math.floor(Math.random() * 3) + 1;
                var r3 = r2 + Math.floor(Math.random() * 3) + 1;
                var yInt = (-r1) * (-r2) * (-r3);
                return {
                    type: 'short',
                    latex: '\\text{Find the } y\\text{-intercept of } y = (x - ' + r1 + ')(x - ' + r2 + ')(x - ' + r3 + ').',
                    answer: String(yInt),
                    explain: 'Set \\(x = 0\\): \\(y = (-' + r1 + ')(-' + r2 + ')(-' + r3 + ') = ' + yInt + '\\)'
                };
            }
        },
        {
            type: 'practice',
            generate: function() {
                var roots = [];
                var r = Math.floor(Math.random() * 5) - 2;
                roots.push(r);
                roots.push(r + Math.floor(Math.random() * 4) + 2);
                var repeated = roots[Math.floor(Math.random() * 2)];
                var other = repeated === roots[0] ? roots[1] : roots[0];
                var opts = [
                    'Touches at \\(x = ' + repeated + '\\), crosses at \\(x = ' + other + '\\)',
                    'Crosses at \\(x = ' + repeated + '\\), touches at \\(x = ' + other + '\\)',
                    'Crosses at both \\(x = ' + repeated + '\\) and \\(x = ' + other + '\\)',
                    'Touches at both \\(x = ' + repeated + '\\) and \\(x = ' + other + '\\)'
                ];
                return {
                    type: 'mc',
                    latex: '\\text{Describe how } y = (x - ' + repeated + ')^2(x - ' + other + ') \\text{ meets the } x\\text{-axis.}',
                    options: opts,
                    correctIdx: 0,
                    explain: 'The repeated factor \\((x - ' + repeated + ')^2\\) means the curve touches at \\(x = ' + repeated + '\\). The single factor \\((x - ' + other + ')\\) means it crosses at \\(x = ' + other + '\\).'
                };
            }
        },
        {
            type: 'concept',
            title: 'Putting It All Together',
            content: `
                <div class="lesson-box">
                    <p><strong>Curve-sketching checklist:</strong></p>
                    <ol>
                        <li>Find the \\(y\\)-intercept (set \\(x = 0\\))</li>
                        <li>Find the \\(x\\)-intercepts (set \\(y = 0\\), solve)</li>
                        <li>Determine the shape (leading coefficient and degree)</li>
                        <li>Check for repeated roots (touching vs. crossing)</li>
                        <li>Find turning points if needed (use calculus or completing the square)</li>
                        <li>Consider end behaviour</li>
                        <li>Plot the features and draw a smooth curve</li>
                    </ol>
                </div>
            `
        },
        {
            type: 'summary',
            title: 'Sketching Curves - Summary',
            content: '<p>The essential techniques for sketching polynomial curves:</p>',
            points: [
                '\\(y\\)-intercept: set \\(x = 0\\). \\(x\\)-intercepts: set \\(y = 0\\) and solve.',
                'Quadratics: \\(a > 0\\) gives U-shape, \\(a < 0\\) gives n-shape.',
                'Cubics: positive leading coefficient goes bottom-left to top-right.',
                'Repeated root \\((x - a)^2\\): curve touches the axis. Single root: curve crosses.',
                'The leading term determines end behaviour for large \\(|x|\\).',
                'Always label intercepts and turning points on your sketch.'
            ]
        }
    ]
};
