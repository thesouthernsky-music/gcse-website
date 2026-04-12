window.CURRENT_LESSON = {
    title: "Applications of the Binomial Series",
    subtitle: "Using binomial expansion for approximation and problem-solving",
    screens: [
        // --- Screen 1: Finding Specific Terms ---
        {
            type: 'concept',
            title: "Finding a Specific Term",
            content: `
                <p>To find a specific term in a binomial expansion, use the general term formula:</p>
                \\[T_{r+1} = \\binom{n}{r} a^{n-r} b^r\\]
                <p>For the coefficient of \\(x^k\\) in \\((a + bx)^n\\), find the value of \\(r\\) that gives \\(x^k\\), then calculate the coefficient.</p>
                <div class="lesson-box">
                    <strong>Strategy:</strong> Set the power of \\(x\\) in the general term equal to \\(k\\), solve for \\(r\\), then substitute back to find the coefficient.
                </div>
            `
        },
        // --- Screen 2: Finding Coefficient of x^k ---
        {
            type: 'concept',
            title: "Finding the Coefficient of \\(x^k\\)",
            content: `
                <p>In the expansion of \\((p + qx)^n\\), the general term is:</p>
                \\[T_{r+1} = \\binom{n}{r} p^{n-r} (qx)^r = \\binom{n}{r} p^{n-r} q^r x^r\\]
                <p>The coefficient of \\(x^k\\) is obtained when \\(r = k\\):</p>
                \\[\\text{Coefficient of } x^k = \\binom{n}{k} p^{n-k} q^k\\]
                <div class="lesson-box">
                    <strong>Example setup:</strong> For the coefficient of \\(x^3\\) in \\((2 + 3x)^7\\): use \\(r = 3\\), giving \\(\\binom{7}{3} \\cdot 2^4 \\cdot 3^3\\).
                </div>
            `
        },
        // --- Screen 3: Example - Coefficient of x^3 ---
        {
            type: 'example',
            title: "Example: Coefficient of \\(x^3\\) in \\((2 + x)^7\\)",
            problem: "Find the coefficient of \\(x^3\\) in the expansion of \\((2 + x)^7\\).",
            steps: [
                { text: "The general term is \\(T_{r+1} = \\binom{7}{r} \\cdot 2^{7-r} \\cdot x^r\\)" },
                { text: "For \\(x^3\\), set \\(r = 3\\):" },
                { text: "\\(T_4 = \\binom{7}{3} \\cdot 2^4 \\cdot x^3\\)" },
                { text: "\\(= 35 \\times 16 \\times x^3\\)" },
                { text: "\\(= 560x^3\\)" },
                { text: "The coefficient of \\(x^3\\) is \\(\\boxed{560}\\)." }
            ]
        },
        // --- Screen 4: Term Independent of x ---
        {
            type: 'concept',
            title: "The Term Independent of \\(x\\)",
            content: `
                <p>In expressions like \\(\\left(x + \\frac{1}{x}\\right)^n\\) or \\(\\left(x^2 + \\frac{1}{x}\\right)^n\\), we can find the <strong>term independent of \\(x\\)</strong> - the constant term.</p>
                <p>For \\(\\left(x + \\frac{1}{x}\\right)^n\\), the general term is:</p>
                \\[T_{r+1} = \\binom{n}{r} x^{n-r} \\left(\\frac{1}{x}\\right)^r = \\binom{n}{r} x^{n-2r}\\]
                <p>For this to be independent of \\(x\\), we need \\(n - 2r = 0\\), so \\(r = \\frac{n}{2}\\).</p>
                <div class="lesson-box">
                    <strong>Method:</strong> Write the general term, collect all powers of \\(x\\), set the total power equal to 0, and solve for \\(r\\).
                </div>
            `
        },
        // --- Screen 5: Term Independent Example ---
        {
            type: 'concept',
            title: "Term Independent of \\(x\\) - Worked Through",
            content: `
                <p>Find the term independent of \\(x\\) in \\(\\left(x^2 + \\frac{1}{x}\\right)^6\\).</p>
                <p>General term:</p>
                \\[T_{r+1} = \\binom{6}{r} (x^2)^{6-r} \\left(\\frac{1}{x}\\right)^r = \\binom{6}{r} x^{12-2r} \\cdot x^{-r} = \\binom{6}{r} x^{12-3r}\\]
                <p>For the constant term: \\(12 - 3r = 0 \\Rightarrow r = 4\\)</p>
                \\[T_5 = \\binom{6}{4} = 15\\]
                <div class="lesson-box">
                    <strong>Answer:</strong> The term independent of \\(x\\) is 15.
                </div>
            `
        },
        // --- Screen 6: Approximation Using Binomial Expansion ---
        {
            type: 'concept',
            title: "Approximating Values",
            content: `
                <p>The binomial expansion can approximate values like \\((1.02)^{10}\\) by writing them in the form \\((1 + x)^n\\) where \\(x\\) is small.</p>
                <p>For \\((1.02)^{10}\\), write \\(1.02 = 1 + 0.02\\), so:</p>
                \\[(1.02)^{10} = (1 + 0.02)^{10}\\]
                <p>Since \\(x = 0.02\\) is small, higher powers become negligible:</p>
                \\[\\approx 1 + 10(0.02) + 45(0.02)^2 + 120(0.02)^3\\]
                \\[= 1 + 0.2 + 0.018 + 0.00096 = 1.21896\\]
                <div class="lesson-box">
                    <strong>Key idea:</strong> When \\(|x|\\) is small, \\(x^2, x^3, \\ldots\\) become progressively smaller, so a few terms give a good approximation.
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><text x="160" y="16" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">Approximation: first terms dominate for small x</text><line x1="35" y1="175" x2="300" y2="175" stroke="#444" stroke-width="0.5"/><line x1="35" y1="175" x2="35" y2="25" stroke="#444" stroke-width="0.5"/><text x="60" y="190" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">Term 1</text><text x="120" y="190" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">Term 2</text><text x="180" y="190" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">Term 3</text><text x="240" y="190" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">Term 4</text><rect x="42" y="35" width="36" height="140" fill="#54a0ff" rx="2"/><text x="60" y="60" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">1</text><rect x="102" y="145" width="36" height="30" fill="#00e5c7" rx="2"/><text x="120" y="140" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">nx</text><rect x="162" y="170" width="36" height="5" fill="#feca57" rx="1"/><text x="180" y="165" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="9" fill="#e0e0e0">C(n,2)x^2</text><rect x="222" y="174" width="36" height="1" fill="#ff6b6b" rx="0.5"/><text x="240" y="168" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="8" fill="#e0e0e0">tiny</text><text x="30" y="30" font-family="'Space Grotesk',sans-serif" font-size="9" fill="#666">large</text><text x="30" y="173" font-family="'Space Grotesk',sans-serif" font-size="9" fill="#666">small</text></svg></div>
            `
        },
        // --- Screen 7: Example - Approximate 1.01^20 ---
        {
            type: 'example',
            title: "Example: Approximate \\(1.01^{20}\\)",
            problem: "Use the binomial expansion to approximate \\(1.01^{20}\\) to 4 decimal places.",
            steps: [
                { text: "Write \\(1.01 = 1 + 0.01\\), so \\(1.01^{20} = (1 + 0.01)^{20}\\)" },
                { text: "Term 1: \\(1\\)" },
                { text: "Term 2: \\(20 \\times 0.01 = 0.2\\)" },
                { text: "Term 3: \\(\\binom{20}{2}(0.01)^2 = 190 \\times 0.0001 = 0.019\\)" },
                { text: "Term 4: \\(\\binom{20}{3}(0.01)^3 = 1140 \\times 0.000001 = 0.00114\\)" },
                { text: "Term 5: \\(\\binom{20}{4}(0.01)^4 = 4845 \\times 0.00000001 \\approx 0.00005\\)" },
                { text: "Sum: \\(1 + 0.2 + 0.019 + 0.00114 + 0.00005 \\approx 1.2202\\) (to 4 d.p.)" }
            ]
        },
        // --- Screen 8: Sum of Coefficients ---
        {
            type: 'concept',
            title: "Sum of Coefficients",
            content: `
                <p>The <strong>sum of the coefficients</strong> in the expansion of \\((a + b)^n\\) is found by setting \\(a = b = 1\\):</p>
                \\[\\text{Sum of coefficients of } (1 + x)^n = (1 + 1)^n = 2^n\\]
                <p>This can also be seen from Pascal's Triangle - each row sums to a power of 2:</p>
                <ul>
                    <li>Row 0: \\(1 = 2^0\\)</li>
                    <li>Row 1: \\(1 + 1 = 2 = 2^1\\)</li>
                    <li>Row 2: \\(1 + 2 + 1 = 4 = 2^2\\)</li>
                    <li>Row 3: \\(1 + 3 + 3 + 1 = 8 = 2^3\\)</li>
                </ul>
                <div class="lesson-box">
                    <strong>Sum of binomial coefficients:</strong> \\(\\displaystyle\\sum_{r=0}^{n} \\binom{n}{r} = 2^n\\)
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><text x="160" y="16" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">Partial sums approach the full value</text><line x1="35" y1="175" x2="300" y2="175" stroke="#444" stroke-width="0.5"/><line x1="35" y1="175" x2="35" y2="25" stroke="#444" stroke-width="0.5"/><line x1="35" y1="42" x2="300" y2="42" stroke="#ff6b6b" stroke-width="1.5" stroke-dasharray="6,3"/><text x="295" y="36" text-anchor="end" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#ff6b6b">exact value</text><circle cx="75" cy="130" r="5" fill="#54a0ff"/><circle cx="125" cy="70" r="5" fill="#54a0ff"/><circle cx="175" cy="48" r="5" fill="#54a0ff"/><circle cx="225" cy="43" r="5" fill="#54a0ff"/><circle cx="275" cy="42" r="5" fill="#00e5c7"/><line x1="75" y1="130" x2="125" y2="70" stroke="#54a0ff" stroke-width="2"/><line x1="125" y1="70" x2="175" y2="48" stroke="#54a0ff" stroke-width="2"/><line x1="175" y1="48" x2="225" y2="43" stroke="#54a0ff" stroke-width="2"/><line x1="225" y1="43" x2="275" y2="42" stroke="#00e5c7" stroke-width="2"/><text x="75" y="150" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">1 term</text><text x="125" y="86" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">2 terms</text><text x="175" y="64" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">3 terms</text><text x="225" y="58" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">4 terms</text><text x="275" y="58" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#00e5c7">5 terms</text><text x="160" y="195" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">More terms = closer to the actual value</text></svg></div>
            `
        },
        // --- Screen 9: Sum of Coefficients for General Expression ---
        {
            type: 'concept',
            title: "Sum of Coefficients - General Case",
            content: `
                <p>For the expansion of \\((a + bx)^n\\), the sum of the coefficients is found by substituting \\(x = 1\\):</p>
                \\[\\text{Sum} = (a + b)^n\\]
                <p>For example, the sum of coefficients in \\((2 + 3x)^5\\) is:</p>
                \\[(2 + 3)^5 = 5^5 = 3125\\]
                <div class="lesson-box">
                    <strong>Method:</strong> To find the sum of coefficients, substitute \\(x = 1\\) (or whatever variable is present) into the original expression.
                </div>
            `
        },
        // --- Screen 10: Practice - Find Coefficient ---
        {
            type: 'practice',
            generate: function() {
                var cases = [
                    { p: 1, q: 1, n: 8, k: 3, coeff: 56, expr: '(1+x)^8', explain: '\\binom{8}{3} = 56' },
                    { p: 2, q: 1, n: 6, k: 2, coeff: 240, expr: '(2+x)^6', explain: '\\binom{6}{2} \\cdot 2^4 = 15 \\times 16 = 240' },
                    { p: 1, q: 2, n: 5, k: 2, coeff: 40, expr: '(1+2x)^5', explain: '\\binom{5}{2} \\cdot 2^2 = 10 \\times 4 = 40' },
                    { p: 3, q: 1, n: 5, k: 3, coeff: 90, expr: '(3+x)^5', explain: '\\binom{5}{3} \\cdot 3^2 = 10 \\times 9 = 90' },
                    { p: 1, q: 3, n: 4, k: 3, coeff: 108, expr: '(1+3x)^4', explain: '\\binom{4}{3} \\cdot 3^3 = 4 \\times 27 = 108' }
                ];
                var pick = cases[Math.floor(Math.random() * cases.length)];
                var ans = pick.coeff;
                var opts = [ans];
                while (opts.length < 4) {
                    var wrong = ans + Math.floor(Math.random() * 61) - 30;
                    if (wrong > 0 && opts.indexOf(wrong) === -1) opts.push(wrong);
                }
                opts.sort(function(a, b) { return a - b; });
                return {
                    type: 'mc',
                    latex: '\\text{Find the coefficient of } x^' + pick.k + ' \\text{ in } ' + pick.expr,
                    options: opts.map(String),
                    correctIdx: opts.indexOf(ans),
                    explain: pick.explain
                };
            }
        },
        // --- Screen 11: Practice - Term Independent of x ---
        {
            type: 'practice',
            generate: function() {
                var cases = [
                    { expr: '\\left(x + \\frac{1}{x}\\right)^6', n: 6, r: 3, ans: 20, explain: 'r = 3: \\binom{6}{3} = 20' },
                    { expr: '\\left(x + \\frac{1}{x}\\right)^4', n: 4, r: 2, ans: 6, explain: 'r = 2: \\binom{4}{2} = 6' },
                    { expr: '\\left(x + \\frac{1}{x}\\right)^8', n: 8, r: 4, ans: 70, explain: 'r = 4: \\binom{8}{4} = 70' },
                    { expr: '\\left(x + \\frac{1}{x}\\right)^{10}', n: 10, r: 5, ans: 252, explain: 'r = 5: \\binom{10}{5} = 252' }
                ];
                var pick = cases[Math.floor(Math.random() * cases.length)];
                var ans = pick.ans;
                var opts = [ans];
                while (opts.length < 4) {
                    var wrong = ans + Math.floor(Math.random() * 41) - 20;
                    if (wrong > 0 && opts.indexOf(wrong) === -1) opts.push(wrong);
                }
                opts.sort(function(a, b) { return a - b; });
                return {
                    type: 'mc',
                    latex: '\\text{Find the term independent of } x \\text{ in } ' + pick.expr,
                    options: opts.map(String),
                    correctIdx: opts.indexOf(ans),
                    explain: '\\text{Power of } x: n - 2r = 0 \\Rightarrow r = ' + pick.r + '. \\text{ Term} = ' + pick.explain
                };
            }
        },
        // --- Screen 12: Practice - Approximation ---
        {
            type: 'practice',
            generate: function() {
                var cases = [
                    { val: '1.03^5', x: 0.03, n: 5, approx: '1.1593', explain: '1 + 5(0.03) + 10(0.0009) + 10(0.000027) = 1 + 0.15 + 0.009 + 0.00027 \\approx 1.1593' },
                    { val: '0.98^4', x: -0.02, n: 4, approx: '0.9224', explain: '1 + 4(-0.02) + 6(0.0004) + 4(-0.000008) = 1 - 0.08 + 0.0024 - 0.000032 \\approx 0.9224' },
                    { val: '1.05^3', x: 0.05, n: 3, approx: '1.1576', explain: '1 + 3(0.05) + 3(0.0025) + (0.000125) = 1 + 0.15 + 0.0075 + 0.000125 \\approx 1.1576' },
                    { val: '1.01^{10}', x: 0.01, n: 10, approx: '1.1046', explain: '1 + 10(0.01) + 45(0.0001) + 120(0.000001) = 1 + 0.1 + 0.0045 + 0.00012 \\approx 1.1046' }
                ];
                var pick = cases[Math.floor(Math.random() * cases.length)];
                var wrong1 = (parseFloat(pick.approx) + 0.02).toFixed(4);
                var wrong2 = (parseFloat(pick.approx) - 0.03).toFixed(4);
                var wrong3 = (parseFloat(pick.approx) + 0.05).toFixed(4);
                var opts = [pick.approx, wrong1, wrong2, wrong3];
                opts.sort();
                return {
                    type: 'mc',
                    latex: '\\text{Approximate } ' + pick.val + ' \\text{ to 4 d.p.}',
                    options: opts,
                    correctIdx: opts.indexOf(pick.approx),
                    explain: pick.explain
                };
            }
        },
        // --- Screen 13: Practice - Sum of Coefficients ---
        {
            type: 'practice',
            generate: function() {
                var cases = [
                    { expr: '(1+x)^6', ans: 64, explain: '(1+1)^6 = 2^6 = 64' },
                    { expr: '(1+x)^{10}', ans: 1024, explain: '(1+1)^{10} = 2^{10} = 1024' },
                    { expr: '(2+x)^4', ans: 81, explain: '(2+1)^4 = 3^4 = 81' },
                    { expr: '(1+2x)^5', ans: 243, explain: '(1+2)^5 = 3^5 = 243' },
                    { expr: '(3+x)^3', ans: 64, explain: '(3+1)^3 = 4^3 = 64' },
                    { expr: '(1+x)^8', ans: 256, explain: '(1+1)^8 = 2^8 = 256' }
                ];
                var pick = cases[Math.floor(Math.random() * cases.length)];
                var ans = pick.ans;
                var opts = [ans];
                while (opts.length < 4) {
                    var wrong = ans + Math.floor(Math.random() * 101) - 50;
                    if (wrong > 0 && opts.indexOf(wrong) === -1) opts.push(wrong);
                }
                opts.sort(function(a, b) { return a - b; });
                return {
                    type: 'mc',
                    latex: '\\text{Find the sum of the coefficients in the expansion of } ' + pick.expr,
                    options: opts.map(String),
                    correctIdx: opts.indexOf(ans),
                    explain: '\\text{Set } x = 1: ' + pick.explain
                };
            }
        },
        // --- Screen 14: Practice - Mixed Problem ---
        {
            type: 'practice',
            generate: function() {
                var cases = [
                    { expr: '(2+x)^5', k: 2, coeff: 80, explain: '\\binom{5}{2} \\cdot 2^3 = 10 \\times 8 = 80' },
                    { expr: '(3+x)^4', k: 1, coeff: 108, explain: '\\binom{4}{1} \\cdot 3^3 = 4 \\times 27 = 108' },
                    { expr: '(1+2x)^6', k: 3, coeff: 160, explain: '\\binom{6}{3} \\cdot 2^3 = 20 \\times 8 = 160' },
                    { expr: '(2+3x)^4', k: 2, coeff: 216, explain: '\\binom{4}{2} \\cdot 2^2 \\cdot 3^2 = 6 \\times 4 \\times 9 = 216' },
                    { expr: '(1-x)^{10}', k: 4, coeff: 210, explain: '\\binom{10}{4} \\cdot (-1)^4 = 210' }
                ];
                var pick = cases[Math.floor(Math.random() * cases.length)];
                var ans = pick.coeff;
                var opts = [ans];
                while (opts.length < 4) {
                    var wrong = ans + Math.floor(Math.random() * 81) - 40;
                    if (wrong > 0 && opts.indexOf(wrong) === -1) opts.push(wrong);
                }
                opts.sort(function(a, b) { return a - b; });
                return {
                    type: 'mc',
                    latex: '\\text{Find the coefficient of } x^' + pick.k + ' \\text{ in } ' + pick.expr,
                    options: opts.map(String),
                    correctIdx: opts.indexOf(ans),
                    explain: pick.explain
                };
            }
        },
        // --- Screen 15: Summary ---
        {
            type: 'summary',
            title: "Applications of the Binomial Series - Summary",
            content: '<p>You can now apply the binomial expansion to a range of problems beyond simple expansions.</p>',
            points: [
                "To find the coefficient of \\(x^k\\) in \\((p + qx)^n\\): use \\(\\binom{n}{k} p^{n-k} q^k\\)",
                "For the term independent of \\(x\\): set the total power of \\(x\\) in the general term equal to 0",
                "To approximate \\((1 + x)^n\\) for small \\(x\\): use the first few terms of the expansion",
                "The sum of coefficients of \\((a + bx)^n\\) is \\((a + b)^n\\) (substitute \\(x = 1\\))",
                "The sum of binomial coefficients \\(\\binom{n}{0} + \\binom{n}{1} + \\cdots + \\binom{n}{n} = 2^n\\)"
            ]
        }
    ]
};
