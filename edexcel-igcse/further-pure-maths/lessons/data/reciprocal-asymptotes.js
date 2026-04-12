window.CURRENT_LESSON = {
    title: "Reciprocal Graphs & Asymptotes",
    subtitle: "Understanding y = a/x and asymptotic behaviour",
    screens: [
        {
            type: 'concept',
            title: 'The Basic Reciprocal Graph',
            content: `
                <p>The simplest reciprocal function is \\(y = \\frac{1}{x}\\).</p>
                <div class="lesson-box">
                    <p><strong>Key features of \\(y = \\frac{1}{x}\\):</strong></p>
                    <ul>
                        <li>The curve has <strong>two branches</strong> - one in the first quadrant, one in the third</li>
                        <li>As \\(x \\to \\infty\\), \\(y \\to 0\\) (approaches the \\(x\\)-axis from above)</li>
                        <li>As \\(x \\to 0^+\\), \\(y \\to +\\infty\\) (shoots upward near the \\(y\\)-axis)</li>
                        <li>The curve never touches or crosses either axis</li>
                    </ul>
                </div>
                <p>The graph has <strong>rotational symmetry</strong> of order 2 about the origin. It is also symmetric about \\(y = x\\) and \\(y = -x\\).</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px;width:100%"><defs><marker id="ra-arr1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#e0e0e0"/></marker></defs><line x1="20" y1="100" x2="305" y2="100" stroke="#444" stroke-width="0.5" marker-end="url(#ra-arr1)"/><line x1="160" y1="195" x2="160" y2="5" stroke="#444" stroke-width="0.5" marker-end="url(#ra-arr1)"/><text x="308" y="104" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">x</text><text x="164" y="14" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">y</text><line x1="160" y1="5" x2="160" y2="195" stroke="#feca57" stroke-width="0.8" stroke-dasharray="4,3"/><line x1="20" y1="100" x2="305" y2="100" stroke="#feca57" stroke-width="0.8" stroke-dasharray="4,3"/><path d="M170,10 C170,25 175,50 185,65 C200,82 220,90 300,97" stroke="#00e5c7" stroke-width="2.5" fill="none"/><path d="M150,190 C150,175 145,150 135,135 C120,118 100,110 20,103" stroke="#00e5c7" stroke-width="2.5" fill="none"/><text x="225" y="80" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">y = 1/x</text><text x="45" y="22" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">Asymptotes:</text><text x="45" y="38" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">x=0 and y=0</text></svg></div>
            `
        },
        {
            type: 'concept',
            title: 'What is an Asymptote?',
            content: `
                <p>An <strong>asymptote</strong> is a line that a curve approaches but never actually reaches.</p>
                <div class="lesson-box">
                    <p><strong>Types of asymptote:</strong></p>
                    <ul>
                        <li><strong>Vertical asymptote:</strong> the curve approaches as \\(x\\) tends to a particular value (e.g. \\(x = 0\\) for \\(y = \\frac{1}{x}\\))</li>
                        <li><strong>Horizontal asymptote:</strong> the curve approaches as \\(x \\to \\pm\\infty\\) (e.g. \\(y = 0\\) for \\(y = \\frac{1}{x}\\))</li>
                    </ul>
                </div>
                <p>For \\(y = \\frac{1}{x}\\):</p>
                <ul>
                    <li>Vertical asymptote: \\(x = 0\\) (the \\(y\\)-axis)</li>
                    <li>Horizontal asymptote: \\(y = 0\\) (the \\(x\\)-axis)</li>
                </ul>
            `
        },
        {
            type: 'concept',
            title: 'The Graph of y = a/x',
            content: `
                <p>Multiplying by a constant \\(a\\) stretches the reciprocal graph vertically.</p>
                <div class="lesson-box">
                    <p><strong>\\(y = \\frac{a}{x}\\):</strong></p>
                    <ul>
                        <li>If \\(a > 0\\): branches in quadrants 1 and 3 (same as \\(y = \\frac{1}{x}\\))</li>
                        <li>If \\(a < 0\\): branches in quadrants 2 and 4 (reflected in the \\(x\\)-axis)</li>
                    </ul>
                    <p>Asymptotes remain \\(x = 0\\) and \\(y = 0\\).</p>
                </div>
                <p>The larger \\(|a|\\) is, the further the curve sits from the origin.</p>
            `
        },
        {
            type: 'example',
            title: 'Sketching y = a/x',
            problem: 'Sketch \\(y = \\frac{-3}{x}\\), stating the asymptotes.',
            steps: [
                { text: 'Since \\(a = -3 < 0\\), the branches are in quadrants 2 and 4.' },
                { text: 'Vertical asymptote: \\(x = 0\\) (the \\(y\\)-axis).' },
                { text: 'Horizontal asymptote: \\(y = 0\\) (the \\(x\\)-axis).' },
                { text: 'Key points: when \\(x = 1\\), \\(y = -3\\); when \\(x = -1\\), \\(y = 3\\); when \\(x = 3\\), \\(y = -1\\).' },
                { text: 'Sketch: one branch in Q2 (top-left, approaching both axes) and one in Q4 (bottom-right, approaching both axes).' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 9) - 4;
                while (a === 0) a = Math.floor(Math.random() * 9) - 4;
                var quadrants = a > 0 ? 'Quadrants 1 and 3' : 'Quadrants 2 and 4';
                var opts = ['Quadrants 1 and 3', 'Quadrants 2 and 4', 'Quadrants 1 and 2', 'Quadrants 3 and 4'];
                var correctIdx = a > 0 ? 0 : 1;
                return {
                    type: 'mc',
                    latex: '\\text{In which quadrants are the branches of } y = \\frac{' + a + '}{x} \\text{?}',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: 'Since \\(a = ' + a + (a > 0 ? ' > 0' : ' < 0') + '\\), the branches are in ' + quadrants + '.'
                };
            }
        },
        {
            type: 'concept',
            title: 'Finding Vertical Asymptotes',
            content: `
                <p>A vertical asymptote occurs where the denominator equals zero.</p>
                <div class="lesson-box">
                    <p><strong>Method:</strong> Set the denominator equal to zero and solve for \\(x\\).</p>
                </div>
                <p>For \\(y = \\frac{3}{x - 2}\\):</p>
                <p>Denominator = 0 when \\(x - 2 = 0\\), so \\(x = 2\\).</p>
                <p>Vertical asymptote: \\(x = 2\\).</p>
                <p>For \\(y = \\frac{5}{(x+1)(x-3)}\\):</p>
                <p>Denominator = 0 when \\(x = -1\\) or \\(x = 3\\).</p>
                <p>Vertical asymptotes: \\(x = -1\\) and \\(x = 3\\).</p>
            `
        },
        {
            type: 'practice',
            generate: function() {
                var h = Math.floor(Math.random() * 11) - 5;
                while (h === 0) h = Math.floor(Math.random() * 11) - 5;
                var hStr = h > 0 ? '- ' + h : '+ ' + Math.abs(h);
                var correct = 'x = ' + h;
                var wrong1 = 'x = ' + (-h);
                var wrong2 = 'y = ' + h;
                var wrong3 = 'x = 0';
                var opts = [correct, wrong1, wrong2, wrong3];
                var correctIdx = 0;
                for (var i = opts.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = opts[i]; opts[i] = opts[j]; opts[j] = tmp;
                    if (j === correctIdx) correctIdx = i;
                    else if (i === correctIdx) correctIdx = j;
                }
                return {
                    type: 'mc',
                    latex: '\\text{Find the vertical asymptote of } y = \\frac{1}{x ' + hStr + '}.',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: 'Set denominator to zero: \\(x ' + hStr + ' = 0\\), so \\(' + correct + '\\).'
                };
            }
        },
        {
            type: 'concept',
            title: 'Finding Horizontal Asymptotes',
            content: `
                <p>A horizontal asymptote describes the value \\(y\\) approaches as \\(x \\to \\pm\\infty\\).</p>
                <div class="lesson-box">
                    <p><strong>For \\(y = \\frac{a}{x - h} + k\\):</strong></p>
                    <p>As \\(x \\to \\pm\\infty\\), the fraction \\(\\frac{a}{x-h} \\to 0\\), so \\(y \\to k\\).</p>
                    <p>Horizontal asymptote: \\(y = k\\).</p>
                </div>
                <p>For \\(y = \\frac{3}{x-1} + 4\\): horizontal asymptote is \\(y = 4\\).</p>
                <p>For \\(y = \\frac{2}{x} - 5\\): horizontal asymptote is \\(y = -5\\).</p>
            `
        },
        {
            type: 'concept',
            title: 'Shifted Reciprocal Graphs',
            content: `
                <p>The general form \\(y = \\frac{a}{x - h} + k\\) represents a shifted reciprocal.</p>
                <div class="lesson-box">
                    <p><strong>\\(y = \\frac{a}{x - h} + k\\):</strong></p>
                    <ul>
                        <li>Vertical asymptote: \\(x = h\\)</li>
                        <li>Horizontal asymptote: \\(y = k\\)</li>
                        <li>The asymptotes act as the "new axes" for the reciprocal shape</li>
                        <li>Sign of \\(a\\) determines which quadrants (relative to the centre \\((h, k)\\))</li>
                    </ul>
                </div>
                <p>Think of it as the graph of \\(y = \\frac{a}{x}\\) translated by \\(\\begin{pmatrix} h \\\\ k \\end{pmatrix}\\).</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px;width:100%"><defs><marker id="ra-arr2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#e0e0e0"/></marker></defs><line x1="20" y1="180" x2="305" y2="180" stroke="#444" stroke-width="0.5" marker-end="url(#ra-arr2)"/><line x1="30" y1="195" x2="30" y2="5" stroke="#444" stroke-width="0.5" marker-end="url(#ra-arr2)"/><text x="308" y="184" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">x</text><text x="34" y="14" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">y</text><line x1="130" y1="5" x2="130" y2="195" stroke="#feca57" stroke-width="0.8" stroke-dasharray="4,3"/><line x1="20" y1="120" x2="305" y2="120" stroke="#feca57" stroke-width="0.8" stroke-dasharray="4,3"/><text x="132" y="194" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#feca57">x=2</text><text x="275" y="115" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#feca57">y=1</text><path d="M140,8 C142,25 145,55 150,75 C158,95 170,108 295,117" stroke="#54a0ff" stroke-width="2.5" fill="none"/><path d="M120,192 C118,175 115,155 110,140 C105,130 95,123 25,121" stroke="#54a0ff" stroke-width="2.5" fill="none"/><text x="200" y="75" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">y = 1/(x-2) + 1</text><circle cx="130" cy="120" r="3" fill="#ff6b6b"/><text x="138" y="138" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#ff6b6b">centre (2,1)</text></svg></div>
            `
        },
        {
            type: 'example',
            title: 'Analysing a Shifted Reciprocal',
            problem: 'For \\(y = \\frac{2}{x + 3} - 1\\), find the asymptotes and sketch the curve.',
            steps: [
                { text: 'Rewrite: \\(y = \\frac{2}{x - (-3)} + (-1)\\), so \\(h = -3\\), \\(k = -1\\), \\(a = 2\\).' },
                { text: 'Vertical asymptote: \\(x = -3\\).' },
                { text: 'Horizontal asymptote: \\(y = -1\\).' },
                { text: 'Since \\(a = 2 > 0\\), the branches are in the "first and third quadrants" relative to the centre \\((-3, -1)\\).' },
                { text: '\\(y\\)-intercept: set \\(x = 0\\): \\(y = \\frac{2}{3} - 1 = -\\frac{1}{3}\\).' },
                { text: 'Sketch: draw dashed lines for both asymptotes, then draw the two branches approaching them.' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var h = Math.floor(Math.random() * 9) - 4;
                var k = Math.floor(Math.random() * 9) - 4;
                var a = Math.floor(Math.random() * 5) + 1;
                if (Math.random() < 0.5) a = -a;
                var hStr = h > 0 ? '- ' + h : h < 0 ? '+ ' + Math.abs(h) : '';
                var kStr = k > 0 ? '+ ' + k : k < 0 ? '- ' + Math.abs(k) : '';
                var correct = 'x = ' + h + ' \\text{ and } y = ' + k;
                var wrong1 = 'x = ' + (-h) + ' \\text{ and } y = ' + k;
                var wrong2 = 'x = ' + h + ' \\text{ and } y = ' + (-k);
                var wrong3 = 'x = ' + (-h) + ' \\text{ and } y = ' + (-k);
                var opts = [correct, wrong1, wrong2, wrong3];
                var correctIdx = 0;
                for (var i = opts.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = opts[i]; opts[i] = opts[j]; opts[j] = tmp;
                    if (j === correctIdx) correctIdx = i;
                    else if (i === correctIdx) correctIdx = j;
                }
                var denom = hStr ? '(x ' + hStr + ')' : 'x';
                return {
                    type: 'mc',
                    latex: '\\text{Find the asymptotes of } y = \\frac{' + a + '}{' + denom + '} ' + kStr + '.',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: 'Vertical: set denominator to zero gives \\(x = ' + h + '\\). Horizontal: as \\(x \\to \\infty\\), \\(y \\to ' + k + '\\).'
                };
            }
        },
        {
            type: 'concept',
            title: 'Identifying Asymptotes from Equations',
            content: `
                <p>Sometimes the equation is not in standard form. You may need to rearrange.</p>
                <div class="lesson-box">
                    <p><strong>For any rational function \\(y = \\frac{p(x)}{q(x)}\\):</strong></p>
                    <ul>
                        <li>Vertical asymptotes: solve \\(q(x) = 0\\)</li>
                        <li>Horizontal asymptote: consider what happens as \\(x \\to \\infty\\)</li>
                    </ul>
                </div>
                <p>For example, \\(y = \\frac{2x + 1}{x - 3}\\):</p>
                <ul>
                    <li>Vertical asymptote: \\(x = 3\\)</li>
                    <li>Horizontal: divide through by \\(x\\): \\(y = \\frac{2 + \\frac{1}{x}}{1 - \\frac{3}{x}} \\to \\frac{2}{1} = 2\\) as \\(x \\to \\infty\\)</li>
                    <li>Horizontal asymptote: \\(y = 2\\)</li>
                </ul>
            `
        },
        {
            type: 'example',
            title: 'Finding Asymptotes by Rearranging',
            problem: 'Find the asymptotes of \\(y = \\frac{3x - 5}{x + 2}\\).',
            steps: [
                { text: 'Vertical asymptote: set \\(x + 2 = 0\\), so \\(x = -2\\).' },
                { text: 'For the horizontal asymptote, divide numerator and denominator by \\(x\\):' },
                { text: '\\(y = \\frac{3 - \\frac{5}{x}}{1 + \\frac{2}{x}}\\)' },
                { text: 'As \\(x \\to \\infty\\), \\(\\frac{5}{x} \\to 0\\) and \\(\\frac{2}{x} \\to 0\\).' },
                { text: 'So \\(y \\to \\frac{3}{1} = 3\\). Horizontal asymptote: \\(y = 3\\).' },
                { text: 'Alternatively: \\(\\frac{3x-5}{x+2} = \\frac{3(x+2) - 11}{x+2} = 3 - \\frac{11}{x+2}\\), confirming \\(y \\to 3\\).' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 5) + 1;
                var b = Math.floor(Math.random() * 11) - 5;
                var c = Math.floor(Math.random() * 9) - 4;
                while (c === 0) c = Math.floor(Math.random() * 9) - 4;
                var cStr = c > 0 ? '+ ' + c : '- ' + Math.abs(c);
                var va = -c;
                var ha = a;
                return {
                    type: 'short',
                    latex: '\\text{The vertical asymptote of } y = \\frac{' + a + 'x + ' + b + '}{x ' + cStr + '} \\text{ is } x = \\text{?}',
                    answer: String(va),
                    explain: 'Set denominator to zero: \\(x ' + cStr + ' = 0\\), so \\(x = ' + va + '\\).'
                };
            }
        },
        {
            type: 'practice',
            generate: function() {
                var h = Math.floor(Math.random() * 7) - 3;
                var k = Math.floor(Math.random() * 7) - 3;
                var a = Math.floor(Math.random() * 5) + 1;
                var hStr = h > 0 ? '- ' + h : h < 0 ? '+ ' + Math.abs(h) : '';
                var kStr = k > 0 ? '+ ' + k : k < 0 ? '- ' + Math.abs(k) : '';
                var denom = hStr ? '(x ' + hStr + ')' : 'x';
                var yInt;
                if (h !== 0) {
                    yInt = (a / (-h)) + k;
                } else {
                    yInt = 'undefined';
                }
                var yIntNum = Math.round(yInt * 100) / 100;
                return {
                    type: 'short',
                    latex: '\\text{The horizontal asymptote of } y = \\frac{' + a + '}{' + denom + '} ' + kStr + ' \\text{ is } y = \\text{?}',
                    answer: String(k),
                    explain: 'As \\(x \\to \\infty\\), \\(\\frac{' + a + '}{' + denom + '} \\to 0\\), so \\(y \\to ' + k + '\\).'
                };
            }
        },
        {
            type: 'summary',
            title: 'Reciprocal Graphs & Asymptotes - Summary',
            content: '<p>Key ideas about reciprocal functions and asymptotes:</p>',
            points: [
                '\\(y = \\frac{1}{x}\\) has two branches with asymptotes \\(x = 0\\) and \\(y = 0\\)',
                '\\(a > 0\\): branches in Q1 and Q3. \\(a < 0\\): branches in Q2 and Q4.',
                'Vertical asymptote: set the denominator equal to zero',
                'Horizontal asymptote: see what \\(y\\) approaches as \\(x \\to \\infty\\)',
                '\\(y = \\frac{a}{x - h} + k\\) has asymptotes \\(x = h\\) and \\(y = k\\)',
                'The asymptotes act as the "new axes" for the reciprocal shape'
            ]
        }
    ]
};
