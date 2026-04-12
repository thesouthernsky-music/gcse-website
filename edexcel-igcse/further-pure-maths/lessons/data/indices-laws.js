window.CURRENT_LESSON = {
    title: "Laws of Indices",
    subtitle: "Master the rules for manipulating powers",
    screens: [
        // Screen 1 - Concept: Introduction
        {
            type: 'concept',
            title: 'What are Indices?',
            content: `
                <p>An <strong>index</strong> (plural: <strong>indices</strong>) tells us how many times to multiply a base number by itself.</p>
                <p>For example, \\(2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32\\).</p>
                <p>Here, <strong>2</strong> is the <em>base</em> and <strong>5</strong> is the <em>index</em> (also called the <em>exponent</em> or <em>power</em>).</p>
                <div class="lesson-box">
                    In general, \\(a^n\\) means multiply \\(a\\) by itself \\(n\\) times.
                </div>
                <p>There are several important laws that let us simplify expressions involving indices without expanding them out. These laws are essential for Further Pure Maths.</p>
            `
        },
        // Screen 2 - Concept: Multiplication Law
        {
            type: 'concept',
            title: 'Law 1: Multiplication',
            content: `
                <p>When we multiply two powers with the <strong>same base</strong>, we <strong>add</strong> the indices:</p>
                <div class="lesson-box">
                    \\[ a^m \\times a^n = a^{m+n} \\]
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><defs><marker id="idx-mul-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#00e5c7"/></marker></defs><text x="160" y="24" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="14" fill="#e0e0e0" font-weight="bold">3^2 x 3^4 = 3^6</text><g transform="translate(28,50)"><rect x="0" y="0" width="36" height="36" rx="4" fill="none" stroke="#00e5c7" stroke-width="2"/><text x="18" y="24" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#00e5c7">3</text><rect x="40" y="0" width="36" height="36" rx="4" fill="none" stroke="#00e5c7" stroke-width="2"/><text x="58" y="24" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#00e5c7">3</text><rect x="96" y="0" width="36" height="36" rx="4" fill="none" stroke="#54a0ff" stroke-width="2"/><text x="114" y="24" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#54a0ff">3</text><rect x="136" y="0" width="36" height="36" rx="4" fill="none" stroke="#54a0ff" stroke-width="2"/><text x="154" y="24" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#54a0ff">3</text><rect x="176" y="0" width="36" height="36" rx="4" fill="none" stroke="#54a0ff" stroke-width="2"/><text x="194" y="24" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#54a0ff">3</text><rect x="216" y="0" width="36" height="36" rx="4" fill="none" stroke="#54a0ff" stroke-width="2"/><text x="234" y="24" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#54a0ff">3</text></g><line x1="28" y1="100" x2="104" y2="100" stroke="#00e5c7" stroke-width="2.5"/><text x="66" y="118" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">3^2</text><line x1="124" y1="100" x2="280" y2="100" stroke="#54a0ff" stroke-width="2.5"/><text x="202" y="118" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#54a0ff">3^4</text><line x1="28" y1="146" x2="280" y2="146" stroke="#feca57" stroke-width="2.5" marker-end="url(#idx-mul-arr)"/><text x="154" y="168" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#feca57" font-weight="bold">3^6 = 3^(2+4)</text></svg></div>
                <p><strong>Why does this work?</strong></p>
                <p>\\(a^m\\) means \\(m\\) copies of \\(a\\) multiplied together, and \\(a^n\\) means \\(n\\) copies. Multiplying them gives \\(m + n\\) copies in total.</p>
                <p>For example: \\(3^2 \\times 3^4 = (3 \\times 3) \\times (3 \\times 3 \\times 3 \\times 3) = 3^6\\).</p>
                <div class="lesson-box warning">
                    This only works when the bases are the <strong>same</strong>. You cannot simplify \\(2^3 \\times 3^4\\) using this law.
                </div>
            `
        },
        // Screen 3 - Example: Multiplication Law
        {
            type: 'example',
            title: 'Simplifying with the Multiplication Law',
            problem: 'Simplify \\(2^3 \\times 2^4\\)',
            steps: [
                { text: 'Both terms have the same base (2), so we can use the multiplication law.' },
                { text: '\\(2^3 \\times 2^4 = 2^{3+4}\\)' },
                { text: '\\(= 2^7\\)' },
                { text: '\\(= 128\\)' }
            ]
        },
        // Screen 4 - Practice: Multiplication Law
        {
            type: 'practice',
            generate: function() {
                var bases = [2, 3, 5, 7];
                var base = bases[Math.floor(Math.random() * bases.length)];
                var m = Math.floor(Math.random() * 5) + 2;
                var n = Math.floor(Math.random() * 5) + 2;
                var answer = m + n;
                var options = [answer, answer + 1, answer - 1, m * n];
                options = [...new Set(options)];
                while (options.length < 4) options.push(answer + options.length);
                var correctIdx = 0;
                // Shuffle
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                correctIdx = options.indexOf(answer);
                return {
                    type: 'mc',
                    latex: 'Simplify \\(' + base + '^{' + m + '} \\times ' + base + '^{' + n + '}\\). Give your answer in index form.',
                    options: options.map(function(o) { return '\\(' + base + '^{' + o + '}\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Using the multiplication law: \\(' + base + '^{' + m + '} \\times ' + base + '^{' + n + '} = ' + base + '^{' + m + '+' + n + '} = ' + base + '^{' + answer + '}\\).'
                };
            }
        },
        // Screen 5 - Concept: Division Law
        {
            type: 'concept',
            title: 'Law 2: Division',
            content: `
                <p>When we divide two powers with the <strong>same base</strong>, we <strong>subtract</strong> the indices:</p>
                <div class="lesson-box">
                    \\[ a^m \\div a^n = a^{m-n} \\]
                </div>
                <p>This follows from cancelling common factors. For example:</p>
                <p>\\(\\dfrac{5^6}{5^2} = \\dfrac{5 \\times 5 \\times 5 \\times 5 \\times 5 \\times 5}{5 \\times 5} = 5^4\\)</p>
                <p>We cancelled two factors of 5 from the numerator, leaving \\(6 - 2 = 4\\) factors.</p>
            `
        },
        // Screen 6 - Example: Division Law
        {
            type: 'example',
            title: 'Simplifying with the Division Law',
            problem: 'Simplify \\(\\dfrac{x^5}{x^2}\\)',
            steps: [
                { text: 'Both terms have the same base (\\(x\\)), so we subtract the indices.' },
                { text: '\\(\\dfrac{x^5}{x^2} = x^{5-2}\\)' },
                { text: '\\(= x^3\\)' }
            ]
        },
        // Screen 7 - Practice: Division Law
        {
            type: 'practice',
            generate: function() {
                var vars = ['x', 'y', 'a', 'p'];
                var v = vars[Math.floor(Math.random() * vars.length)];
                var m = Math.floor(Math.random() * 6) + 5;
                var n = Math.floor(Math.random() * 4) + 1;
                var answer = m - n;
                return {
                    type: 'short',
                    latex: 'Simplify \\(\\dfrac{' + v + '^{' + m + '}}{' + v + '^{' + n + '}}\\). Write your answer in index form, e.g. x^3',
                    answer: v + '^' + answer,
                    accept: [v + '^' + answer, v + '^{' + answer + '}'],
                    explain: 'Using the division law: \\(' + v + '^{' + m + '} \\div ' + v + '^{' + n + '} = ' + v + '^{' + m + '-' + n + '} = ' + v + '^{' + answer + '}\\).'
                };
            }
        },
        // Screen 8 - Concept: Power of a Power
        {
            type: 'concept',
            title: 'Law 3: Power of a Power',
            content: `
                <p>When we raise a power to another power, we <strong>multiply</strong> the indices:</p>
                <div class="lesson-box">
                    \\[ (a^m)^n = a^{mn} \\]
                </div>
                <p><strong>Why?</strong> \\((a^m)^n\\) means \\(a^m\\) multiplied by itself \\(n\\) times. That gives us \\(n\\) groups of \\(m\\) copies of \\(a\\), so \\(mn\\) copies total.</p>
                <p>For example: \\((2^3)^4 = 2^3 \\times 2^3 \\times 2^3 \\times 2^3 = 2^{12}\\).</p>
                <div class="lesson-box warning">
                    Be careful with brackets: \\((2^3)^4 = 2^{12}\\), but \\(2^{3^4} = 2^{81}\\) - these are very different!
                </div>
            `
        },
        // Screen 9 - Example: Power of a Power
        {
            type: 'example',
            title: 'Power of a Power',
            problem: 'Simplify \\((x^4)^3\\)',
            steps: [
                { text: 'Using the power of a power law, we multiply the indices.' },
                { text: '\\((x^4)^3 = x^{4 \\times 3}\\)' },
                { text: '\\(= x^{12}\\)' }
            ]
        },
        // Screen 10 - Practice: Power of a Power
        {
            type: 'practice',
            generate: function() {
                var vars = ['x', 'y', 'a', 'n'];
                var v = vars[Math.floor(Math.random() * vars.length)];
                var m = Math.floor(Math.random() * 5) + 2;
                var n = Math.floor(Math.random() * 4) + 2;
                var answer = m * n;
                var options = [answer, m + n, answer - 1, answer + 2];
                options = [...new Set(options)];
                while (options.length < 4) options.push(answer + options.length + 1);
                var correctIdx = 0;
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                correctIdx = options.indexOf(answer);
                return {
                    type: 'mc',
                    latex: 'Simplify \\((' + v + '^{' + m + '})^{' + n + '}\\)',
                    options: options.map(function(o) { return '\\(' + v + '^{' + o + '}\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Using the power of a power law: \\((' + v + '^{' + m + '})^{' + n + '} = ' + v + '^{' + m + ' \\times ' + n + '} = ' + v + '^{' + answer + '}\\).'
                };
            }
        },
        // Screen 11 - Concept: Zero Index
        {
            type: 'concept',
            title: 'Law 4: The Zero Index',
            content: `
                <p>Any non-zero number raised to the power of zero equals <strong>1</strong>:</p>
                <div class="lesson-box">
                    \\[ a^0 = 1 \\quad (a \\neq 0) \\]
                </div>
                <p><strong>Why?</strong> Using the division law:</p>
                <p>\\(\\dfrac{a^n}{a^n} = a^{n-n} = a^0\\)</p>
                <p>But we also know \\(\\dfrac{a^n}{a^n} = 1\\), so \\(a^0 = 1\\).</p>
                <p>This works for any base: \\(5^0 = 1\\), \\((-3)^0 = 1\\), \\(x^0 = 1\\).</p>
                <div class="lesson-box warning">
                    \\(0^0\\) is undefined - it does not equal 1. The base must be non-zero.
                </div>
            `
        },
        // Screen 12 - Concept: Negative Indices
        {
            type: 'concept',
            title: 'Law 5: Negative Indices',
            content: `
                <p>A negative index means we take the <strong>reciprocal</strong>:</p>
                <div class="lesson-box">
                    \\[ a^{-n} = \\frac{1}{a^n} \\]
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><defs><marker id="idx-neg-arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#feca57"/></marker></defs><text x="160" y="18" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0" font-weight="bold">Pattern: powers of 2</text><line x1="40" y1="200" x2="300" y2="200" stroke="#444" stroke-width="0.5"/><line x1="40" y1="200" x2="40" y2="30" stroke="#444" stroke-width="0.5"/><rect x="52" y="38" width="30" height="160" rx="3" fill="#00e5c7" opacity="0.7"/><text x="67" y="212" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">2^3</text><text x="67" y="33" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#00e5c7">8</text><rect x="97" y="118" width="30" height="80" rx="3" fill="#00e5c7" opacity="0.6"/><text x="112" y="212" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">2^2</text><text x="112" y="113" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#00e5c7">4</text><rect x="142" y="158" width="30" height="40" rx="3" fill="#54a0ff" opacity="0.6"/><text x="157" y="212" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">2^1</text><text x="157" y="153" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">2</text><rect x="187" y="178" width="30" height="20" rx="3" fill="#54a0ff" opacity="0.6"/><text x="202" y="212" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">2^0</text><text x="202" y="173" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">1</text><rect x="232" y="188" width="30" height="10" rx="3" fill="#ff6b6b" opacity="0.6"/><text x="247" y="212" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">2^-1</text><text x="247" y="183" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#ff6b6b">1/2</text><path d="M80 50 Q160 60 240 190" stroke="#feca57" stroke-width="2" fill="none" stroke-dasharray="6,3" marker-end="url(#idx-neg-arr)"/><text x="280" y="55" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#feca57">halving</text><text x="280" y="67" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#feca57">each time</text></svg></div>
                <p><strong>Why?</strong> Using the division law: \\(\\dfrac{a^0}{a^n} = a^{0-n} = a^{-n}\\). Since \\(a^0 = 1\\), this gives \\(\\dfrac{1}{a^n}\\).</p>
                <p>Examples:</p>
                <ul>
                    <li>\\(2^{-3} = \\dfrac{1}{2^3} = \\dfrac{1}{8}\\)</li>
                    <li>\\(x^{-1} = \\dfrac{1}{x}\\)</li>
                    <li>\\(5^{-2} = \\dfrac{1}{25}\\)</li>
                </ul>
                <p>Conversely, \\(\\dfrac{1}{a^{-n}} = a^n\\) - a negative index in the denominator "flips" to a positive index in the numerator.</p>
            `
        },
        // Screen 13 - Example: Negative Indices
        {
            type: 'example',
            title: 'Working with Negative Indices',
            problem: 'Evaluate \\(4^{-2}\\)',
            steps: [
                { text: 'A negative index means "take the reciprocal".' },
                { text: '\\(4^{-2} = \\dfrac{1}{4^2}\\)' },
                { text: '\\(= \\dfrac{1}{16}\\)' }
            ]
        },
        // Screen 14 - Practice: Negative Indices
        {
            type: 'practice',
            generate: function() {
                var bases = [2, 3, 4, 5, 10];
                var base = bases[Math.floor(Math.random() * bases.length)];
                var n = Math.floor(Math.random() * 3) + 1;
                var denom = Math.pow(base, n);
                var options = ['\\(\\dfrac{1}{' + denom + '}\\)', '\\(-' + denom + '\\)', '\\(' + denom + '\\)', '\\(-\\dfrac{1}{' + denom + '}\\)'];
                var correctIdx = 0;
                // Shuffle
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                correctIdx = options.indexOf('\\(\\dfrac{1}{' + denom + '}\\)');
                return {
                    type: 'mc',
                    latex: 'Evaluate \\(' + base + '^{-' + n + '}\\)',
                    options: options,
                    correctIdx: correctIdx,
                    explain: '\\(' + base + '^{-' + n + '} = \\dfrac{1}{' + base + '^{' + n + '}} = \\dfrac{1}{' + denom + '}\\). A negative index means reciprocal, not negative number.'
                };
            }
        },
        // Screen 15 - Concept: Fractional Indices
        {
            type: 'concept',
            title: 'Law 6: Fractional Indices',
            content: `
                <p>A fractional index represents a <strong>root</strong>:</p>
                <div class="lesson-box">
                    \\[ a^{\\frac{1}{n}} = \\sqrt[n]{a} \\]
                    \\[ a^{\\frac{m}{n}} = \\left(\\sqrt[n]{a}\\right)^m = \\sqrt[n]{a^m} \\]
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><text x="160" y="20" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0" font-weight="bold">9^(1/2) = 3 -- the square root</text><rect x="90" y="35" width="80" height="80" rx="4" fill="none" stroke="#00e5c7" stroke-width="2.5"/><text x="130" y="82" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="16" fill="#00e5c7" font-weight="bold">Area = 9</text><line x1="90" y1="125" x2="170" y2="125" stroke="#feca57" stroke-width="2.5"/><text x="130" y="142" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#feca57" font-weight="bold">side = 3</text><line x1="80" y1="35" x2="80" y2="115" stroke="#feca57" stroke-width="2.5"/><text x="68" y="80" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#feca57" font-weight="bold" transform="rotate(-90,68,80)">side = 3</text><text x="160" y="170" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">The square root finds the <tspan fill="#feca57">side length</tspan></text><text x="160" y="186" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">of a square with a given <tspan fill="#00e5c7">area</tspan></text></svg></div>
                <p>The <strong>denominator</strong> of the fraction tells you which <strong>root</strong> to take. The <strong>numerator</strong> tells you which <strong>power</strong> to raise it to.</p>
                <p>Examples:</p>
                <ul>
                    <li>\\(9^{\\frac{1}{2}} = \\sqrt{9} = 3\\)</li>
                    <li>\\(8^{\\frac{1}{3}} = \\sqrt[3]{8} = 2\\)</li>
                    <li>\\(16^{\\frac{3}{4}} = (\\sqrt[4]{16})^3 = 2^3 = 8\\)</li>
                </ul>
                <div class="lesson-box warning">
                    Tip: It is usually easier to take the root first, then raise to the power. For \\(8^{\\frac{2}{3}}\\), find \\(\\sqrt[3]{8} = 2\\) first, then \\(2^2 = 4\\).
                </div>
            `
        },
        // Screen 16 - Example: Fractional Indices
        {
            type: 'example',
            title: 'Evaluating Fractional Indices',
            problem: 'Evaluate \\(8^{\\frac{2}{3}}\\)',
            steps: [
                { text: 'The denominator 3 tells us to take the cube root. The numerator 2 tells us to square the result.' },
                { text: 'Step 1: Find the cube root: \\(\\sqrt[3]{8} = 2\\)' },
                { text: 'Step 2: Square the result: \\(2^2 = 4\\)' },
                { text: 'So \\(8^{\\frac{2}{3}} = 4\\)' }
            ]
        },
        // Screen 17 - Practice: Fractional Indices
        {
            type: 'practice',
            generate: function() {
                var questions = [
                    { base: 27, frac: '\\frac{1}{3}', ans: 3 },
                    { base: 16, frac: '\\frac{1}{2}', ans: 4 },
                    { base: 25, frac: '\\frac{1}{2}', ans: 5 },
                    { base: 8, frac: '\\frac{2}{3}', ans: 4 },
                    { base: 27, frac: '\\frac{2}{3}', ans: 9 },
                    { base: 16, frac: '\\frac{3}{4}', ans: 8 },
                    { base: 32, frac: '\\frac{2}{5}', ans: 4 },
                    { base: 64, frac: '\\frac{1}{3}', ans: 4 },
                    { base: 125, frac: '\\frac{2}{3}', ans: 25 },
                    { base: 49, frac: '\\frac{1}{2}', ans: 7 },
                    { base: 16, frac: '\\frac{1}{4}', ans: 2 },
                    { base: 81, frac: '\\frac{3}{4}', ans: 27 }
                ];
                var q = questions[Math.floor(Math.random() * questions.length)];
                return {
                    type: 'short',
                    latex: 'Evaluate \\(' + q.base + '^{' + q.frac + '}\\)',
                    answer: String(q.ans),
                    accept: [String(q.ans), String(q.ans) + '.0'],
                    explain: 'Using the fractional index rule: \\(' + q.base + '^{' + q.frac + '} = ' + q.ans + '\\). Remember: the denominator is the root, the numerator is the power.'
                };
            }
        },
        // Screen 18 - Summary
        {
            type: 'summary',
            title: 'Summary: Laws of Indices',
            content: '<p>You have learned the six key laws of indices. These laws are fundamental tools for simplifying expressions and solving equations throughout Further Pure Maths.</p>',
            points: [
                '\\(a^m \\times a^n = a^{m+n}\\) - Multiplication law: add the indices',
                '\\(a^m \\div a^n = a^{m-n}\\) - Division law: subtract the indices',
                '\\((a^m)^n = a^{mn}\\) - Power of a power: multiply the indices',
                '\\(a^0 = 1\\) - Zero index (for \\(a \\neq 0\\))',
                '\\(a^{-n} = \\dfrac{1}{a^n}\\) - Negative index: take the reciprocal',
                '\\(a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m\\) - Fractional index: root then power'
            ]
        }
    ]
};
