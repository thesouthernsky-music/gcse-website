window.CURRENT_LESSON = {
    title: "Sigma Notation",
    subtitle: "Compact notation for series",
    screens: [
        {
            type: 'concept',
            title: 'What is Sigma Notation?',
            content: `
                <p>The Greek capital letter sigma (\\(\\Sigma\\)) is used as shorthand for "the sum of".</p>
                <div class="lesson-box">
                    \\[\\sum_{r=1}^{n} f(r) = f(1) + f(2) + f(3) + \\ldots + f(n)\\]
                    <p>where:</p>
                    <ul>
                        <li>\\(r\\) is the <strong>index variable</strong> (also called the dummy variable)</li>
                        <li>The number below (\\(r = 1\\)) is the <strong>lower limit</strong> - where we start</li>
                        <li>The number above (\\(n\\)) is the <strong>upper limit</strong> - where we stop</li>
                        <li>\\(f(r)\\) is the <strong>general term</strong> - the expression we are summing</li>
                    </ul>
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><defs><marker id="sigma-ann-arrow" markerWidth="7" markerHeight="7" refX="7" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7" fill="none" stroke="#00e5c7" stroke-width="1"/></marker></defs><text x="130" y="30" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#feca57" text-anchor="middle">n</text><text x="130" y="105" font-family="serif" font-size="72" fill="#54a0ff" text-anchor="middle">&#931;</text><text x="130" y="140" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#feca57" text-anchor="middle">r = 1</text><text x="195" y="95" font-family="'Space Grotesk',sans-serif" font-size="18" fill="#e0e0e0">f(r)</text><line x1="165" y1="28" x2="148" y2="30" stroke="#00e5c7" stroke-width="1.2" marker-end="url(#sigma-ann-arrow)"/><text x="195" y="27" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#00e5c7">upper limit</text><text x="195" y="39" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">(where r stops)</text><line x1="170" y1="138" x2="152" y2="138" stroke="#00e5c7" stroke-width="1.2" marker-end="url(#sigma-ann-arrow)"/><text x="200" y="143" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#00e5c7">lower limit</text><text x="200" y="155" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">(where r starts)</text><line x1="218" y1="82" x2="213" y2="88" stroke="#00e5c7" stroke-width="1.2" marker-end="url(#sigma-ann-arrow)"/><text x="235" y="75" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#00e5c7">general term</text><text x="235" y="87" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">(expression to sum)</text><text x="30" y="90" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#00e5c7">"sum of"</text><line x1="68" y1="88" x2="100" y2="88" stroke="#00e5c7" stroke-width="1.2" marker-end="url(#sigma-ann-arrow)"/><text x="160" y="185" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">= f(1) + f(2) + f(3) + ... + f(n)</text></svg></div>
            `
        },
        {
            type: 'concept',
            title: 'Reading Sigma Notation',
            content: `
                <p>To evaluate a sum in sigma notation, substitute each value of \\(r\\) and add them up.</p>
                <p><strong>Example:</strong></p>
                \\[\\sum_{r=1}^{4} r^2 = 1^2 + 2^2 + 3^2 + 4^2 = 1 + 4 + 9 + 16 = 30\\]
                <p><strong>Another example:</strong></p>
                \\[\\sum_{r=1}^{5} (2r - 1) = 1 + 3 + 5 + 7 + 9 = 25\\]
                <div class="lesson-box">
                    <p><strong>Tip:</strong> Write out the first few terms to see the pattern, especially when the sum has many terms.</p>
                </div>
            `
        },
        {
            type: 'example',
            title: 'Evaluating a Sum',
            problem: 'Evaluate \\(\\displaystyle\\sum_{r=1}^{5} (3r + 2)\\).',
            steps: [
                { text: 'Substitute \\(r = 1, 2, 3, 4, 5\\):' },
                { text: '\\(r = 1\\): \\(3(1) + 2 = 5\\)' },
                { text: '\\(r = 2\\): \\(3(2) + 2 = 8\\)' },
                { text: '\\(r = 3\\): \\(3(3) + 2 = 11\\)' },
                { text: '\\(r = 4\\): \\(3(4) + 2 = 14\\)' },
                { text: '\\(r = 5\\): \\(3(5) + 2 = 17\\)' },
                { text: 'Sum: \\(5 + 8 + 11 + 14 + 17 = 55\\)' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var m = Math.floor(Math.random() * 4) + 1;
                var c = Math.floor(Math.random() * 7) - 3;
                var n = Math.floor(Math.random() * 4) + 4;
                var sum = 0;
                for (var i = 1; i <= n; i++) { sum += m * i + c; }
                var cStr = c >= 0 ? '+ ' + c : '- ' + Math.abs(c);
                return {
                    type: 'short',
                    latex: '\\text{Evaluate } \\displaystyle\\sum_{r=1}^{' + n + '} (' + m + 'r ' + cStr + ').',
                    answer: String(sum),
                    explain: 'First term: \\(' + (m + c) + '\\), last term: \\(' + (m * n + c) + '\\). This is arithmetic with \\(n = ' + n + '\\) terms. \\(S = \\frac{' + n + '}{2}(' + (m + c) + ' + ' + (m * n + c) + ') = ' + sum + '\\)'
                };
            }
        },
        {
            type: 'concept',
            title: 'Different Starting Values',
            content: `
                <p>The lower limit does not have to be 1. It can start at any integer.</p>
                \\[\\sum_{r=3}^{6} r = 3 + 4 + 5 + 6 = 18\\]
                \\[\\sum_{r=0}^{3} 2^r = 2^0 + 2^1 + 2^2 + 2^3 = 1 + 2 + 4 + 8 = 15\\]
                <div class="lesson-box">
                    <p><strong>Useful trick:</strong> To compute \\(\\sum_{r=k}^{n} f(r)\\), you can use:</p>
                    \\[\\sum_{r=k}^{n} f(r) = \\sum_{r=1}^{n} f(r) - \\sum_{r=1}^{k-1} f(r)\\]
                    <p>Subtract the terms you do not want.</p>
                </div>
            `
        },
        {
            type: 'practice',
            generate: function() {
                var start = Math.floor(Math.random() * 3) + 2;
                var end = start + Math.floor(Math.random() * 4) + 3;
                var sum = 0;
                for (var i = start; i <= end; i++) { sum += i * i; }
                var wrong1 = sum + start * start;
                var wrong2 = sum - end * end;
                var sumAll = 0;
                for (var i = 1; i <= end; i++) { sumAll += i * i; }
                var wrong3 = sumAll;
                var opts = [String(sum), String(wrong1), String(wrong2), String(wrong3)];
                var correctIdx = 0;
                for (var i = opts.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = opts[i]; opts[i] = opts[j]; opts[j] = tmp;
                    if (j === correctIdx) correctIdx = i;
                    else if (i === correctIdx) correctIdx = j;
                }
                return {
                    type: 'mc',
                    latex: '\\text{Evaluate } \\displaystyle\\sum_{r=' + start + '}^{' + end + '} r^2.',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: '\\(' + (function() { var s = []; for (var i = start; i <= end; i++) s.push(i + '^2'); return s.join(' + '); })() + ' = ' + sum + '\\)'
                };
            }
        },
        {
            type: 'concept',
            title: 'Writing Series in Sigma Notation',
            content: `
                <p>Given a series, you need to find the general term in terms of \\(r\\).</p>
                <div class="lesson-box">
                    <p><strong>Method:</strong></p>
                    <ol>
                        <li>Look at the pattern in the terms</li>
                        <li>Express the \\(r\\)th term as a function of \\(r\\)</li>
                        <li>Determine the limits (starting and ending values of \\(r\\))</li>
                    </ol>
                </div>
                <p><strong>Example:</strong> Write \\(5 + 8 + 11 + 14 + \\ldots + 302\\) in sigma notation.</p>
                <p>This is arithmetic: \\(a = 5\\), \\(d = 3\\). General term: \\(5 + 3(r-1) = 3r + 2\\).</p>
                <p>Last term: \\(3r + 2 = 302\\), so \\(r = 100\\).</p>
                \\[\\sum_{r=1}^{100} (3r + 2)\\]
            `
        },
        {
            type: 'example',
            title: 'Writing in Sigma Notation',
            problem: 'Write \\(2 + 4 + 8 + 16 + \\ldots + 2048\\) in sigma notation.',
            steps: [
                { text: 'This is geometric: \\(a = 2\\), \\(r = 2\\).' },
                { text: 'General term: \\(2 \\times 2^{r-1} = 2^r\\).' },
                { text: 'Last term: \\(2^r = 2048 = 2^{11}\\), so \\(r = 11\\).' },
                { text: 'Starting from \\(r = 1\\) (when the term is \\(2^1 = 2\\)):' },
                { text: '\\(\\displaystyle\\sum_{r=1}^{11} 2^r\\)' },
                { text: 'Alternatively, starting from \\(r = 0\\): \\(\\displaystyle\\sum_{r=0}^{10} 2^{r+1}\\)' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var types = [
                    { series: '1 + 4 + 9 + 16 + \\ldots + 100', answer: '\\sum_{r=1}^{10} r^2', wrong: ['\\sum_{r=1}^{100} r^2', '\\sum_{r=1}^{10} 2r', '\\sum_{r=0}^{10} r^2'] },
                    { series: '2 + 4 + 6 + 8 + \\ldots + 40', answer: '\\sum_{r=1}^{20} 2r', wrong: ['\\sum_{r=1}^{40} 2r', '\\sum_{r=1}^{20} r', '\\sum_{r=2}^{40} r'] },
                    { series: '3 + 6 + 9 + 12 + \\ldots + 60', answer: '\\sum_{r=1}^{20} 3r', wrong: ['\\sum_{r=1}^{60} 3r', '\\sum_{r=1}^{20} r+2', '\\sum_{r=3}^{60} r'] },
                    { series: '1 + 3 + 5 + 7 + \\ldots + 49', answer: '\\sum_{r=1}^{25} (2r-1)', wrong: ['\\sum_{r=1}^{49} (2r-1)', '\\sum_{r=1}^{25} (2r+1)', '\\sum_{r=0}^{24} 2r'] }
                ];
                var pick = types[Math.floor(Math.random() * types.length)];
                var opts = [pick.answer].concat(pick.wrong);
                var correctIdx = 0;
                for (var i = opts.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = opts[i]; opts[i] = opts[j]; opts[j] = tmp;
                    if (j === correctIdx) correctIdx = i;
                    else if (i === correctIdx) correctIdx = j;
                }
                return {
                    type: 'mc',
                    latex: '\\text{Write in sigma notation: } ' + pick.series,
                    options: opts,
                    correctIdx: correctIdx,
                    explain: 'Find the general term as a function of \\(r\\) and determine how many terms there are.'
                };
            }
        },
        {
            type: 'concept',
            title: 'Properties of Sigma Notation',
            content: `
                <p>Sigma notation obeys useful algebraic rules:</p>
                <div class="lesson-box">
                    <p><strong>1. Constant factor:</strong></p>
                    \\[\\sum_{r=1}^{n} cf(r) = c\\sum_{r=1}^{n} f(r)\\]
                    <p><strong>2. Sum/difference:</strong></p>
                    \\[\\sum_{r=1}^{n} \\big(f(r) \\pm g(r)\\big) = \\sum_{r=1}^{n} f(r) \\pm \\sum_{r=1}^{n} g(r)\\]
                    <p><strong>3. Constant term:</strong></p>
                    \\[\\sum_{r=1}^{n} c = nc\\]
                </div>
                <p>These let you break apart complicated sums into simpler ones.</p>
            `
        },
        {
            type: 'concept',
            title: 'Standard Results',
            content: `
                <p>Memorise these standard sums:</p>
                <div class="lesson-box">
                    \\[\\sum_{r=1}^{n} 1 = n\\]
                    \\[\\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}\\]
                    \\[\\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}\\]
                </div>
                <p>Using these with the splitting rules, you can evaluate any polynomial sum:</p>
                \\[\\sum_{r=1}^{n} (3r^2 + 2r - 1) = 3\\sum r^2 + 2\\sum r - \\sum 1\\]
                \\[= 3 \\cdot \\frac{n(n+1)(2n+1)}{6} + 2 \\cdot \\frac{n(n+1)}{2} - n\\]
            `
        },
        {
            type: 'example',
            title: 'Using Standard Results',
            problem: 'Evaluate \\(\\displaystyle\\sum_{r=1}^{20} (r^2 + 3r)\\).',
            steps: [
                { text: 'Split: \\(\\displaystyle\\sum_{r=1}^{20} r^2 + 3\\sum_{r=1}^{20} r\\)' },
                { text: '\\(\\displaystyle\\sum_{r=1}^{20} r^2 = \\frac{20 \\times 21 \\times 41}{6} = \\frac{17220}{6} = 2870\\)' },
                { text: '\\(\\displaystyle\\sum_{r=1}^{20} r = \\frac{20 \\times 21}{2} = 210\\)' },
                { text: 'Total: \\(2870 + 3(210) = 2870 + 630 = 3500\\)' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var n = Math.floor(Math.random() * 11) + 10;
                var sumR = n * (n + 1) / 2;
                var a = Math.floor(Math.random() * 5) + 2;
                var b = Math.floor(Math.random() * 7) - 3;
                var total = a * sumR + b * n;
                var bStr = b >= 0 ? '+ ' + b : '- ' + Math.abs(b);
                return {
                    type: 'short',
                    latex: '\\text{Evaluate } \\displaystyle\\sum_{r=1}^{' + n + '} (' + a + 'r ' + bStr + ').',
                    answer: String(total),
                    explain: '\\(' + a + '\\sum r ' + bStr + '\\sum 1 = ' + a + ' \\cdot \\frac{' + n + ' \\cdot ' + (n+1) + '}{2} ' + bStr + ' \\cdot ' + n + ' = ' + (a * sumR) + ' + ' + (b * n) + ' = ' + total + '\\)'
                };
            }
        },
        {
            type: 'concept',
            title: 'Arithmetic and Geometric Series in Sigma Form',
            content: `
                <p>Both types of series can be neatly expressed with sigma notation.</p>
                <div class="lesson-box">
                    <p><strong>Arithmetic series</strong> (first term \\(a\\), common difference \\(d\\)):</p>
                    \\[\\sum_{r=1}^{n} \\big(a + (r-1)d\\big) = \\sum_{r=1}^{n} (dr + (a-d))\\]
                    <p><strong>Geometric series</strong> (first term \\(a\\), common ratio \\(r_0\\)):</p>
                    \\[\\sum_{r=0}^{n-1} ar_0^r = \\frac{a(1-r_0^n)}{1-r_0}\\]
                </div>
                <p>Being able to recognise arithmetic and geometric series in sigma form is an important exam skill.</p>
            `
        },
        {
            type: 'practice',
            generate: function() {
                var n = Math.floor(Math.random() * 6) + 5;
                var sumSq = n * (n + 1) * (2 * n + 1) / 6;
                var sumLin = n * (n + 1) / 2;
                var a = Math.floor(Math.random() * 3) + 1;
                var b = Math.floor(Math.random() * 4) + 1;
                var total = a * sumSq + b * sumLin;
                var opts = [String(total), String(total + n), String(total - sumLin), String(a * sumSq)];
                var correctIdx = 0;
                for (var i = opts.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = opts[i]; opts[i] = opts[j]; opts[j] = tmp;
                    if (j === correctIdx) correctIdx = i;
                    else if (i === correctIdx) correctIdx = j;
                }
                return {
                    type: 'mc',
                    latex: '\\text{Evaluate } \\displaystyle\\sum_{r=1}^{' + n + '} (' + a + 'r^2 + ' + b + 'r).',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: '\\(' + a + ' \\cdot \\frac{' + n + ' \\cdot ' + (n+1) + ' \\cdot ' + (2*n+1) + '}{6} + ' + b + ' \\cdot \\frac{' + n + ' \\cdot ' + (n+1) + '}{2} = ' + (a * sumSq) + ' + ' + (b * sumLin) + ' = ' + total + '\\)'
                };
            }
        },
        {
            type: 'summary',
            title: 'Sigma Notation - Summary',
            content: '<p>The key ideas about sigma notation:</p>',
            points: [
                '\\(\\sum_{r=1}^{n} f(r)\\) means add up \\(f(1) + f(2) + \\ldots + f(n)\\)',
                'The lower limit is where \\(r\\) starts; the upper limit is where it stops',
                'You can split sums: \\(\\sum(f + g) = \\sum f + \\sum g\\) and \\(\\sum cf = c\\sum f\\)',
                'Standard results: \\(\\sum r = \\frac{n(n+1)}{2}\\), \\(\\sum r^2 = \\frac{n(n+1)(2n+1)}{6}\\)',
                'To write a series in sigma form: find the general term as a function of \\(r\\) and determine the limits'
            ]
        }
    ]
};
