window.CURRENT_LESSON = {
    title: "Function Notation",
    subtitle: "Understanding f(x) notation and composite functions",
    screens: [
        {
            type: 'concept',
            title: 'What is a Function?',
            content: `
                <p>A <strong>function</strong> is a rule that maps each input to exactly one output.</p>
                <p>We write \\(f(x)\\) to mean "the function \\(f\\) applied to the input \\(x\\)".</p>
                <div class="lesson-box">
                    <p><strong>Key idea:</strong> \\(f(x)\\) is NOT \\(f \\times x\\). It means "\\(f\\) of \\(x\\)" - the output when \\(x\\) is the input.</p>
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px;width:100%"><defs><marker id="fn-arr1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#00e5c7"/></marker><marker id="fn-arr2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#54a0ff"/></marker></defs><text x="30" y="105" font-family="'Space Grotesk',sans-serif" font-size="16" fill="#feca57" font-weight="bold">x</text><line x1="50" y1="100" x2="95" y2="100" stroke="#00e5c7" stroke-width="2" marker-end="url(#fn-arr1)"/><text x="65" y="90" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">input</text><rect x="100" y="72" width="110" height="56" rx="10" fill="none" stroke="#54a0ff" stroke-width="2.5"/><text x="155" y="105" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="18" fill="#54a0ff" font-weight="bold">f</text><text x="155" y="88" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">function</text><line x1="215" y1="100" x2="255" y2="100" stroke="#00e5c7" stroke-width="2" marker-end="url(#fn-arr1)"/><text x="225" y="90" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">output</text><text x="262" y="105" font-family="'Space Grotesk',sans-serif" font-size="16" fill="#ff6b6b" font-weight="bold">f(x)</text><text x="160" y="160" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">A function is an input-output machine</text></svg></div>
                <p>For example, if \\(f(x) = 2x + 3\\), then:</p>
                <ul>
                    <li>\\(f(1) = 2(1) + 3 = 5\\)</li>
                    <li>\\(f(4) = 2(4) + 3 = 11\\)</li>
                    <li>\\(f(-2) = 2(-2) + 3 = -1\\)</li>
                </ul>
            `
        },
        {
            type: 'concept',
            title: 'Evaluating Functions',
            content: `
                <p>To evaluate \\(f(a)\\), replace every \\(x\\) in the function with \\(a\\).</p>
                <div class="lesson-box">
                    <p><strong>Method:</strong> Substitute the input value for \\(x\\), then simplify.</p>
                </div>
                <p>If \\(f(x) = x^2 - 3x + 1\\):</p>
                \\[f(2) = (2)^2 - 3(2) + 1 = 4 - 6 + 1 = -1\\]
                \\[f(-1) = (-1)^2 - 3(-1) + 1 = 1 + 3 + 1 = 5\\]
                <p>You can also substitute expressions:</p>
                \\[f(a+1) = (a+1)^2 - 3(a+1) + 1\\]
            `
        },
        {
            type: 'example',
            title: 'Evaluating a Function',
            problem: 'Given \\(f(x) = 3x^2 - 2x + 5\\), find \\(f(4)\\) and \\(f(-3)\\).',
            steps: [
                { text: 'For \\(f(4)\\): substitute \\(x = 4\\)' },
                { text: '\\(f(4) = 3(4)^2 - 2(4) + 5\\)' },
                { text: '\\(= 3(16) - 8 + 5 = 48 - 8 + 5 = 45\\)' },
                { text: 'For \\(f(-3)\\): substitute \\(x = -3\\)' },
                { text: '\\(f(-3) = 3(-3)^2 - 2(-3) + 5\\)' },
                { text: '\\(= 3(9) + 6 + 5 = 27 + 6 + 5 = 38\\)' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 5) + 1;
                var b = Math.floor(Math.random() * 9) - 4;
                var c = Math.floor(Math.random() * 7) - 3;
                var xVal = Math.floor(Math.random() * 7) - 3;
                var result = a * xVal * xVal + b * xVal + c;
                var bStr = b >= 0 ? '+ ' + b : '- ' + Math.abs(b);
                var cStr = c >= 0 ? '+ ' + c : '- ' + Math.abs(c);
                var wrong1 = result + Math.floor(Math.random() * 5) + 1;
                var wrong2 = result - Math.floor(Math.random() * 5) - 1;
                var wrong3 = a * xVal + b;
                if (wrong3 === result) wrong3 = result + 10;
                var opts = [String(result), String(wrong1), String(wrong2), String(wrong3)];
                var correctIdx = 0;
                for (var i = opts.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = opts[i]; opts[i] = opts[j]; opts[j] = tmp;
                    if (j === correctIdx) correctIdx = i;
                    else if (i === correctIdx) correctIdx = j;
                }
                return {
                    type: 'mc',
                    latex: 'f(x) = ' + a + 'x^2 ' + bStr + 'x ' + cStr + '. \\text{ Find } f(' + xVal + ').',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: '\\(f(' + xVal + ') = ' + a + '(' + xVal + ')^2 ' + bStr + '(' + xVal + ') ' + cStr + ' = ' + result + '\\)'
                };
            }
        },
        {
            type: 'concept',
            title: 'Domain and Range',
            content: `
                <p>The <strong>domain</strong> is the set of all allowed input values (\\(x\\)-values).</p>
                <p>The <strong>range</strong> is the set of all possible output values (\\(y\\)-values).</p>
                <div class="lesson-box">
                    <p><strong>Common domain restrictions:</strong></p>
                    <ul>
                        <li>Cannot divide by zero - so if \\(f(x) = \\frac{1}{x-2}\\), then \\(x \\neq 2\\)</li>
                        <li>Cannot take the square root of a negative number - so if \\(f(x) = \\sqrt{x}\\), then \\(x \\geq 0\\)</li>
                    </ul>
                </div>
                <p>For \\(f(x) = x^2\\), the domain is all real numbers, but the range is \\(f(x) \\geq 0\\).</p>
            `
        },
        {
            type: 'concept',
            title: 'Composite Functions',
            content: `
                <p>A <strong>composite function</strong> applies one function, then another.</p>
                <div class="lesson-box">
                    <p><strong>Notation:</strong> \\(fg(x)\\) means "apply \\(g\\) first, then apply \\(f\\) to the result".</p>
                    \\[fg(x) = f\\big(g(x)\\big)\\]
                    <p>Read it right-to-left: \\(g\\) first, then \\(f\\).</p>
                </div>
                <p>If \\(f(x) = 2x + 1\\) and \\(g(x) = x^2\\):</p>
                \\[fg(x) = f\\big(g(x)\\big) = f(x^2) = 2(x^2) + 1 = 2x^2 + 1\\]
                \\[gf(x) = g\\big(f(x)\\big) = g(2x+1) = (2x+1)^2\\]
                <p><strong>Important:</strong> \\(fg(x) \\neq gf(x)\\) in general!</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px;width:100%"><defs><marker id="fn-arr3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#00e5c7"/></marker></defs><text x="10" y="105" font-family="'Space Grotesk',sans-serif" font-size="15" fill="#feca57" font-weight="bold">x</text><line x1="28" y1="100" x2="55" y2="100" stroke="#00e5c7" stroke-width="2" marker-end="url(#fn-arr3)"/><rect x="60" y="80" width="50" height="40" rx="8" fill="none" stroke="#54a0ff" stroke-width="2"/><text x="85" y="105" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="16" fill="#54a0ff" font-weight="bold">g</text><line x1="115" y1="100" x2="142" y2="100" stroke="#00e5c7" stroke-width="2" marker-end="url(#fn-arr3)"/><text x="128" y="90" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">g(x)</text><rect x="148" y="80" width="50" height="40" rx="8" fill="none" stroke="#ff6b6b" stroke-width="2"/><text x="173" y="105" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="16" fill="#ff6b6b" font-weight="bold">f</text><line x1="203" y1="100" x2="235" y2="100" stroke="#00e5c7" stroke-width="2" marker-end="url(#fn-arr3)"/><text x="248" y="105" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#00e5c7" font-weight="bold">f(g(x))</text><text x="160" y="150" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#feca57">fg(x): apply g first, then f</text><text x="160" y="175" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">Read right-to-left!</text></svg></div>
            `
        },
        {
            type: 'example',
            title: 'Finding a Composite Function',
            problem: 'Given \\(f(x) = 3x - 1\\) and \\(g(x) = x^2 + 2\\), find \\(fg(3)\\) and \\(gf(3)\\).',
            steps: [
                { text: 'For \\(fg(3)\\): first find \\(g(3)\\)' },
                { text: '\\(g(3) = 3^2 + 2 = 11\\)' },
                { text: 'Then \\(f(11) = 3(11) - 1 = 32\\)' },
                { text: 'So \\(fg(3) = 32\\)' },
                { text: 'For \\(gf(3)\\): first find \\(f(3)\\)' },
                { text: '\\(f(3) = 3(3) - 1 = 8\\)' },
                { text: 'Then \\(g(8) = 8^2 + 2 = 66\\)' },
                { text: 'So \\(gf(3) = 66\\). Note: \\(fg(3) \\neq gf(3)\\).' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var a1 = Math.floor(Math.random() * 4) + 2;
                var b1 = Math.floor(Math.random() * 9) - 4;
                var a2 = Math.floor(Math.random() * 4) + 1;
                var b2 = Math.floor(Math.random() * 7) - 3;
                var xVal = Math.floor(Math.random() * 5) + 1;
                var gx = a2 * xVal + b2;
                var fgx = a1 * gx + b1;
                var b1Str = b1 >= 0 ? '+ ' + b1 : '- ' + Math.abs(b1);
                var b2Str = b2 >= 0 ? '+ ' + b2 : '- ' + Math.abs(b2);
                var wrong1 = fgx + Math.floor(Math.random() * 6) + 1;
                var wrong2 = fgx - Math.floor(Math.random() * 6) - 1;
                var fx = a1 * xVal + b1;
                var gfx = a2 * fx + b2;
                if (gfx === fgx) gfx = fgx + 7;
                var opts = [String(fgx), String(wrong1), String(wrong2), String(gfx)];
                var correctIdx = 0;
                for (var i = opts.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = opts[i]; opts[i] = opts[j]; opts[j] = tmp;
                    if (j === correctIdx) correctIdx = i;
                    else if (i === correctIdx) correctIdx = j;
                }
                return {
                    type: 'mc',
                    latex: 'f(x) = ' + a1 + 'x ' + b1Str + ',\\; g(x) = ' + a2 + 'x ' + b2Str + '. \\text{ Find } fg(' + xVal + ').',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: '\\(g(' + xVal + ') = ' + gx + '\\), then \\(f(' + gx + ') = ' + a1 + '(' + gx + ') ' + b1Str + ' = ' + fgx + '\\)'
                };
            }
        },
        {
            type: 'concept',
            title: 'Composite Function Expressions',
            content: `
                <p>We can also find the general expression for a composite function.</p>
                <p>If \\(f(x) = 2x + 3\\) and \\(g(x) = x - 1\\):</p>
                \\[fg(x) = f\\big(g(x)\\big) = f(x-1) = 2(x-1) + 3 = 2x - 2 + 3 = 2x + 1\\]
                <div class="lesson-box">
                    <p><strong>Method for composite expressions:</strong></p>
                    <ol>
                        <li>Write the outer function</li>
                        <li>Replace every \\(x\\) in the outer function with the entire inner function</li>
                        <li>Simplify</li>
                    </ol>
                </div>
            `
        },
        {
            type: 'concept',
            title: 'Inverse Functions',
            content: `
                <p>The <strong>inverse function</strong> \\(f^{-1}(x)\\) reverses what \\(f\\) does.</p>
                <div class="lesson-box">
                    <p><strong>Key property:</strong> If \\(f(a) = b\\), then \\(f^{-1}(b) = a\\).</p>
                    <p>Also: \\(f\\big(f^{-1}(x)\\big) = x\\) and \\(f^{-1}\\big(f(x)\\big) = x\\).</p>
                </div>
                <p><strong>To find the inverse:</strong></p>
                <ol>
                    <li>Write \\(y = f(x)\\)</li>
                    <li>Swap \\(x\\) and \\(y\\)</li>
                    <li>Rearrange to make \\(y\\) the subject</li>
                    <li>Write \\(f^{-1}(x) = \\ldots\\)</li>
                </ol>
            `
        },
        {
            type: 'example',
            title: 'Finding an Inverse Function',
            problem: 'Find \\(f^{-1}(x)\\) when \\(f(x) = 5x - 3\\).',
            steps: [
                { text: 'Write \\(y = 5x - 3\\)' },
                { text: 'Swap \\(x\\) and \\(y\\): \\(x = 5y - 3\\)' },
                { text: 'Add 3: \\(x + 3 = 5y\\)' },
                { text: 'Divide by 5: \\(y = \\frac{x+3}{5}\\)' },
                { text: 'So \\(f^{-1}(x) = \\frac{x+3}{5}\\)' },
                { text: 'Check: \\(f(2) = 5(2) - 3 = 7\\), and \\(f^{-1}(7) = \\frac{7+3}{5} = 2\\) \\(\\checkmark\\)' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 6) + 2;
                var b = Math.floor(Math.random() * 13) - 6;
                var bStr = b >= 0 ? '+ ' + b : '- ' + Math.abs(b);
                var bNeg = -b;
                var bNegStr = bNeg >= 0 ? '+ ' + bNeg : '- ' + Math.abs(bNeg);
                var correct = '\\frac{x ' + bNegStr + '}{' + a + '}';
                var wrong1 = '\\frac{x ' + bStr + '}{' + a + '}';
                var wrong2 = a + 'x ' + bNegStr;
                var wrong3 = '\\frac{' + a + '}{x ' + bNegStr + '}';
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
                    latex: 'f(x) = ' + a + 'x ' + bStr + '. \\text{ Find } f^{-1}(x).',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: 'Swap and rearrange: \\(x = ' + a + 'y ' + bStr + '\\), so \\(y = ' + correct + '\\)'
                };
            }
        },
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 4) + 2;
                var b = Math.floor(Math.random() * 7) - 3;
                var c = Math.floor(Math.random() * 4) + 1;
                var d = Math.floor(Math.random() * 7) - 3;
                var xVal = Math.floor(Math.random() * 5) + 1;
                var fx = a * xVal + b;
                var gfx = c * fx + d;
                var bStr = b >= 0 ? '+ ' + b : '- ' + Math.abs(b);
                var dStr = d >= 0 ? '+ ' + d : '- ' + Math.abs(d);
                return {
                    type: 'short',
                    latex: 'f(x) = ' + a + 'x ' + bStr + ',\\; g(x) = ' + c + 'x ' + dStr + '. \\text{ Find } gf(' + xVal + ').',
                    answer: String(gfx),
                    explain: '\\(f(' + xVal + ') = ' + fx + '\\), then \\(g(' + fx + ') = ' + c + '(' + fx + ') ' + dStr + ' = ' + gfx + '\\)'
                };
            }
        },
        {
            type: 'concept',
            title: 'The Graph of an Inverse',
            content: `
                <p>The graph of \\(f^{-1}(x)\\) is a reflection of \\(f(x)\\) in the line \\(y = x\\).</p>
                <div class="lesson-box">
                    <p><strong>Graphical property:</strong> If \\((a, b)\\) lies on \\(y = f(x)\\), then \\((b, a)\\) lies on \\(y = f^{-1}(x)\\).</p>
                </div>
                <p>This makes sense because the inverse swaps inputs and outputs - so it swaps the \\(x\\) and \\(y\\) coordinates.</p>
                <p><strong>Note:</strong> A function only has an inverse if it is <em>one-to-one</em> (each output comes from exactly one input). We sometimes restrict the domain to ensure this.</p>
            `
        },
        {
            type: 'summary',
            title: 'Function Notation - Summary',
            content: '<p>Here are the key ideas from this lesson:</p>',
            points: [
                '\\(f(x)\\) means "apply function \\(f\\) to input \\(x\\)" - substitute \\(x\\) and simplify',
                'Domain = allowed inputs, Range = possible outputs',
                '\\(fg(x) = f(g(x))\\): apply \\(g\\) first, then \\(f\\). Order matters!',
                'To find \\(f^{-1}(x)\\): write \\(y = f(x)\\), swap \\(x\\) and \\(y\\), rearrange for \\(y\\)',
                'The graph of \\(f^{-1}\\) is a reflection of \\(f\\) in the line \\(y = x\\)'
            ]
        }
    ]
};
