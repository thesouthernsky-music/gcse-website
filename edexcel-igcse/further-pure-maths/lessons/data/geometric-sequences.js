window.CURRENT_LESSON = {
    title: "Geometric Sequences & Series",
    subtitle: "Sequences with a constant ratio",
    screens: [
        {
            type: 'concept',
            title: 'What is a Geometric Sequence?',
            content: `
                <p>A <strong>geometric sequence</strong> is one where each term is obtained by multiplying the previous term by a fixed number.</p>
                <div class="lesson-box">
                    <p><strong>Definition:</strong> A sequence is geometric if the ratio between consecutive terms is constant.</p>
                    <p>This constant is called the <strong>common ratio</strong>, \\(r\\).</p>
                    \\[r = \\frac{u_{n+1}}{u_n}\\]
                </div>
                <p>Examples:</p>
                <ul>
                    <li>\\(2, 6, 18, 54, \\ldots\\) has \\(r = 3\\)</li>
                    <li>\\(100, 50, 25, 12.5, \\ldots\\) has \\(r = \\frac{1}{2}\\)</li>
                    <li>\\(4, -12, 36, -108, \\ldots\\) has \\(r = -3\\)</li>
                </ul>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><defs><marker id="geo-ratio-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#feca57" stroke-width="1"/></marker></defs><line x1="35" y1="175" x2="300" y2="175" stroke="#444" stroke-width="0.5"/><line x1="35" y1="175" x2="35" y2="10" stroke="#444" stroke-width="0.5"/><rect x="50" y="165" width="40" height="10" fill="#54a0ff" rx="2"/><text x="70" y="162" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">2</text><rect x="110" y="145" width="40" height="30" fill="#54a0ff" rx="2"/><text x="130" y="142" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">6</text><rect x="170" y="85" width="40" height="90" fill="#54a0ff" rx="2"/><text x="190" y="82" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">18</text><rect x="230" y="5" width="40" height="170" fill="#54a0ff" rx="2"/><text x="250" y="25" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">54</text><path d="M90,160 Q100,148 110,150" fill="none" stroke="#feca57" stroke-width="1.5" marker-end="url(#geo-ratio-arrow)"/><text x="100" y="143" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#feca57">x3</text><path d="M150,140 Q160,108 170,110" fill="none" stroke="#feca57" stroke-width="1.5" marker-end="url(#geo-ratio-arrow)"/><text x="160" y="103" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#feca57">x3</text><path d="M210,80 Q220,38 230,40" fill="none" stroke="#feca57" stroke-width="1.5" marker-end="url(#geo-ratio-arrow)"/><text x="220" y="33" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#feca57">x3</text><text x="170" y="197" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">Geometric sequence: constant ratio (r = 3)</text></svg></div>
            `
        },
        {
            type: 'concept',
            title: 'The nth Term Formula',
            content: `
                <p>If the first term is \\(a\\) and the common ratio is \\(r\\), the \\(n\\)th term is:</p>
                <div class="lesson-box">
                    \\[u_n = ar^{n-1}\\]
                    <p>where \\(a\\) = first term, \\(r\\) = common ratio, \\(n\\) = term number.</p>
                </div>
                <p><strong>Why this works:</strong></p>
                <ul>
                    <li>1st term: \\(a\\)</li>
                    <li>2nd term: \\(ar\\)</li>
                    <li>3rd term: \\(ar^2\\)</li>
                    <li>\\(n\\)th term: \\(ar^{n-1}\\)</li>
                </ul>
                <p>We multiply by \\(r\\) a total of \\((n-1)\\) times.</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><line x1="35" y1="175" x2="300" y2="175" stroke="#444" stroke-width="0.5"/><line x1="35" y1="175" x2="35" y2="10" stroke="#444" stroke-width="0.5"/><line x1="35" y1="175" x2="300" y2="175" stroke="#444" stroke-width="0.5"/><text x="22" y="180" font-family="'Space Grotesk',sans-serif" font-size="9" fill="#666">0</text><line x1="32" y1="145" x2="38" y2="145" stroke="#444" stroke-width="0.5"/><line x1="32" y1="115" x2="38" y2="115" stroke="#444" stroke-width="0.5"/><line x1="32" y1="85" x2="38" y2="85" stroke="#444" stroke-width="0.5"/><line x1="32" y1="55" x2="38" y2="55" stroke="#444" stroke-width="0.5"/><line x1="32" y1="25" x2="38" y2="25" stroke="#444" stroke-width="0.5"/><path d="M55,170 C105,168 155,155 195,110 C225,75 255,30 280,15" fill="none" stroke="#ff6b6b" stroke-width="2.5" stroke-dasharray="5,3"/><circle cx="55" cy="170" r="5" fill="#00e5c7"/><text x="55" y="190" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">a</text><circle cx="115" cy="165" r="5" fill="#00e5c7"/><text x="115" y="190" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">ar</text><circle cx="170" cy="148" r="5" fill="#00e5c7"/><text x="170" y="190" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">ar^2</text><circle cx="220" cy="95" r="5" fill="#00e5c7"/><text x="220" y="190" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">ar^3</text><circle cx="270" cy="20" r="5" fill="#00e5c7"/><text x="270" y="190" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">ar^4</text><text x="170" y="12" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">Exponential growth curve (r > 1)</text></svg></div>
            `
        },
        {
            type: 'example',
            title: 'Finding the 8th Term',
            problem: 'Find the 8th term of the geometric sequence \\(2, 6, 18, \\ldots\\)',
            steps: [
                { text: 'Identify \\(a\\) and \\(r\\): \\(a = 2\\), \\(r = \\frac{6}{2} = 3\\).' },
                { text: 'Use \\(u_n = ar^{n-1}\\) with \\(n = 8\\):' },
                { text: '\\(u_8 = 2 \\times 3^{8-1} = 2 \\times 3^7\\)' },
                { text: '\\(= 2 \\times 2187 = 4374\\)' },
                { text: 'The 8th term is 4374.' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 5) + 1;
                var r = [2, 3, -2, -3, 4][Math.floor(Math.random() * 5)];
                var n = Math.floor(Math.random() * 4) + 5;
                var result = a * Math.pow(r, n - 1);
                var t2 = a * r;
                var t3 = a * r * r;
                var wrong1 = a * Math.pow(r, n);
                var wrong2 = a * Math.pow(r, n - 2);
                var wrong3 = a * n * r;
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
                    latex: '\\text{Find the ' + n + 'th term of } ' + a + ', ' + t2 + ', ' + t3 + ', \\ldots',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: '\\(a = ' + a + '\\), \\(r = ' + r + '\\). \\(u_{' + n + '} = ' + a + ' \\times ' + r + '^{' + (n-1) + '} = ' + result + '\\)'
                };
            }
        },
        {
            type: 'concept',
            title: 'Finding a, r, or n',
            content: `
                <p>Like arithmetic sequences, you can find unknowns from given information.</p>
                <div class="lesson-box">
                    <p><strong>Finding \\(r\\):</strong> Divide any term by the previous term: \\(r = \\frac{u_{n+1}}{u_n}\\)</p>
                    <p><strong>Finding \\(n\\):</strong> Use \\(u_n = ar^{n-1}\\) and take logarithms.</p>
                    <p><strong>Given two terms:</strong> Set up two equations and divide to eliminate \\(a\\).</p>
                </div>
                <p>If the 3rd term is 12 and the 6th term is 96:</p>
                <ul>
                    <li>\\(ar^2 = 12\\) ... (1)</li>
                    <li>\\(ar^5 = 96\\) ... (2)</li>
                </ul>
                <p>Dividing (2) by (1): \\(r^3 = 8\\), so \\(r = 2\\).</p>
                <p>Then \\(a \\times 4 = 12\\), so \\(a = 3\\).</p>
            `
        },
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 5) + 1;
                var r = Math.floor(Math.random() * 3) + 2;
                var n1 = Math.floor(Math.random() * 3) + 2;
                var n2 = n1 + Math.floor(Math.random() * 3) + 2;
                var u1 = a * Math.pow(r, n1 - 1);
                var u2 = a * Math.pow(r, n2 - 1);
                return {
                    type: 'short',
                    latex: '\\text{The ' + n1 + 'th term is ' + u1 + ' and the ' + n2 + 'th term is ' + u2 + '. Find } r.',
                    answer: String(r),
                    explain: 'Divide: \\(\\frac{u_{' + n2 + '}}{u_{' + n1 + '}} = r^{' + (n2 - n1) + '} = \\frac{' + u2 + '}{' + u1 + '} = ' + Math.pow(r, n2 - n1) + '\\), so \\(r = ' + r + '\\).'
                };
            }
        },
        {
            type: 'concept',
            title: 'Geometric Series',
            content: `
                <p>A <strong>geometric series</strong> is the sum of the terms of a geometric sequence.</p>
                <div class="lesson-box">
                    <p><strong>Sum of the first \\(n\\) terms:</strong></p>
                    \\[S_n = \\frac{a(1 - r^n)}{1 - r} \\quad (r \\neq 1)\\]
                    <p>Or equivalently:</p>
                    \\[S_n = \\frac{a(r^n - 1)}{r - 1}\\]
                </div>
                <p>Both formulae give the same result. Use whichever avoids negatives:</p>
                <ul>
                    <li>When \\(|r| < 1\\): the first form is usually cleaner</li>
                    <li>When \\(r > 1\\): the second form avoids negative numerator and denominator</li>
                </ul>
            `
        },
        {
            type: 'example',
            title: 'Sum of a Geometric Series',
            problem: 'Find the sum of the first 10 terms of the geometric series \\(3 + 6 + 12 + 24 + \\ldots\\)',
            steps: [
                { text: '\\(a = 3\\), \\(r = 2\\), \\(n = 10\\).' },
                { text: 'Use \\(S_n = \\frac{a(r^n - 1)}{r - 1}\\) (since \\(r > 1\\)):' },
                { text: '\\(S_{10} = \\frac{3(2^{10} - 1)}{2 - 1}\\)' },
                { text: '\\(= \\frac{3(1024 - 1)}{1}\\)' },
                { text: '\\(= 3 \\times 1023 = 3069\\)' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 5) + 1;
                var r = Math.floor(Math.random() * 3) + 2;
                var n = Math.floor(Math.random() * 4) + 6;
                var rn = Math.pow(r, n);
                var sum = a * (rn - 1) / (r - 1);
                var t2 = a * r;
                var t3 = a * r * r;
                return {
                    type: 'short',
                    latex: '\\text{Find } S_{' + n + '} \\text{ for } ' + a + ' + ' + t2 + ' + ' + t3 + ' + \\ldots',
                    answer: String(sum),
                    explain: '\\(a = ' + a + '\\), \\(r = ' + r + '\\). \\(S_{' + n + '} = \\frac{' + a + '(' + r + '^{' + n + '} - 1)}{' + r + ' - 1} = \\frac{' + a + '(' + rn + ' - 1)}{' + (r - 1) + '} = ' + sum + '\\)'
                };
            }
        },
        {
            type: 'concept',
            title: 'Arithmetic vs Geometric - Comparison',
            content: `
                <div class="lesson-box">
                    <table style="width:100%;border-collapse:collapse;">
                        <tr><th style="text-align:left;padding:6px;border-bottom:1px solid var(--border);"></th><th style="text-align:left;padding:6px;border-bottom:1px solid var(--border);">Arithmetic</th><th style="text-align:left;padding:6px;border-bottom:1px solid var(--border);">Geometric</th></tr>
                        <tr><td style="padding:6px;">Rule</td><td style="padding:6px;">Add \\(d\\)</td><td style="padding:6px;">Multiply by \\(r\\)</td></tr>
                        <tr><td style="padding:6px;">\\(n\\)th term</td><td style="padding:6px;">\\(a + (n-1)d\\)</td><td style="padding:6px;">\\(ar^{n-1}\\)</td></tr>
                        <tr><td style="padding:6px;">Sum</td><td style="padding:6px;">\\(\\frac{n}{2}(2a + (n-1)d)\\)</td><td style="padding:6px;">\\(\\frac{a(1-r^n)}{1-r}\\)</td></tr>
                        <tr><td style="padding:6px;">Growth</td><td style="padding:6px;">Linear</td><td style="padding:6px;">Exponential</td></tr>
                    </table>
                </div>
                <p>To identify the type: check if the <em>difference</em> is constant (arithmetic) or the <em>ratio</em> is constant (geometric).</p>
            `
        },
        {
            type: 'practice',
            generate: function() {
                var isGeometric = Math.random() < 0.5;
                var seq, answer;
                if (isGeometric) {
                    var a = Math.floor(Math.random() * 4) + 2;
                    var r = [2, 3, -2][Math.floor(Math.random() * 3)];
                    seq = a + ', ' + (a * r) + ', ' + (a * r * r) + ', ' + (a * r * r * r);
                    answer = 'Geometric with \\(r = ' + r + '\\)';
                } else {
                    var a = Math.floor(Math.random() * 10) + 1;
                    var d = Math.floor(Math.random() * 7) - 3;
                    while (d === 0) d = Math.floor(Math.random() * 7) - 3;
                    seq = a + ', ' + (a + d) + ', ' + (a + 2 * d) + ', ' + (a + 3 * d);
                    answer = 'Arithmetic with \\(d = ' + d + '\\)';
                }
                var opts = [answer];
                if (isGeometric) {
                    opts.push('Arithmetic with constant difference');
                    opts.push('Geometric with \\(r = ' + (Math.floor(Math.random() * 3) + 4) + '\\)');
                    opts.push('Neither arithmetic nor geometric');
                } else {
                    opts.push('Geometric with constant ratio');
                    opts.push('Arithmetic with \\(d = ' + (Math.floor(Math.random() * 5) + 5) + '\\)');
                    opts.push('Neither arithmetic nor geometric');
                }
                var correctIdx = 0;
                for (var i = opts.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = opts[i]; opts[i] = opts[j]; opts[j] = tmp;
                    if (j === correctIdx) correctIdx = i;
                    else if (i === correctIdx) correctIdx = j;
                }
                return {
                    type: 'mc',
                    latex: '\\text{Classify the sequence: } ' + seq + ', \\ldots',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: 'Check differences and ratios between consecutive terms to classify.'
                };
            }
        },
        {
            type: 'concept',
            title: 'Negative and Fractional Ratios',
            content: `
                <p>The common ratio can be negative or fractional.</p>
                <div class="lesson-box">
                    <p><strong>Negative ratio (\\(r < 0\\)):</strong> The terms alternate in sign.</p>
                    <p>Example: \\(2, -6, 18, -54, \\ldots\\) with \\(r = -3\\).</p>
                    <p><strong>Fractional ratio (\\(0 < |r| < 1\\)):</strong> The terms get smaller and converge towards zero.</p>
                    <p>Example: \\(64, 32, 16, 8, \\ldots\\) with \\(r = \\frac{1}{2}\\).</p>
                </div>
                <p>When \\(|r| > 1\\), the terms grow without bound. When \\(|r| < 1\\), the terms shrink towards zero. This distinction becomes important for convergence.</p>
            `
        },
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 5) + 2;
                var r = [-2, -3, 2, 3][Math.floor(Math.random() * 4)];
                var n = Math.floor(Math.random() * 3) + 5;
                var rn = Math.pow(r, n);
                var sum = a * (1 - rn) / (1 - r);
                var t2 = a * r;
                var t3 = a * r * r;
                var wrong1 = a * (rn - 1) / (r - 1) + a;
                var wrong2 = sum + a * Math.pow(r, n);
                var wrong3 = n * a * r;
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
                    latex: '\\text{Find } S_{' + n + '} \\text{ for } ' + a + ', ' + t2 + ', ' + t3 + ', \\ldots',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: '\\(a = ' + a + '\\), \\(r = ' + r + '\\). \\(S_{' + n + '} = \\frac{' + a + '(1 - (' + r + ')^{' + n + '})}{1 - (' + r + ')} = ' + sum + '\\)'
                };
            }
        },
        {
            type: 'example',
            title: 'Finding a and r from Two Terms',
            problem: 'The 2nd term of a geometric sequence is 10 and the 5th term is 1250. Find \\(a\\) and \\(r\\).',
            steps: [
                { text: '\\(u_2 = ar = 10\\) ... (1)' },
                { text: '\\(u_5 = ar^4 = 1250\\) ... (2)' },
                { text: 'Divide (2) by (1): \\(\\frac{ar^4}{ar} = \\frac{1250}{10}\\)' },
                { text: '\\(r^3 = 125\\), so \\(r = 5\\).' },
                { text: 'From (1): \\(a \\times 5 = 10\\), so \\(a = 2\\).' },
                { text: 'Check: \\(2, 10, 50, 250, 1250\\) \\(\\checkmark\\)' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 5) + 1;
                var r = Math.floor(Math.random() * 3) + 2;
                var n = Math.floor(Math.random() * 4) + 7;
                var rn = Math.pow(r, n);
                var sum = a * (rn - 1) / (r - 1);
                return {
                    type: 'short',
                    latex: '\\text{A geometric series has } a = ' + a + ', r = ' + r + '. \\text{ Find } S_{' + n + '}.',
                    answer: String(sum),
                    explain: '\\(S_{' + n + '} = \\frac{' + a + '(' + r + '^{' + n + '} - 1)}{' + r + ' - 1} = \\frac{' + a + '(' + rn + ' - 1)}{' + (r - 1) + '} = ' + sum + '\\)'
                };
            }
        },
        {
            type: 'summary',
            title: 'Geometric Sequences & Series - Summary',
            content: '<p>The key formulae and ideas:</p>',
            points: [
                'Common ratio: \\(r = \\frac{u_{n+1}}{u_n}\\) (constant for geometric sequences)',
                '\\(n\\)th term: \\(u_n = ar^{n-1}\\)',
                'Sum of \\(n\\) terms: \\(S_n = \\frac{a(1 - r^n)}{1 - r}\\) or \\(\\frac{a(r^n - 1)}{r - 1}\\)',
                'Negative \\(r\\) gives alternating signs; \\(|r| < 1\\) gives decreasing terms',
                'Given two terms: divide to eliminate \\(a\\) and find \\(r\\)',
                'Geometric growth is exponential - much faster than arithmetic (linear) growth'
            ]
        }
    ]
};
