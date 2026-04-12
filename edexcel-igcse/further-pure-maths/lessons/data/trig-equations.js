window.CURRENT_LESSON = {
    title: "Solving Trigonometric Equations",
    subtitle: "Finding all solutions in a given range",
    screens: [
        // Screen 1 - Concept: Principal values
        {
            type: 'concept',
            title: 'Principal Values',
            content: `
                <p>When you solve a trig equation like \\(\\sin x = 0.5\\), your calculator gives one answer: the <strong>principal value</strong>.</p>
                <div class="lesson-box">
                    <strong>Principal value ranges:</strong>
                    <ul>
                        <li>\\(\\sin^{-1}\\): gives values from \\(-90^\\circ\\) to \\(90^\\circ\\)</li>
                        <li>\\(\\cos^{-1}\\): gives values from \\(0^\\circ\\) to \\(180^\\circ\\)</li>
                        <li>\\(\\tan^{-1}\\): gives values from \\(-90^\\circ\\) to \\(90^\\circ\\)</li>
                    </ul>
                </div>
                <p>But trig functions are periodic -- there are usually <strong>multiple solutions</strong> in any given range. You need a systematic way to find them all.</p>
            `
        },
        // Screen 2 - Concept: The CAST diagram
        {
            type: 'concept',
            title: 'The CAST Diagram',
            content: `
                <p>The <strong>CAST diagram</strong> tells you which trig functions are <strong>positive</strong> in each quadrant:</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 240" width="320" height="240" style="max-width:100%"><circle cx="160" cy="120" r="95" stroke="#444" stroke-width="0.5" fill="none"/><line x1="65" y1="120" x2="255" y2="120" stroke="#444" stroke-width="0.5"/><line x1="160" y1="25" x2="160" y2="215" stroke="#444" stroke-width="0.5"/><rect x="165" y="30" width="85" height="85" rx="4" fill="rgba(0,229,199,0.1)" stroke="#00e5c7" stroke-width="1"/><text x="207" y="65" font-family="'Space Grotesk',sans-serif" font-size="20" fill="#00e5c7" text-anchor="middle" font-weight="bold">A</text><text x="207" y="83" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#00e5c7" text-anchor="middle">All +</text><text x="207" y="100" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0" text-anchor="middle">0\u00b0-90\u00b0</text><rect x="70" y="30" width="85" height="85" rx="4" fill="rgba(255,107,107,0.1)" stroke="#ff6b6b" stroke-width="1"/><text x="112" y="65" font-family="'Space Grotesk',sans-serif" font-size="20" fill="#ff6b6b" text-anchor="middle" font-weight="bold">S</text><text x="112" y="83" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#ff6b6b" text-anchor="middle">Sin +</text><text x="112" y="100" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0" text-anchor="middle">90\u00b0-180\u00b0</text><rect x="70" y="125" width="85" height="85" rx="4" fill="rgba(254,202,87,0.1)" stroke="#feca57" stroke-width="1"/><text x="112" y="160" font-family="'Space Grotesk',sans-serif" font-size="20" fill="#feca57" text-anchor="middle" font-weight="bold">T</text><text x="112" y="178" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57" text-anchor="middle">Tan +</text><text x="112" y="195" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0" text-anchor="middle">180\u00b0-270\u00b0</text><rect x="165" y="125" width="85" height="85" rx="4" fill="rgba(84,160,255,0.1)" stroke="#54a0ff" stroke-width="1"/><text x="207" y="160" font-family="'Space Grotesk',sans-serif" font-size="20" fill="#54a0ff" text-anchor="middle" font-weight="bold">C</text><text x="207" y="178" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff" text-anchor="middle">Cos +</text><text x="207" y="195" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0" text-anchor="middle">270\u00b0-360\u00b0</text></svg></div>
                <div class="lesson-box">
                    Read anticlockwise from Q4: <strong>C-A-S-T</strong>. This tells you where each function is positive.
                </div>
            `
        },
        // Screen 3 - Concept: Finding all solutions
        {
            type: 'concept',
            title: 'Finding All Solutions (0-360)',
            content: `
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" style="max-width:100%"><line x1="30" y1="180" x2="300" y2="180" stroke="#444" stroke-width="0.5"/><line x1="30" y1="180" x2="30" y2="15" stroke="#444" stroke-width="0.5"/><text x="55" y="12" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">y = sin x</text><path d="M30,100 Q97.5,0 165,100 Q232.5,200 300,100" stroke="#00e5c7" stroke-width="2.5" fill="none"/><line x1="30" y1="60" x2="300" y2="60" stroke="#ff6b6b" stroke-width="1.5" stroke-dasharray="5,4"/><text x="303" y="63" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#ff6b6b">y=0.5</text><circle cx="75" cy="60" r="4" fill="#feca57"/><circle cx="120" cy="60" r="4" fill="#feca57"/><text x="68" y="52" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">30\u00b0</text><text x="108" y="52" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">150\u00b0</text><text x="25" y="195" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">0\u00b0</text><text x="90" y="195" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">90\u00b0</text><text x="155" y="195" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">180\u00b0</text><text x="222" y="195" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">270\u00b0</text><text x="287" y="195" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">360\u00b0</text></svg></div>
                <p>Once you have the principal value \\(\\alpha\\) from your calculator, find the other solution using these rules:</p>
                <div class="lesson-box">
                    <strong>For \\(\\sin x = k\\):</strong> solutions are \\(x = \\alpha\\) and \\(x = 180^\\circ - \\alpha\\)<br><br>
                    <strong>For \\(\\cos x = k\\):</strong> solutions are \\(x = \\alpha\\) and \\(x = 360^\\circ - \\alpha\\)<br><br>
                    <strong>For \\(\\tan x = k\\):</strong> solutions are \\(x = \\alpha\\) and \\(x = \\alpha + 180^\\circ\\)
                </div>
                <p>If a solution falls outside the required range, add or subtract \\(360^\\circ\\) to bring it in range.</p>
                <p>If \\(k\\) is negative, the principal value will be negative -- add \\(360^\\circ\\) (or \\(180^\\circ\\) for tan) to get solutions in the standard range.</p>
            `
        },
        // Screen 4 - Example: Solve sin(x) = 0.5
        {
            type: 'example',
            title: 'Solving sin x = k',
            problem: 'Solve \\(\\sin x = 0.5\\) for \\(0^\\circ \\leq x \\leq 360^\\circ\\).',
            steps: [
                { text: 'Find the principal value: \\(x = \\sin^{-1}(0.5) = 30^\\circ\\).' },
                { text: 'Since \\(\\sin\\) is positive, solutions are in Q1 and Q2 (from CAST).' },
                { text: 'Q1 solution: \\(x = 30^\\circ\\).' },
                { text: 'Q2 solution: \\(x = 180^\\circ - 30^\\circ = 150^\\circ\\).' },
                { text: '\\(x = 30^\\circ\\) or \\(x = 150^\\circ\\).' }
            ]
        },
        // Screen 5 - Practice: Solve basic trig equations
        {
            type: 'practice',
            generate: function() {
                var problems = [
                    { eq: '\\sin x = \\frac{\\sqrt{3}}{2}', sols: [60, 120], display: '60, 120' },
                    { eq: '\\sin x = \\frac{\\sqrt{2}}{2}', sols: [45, 135], display: '45, 135' },
                    { eq: '\\sin x = \\frac{1}{2}', sols: [30, 150], display: '30, 150' },
                    { eq: '\\cos x = \\frac{1}{2}', sols: [60, 300], display: '60, 300' },
                    { eq: '\\cos x = \\frac{\\sqrt{2}}{2}', sols: [45, 315], display: '45, 315' },
                    { eq: '\\cos x = \\frac{\\sqrt{3}}{2}', sols: [30, 330], display: '30, 330' },
                    { eq: '\\tan x = 1', sols: [45, 225], display: '45, 225' },
                    { eq: '\\tan x = \\sqrt{3}', sols: [60, 240], display: '60, 240' }
                ];
                var p = problems[Math.floor(Math.random() * problems.length)];
                var correct = p.display + '^\\circ';
                // Generate wrong options
                var allPairs = problems.map(function(pr) { return pr.display + '^\\circ'; });
                var wrong = allPairs.filter(function(a) { return a !== correct; });
                wrong.sort(function() { return Math.random() - 0.5; });
                var options = [correct, wrong[0], wrong[1], wrong[2]];
                var correctIdx = 0;
                var shuffled = options.map(function(o, i) { return { o: o, i: i }; });
                shuffled.sort(function() { return Math.random() - 0.5; });
                options = shuffled.map(function(x) { return '\\(' + x.o + '\\)'; });
                correctIdx = shuffled.findIndex(function(x) { return x.i === 0; });
                return {
                    type: 'mc',
                    latex: 'Solve \\(' + p.eq + '\\) for \\(0^\\circ \\leq x \\leq 360^\\circ\\).',
                    options: options,
                    correctIdx: correctIdx,
                    explain: 'The solutions are \\(x = ' + p.display + '^\\circ\\).'
                };
            }
        },
        // Screen 6 - Concept: Negative values
        {
            type: 'concept',
            title: 'Equations with Negative Values',
            content: `
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" style="max-width:100%"><line x1="30" y1="180" x2="300" y2="180" stroke="#444" stroke-width="0.5"/><line x1="30" y1="180" x2="30" y2="15" stroke="#444" stroke-width="0.5"/><text x="55" y="12" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">y = cos x</text><path d="M30,20 Q97.5,100 165,180 Q232.5,260 300,180" stroke="#54a0ff" stroke-width="2.5" fill="none"/><line x1="30" y1="140" x2="300" y2="140" stroke="#ff6b6b" stroke-width="1.5" stroke-dasharray="5,4"/><text x="303" y="143" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#ff6b6b">y=0.5</text><circle cx="75" cy="140" r="4" fill="#feca57"/><circle cx="255" cy="140" r="4" fill="#feca57"/><text x="68" y="132" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">60\u00b0</text><text x="245" y="132" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">300\u00b0</text><text x="25" y="195" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">0\u00b0</text><text x="90" y="195" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">90\u00b0</text><text x="155" y="195" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">180\u00b0</text><text x="222" y="195" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">270\u00b0</text><text x="287" y="195" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">360\u00b0</text></svg></div>
                <p>When the value is negative, the CAST diagram tells you which quadrants to look in:</p>
                <div class="lesson-box">
                    <ul>
                        <li>\\(\\sin x < 0\\): solutions in Q3 and Q4</li>
                        <li>\\(\\cos x < 0\\): solutions in Q2 and Q3</li>
                        <li>\\(\\tan x < 0\\): solutions in Q2 and Q4</li>
                    </ul>
                </div>
                <p><strong>Method:</strong> Find the principal value \\(\\alpha\\) (which may be negative), then use symmetry to find both solutions in \\(0^\\circ\\) to \\(360^\\circ\\).</p>
                <p>For example, if \\(\\sin x = -0.5\\), then \\(\\alpha = -30^\\circ\\). The two solutions are:</p>
                <ul>
                    <li>\\(180^\\circ - (-30^\\circ) = 210^\\circ\\) (Q3)</li>
                    <li>\\(360^\\circ + (-30^\\circ) = 330^\\circ\\) (Q4)</li>
                </ul>
            `
        },
        // Screen 7 - Practice: Negative value equations
        {
            type: 'practice',
            generate: function() {
                var problems = [
                    { eq: '\\sin x = -\\frac{1}{2}', display: '210, 330' },
                    { eq: '\\sin x = -\\frac{\\sqrt{2}}{2}', display: '225, 315' },
                    { eq: '\\sin x = -\\frac{\\sqrt{3}}{2}', display: '240, 300' },
                    { eq: '\\cos x = -\\frac{1}{2}', display: '120, 240' },
                    { eq: '\\cos x = -\\frac{\\sqrt{2}}{2}', display: '135, 225' },
                    { eq: '\\cos x = -\\frac{\\sqrt{3}}{2}', display: '150, 210' },
                    { eq: '\\tan x = -1', display: '135, 315' },
                    { eq: '\\tan x = -\\sqrt{3}', display: '120, 300' }
                ];
                var p = problems[Math.floor(Math.random() * problems.length)];
                var correct = p.display + '^\\circ';
                var allPairs = problems.map(function(pr) { return pr.display + '^\\circ'; });
                var wrong = allPairs.filter(function(a) { return a !== correct; });
                wrong.sort(function() { return Math.random() - 0.5; });
                var options = [correct, wrong[0], wrong[1], wrong[2]];
                var correctIdx = 0;
                var shuffled = options.map(function(o, i) { return { o: o, i: i }; });
                shuffled.sort(function() { return Math.random() - 0.5; });
                options = shuffled.map(function(x) { return '\\(' + x.o + '\\)'; });
                correctIdx = shuffled.findIndex(function(x) { return x.i === 0; });
                return {
                    type: 'mc',
                    latex: 'Solve \\(' + p.eq + '\\) for \\(0^\\circ \\leq x \\leq 360^\\circ\\).',
                    options: options,
                    correctIdx: correctIdx,
                    explain: 'The solutions are \\(x = ' + p.display + '^\\circ\\).'
                };
            }
        },
        // Screen 8 - Concept: Equations of the form sin(2x) = k
        {
            type: 'concept',
            title: 'Equations of the Form sin(nx) = k',
            content: `
                <p>When the angle is multiplied (e.g. \\(\\sin 2x\\), \\(\\cos 3x\\)), you need to adjust the range.</p>
                <div class="lesson-box">
                    <strong>Method for \\(\\sin(2x) = k\\) in \\(0^\\circ \\leq x \\leq 360^\\circ\\):</strong>
                    <ol>
                        <li>Let \\(u = 2x\\). The range for \\(u\\) is \\(0^\\circ \\leq u \\leq 720^\\circ\\).</li>
                        <li>Solve \\(\\sin u = k\\) in the expanded range.</li>
                        <li>Divide all solutions by 2 to get \\(x\\).</li>
                    </ol>
                </div>
                <p>This means you might get up to <strong>4 solutions</strong> for \\(\\sin(2x) = k\\), or up to <strong>6 solutions</strong> for \\(\\sin(3x) = k\\).</p>
                <p>The key idea: if the range for \\(x\\) is \\(0^\\circ\\) to \\(360^\\circ\\), the range for \\(2x\\) is \\(0^\\circ\\) to \\(720^\\circ\\).</p>
            `
        },
        // Screen 9 - Example: Solve cos(2x) = -0.5
        {
            type: 'example',
            title: 'Solving cos(2x) = k',
            problem: 'Solve \\(\\cos(2x) = -0.5\\) for \\(0^\\circ \\leq x \\leq 360^\\circ\\).',
            steps: [
                { text: 'Let \\(u = 2x\\). Range: \\(0^\\circ \\leq u \\leq 720^\\circ\\).' },
                { text: 'Solve \\(\\cos u = -0.5\\). Principal value: \\(u = 120^\\circ\\).' },
                { text: 'In \\(0^\\circ\\) to \\(360^\\circ\\): \\(u = 120^\\circ\\) and \\(u = 360^\\circ - 120^\\circ = 240^\\circ\\).' },
                { text: 'For the second cycle (\\(360^\\circ\\)-\\(720^\\circ\\)): add \\(360^\\circ\\) to each.' },
                { text: '\\(u = 480^\\circ\\) and \\(u = 600^\\circ\\).' },
                { text: 'Divide by 2: \\(x = 60^\\circ, 120^\\circ, 240^\\circ, 300^\\circ\\).' }
            ]
        },
        // Screen 10 - Practice: Compound angle equations
        {
            type: 'practice',
            generate: function() {
                var problems = [
                    {
                        eq: '\\sin(2x) = \\frac{\\sqrt{3}}{2}',
                        sols: '30, 60, 210, 240',
                        wrong: ['30, 150', '60, 120, 240, 300', '15, 75, 195, 255']
                    },
                    {
                        eq: '\\cos(2x) = \\frac{1}{2}',
                        sols: '30, 150, 210, 330',
                        wrong: ['60, 300', '30, 330', '60, 120, 240, 300']
                    },
                    {
                        eq: '\\sin(2x) = \\frac{1}{2}',
                        sols: '15, 75, 195, 255',
                        wrong: ['30, 150', '15, 165, 195, 345', '30, 60, 210, 240']
                    },
                    {
                        eq: '\\tan(2x) = 1',
                        sols: '22.5, 112.5, 202.5, 292.5',
                        wrong: ['45, 225', '22.5, 202.5', '45, 135, 225, 315']
                    }
                ];
                var p = problems[Math.floor(Math.random() * problems.length)];
                var correct = p.sols + '^\\circ';
                var wrong = p.wrong.map(function(w) { return w + '^\\circ'; });
                var options = [correct].concat(wrong);
                var correctIdx = 0;
                var shuffled = options.map(function(o, i) { return { o: o, i: i }; });
                shuffled.sort(function() { return Math.random() - 0.5; });
                options = shuffled.map(function(x) { return '\\(' + x.o + '\\)'; });
                correctIdx = shuffled.findIndex(function(x) { return x.i === 0; });
                return {
                    type: 'mc',
                    latex: 'Solve \\(' + p.eq + '\\) for \\(0^\\circ \\leq x \\leq 360^\\circ\\).',
                    options: options,
                    correctIdx: correctIdx,
                    explain: 'Let \\(u = 2x\\), solve in \\(0^\\circ \\leq u \\leq 720^\\circ\\), then divide by 2. Solutions: \\(x = ' + p.sols + '^\\circ\\).'
                };
            }
        },
        // Screen 11 - Concept: Quadratic trig equations
        {
            type: 'concept',
            title: 'Quadratic Trig Equations',
            content: `
                <p>Some trig equations are <strong>quadratic</strong> in disguise. For example:</p>
                <p>\\[ 2\\sin^2 x - \\sin x - 1 = 0 \\]</p>
                <p>This is a quadratic in \\(\\sin x\\). Let \\(u = \\sin x\\):</p>
                <p>\\[ 2u^2 - u - 1 = 0 \\]</p>
                <div class="lesson-box">
                    <strong>Method:</strong>
                    <ol>
                        <li>Substitute \\(u = \\sin x\\) (or \\(\\cos x\\) or \\(\\tan x\\)).</li>
                        <li>Solve the quadratic (factorise or use the formula).</li>
                        <li>For each value of \\(u\\), solve the trig equation.</li>
                        <li>Reject any value where \\(|u| > 1\\) for sin/cos.</li>
                    </ol>
                </div>
                <p>Sometimes you need to use an identity first (e.g. replace \\(\\cos^2 x\\) with \\(1 - \\sin^2 x\\)) to make the equation quadratic in one function.</p>
            `
        },
        // Screen 12 - Example: Quadratic trig equation
        {
            type: 'example',
            title: 'Solving a Quadratic Trig Equation',
            problem: 'Solve \\(2\\cos^2 x - \\cos x - 1 = 0\\) for \\(0^\\circ \\leq x \\leq 360^\\circ\\).',
            steps: [
                { text: 'Let \\(u = \\cos x\\). The equation becomes \\(2u^2 - u - 1 = 0\\).' },
                { text: 'Factorise: \\((2u + 1)(u - 1) = 0\\).' },
                { text: '\\(u = -\\frac{1}{2}\\) or \\(u = 1\\).' },
                { text: 'Case 1: \\(\\cos x = -\\frac{1}{2}\\). Solutions: \\(x = 120^\\circ, 240^\\circ\\).' },
                { text: 'Case 2: \\(\\cos x = 1\\). Solution: \\(x = 0^\\circ\\) (and \\(360^\\circ\\)).' },
                { text: '\\(x = 0^\\circ, 120^\\circ, 240^\\circ, 360^\\circ\\).' }
            ]
        },
        // Screen 13 - Practice: Quadratic trig equations
        {
            type: 'practice',
            generate: function() {
                var problems = [
                    {
                        eq: '2\\sin^2 x - \\sin x - 1 = 0',
                        sols: '90, 210, 330',
                        exp: 'Factorise: \\((2\\sin x + 1)(\\sin x - 1) = 0\\). So \\(\\sin x = -\\frac{1}{2}\\) giving \\(x = 210^\\circ, 330^\\circ\\), or \\(\\sin x = 1\\) giving \\(x = 90^\\circ\\).',
                        wrong: ['30, 150, 270', '90, 150, 210', '30, 90, 210, 330']
                    },
                    {
                        eq: '2\\cos^2 x + \\cos x - 1 = 0',
                        sols: '60, 180, 300',
                        exp: 'Factorise: \\((2\\cos x - 1)(\\cos x + 1) = 0\\). So \\(\\cos x = \\frac{1}{2}\\) giving \\(x = 60^\\circ, 300^\\circ\\), or \\(\\cos x = -1\\) giving \\(x = 180^\\circ\\).',
                        wrong: ['60, 120, 300', '60, 300', '120, 180, 240']
                    },
                    {
                        eq: '\\tan^2 x - 3 = 0',
                        sols: '60, 120, 240, 300',
                        exp: '\\(\\tan^2 x = 3\\), so \\(\\tan x = \\pm\\sqrt{3}\\). \\(\\tan x = \\sqrt{3}\\) gives \\(60^\\circ, 240^\\circ\\). \\(\\tan x = -\\sqrt{3}\\) gives \\(120^\\circ, 300^\\circ\\).',
                        wrong: ['60, 240', '60, 120, 240', '30, 150, 210, 330']
                    },
                    {
                        eq: '2\\sin^2 x + \\sin x = 0',
                        sols: '0, 180, 210, 330, 360',
                        exp: 'Factor: \\(\\sin x(2\\sin x + 1) = 0\\). So \\(\\sin x = 0\\) giving \\(0^\\circ, 180^\\circ, 360^\\circ\\), or \\(\\sin x = -\\frac{1}{2}\\) giving \\(210^\\circ, 330^\\circ\\).',
                        wrong: ['0, 180, 360', '0, 30, 150, 180, 360', '210, 330']
                    }
                ];
                var p = problems[Math.floor(Math.random() * problems.length)];
                var correct = p.sols + '^\\circ';
                var wrong = p.wrong.map(function(w) { return w + '^\\circ'; });
                var options = [correct].concat(wrong);
                var correctIdx = 0;
                var shuffled = options.map(function(o, i) { return { o: o, i: i }; });
                shuffled.sort(function() { return Math.random() - 0.5; });
                options = shuffled.map(function(x) { return '\\(' + x.o + '\\)'; });
                correctIdx = shuffled.findIndex(function(x) { return x.i === 0; });
                return {
                    type: 'mc',
                    latex: 'Solve \\(' + p.eq + '\\) for \\(0^\\circ \\leq x \\leq 360^\\circ\\).',
                    options: options,
                    correctIdx: correctIdx,
                    explain: p.exp
                };
            }
        },
        // Screen 14 - Concept: Equations requiring identities
        {
            type: 'concept',
            title: 'Equations Requiring Identities',
            content: `
                <p>Sometimes you need to use an identity to convert the equation into a solvable form.</p>
                <div class="lesson-box">
                    <strong>Common scenario:</strong> An equation mixes \\(\\sin\\) and \\(\\cos\\). Use \\(\\sin^2 x = 1 - \\cos^2 x\\) to write everything in terms of one function.
                </div>
                <p><strong>Example:</strong> Solve \\(2\\sin^2 x + 3\\cos x = 3\\).</p>
                <p>Replace \\(\\sin^2 x\\) with \\(1 - \\cos^2 x\\):</p>
                <p>\\[ 2(1 - \\cos^2 x) + 3\\cos x = 3 \\]</p>
                <p>\\[ 2 - 2\\cos^2 x + 3\\cos x = 3 \\]</p>
                <p>\\[ 2\\cos^2 x - 3\\cos x + 1 = 0 \\]</p>
                <p>Now factorise and solve as before.</p>
            `
        },
        // Screen 15 - Practice: Equations requiring identities
        {
            type: 'practice',
            generate: function() {
                var problems = [
                    {
                        eq: '2\\sin^2 x + 3\\cos x - 3 = 0',
                        sols: '0, 60, 300, 360',
                        exp: 'Replace \\(\\sin^2 x = 1 - \\cos^2 x\\): \\(2\\cos^2 x - 3\\cos x + 1 = 0\\). Factorise: \\((2\\cos x - 1)(\\cos x - 1) = 0\\). \\(\\cos x = \\frac{1}{2}\\) or \\(\\cos x = 1\\).',
                        wrong: ['60, 300', '0, 120, 240, 360', '60, 90, 270, 300']
                    },
                    {
                        eq: '4\\cos^2 x + 5\\sin x - 5 = 0',
                        sols: '30, 90, 150',
                        exp: 'Replace \\(\\cos^2 x = 1 - \\sin^2 x\\): \\(4\\sin^2 x - 5\\sin x + 1 = 0\\). Factorise: \\((4\\sin x - 1)(\\sin x - 1) = 0\\). Solutions from \\(\\sin x = \\frac{1}{4}\\) and \\(\\sin x = 1\\).',
                        wrong: ['30, 150', '90, 210, 330', '14.5, 90, 165.5']
                    },
                    {
                        eq: '3\\sin^2 x - 2\\cos x - 2 = 0',
                        sols: '0, 109.5, 250.5, 360',
                        exp: 'Replace \\(\\sin^2 x = 1 - \\cos^2 x\\): \\(3\\cos^2 x + 2\\cos x - 1 = 0\\). Factorise: \\((3\\cos x - 1)(\\cos x + 1) = 0\\). \\(\\cos x = \\frac{1}{3}\\) or \\(\\cos x = -1\\).',
                        wrong: ['0, 360', '109.5, 250.5', '70.5, 180, 289.5']
                    }
                ];
                var p = problems[Math.floor(Math.random() * problems.length)];
                var correct = p.sols + '^\\circ';
                var wrong = p.wrong.map(function(w) { return w + '^\\circ'; });
                var options = [correct].concat(wrong);
                var correctIdx = 0;
                var shuffled = options.map(function(o, i) { return { o: o, i: i }; });
                shuffled.sort(function() { return Math.random() - 0.5; });
                options = shuffled.map(function(x) { return '\\(' + x.o + '\\)'; });
                correctIdx = shuffled.findIndex(function(x) { return x.i === 0; });
                return {
                    type: 'mc',
                    latex: 'Solve \\(' + p.eq + '\\) for \\(0^\\circ \\leq x \\leq 360^\\circ\\). Give answers to 1 d.p. where necessary.',
                    options: options,
                    correctIdx: correctIdx,
                    explain: p.exp
                };
            }
        },
        // Screen 16 - Practice: Mixed trig equations
        {
            type: 'practice',
            generate: function() {
                var problems = [
                    {
                        eq: '\\sin x = -1',
                        sols: '270',
                        wrong: ['90', '180, 360', '90, 270']
                    },
                    {
                        eq: '\\cos x = 0',
                        sols: '90, 270',
                        wrong: ['0, 180', '0, 90, 180, 270', '90']
                    },
                    {
                        eq: '2\\sin x + 1 = 0',
                        sols: '210, 330',
                        wrong: ['30, 150', '150, 210', '210, 300']
                    },
                    {
                        eq: '\\sqrt{2}\\cos x = 1',
                        sols: '45, 315',
                        wrong: ['45, 135', '135, 225', '45, 225']
                    },
                    {
                        eq: '\\tan x + 1 = 0',
                        sols: '135, 315',
                        wrong: ['45, 225', '45, 315', '135, 225']
                    }
                ];
                var p = problems[Math.floor(Math.random() * problems.length)];
                var correct = p.sols + '^\\circ';
                var wrong = p.wrong.map(function(w) { return w + '^\\circ'; });
                var options = [correct].concat(wrong);
                var correctIdx = 0;
                var shuffled = options.map(function(o, i) { return { o: o, i: i }; });
                shuffled.sort(function() { return Math.random() - 0.5; });
                options = shuffled.map(function(x) { return '\\(' + x.o + '\\)'; });
                correctIdx = shuffled.findIndex(function(x) { return x.i === 0; });
                return {
                    type: 'mc',
                    latex: 'Solve \\(' + p.eq + '\\) for \\(0^\\circ \\leq x \\leq 360^\\circ\\).',
                    options: options,
                    correctIdx: correctIdx,
                    explain: 'The solutions are \\(x = ' + p.sols + '^\\circ\\).'
                };
            }
        },
        // Screen 17 - Summary
        {
            type: 'summary',
            title: 'Solving Trigonometric Equations - Summary',
            content: '<p>You have learned systematic methods for finding all solutions to trig equations.</p>',
            points: [
                'Your calculator gives the principal value - use CAST to find all solutions.',
                'For \\(\\sin x = k\\): second solution is \\(180^\\circ - x\\).',
                'For \\(\\cos x = k\\): second solution is \\(360^\\circ - x\\).',
                'For \\(\\tan x = k\\): second solution is \\(x + 180^\\circ\\).',
                'For \\(\\sin(2x) = k\\): double the range, solve, then halve the answers.',
                'For quadratic trig equations: substitute, factorise, solve each case separately.',
                'Use identities to convert equations into one trig function when needed.'
            ]
        }
    ]
};