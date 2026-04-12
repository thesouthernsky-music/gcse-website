window.CURRENT_LESSON = {
    title: "Introduction to Logarithms",
    subtitle: "Understanding logs as the inverse of powers",
    screens: [
        // Screen 1 - Concept: What is a Logarithm?
        {
            type: 'concept',
            title: 'What is a Logarithm?',
            content: `
                <p>A <strong>logarithm</strong> answers the question: <em>"What power do I need to raise a base to, in order to get a certain number?"</em></p>
                <p>If \\(a^x = b\\), then \\(\\log_a b = x\\).</p>
                <div class="lesson-box">
                    \\(\\log_a b = x\\) means "\\(a\\) raised to the power \\(x\\) gives \\(b\\)"
                    \\[ a^x = b \\iff \\log_a b = x \\]
                </div>
                <p>For example, since \\(2^3 = 8\\), we write \\(\\log_2 8 = 3\\).</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><defs><marker id="log-fwd" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#00e5c7"/></marker><marker id="log-bwd" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#ff6b6b"/></marker></defs><rect x="30" y="60" width="70" height="50" rx="10" fill="none" stroke="#54a0ff" stroke-width="2"/><text x="65" y="82" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">base</text><text x="65" y="98" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="18" fill="#54a0ff" font-weight="bold">2</text><rect x="125" y="30" width="70" height="50" rx="10" fill="none" stroke="#feca57" stroke-width="2"/><text x="160" y="52" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">exponent</text><text x="160" y="72" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="18" fill="#feca57" font-weight="bold">3</text><rect x="220" y="60" width="70" height="50" rx="10" fill="none" stroke="#00e5c7" stroke-width="2"/><text x="255" y="82" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">result</text><text x="255" y="98" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="18" fill="#00e5c7" font-weight="bold">8</text><path d="M100 70 Q140 40 145 35" stroke="#00e5c7" stroke-width="2.5" fill="none" marker-end="url(#log-fwd)"/><path d="M195 55 Q210 50 220 65" stroke="#00e5c7" stroke-width="2.5" fill="none" marker-end="url(#log-fwd)"/><text x="160" y="20" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#00e5c7" font-weight="bold">2^3 = 8 (exponential)</text><path d="M220 100 Q180 140 120 140 Q105 140 100 120" stroke="#ff6b6b" stroke-width="2.5" fill="none" stroke-dasharray="6,3" marker-end="url(#log-bwd)"/><text x="160" y="162" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#ff6b6b" font-weight="bold">log_2(8) = 3 (logarithm)</text><text x="160" y="190" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">The log asks: "what power gives us 8?"</text></svg></div>
                <p>The logarithm is the <strong>inverse operation</strong> of exponentiation, just as subtraction is the inverse of addition.</p>
            `
        },
        // Screen 2 - Concept: Understanding the Notation
        {
            type: 'concept',
            title: 'Understanding the Notation',
            content: `
                <p>In the expression \\(\\log_a b\\):</p>
                <ul>
                    <li>\\(a\\) is the <strong>base</strong> of the logarithm (written as a subscript)</li>
                    <li>\\(b\\) is the <strong>argument</strong> (the number we are taking the log of)</li>
                    <li>The result is the <strong>exponent</strong> that \\(a\\) must be raised to</li>
                </ul>
                <div class="lesson-box">
                    Think of it as: \\(\\log_{\\text{base}}(\\text{result}) = \\text{power}\\)
                </div>
                <p>Reading \\(\\log_3 81 = 4\\) aloud: "log base 3 of 81 equals 4", meaning \\(3^4 = 81\\).</p>
                <div class="lesson-box warning">
                    The base must be positive and not equal to 1, i.e. \\(a > 0\\) and \\(a \\neq 1\\). The argument must be positive: \\(b > 0\\).
                </div>
            `
        },
        // Screen 3 - Example: Evaluating Simple Logs
        {
            type: 'example',
            title: 'Evaluating a Logarithm',
            problem: 'Evaluate \\(\\log_3 27\\)',
            steps: [
                { text: 'We need to find the power \\(x\\) such that \\(3^x = 27\\).' },
                { text: '\\(3^1 = 3\\)' },
                { text: '\\(3^2 = 9\\)' },
                { text: '\\(3^3 = 27\\) - this is the one we need.' },
                { text: 'So \\(\\log_3 27 = 3\\).' }
            ]
        },
        // Screen 4 - Practice: Evaluate Simple Logs
        {
            type: 'practice',
            generate: function() {
                var questions = [
                    { base: 2, arg: 8, ans: 3 },
                    { base: 2, arg: 16, ans: 4 },
                    { base: 2, arg: 32, ans: 5 },
                    { base: 2, arg: 64, ans: 6 },
                    { base: 3, arg: 9, ans: 2 },
                    { base: 3, arg: 27, ans: 3 },
                    { base: 3, arg: 81, ans: 4 },
                    { base: 5, arg: 25, ans: 2 },
                    { base: 5, arg: 125, ans: 3 },
                    { base: 4, arg: 16, ans: 2 },
                    { base: 4, arg: 64, ans: 3 },
                    { base: 10, arg: 100, ans: 2 },
                    { base: 10, arg: 1000, ans: 3 },
                    { base: 7, arg: 49, ans: 2 },
                    { base: 6, arg: 36, ans: 2 }
                ];
                var q = questions[Math.floor(Math.random() * questions.length)];
                var options = [q.ans, q.ans + 1, q.ans - 1, q.ans * 2];
                options = [...new Set(options)];
                while (options.length < 4) options.push(q.ans + options.length + 1);
                options = options.slice(0, 4);
                var correctIdx = 0;
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                correctIdx = options.indexOf(q.ans);
                return {
                    type: 'mc',
                    latex: 'Evaluate \\(\\log_{' + q.base + '} ' + q.arg + '\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Since \\(' + q.base + '^{' + q.ans + '} = ' + q.arg + '\\), we have \\(\\log_{' + q.base + '} ' + q.arg + ' = ' + q.ans + '\\).'
                };
            }
        },
        // Screen 5 - Concept: Converting Between Forms
        {
            type: 'concept',
            title: 'Converting Between Index and Log Form',
            content: `
                <p>Every statement about indices can be rewritten as a statement about logarithms, and vice versa.</p>
                <div class="lesson-box">
                    <p><strong>Index form:</strong> \\(a^x = b\\)</p>
                    <p><strong>Log form:</strong> \\(\\log_a b = x\\)</p>
                </div>
                <p>Here are some examples of converting:</p>
                <table style="width:100%; text-align:center; margin:1em 0;">
                    <tr><th>Index form</th><th>Log form</th></tr>
                    <tr><td>\\(2^5 = 32\\)</td><td>\\(\\log_2 32 = 5\\)</td></tr>
                    <tr><td>\\(10^3 = 1000\\)</td><td>\\(\\log_{10} 1000 = 3\\)</td></tr>
                    <tr><td>\\(5^{-1} = 0.2\\)</td><td>\\(\\log_5 0.2 = -1\\)</td></tr>
                </table>
                <p>Being fluent at converting between these two forms is essential for working with logarithms.</p>
            `
        },
        // Screen 6 - Example: Converting to Log Form
        {
            type: 'example',
            title: 'Converting to Log Form',
            problem: 'Convert \\(2^5 = 32\\) to logarithmic form',
            steps: [
                { text: 'Identify the parts: base = 2, exponent = 5, result = 32.' },
                { text: 'In log form: \\(\\log_{\\text{base}}(\\text{result}) = \\text{exponent}\\)' },
                { text: '\\(\\log_2 32 = 5\\)' }
            ]
        },
        // Screen 7 - Practice: Converting Forms
        {
            type: 'practice',
            generate: function() {
                var questions = [
                    { base: 2, exp: 4, result: 16 },
                    { base: 3, exp: 3, result: 27 },
                    { base: 5, exp: 2, result: 25 },
                    { base: 10, exp: 4, result: 10000 },
                    { base: 4, exp: 3, result: 64 },
                    { base: 2, exp: 6, result: 64 },
                    { base: 7, exp: 2, result: 49 },
                    { base: 6, exp: 3, result: 216 }
                ];
                var q = questions[Math.floor(Math.random() * questions.length)];
                var correct = '\\(\\log_{' + q.base + '} ' + q.result + ' = ' + q.exp + '\\)';
                var wrong1 = '\\(\\log_{' + q.exp + '} ' + q.result + ' = ' + q.base + '\\)';
                var wrong2 = '\\(\\log_{' + q.result + '} ' + q.base + ' = ' + q.exp + '\\)';
                var wrong3 = '\\(\\log_{' + q.base + '} ' + q.exp + ' = ' + q.result + '\\)';
                var options = [correct, wrong1, wrong2, wrong3];
                var correctIdx = 0;
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                correctIdx = options.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'Convert \\(' + q.base + '^{' + q.exp + '} = ' + q.result + '\\) to logarithmic form.',
                    options: options,
                    correctIdx: correctIdx,
                    explain: 'Since \\(' + q.base + '^{' + q.exp + '} = ' + q.result + '\\), the log form is \\(\\log_{' + q.base + '} ' + q.result + ' = ' + q.exp + '\\). The base stays the same, the result goes inside the log, and the exponent is what it equals.'
                };
            }
        },
        // Screen 8 - Concept: Log Base 10
        {
            type: 'concept',
            title: 'Common Logarithm (Base 10)',
            content: `
                <p>The <strong>common logarithm</strong> uses base 10 and is so frequently used that we often omit the base:</p>
                <div class="lesson-box">
                    \\[ \\log x = \\log_{10} x \\]
                </div>
                <p>When you see "\\(\\log\\)" without a base written, it means base 10.</p>
                <p>Common examples:</p>
                <ul>
                    <li>\\(\\log 10 = 1\\) because \\(10^1 = 10\\)</li>
                    <li>\\(\\log 100 = 2\\) because \\(10^2 = 100\\)</li>
                    <li>\\(\\log 1000 = 3\\) because \\(10^3 = 1000\\)</li>
                    <li>\\(\\log 1 = 0\\) because \\(10^0 = 1\\)</li>
                </ul>
                <p>The "log" button on your calculator gives \\(\\log_{10}\\). This is the log you will use most often in Further Pure Maths.</p>
            `
        },
        // Screen 9 - Concept: Natural Logarithm
        {
            type: 'concept',
            title: 'The Natural Logarithm',
            content: `
                <p>There is another special logarithm called the <strong>natural logarithm</strong>, which uses the base \\(e \\approx 2.71828...\\)</p>
                <div class="lesson-box">
                    \\[ \\ln x = \\log_e x \\]
                </div>
                <p>The number \\(e\\) is an irrational constant that appears naturally throughout mathematics, particularly in calculus.</p>
                <p>Key facts about \\(\\ln\\):</p>
                <ul>
                    <li>\\(\\ln e = 1\\) because \\(e^1 = e\\)</li>
                    <li>\\(\\ln 1 = 0\\) because \\(e^0 = 1\\)</li>
                    <li>\\(\\ln\\) and \\(e^x\\) are inverse functions: \\(\\ln(e^x) = x\\) and \\(e^{\\ln x} = x\\)</li>
                </ul>
                <p>Your calculator has an "ln" button for this. You will meet \\(\\ln\\) frequently in calculus and differential equations.</p>
            `
        },
        // Screen 10 - Example: Evaluating Logs of Different Bases
        {
            type: 'example',
            title: 'Evaluating Logs with Special Values',
            problem: 'Evaluate: (a) \\(\\log_5 1\\), (b) \\(\\log_3 3\\), (c) \\(\\log_4 \\frac{1}{4}\\)',
            steps: [
                { text: '(a) \\(\\log_5 1 = 0\\) because \\(5^0 = 1\\). In fact, \\(\\log_a 1 = 0\\) for any valid base.' },
                { text: '(b) \\(\\log_3 3 = 1\\) because \\(3^1 = 3\\). In fact, \\(\\log_a a = 1\\) for any valid base.' },
                { text: '(c) We need \\(4^x = \\frac{1}{4}\\). Since \\(\\frac{1}{4} = 4^{-1}\\), we have \\(\\log_4 \\frac{1}{4} = -1\\).' }
            ]
        },
        // Screen 11 - Concept: Key Properties
        {
            type: 'concept',
            title: 'Key Properties of Logarithms',
            content: `
                <p>There are two fundamental properties that follow directly from the definition:</p>
                <div class="lesson-box">
                    <p><strong>Property 1:</strong> \\(\\log_a 1 = 0\\) for any valid base \\(a\\)</p>
                    <p>(because \\(a^0 = 1\\))</p>
                    <p><strong>Property 2:</strong> \\(\\log_a a = 1\\) for any valid base \\(a\\)</p>
                    <p>(because \\(a^1 = a\\))</p>
                </div>
                <p>There are also two important <strong>inverse relationships</strong>:</p>
                <div class="lesson-box">
                    <p>\\(a^{\\log_a x} = x\\) for \\(x > 0\\)</p>
                    <p>\\(\\log_a(a^x) = x\\) for all \\(x\\)</p>
                </div>
                <p>These say that the exponential and logarithm "undo" each other - they are inverse functions.</p>
            `
        },
        // Screen 12 - Practice: Key Properties
        {
            type: 'practice',
            generate: function() {
                var types = [
                    function() {
                        var bases = [2, 3, 5, 7, 10, 11, 13];
                        var b = bases[Math.floor(Math.random() * bases.length)];
                        return { q: '\\log_{' + b + '} 1', ans: '0', accept: ['0', '0.0'] };
                    },
                    function() {
                        var bases = [2, 3, 5, 7, 10, 11, 13];
                        var b = bases[Math.floor(Math.random() * bases.length)];
                        return { q: '\\log_{' + b + '} ' + b, ans: '1', accept: ['1', '1.0'] };
                    },
                    function() {
                        var bases = [2, 3, 5, 10];
                        var b = bases[Math.floor(Math.random() * bases.length)];
                        var n = Math.floor(Math.random() * 5) + 2;
                        return { q: '\\log_{' + b + '} ' + b + '^{' + n + '}', ans: String(n), accept: [String(n)] };
                    },
                    function() {
                        var bases = [2, 3, 4, 5, 10];
                        var b = bases[Math.floor(Math.random() * bases.length)];
                        var val = b * b;
                        return { q: '\\log_{' + b + '} \\frac{1}{' + val + '}', ans: '-2', accept: ['-2', '-2.0'] };
                    }
                ];
                var gen = types[Math.floor(Math.random() * types.length)];
                var data = gen();
                return {
                    type: 'short',
                    latex: 'Evaluate \\(' + data.q + '\\)',
                    answer: data.ans,
                    accept: data.accept,
                    explain: 'Using the definition: \\(' + data.q + ' = ' + data.ans + '\\). Remember the key properties: \\(\\log_a 1 = 0\\), \\(\\log_a a = 1\\), and \\(\\log_a(a^n) = n\\).'
                };
            }
        },
        // Screen 13 - Concept: Logs and Graphs
        {
            type: 'concept',
            title: 'The Logarithmic Function',
            content: `
                <p>The function \\(y = \\log_a x\\) is the <strong>inverse</strong> of the exponential function \\(y = a^x\\).</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><defs><marker id="log-axis-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#e0e0e0"/></marker></defs><line x1="50" y1="20" x2="50" y2="220" stroke="#444" stroke-width="0.5"/><line x1="20" y1="150" x2="310" y2="150" stroke="#444" stroke-width="0.5"/><line x1="50" y1="20" x2="50" y2="20" stroke="#e0e0e0" stroke-width="1" marker-end="url(#log-axis-arr)"/><line x1="310" y1="150" x2="310" y2="150" stroke="#e0e0e0" stroke-width="1"/><text x="315" y="154" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">x</text><text x="54" y="18" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">y</text><line x1="50" y1="30" x2="300" y2="30" stroke="#444" stroke-width="0.5" stroke-dasharray="2,4"/><line x1="50" y1="70" x2="300" y2="70" stroke="#444" stroke-width="0.5" stroke-dasharray="2,4"/><line x1="50" y1="110" x2="300" y2="110" stroke="#444" stroke-width="0.5" stroke-dasharray="2,4"/><line x1="50" y1="190" x2="300" y2="190" stroke="#444" stroke-width="0.5" stroke-dasharray="2,4"/><path d="M55 220 Q58 195 68 170 Q78 150 100 120 Q130 90 170 68 Q220 45 300 30" stroke="#00e5c7" stroke-width="2.5" fill="none"/><circle cx="100" cy="150" r="5" fill="#feca57"/><text x="108" y="165" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">(1, 0)</text><circle cx="150" cy="110" r="5" fill="#feca57"/><text x="158" y="107" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">(2, 1)</text><circle cx="200" cy="70" r="5" fill="#feca57"/><text x="208" y="67" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">(4, 2)</text><circle cx="270" cy="30" r="5" fill="#feca57"/><text x="250" y="25" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">(8, 3)</text><text x="200" y="220" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="14" fill="#00e5c7" font-weight="bold">y = log_2(x)</text><line x1="52" y1="30" x2="52" y2="220" stroke="#ff6b6b" stroke-width="1.5" stroke-dasharray="4,3"/><text x="30" y="228" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#ff6b6b">asymptote</text></svg></div>
                <p>Key features of the graph \\(y = \\log_a x\\) (where \\(a > 1\\)):</p>
                <ul>
                    <li>It passes through \\((1, 0)\\) because \\(\\log_a 1 = 0\\)</li>
                    <li>It passes through \\((a, 1)\\) because \\(\\log_a a = 1\\)</li>
                    <li>The \\(y\\)-axis (\\(x = 0\\)) is a vertical asymptote</li>
                    <li>The domain is \\(x > 0\\) (we cannot take the log of a negative number or zero)</li>
                    <li>The range is all real numbers</li>
                    <li>The function is always increasing (for \\(a > 1\\))</li>
                </ul>
                <div class="lesson-box warning">
                    You can never take the log of zero or a negative number. If you get \\(\\log_a x\\) where \\(x \\leq 0\\), something has gone wrong.
                </div>
            `
        },
        // Screen 14 - Example: Converting from Log to Index Form
        {
            type: 'example',
            title: 'Converting from Log Form to Index Form',
            problem: 'Write \\(\\log_2 \\frac{1}{8} = -3\\) in index form',
            steps: [
                { text: 'Recall: \\(\\log_a b = x\\) means \\(a^x = b\\).' },
                { text: 'Here the base is 2, the exponent is \\(-3\\), and the result is \\(\\frac{1}{8}\\).' },
                { text: 'Index form: \\(2^{-3} = \\frac{1}{8}\\)' },
                { text: 'We can verify: \\(2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}\\). Correct.' }
            ]
        },
        // Screen 15 - Practice: Mixed Evaluation
        {
            type: 'practice',
            generate: function() {
                var questions = [
                    { q: '\\log_2 64', ans: 6 },
                    { q: '\\log_3 243', ans: 5 },
                    { q: '\\log_5 625', ans: 4 },
                    { q: '\\log_4 256', ans: 4 },
                    { q: '\\log_{10} 10000', ans: 4 },
                    { q: '\\log_2 128', ans: 7 },
                    { q: '\\log_3 729', ans: 6 },
                    { q: '\\log_6 216', ans: 3 },
                    { q: '\\log_8 512', ans: 3 },
                    { q: '\\log_9 81', ans: 2 }
                ];
                var item = questions[Math.floor(Math.random() * questions.length)];
                var options = [item.ans, item.ans + 1, item.ans - 1, item.ans + 2];
                options = [...new Set(options)];
                while (options.length < 4) options.push(item.ans + options.length + 2);
                options = options.slice(0, 4);
                var correctIdx = 0;
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                correctIdx = options.indexOf(item.ans);
                return {
                    type: 'mc',
                    latex: 'Evaluate \\(' + item.q + '\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: '\\(' + item.q + ' = ' + item.ans + '\\). Find the power the base must be raised to in order to give the argument.'
                };
            }
        },
        // Screen 16 - Summary
        {
            type: 'summary',
            title: 'Summary: Introduction to Logarithms',
            content: '<p>You now understand what logarithms are and how to work with them at a fundamental level. These concepts form the foundation for the laws of logarithms and solving exponential equations.</p>',
            points: [
                '\\(\\log_a b = x\\) means \\(a^x = b\\) - a logarithm is an exponent',
                'Index form and log form are interchangeable: \\(a^x = b \\iff \\log_a b = x\\)',
                '\\(\\log x\\) (no base written) means \\(\\log_{10} x\\) - the common logarithm',
                '\\(\\ln x\\) means \\(\\log_e x\\) - the natural logarithm',
                '\\(\\log_a 1 = 0\\) and \\(\\log_a a = 1\\) for any valid base',
                'The domain of \\(\\log_a x\\) is \\(x > 0\\) - you cannot take the log of zero or a negative number'
            ]
        }
    ]
};
