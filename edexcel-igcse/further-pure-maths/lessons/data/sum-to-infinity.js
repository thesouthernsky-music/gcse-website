window.CURRENT_LESSON = {
    title: "Sum to Infinity",
    subtitle: "Convergent geometric series",
    screens: [
        {
            type: 'concept',
            title: 'When Does a Series Converge?',
            content: `
                <p>Consider adding up more and more terms of a geometric series. Does the total keep growing forever, or does it approach a limit?</p>
                <div class="lesson-box">
                    <p><strong>A geometric series converges (has a finite sum) if and only if:</strong></p>
                    \\[|r| < 1\\]
                    <p>That is, \\(-1 < r < 1\\).</p>
                </div>
                <p>When \\(|r| < 1\\), each term is smaller than the last, and the terms shrink towards zero. The partial sums approach a finite value.</p>
                <p>When \\(|r| \\geq 1\\), the terms do not shrink, and the series <strong>diverges</strong> (the sum grows without bound or oscillates).</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><line x1="30" y1="175" x2="305" y2="175" stroke="#444" stroke-width="0.5"/><line x1="30" y1="175" x2="30" y2="10" stroke="#444" stroke-width="0.5"/><line x1="30" y1="35" x2="305" y2="35" stroke="#ff6b6b" stroke-width="1.5" stroke-dasharray="6,3"/><text x="308" y="38" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#ff6b6b">S</text><rect x="42" y="75" width="32" height="100" fill="#54a0ff" rx="2"/><text x="58" y="68" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">1</text><rect x="82" y="125" width="32" height="50" fill="#54a0ff" rx="2"/><text x="98" y="118" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">1/2</text><rect x="122" y="150" width="32" height="25" fill="#54a0ff" rx="2"/><text x="138" y="143" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">1/4</text><rect x="162" y="162" width="32" height="13" fill="#54a0ff" rx="2"/><text x="178" y="157" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">1/8</text><rect x="202" y="169" width="32" height="6" fill="#54a0ff" rx="2"/><text x="218" y="164" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="9" fill="#e0e0e0">1/16</text><rect x="242" y="172" width="32" height="3" fill="#54a0ff" rx="2"/><text x="258" y="167" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="9" fill="#e0e0e0">1/32</text><text x="170" y="25" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">Terms shrink, partial sums approach S = 2</text></svg></div>
            `
        },
        {
            type: 'concept',
            title: 'The Sum to Infinity Formula',
            content: `
                <p>For a convergent geometric series (\\(|r| < 1\\)):</p>
                <div class="lesson-box">
                    \\[S_\\infty = \\frac{a}{1 - r}\\]
                    <p>where \\(a\\) is the first term and \\(r\\) is the common ratio.</p>
                </div>
                <p><strong>Derivation:</strong> Start from \\(S_n = \\frac{a(1 - r^n)}{1 - r}\\).</p>
                <p>As \\(n \\to \\infty\\), since \\(|r| < 1\\), we have \\(r^n \\to 0\\).</p>
                <p>So \\(S_n \\to \\frac{a(1 - 0)}{1 - r} = \\frac{a}{1 - r}\\).</p>
            `
        },
        {
            type: 'concept',
            title: 'Why It Works - Intuition',
            content: `
                <p>Consider \\(1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots\\) where \\(a = 1\\), \\(r = \\frac{1}{2}\\).</p>
                <p>The partial sums are:</p>
                <ul>
                    <li>\\(S_1 = 1\\)</li>
                    <li>\\(S_2 = 1.5\\)</li>
                    <li>\\(S_3 = 1.75\\)</li>
                    <li>\\(S_4 = 1.875\\)</li>
                    <li>\\(S_5 = 1.9375\\)</li>
                </ul>
                <p>Each sum gets closer to 2, but never reaches it.</p>
                <div class="lesson-box">
                    <p>\\(S_\\infty = \\frac{1}{1 - \\frac{1}{2}} = \\frac{1}{\\frac{1}{2}} = 2\\)</p>
                </div>
                <p>Think of filling a container: each term fills half the remaining space. You get closer and closer to full, but never quite overflow.</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><text x="160" y="18" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">Repeatedly halving a segment - total approaches 2</text><line x1="20" y1="60" x2="300" y2="60" stroke="#444" stroke-width="0.5"/><rect x="20" y="45" width="140" height="30" fill="#54a0ff" opacity="0.7" rx="2"/><text x="90" y="65" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">1</text><rect x="160" y="45" width="70" height="30" fill="#00e5c7" opacity="0.7" rx="2"/><text x="195" y="65" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">1/2</text><rect x="230" y="45" width="35" height="30" fill="#feca57" opacity="0.7" rx="2"/><text x="247" y="65" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#1a1a2e">1/4</text><rect x="265" y="45" width="17" height="30" fill="#ff6b6b" opacity="0.7" rx="2"/><text x="274" y="65" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="8" fill="#e0e0e0">...</text><line x1="20" y1="110" x2="300" y2="110" stroke="#666" stroke-width="1" stroke-dasharray="4,3"/><text x="20" y="130" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">Partial sums:</text><circle cx="40" cy="155" r="3" fill="#54a0ff"/><text x="50" y="159" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">S1 = 1</text><circle cx="120" cy="155" r="3" fill="#00e5c7"/><text x="130" y="159" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">S2 = 1.5</text><circle cx="210" cy="155" r="3" fill="#feca57"/><text x="220" y="159" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">S3 = 1.75</text><circle cx="65" cy="180" r="3" fill="#ff6b6b"/><text x="75" y="184" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">S4 = 1.875</text><text x="195" y="184" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b">...</text><text x="225" y="184" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">S = 2</text></svg></div>
            `
        },
        {
            type: 'example',
            title: 'Finding the Sum to Infinity',
            problem: 'Find the sum to infinity of the series \\(12 + 6 + 3 + 1.5 + \\ldots\\)',
            steps: [
                { text: '\\(a = 12\\), \\(r = \\frac{6}{12} = \\frac{1}{2}\\).' },
                { text: 'Check convergence: \\(|r| = \\frac{1}{2} < 1\\) \\(\\checkmark\\)' },
                { text: '\\(S_\\infty = \\frac{a}{1 - r} = \\frac{12}{1 - \\frac{1}{2}}\\)' },
                { text: '\\(= \\frac{12}{\\frac{1}{2}} = 24\\)' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var denoms = [2, 3, 4, 5];
                var d = denoms[Math.floor(Math.random() * denoms.length)];
                var a = d * (Math.floor(Math.random() * 5) + 2);
                var r = 1 / d;
                var sInf = a / (1 - r);
                var sInfStr = String(Math.round(sInf * 100) / 100);
                if (sInf === Math.floor(sInf)) sInfStr = String(sInf);
                var t2 = a * r;
                var t3 = a * r * r;
                var t2Str = (t2 === Math.floor(t2)) ? String(t2) : t2.toFixed(2);
                var t3Str = (t3 === Math.floor(t3)) ? String(t3) : t3.toFixed(2);
                var wrong1 = a / r;
                var wrong2 = a / (1 + r);
                var wrong3 = a * r / (1 - r);
                var opts = [sInfStr, String(Math.round(wrong1 * 100) / 100), String(Math.round(wrong2 * 100) / 100), String(Math.round(wrong3 * 100) / 100)];
                var correctIdx = 0;
                for (var i = opts.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = opts[i]; opts[i] = opts[j]; opts[j] = tmp;
                    if (j === correctIdx) correctIdx = i;
                    else if (i === correctIdx) correctIdx = j;
                }
                return {
                    type: 'mc',
                    latex: '\\text{Find } S_\\infty \\text{ for } ' + a + ' + ' + t2Str + ' + ' + t3Str + ' + \\ldots',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: '\\(a = ' + a + '\\), \\(r = \\frac{1}{' + d + '}\\). \\(S_\\infty = \\frac{' + a + '}{1 - \\frac{1}{' + d + '}} = ' + sInfStr + '\\)'
                };
            }
        },
        {
            type: 'concept',
            title: 'Finding r Given the Sum to Infinity',
            content: `
                <p>Sometimes you are given \\(S_\\infty\\) and \\(a\\), and need to find \\(r\\).</p>
                <div class="lesson-box">
                    <p><strong>Rearranging \\(S_\\infty = \\frac{a}{1-r}\\):</strong></p>
                    \\[S_\\infty(1 - r) = a\\]
                    \\[1 - r = \\frac{a}{S_\\infty}\\]
                    \\[r = 1 - \\frac{a}{S_\\infty}\\]
                </div>
            `
        },
        {
            type: 'example',
            title: 'Finding r from Sum to Infinity',
            problem: 'A geometric series has first term 8 and sum to infinity 32. Find \\(r\\).',
            steps: [
                { text: '\\(S_\\infty = \\frac{a}{1 - r}\\), so \\(32 = \\frac{8}{1 - r}\\).' },
                { text: '\\(32(1 - r) = 8\\)' },
                { text: '\\(1 - r = \\frac{8}{32} = \\frac{1}{4}\\)' },
                { text: '\\(r = 1 - \\frac{1}{4} = \\frac{3}{4}\\)' },
                { text: 'Check: \\(|r| = \\frac{3}{4} < 1\\) \\(\\checkmark\\). The series converges.' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var fracs = [
                    { num: 1, den: 2 }, { num: 1, den: 3 }, { num: 2, den: 3 },
                    { num: 1, den: 4 }, { num: 3, den: 4 }, { num: 1, den: 5 },
                    { num: 2, den: 5 }, { num: 3, den: 5 }
                ];
                var pick = fracs[Math.floor(Math.random() * fracs.length)];
                var r = pick.num / pick.den;
                var sInf = Math.floor(Math.random() * 10 + 3) * pick.den;
                var a = sInf * (1 - r);
                if (a !== Math.floor(a)) {
                    sInf = pick.den * (Math.floor(Math.random() * 5) + 2);
                    a = sInf * (1 - r);
                }
                var correct = '\\frac{' + pick.num + '}{' + pick.den + '}';
                var wrong1 = '\\frac{' + (pick.den - pick.num) + '}{' + pick.den + '}';
                var wrong2 = '\\frac{' + pick.num + '}{' + (pick.den + 1) + '}';
                var wrong3 = '\\frac{' + (pick.num + 1) + '}{' + pick.den + '}';
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
                    latex: '\\text{A geometric series has } a = ' + a + ' \\text{ and } S_\\infty = ' + sInf + '. \\text{ Find } r.',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: '\\(r = 1 - \\frac{' + a + '}{' + sInf + '} = 1 - \\frac{' + (pick.den - pick.num) + '}{' + pick.den + '} = ' + correct + '\\)'
                };
            }
        },
        {
            type: 'concept',
            title: 'Recurring Decimals as Geometric Series',
            content: `
                <p>Recurring decimals can be expressed as geometric series, letting us convert them to fractions.</p>
                <div class="lesson-box">
                    <p><strong>Example:</strong> \\(0.\\overline{3} = 0.333\\ldots\\)</p>
                    \\[= 0.3 + 0.03 + 0.003 + \\ldots\\]
                    <p>This is a geometric series with \\(a = 0.3\\) and \\(r = 0.1\\).</p>
                    \\[S_\\infty = \\frac{0.3}{1 - 0.1} = \\frac{0.3}{0.9} = \\frac{1}{3}\\]
                </div>
                <p>Another example: \\(0.\\overline{72} = 0.72 + 0.0072 + 0.000072 + \\ldots\\)</p>
                <p>Here \\(a = 0.72\\), \\(r = 0.01\\):</p>
                \\[S_\\infty = \\frac{0.72}{1 - 0.01} = \\frac{0.72}{0.99} = \\frac{72}{99} = \\frac{8}{11}\\]
            `
        },
        {
            type: 'example',
            title: 'Converting a Recurring Decimal',
            problem: 'Express \\(0.\\overline{45}\\) as a fraction using the sum to infinity.',
            steps: [
                { text: '\\(0.\\overline{45} = 0.45 + 0.0045 + 0.000045 + \\ldots\\)' },
                { text: 'This is geometric with \\(a = 0.45\\) and \\(r = 0.01\\).' },
                { text: '\\(S_\\infty = \\frac{0.45}{1 - 0.01} = \\frac{0.45}{0.99}\\)' },
                { text: '\\(= \\frac{45}{99} = \\frac{5}{11}\\)' }
            ]
        },
        {
            type: 'practice',
            generate: function() {
                var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                var d = digits[Math.floor(Math.random() * digits.length)];
                var num = d;
                var den = 9;
                var gcd = function(a, b) { return b === 0 ? a : gcd(b, a % b); };
                var g = gcd(num, den);
                var simpNum = num / g;
                var simpDen = den / g;
                var correct = simpDen === 1 ? String(simpNum) : '\\frac{' + simpNum + '}{' + simpDen + '}';
                var wrong1 = '\\frac{' + d + '}{10}';
                var wrong2 = '\\frac{' + d + '}{11}';
                var wrong3 = '\\frac{' + (d + 1) + '}{9}';
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
                    latex: '\\text{Express } 0.\\overline{' + d + '} \\text{ as a fraction.}',
                    options: opts,
                    correctIdx: correctIdx,
                    explain: '\\(0.\\overline{' + d + '} = \\frac{0.' + d + '}{1 - 0.1} = \\frac{0.' + d + '}{0.9} = \\frac{' + d + '}{9}' + (g > 1 ? ' = ' + correct : '') + '\\)'
                };
            }
        },
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 8) + 2;
                var denoms = [2, 3, 4, 5];
                var d = denoms[Math.floor(Math.random() * denoms.length)];
                var sInf = a * d / (d - 1);
                var sInfRound = Math.round(sInf * 100) / 100;
                return {
                    type: 'short',
                    latex: '\\text{Find } S_\\infty \\text{ for the series with } a = ' + a + ', r = \\frac{1}{' + d + '}. \\text{ Give an exact decimal or fraction.}',
                    answer: String(sInfRound),
                    explain: '\\(S_\\infty = \\frac{' + a + '}{1 - \\frac{1}{' + d + '}} = \\frac{' + a + '}{\\frac{' + (d-1) + '}{' + d + '}} = \\frac{' + (a * d) + '}{' + (d-1) + '} = ' + sInfRound + '\\)'
                };
            }
        },
        {
            type: 'concept',
            title: 'Conditions for Convergence',
            content: `
                <p>Always check that the series converges before using the sum to infinity formula.</p>
                <div class="lesson-box">
                    <p><strong>Checklist:</strong></p>
                    <ul>
                        <li>Is the series geometric? (constant ratio between terms)</li>
                        <li>Is \\(|r| < 1\\)? If not, the series diverges and \\(S_\\infty\\) does not exist.</li>
                        <li>If asked "for what values of \\(x\\) does the series converge?", solve \\(|r| < 1\\).</li>
                    </ul>
                </div>
                <p>For example, \\(\\sum_{n=0}^{\\infty} x^n\\) converges when \\(|x| < 1\\), giving \\(S_\\infty = \\frac{1}{1-x}\\).</p>
            `
        },
        {
            type: 'summary',
            title: 'Sum to Infinity - Summary',
            content: '<p>The key ideas about convergent geometric series:</p>',
            points: [
                'A geometric series converges if and only if \\(|r| < 1\\)',
                '\\(S_\\infty = \\frac{a}{1-r}\\) for a convergent geometric series',
                'The formula comes from \\(S_n = \\frac{a(1-r^n)}{1-r}\\) as \\(r^n \\to 0\\)',
                'To find \\(r\\) from \\(S_\\infty\\): rearrange to \\(r = 1 - \\frac{a}{S_\\infty}\\)',
                'Recurring decimals can be converted to fractions using \\(S_\\infty\\)'
            ]
        }
    ]
};
