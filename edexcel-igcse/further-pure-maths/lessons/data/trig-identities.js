window.CURRENT_LESSON = {
    title: "Trigonometric Identities",
    subtitle: "Key relationships between sin, cos, and tan",
    screens: [
        // Screen 1 - Concept: Introduction to trig identities
        {
            type: 'concept',
            title: 'What are Trigonometric Identities?',
            content: `
                <p>A <strong>trigonometric identity</strong> is an equation that is true for <em>all</em> values of the variable (where defined).</p>
                <p>Unlike equations which have specific solutions, identities are universally true relationships. For example:</p>
                <p>\\[ \\sin^2 x + \\cos^2 x = 1 \\]</p>
                <p>is true for every value of \\(x\\) -- you can substitute any angle and both sides will be equal.</p>
                <div class="lesson-box">
                    Identities are used to simplify expressions, prove results, and solve equations. They are fundamental tools in further mathematics.
                </div>
            `
        },
        // Screen 2 - Concept: tan identity
        {
            type: 'concept',
            title: 'The Identity: tan x = sin x / cos x',
            content: `
                <p>The first key identity relates tangent to sine and cosine:</p>
                <div class="lesson-box">
                    \\[ \\tan x = \\frac{\\sin x}{\\cos x} \\quad (\\cos x \\neq 0) \\]
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" style="max-width:100%"><line x1="60" y1="160" x2="240" y2="160" stroke="#54a0ff" stroke-width="2.5"/><line x1="240" y1="160" x2="240" y2="50" stroke="#ff6b6b" stroke-width="2.5"/><line x1="60" y1="160" x2="240" y2="50" stroke="#00e5c7" stroke-width="2.5"/><rect x="230" y="150" width="10" height="10" stroke="#444" stroke-width="1" fill="none"/><path d="M90,160 A30,30 0 0,0 84.5,147" stroke="#feca57" stroke-width="2" fill="none"/><text x="95" y="153" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#feca57" font-style="italic">\u03b8</text><text x="138" y="178" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#54a0ff">adjacent (b)</text><text x="248" y="112" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#ff6b6b">opp (a)</text><text x="120" y="95" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#00e5c7">hypotenuse (c)</text><text x="40" y="30" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">sin\u03b8 = a/c</text><text x="40" y="48" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">cos\u03b8 = b/c</text><text x="40" y="66" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">tan\u03b8 = a/b</text></svg></div>
                <p>This follows directly from the definitions. In a right triangle with hypotenuse \\(h\\), opposite \\(o\\), and adjacent \\(a\\):</p>
                <p>\\[ \\frac{\\sin x}{\\cos x} = \\frac{o/h}{a/h} = \\frac{o}{a} = \\tan x \\]</p>
                <p>This identity is undefined when \\(\\cos x = 0\\), i.e. when \\(x = 90^\\circ, 270^\\circ\\), etc. -- exactly where \\(\\tan x\\) is undefined.</p>
            `
        },
        // Screen 3 - Concept: Pythagorean identity
        {
            type: 'concept',
            title: 'The Pythagorean Identity',
            content: `
                <p>The most important trigonometric identity:</p>
                <div class="lesson-box">
                    \\[ \\sin^2 x + \\cos^2 x = 1 \\]
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 240" width="320" height="240" style="max-width:100%"><line x1="40" y1="160" x2="280" y2="160" stroke="#444" stroke-width="0.5"/><line x1="160" y1="20" x2="160" y2="220" stroke="#444" stroke-width="0.5"/><circle cx="160" cy="160" r="100" stroke="#444" stroke-width="0.5" fill="none"/><line x1="160" y1="160" x2="229" y2="93.4" stroke="#e0e0e0" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="229" y1="160" x2="229" y2="93.4" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="5,3"/><line x1="160" y1="160" x2="229" y2="160" stroke="#54a0ff" stroke-width="2"/><circle cx="229" cy="93.4" r="4" fill="#00e5c7"/><text x="233" y="88" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">P(cos\u03b8, sin\u03b8)</text><text x="185" y="177" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#54a0ff">cos\u03b8</text><text x="233" y="132" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b">sin\u03b8</text><text x="175" y="135" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">1</text><path d="M180,160 A20,20 0 0,0 175.3,147" stroke="#feca57" stroke-width="1.5" fill="none"/><text x="183" y="151" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">\u03b8</text><text x="80" y="35" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">sin\u00b2\u03b8 + cos\u00b2\u03b8 = 1</text></svg></div>
                <p>This comes from Pythagoras' theorem applied to the unit circle. A point on the unit circle at angle \\(x\\) has coordinates \\((\\cos x, \\sin x)\\), and since it lies on a circle of radius 1:</p>
                <p>\\[ (\\cos x)^2 + (\\sin x)^2 = 1^2 \\]</p>
                <p>Useful rearrangements:</p>
                <ul>
                    <li>\\(\\sin^2 x = 1 - \\cos^2 x\\)</li>
                    <li>\\(\\cos^2 x = 1 - \\sin^2 x\\)</li>
                </ul>
            `
        },
        // Screen 4 - Concept: Exact trig values
        {
            type: 'concept',
            title: 'Exact Trigonometric Values',
            content: `
                <p>You must know the exact values for \\(30^\\circ\\), \\(45^\\circ\\), and \\(60^\\circ\\):</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" style="max-width:100%"><rect x="10" y="10" width="300" height="180" rx="6" fill="none" stroke="#444" stroke-width="0.5"/><line x1="10" y1="45" x2="310" y2="45" stroke="#444" stroke-width="0.5"/><line x1="85" y1="10" x2="85" y2="190" stroke="#444" stroke-width="0.5"/><line x1="160" y1="10" x2="160" y2="190" stroke="#444" stroke-width="0.5"/><line x1="235" y1="10" x2="235" y2="190" stroke="#444" stroke-width="0.5"/><text x="47" y="32" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#feca57" text-anchor="middle">\u03b8</text><text x="122" y="32" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#00e5c7" text-anchor="middle">sin\u03b8</text><text x="197" y="32" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#54a0ff" text-anchor="middle">cos\u03b8</text><text x="272" y="32" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#ff6b6b" text-anchor="middle">tan\u03b8</text><line x1="10" y1="90" x2="310" y2="90" stroke="#444" stroke-width="0.3"/><line x1="10" y1="135" x2="310" y2="135" stroke="#444" stroke-width="0.3"/><text x="47" y="75" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0" text-anchor="middle">30\u00b0</text><text x="122" y="75" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0" text-anchor="middle">1/2</text><text x="197" y="75" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0" text-anchor="middle">\u221a3/2</text><text x="272" y="75" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0" text-anchor="middle">1/\u221a3</text><text x="47" y="120" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0" text-anchor="middle">45\u00b0</text><text x="122" y="120" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0" text-anchor="middle">\u221a2/2</text><text x="197" y="120" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0" text-anchor="middle">\u221a2/2</text><text x="272" y="120" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0" text-anchor="middle">1</text><text x="47" y="165" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0" text-anchor="middle">60\u00b0</text><text x="122" y="165" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0" text-anchor="middle">\u221a3/2</text><text x="197" y="165" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0" text-anchor="middle">1/2</text><text x="272" y="165" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0" text-anchor="middle">\u221a3</text></svg></div>
                <table style="width:100%; text-align:center; border-collapse:collapse; margin:1em 0;">
                    <tr style="border-bottom:2px solid var(--text-secondary, #666);">
                        <th style="padding:0.5em;">\\(\\theta\\)</th>
                        <th style="padding:0.5em;">\\(\\sin\\theta\\)</th>
                        <th style="padding:0.5em;">\\(\\cos\\theta\\)</th>
                        <th style="padding:0.5em;">\\(\\tan\\theta\\)</th>
                    </tr>
                    <tr><td>\\(30^\\circ\\)</td><td>\\(\\frac{1}{2}\\)</td><td>\\(\\frac{\\sqrt{3}}{2}\\)</td><td>\\(\\frac{1}{\\sqrt{3}}\\)</td></tr>
                    <tr><td>\\(45^\\circ\\)</td><td>\\(\\frac{\\sqrt{2}}{2}\\)</td><td>\\(\\frac{\\sqrt{2}}{2}\\)</td><td>\\(1\\)</td></tr>
                    <tr><td>\\(60^\\circ\\)</td><td>\\(\\frac{\\sqrt{3}}{2}\\)</td><td>\\(\\frac{1}{2}\\)</td><td>\\(\\sqrt{3}\\)</td></tr>
                </table>
                <div class="lesson-box">
                    Remember these values -- they appear frequently in identity proofs and equation solving.
                </div>
            `
        },
        // Screen 5 - Concept: Using identities to simplify
        {
            type: 'concept',
            title: 'Simplifying with Identities',
            content: `
                <p>Identities let you rewrite expressions in simpler forms. Common strategies:</p>
                <ul>
                    <li><strong>Replace \\(\\tan x\\)</strong> with \\(\\dfrac{\\sin x}{\\cos x}\\) when combining with sin/cos terms.</li>
                    <li><strong>Replace \\(\\sin^2 x\\)</strong> with \\(1 - \\cos^2 x\\) (or vice versa) to create expressions in one trig function.</li>
                    <li><strong>Factor</strong> using difference of squares: \\(1 - \\cos^2 x = (1-\\cos x)(1+\\cos x)\\).</li>
                    <li><strong>Combine fractions</strong> over a common denominator.</li>
                </ul>
                <div class="lesson-box">
                    The goal is usually to reduce the expression so it involves fewer trig functions or simplifies to a constant.
                </div>
            `
        },
        // Screen 6 - Example: Simplify using identities
        {
            type: 'example',
            title: 'Simplifying an Expression',
            problem: 'Simplify \\(\\dfrac{1 - \\cos^2 x}{\\sin x}\\).',
            steps: [
                { text: 'Recognise that \\(1 - \\cos^2 x = \\sin^2 x\\) from the Pythagorean identity.' },
                { text: '\\(\\dfrac{1 - \\cos^2 x}{\\sin x} = \\dfrac{\\sin^2 x}{\\sin x}\\)' },
                { text: 'Cancel one factor of \\(\\sin x\\):' },
                { text: '\\(= \\sin x\\)' }
            ]
        },
        // Screen 7 - Practice: Simplify expressions
        {
            type: 'practice',
            generate: function() {
                var problems = [
                    {
                        q: 'Simplify \\(\\sin x \\cdot \\tan x \\cdot \\cos x\\).',
                        correct: '\\(\\sin^2 x\\)',
                        wrong: ['\\(\\cos^2 x\\)', '\\(\\sin x\\)', '\\(1\\)'],
                        exp: '\\(\\sin x \\cdot \\tan x \\cdot \\cos x = \\sin x \\cdot \\frac{\\sin x}{\\cos x} \\cdot \\cos x = \\sin^2 x\\)'
                    },
                    {
                        q: 'Simplify \\(\\dfrac{\\sin^2 x}{1 - \\cos x}\\) given \\(\\cos x \\neq 1\\).',
                        correct: '\\(1 + \\cos x\\)',
                        wrong: ['\\(1 - \\cos x\\)', '\\(\\sin x\\)', '\\(\\cos x\\)'],
                        exp: '\\(\\frac{\\sin^2 x}{1 - \\cos x} = \\frac{1 - \\cos^2 x}{1 - \\cos x} = \\frac{(1-\\cos x)(1+\\cos x)}{1-\\cos x} = 1 + \\cos x\\)'
                    },
                    {
                        q: 'Simplify \\(\\cos^2 x - 1\\).',
                        correct: '\\(-\\sin^2 x\\)',
                        wrong: ['\\(\\sin^2 x\\)', '\\(-\\cos^2 x\\)', '\\(\\tan^2 x\\)'],
                        exp: 'Since \\(\\sin^2 x + \\cos^2 x = 1\\), we get \\(\\cos^2 x - 1 = -\\sin^2 x\\).'
                    },
                    {
                        q: 'Simplify \\(\\tan x \\cdot \\cos x\\).',
                        correct: '\\(\\sin x\\)',
                        wrong: ['\\(\\cos x\\)', '\\(\\tan x\\)', '\\(1\\)'],
                        exp: '\\(\\tan x \\cdot \\cos x = \\frac{\\sin x}{\\cos x} \\cdot \\cos x = \\sin x\\)'
                    },
                    {
                        q: 'Simplify \\(\\dfrac{1 - \\sin^2 x}{\\cos x}\\).',
                        correct: '\\(\\cos x\\)',
                        wrong: ['\\(\\sin x\\)', '\\(1\\)', '\\(\\tan x\\)'],
                        exp: '\\(\\frac{1 - \\sin^2 x}{\\cos x} = \\frac{\\cos^2 x}{\\cos x} = \\cos x\\)'
                    }
                ];
                var p = problems[Math.floor(Math.random() * problems.length)];
                var options = [p.correct].concat(p.wrong);
                var correctIdx = 0;
                var shuffled = options.map(function(o, i) { return { o: o, i: i }; });
                shuffled.sort(function() { return Math.random() - 0.5; });
                options = shuffled.map(function(x) { return x.o; });
                correctIdx = shuffled.findIndex(function(x) { return x.i === 0; });
                return {
                    type: 'mc',
                    latex: p.q,
                    options: options,
                    correctIdx: correctIdx,
                    explain: p.exp
                };
            }
        },
        // Screen 8 - Concept: Finding other trig values
        {
            type: 'concept',
            title: 'Finding Other Trig Values from One',
            content: `
                <p>If you know one trig value and the quadrant, you can find the others using identities.</p>
                <div class="lesson-box">
                    <strong>Method:</strong>
                    <ol>
                        <li>Use \\(\\sin^2 x + \\cos^2 x = 1\\) to find the second value.</li>
                        <li>Choose the correct sign using the quadrant (CAST diagram).</li>
                        <li>Use \\(\\tan x = \\frac{\\sin x}{\\cos x}\\) to find tan.</li>
                    </ol>
                </div>
                <p>In the first quadrant (acute angles), all three functions are positive. In other quadrants:</p>
                <ul>
                    <li>Q2 (\\(90^\\circ\\)-\\(180^\\circ\\)): only \\(\\sin\\) is positive</li>
                    <li>Q3 (\\(180^\\circ\\)-\\(270^\\circ\\)): only \\(\\tan\\) is positive</li>
                    <li>Q4 (\\(270^\\circ\\)-\\(360^\\circ\\)): only \\(\\cos\\) is positive</li>
                </ul>
            `
        },
        // Screen 9 - Example: Find other values
        {
            type: 'example',
            title: 'Finding cos x and tan x from sin x',
            problem: 'Given that \\(\\sin x = \\dfrac{3}{5}\\) and \\(x\\) is acute, find \\(\\cos x\\) and \\(\\tan x\\).',
            steps: [
                { text: 'Use \\(\\sin^2 x + \\cos^2 x = 1\\):' },
                { text: '\\(\\left(\\frac{3}{5}\\right)^2 + \\cos^2 x = 1\\)' },
                { text: '\\(\\frac{9}{25} + \\cos^2 x = 1\\)' },
                { text: '\\(\\cos^2 x = 1 - \\frac{9}{25} = \\frac{16}{25}\\)' },
                { text: '\\(\\cos x = \\frac{4}{5}\\) (positive since \\(x\\) is acute).' },
                { text: '\\(\\tan x = \\frac{\\sin x}{\\cos x} = \\frac{3/5}{4/5} = \\frac{3}{4}\\)' }
            ]
        },
        // Screen 10 - Practice: Find values
        {
            type: 'practice',
            generate: function() {
                var triples = [
                    { s: '3/5', c: '4/5', t: '3/4', sn: 3, sd: 5, cn: 4, cd: 5 },
                    { s: '5/13', c: '12/13', t: '5/12', sn: 5, sd: 13, cn: 12, cd: 13 },
                    { s: '8/17', c: '15/17', t: '8/15', sn: 8, sd: 17, cn: 15, cd: 17 },
                    { s: '7/25', c: '24/25', t: '7/24', sn: 7, sd: 25, cn: 24, cd: 25 }
                ];
                var tr = triples[Math.floor(Math.random() * triples.length)];
                var askCos = Math.random() < 0.5;
                if (askCos) {
                    var correct = '\\(\\frac{' + tr.cn + '}{' + tr.cd + '}\\)';
                    var wrong = [
                        '\\(\\frac{' + tr.sn + '}{' + tr.sd + '}\\)',
                        '\\(\\frac{' + tr.cn + '}{' + tr.sn + '}\\)',
                        '\\(\\frac{' + tr.sn + '}{' + tr.cn + '}\\)'
                    ];
                    var qText = 'Given \\(\\sin x = \\frac{' + tr.sn + '}{' + tr.sd + '}\\) and \\(x\\) is acute, find \\(\\cos x\\).';
                    var expText = '\\(\\cos^2 x = 1 - \\sin^2 x = 1 - \\frac{' + (tr.sn * tr.sn) + '}{' + (tr.sd * tr.sd) + '} = \\frac{' + (tr.cn * tr.cn) + '}{' + (tr.sd * tr.sd) + '}\\), so \\(\\cos x = \\frac{' + tr.cn + '}{' + tr.cd + '}\\).';
                } else {
                    var correct = '\\(\\frac{' + tr.sn + '}{' + tr.cn + '}\\)';
                    var wrong = [
                        '\\(\\frac{' + tr.cn + '}{' + tr.sn + '}\\)',
                        '\\(\\frac{' + tr.sn + '}{' + tr.sd + '}\\)',
                        '\\(\\frac{' + tr.cn + '}{' + tr.sd + '}\\)'
                    ];
                    var qText = 'Given \\(\\sin x = \\frac{' + tr.sn + '}{' + tr.sd + '}\\) and \\(x\\) is acute, find \\(\\tan x\\).';
                    var expText = 'First find \\(\\cos x = \\frac{' + tr.cn + '}{' + tr.cd + '}\\). Then \\(\\tan x = \\frac{\\sin x}{\\cos x} = \\frac{' + tr.sn + '/' + tr.sd + '}{' + tr.cn + '/' + tr.cd + '} = \\frac{' + tr.sn + '}{' + tr.cn + '}\\).';
                }
                var options = [correct].concat(wrong);
                var correctIdx = 0;
                var shuffled = options.map(function(o, i) { return { o: o, i: i }; });
                shuffled.sort(function() { return Math.random() - 0.5; });
                options = shuffled.map(function(x) { return x.o; });
                correctIdx = shuffled.findIndex(function(x) { return x.i === 0; });
                return {
                    type: 'mc',
                    latex: qText,
                    options: options,
                    correctIdx: correctIdx,
                    explain: expText
                };
            }
        },
        // Screen 11 - Concept: Proving identities
        {
            type: 'concept',
            title: 'Proving Identities',
            content: `
                <p>To <strong>prove</strong> an identity, you must show that one side can be transformed into the other using known identities.</p>
                <div class="lesson-box">
                    <strong>Rules for identity proofs:</strong>
                    <ol>
                        <li>Start with one side only (usually the more complicated side).</li>
                        <li>Use known identities to transform it step by step.</li>
                        <li>Arrive at the other side.</li>
                        <li>Never "cross the equals sign" -- do not treat it like an equation.</li>
                    </ol>
                </div>
                <p>Common techniques:</p>
                <ul>
                    <li>Write everything in terms of \\(\\sin\\) and \\(\\cos\\).</li>
                    <li>Combine fractions over a common denominator.</li>
                    <li>Use \\(\\sin^2 x + \\cos^2 x = 1\\) in either direction.</li>
                    <li>Factor expressions.</li>
                </ul>
            `
        },
        // Screen 12 - Example: Prove an identity
        {
            type: 'example',
            title: 'Proving an Identity',
            problem: 'Prove that \\(\\tan x \\cos x = \\sin x\\).',
            steps: [
                { text: 'Start with the left-hand side (LHS):' },
                { text: '\\(\\text{LHS} = \\tan x \\cos x\\)' },
                { text: 'Replace \\(\\tan x\\) with \\(\\frac{\\sin x}{\\cos x}\\):' },
                { text: '\\(= \\frac{\\sin x}{\\cos x} \\cdot \\cos x\\)' },
                { text: 'Cancel \\(\\cos x\\):' },
                { text: '\\(= \\sin x = \\text{RHS} \\quad \\square\\)' }
            ]
        },
        // Screen 13 - Practice: Identity proofs (identifying correct step)
        {
            type: 'practice',
            generate: function() {
                var problems = [
                    {
                        q: 'Which expression is equivalent to \\(\\dfrac{\\sin x}{\\cos x} + \\dfrac{\\cos x}{\\sin x}\\)?',
                        correct: '\\(\\dfrac{1}{\\sin x \\cos x}\\)',
                        wrong: ['\\(\\sin x + \\cos x\\)', '\\(\\tan x + 1\\)', '\\(2\\)'],
                        exp: '\\(\\frac{\\sin x}{\\cos x} + \\frac{\\cos x}{\\sin x} = \\frac{\\sin^2 x + \\cos^2 x}{\\sin x \\cos x} = \\frac{1}{\\sin x \\cos x}\\)'
                    },
                    {
                        q: 'Simplify \\(\\dfrac{\\tan^2 x}{1 + \\tan^2 x}\\).',
                        correct: '\\(\\sin^2 x\\)',
                        wrong: ['\\(\\cos^2 x\\)', '\\(\\tan^2 x\\)', '\\(1\\)'],
                        exp: '\\(\\frac{\\tan^2 x}{1 + \\tan^2 x} = \\frac{\\sin^2 x / \\cos^2 x}{1 + \\sin^2 x / \\cos^2 x} = \\frac{\\sin^2 x / \\cos^2 x}{(\\cos^2 x + \\sin^2 x)/\\cos^2 x} = \\frac{\\sin^2 x}{1} = \\sin^2 x\\)'
                    },
                    {
                        q: 'Simplify \\((1 + \\sin x)(1 - \\sin x)\\).',
                        correct: '\\(\\cos^2 x\\)',
                        wrong: ['\\(\\sin^2 x\\)', '\\(1 - \\sin^2 x + \\sin x\\)', '\\(1\\)'],
                        exp: '\\((1 + \\sin x)(1 - \\sin x) = 1 - \\sin^2 x = \\cos^2 x\\)'
                    },
                    {
                        q: 'Simplify \\(\\sin^2 x (1 + \\cot^2 x)\\) where \\(\\cot x = \\frac{\\cos x}{\\sin x}\\).',
                        correct: '\\(1\\)',
                        wrong: ['\\(\\sin^2 x\\)', '\\(\\cos^2 x\\)', '\\(\\sin^2 x + \\cos^2 x + 1\\)'],
                        exp: '\\(\\sin^2 x (1 + \\frac{\\cos^2 x}{\\sin^2 x}) = \\sin^2 x + \\cos^2 x = 1\\)'
                    }
                ];
                var p = problems[Math.floor(Math.random() * problems.length)];
                var options = [p.correct].concat(p.wrong);
                var correctIdx = 0;
                var shuffled = options.map(function(o, i) { return { o: o, i: i }; });
                shuffled.sort(function() { return Math.random() - 0.5; });
                options = shuffled.map(function(x) { return x.o; });
                correctIdx = shuffled.findIndex(function(x) { return x.i === 0; });
                return {
                    type: 'mc',
                    latex: p.q,
                    options: options,
                    correctIdx: correctIdx,
                    explain: p.exp
                };
            }
        },
        // Screen 14 - Practice: Mixed identity questions
        {
            type: 'practice',
            generate: function() {
                var problems = [
                    {
                        q: 'If \\(\\cos x = \\frac{5}{13}\\) and \\(x\\) is acute, what is \\(\\sin x\\)?',
                        correct: '\\(\\frac{12}{13}\\)',
                        wrong: ['\\(\\frac{5}{13}\\)', '\\(\\frac{8}{13}\\)', '\\(\\frac{12}{5}\\)'],
                        exp: '\\(\\sin^2 x = 1 - \\cos^2 x = 1 - \\frac{25}{169} = \\frac{144}{169}\\), so \\(\\sin x = \\frac{12}{13}\\).'
                    },
                    {
                        q: 'What is the exact value of \\(\\sin^2 60^\\circ + \\cos^2 60^\\circ\\)?',
                        correct: '\\(1\\)',
                        wrong: ['\\(\\frac{3}{4}\\)', '\\(\\frac{1}{2}\\)', '\\(\\frac{\\sqrt{3}}{2}\\)'],
                        exp: 'By the Pythagorean identity, \\(\\sin^2 \\theta + \\cos^2 \\theta = 1\\) for all \\(\\theta\\).'
                    },
                    {
                        q: 'What is the exact value of \\(\\tan 45^\\circ\\)?',
                        correct: '\\(1\\)',
                        wrong: ['\\(\\frac{\\sqrt{2}}{2}\\)', '\\(\\sqrt{2}\\)', '\\(0\\)'],
                        exp: '\\(\\tan 45^\\circ = \\frac{\\sin 45^\\circ}{\\cos 45^\\circ} = \\frac{\\sqrt{2}/2}{\\sqrt{2}/2} = 1\\).'
                    },
                    {
                        q: 'Simplify \\(2\\sin x \\cos x \\cdot \\dfrac{1}{\\sin x}\\).',
                        correct: '\\(2\\cos x\\)',
                        wrong: ['\\(2\\sin x\\)', '\\(\\sin 2x\\)', '\\(2\\tan x\\)'],
                        exp: '\\(2\\sin x \\cos x \\cdot \\frac{1}{\\sin x} = 2\\cos x\\).'
                    }
                ];
                var p = problems[Math.floor(Math.random() * problems.length)];
                var options = [p.correct].concat(p.wrong);
                var correctIdx = 0;
                var shuffled = options.map(function(o, i) { return { o: o, i: i }; });
                shuffled.sort(function() { return Math.random() - 0.5; });
                options = shuffled.map(function(x) { return x.o; });
                correctIdx = shuffled.findIndex(function(x) { return x.i === 0; });
                return {
                    type: 'mc',
                    latex: p.q,
                    options: options,
                    correctIdx: correctIdx,
                    explain: p.exp
                };
            }
        },
        // Screen 15 - Practice: More challenging
        {
            type: 'practice',
            generate: function() {
                var problems = [
                    {
                        q: 'Which of the following is equivalent to \\(\\dfrac{1}{1 - \\sin^2 x}\\)?',
                        correct: '\\(\\dfrac{1}{\\cos^2 x}\\)',
                        wrong: ['\\(\\dfrac{1}{\\sin^2 x}\\)', '\\(\\cos^2 x\\)', '\\(1 + \\tan^2 x - 1\\)'],
                        exp: '\\(1 - \\sin^2 x = \\cos^2 x\\), so \\(\\frac{1}{1 - \\sin^2 x} = \\frac{1}{\\cos^2 x}\\).'
                    },
                    {
                        q: 'If \\(\\sin x = \\frac{4}{5}\\) and \\(x\\) is obtuse, what is \\(\\cos x\\)?',
                        correct: '\\(-\\frac{3}{5}\\)',
                        wrong: ['\\(\\frac{3}{5}\\)', '\\(-\\frac{4}{5}\\)', '\\(\\frac{4}{3}\\)'],
                        exp: '\\(\\cos^2 x = 1 - \\frac{16}{25} = \\frac{9}{25}\\). Since \\(x\\) is obtuse (Q2), \\(\\cos x\\) is negative: \\(\\cos x = -\\frac{3}{5}\\).'
                    },
                    {
                        q: 'Simplify \\(\\cos^4 x - \\sin^4 x\\).',
                        correct: '\\(\\cos^2 x - \\sin^2 x\\)',
                        wrong: ['\\(\\cos^2 x + \\sin^2 x\\)', '\\(1\\)', '\\((\\cos x - \\sin x)^2\\)'],
                        exp: 'Factor as a difference of squares: \\((\\cos^2 x)^2 - (\\sin^2 x)^2 = (\\cos^2 x - \\sin^2 x)(\\cos^2 x + \\sin^2 x) = \\cos^2 x - \\sin^2 x\\).'
                    }
                ];
                var p = problems[Math.floor(Math.random() * problems.length)];
                var options = [p.correct].concat(p.wrong);
                var correctIdx = 0;
                var shuffled = options.map(function(o, i) { return { o: o, i: i }; });
                shuffled.sort(function() { return Math.random() - 0.5; });
                options = shuffled.map(function(x) { return x.o; });
                correctIdx = shuffled.findIndex(function(x) { return x.i === 0; });
                return {
                    type: 'mc',
                    latex: p.q,
                    options: options,
                    correctIdx: correctIdx,
                    explain: p.exp
                };
            }
        },
        // Screen 16 - Summary
        {
            type: 'summary',
            title: 'Trigonometric Identities - Summary',
            content: '<p>You have learned the core trigonometric identities and how to apply them.</p>',
            points: [
                '\\(\\tan x = \\dfrac{\\sin x}{\\cos x}\\)',
                '\\(\\sin^2 x + \\cos^2 x = 1\\) (the Pythagorean identity)',
                'Given one trig value and the quadrant, use the identities to find the others.',
                'To prove an identity: start from one side, transform step by step to reach the other.',
                'Write everything in terms of \\(\\sin\\) and \\(\\cos\\) when stuck.',
                'Know the exact values for \\(30^\\circ\\), \\(45^\\circ\\), and \\(60^\\circ\\).'
            ]
        }
    ]
};