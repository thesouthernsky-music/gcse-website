window.CURRENT_LESSON = {
    title: "Parallel & Perpendicular Lines",
    subtitle: "Using gradients to identify and construct related lines",
    screens: [
        // Screen 1 - Concept: Introduction
        {
            type: 'concept',
            title: 'Relationships Between Lines',
            content: `
                <p>Two lines in a plane can be related in special ways based on their gradients.</p>
                <p>The two key relationships are:</p>
                <ul>
                    <li><strong>Parallel</strong> lines never meet - they have the same gradient.</li>
                    <li><strong>Perpendicular</strong> lines meet at right angles (90 degrees).</li>
                </ul>
                <div class="lesson-box">
                    The gradient of a line completely determines its direction. Two lines with the same gradient point the same way (parallel). Two lines whose gradients satisfy a special condition meet at right angles (perpendicular).
                </div>
            `
        },
        // Screen 2 - Concept: Parallel Lines
        {
            type: 'concept',
            title: 'Parallel Lines: Equal Gradients',
            content: `
                <p>Two lines are <strong>parallel</strong> if and only if they have the <strong>same gradient</strong>.</p>
                <div class="lesson-box">
                    Lines are parallel \\(\\iff m_1 = m_2\\)
                </div>
                <p>For example, \\(y = 3x + 1\\) and \\(y = 3x - 7\\) are parallel because both have gradient 3.</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg"><defs><marker id="par-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#444"/></marker></defs><line x1="30" y1="100" x2="300" y2="100" stroke="#444" stroke-width="0.5" marker-end="url(#par-arrow)"/><line x1="160" y1="190" x2="160" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#par-arrow)"/><text x="290" y="118" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">x</text><text x="140" y="20" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">y</text><line x1="50" y1="170" x2="260" y2="40" stroke="#00e5c7" stroke-width="2.5"/><line x1="90" y1="170" x2="300" y2="40" stroke="#54a0ff" stroke-width="2.5"/><text x="52" y="185" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">y = 3x + 1</text><text x="195" y="185" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#54a0ff">y = 3x - 7</text><text x="185" y="28" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">Same gradient m</text></svg></div>
                <p>Parallel lines have the same steepness and direction but different \\(y\\)-intercepts, so they never cross.</p>
                <div class="lesson-box warning">
                    Two identical lines (same gradient and same intercept) are technically not "parallel" - they are the same line.
                </div>
            `
        },
        // Screen 3 - Concept: Perpendicular Lines
        {
            type: 'concept',
            title: 'Perpendicular Lines: Negative Reciprocal Gradients',
            content: `
                <p>Two lines are <strong>perpendicular</strong> if and only if their gradients multiply to give \\(-1\\).</p>
                <div class="lesson-box">
                    Lines are perpendicular \\(\\iff m_1 \\times m_2 = -1\\)
                </div>
                <p>Equivalently, the gradient of a perpendicular line is the <strong>negative reciprocal</strong>:</p>
                <p>\\[ m_2 = -\\frac{1}{m_1} \\]</p>
                <p>For example, if \\(m_1 = 3\\), then the perpendicular gradient is \\(m_2 = -\\frac{1}{3}\\).</p>
                <p>Check: \\(3 \\times \\left(-\\frac{1}{3}\\right) = -1\\). Correct.</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg"><defs><marker id="perp-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#444"/></marker></defs><line x1="30" y1="100" x2="300" y2="100" stroke="#444" stroke-width="0.5" marker-end="url(#perp-arrow)"/><line x1="160" y1="190" x2="160" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#perp-arrow)"/><text x="290" y="118" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">x</text><text x="140" y="20" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">y</text><line x1="70" y1="180" x2="240" y2="30" stroke="#00e5c7" stroke-width="2.5"/><line x1="50" y1="55" x2="280" y2="140" stroke="#ff6b6b" stroke-width="2.5"/><circle cx="155" cy="95" r="4" fill="#feca57"/><path d="M 147 85 L 137 92 L 144 102" fill="none" stroke="#feca57" stroke-width="1.5"/><text x="60" y="50" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">m&#x2081;</text><text x="260" y="155" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b">m&#x2082;</text><text x="175" y="190" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">m&#x2081; x m&#x2082; = -1</text></svg></div>
            `
        },
        // Screen 4 - Concept: Negative Reciprocal Examples
        {
            type: 'concept',
            title: 'Finding Negative Reciprocals',
            content: `
                <p>To find the negative reciprocal, <strong>flip the fraction and change the sign</strong>:</p>
                <table style="margin: 1em auto; border-collapse: collapse;">
                    <tr style="border-bottom: 2px solid var(--text-primary, #333);">
                        <th style="padding: 0.5em 1.5em;">Original gradient</th>
                        <th style="padding: 0.5em 1.5em;">Perpendicular gradient</th>
                    </tr>
                    <tr><td style="padding: 0.3em 1.5em; text-align: center;">\\(2\\)</td><td style="padding: 0.3em 1.5em; text-align: center;">\\(-\\frac{1}{2}\\)</td></tr>
                    <tr><td style="padding: 0.3em 1.5em; text-align: center;">\\(-4\\)</td><td style="padding: 0.3em 1.5em; text-align: center;">\\(\\frac{1}{4}\\)</td></tr>
                    <tr><td style="padding: 0.3em 1.5em; text-align: center;">\\(\\frac{2}{3}\\)</td><td style="padding: 0.3em 1.5em; text-align: center;">\\(-\\frac{3}{2}\\)</td></tr>
                    <tr><td style="padding: 0.3em 1.5em; text-align: center;">\\(-\\frac{5}{7}\\)</td><td style="padding: 0.3em 1.5em; text-align: center;">\\(\\frac{7}{5}\\)</td></tr>
                    <tr><td style="padding: 0.3em 1.5em; text-align: center;">\\(1\\)</td><td style="padding: 0.3em 1.5em; text-align: center;">\\(-1\\)</td></tr>
                </table>
                <div class="lesson-box">
                    Special case: horizontal lines (\\(m = 0\\)) are perpendicular to vertical lines (undefined gradient).
                </div>
            `
        },
        // Screen 5 - Practice: Identify Relationship
        {
            type: 'practice',
            generate: function() {
                var type = Math.floor(Math.random() * 3);
                var m1, m2, relationship;
                if (type === 0) {
                    m1 = Math.floor(Math.random() * 7) - 3;
                    if (m1 === 0) m1 = 2;
                    m2 = m1;
                    relationship = 'Parallel';
                } else if (type === 1) {
                    var nums = [[2, -1, 2], [3, -1, 3], [-4, 1, 4], [1, -1, 1], [-2, 1, 2], [5, -1, 5]];
                    var pick = nums[Math.floor(Math.random() * nums.length)];
                    m1 = pick[0];
                    m2 = pick[1] + '/' + pick[2];
                    relationship = 'Perpendicular';
                } else {
                    m1 = Math.floor(Math.random() * 5) + 1;
                    m2 = m1 + Math.floor(Math.random() * 3) + 1;
                    relationship = 'Neither';
                }
                var options = ['Parallel', 'Perpendicular', 'Neither'];
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(relationship);
                var m2Display = (typeof m2 === 'string') ? m2.replace('/', '}{').replace(/^(-?)(.*)$/, function(_, s, r) { return s + '\\frac{' + r + '}'; }) : '' + m2;
                if (typeof m2 === 'string') {
                    var parts = m2.split('/');
                    m2Display = (parseInt(parts[0]) < 0 ? '-' : '') + '\\frac{' + Math.abs(parseInt(parts[0])) + '}{' + parts[1] + '}';
                }
                return {
                    type: 'mc',
                    latex: 'Two lines have gradients \\(' + m1 + '\\) and \\(' + m2Display + '\\). Are they parallel, perpendicular, or neither?',
                    options: options,
                    correctIdx: correctIdx,
                    explain: relationship === 'Parallel' ? 'The gradients are equal (\\(' + m1 + ' = ' + m2Display + '\\)), so the lines are parallel.' :
                             relationship === 'Perpendicular' ? 'Check: \\(' + m1 + ' \\times ' + m2Display + ' = -1\\), so the lines are perpendicular.' :
                             'The gradients are not equal (not parallel) and their product is not \\(-1\\) (not perpendicular).'
                };
            }
        },
        // Screen 6 - Example: Parallel Line Through a Point
        {
            type: 'example',
            title: 'Finding a Parallel Line',
            problem: 'Find the equation of the line parallel to \\(y = 3x + 1\\) that passes through \\((2, 4)\\).',
            steps: [
                { text: 'The given line has gradient \\(m = 3\\).' },
                { text: 'A parallel line has the same gradient, so \\(m = 3\\).' },
                { text: 'Use point-gradient form: \\(y - 4 = 3(x - 2)\\).' },
                { text: 'Expand: \\(y - 4 = 3x - 6\\).' },
                { text: '\\(y = 3x - 2\\).' }
            ]
        },
        // Screen 7 - Practice: Parallel Line
        {
            type: 'practice',
            generate: function() {
                var m = Math.floor(Math.random() * 7) - 3;
                if (m === 0) m = 2;
                var c1 = Math.floor(Math.random() * 9) - 4;
                var px = Math.floor(Math.random() * 7) - 3;
                var py = Math.floor(Math.random() * 13) - 6;
                var c2 = py - m * px;
                var correctStr = 'y = ' + m + 'x' + (c2 === 0 ? '' : (c2 > 0 ? ' + ' + c2 : ' - ' + Math.abs(c2)));
                var options = [
                    correctStr,
                    'y = ' + m + 'x' + (c2 + 1 === 0 ? '' : (c2 + 1 > 0 ? ' + ' + (c2 + 1) : ' - ' + Math.abs(c2 + 1))),
                    'y = ' + (-m) + 'x' + (c2 === 0 ? '' : (c2 > 0 ? ' + ' + c2 : ' - ' + Math.abs(c2))),
                    'y = ' + (m + 1) + 'x' + (c2 === 0 ? '' : (c2 > 0 ? ' + ' + c2 : ' - ' + Math.abs(c2)))
                ];
                options = [...new Set(options)];
                while (options.length < 4) options.push('y = ' + m + 'x + ' + (Math.abs(c2) + options.length + 2));
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(correctStr);
                return {
                    type: 'mc',
                    latex: 'Find the equation of the line parallel to \\(y = ' + m + 'x' + (c1 >= 0 ? ' + ' + c1 : ' - ' + Math.abs(c1)) + '\\) passing through \\((' + px + ', ' + py + ')\\).',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Parallel means same gradient: \\(m = ' + m + '\\). Using \\((' + px + ', ' + py + ')\\): \\(y - ' + (py < 0 ? '(' + py + ')' : py) + ' = ' + m + '(x - ' + (px < 0 ? '(' + px + ')' : px) + ')\\) gives \\(' + correctStr + '\\).'
                };
            }
        },
        // Screen 8 - Concept: Finding Perpendicular Line Through a Point
        {
            type: 'concept',
            title: 'Finding a Perpendicular Line Through a Point',
            content: `
                <p>To find the equation of a line perpendicular to a given line through a given point:</p>
                <ol>
                    <li><strong>Find the gradient</strong> of the given line.</li>
                    <li><strong>Take the negative reciprocal</strong> to get the perpendicular gradient.</li>
                    <li><strong>Use point-gradient form</strong> with the given point and the perpendicular gradient.</li>
                </ol>
                <div class="lesson-box">
                    If the original gradient is \\(m\\), the perpendicular gradient is \\(-\\frac{1}{m}\\). Then use \\(y - y_1 = -\\frac{1}{m}(x - x_1)\\).
                </div>
            `
        },
        // Screen 9 - Example: Perpendicular Line
        {
            type: 'example',
            title: 'Finding a Perpendicular Line',
            problem: 'Find the equation of the line perpendicular to \\(2x + 3y = 6\\) that passes through \\((1, -1)\\).',
            steps: [
                { text: 'Rearrange to find the gradient: \\(3y = -2x + 6\\), so \\(y = -\\frac{2}{3}x + 2\\). Gradient is \\(-\\frac{2}{3}\\).' },
                { text: 'Perpendicular gradient: \\(m = -\\frac{1}{-2/3} = \\frac{3}{2}\\).' },
                { text: 'Use point-gradient form: \\(y - (-1) = \\frac{3}{2}(x - 1)\\).' },
                { text: '\\(y + 1 = \\frac{3}{2}x - \\frac{3}{2}\\).' },
                { text: '\\(y = \\frac{3}{2}x - \\frac{5}{2}\\).' }
            ]
        },
        // Screen 10 - Practice: Negative Reciprocal
        {
            type: 'practice',
            generate: function() {
                var gradients = [
                    { m: '2', perp: '-\\frac{1}{2}' },
                    { m: '-3', perp: '\\frac{1}{3}' },
                    { m: '\\frac{1}{4}', perp: '-4' },
                    { m: '-\\frac{2}{5}', perp: '\\frac{5}{2}' },
                    { m: '5', perp: '-\\frac{1}{5}' },
                    { m: '-1', perp: '1' },
                    { m: '\\frac{3}{7}', perp: '-\\frac{7}{3}' }
                ];
                var pick = gradients[Math.floor(Math.random() * gradients.length)];
                var wrongs = gradients.filter(function(g) { return g.m !== pick.m; });
                var wrongPerps = wrongs.map(function(g) { return g.perp; });
                var options = [pick.perp];
                while (options.length < 4 && wrongPerps.length > 0) {
                    var w = wrongPerps.splice(Math.floor(Math.random() * wrongPerps.length), 1)[0];
                    if (options.indexOf(w) === -1) options.push(w);
                }
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(pick.perp);
                return {
                    type: 'mc',
                    latex: 'A line has gradient \\(' + pick.m + '\\). What is the gradient of a perpendicular line?',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'The perpendicular gradient is the negative reciprocal of \\(' + pick.m + '\\), which is \\(' + pick.perp + '\\). Check: their product equals \\(-1\\).'
                };
            }
        },
        // Screen 11 - Practice: Perpendicular Line Equation
        {
            type: 'practice',
            generate: function() {
                var pairs = [
                    { m: 2, pm: '-1/2', pmLatex: '-\\frac{1}{2}', pmVal: -0.5 },
                    { m: -3, pm: '1/3', pmLatex: '\\frac{1}{3}', pmVal: 1/3 },
                    { m: 4, pm: '-1/4', pmLatex: '-\\frac{1}{4}', pmVal: -0.25 },
                    { m: -2, pm: '1/2', pmLatex: '\\frac{1}{2}', pmVal: 0.5 }
                ];
                var pick = pairs[Math.floor(Math.random() * pairs.length)];
                var c1 = Math.floor(Math.random() * 7) - 3;
                var px = Math.floor(Math.random() * 5) - 2;
                var py = Math.floor(Math.random() * 9) - 4;
                // The perpendicular line: y - py = pm(x - px)
                // y = pm*x + (py - pm*px)
                var cNew = py - pick.pmVal * px;
                // Express in fraction form for display
                var mStr = pick.m;
                var correct = 'y = ' + pick.pmLatex + 'x' + (cNew === 0 ? '' : (cNew > 0 ? ' + ' + cNew : ' - ' + Math.abs(cNew)));
                // For MC, use text descriptions
                var options = [
                    pick.pmLatex,
                    '' + pick.m,
                    '' + (-pick.m),
                    pick.pmLatex.charAt(0) === '-' ? pick.pmLatex.substring(1) : '-' + pick.pmLatex
                ];
                options = [...new Set(options)];
                while (options.length < 4) options.push('' + (pick.m + options.length));
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(pick.pmLatex);
                return {
                    type: 'mc',
                    latex: 'A line is perpendicular to \\(y = ' + pick.m + 'x' + (c1 >= 0 ? ' + ' + c1 : ' - ' + Math.abs(c1)) + '\\). What is its gradient?',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'The original gradient is \\(' + pick.m + '\\). The perpendicular gradient is \\(' + pick.pmLatex + '\\) since \\(' + pick.m + ' \\times ' + pick.pmLatex + ' = -1\\).'
                };
            }
        },
        // Screen 12 - Concept: Proving Lines are Parallel or Perpendicular
        {
            type: 'concept',
            title: 'Proving Lines are Parallel or Perpendicular',
            content: `
                <p>To prove two lines are parallel or perpendicular:</p>
                <ol>
                    <li>Find both gradients (rearranging to \\(y = mx + c\\) if needed).</li>
                    <li>Compare them:
                        <ul>
                            <li>If \\(m_1 = m_2\\), the lines are <strong>parallel</strong>.</li>
                            <li>If \\(m_1 \\times m_2 = -1\\), the lines are <strong>perpendicular</strong>.</li>
                        </ul>
                    </li>
                </ol>
                <div class="lesson-box">
                    Always show the calculation \\(m_1 \\times m_2 = -1\\) explicitly - do not just state that the lines are perpendicular.
                </div>
            `
        },
        // Screen 13 - Example: Proving Perpendicularity
        {
            type: 'example',
            title: 'Proving Two Lines are Perpendicular',
            problem: 'Show that the lines \\(y = 4x - 3\\) and \\(2y + \\frac{1}{2}x = 7\\) are perpendicular.',
            steps: [
                { text: 'Line 1: \\(y = 4x - 3\\), so \\(m_1 = 4\\).' },
                { text: 'Line 2: Rearrange \\(2y = -\\frac{1}{2}x + 7\\), so \\(y = -\\frac{1}{4}x + \\frac{7}{2}\\). Thus \\(m_2 = -\\frac{1}{4}\\).' },
                { text: 'Check: \\(m_1 \\times m_2 = 4 \\times \\left(-\\frac{1}{4}\\right) = -1\\).' },
                { text: 'Since \\(m_1 \\times m_2 = -1\\), the lines are perpendicular.' }
            ]
        },
        // Screen 14 - Practice: Full Perpendicular Line Problem
        {
            type: 'practice',
            generate: function() {
                var m = Math.floor(Math.random() * 5) + 1;
                var sign = Math.random() < 0.5 ? 1 : -1;
                m = m * sign;
                var c = Math.floor(Math.random() * 9) - 4;
                var px = 0;
                var py = Math.floor(Math.random() * 9) - 4;
                // Perpendicular gradient is -1/m
                // New line: y - py = (-1/m)(x - 0) => y = (-1/m)x + py
                var perpGrad = '-\\frac{1}{' + m + '}';
                if (m === 1) perpGrad = '-1';
                if (m === -1) perpGrad = '1';
                var cNew = py;
                var correctC = '' + cNew;
                var options = [cNew, cNew + 1, cNew - 1, -cNew];
                options = [...new Set(options)];
                while (options.length < 4) options.push(cNew + options.length + 1);
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(cNew);
                return {
                    type: 'mc',
                    latex: 'The line perpendicular to \\(y = ' + m + 'x' + (c >= 0 ? ' + ' + c : ' - ' + Math.abs(c)) + '\\) passes through \\((0, ' + py + ')\\). What is its \\(y\\)-intercept?',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'The perpendicular line passes through \\((0, ' + py + ')\\), so the \\(y\\)-intercept is simply \\(' + py + '\\). The line is \\(y = ' + perpGrad + 'x + ' + py + '\\).'
                };
            }
        },
        // Screen 15 - Practice: Parallel or Perpendicular from Equations
        {
            type: 'practice',
            generate: function() {
                var type = Math.floor(Math.random() * 2);
                var m1, c1, a2, b2, c2, m2Str, relationship;
                if (type === 0) {
                    // Parallel
                    m1 = Math.floor(Math.random() * 5) + 1;
                    c1 = Math.floor(Math.random() * 7) - 3;
                    a2 = m1;
                    b2 = -1;
                    c2 = Math.floor(Math.random() * 7) - 3;
                    while (c2 === c1) c2 = c1 + 1;
                    relationship = 'Parallel';
                    m2Str = '' + m1;
                } else {
                    // Perpendicular: m1 integer, m2 = -1/m1 => line2: x + m1*y = k
                    m1 = Math.floor(Math.random() * 4) + 2;
                    c1 = Math.floor(Math.random() * 7) - 3;
                    a2 = 1;
                    b2 = m1;
                    c2 = Math.floor(Math.random() * 10) + 1;
                    relationship = 'Perpendicular';
                    m2Str = '-\\frac{1}{' + m1 + '}';
                }
                var options = ['Parallel', 'Perpendicular', 'Neither'];
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(relationship);
                var line2Str = (a2 === 1 ? '' : a2) + 'x' + (b2 > 0 ? ' + ' + (b2 === 1 ? '' : b2) + 'y' : ' - ' + (Math.abs(b2) === 1 ? '' : Math.abs(b2)) + 'y') + ' = ' + c2;
                return {
                    type: 'mc',
                    latex: 'Are the lines \\(y = ' + m1 + 'x' + (c1 >= 0 ? ' + ' + c1 : ' - ' + Math.abs(c1)) + '\\) and \\(' + line2Str + '\\) parallel, perpendicular, or neither?',
                    options: options,
                    correctIdx: correctIdx,
                    explain: 'Line 1 has gradient \\(' + m1 + '\\). Line 2 rearranges to gradient \\(' + m2Str + '\\). ' +
                             (relationship === 'Parallel' ? 'The gradients are equal, so the lines are parallel.' : 'The product of gradients is \\(-1\\), so the lines are perpendicular.')
                };
            }
        },
        // Screen 16 - Summary
        {
            type: 'summary',
            title: 'Summary: Parallel & Perpendicular Lines',
            content: '<p>You can now identify and construct parallel and perpendicular lines using gradient relationships.</p>',
            points: [
                'Parallel lines have equal gradients: \\(m_1 = m_2\\).',
                'Perpendicular lines have gradients that multiply to \\(-1\\): \\(m_1 \\times m_2 = -1\\).',
                'The perpendicular gradient is the negative reciprocal: \\(m_2 = -\\frac{1}{m_1}\\).',
                'To find a parallel/perpendicular line through a point: use the appropriate gradient with point-gradient form.',
                'To prove the relationship: find both gradients and check the condition explicitly.'
            ]
        }
    ]
};
