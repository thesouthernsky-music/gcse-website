window.CURRENT_LESSON = {
    title: "Graph Transformations",
    subtitle: "Translations, reflections, and stretches",
    screens: [
        {
            type: 'concept',
            title: 'Introduction to Transformations',
            content: `
                <p>Given a graph \\(y = f(x)\\), we can transform it by modifying the equation.</p>
                <div class="lesson-box">
                    <p><strong>Four types of transformation:</strong></p>
                    <ul>
                        <li><strong>Translations</strong> - shifting the graph up/down or left/right</li>
                        <li><strong>Reflections</strong> - flipping the graph</li>
                        <li><strong>Vertical stretches</strong> - stretching/compressing vertically</li>
                        <li><strong>Horizontal stretches</strong> - stretching/compressing horizontally</li>
                    </ul>
                </div>
                <p>The key is understanding how changes to the equation affect the graph. Changes <em>outside</em> \\(f(x)\\) affect \\(y\\) directly, while changes <em>inside</em> \\(f(\\ldots)\\) affect \\(x\\) and often work in the opposite direction.</p>
            `
        },
        {
            type: 'concept',
            title: 'Vertical Translation: y = f(x) + a',
            content: `
                <p>Adding a constant <strong>outside</strong> the function shifts the graph <strong>vertically</strong>.</p>
                <div class="lesson-box">
                    <p><strong>\\(y = f(x) + a\\):</strong></p>
                    <ul>
                        <li>If \\(a > 0\\): shifts <strong>up</strong> by \\(a\\) units</li>
                        <li>If \\(a < 0\\): shifts <strong>down</strong> by \\(|a|\\) units</li>
                    </ul>
                    <p>Translation vector: \\(\\begin{pmatrix} 0 \\\\ a \\end{pmatrix}\\)</p>
                </div>
                <p>Every point \\((x, y)\\) moves to \\((x, y + a)\\).</p>
                <p>This makes intuitive sense - you are adding \\(a\\) to every \\(y\\)-value.</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px;width:100%"><defs><marker id="gt-arr1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#e0e0e0"/></marker><marker id="gt-arr-up" markerWidth="6" markerHeight="8" refX="3" refY="0" orient="auto"><path d="M0,8 L3,0 L6,8" fill="#feca57"/></marker></defs><line x1="30" y1="150" x2="300" y2="150" stroke="#444" stroke-width="0.5" marker-end="url(#gt-arr1)"/><line x1="50" y1="190" x2="50" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#gt-arr1)"/><text x="303" y="154" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">x</text><text x="54" y="16" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">y</text><path d="M70,50 Q130,20 170,150 Q210,180 250,150 Q270,130 285,80" stroke="#444" stroke-width="1.5" stroke-dasharray="5,4" fill="none"/><path d="M70,25 Q130,-5 170,125 Q210,155 250,125 Q270,105 285,55" stroke="#00e5c7" stroke-width="2.5" fill="none"/><text x="195" y="175" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#666">y = f(x)</text><text x="180" y="50" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">y = f(x) + 2</text><line x1="130" y1="55" x2="130" y2="30" stroke="#feca57" stroke-width="1.5" marker-end="url(#gt-arr-up)"/><text x="135" y="47" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#feca57">+2</text></svg></div>
            `
        },
        {
            type: 'concept',
            title: 'Horizontal Translation: y = f(x + a)',
            content: `
                <p>Adding a constant <strong>inside</strong> the function shifts the graph <strong>horizontally</strong>.</p>
                <div class="lesson-box">
                    <p><strong>\\(y = f(x + a)\\):</strong></p>
                    <ul>
                        <li>If \\(a > 0\\): shifts <strong>left</strong> by \\(a\\) units</li>
                        <li>If \\(a < 0\\): shifts <strong>right</strong> by \\(|a|\\) units</li>
                    </ul>
                    <p>Translation vector: \\(\\begin{pmatrix} -a \\\\ 0 \\end{pmatrix}\\)</p>
                </div>
                <p><strong>Warning:</strong> This is the <em>opposite</em> direction to what you might expect!</p>
                <p>Think of it this way: \\(f(x + 3)\\) achieves the same \\(y\\)-value 3 units earlier (to the left), because \\(x + 3\\) reaches any target value when \\(x\\) is 3 less.</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px;width:100%"><defs><marker id="gt-arr2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#e0e0e0"/></marker><marker id="gt-arr-left" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto"><path d="M8,0 L0,3 L8,6" fill="#feca57"/></marker></defs><line x1="20" y1="150" x2="305" y2="150" stroke="#444" stroke-width="0.5" marker-end="url(#gt-arr2)"/><line x1="160" y1="190" x2="160" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#gt-arr2)"/><text x="308" y="154" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">x</text><text x="164" y="16" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">y</text><path d="M130,40 Q170,20 210,150 Q240,175 270,130 Q285,100 295,60" stroke="#444" stroke-width="1.5" stroke-dasharray="5,4" fill="none"/><path d="M50,40 Q90,20 130,150 Q160,175 190,130 Q205,100 215,60" stroke="#54a0ff" stroke-width="2.5" fill="none"/><text x="240" y="85" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#666">y = f(x)</text><text x="40" y="70" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#54a0ff">y = f(x+3)</text><line x1="210" y1="130" x2="130" y2="130" stroke="#feca57" stroke-width="1.5" marker-end="url(#gt-arr-left)"/><text x="155" y="123" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#feca57">3 units left</text></svg></div>
            `
        },
        {
            type: 'example',
            title: 'Identifying Translations',
            problem: 'The graph of \\(y = x^2\\) is transformed to \\(y = (x-3)^2 + 5\\). Describe the transformation.',
            steps: [
                { text: 'Compare with \\(y = f(x+a) + b\\) where \\(f(x) = x^2\\).' },
                { text: 'Inside the function: \\(x\\) is replaced by \\((x - 3)\\), so \\(a = -3\\).' },
                { text: 'This gives a horizontal shift of \\(-(-3) = 3\\) units to the <strong>right</strong>.' },
                { text: 'Outside the function: \\(+5\\), so shift <strong>up</strong> by 5 units.' },
                { text: 'Translation vector: \\(\\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}\\)' },
                { text: 'The vertex moves from \\((0, 0)\\) to \\((3, 5)\\).' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var h = Math.floor(Math.random() * 9) - 4;
                var k = Math.floor(Math.random() * 9) - 4;
                while (h === 0 && k === 0) { h = Math.floor(Math.random() * 7) - 3; k = Math.floor(Math.random() * 7) - 3; }
                var hStr = h > 0 ? '+ ' + h : h < 0 ? '- ' + Math.abs(h) : '';
                var kStr = k > 0 ? '+ ' + k : k < 0 ? '- ' + Math.abs(k) : '';
                var eq = 'y = f(x ' + hStr + ') ' + kStr;
                var hDir = h > 0 ? Math.abs(h) + ' left' : h < 0 ? Math.abs(h) + ' right' : 'no horizontal shift';
                var kDir = k > 0 ? k + ' up' : k < 0 ? Math.abs(k) + ' down' : 'no vertical shift';
                var correct = hDir + ', ' + kDir;
                var wrong1 = (h > 0 ? Math.abs(h) + ' right' : h < 0 ? Math.abs(h) + ' left' : 'no horizontal shift') + ', ' + kDir;
                var wrong2 = hDir + ', ' + (k > 0 ? k + ' down' : k < 0 ? Math.abs(k) + ' up' : 'no vertical shift');
                var wrong3 = (h > 0 ? Math.abs(h) + ' right' : h < 0 ? Math.abs(h) + ' left' : 'no horizontal shift') + ', ' + (k > 0 ? k + ' down' : k < 0 ? Math.abs(k) + ' up' : 'no vertical shift');
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
                    latex: '\\text{Describe the transformation from } y = f(x) \\text{ to } ' + eq + '.',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: '\\(f(x ' + hStr + ')\\) shifts ' + hDir + '. The \\(' + kStr + '\\) shifts ' + kDir + '.'
                };
            }
        },
        {
            type: 'concept',
            title: 'Vertical Stretch: y = af(x)',
            content: `
                <p>Multiplying <strong>outside</strong> the function stretches the graph <strong>vertically</strong>.</p>
                <div class="lesson-box">
                    <p><strong>\\(y = af(x)\\):</strong> stretch vertically by scale factor \\(a\\).</p>
                    <ul>
                        <li>If \\(a > 1\\): the graph is stretched (taller)</li>
                        <li>If \\(0 < a < 1\\): the graph is compressed (shorter)</li>
                    </ul>
                    <p>Every point \\((x, y)\\) moves to \\((x, ay)\\).</p>
                </div>
                <p>Points on the \\(x\\)-axis (where \\(y = 0\\)) do not move, since \\(a \\times 0 = 0\\).</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px;width:100%"><defs><marker id="gt-arr3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#e0e0e0"/></marker></defs><line x1="30" y1="130" x2="300" y2="130" stroke="#444" stroke-width="0.5" marker-end="url(#gt-arr3)"/><line x1="50" y1="195" x2="50" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#gt-arr3)"/><text x="303" y="134" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">x</text><text x="54" y="16" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">y</text><path d="M70,70 Q120,45 160,130 Q195,155 230,130 Q255,115 280,90" stroke="#444" stroke-width="1.5" stroke-dasharray="5,4" fill="none"/><path d="M70,10 Q120,-40 160,130 Q195,180 230,130 Q255,100 280,50" stroke="#ff6b6b" stroke-width="2.5" fill="none"/><text x="230" y="80" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#666">y = f(x)</text><text x="205" y="45" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b">y = 2f(x)</text><text x="160" y="190" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">x-intercepts stay fixed; y-values doubled</text></svg></div>
            `
        },
        {
            type: 'concept',
            title: 'Horizontal Stretch: y = f(ax)',
            content: `
                <p>Multiplying <strong>inside</strong> the function stretches the graph <strong>horizontally</strong>.</p>
                <div class="lesson-box">
                    <p><strong>\\(y = f(ax)\\):</strong> stretch horizontally by scale factor \\(\\frac{1}{a}\\).</p>
                    <ul>
                        <li>If \\(a > 1\\): the graph is compressed horizontally (narrower)</li>
                        <li>If \\(0 < a < 1\\): the graph is stretched horizontally (wider)</li>
                    </ul>
                    <p>Every point \\((x, y)\\) moves to \\(\\left(\\frac{x}{a}, y\\right)\\).</p>
                </div>
                <p>Again, the effect is the <em>opposite</em> of what the number suggests - just like horizontal translations.</p>
            `
        },
        {
            type: 'example',
            title: 'Applying Stretches',
            problem: 'The point \\((4, 6)\\) lies on \\(y = f(x)\\). Find the corresponding point on (a) \\(y = 3f(x)\\) and (b) \\(y = f(2x)\\).',
            steps: [
                { text: '(a) \\(y = 3f(x)\\): vertical stretch, scale factor 3.' },
                { text: 'The \\(x\\)-coordinate stays the same; the \\(y\\)-coordinate is multiplied by 3.' },
                { text: '\\((4, 6) \\to (4, 18)\\)' },
                { text: '(b) \\(y = f(2x)\\): horizontal stretch, scale factor \\(\\frac{1}{2}\\).' },
                { text: 'The \\(y\\)-coordinate stays the same; the \\(x\\)-coordinate is divided by 2.' },
                { text: '\\((4, 6) \\to (2, 6)\\)' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var px = Math.floor(Math.random() * 8) + 2;
                var py = Math.floor(Math.random() * 8) + 1;
                var sf = Math.floor(Math.random() * 4) + 2;
                var isVertical = Math.random() < 0.5;
                var newX, newY, desc;
                if (isVertical) {
                    newX = px; newY = py * sf;
                    desc = 'y = ' + sf + 'f(x)';
                } else {
                    newX = px / sf; newY = py;
                    desc = 'y = f(' + sf + 'x)';
                    while (px % sf !== 0) {
                        px = sf * (Math.floor(Math.random() * 5) + 1);
                    }
                    newX = px / sf; newY = py;
                }
                var correct = '(' + newX + ', ' + newY + ')';
                var wrong1 = isVertical ? '(' + (px * sf) + ', ' + py + ')' : '(' + px + ', ' + (py * sf) + ')';
                var wrong2 = isVertical ? '(' + px + ', ' + (py + sf) + ')' : '(' + (px - sf) + ', ' + py + ')';
                var wrong3 = '(' + (px * sf) + ', ' + (py * sf) + ')';
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
                    latex: '\\text{The point } (' + px + ', ' + py + ') \\text{ lies on } y = f(x). \\text{ Find the corresponding point on } ' + desc + '.',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: isVertical
                        ? 'Vertical stretch by factor ' + sf + ': multiply \\(y\\) by ' + sf + '. \\((' + px + ', ' + py + ') \\to (' + newX + ', ' + newY + ')\\)'
                        : 'Horizontal stretch by factor \\(\\frac{1}{' + sf + '}\\): divide \\(x\\) by ' + sf + '. \\((' + px + ', ' + py + ') \\to (' + newX + ', ' + newY + ')\\)'
                };
            }
        },
        {
            type: 'concept',
            title: 'Reflection in the x-Axis: y = -f(x)',
            content: `
                <p>Negating <strong>outside</strong> the function reflects in the <strong>\\(x\\)-axis</strong>.</p>
                <div class="lesson-box">
                    <p><strong>\\(y = -f(x)\\):</strong> reflect in the \\(x\\)-axis.</p>
                    <p>Every point \\((x, y)\\) moves to \\((x, -y)\\).</p>
                </div>
                <p>The \\(x\\)-coordinates stay the same; \\(y\\)-coordinates change sign.</p>
                <p>Peaks become troughs and troughs become peaks.</p>
            `
        },
        {
            type: 'concept',
            title: 'Reflection in the y-Axis: y = f(-x)',
            content: `
                <p>Negating <strong>inside</strong> the function reflects in the <strong>\\(y\\)-axis</strong>.</p>
                <div class="lesson-box">
                    <p><strong>\\(y = f(-x)\\):</strong> reflect in the \\(y\\)-axis.</p>
                    <p>Every point \\((x, y)\\) moves to \\((-x, y)\\).</p>
                </div>
                <p>The \\(y\\)-coordinates stay the same; \\(x\\)-coordinates change sign.</p>
                <p>The left side becomes the right side and vice versa.</p>
            `
        },
        {
            type: 'example',
            title: 'Identifying a Reflection',
            problem: 'The curve \\(y = x^3 - 2x\\) is transformed. The new equation is \\(y = -x^3 + 2x\\). Describe the transformation.',
            steps: [
                { text: 'Compare: \\(y = -x^3 + 2x = -(x^3 - 2x)\\).' },
                { text: 'This is \\(y = -f(x)\\) where \\(f(x) = x^3 - 2x\\).' },
                { text: 'So this is a reflection in the \\(x\\)-axis.' },
                { text: 'Every point \\((x, y)\\) on the original maps to \\((x, -y)\\) on the new curve.' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var px = Math.floor(Math.random() * 8) - 3;
                var py = Math.floor(Math.random() * 10) - 4;
                while (py === 0) py = Math.floor(Math.random() * 8) + 1;
                var isXaxis = Math.random() < 0.5;
                var transf = isXaxis ? 'y = -f(x)' : 'y = f(-x)';
                var newX = isXaxis ? px : -px;
                var newY = isXaxis ? -py : py;
                var correct = '(' + newX + ', ' + newY + ')';
                var wrong1 = '(' + (-px) + ', ' + (-py) + ')';
                var wrong2 = isXaxis ? '(' + (-px) + ', ' + py + ')' : '(' + px + ', ' + (-py) + ')';
                var wrong3 = '(' + px + ', ' + py + ')';
                if (correct === wrong3) wrong3 = '(' + (px + 1) + ', ' + (py + 1) + ')';
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
                    latex: '\\text{The point } (' + px + ', ' + py + ') \\text{ lies on } y = f(x). \\text{ Find the corresponding point on } ' + transf + '.',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: isXaxis
                        ? 'Reflection in \\(x\\)-axis: \\((x, y) \\to (x, -y)\\). So \\((' + px + ', ' + py + ') \\to (' + newX + ', ' + newY + ')\\).'
                        : 'Reflection in \\(y\\)-axis: \\((x, y) \\to (-x, y)\\). So \\((' + px + ', ' + py + ') \\to (' + newX + ', ' + newY + ')\\).'
                };
            }
        },
        {
            type: 'concept',
            title: 'Combining Transformations',
            content: `
                <p>Transformations can be combined. The order matters!</p>
                <div class="lesson-box">
                    <p><strong>Reading combined transformations:</strong></p>
                    <p>For \\(y = af(bx + c) + d\\):</p>
                    <ul>
                        <li>\\(d\\): vertical translation (up if \\(d > 0\\))</li>
                        <li>\\(a\\): vertical stretch by \\(|a|\\) (reflect in \\(x\\)-axis if \\(a < 0\\))</li>
                        <li>\\(c\\): horizontal translation (left by \\(\\frac{c}{b}\\))</li>
                        <li>\\(b\\): horizontal stretch by \\(\\frac{1}{|b|}\\) (reflect in \\(y\\)-axis if \\(b < 0\\))</li>
                    </ul>
                </div>
                <p>When applying to a point, do horizontal changes first (inside), then vertical changes (outside).</p>
            `
        },
        {
            type: 'practice',
            generate: function() {
                var transforms = [
                    { eq: 'y = f(x) + 3', desc: 'Translation \\(\\begin{pmatrix} 0 \\\\ 3 \\end{pmatrix}\\)' },
                    { eq: 'y = f(x + 4)', desc: 'Translation \\(\\begin{pmatrix} -4 \\\\ 0 \\end{pmatrix}\\)' },
                    { eq: 'y = 2f(x)', desc: 'Vertical stretch, scale factor 2' },
                    { eq: 'y = f(3x)', desc: 'Horizontal stretch, scale factor \\(\\frac{1}{3}\\)' },
                    { eq: 'y = -f(x)', desc: 'Reflection in the \\(x\\)-axis' },
                    { eq: 'y = f(-x)', desc: 'Reflection in the \\(y\\)-axis' }
                ];
                var pick = transforms[Math.floor(Math.random() * transforms.length)];
                var wrongIndices = [];
                while (wrongIndices.length < 3) {
                    var idx = Math.floor(Math.random() * transforms.length);
                    if (transforms[idx].eq !== pick.eq && wrongIndices.indexOf(idx) === -1) {
                        wrongIndices.push(idx);
                    }
                }
                var opts = [pick.desc, transforms[wrongIndices[0]].desc, transforms[wrongIndices[1]].desc, transforms[wrongIndices[2]].desc];
                var correctIdx = 0;
                for (var i = opts.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = opts[i]; opts[i] = opts[j]; opts[j] = tmp;
                    if (j === correctIdx) correctIdx = i;
                    else if (i === correctIdx) correctIdx = j;
                }
                return {
                    type: 'mc',
                    latex: '\\text{Describe the transformation from } y = f(x) \\text{ to } ' + pick.eq + '.',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: '\\(' + pick.eq + '\\) represents: ' + pick.desc + '.'
                };
            }
        },
        {
            type: 'concept',
            title: 'Quick Reference',
            content: `
                <div class="lesson-box">
                    <p><strong>Transformation summary:</strong></p>
                    <table style="width:100%;border-collapse:collapse;margin-top:0.5em;">
                        <tr><th style="text-align:left;padding:4px;border-bottom:1px solid var(--border);">Equation</th><th style="text-align:left;padding:4px;border-bottom:1px solid var(--border);">Transformation</th></tr>
                        <tr><td style="padding:4px;">\\(y = f(x) + a\\)</td><td style="padding:4px;">Shift up by \\(a\\)</td></tr>
                        <tr><td style="padding:4px;">\\(y = f(x + a)\\)</td><td style="padding:4px;">Shift left by \\(a\\)</td></tr>
                        <tr><td style="padding:4px;">\\(y = af(x)\\)</td><td style="padding:4px;">Vertical stretch, SF \\(a\\)</td></tr>
                        <tr><td style="padding:4px;">\\(y = f(ax)\\)</td><td style="padding:4px;">Horizontal stretch, SF \\(\\frac{1}{a}\\)</td></tr>
                        <tr><td style="padding:4px;">\\(y = -f(x)\\)</td><td style="padding:4px;">Reflect in \\(x\\)-axis</td></tr>
                        <tr><td style="padding:4px;">\\(y = f(-x)\\)</td><td style="padding:4px;">Reflect in \\(y\\)-axis</td></tr>
                    </table>
                </div>
                <p><strong>Memory aid:</strong> Changes <em>inside</em> \\(f(\\ldots)\\) affect \\(x\\) and work <em>opposite</em>. Changes <em>outside</em> affect \\(y\\) and work as expected.</p>
            `
        },
        {
            type: 'summary',
            title: 'Graph Transformations - Summary',
            content: '<p>The essential rules for transforming graphs:</p>',
            points: [
                '\\(y = f(x) + a\\): vertical shift up by \\(a\\)',
                '\\(y = f(x + a)\\): horizontal shift LEFT by \\(a\\) (opposite direction!)',
                '\\(y = af(x)\\): vertical stretch by scale factor \\(a\\)',
                '\\(y = f(ax)\\): horizontal stretch by scale factor \\(\\frac{1}{a}\\) (reciprocal!)',
                '\\(y = -f(x)\\): reflection in the \\(x\\)-axis',
                '\\(y = f(-x)\\): reflection in the \\(y\\)-axis',
                'Changes inside \\(f(\\ldots)\\) affect \\(x\\) and work opposite to what you might expect'
            ]
        }
    ]
};
