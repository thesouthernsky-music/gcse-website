window.CURRENT_LESSON = {
    title: "Laws of Logarithms",
    subtitle: "Addition, subtraction, and power rules for logs",
    screens: [
        // Screen 1 - Concept: Why Log Laws?
        {
            type: 'concept',
            title: 'Why Do We Need Log Laws?',
            content: `
                <p>Just as the laws of indices let us simplify expressions involving powers, the <strong>laws of logarithms</strong> let us simplify and manipulate expressions involving logs.</p>
                <p>There are three main laws, each corresponding to an index law:</p>
                <ul>
                    <li><strong>Addition law</strong> (from the multiplication index law)</li>
                    <li><strong>Subtraction law</strong> (from the division index law)</li>
                    <li><strong>Power law</strong> (from the power-of-a-power index law)</li>
                </ul>
                <p>These laws work for logarithms of <strong>any base</strong>, as long as the base is consistent throughout the expression.</p>
            `
        },
        // Screen 2 - Concept: Addition Law
        {
            type: 'concept',
            title: 'Law 1: The Addition Law',
            content: `
                <p>The logarithm of a <strong>product</strong> equals the <strong>sum</strong> of the logarithms:</p>
                <div class="lesson-box">
                    \\[ \\log_a(xy) = \\log_a x + \\log_a y \\]
                </div>
                <p><strong>Why?</strong> Let \\(\\log_a x = m\\) and \\(\\log_a y = n\\). Then \\(a^m = x\\) and \\(a^n = y\\).</p>
                <p>So \\(xy = a^m \\cdot a^n = a^{m+n}\\), meaning \\(\\log_a(xy) = m + n = \\log_a x + \\log_a y\\).</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><defs><marker id="llaw-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#feca57"/></marker></defs><text x="160" y="20" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0" font-weight="bold">log(a) + log(b) = log(ab)</text><text x="160" y="38" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">Lengths add on a log scale</text><line x1="30" y1="70" x2="290" y2="70" stroke="#444" stroke-width="0.5"/><rect x="30" y="55" width="100" height="30" rx="4" fill="#00e5c7" opacity="0.3" stroke="#00e5c7" stroke-width="2"/><text x="80" y="75" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#00e5c7" font-weight="bold">log a</text><rect x="130" y="55" width="75" height="30" rx="4" fill="#54a0ff" opacity="0.3" stroke="#54a0ff" stroke-width="2"/><text x="167" y="75" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#54a0ff" font-weight="bold">log b</text><text x="220" y="75" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="16" fill="#e0e0e0">=</text><line x1="30" y1="130" x2="290" y2="130" stroke="#444" stroke-width="0.5"/><rect x="30" y="115" width="175" height="30" rx="4" fill="#feca57" opacity="0.25" stroke="#feca57" stroke-width="2"/><text x="117" y="135" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#feca57" font-weight="bold">log(ab)</text><path d="M80 90 Q80 100 117 110" stroke="#feca57" stroke-width="1.5" fill="none" stroke-dasharray="4,3" marker-end="url(#llaw-arr)"/><path d="M167 90 Q167 100 117 110" stroke="#feca57" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/><text x="160" y="170" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">Multiplying inside the log</text><text x="160" y="186" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">is the same as <tspan fill="#feca57">adding</tspan> the logs</text></svg></div>
                <p>Example: \\(\\log_2 4 + \\log_2 8 = \\log_2(4 \\times 8) = \\log_2 32 = 5\\).</p>
                <p>Check: \\(\\log_2 4 + \\log_2 8 = 2 + 3 = 5\\). Correct!</p>
                <div class="lesson-box warning">
                    \\(\\log(x + y) \\neq \\log x + \\log y\\). The addition law is about the log of a <em>product</em>, not a <em>sum</em>. This is a very common mistake!
                </div>
            `
        },
        // Screen 3 - Example: Addition Law
        {
            type: 'example',
            title: 'Using the Addition Law',
            problem: 'Write \\(\\log 12\\) as a sum of simpler logarithms',
            steps: [
                { text: 'We need to express 12 as a product of simpler factors.' },
                { text: '\\(12 = 4 \\times 3\\), so \\(\\log 12 = \\log 4 + \\log 3\\).' },
                { text: 'We could go further: \\(4 = 2^2\\), so \\(\\log 4 = \\log 2^2 = 2\\log 2\\).' },
                { text: 'Therefore \\(\\log 12 = 2\\log 2 + \\log 3\\).' }
            ]
        },
        // Screen 4 - Practice: Addition Law
        {
            type: 'practice',
            generate: function() {
                var pairs = [
                    { a: 3, b: 5, prod: 15 },
                    { a: 2, b: 7, prod: 14 },
                    { a: 4, b: 5, prod: 20 },
                    { a: 3, b: 7, prod: 21 },
                    { a: 2, b: 9, prod: 18 },
                    { a: 6, b: 5, prod: 30 }
                ];
                var p = pairs[Math.floor(Math.random() * pairs.length)];
                var correct = '\\(\\log ' + p.prod + '\\)';
                var wrong1 = '\\(\\log ' + (p.a + p.b) + '\\)';
                var wrong2 = '\\(\\log ' + (p.prod + p.a) + '\\)';
                var wrong3 = '\\(\\log ' + (p.a * p.b + p.a) + '\\)';
                var options = [correct, wrong1, wrong2, wrong3];
                var correctIdx = 0;
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                correctIdx = options.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'Simplify \\(\\log ' + p.a + ' + \\log ' + p.b + '\\) into a single logarithm.',
                    options: options,
                    correctIdx: correctIdx,
                    explain: 'By the addition law: \\(\\log ' + p.a + ' + \\log ' + p.b + ' = \\log(' + p.a + ' \\times ' + p.b + ') = \\log ' + p.prod + '\\).'
                };
            }
        },
        // Screen 5 - Concept: Subtraction Law
        {
            type: 'concept',
            title: 'Law 2: The Subtraction Law',
            content: `
                <p>The logarithm of a <strong>quotient</strong> equals the <strong>difference</strong> of the logarithms:</p>
                <div class="lesson-box">
                    \\[ \\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y \\]
                </div>
                <p><strong>Why?</strong> Using the same reasoning as before: if \\(a^m = x\\) and \\(a^n = y\\), then:</p>
                <p>\\(\\dfrac{x}{y} = \\dfrac{a^m}{a^n} = a^{m-n}\\), so \\(\\log_a\\left(\\dfrac{x}{y}\\right) = m - n = \\log_a x - \\log_a y\\).</p>
                <p>Example: \\(\\log 20 - \\log 4 = \\log\\left(\\dfrac{20}{4}\\right) = \\log 5\\).</p>
            `
        },
        // Screen 6 - Example: Subtraction Law
        {
            type: 'example',
            title: 'Using the Subtraction Law',
            problem: 'Simplify \\(\\log_3 54 - \\log_3 2\\)',
            steps: [
                { text: 'Using the subtraction law: \\(\\log_3 54 - \\log_3 2 = \\log_3\\left(\\dfrac{54}{2}\\right)\\)' },
                { text: '\\(= \\log_3 27\\)' },
                { text: '\\(= 3\\) since \\(3^3 = 27\\).' }
            ]
        },
        // Screen 7 - Practice: Subtraction Law
        {
            type: 'practice',
            generate: function() {
                var questions = [
                    { x: 50, y: 5, result: 10 },
                    { x: 36, y: 4, result: 9 },
                    { x: 75, y: 3, result: 25 },
                    { x: 56, y: 8, result: 7 },
                    { x: 48, y: 3, result: 16 },
                    { x: 100, y: 4, result: 25 },
                    { x: 72, y: 8, result: 9 }
                ];
                var q = questions[Math.floor(Math.random() * questions.length)];
                return {
                    type: 'short',
                    latex: 'Simplify \\(\\log ' + q.x + ' - \\log ' + q.y + '\\) into a single logarithm \\(\\log k\\). What is \\(k\\)?',
                    answer: String(q.result),
                    accept: [String(q.result)],
                    explain: 'By the subtraction law: \\(\\log ' + q.x + ' - \\log ' + q.y + ' = \\log\\left(\\dfrac{' + q.x + '}{' + q.y + '}\\right) = \\log ' + q.result + '\\). So \\(k = ' + q.result + '\\).'
                };
            }
        },
        // Screen 8 - Concept: Power Law
        {
            type: 'concept',
            title: 'Law 3: The Power Law',
            content: `
                <p>When the argument of a logarithm is raised to a power, the power can be brought to the <strong>front</strong> as a multiplier:</p>
                <div class="lesson-box">
                    \\[ \\log_a(x^n) = n \\log_a x \\]
                </div>
                <p><strong>Why?</strong> If \\(\\log_a x = m\\), then \\(a^m = x\\), so \\(x^n = (a^m)^n = a^{mn}\\).</p>
                <p>Therefore \\(\\log_a(x^n) = mn = n \\cdot \\log_a x\\).</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><defs><marker id="llaw-pwr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#00e5c7"/></marker></defs><text x="160" y="22" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="14" fill="#e0e0e0" font-weight="bold">Power Law: log(x^n) = n log(x)</text><rect x="40" y="45" width="240" height="50" rx="8" fill="none" stroke="#54a0ff" stroke-width="2"/><text x="160" y="68" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#54a0ff">log(x^n) = log(x * x * x * ... * x)</text><text x="160" y="85" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">n copies of x multiplied</text><path d="M160 95 L160 110" stroke="#00e5c7" stroke-width="2" marker-end="url(#llaw-pwr)"/><text x="200" y="107" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#00e5c7">addition law</text><rect x="40" y="115" width="240" height="35" rx="8" fill="none" stroke="#00e5c7" stroke-width="2"/><text x="160" y="138" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#00e5c7">= log x + log x + ... + log x</text><path d="M160 150 L160 162" stroke="#feca57" stroke-width="2" marker-end="url(#llaw-pwr)"/><rect x="70" y="168" width="180" height="28" rx="8" fill="#feca57" opacity="0.15" stroke="#feca57" stroke-width="2"/><text x="160" y="188" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="15" fill="#feca57" font-weight="bold">= n log x</text></svg></div>
                <p>Examples:</p>
                <ul>
                    <li>\\(\\log(x^5) = 5\\log x\\)</li>
                    <li>\\(\\log_2(8^4) = 4\\log_2 8 = 4 \\times 3 = 12\\)</li>
                    <li>\\(\\log(\\sqrt{x}) = \\log(x^{1/2}) = \\tfrac{1}{2}\\log x\\)</li>
                </ul>
                <p>This law is particularly powerful when combined with the other two laws.</p>
            `
        },
        // Screen 9 - Example: Power Law
        {
            type: 'example',
            title: 'Using the Power Law',
            problem: 'Simplify \\(2\\log 3 + \\log 4\\)',
            steps: [
                { text: 'First, use the power law on \\(2\\log 3\\): this becomes \\(\\log 3^2 = \\log 9\\).' },
                { text: 'Now we have \\(\\log 9 + \\log 4\\).' },
                { text: 'Using the addition law: \\(\\log 9 + \\log 4 = \\log(9 \\times 4) = \\log 36\\).' }
            ]
        },
        // Screen 10 - Practice: Power Law
        {
            type: 'practice',
            generate: function() {
                var questions = [
                    { coeff: 3, base: 2, result: 8, logLabel: '\\log 2' },
                    { coeff: 2, base: 5, result: 25, logLabel: '\\log 5' },
                    { coeff: 4, base: 3, result: 81, logLabel: '\\log 3' },
                    { coeff: 2, base: 7, result: 49, logLabel: '\\log 7' },
                    { coeff: 3, base: 10, result: 1000, logLabel: '\\log 10' },
                    { coeff: 5, base: 2, result: 32, logLabel: '\\log 2' }
                ];
                var q = questions[Math.floor(Math.random() * questions.length)];
                var correct = '\\(\\log ' + q.result + '\\)';
                var wrong1 = '\\(\\log ' + (q.coeff * q.base) + '\\)';
                var wrong2 = '\\(\\log ' + (q.result + q.coeff) + '\\)';
                var wrong3 = '\\(' + q.coeff + ' \\cdot ' + q.result + '\\)';
                var options = [correct, wrong1, wrong2, wrong3];
                var correctIdx = 0;
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                correctIdx = options.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'Write \\(' + q.coeff + q.logLabel + '\\) as a single logarithm.',
                    options: options,
                    correctIdx: correctIdx,
                    explain: 'Using the power law: \\(' + q.coeff + q.logLabel + ' = \\log ' + q.base + '^{' + q.coeff + '} = \\log ' + q.result + '\\).'
                };
            }
        },
        // Screen 11 - Concept: Combining Laws
        {
            type: 'concept',
            title: 'Combining the Laws',
            content: `
                <p>The real power of log laws comes from using them <strong>together</strong>. A common task is to write an expression as a single logarithm, or to expand a single logarithm into simpler parts.</p>
                <div class="lesson-box">
                    <p><strong>To condense</strong> (combine into one log): use power law first, then addition/subtraction.</p>
                    <p><strong>To expand</strong> (break into simpler logs): use addition/subtraction first, then power law.</p>
                </div>
                <p>For example, to expand \\(\\log\\left(\\dfrac{x^3\\sqrt{y}}{z^2}\\right)\\):</p>
                <p>\\(= \\log(x^3\\sqrt{y}) - \\log(z^2)\\) (subtraction law)</p>
                <p>\\(= \\log(x^3) + \\log(\\sqrt{y}) - \\log(z^2)\\) (addition law)</p>
                <p>\\(= 3\\log x + \\tfrac{1}{2}\\log y - 2\\log z\\) (power law)</p>
            `
        },
        // Screen 12 - Example: Combining Laws
        {
            type: 'example',
            title: 'Combining Multiple Laws',
            problem: 'Write \\(3\\log 2 + \\log 5 - \\log 4\\) as a single logarithm',
            steps: [
                { text: 'Apply the power law to \\(3\\log 2\\): \\(\\log 2^3 = \\log 8\\).' },
                { text: 'Now we have \\(\\log 8 + \\log 5 - \\log 4\\).' },
                { text: 'Apply the addition law: \\(\\log 8 + \\log 5 = \\log(8 \\times 5) = \\log 40\\).' },
                { text: 'Apply the subtraction law: \\(\\log 40 - \\log 4 = \\log\\left(\\dfrac{40}{4}\\right) = \\log 10\\).' },
                { text: 'Since \\(\\log 10 = 1\\), the final answer is \\(1\\).' }
            ]
        },
        // Screen 13 - Practice: Combining Laws
        {
            type: 'practice',
            generate: function() {
                var questions = [
                    {
                        q: '2\\log 3 + \\log 2',
                        work: '\\log 3^2 + \\log 2 = \\log 9 + \\log 2 = \\log 18',
                        ans: 18
                    },
                    {
                        q: '\\log 20 + \\log 3 - \\log 6',
                        work: '\\log\\left(\\frac{20 \\times 3}{6}\\right) = \\log 10',
                        ans: 10
                    },
                    {
                        q: '3\\log 2 + \\log 3',
                        work: '\\log 2^3 + \\log 3 = \\log 8 + \\log 3 = \\log 24',
                        ans: 24
                    },
                    {
                        q: '2\\log 5 - \\log 5',
                        work: '\\log 5^2 - \\log 5 = \\log\\left(\\frac{25}{5}\\right) = \\log 5',
                        ans: 5
                    },
                    {
                        q: '\\log 8 + 2\\log 3 - \\log 2',
                        work: '\\log 8 + \\log 9 - \\log 2 = \\log\\left(\\frac{72}{2}\\right) = \\log 36',
                        ans: 36
                    },
                    {
                        q: '2\\log 6 - \\log 9',
                        work: '\\log 6^2 - \\log 9 = \\log 36 - \\log 9 = \\log 4',
                        ans: 4
                    }
                ];
                var item = questions[Math.floor(Math.random() * questions.length)];
                return {
                    type: 'short',
                    latex: 'Write \\(' + item.q + '\\) as \\(\\log k\\). What is \\(k\\)?',
                    answer: String(item.ans),
                    accept: [String(item.ans)],
                    explain: item.work + '. So \\(k = ' + item.ans + '\\).'
                };
            }
        },
        // Screen 14 - Concept: Expanding Expressions
        {
            type: 'concept',
            title: 'Expanding Logarithmic Expressions',
            content: `
                <p>Sometimes you need to go the other way - <strong>expand</strong> a single logarithm into separate terms.</p>
                <p>For example, expand \\(\\log_2\\left(\\dfrac{5x^3}{y}\\right)\\):</p>
                <p>\\(= \\log_2(5x^3) - \\log_2 y\\) (subtraction law)</p>
                <p>\\(= \\log_2 5 + \\log_2(x^3) - \\log_2 y\\) (addition law)</p>
                <p>\\(= \\log_2 5 + 3\\log_2 x - \\log_2 y\\) (power law)</p>
                <div class="lesson-box">
                    When expanding, remember:
                    <ul>
                        <li>Multiplication inside the log becomes <strong>addition</strong> outside</li>
                        <li>Division inside the log becomes <strong>subtraction</strong> outside</li>
                        <li>Powers inside the log become <strong>coefficients</strong> outside</li>
                    </ul>
                </div>
            `
        },
        // Screen 15 - Practice: Expanding
        {
            type: 'practice',
            generate: function() {
                var n = Math.floor(Math.random() * 4) + 2;
                var vars = ['x', 'y', 'a', 'p'];
                var v = vars[Math.floor(Math.random() * vars.length)];
                var correct = '\\(' + n + '\\log ' + v + '\\)';
                var wrong1 = '\\(\\log ' + n + v + '\\)';
                var wrong2 = '\\(\\log(' + v + ' + ' + n + ')\\)';
                var wrong3 = '\\((\\log ' + v + ')^{' + n + '}\\)';
                var options = [correct, wrong1, wrong2, wrong3];
                var correctIdx = 0;
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                correctIdx = options.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'Expand \\(\\log(' + v + '^{' + n + '})\\)',
                    options: options,
                    correctIdx: correctIdx,
                    explain: 'By the power law: \\(\\log(' + v + '^{' + n + '}) = ' + n + '\\log ' + v + '\\). The exponent becomes a coefficient in front of the log.'
                };
            }
        },
        // Screen 16 - Summary
        {
            type: 'summary',
            title: 'Summary: Laws of Logarithms',
            content: '<p>You have learned the three laws of logarithms and how to combine them to simplify or expand logarithmic expressions. These skills are essential for solving equations involving logarithms.</p>',
            points: [
                '\\(\\log_a(xy) = \\log_a x + \\log_a y\\) - the addition law (product becomes sum)',
                '\\(\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y\\) - the subtraction law (quotient becomes difference)',
                '\\(\\log_a(x^n) = n\\log_a x\\) - the power law (exponent becomes coefficient)',
                'To condense: apply the power law first, then addition/subtraction laws',
                'To expand: apply addition/subtraction laws first, then the power law',
                'Common mistake: \\(\\log(x + y) \\neq \\log x + \\log y\\) - the laws are about products, not sums!'
            ]
        }
    ]
};
