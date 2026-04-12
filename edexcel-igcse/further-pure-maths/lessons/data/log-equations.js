window.CURRENT_LESSON = {
    title: "Solving Equations with Logarithms",
    subtitle: "Using logs to solve exponential equations",
    screens: [
        // Screen 1 - Concept: When Do We Need Logs?
        {
            type: 'concept',
            title: 'When Do We Need Logarithms?',
            content: `
                <p>Consider the equation \\(2^x = 8\\). We can solve this by inspection: \\(x = 3\\).</p>
                <p>But what about \\(2^x = 10\\)? The answer is not a whole number, so we cannot solve it by inspection.</p>
                <div class="lesson-box">
                    When the <strong>variable is in the exponent</strong> and the equation cannot be solved by inspection, we use <strong>logarithms</strong> to bring the variable down from the exponent.
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><defs><marker id="leq-axis" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#e0e0e0"/></marker></defs><line x1="40" y1="210" x2="300" y2="210" stroke="#444" stroke-width="0.5"/><line x1="40" y1="210" x2="40" y2="15" stroke="#444" stroke-width="0.5"/><text x="305" y="214" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">x</text><text x="44" y="14" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">y</text><line x1="40" y1="170" x2="300" y2="170" stroke="#444" stroke-width="0.5" stroke-dasharray="2,4"/><line x1="40" y1="130" x2="300" y2="130" stroke="#444" stroke-width="0.5" stroke-dasharray="2,4"/><line x1="40" y1="90" x2="300" y2="90" stroke="#444" stroke-width="0.5" stroke-dasharray="2,4"/><line x1="40" y1="50" x2="300" y2="50" stroke="#444" stroke-width="0.5" stroke-dasharray="2,4"/><text x="32" y="174" text-anchor="end" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">2</text><text x="32" y="134" text-anchor="end" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">4</text><text x="32" y="94" text-anchor="end" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">8</text><text x="32" y="54" text-anchor="end" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">16</text><path d="M40 205 Q60 200 80 190 Q120 170 160 130 Q200 75 240 30 Q260 10 280 0" stroke="#00e5c7" stroke-width="2.5" fill="none"/><text x="275" y="18" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">y = 2^x</text><line x1="40" y1="85" x2="300" y2="85" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="6,3"/><text x="295" y="80" text-anchor="end" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b">y = 10</text><circle cx="172" cy="85" r="6" fill="none" stroke="#feca57" stroke-width="2.5"/><line x1="172" y1="85" x2="172" y2="210" stroke="#feca57" stroke-width="1.5" stroke-dasharray="4,3"/><text x="172" y="224" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57" font-weight="bold">x = 3.32</text><text x="205" y="100" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">intersection</text></svg></div>
                <p>The key idea is: if two things are equal, their logarithms are also equal. So we can <strong>take logs of both sides</strong>.</p>
                <p>This technique is one of the most important applications of logarithms.</p>
            `
        },
        // Screen 2 - Concept: Taking Logs of Both Sides
        {
            type: 'concept',
            title: 'Taking Logs of Both Sides',
            content: `
                <p>The method for solving \\(a^x = b\\) is:</p>
                <div class="lesson-box">
                    <p><strong>Step 1:</strong> Take logs of both sides: \\(\\log(a^x) = \\log b\\)</p>
                    <p><strong>Step 2:</strong> Use the power law: \\(x \\log a = \\log b\\)</p>
                    <p><strong>Step 3:</strong> Divide both sides by \\(\\log a\\):</p>
                    \\[ x = \\frac{\\log b}{\\log a} \\]
                </div>
                <p>You can use any base for the logarithm - log base 10, natural log, or any other. The answer will be the same.</p>
                <p>In practice, we use \\(\\log\\) (base 10) or \\(\\ln\\) (base \\(e\\)) since these are on our calculators.</p>
            `
        },
        // Screen 3 - Example: Basic Exponential Equation
        {
            type: 'example',
            title: 'Solving a Basic Exponential Equation',
            problem: 'Solve \\(2^x = 10\\), giving your answer to 3 significant figures.',
            steps: [
                { text: 'Take logs of both sides: \\(\\log(2^x) = \\log 10\\)' },
                { text: 'Use the power law: \\(x \\log 2 = \\log 10\\)' },
                { text: '\\(\\log 10 = 1\\), so: \\(x \\log 2 = 1\\)' },
                { text: 'Divide by \\(\\log 2\\): \\(x = \\dfrac{1}{\\log 2}\\)' },
                { text: '\\(x = \\dfrac{1}{0.30103...} = 3.32\\) (3 s.f.)' }
            ]
        },
        // Screen 4 - Practice: Basic Exponential
        {
            type: 'practice',
            generate: function() {
                var bases = [2, 3, 5, 7];
                var targets = [15, 20, 50, 100, 200, 500];
                var base = bases[Math.floor(Math.random() * bases.length)];
                var target = targets[Math.floor(Math.random() * targets.length)];
                var ans = Math.log10(target) / Math.log10(base);
                var ansRounded = parseFloat(ans.toPrecision(3));
                var wrong1 = parseFloat((ans + 0.5).toPrecision(3));
                var wrong2 = parseFloat((ans - 0.5).toPrecision(3));
                var wrong3 = parseFloat((target / base).toPrecision(3));
                var options = [ansRounded, wrong1, wrong2, wrong3];
                // Ensure uniqueness
                options = [...new Set(options)];
                while (options.length < 4) {
                    options.push(parseFloat((ans + options.length * 0.3).toPrecision(3)));
                }
                options = options.slice(0, 4);
                var correctIdx = 0;
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                correctIdx = options.indexOf(ansRounded);
                return {
                    type: 'mc',
                    latex: 'Solve \\(' + base + '^x = ' + target + '\\). Give your answer to 3 significant figures.',
                    options: options.map(function(o) { return '\\(x = ' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Taking logs: \\(x\\log ' + base + ' = \\log ' + target + '\\), so \\(x = \\dfrac{\\log ' + target + '}{\\log ' + base + '} = ' + ansRounded + '\\) (3 s.f.).'
                };
            }
        },
        // Screen 5 - Concept: Change of Base Formula
        {
            type: 'concept',
            title: 'The Change of Base Formula',
            content: `
                <p>Sometimes we need to evaluate a logarithm with a base that is not on our calculator (which only has \\(\\log\\) and \\(\\ln\\)).</p>
                <p>The <strong>change of base formula</strong> converts any logarithm to a different base:</p>
                <div class="lesson-box">
                    \\[ \\log_a b = \\frac{\\log b}{\\log a} = \\frac{\\ln b}{\\ln a} \\]
                </div>
                <p><strong>Why?</strong> Let \\(\\log_a b = x\\). Then \\(a^x = b\\).</p>
                <p>Taking \\(\\log\\) of both sides: \\(x \\log a = \\log b\\), so \\(x = \\dfrac{\\log b}{\\log a}\\).</p>
                <p>This is the same formula we derived when solving \\(a^x = b\\) - that is not a coincidence! Solving \\(a^x = b\\) <em>is</em> finding \\(\\log_a b\\).</p>
            `
        },
        // Screen 6 - Example: Change of Base
        {
            type: 'example',
            title: 'Using the Change of Base Formula',
            problem: 'Evaluate \\(\\log_5 8\\), giving your answer to 3 significant figures.',
            steps: [
                { text: 'Using the change of base formula: \\(\\log_5 8 = \\dfrac{\\log 8}{\\log 5}\\)' },
                { text: '\\(\\log 8 = 0.90309...\\)' },
                { text: '\\(\\log 5 = 0.69897...\\)' },
                { text: '\\(\\log_5 8 = \\dfrac{0.90309...}{0.69897...} = 1.29\\) (3 s.f.)' }
            ]
        },
        // Screen 7 - Practice: Change of Base
        {
            type: 'practice',
            generate: function() {
                var questions = [
                    { base: 3, arg: 7 },
                    { base: 5, arg: 12 },
                    { base: 6, arg: 20 },
                    { base: 7, arg: 30 },
                    { base: 3, arg: 50 },
                    { base: 4, arg: 10 },
                    { base: 8, arg: 100 },
                    { base: 5, arg: 3 },
                    { base: 2, arg: 15 }
                ];
                var q = questions[Math.floor(Math.random() * questions.length)];
                var ans = Math.log10(q.arg) / Math.log10(q.base);
                var ansStr = ans.toFixed(3);
                var ansRounded = parseFloat(parseFloat(ans.toPrecision(3)).toFixed(3));
                return {
                    type: 'short',
                    latex: 'Evaluate \\(\\log_{' + q.base + '} ' + q.arg + '\\) to 3 significant figures.',
                    answer: String(parseFloat(ans.toPrecision(3))),
                    accept: [String(parseFloat(ans.toPrecision(3))), ansStr, String(Math.round(ans * 1000) / 1000)],
                    explain: 'Using change of base: \\(\\log_{' + q.base + '} ' + q.arg + ' = \\dfrac{\\log ' + q.arg + '}{\\log ' + q.base + '} = ' + parseFloat(ans.toPrecision(3)) + '\\) (3 s.f.).'
                };
            }
        },
        // Screen 8 - Concept: Equations with Shifted Exponents
        {
            type: 'concept',
            title: 'Equations with Shifted Exponents',
            content: `
                <p>Sometimes the exponent is not just \\(x\\) but an expression like \\(x + 1\\) or \\(2x - 3\\).</p>
                <p>The approach is the same: take logs of both sides and use the power law.</p>
                <p>For \\(a^{f(x)} = b\\):</p>
                <div class="lesson-box">
                    <p>Take logs: \\(f(x) \\cdot \\log a = \\log b\\)</p>
                    <p>Solve for \\(x\\): \\(f(x) = \\dfrac{\\log b}{\\log a}\\)</p>
                </div>
                <p>For example, to solve \\(3^{x+1} = 20\\):</p>
                <p>\\((x+1)\\log 3 = \\log 20\\)</p>
                <p>\\(x + 1 = \\dfrac{\\log 20}{\\log 3}\\)</p>
                <p>\\(x = \\dfrac{\\log 20}{\\log 3} - 1\\)</p>
            `
        },
        // Screen 9 - Example: Shifted Exponent
        {
            type: 'example',
            title: 'Solving with a Shifted Exponent',
            problem: 'Solve \\(3^{x+1} = 20\\), giving your answer to 3 significant figures.',
            steps: [
                { text: 'Take logs of both sides: \\(\\log(3^{x+1}) = \\log 20\\)' },
                { text: 'Power law: \\((x+1)\\log 3 = \\log 20\\)' },
                { text: 'Divide: \\(x + 1 = \\dfrac{\\log 20}{\\log 3} = \\dfrac{1.30103...}{0.47712...} = 2.7268...\\)' },
                { text: '\\(x = 2.7268... - 1 = 1.73\\) (3 s.f.)' }
            ]
        },
        // Screen 10 - Practice: Shifted Exponents
        {
            type: 'practice',
            generate: function() {
                var bases = [2, 3, 5];
                var shifts = [1, 2, 3];
                var targets = [10, 20, 50, 100, 30];
                var base = bases[Math.floor(Math.random() * bases.length)];
                var shift = shifts[Math.floor(Math.random() * shifts.length)];
                var target = targets[Math.floor(Math.random() * targets.length)];
                var xPlusShift = Math.log10(target) / Math.log10(base);
                var x = xPlusShift - shift;
                var ansRounded = parseFloat(x.toPrecision(3));
                var wrong1 = parseFloat((x + 1).toPrecision(3));
                var wrong2 = parseFloat(xPlusShift.toPrecision(3));
                var wrong3 = parseFloat((x - 0.5).toPrecision(3));
                var options = [ansRounded, wrong1, wrong2, wrong3];
                options = [...new Set(options)];
                while (options.length < 4) options.push(parseFloat((x + options.length * 0.7).toPrecision(3)));
                options = options.slice(0, 4);
                var correctIdx = 0;
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                correctIdx = options.indexOf(ansRounded);
                return {
                    type: 'mc',
                    latex: 'Solve \\(' + base + '^{x+' + shift + '} = ' + target + '\\). Give \\(x\\) to 3 significant figures.',
                    options: options.map(function(o) { return '\\(x = ' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Taking logs: \\((x + ' + shift + ')\\log ' + base + ' = \\log ' + target + '\\). So \\(x + ' + shift + ' = \\dfrac{\\log ' + target + '}{\\log ' + base + '} = ' + parseFloat(xPlusShift.toPrecision(4)) + '\\), giving \\(x = ' + ansRounded + '\\) (3 s.f.).'
                };
            }
        },
        // Screen 11 - Concept: Equations with Coefficients
        {
            type: 'concept',
            title: 'Equations with Coefficients',
            content: `
                <p>Some equations have a coefficient multiplying the exponential term, like \\(5 \\cdot 3^x = 405\\).</p>
                <div class="lesson-box">
                    <strong>Strategy:</strong> Isolate the exponential term first, then take logs.
                </div>
                <p>For \\(k \\cdot a^x = b\\):</p>
                <p><strong>Step 1:</strong> Divide both sides by \\(k\\): \\(a^x = \\dfrac{b}{k}\\)</p>
                <p><strong>Step 2:</strong> Take logs: \\(x \\log a = \\log\\left(\\dfrac{b}{k}\\right)\\)</p>
                <p><strong>Step 3:</strong> Solve: \\(x = \\dfrac{\\log(b/k)}{\\log a}\\)</p>
                <div class="lesson-box warning">
                    Always isolate the exponential term <strong>before</strong> taking logarithms. A common error is to take logs too early and get stuck.
                </div>
            `
        },
        // Screen 12 - Example: Equation with Coefficient
        {
            type: 'example',
            title: 'Solving with a Coefficient',
            problem: 'Solve \\(5 \\cdot 3^x = 405\\)',
            steps: [
                { text: 'Divide both sides by 5: \\(3^x = \\dfrac{405}{5} = 81\\)' },
                { text: 'Now we can solve by inspection: \\(3^4 = 81\\).' },
                { text: 'So \\(x = 4\\).' },
                { text: '(If the answer were not a neat integer, we would take logs: \\(x = \\dfrac{\\log 81}{\\log 3} = 4\\).)' }
            ]
        },
        // Screen 13 - Practice: Equations with Coefficients
        {
            type: 'practice',
            generate: function() {
                var setups = [
                    { coeff: 3, base: 2, target: 48, rhs: 48, ans: 4 },
                    { coeff: 4, base: 5, target: 500, rhs: 500, ans: null },
                    { coeff: 2, base: 3, target: 162, rhs: 162, ans: null },
                    { coeff: 7, base: 2, target: 56, rhs: 56, ans: 3 },
                    { coeff: 10, base: 3, target: 270, rhs: 270, ans: 3 },
                    { coeff: 5, base: 2, target: 160, rhs: 160, ans: 5 },
                    { coeff: 6, base: 5, target: 750, rhs: 750, ans: 3 }
                ];
                var s = setups[Math.floor(Math.random() * setups.length)];
                var isolated = s.target / s.coeff;
                var x = Math.log10(isolated) / Math.log10(s.base);
                var ansStr;
                if (Math.abs(x - Math.round(x)) < 0.001) {
                    ansStr = String(Math.round(x));
                } else {
                    ansStr = String(parseFloat(x.toPrecision(3)));
                }
                return {
                    type: 'short',
                    latex: 'Solve \\(' + s.coeff + ' \\cdot ' + s.base + '^x = ' + s.target + '\\)',
                    answer: ansStr,
                    accept: [ansStr, String(parseFloat(x.toPrecision(3))), String(Math.round(x * 1000) / 1000)],
                    explain: 'Divide by ' + s.coeff + ': \\(' + s.base + '^x = ' + isolated + '\\). Then \\(x = \\dfrac{\\log ' + isolated + '}{\\log ' + s.base + '} = ' + ansStr + '\\).'
                };
            }
        },
        // Screen 14 - Concept: Equations with Exponentials on Both Sides
        {
            type: 'concept',
            title: 'Exponentials on Both Sides',
            content: `
                <p>When both sides of the equation are exponentials, such as \\(2^{3x} = 5^{x+1}\\), we still take logs of both sides:</p>
                <div class="lesson-box">
                    <p>\\(\\log(2^{3x}) = \\log(5^{x+1})\\)</p>
                    <p>\\(3x \\log 2 = (x+1) \\log 5\\)</p>
                    <p>Then expand and collect terms with \\(x\\) on one side.</p>
                </div>
                <p>Expanding: \\(3x \\log 2 = x \\log 5 + \\log 5\\)</p>
                <p>Collecting \\(x\\) terms: \\(3x \\log 2 - x \\log 5 = \\log 5\\)</p>
                <p>Factoring: \\(x(3 \\log 2 - \\log 5) = \\log 5\\)</p>
                <p>Solving: \\(x = \\dfrac{\\log 5}{3\\log 2 - \\log 5}\\)</p>
                <p>This technique works for any equation with exponentials on both sides.</p>
            `
        },
        // Screen 15 - Example: Both Sides Exponential
        {
            type: 'example',
            title: 'Exponentials on Both Sides',
            problem: 'Solve \\(3^x = 7^{x-2}\\), giving your answer to 3 significant figures.',
            steps: [
                { text: 'Take logs of both sides: \\(x \\log 3 = (x-2)\\log 7\\)' },
                { text: 'Expand the right side: \\(x \\log 3 = x \\log 7 - 2\\log 7\\)' },
                { text: 'Collect \\(x\\) terms: \\(x \\log 3 - x \\log 7 = -2\\log 7\\)' },
                { text: 'Factor: \\(x(\\log 3 - \\log 7) = -2\\log 7\\)' },
                { text: '\\(x = \\dfrac{-2\\log 7}{\\log 3 - \\log 7} = \\dfrac{-2(0.8451...)}{0.4771... - 0.8451...} = \\dfrac{-1.6902...}{-0.3680...}\\)' },
                { text: '\\(x = 4.59\\) (3 s.f.)' }
            ]
        },
        // Screen 16 - Practice: Both Sides Exponential
        {
            type: 'practice',
            generate: function() {
                var setups = [
                    { a: 2, b: 5, bExp: 'x-1', solve: function() { return Math.log10(5) / (Math.log10(2) - Math.log10(5)); } },
                    { a: 3, b: 2, bExp: '2x', solve: function() { return 0; } },
                    { a: 4, b: 3, bExp: 'x+2', solve: function() { var l4 = Math.log10(4), l3 = Math.log10(3); return 2*l3/(l4-l3); } },
                    { a: 5, b: 2, bExp: 'x+3', solve: function() { var l5 = Math.log10(5), l2 = Math.log10(2); return 3*l2/(l5-l2); } }
                ];
                // Use simpler version: a^x = b^(x+k)
                var bases1 = [2, 3, 5];
                var bases2 = [2, 3, 7];
                var a = bases1[Math.floor(Math.random() * bases1.length)];
                var b;
                do { b = bases2[Math.floor(Math.random() * bases2.length)]; } while (b === a);
                var k = Math.floor(Math.random() * 3) + 1;
                // a^x = b^(x+k) => x log a = (x+k) log b => x(log a - log b) = k log b => x = k log b / (log a - log b)
                var x = (k * Math.log10(b)) / (Math.log10(a) - Math.log10(b));
                var ansRounded = parseFloat(x.toPrecision(3));
                var wrong1 = parseFloat((x + 1).toPrecision(3));
                var wrong2 = parseFloat((x * -1).toPrecision(3));
                var wrong3 = parseFloat((x / 2).toPrecision(3));
                var options = [ansRounded, wrong1, wrong2, wrong3];
                options = [...new Set(options)];
                while (options.length < 4) options.push(parseFloat((x + options.length).toPrecision(3)));
                options = options.slice(0, 4);
                var correctIdx = 0;
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                correctIdx = options.indexOf(ansRounded);
                return {
                    type: 'mc',
                    latex: 'Solve \\(' + a + '^x = ' + b + '^{x+' + k + '}\\) to 3 significant figures.',
                    options: options.map(function(o) { return '\\(x = ' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Taking logs: \\(x\\log ' + a + ' = (x+' + k + ')\\log ' + b + '\\). Expanding and solving: \\(x(\\log ' + a + ' - \\log ' + b + ') = ' + k + '\\log ' + b + '\\), so \\(x = \\dfrac{' + k + '\\log ' + b + '}{\\log ' + a + ' - \\log ' + b + '} = ' + ansRounded + '\\).'
                };
            }
        },
        // Screen 17 - Summary
        {
            type: 'summary',
            title: 'Summary: Solving Equations with Logarithms',
            content: '<p>You now have a complete toolkit for solving exponential equations using logarithms. These techniques appear frequently in Further Pure Maths, as well as in applications to growth, decay, and compound interest problems.</p>',
            points: [
                'To solve \\(a^x = b\\): take logs, use power law, get \\(x = \\dfrac{\\log b}{\\log a}\\)',
                'The change of base formula: \\(\\log_a b = \\dfrac{\\log b}{\\log a}\\)',
                'For shifted exponents like \\(a^{x+k} = b\\): take logs to get \\((x+k)\\log a = \\log b\\), then solve for \\(x\\)',
                'For equations with coefficients like \\(c \\cdot a^x = b\\): isolate the exponential first by dividing by \\(c\\)',
                'For exponentials on both sides: take logs, expand, collect \\(x\\) terms, factor and solve',
                'Always give answers to 3 significant figures unless the answer is exact',
                'You can use \\(\\log\\) or \\(\\ln\\) - both give the same final answer'
            ]
        }
    ]
};
