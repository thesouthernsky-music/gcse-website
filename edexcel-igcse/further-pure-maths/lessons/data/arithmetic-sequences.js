window.CURRENT_LESSON = {
    title: "Arithmetic Sequences & Series",
    subtitle: "Sequences with a constant difference",
    screens: [
        {
            type: 'concept',
            title: 'What is an Arithmetic Sequence?',
            content: `
                <p>An <strong>arithmetic sequence</strong> is a sequence where each term is obtained by adding a fixed number to the previous term.</p>
                <div class="lesson-box">
                    <p><strong>Definition:</strong> A sequence is arithmetic if the difference between consecutive terms is constant.</p>
                    <p>This constant is called the <strong>common difference</strong>, \\(d\\).</p>
                    \\[d = u_{n+1} - u_n\\]
                </div>
                <p>Examples:</p>
                <ul>
                    <li>\\(3, 7, 11, 15, 19, \\ldots\\) has \\(d = 4\\)</li>
                    <li>\\(20, 17, 14, 11, \\ldots\\) has \\(d = -3\\)</li>
                    <li>\\(1, 1, 1, 1, \\ldots\\) has \\(d = 0\\)</li>
                </ul>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><defs><marker id="arith-gap-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#00e5c7" stroke-width="1"/></marker></defs><line x1="40" y1="175" x2="300" y2="175" stroke="#444" stroke-width="0.5"/><line x1="40" y1="175" x2="40" y2="10" stroke="#444" stroke-width="0.5"/><rect x="52" y="155" width="30" height="20" fill="#54a0ff" rx="2"/><text x="67" y="169" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">3</text><rect x="102" y="115" width="30" height="60" fill="#54a0ff" rx="2"/><text x="117" y="141" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">7</text><rect x="152" y="75" width="30" height="100" fill="#54a0ff" rx="2"/><text x="167" y="113" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">11</text><rect x="202" y="35" width="30" height="140" fill="#54a0ff" rx="2"/><text x="217" y="85" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">15</text><rect x="252" y="-5" width="30" height="180" fill="#54a0ff" rx="2"/><text x="267" y="57" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">19</text><line x1="82" y1="145" x2="102" y2="125" stroke="#00e5c7" stroke-width="1.5" marker-end="url(#arith-gap-arrow)"/><text x="86" y="128" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#00e5c7">+4</text><line x1="132" y1="105" x2="152" y2="85" stroke="#00e5c7" stroke-width="1.5" marker-end="url(#arith-gap-arrow)"/><text x="136" y="88" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#00e5c7">+4</text><line x1="182" y1="65" x2="202" y2="45" stroke="#00e5c7" stroke-width="1.5" marker-end="url(#arith-gap-arrow)"/><text x="186" y="48" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#00e5c7">+4</text><line x1="232" y1="25" x2="252" y2="5" stroke="#00e5c7" stroke-width="1.5" marker-end="url(#arith-gap-arrow)"/><text x="236" y="8" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#00e5c7">+4</text><text x="170" y="197" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">Arithmetic sequence: equal gaps (d = 4)</text></svg></div>
            `
        },
        {
            type: 'concept',
            title: 'The nth Term Formula',
            content: `
                <p>If the first term is \\(a\\) and the common difference is \\(d\\), the \\(n\\)th term is:</p>
                <div class="lesson-box">
                    \\[u_n = a + (n-1)d\\]
                    <p>where \\(a\\) = first term, \\(d\\) = common difference, \\(n\\) = term number.</p>
                </div>
                <p><strong>Why this works:</strong></p>
                <ul>
                    <li>1st term: \\(a\\)</li>
                    <li>2nd term: \\(a + d\\)</li>
                    <li>3rd term: \\(a + 2d\\)</li>
                    <li>\\(n\\)th term: \\(a + (n-1)d\\)</li>
                </ul>
                <p>We add \\(d\\) a total of \\((n-1)\\) times to get from the 1st term to the \\(n\\)th term.</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><line x1="30" y1="180" x2="300" y2="180" stroke="#444" stroke-width="0.5"/><line x1="30" y1="180" x2="30" y2="10" stroke="#444" stroke-width="0.5"/><text x="20" y="185" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="9" fill="#666">0</text><line x1="27" y1="150" x2="33" y2="150" stroke="#444" stroke-width="0.5"/><line x1="27" y1="120" x2="33" y2="120" stroke="#444" stroke-width="0.5"/><line x1="27" y1="90" x2="33" y2="90" stroke="#444" stroke-width="0.5"/><line x1="27" y1="60" x2="33" y2="60" stroke="#444" stroke-width="0.5"/><line x1="27" y1="30" x2="33" y2="30" stroke="#444" stroke-width="0.5"/><line x1="60" y1="162" x2="110" y2="144" stroke="#feca57" stroke-width="2.5"/><line x1="110" y1="144" x2="160" y2="126" stroke="#feca57" stroke-width="2.5"/><line x1="160" y1="126" x2="210" y2="108" stroke="#feca57" stroke-width="2.5"/><line x1="210" y1="108" x2="260" y2="90" stroke="#feca57" stroke-width="2.5"/><rect x="55" y="162" width="50" height="18" fill="none" stroke="#54a0ff" stroke-width="1" stroke-dasharray="3,3" rx="1"/><rect x="105" y="144" width="50" height="18" fill="none" stroke="#54a0ff" stroke-width="1" stroke-dasharray="3,3" rx="1"/><rect x="155" y="126" width="50" height="18" fill="none" stroke="#54a0ff" stroke-width="1" stroke-dasharray="3,3" rx="1"/><rect x="205" y="108" width="50" height="18" fill="none" stroke="#54a0ff" stroke-width="1" stroke-dasharray="3,3" rx="1"/><rect x="255" y="90" width="30" height="18" fill="none" stroke="#54a0ff" stroke-width="1" stroke-dasharray="3,3" rx="1"/><circle cx="60" cy="162" r="4" fill="#00e5c7"/><circle cx="110" cy="144" r="4" fill="#00e5c7"/><circle cx="160" cy="126" r="4" fill="#00e5c7"/><circle cx="210" cy="108" r="4" fill="#00e5c7"/><circle cx="260" cy="90" r="4" fill="#00e5c7"/><text x="60" y="193" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">a</text><text x="110" y="193" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">a+d</text><text x="160" y="193" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">a+2d</text><text x="210" y="193" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">a+3d</text><text x="260" y="193" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">a+4d</text><text x="170" y="22" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">Linear (staircase) growth pattern</text></svg></div>
            `
        },
        {
            type: 'example',
            title: 'Finding the 20th Term',
            problem: 'Find the 20th term of the arithmetic sequence \\(3, 7, 11, 15, \\ldots\\)',
            steps: [
                { text: 'Identify \\(a\\) and \\(d\\): \\(a = 3\\), \\(d = 7 - 3 = 4\\).' },
                { text: 'Use \\(u_n = a + (n-1)d\\) with \\(n = 20\\):' },
                { text: '\\(u_{20} = 3 + (20-1)(4)\\)' },
                { text: '\\(= 3 + 19 \\times 4\\)' },
                { text: '\\(= 3 + 76 = 79\\)' },
                { text: 'The 20th term is 79.' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 11) - 5;
                var d = Math.floor(Math.random() * 9) - 4;
                while (d === 0) d = Math.floor(Math.random() * 9) - 4;
                var n = Math.floor(Math.random() * 16) + 10;
                var result = a + (n - 1) * d;
                var t2 = a + d;
                var t3 = a + 2 * d;
                return {
                    type: 'short',
                    latex: '\\text{Find the } ' + n + '\\text{th term of } ' + a + ', ' + t2 + ', ' + t3 + ', \\ldots',
                    answer: String(result),
                    explain: '\\(a = ' + a + '\\), \\(d = ' + d + '\\). \\(u_{' + n + '} = ' + a + ' + ' + (n-1) + ' \\times ' + d + ' = ' + result + '\\)'
                };
            }
        },
        {
            type: 'concept',
            title: 'Finding a, d, or n',
            content: `
                <p>The formula \\(u_n = a + (n-1)d\\) has four quantities. If you know three, you can find the fourth.</p>
                <div class="lesson-box">
                    <p><strong>Common question types:</strong></p>
                    <ul>
                        <li>Find \\(n\\) given a term value: substitute and solve for \\(n\\)</li>
                        <li>Find \\(d\\) given two terms: set up equations and solve</li>
                        <li>Find \\(a\\) given a term and \\(d\\): substitute and rearrange</li>
                    </ul>
                </div>
            `
        },
        {
            type: 'example',
            title: 'Finding Which Term Has a Given Value',
            problem: 'The sequence \\(5, 8, 11, 14, \\ldots\\) Which term equals 302?',
            steps: [
                { text: '\\(a = 5\\), \\(d = 3\\). Set \\(u_n = 302\\):' },
                { text: '\\(302 = 5 + (n-1)(3)\\)' },
                { text: '\\(297 = 3(n-1)\\)' },
                { text: '\\(99 = n - 1\\)' },
                { text: '\\(n = 100\\)' },
                { text: 'So 302 is the 100th term.' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 6) + 1;
                var d = Math.floor(Math.random() * 5) + 2;
                var n = Math.floor(Math.random() * 41) + 10;
                var un = a + (n - 1) * d;
                var t2 = a + d;
                var t3 = a + 2 * d;
                var wrong1 = n + 1;
                var wrong2 = n - 1;
                var wrong3 = Math.floor((un - a) / d);
                if (wrong3 === n) wrong3 = n + 2;
                var opts = [String(n), String(wrong1), String(wrong2), String(wrong3)];
                var correctIdx = 0;
                for (var i = opts.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = opts[i]; opts[i] = opts[j]; opts[j] = tmp;
                    if (j === correctIdx) correctIdx = i;
                    else if (i === correctIdx) correctIdx = j;
                }
                return {
                    type: 'mc',
                    latex: '\\text{In the sequence } ' + a + ', ' + t2 + ', ' + t3 + ', \\ldots \\text{ which term equals } ' + un + '\\text{?}',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: '\\(' + un + ' = ' + a + ' + (n-1)(' + d + ')\\). Solving: \\(n = ' + n + '\\).'
                };
            }
        },
        {
            type: 'concept',
            title: 'Arithmetic Series',
            content: `
                <p>An <strong>arithmetic series</strong> is the sum of the terms of an arithmetic sequence.</p>
                <div class="lesson-box">
                    <p><strong>Sum of the first \\(n\\) terms:</strong></p>
                    \\[S_n = \\frac{n}{2}(2a + (n-1)d)\\]
                    <p>Or equivalently, if you know the last term \\(l\\):</p>
                    \\[S_n = \\frac{n}{2}(a + l)\\]
                </div>
                <p>The second formula comes from the fact that \\(l = a + (n-1)d\\).</p>
                <p><strong>Intuition:</strong> The average of the first and last term is \\(\\frac{a+l}{2}\\). Multiply by \\(n\\) terms to get the total.</p>
            `
        },
        {
            type: 'example',
            title: 'Finding the Sum of a Series',
            problem: 'Find the sum of the first 50 terms of the arithmetic series \\(2 + 5 + 8 + 11 + \\ldots\\)',
            steps: [
                { text: '\\(a = 2\\), \\(d = 3\\), \\(n = 50\\).' },
                { text: 'Use \\(S_n = \\frac{n}{2}(2a + (n-1)d)\\):' },
                { text: '\\(S_{50} = \\frac{50}{2}(2(2) + (50-1)(3))\\)' },
                { text: '\\(= 25(4 + 147)\\)' },
                { text: '\\(= 25 \\times 151 = 3775\\)' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 8) + 1;
                var d = Math.floor(Math.random() * 5) + 1;
                var n = Math.floor(Math.random() * 16) + 10;
                var sum = (n / 2) * (2 * a + (n - 1) * d);
                var t2 = a + d;
                var t3 = a + 2 * d;
                return {
                    type: 'short',
                    latex: '\\text{Find } S_{' + n + '} \\text{ for the series } ' + a + ' + ' + t2 + ' + ' + t3 + ' + \\ldots',
                    answer: String(sum),
                    explain: '\\(a = ' + a + '\\), \\(d = ' + d + '\\), \\(n = ' + n + '\\). \\(S_{' + n + '} = \\frac{' + n + '}{2}(2(' + a + ') + ' + (n-1) + ' \\times ' + d + ') = ' + sum + '\\)'
                };
            }
        },
        {
            type: 'concept',
            title: 'Sigma Notation for Arithmetic Series',
            content: `
                <p>Arithmetic series can be written compactly using <strong>sigma notation</strong>:</p>
                \\[\\sum_{r=1}^{n} (a + (r-1)d) = S_n\\]
                <p>For example, the series \\(3 + 7 + 11 + \\ldots\\) for 20 terms:</p>
                \\[\\sum_{r=1}^{20} (3 + 4(r-1)) = \\sum_{r=1}^{20} (4r - 1)\\]
                <div class="lesson-box">
                    <p><strong>Useful result:</strong></p>
                    \\[\\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}\\]
                    <p>This is the sum of the first \\(n\\) natural numbers.</p>
                </div>
            `
        },
        {
            type: 'example',
            title: 'Using Sigma Notation',
            problem: 'Evaluate \\(\\displaystyle\\sum_{r=1}^{30} (2r + 3)\\).',
            steps: [
                { text: 'This is an arithmetic series. When \\(r = 1\\): \\(2(1) + 3 = 5\\). When \\(r = 30\\): \\(2(30) + 3 = 63\\).' },
                { text: 'So \\(a = 5\\), \\(l = 63\\), \\(n = 30\\).' },
                { text: '\\(S = \\frac{n}{2}(a + l) = \\frac{30}{2}(5 + 63)\\)' },
                { text: '\\(= 15 \\times 68 = 1020\\)' },
                { text: 'Alternatively: \\(\\sum(2r + 3) = 2\\sum r + 3n = 2 \\cdot \\frac{30 \\cdot 31}{2} + 90 = 930 + 90 = 1020\\).' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var m = Math.floor(Math.random() * 4) + 2;
                var c = Math.floor(Math.random() * 9) - 4;
                var n = Math.floor(Math.random() * 11) + 15;
                var first = m * 1 + c;
                var last = m * n + c;
                var sum = (n / 2) * (first + last);
                var cStr = c >= 0 ? '+ ' + c : '- ' + Math.abs(c);
                var wrong1 = sum + n;
                var wrong2 = sum - m;
                var wrong3 = m * n * (n + 1) / 2;
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
                    latex: '\\text{Evaluate } \\displaystyle\\sum_{r=1}^{' + n + '} (' + m + 'r ' + cStr + ').',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: 'First term = \\(' + first + '\\), last term = \\(' + last + '\\), \\(n = ' + n + '\\). \\(S = \\frac{' + n + '}{2}(' + first + ' + ' + last + ') = ' + sum + '\\).'
                };
            }
        },
        {
            type: 'concept',
            title: 'Problem-Solving with Arithmetic Sequences',
            content: `
                <p>Many problems give you information about specific terms or sums and ask you to find \\(a\\) and \\(d\\).</p>
                <div class="lesson-box">
                    <p><strong>Strategy:</strong> Write equations using the given information, then solve simultaneously.</p>
                </div>
                <p>If the 5th term is 23 and the 12th term is 58:</p>
                <ul>
                    <li>\\(a + 4d = 23\\) ... (1)</li>
                    <li>\\(a + 11d = 58\\) ... (2)</li>
                </ul>
                <p>Subtract (1) from (2): \\(7d = 35\\), so \\(d = 5\\).</p>
                <p>Substitute back: \\(a + 20 = 23\\), so \\(a = 3\\).</p>
            `
        },
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 10) + 1;
                var d = Math.floor(Math.random() * 7) + 1;
                var n1 = Math.floor(Math.random() * 5) + 3;
                var n2 = n1 + Math.floor(Math.random() * 6) + 3;
                var u1 = a + (n1 - 1) * d;
                var u2 = a + (n2 - 1) * d;
                var wrong1 = d + 1;
                var wrong2 = d - 1;
                var wrong3 = Math.floor((u2 - u1) / (n2 - n1 + 1));
                if (wrong3 === d) wrong3 = d + 2;
                var opts = [String(d), String(wrong1), String(wrong2), String(wrong3)];
                var correctIdx = 0;
                for (var i = opts.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = opts[i]; opts[i] = opts[j]; opts[j] = tmp;
                    if (j === correctIdx) correctIdx = i;
                    else if (i === correctIdx) correctIdx = j;
                }
                return {
                    type: 'mc',
                    latex: '\\text{The ' + n1 + 'th term is ' + u1 + ' and the ' + n2 + 'th term is ' + u2 + '. Find } d.',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: '\\(' + u2 + ' - ' + u1 + ' = ' + (u2 - u1) + '\\) over \\(' + (n2 - n1) + '\\) terms. \\(d = \\frac{' + (u2 - u1) + '}{' + (n2 - n1) + '} = ' + d + '\\).'
                };
            }
        },
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 6) + 1;
                var d = Math.floor(Math.random() * 4) + 1;
                var n = Math.floor(Math.random() * 11) + 20;
                var sum = (n / 2) * (2 * a + (n - 1) * d);
                var last = a + (n - 1) * d;
                return {
                    type: 'short',
                    latex: '\\text{An arithmetic series has } a = ' + a + ', d = ' + d + ', n = ' + n + '. \\text{ Find } S_n.',
                    answer: String(sum),
                    explain: '\\(S_{' + n + '} = \\frac{' + n + '}{2}(2(' + a + ') + ' + (n - 1) + ' \\times ' + d + ') = \\frac{' + n + '}{2} \\times ' + (2 * a + (n - 1) * d) + ' = ' + sum + '\\)'
                };
            }
        },
        {
            type: 'summary',
            title: 'Arithmetic Sequences & Series - Summary',
            content: '<p>The key formulae and ideas:</p>',
            points: [
                'Common difference: \\(d = u_{n+1} - u_n\\) (constant for arithmetic sequences)',
                '\\(n\\)th term: \\(u_n = a + (n-1)d\\)',
                'Sum of \\(n\\) terms: \\(S_n = \\frac{n}{2}(2a + (n-1)d)\\) or \\(S_n = \\frac{n}{2}(a + l)\\)',
                'Sum of first \\(n\\) natural numbers: \\(\\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}\\)',
                'Given two terms, set up simultaneous equations to find \\(a\\) and \\(d\\)'
            ]
        }
    ]
};
