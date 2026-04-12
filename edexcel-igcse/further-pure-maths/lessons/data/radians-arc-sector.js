window.CURRENT_LESSON = {
    title: "Radians, Arc Length & Sector Area",
    subtitle: "Working with angles in radians",
    screens: [
        // Screen 1 - Concept: What is a radian?
        {
            type: 'concept',
            title: 'What is a Radian?',
            content: `
                <p>A <strong>radian</strong> is an alternative unit for measuring angles, used extensively in advanced mathematics.</p>
                <p>One radian is the angle subtended at the centre of a circle when the <strong>arc length equals the radius</strong>.</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" style="max-width:100%"><defs><marker id="rad1-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#00e5c7"/></marker></defs><circle cx="160" cy="110" r="75" stroke="#444" stroke-width="0.5" fill="none"/><line x1="160" y1="110" x2="235" y2="110" stroke="#54a0ff" stroke-width="2.5"/><line x1="160" y1="110" x2="200.8" y2="45.5" stroke="#54a0ff" stroke-width="2.5"/><path d="M235,110 A75,75 0 0,0 200.8,45.5" stroke="#00e5c7" stroke-width="2.5" fill="none"/><path d="M185,110 A25,25 0 0,0 173.6,88.5" stroke="#feca57" stroke-width="2" fill="none" marker-end="url(#rad1-arrow)"/><text x="195" y="100" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#feca57">1 rad</text><text x="200" y="125" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#54a0ff">r</text><text x="240" y="72" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#00e5c7">s = r</text><circle cx="235" cy="110" r="3" fill="#54a0ff"/><circle cx="200.8" cy="45.5" r="3" fill="#54a0ff"/><circle cx="160" cy="110" r="3" fill="#e0e0e0"/></svg></div>
                <div class="lesson-box">
                    If the arc length \\(s\\) equals the radius \\(r\\), the angle is exactly <strong>1 radian</strong>.
                </div>
                <p>Since the full circumference is \\(2\\pi r\\), a full turn equals \\(2\\pi\\) radians. This gives us the fundamental relationship:</p>
                <p>\\[ 360^\\circ = 2\\pi \\text{ radians} \\]</p>
                <p>Radians are often written without a unit, or with "rad" for clarity.</p>
            `
        },
        // Screen 2 - Concept: Converting degrees to radians
        {
            type: 'concept',
            title: 'Converting Degrees to Radians',
            content: `
                <p>Since \\(360^\\circ = 2\\pi\\) rad, we can derive:</p>
                <div class="lesson-box">
                    To convert <strong>degrees to radians</strong>, multiply by \\(\\dfrac{\\pi}{180}\\):
                    \\[ \\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\times \\frac{\\pi}{180} \\]
                </div>
                <p>For example: \\(90^\\circ = 90 \\times \\dfrac{\\pi}{180} = \\dfrac{\\pi}{2}\\) radians.</p>
                <p>Always simplify the fraction where possible and leave your answer in terms of \\(\\pi\\) unless told otherwise.</p>
            `
        },
        // Screen 3 - Concept: Converting radians to degrees
        {
            type: 'concept',
            title: 'Converting Radians to Degrees',
            content: `
                <p>The reverse conversion is just as straightforward:</p>
                <div class="lesson-box">
                    To convert <strong>radians to degrees</strong>, multiply by \\(\\dfrac{180}{\\pi}\\):
                    \\[ \\theta_{\\text{deg}} = \\theta_{\\text{rad}} \\times \\frac{180}{\\pi} \\]
                </div>
                <p>For example: \\(\\dfrac{\\pi}{3} \\text{ rad} = \\dfrac{\\pi}{3} \\times \\dfrac{180}{\\pi} = 60^\\circ\\).</p>
                <p>Notice how the \\(\\pi\\) cancels neatly when the angle is a multiple of \\(\\pi\\).</p>
            `
        },
        // Screen 4 - Concept: Common angles in radians
        {
            type: 'concept',
            title: 'Common Angles in Radians',
            content: `
                <p>You should memorise these common conversions:</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 240" width="320" height="240" style="max-width:100%"><circle cx="160" cy="120" r="95" stroke="#444" stroke-width="0.5" fill="none"/><line x1="65" y1="120" x2="255" y2="120" stroke="#444" stroke-width="0.5"/><line x1="160" y1="25" x2="160" y2="215" stroke="#444" stroke-width="0.5"/><circle cx="255" cy="120" r="4" fill="#00e5c7"/><text x="258" y="115" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">0, 2\u03c0</text><circle cx="242.3" cy="72.5" r="4" fill="#54a0ff"/><text x="248" y="68" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">\u03c0/6</text><circle cx="227.2" cy="52.8" r="4" fill="#feca57"/><text x="233" y="48" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">\u03c0/4</text><circle cx="207.5" cy="40.5" r="4" fill="#ff6b6b"/><text x="213" y="36" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">\u03c0/3</text><circle cx="160" cy="25" r="4" fill="#00e5c7"/><text x="165" y="20" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">\u03c0/2</text><circle cx="65" cy="120" r="4" fill="#54a0ff"/><text x="35" y="115" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">\u03c0</text><circle cx="160" cy="215" r="4" fill="#feca57"/><text x="165" y="232" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">3\u03c0/2</text><line x1="160" y1="120" x2="255" y2="120" stroke="#00e5c7" stroke-width="1" stroke-dasharray="4,3"/><line x1="160" y1="120" x2="242.3" y2="72.5" stroke="#54a0ff" stroke-width="1" stroke-dasharray="4,3"/><line x1="160" y1="120" x2="227.2" y2="52.8" stroke="#feca57" stroke-width="1" stroke-dasharray="4,3"/><line x1="160" y1="120" x2="207.5" y2="40.5" stroke="#ff6b6b" stroke-width="1" stroke-dasharray="4,3"/><circle cx="160" cy="120" r="3" fill="#e0e0e0"/></svg></div>
                <table style="width:100%; text-align:center; border-collapse:collapse; margin:1em 0;">
                    <tr style="border-bottom:2px solid var(--text-secondary, #666);">
                        <th style="padding:0.5em;">Degrees</th>
                        <th style="padding:0.5em;">Radians</th>
                    </tr>
                    <tr><td>\\(30^\\circ\\)</td><td>\\(\\dfrac{\\pi}{6}\\)</td></tr>
                    <tr><td>\\(45^\\circ\\)</td><td>\\(\\dfrac{\\pi}{4}\\)</td></tr>
                    <tr><td>\\(60^\\circ\\)</td><td>\\(\\dfrac{\\pi}{3}\\)</td></tr>
                    <tr><td>\\(90^\\circ\\)</td><td>\\(\\dfrac{\\pi}{2}\\)</td></tr>
                    <tr><td>\\(180^\\circ\\)</td><td>\\(\\pi\\)</td></tr>
                    <tr><td>\\(360^\\circ\\)</td><td>\\(2\\pi\\)</td></tr>
                </table>
                <div class="lesson-box">
                    Tip: To quickly find the radian value, think "what fraction of \\(180^\\circ\\) is this angle?" and write that fraction of \\(\\pi\\).
                </div>
            `
        },
        // Screen 5 - Example: Convert 120 degrees to radians
        {
            type: 'example',
            title: 'Converting Degrees to Radians',
            problem: 'Convert \\(120^\\circ\\) to radians, giving your answer in terms of \\(\\pi\\).',
            steps: [
                { text: 'Use the formula: multiply by \\(\\dfrac{\\pi}{180}\\).' },
                { text: '\\(120^\\circ = 120 \\times \\dfrac{\\pi}{180}\\)' },
                { text: '\\(= \\dfrac{120\\pi}{180}\\)' },
                { text: 'Simplify by dividing numerator and denominator by 60:' },
                { text: '\\(= \\dfrac{2\\pi}{3}\\)' }
            ]
        },
        // Screen 6 - Practice: Degree to radian conversions
        {
            type: 'practice',
            generate: function() {
                var pairs = [
                    { deg: 30, rad: 'pi/6', display: '\\frac{\\pi}{6}' },
                    { deg: 45, rad: 'pi/4', display: '\\frac{\\pi}{4}' },
                    { deg: 60, rad: 'pi/3', display: '\\frac{\\pi}{3}' },
                    { deg: 90, rad: 'pi/2', display: '\\frac{\\pi}{2}' },
                    { deg: 120, rad: '2pi/3', display: '\\frac{2\\pi}{3}' },
                    { deg: 135, rad: '3pi/4', display: '\\frac{3\\pi}{4}' },
                    { deg: 150, rad: '5pi/6', display: '\\frac{5\\pi}{6}' },
                    { deg: 210, rad: '7pi/6', display: '\\frac{7\\pi}{6}' },
                    { deg: 240, rad: '4pi/3', display: '\\frac{4\\pi}{3}' },
                    { deg: 270, rad: '3pi/2', display: '\\frac{3\\pi}{2}' },
                    { deg: 300, rad: '5pi/3', display: '\\frac{5\\pi}{3}' },
                    { deg: 315, rad: '7pi/4', display: '\\frac{7\\pi}{4}' },
                    { deg: 330, rad: '11pi/6', display: '\\frac{11\\pi}{6}' }
                ];
                var p = pairs[Math.floor(Math.random() * pairs.length)];
                var allDisplays = pairs.map(function(x) { return x.display; });
                var wrong = allDisplays.filter(function(d) { return d !== p.display; });
                wrong.sort(function() { return Math.random() - 0.5; });
                var options = [p.display, wrong[0], wrong[1], wrong[2]];
                var correctIdx = 0;
                var shuffled = options.map(function(o, i) { return { o: o, i: i }; });
                shuffled.sort(function() { return Math.random() - 0.5; });
                options = shuffled.map(function(x) { return '\\(' + x.o + '\\)'; });
                correctIdx = shuffled.findIndex(function(x) { return x.i === 0; });
                return {
                    type: 'mc',
                    latex: 'Convert \\(' + p.deg + '^\\circ\\) to radians.',
                    options: options,
                    correctIdx: correctIdx,
                    explain: '\\(' + p.deg + '^\\circ = ' + p.deg + ' \\times \\frac{\\pi}{180} = ' + p.display + '\\)'
                };
            }
        },
        // Screen 7 - Concept: Arc length formula
        {
            type: 'concept',
            title: 'Arc Length',
            content: `
                <p>When the angle is measured in <strong>radians</strong>, the formula for arc length is beautifully simple:</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 220" width="320" height="220" style="max-width:100%"><defs><marker id="sector-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#feca57"/></marker></defs><path d="M230,150 L150,150 L182.6,72.7 Z" fill="rgba(0,229,199,0.12)" stroke="none"/><path d="M230,150 A80,80 0 0,0 182.6,72.7" stroke="#00e5c7" stroke-width="2.5" fill="none"/><line x1="150" y1="150" x2="230" y2="150" stroke="#54a0ff" stroke-width="2.5"/><line x1="150" y1="150" x2="182.6" y2="72.7" stroke="#54a0ff" stroke-width="2.5"/><path d="M175,150 A25,25 0 0,0 168.4,131.2" stroke="#feca57" stroke-width="2" fill="none" marker-end="url(#sector-arr)"/><text x="178" y="143" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57" font-style="italic">\u03b8</text><text x="188" y="168" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#54a0ff" font-style="italic">r</text><text x="153" y="108" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#54a0ff" font-style="italic">r</text><text x="235" y="105" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#00e5c7">s = r\u03b8</text><text x="170" y="195" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">A = \u00bdr\u00b2\u03b8</text><circle cx="150" cy="150" r="3" fill="#e0e0e0"/><circle cx="230" cy="150" r="3" fill="#54a0ff"/><circle cx="182.6" cy="72.7" r="3" fill="#54a0ff"/></svg></div>
                <div class="lesson-box">
                    \\[ s = r\\theta \\]
                    where \\(s\\) = arc length, \\(r\\) = radius, \\(\\theta\\) = angle in <strong>radians</strong>.
                </div>
                <p>This follows directly from the definition of a radian: when \\(\\theta = 1\\), the arc length equals the radius.</p>
                <p>For a full circle (\\(\\theta = 2\\pi\\)): \\(s = r \\times 2\\pi = 2\\pi r\\), which is the circumference - as expected.</p>
                <div class="lesson-box warning">
                    The angle <strong>must</strong> be in radians for this formula. If the angle is in degrees, convert it first.
                </div>
            `
        },
        // Screen 8 - Example: Arc length
        {
            type: 'example',
            title: 'Finding an Arc Length',
            problem: 'Find the arc length of a sector with radius 8 cm and angle \\(\\dfrac{\\pi}{3}\\) radians.',
            steps: [
                { text: 'Use the formula \\(s = r\\theta\\).' },
                { text: '\\(s = 8 \\times \\dfrac{\\pi}{3}\\)' },
                { text: '\\(s = \\dfrac{8\\pi}{3}\\) cm' },
                { text: '\\(s \\approx 8.38\\) cm (to 3 s.f.)' }
            ]
        },
        // Screen 9 - Practice: Arc length
        {
            type: 'practice',
            generate: function() {
                var radii = [3, 4, 5, 6, 7, 8, 9, 10, 12];
                var angles = [
                    { val: Math.PI / 6, display: '\\frac{\\pi}{6}', num: 1, den: 6 },
                    { val: Math.PI / 4, display: '\\frac{\\pi}{4}', num: 1, den: 4 },
                    { val: Math.PI / 3, display: '\\frac{\\pi}{3}', num: 1, den: 3 },
                    { val: Math.PI / 2, display: '\\frac{\\pi}{2}', num: 1, den: 2 },
                    { val: 2 * Math.PI / 3, display: '\\frac{2\\pi}{3}', num: 2, den: 3 },
                    { val: 3 * Math.PI / 4, display: '\\frac{3\\pi}{4}', num: 3, den: 4 }
                ];
                var r = radii[Math.floor(Math.random() * radii.length)];
                var a = angles[Math.floor(Math.random() * angles.length)];
                var arcLength = r * a.val;
                var correct = Math.round(arcLength * 100) / 100;
                var options = [correct];
                while (options.length < 4) {
                    var distractor = Math.round((correct + (Math.random() * 6 - 3)) * 100) / 100;
                    if (distractor > 0 && options.indexOf(distractor) === -1 && Math.abs(distractor - correct) > 0.05) {
                        options.push(distractor);
                    }
                }
                var correctIdx = 0;
                var shuffled = options.slice();
                shuffled.sort(function() { return Math.random() - 0.5; });
                correctIdx = shuffled.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'Find the arc length of a sector with radius \\(' + r + '\\) cm and angle \\(' + a.display + '\\) radians. Give your answer to 2 d.p.',
                    options: shuffled.map(function(v) { return v.toFixed(2) + ' cm'; }),
                    correctIdx: correctIdx,
                    explain: '\\(s = r\\theta = ' + r + ' \\times ' + a.display + ' = ' + correct.toFixed(2) + '\\) cm'
                };
            }
        },
        // Screen 10 - Concept: Sector area formula
        {
            type: 'concept',
            title: 'Area of a Sector',
            content: `
                <p>The area of a sector (a "slice" of a circle) when the angle is in radians:</p>
                <div class="lesson-box">
                    \\[ A = \\frac{1}{2} r^2 \\theta \\]
                    where \\(r\\) = radius and \\(\\theta\\) = angle in <strong>radians</strong>.
                </div>
                <p>Think of it as a fraction of the full circle area \\(\\pi r^2\\):</p>
                <p>\\[ A = \\frac{\\theta}{2\\pi} \\times \\pi r^2 = \\frac{1}{2} r^2 \\theta \\]</p>
                <p>For a semicircle (\\(\\theta = \\pi\\)): \\(A = \\frac{1}{2} r^2 \\pi = \\frac{\\pi r^2}{2}\\) - half the circle area, as expected.</p>
            `
        },
        // Screen 11 - Example: Sector area
        {
            type: 'example',
            title: 'Finding a Sector Area',
            problem: 'Find the area of a sector with radius 5 cm and angle 2.4 radians.',
            steps: [
                { text: 'Use the formula \\(A = \\frac{1}{2} r^2 \\theta\\).' },
                { text: '\\(A = \\frac{1}{2} \\times 5^2 \\times 2.4\\)' },
                { text: '\\(A = \\frac{1}{2} \\times 25 \\times 2.4\\)' },
                { text: '\\(A = 30\\) cm\\(^2\\)' }
            ]
        },
        // Screen 12 - Practice: Sector area
        {
            type: 'practice',
            generate: function() {
                var radii = [3, 4, 5, 6, 7, 8, 10];
                var angles = [0.5, 0.8, 1.0, 1.2, 1.5, 1.8, 2.0, 2.4, 2.5];
                var r = radii[Math.floor(Math.random() * radii.length)];
                var theta = angles[Math.floor(Math.random() * angles.length)];
                var area = 0.5 * r * r * theta;
                var correct = Math.round(area * 100) / 100;
                var options = [correct];
                while (options.length < 4) {
                    var distractor = Math.round((correct + (Math.random() * 10 - 5)) * 100) / 100;
                    if (distractor > 0 && options.indexOf(distractor) === -1 && Math.abs(distractor - correct) > 0.1) {
                        options.push(distractor);
                    }
                }
                var correctIdx = 0;
                var shuffled = options.slice();
                shuffled.sort(function() { return Math.random() - 0.5; });
                correctIdx = shuffled.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'Find the area of a sector with radius \\(' + r + '\\) cm and angle \\(' + theta + '\\) radians. Give your answer to 2 d.p.',
                    options: shuffled.map(function(v) { return v.toFixed(2) + ' cm\\(^2\\)'; }),
                    correctIdx: correctIdx,
                    explain: '\\(A = \\frac{1}{2} r^2 \\theta = \\frac{1}{2} \\times ' + r + '^2 \\times ' + theta + ' = ' + correct.toFixed(2) + '\\) cm\\(^2\\)'
                };
            }
        },
        // Screen 13 - Concept: Segment area
        {
            type: 'concept',
            title: 'Area of a Segment',
            content: `
                <p>A <strong>segment</strong> is the region between a chord and the arc it cuts off. To find the area of a segment:</p>
                <div class="lesson-box">
                    \\[ \\text{Segment area} = \\text{Sector area} - \\text{Triangle area} \\]
                    \\[ = \\frac{1}{2} r^2 \\theta - \\frac{1}{2} r^2 \\sin\\theta \\]
                    \\[ = \\frac{1}{2} r^2 (\\theta - \\sin\\theta) \\]
                </div>
                <p>The triangle is formed by the two radii and the chord. Its area is \\(\\frac{1}{2} r^2 \\sin\\theta\\) (using the "\\(\\frac{1}{2}ab\\sin C\\)" formula with both sides equal to \\(r\\)).</p>
                <p>Note: \\(\\theta\\) must be in radians, but \\(\\sin\\theta\\) is evaluated normally.</p>
            `
        },
        // Screen 14 - Example: Segment area
        {
            type: 'example',
            title: 'Finding a Segment Area',
            problem: 'Find the area of the segment of a circle with radius 6 cm and angle \\(\\dfrac{\\pi}{3}\\) radians.',
            steps: [
                { text: 'Use \\(\\text{Segment area} = \\frac{1}{2} r^2 (\\theta - \\sin\\theta)\\).' },
                { text: '\\(= \\frac{1}{2} \\times 6^2 \\times \\left(\\frac{\\pi}{3} - \\sin\\frac{\\pi}{3}\\right)\\)' },
                { text: '\\(= 18 \\times \\left(\\frac{\\pi}{3} - \\frac{\\sqrt{3}}{2}\\right)\\)' },
                { text: '\\(= 18 \\times (1.0472 - 0.8660)\\)' },
                { text: '\\(= 18 \\times 0.1812\\)' },
                { text: '\\(\\approx 3.26\\) cm\\(^2\\)' }
            ]
        },
        // Screen 15 - Practice: Segment area
        {
            type: 'practice',
            generate: function() {
                var radii = [4, 5, 6, 8, 10];
                var angles = [
                    { val: Math.PI / 3, display: '\\frac{\\pi}{3}' },
                    { val: Math.PI / 4, display: '\\frac{\\pi}{4}' },
                    { val: Math.PI / 2, display: '\\frac{\\pi}{2}' },
                    { val: 2 * Math.PI / 3, display: '\\frac{2\\pi}{3}' }
                ];
                var r = radii[Math.floor(Math.random() * radii.length)];
                var a = angles[Math.floor(Math.random() * angles.length)];
                var segArea = 0.5 * r * r * (a.val - Math.sin(a.val));
                var correct = Math.round(segArea * 100) / 100;
                var options = [correct];
                while (options.length < 4) {
                    var distractor = Math.round((correct + (Math.random() * 8 - 4)) * 100) / 100;
                    if (distractor > 0 && options.indexOf(distractor) === -1 && Math.abs(distractor - correct) > 0.1) {
                        options.push(distractor);
                    }
                }
                var correctIdx = 0;
                var shuffled = options.slice();
                shuffled.sort(function() { return Math.random() - 0.5; });
                correctIdx = shuffled.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'Find the area of the segment of a circle with radius \\(' + r + '\\) cm and angle \\(' + a.display + '\\) radians. Give your answer to 2 d.p.',
                    options: shuffled.map(function(v) { return v.toFixed(2) + ' cm\\(^2\\)'; }),
                    correctIdx: correctIdx,
                    explain: '\\(\\text{Segment area} = \\frac{1}{2} \\times ' + r + '^2 \\times \\left(' + a.display + ' - \\sin ' + a.display + '\\right) = ' + correct.toFixed(2) + '\\) cm\\(^2\\)'
                };
            }
        },
        // Screen 16 - Practice: Mixed radian problems
        {
            type: 'practice',
            generate: function() {
                var type = Math.floor(Math.random() * 3);
                if (type === 0) {
                    // Radian to degree
                    var pairs = [
                        { rad: '\\frac{\\pi}{6}', deg: 30 },
                        { rad: '\\frac{\\pi}{4}', deg: 45 },
                        { rad: '\\frac{\\pi}{3}', deg: 60 },
                        { rad: '\\frac{2\\pi}{3}', deg: 120 },
                        { rad: '\\frac{5\\pi}{6}', deg: 150 },
                        { rad: '\\frac{5\\pi}{4}', deg: 225 },
                        { rad: '\\frac{7\\pi}{6}', deg: 210 }
                    ];
                    var p = pairs[Math.floor(Math.random() * pairs.length)];
                    var options = [p.deg];
                    while (options.length < 4) {
                        var d = [30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330][Math.floor(Math.random() * 15)];
                        if (options.indexOf(d) === -1) options.push(d);
                    }
                    var correctIdx = 0;
                    var shuffled = options.slice();
                    shuffled.sort(function() { return Math.random() - 0.5; });
                    correctIdx = shuffled.indexOf(p.deg);
                    return {
                        type: 'mc',
                        latex: 'Convert \\(' + p.rad + '\\) radians to degrees.',
                        options: shuffled.map(function(v) { return '\\(' + v + '^\\circ\\)'; }),
                        correctIdx: correctIdx,
                        explain: '\\(' + p.rad + ' \\times \\frac{180}{\\pi} = ' + p.deg + '^\\circ\\)'
                    };
                } else if (type === 1) {
                    // Find radius from arc length
                    var s = [6, 8, 10, 12, 15, 18, 20][Math.floor(Math.random() * 7)];
                    var thetaVals = [
                        { val: 2, display: '2' },
                        { val: 3, display: '3' },
                        { val: 1.5, display: '1.5' },
                        { val: 2.5, display: '2.5' }
                    ];
                    var t = thetaVals[Math.floor(Math.random() * thetaVals.length)];
                    var r = s / t.val;
                    var correct = Math.round(r * 100) / 100;
                    var options = [correct];
                    while (options.length < 4) {
                        var dist = Math.round((correct + (Math.random() * 6 - 3)) * 100) / 100;
                        if (dist > 0 && options.indexOf(dist) === -1 && Math.abs(dist - correct) > 0.05) options.push(dist);
                    }
                    var shuffled = options.slice();
                    shuffled.sort(function() { return Math.random() - 0.5; });
                    var correctIdx = shuffled.indexOf(correct);
                    return {
                        type: 'mc',
                        latex: 'A sector has arc length \\(' + s + '\\) cm and angle \\(' + t.display + '\\) radians. Find the radius.',
                        options: shuffled.map(function(v) { return v.toFixed(2) + ' cm'; }),
                        correctIdx: correctIdx,
                        explain: '\\(s = r\\theta \\Rightarrow r = \\frac{s}{\\theta} = \\frac{' + s + '}{' + t.display + '} = ' + correct.toFixed(2) + '\\) cm'
                    };
                } else {
                    // Find angle from sector area
                    var r = [4, 5, 6, 8][Math.floor(Math.random() * 4)];
                    var theta = [0.5, 1.0, 1.5, 2.0, 2.5][Math.floor(Math.random() * 5)];
                    var area = 0.5 * r * r * theta;
                    var options = [theta];
                    while (options.length < 4) {
                        var dist = Math.round((theta + (Math.random() * 2 - 1)) * 10) / 10;
                        if (dist > 0 && options.indexOf(dist) === -1) options.push(dist);
                    }
                    var shuffled = options.slice();
                    shuffled.sort(function() { return Math.random() - 0.5; });
                    var correctIdx = shuffled.indexOf(theta);
                    return {
                        type: 'mc',
                        latex: 'A sector has radius \\(' + r + '\\) cm and area \\(' + area + '\\) cm\\(^2\\). Find the angle in radians.',
                        options: shuffled.map(function(v) { return '\\(' + v + '\\) rad'; }),
                        correctIdx: correctIdx,
                        explain: '\\(A = \\frac{1}{2}r^2\\theta \\Rightarrow \\theta = \\frac{2A}{r^2} = \\frac{2 \\times ' + area + '}{' + r + '^2} = ' + theta + '\\) rad'
                    };
                }
            }
        },
        // Screen 17 - Summary
        {
            type: 'summary',
            title: 'Radians, Arc Length & Sector Area - Summary',
            content: '<p>You have learned how to work with angles in radians and apply them to arc and sector calculations.</p>',
            points: [
                'One radian is the angle where arc length equals the radius.',
                'Degrees to radians: multiply by \\(\\frac{\\pi}{180}\\). Radians to degrees: multiply by \\(\\frac{180}{\\pi}\\).',
                'Arc length: \\(s = r\\theta\\)',
                'Sector area: \\(A = \\frac{1}{2}r^2\\theta\\)',
                'Segment area: \\(\\frac{1}{2}r^2(\\theta - \\sin\\theta)\\)',
                'The angle must always be in radians for these formulae.'
            ]
        }
    ]
};