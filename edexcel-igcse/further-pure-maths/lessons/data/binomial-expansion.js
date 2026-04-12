window.CURRENT_LESSON = {
    title: "The Binomial Expansion",
    subtitle: "Expanding (a+b)^n using the binomial theorem",
    screens: [
        // --- Screen 1: Introduction ---
        {
            type: 'concept',
            title: "The Binomial Theorem",
            content: `
                <p>The <strong>binomial theorem</strong> gives us a formula for expanding \\((a + b)^n\\) where \\(n\\) is a positive integer.</p>
                <div class="lesson-box">
                    <strong>The Binomial Theorem:</strong>
                    \\[(a + b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r\\]
                    \\[= \\binom{n}{0}a^n + \\binom{n}{1}a^{n-1}b + \\binom{n}{2}a^{n-2}b^2 + \\cdots + \\binom{n}{n}b^n\\]
                </div>
                <p>Each term has the form \\(\\binom{n}{r} a^{n-r} b^r\\), and the coefficients come from Pascal's Triangle.</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><defs><marker id="binom-down-arrow" markerWidth="6" markerHeight="6" refX="3" refY="6" orient="auto"><path d="M0,0 L3,6 L6,0" fill="#00e5c7"/></marker></defs><text x="160" y="16" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">Row 4 of Pascal's Triangle gives (a+b)^4</text><circle cx="60" cy="42" r="13" fill="none" stroke="#feca57" stroke-width="1.5"/><text x="60" y="47" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">1</text><circle cx="110" cy="42" r="13" fill="none" stroke="#feca57" stroke-width="1.5"/><text x="110" y="47" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">4</text><circle cx="160" cy="42" r="13" fill="none" stroke="#feca57" stroke-width="1.5"/><text x="160" y="47" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">6</text><circle cx="210" cy="42" r="13" fill="none" stroke="#feca57" stroke-width="1.5"/><text x="210" y="47" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">4</text><circle cx="260" cy="42" r="13" fill="none" stroke="#feca57" stroke-width="1.5"/><text x="260" y="47" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">1</text><line x1="60" y1="56" x2="60" y2="78" stroke="#00e5c7" stroke-width="1.5" marker-end="url(#binom-down-arrow)"/><line x1="110" y1="56" x2="110" y2="78" stroke="#00e5c7" stroke-width="1.5" marker-end="url(#binom-down-arrow)"/><line x1="160" y1="56" x2="160" y2="78" stroke="#00e5c7" stroke-width="1.5" marker-end="url(#binom-down-arrow)"/><line x1="210" y1="56" x2="210" y2="78" stroke="#00e5c7" stroke-width="1.5" marker-end="url(#binom-down-arrow)"/><line x1="260" y1="56" x2="260" y2="78" stroke="#00e5c7" stroke-width="1.5" marker-end="url(#binom-down-arrow)"/><text x="60" y="98" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">1a^4</text><text x="110" y="98" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">4a^3b</text><text x="160" y="98" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">6a^2b^2</text><text x="210" y="98" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">4ab^3</text><text x="260" y="98" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">1b^4</text><line x1="20" y1="115" x2="300" y2="115" stroke="#444" stroke-width="0.5"/><text x="60" y="135" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">C(4,0)</text><text x="110" y="135" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">C(4,1)</text><text x="160" y="135" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">C(4,2)</text><text x="210" y="135" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">C(4,3)</text><text x="260" y="135" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#e0e0e0">C(4,4)</text><text x="160" y="160" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#00e5c7">Powers of a decrease: 4, 3, 2, 1, 0</text><text x="160" y="176" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#ff6b6b">Powers of b increase: 0, 1, 2, 3, 4</text><text x="160" y="194" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">Sum of powers always = n = 4</text></svg></div>
            `
        },
        // --- Screen 2: The General Term ---
        {
            type: 'concept',
            title: "The General Term",
            content: `
                <p>In the expansion of \\((a + b)^n\\), the general term (the \\((r+1)\\)-th term) is:</p>
                \\[T_{r+1} = \\binom{n}{r} a^{n-r} b^r\\]
                <p>Key observations:</p>
                <ul>
                    <li>The powers of \\(a\\) decrease from \\(n\\) to \\(0\\)</li>
                    <li>The powers of \\(b\\) increase from \\(0\\) to \\(n\\)</li>
                    <li>In each term, the powers of \\(a\\) and \\(b\\) sum to \\(n\\)</li>
                    <li>There are \\(n + 1\\) terms in total</li>
                </ul>
                <div class="lesson-box">
                    <strong>Remember:</strong> The \\((r+1)\\)-th term uses \\(\\binom{n}{r}\\) - the index \\(r\\) starts at 0.
                </div>
            `
        },
        // --- Screen 3: Expanding (1+x)^n ---
        {
            type: 'concept',
            title: "Expanding \\((1 + x)^n\\)",
            content: `
                <p>A very common case is \\(a = 1\\), \\(b = x\\). Since \\(1^{n-r} = 1\\), the expansion simplifies:</p>
                <div class="lesson-box">
                    <strong>Expansion of \\((1 + x)^n\\):</strong>
                    \\[(1 + x)^n = 1 + nx + \\binom{n}{2}x^2 + \\binom{n}{3}x^3 + \\cdots + x^n\\]
                    \\[= \\sum_{r=0}^{n} \\binom{n}{r} x^r\\]
                </div>
                <p>This is the simplest form of the binomial expansion and often the starting point for more complex problems.</p>
            `
        },
        // --- Screen 4: First Few Terms ---
        {
            type: 'concept',
            title: "Writing the First Few Terms",
            content: `
                <p>Often you are asked for just the first few terms of an expansion. For \\((1 + x)^n\\):</p>
                <ul>
                    <li>1st term: \\(1\\)</li>
                    <li>2nd term: \\(nx\\)</li>
                    <li>3rd term: \\(\\frac{n(n-1)}{2!}x^2\\)</li>
                    <li>4th term: \\(\\frac{n(n-1)(n-2)}{3!}x^3\\)</li>
                </ul>
                <p>So:</p>
                \\[(1 + x)^n \\approx 1 + nx + \\frac{n(n-1)}{2}x^2 + \\frac{n(n-1)(n-2)}{6}x^3 + \\cdots\\]
                <div class="lesson-box">
                    <strong>Pattern:</strong> Each coefficient is formed by multiplying descending factors from \\(n\\) and dividing by the corresponding factorial.
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><text x="160" y="18" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">How coefficients are built for (1+x)^n</text><rect x="15" y="30" width="290" height="28" rx="4" fill="none" stroke="#444" stroke-width="0.5"/><text x="45" y="49" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">1</text><text x="105" y="49" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">n</text><text x="170" y="49" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">n(n-1)/2!</text><text x="255" y="49" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#feca57">n(n-1)(n-2)/3!</text><text x="45" y="75" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">x^0</text><text x="105" y="75" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">x^1</text><text x="170" y="75" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">x^2</text><text x="255" y="75" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">x^3</text><line x1="15" y1="90" x2="305" y2="90" stroke="#444" stroke-width="0.5"/><text x="20" y="112" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">n = 4:</text><rect x="70" y="98" width="30" height="22" rx="3" fill="#00e5c7" fill-opacity="0.15" stroke="#00e5c7" stroke-width="1"/><text x="85" y="114" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">1</text><rect x="110" y="98" width="30" height="22" rx="3" fill="#00e5c7" fill-opacity="0.15" stroke="#00e5c7" stroke-width="1"/><text x="125" y="114" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">4</text><rect x="150" y="98" width="30" height="22" rx="3" fill="#00e5c7" fill-opacity="0.15" stroke="#00e5c7" stroke-width="1"/><text x="165" y="114" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">6</text><rect x="190" y="98" width="30" height="22" rx="3" fill="#00e5c7" fill-opacity="0.15" stroke="#00e5c7" stroke-width="1"/><text x="205" y="114" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">4</text><rect x="230" y="98" width="30" height="22" rx="3" fill="#00e5c7" fill-opacity="0.15" stroke="#00e5c7" stroke-width="1"/><text x="245" y="114" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">1</text><text x="20" y="145" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">n = 5:</text><rect x="70" y="131" width="30" height="22" rx="3" fill="#ff6b6b" fill-opacity="0.15" stroke="#ff6b6b" stroke-width="1"/><text x="85" y="147" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b">1</text><rect x="110" y="131" width="30" height="22" rx="3" fill="#ff6b6b" fill-opacity="0.15" stroke="#ff6b6b" stroke-width="1"/><text x="125" y="147" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b">5</text><rect x="150" y="131" width="30" height="22" rx="3" fill="#ff6b6b" fill-opacity="0.15" stroke="#ff6b6b" stroke-width="1"/><text x="165" y="147" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#ff6b6b">10</text><rect x="190" y="131" width="30" height="22" rx="3" fill="#ff6b6b" fill-opacity="0.15" stroke="#ff6b6b" stroke-width="1"/><text x="205" y="147" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#ff6b6b">10</text><rect x="230" y="131" width="30" height="22" rx="3" fill="#ff6b6b" fill-opacity="0.15" stroke="#ff6b6b" stroke-width="1"/><text x="245" y="147" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b">5</text><rect x="270" y="131" width="26" height="22" rx="3" fill="#ff6b6b" fill-opacity="0.15" stroke="#ff6b6b" stroke-width="1"/><text x="283" y="147" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b">1</text><text x="160" y="180" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#00e5c7">Descending factors: n, n-1, n-2, ...</text><text x="160" y="196" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">Divided by: 1!, 2!, 3!, ...</text></svg></div>
            `
        },
        // --- Screen 5: Expanding (a+b)^n ---
        {
            type: 'concept',
            title: "Expanding \\((a + b)^n\\) in Full",
            content: `
                <p>When both \\(a\\) and \\(b\\) are expressions (not just 1 and \\(x\\)), you must include the powers of both.</p>
                <p>For example, \\((2 + x)^4\\):</p>
                \\[(2 + x)^4 = \\binom{4}{0}2^4 + \\binom{4}{1}2^3 x + \\binom{4}{2}2^2 x^2 + \\binom{4}{3}2 x^3 + \\binom{4}{4}x^4\\]
                \\[= 16 + 32x + 24x^2 + 8x^3 + x^4\\]
                <div class="lesson-box">
                    <strong>Important:</strong> Don't forget to raise \\(a\\) to the appropriate power in each term. A common error is forgetting powers of the constant.
                </div>
            `
        },
        // --- Screen 6: Expanding with Coefficients ---
        {
            type: 'concept',
            title: "Expanding \\((a + bx)^n\\)",
            content: `
                <p>When the second term has a coefficient, treat \\(bx\\) as a single unit.</p>
                <p>In \\((1 + 3x)^5\\), set \\(a = 1\\) and replace \\(x\\) with \\(3x\\):</p>
                \\[(1 + 3x)^5 = 1 + 5(3x) + 10(3x)^2 + 10(3x)^3 + 5(3x)^4 + (3x)^5\\]
                \\[= 1 + 15x + 90x^2 + 270x^3 + 405x^4 + 243x^5\\]
                <div class="lesson-box">
                    <strong>Key step:</strong> When substituting, raise the entire expression \\(bx\\) to the power. So \\((3x)^2 = 9x^2\\), not \\(3x^2\\).
                </div>
            `
        },
        // --- Screen 7: Negative Terms ---
        {
            type: 'concept',
            title: "Expansions with Negative Terms",
            content: `
                <p>For \\((a - b)^n\\), treat it as \\((a + (-b))^n\\). The signs alternate:</p>
                \\[(1 - x)^n = 1 - nx + \\binom{n}{2}x^2 - \\binom{n}{3}x^3 + \\cdots\\]
                <p>The sign of each term depends on the power of \\((-b)^r\\):</p>
                <ul>
                    <li>Even powers of \\(r\\): positive</li>
                    <li>Odd powers of \\(r\\): negative</li>
                </ul>
                <div class="lesson-box">
                    <strong>Sign pattern:</strong> In \\((a - b)^n\\), the terms alternate in sign: \\(+, -, +, -, \\ldots\\)
                </div>
            `
        },
        // --- Screen 8: Example - Expand (1+x)^5 ---
        {
            type: 'example',
            title: "Example: Expand \\((1 + x)^5\\)",
            problem: "Find the full expansion of \\((1 + x)^5\\).",
            steps: [
                { text: "Use the binomial theorem with \\(n = 5\\):" },
                { text: "\\((1+x)^5 = \\binom{5}{0} + \\binom{5}{1}x + \\binom{5}{2}x^2 + \\binom{5}{3}x^3 + \\binom{5}{4}x^4 + \\binom{5}{5}x^5\\)" },
                { text: "Row 5 of Pascal's Triangle: 1, 5, 10, 10, 5, 1" },
                { text: "\\((1+x)^5 = 1 + 5x + 10x^2 + 10x^3 + 5x^4 + x^5\\)" }
            ]
        },
        // --- Screen 9: Example - Expand (2+x)^4 ---
        {
            type: 'example',
            title: "Example: Expand \\((2 + x)^4\\)",
            problem: "Find the full expansion of \\((2 + x)^4\\).",
            steps: [
                { text: "Here \\(a = 2\\), \\(b = x\\), \\(n = 4\\). Row 4: 1, 4, 6, 4, 1" },
                { text: "\\((2+x)^4 = 1 \\cdot 2^4 + 4 \\cdot 2^3 \\cdot x + 6 \\cdot 2^2 \\cdot x^2 + 4 \\cdot 2 \\cdot x^3 + 1 \\cdot x^4\\)" },
                { text: "\\(= 16 + 4(8)x + 6(4)x^2 + 4(2)x^3 + x^4\\)" },
                { text: "\\(= 16 + 32x + 24x^2 + 8x^3 + x^4\\)" }
            ]
        },
        // --- Screen 10: Example - First 4 terms of (1-3x)^8 ---
        {
            type: 'example',
            title: "Example: First 4 Terms of \\((1 - 3x)^8\\)",
            problem: "Find the first 4 terms of \\((1 - 3x)^8\\) in ascending powers of \\(x\\).",
            steps: [
                { text: "Replace \\(x\\) with \\((-3x)\\) in the expansion of \\((1+x)^8\\):" },
                { text: "Term 1: \\(1\\)" },
                { text: "Term 2: \\(8(-3x) = -24x\\)" },
                { text: "Term 3: \\(\\binom{8}{2}(-3x)^2 = 28 \\times 9x^2 = 252x^2\\)" },
                { text: "Term 4: \\(\\binom{8}{3}(-3x)^3 = 56 \\times (-27x^3) = -1512x^3\\)" },
                { text: "First 4 terms: \\(1 - 24x + 252x^2 - 1512x^3\\)" }
            ]
        },
        // --- Screen 11: Practice - Full Expansion ---
        {
            type: 'practice',
            generate: function() {
                var cases = [
                    { n: 3, exp: '(1+x)^3', terms: [1, 3, 3, 1], display: '1 + 3x + 3x^2 + x^3' },
                    { n: 4, exp: '(1+x)^4', terms: [1, 4, 6, 4, 1], display: '1 + 4x + 6x^2 + 4x^3 + x^4' },
                    { n: 4, exp: '(1-x)^4', terms: [1, -4, 6, -4, 1], display: '1 - 4x + 6x^2 - 4x^3 + x^4' },
                    { n: 3, exp: '(1-x)^3', terms: [1, -3, 3, -1], display: '1 - 3x + 3x^2 - x^3' }
                ];
                var pick = cases[Math.floor(Math.random() * cases.length)];
                var wrong1 = pick.display.replace(/\+ 3/g, '+ 4');
                var wrong2 = pick.display.replace(/6/g, '8');
                var wrong3 = pick.display.replace(/\+ x/, '+ 2x');
                var opts = [pick.display, wrong1, wrong2, wrong3];
                var correct = 0;
                // Shuffle
                for (var i = opts.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = opts[i]; opts[i] = opts[j]; opts[j] = tmp;
                    if (j === correct) correct = i;
                    else if (i === correct) correct = j;
                }
                return {
                    type: 'mc',
                    latex: '\\text{Expand } ' + pick.exp,
                    options: opts.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correct,
                    explain: '\\(' + pick.exp + ' = ' + pick.display + '\\)'
                };
            }
        },
        // --- Screen 12: Practice - Find a Coefficient ---
        {
            type: 'practice',
            generate: function() {
                var cases = [
                    { expr: '(1+x)^6', r: 2, coeff: 15, n: 6 },
                    { expr: '(1+x)^7', r: 3, coeff: 35, n: 7 },
                    { expr: '(1+x)^8', r: 2, coeff: 28, n: 8 },
                    { expr: '(1+x)^{10}', r: 3, coeff: 120, n: 10 },
                    { expr: '(1+x)^9', r: 4, coeff: 126, n: 9 },
                    { expr: '(1+x)^7', r: 2, coeff: 21, n: 7 }
                ];
                var pick = cases[Math.floor(Math.random() * cases.length)];
                var ans = pick.coeff;
                var opts = [ans];
                while (opts.length < 4) {
                    var wrong = ans + Math.floor(Math.random() * 41) - 20;
                    if (wrong > 0 && opts.indexOf(wrong) === -1) opts.push(wrong);
                }
                opts.sort(function(a, b) { return a - b; });
                return {
                    type: 'mc',
                    latex: '\\text{Find the coefficient of } x^' + pick.r + ' \\text{ in the expansion of } ' + pick.expr,
                    options: opts.map(String),
                    correctIdx: opts.indexOf(ans),
                    explain: '\\text{Coefficient of } x^' + pick.r + ' = \\binom{' + pick.n + '}{' + pick.r + '} = ' + ans
                };
            }
        },
        // --- Screen 13: Practice - Expansion with Coefficients ---
        {
            type: 'practice',
            generate: function() {
                var cases = [
                    { expr: '(1+2x)^4', r: 2, coeff: 24, n: 4, b: 2, explain: '\\binom{4}{2}(2x)^2 = 6 \\times 4x^2 = 24x^2' },
                    { expr: '(1+3x)^3', r: 1, coeff: 9, n: 3, b: 3, explain: '\\binom{3}{1}(3x) = 3 \\times 3x = 9x' },
                    { expr: '(1+2x)^5', r: 3, coeff: 80, n: 5, b: 2, explain: '\\binom{5}{3}(2x)^3 = 10 \\times 8x^3 = 80x^3' },
                    { expr: '(1-2x)^4', r: 2, coeff: 24, n: 4, b: -2, explain: '\\binom{4}{2}(-2x)^2 = 6 \\times 4x^2 = 24x^2' },
                    { expr: '(1+3x)^4', r: 2, coeff: 54, n: 4, b: 3, explain: '\\binom{4}{2}(3x)^2 = 6 \\times 9x^2 = 54x^2' }
                ];
                var pick = cases[Math.floor(Math.random() * cases.length)];
                var ans = pick.coeff;
                var opts = [ans];
                while (opts.length < 4) {
                    var wrong = ans + Math.floor(Math.random() * 31) - 15;
                    if (wrong > 0 && opts.indexOf(wrong) === -1) opts.push(wrong);
                }
                opts.sort(function(a, b) { return a - b; });
                return {
                    type: 'mc',
                    latex: '\\text{Find the coefficient of } x^' + pick.r + ' \\text{ in } ' + pick.expr,
                    options: opts.map(String),
                    correctIdx: opts.indexOf(ans),
                    explain: pick.explain
                };
            }
        },
        // --- Screen 14: Practice - Negative Terms ---
        {
            type: 'practice',
            generate: function() {
                var cases = [
                    { expr: '(1-x)^5', r: 3, coeff: -10, n: 5 },
                    { expr: '(1-x)^6', r: 1, coeff: -6, n: 6 },
                    { expr: '(1-x)^7', r: 2, coeff: 21, n: 7 },
                    { expr: '(1-x)^8', r: 3, coeff: -56, n: 8 },
                    { expr: '(1-x)^4', r: 3, coeff: -4, n: 4 }
                ];
                var pick = cases[Math.floor(Math.random() * cases.length)];
                var ans = pick.coeff;
                var opts = [ans];
                while (opts.length < 4) {
                    var wrong = ans + Math.floor(Math.random() * 21) - 10;
                    if (wrong !== 0 && opts.indexOf(wrong) === -1) opts.push(wrong);
                }
                opts.sort(function(a, b) { return a - b; });
                return {
                    type: 'mc',
                    latex: '\\text{Find the coefficient of } x^' + pick.r + ' \\text{ in } ' + pick.expr,
                    options: opts.map(String),
                    correctIdx: opts.indexOf(ans),
                    explain: '\\text{Coefficient} = \\binom{' + pick.n + '}{' + pick.r + '} \\times (-1)^' + pick.r + ' = ' + ans
                };
            }
        },
        // --- Screen 15: Practice - Short Answer ---
        {
            type: 'practice',
            generate: function() {
                var cases = [
                    { expr: '(1+x)^5', n: 5, numTerms: 6 },
                    { expr: '(1+x)^8', n: 8, numTerms: 9 },
                    { expr: '(a+b)^{10}', n: 10, numTerms: 11 },
                    { expr: '(1+x)^{12}', n: 12, numTerms: 13 },
                    { expr: '(a+b)^7', n: 7, numTerms: 8 }
                ];
                var pick = cases[Math.floor(Math.random() * cases.length)];
                return {
                    type: 'short',
                    latex: '\\text{How many terms are in the expansion of } ' + pick.expr + '?',
                    answer: String(pick.numTerms),
                    explain: '\\text{The expansion of } (a+b)^n \\text{ has } n+1 \\text{ terms. Here } n = ' + pick.n + ' \\text{, so there are } ' + pick.numTerms + ' \\text{ terms.}'
                };
            }
        },
        // --- Screen 16: Practice - Expansion of (2+x)^n ---
        {
            type: 'practice',
            generate: function() {
                var cases = [
                    { a: 2, n: 3, r: 2, coeff: 6, explain: '\\binom{3}{2} \\cdot 2^1 \\cdot x^2 = 3 \\times 2 = 6' },
                    { a: 3, n: 3, r: 1, coeff: 27, explain: '\\binom{3}{1} \\cdot 3^2 \\cdot x = 3 \\times 9 = 27' },
                    { a: 2, n: 4, r: 1, coeff: 32, explain: '\\binom{4}{1} \\cdot 2^3 \\cdot x = 4 \\times 8 = 32' },
                    { a: 2, n: 4, r: 3, coeff: 8, explain: '\\binom{4}{3} \\cdot 2^1 \\cdot x^3 = 4 \\times 2 = 8' },
                    { a: 3, n: 4, r: 2, coeff: 54, explain: '\\binom{4}{2} \\cdot 3^2 \\cdot x^2 = 6 \\times 9 = 54' }
                ];
                var pick = cases[Math.floor(Math.random() * cases.length)];
                var ans = pick.coeff;
                var opts = [ans];
                while (opts.length < 4) {
                    var wrong = ans + Math.floor(Math.random() * 31) - 15;
                    if (wrong > 0 && opts.indexOf(wrong) === -1) opts.push(wrong);
                }
                opts.sort(function(a, b) { return a - b; });
                return {
                    type: 'mc',
                    latex: '\\text{Find the coefficient of } x^' + pick.r + ' \\text{ in } (' + pick.a + '+x)^' + pick.n,
                    options: opts.map(String),
                    correctIdx: opts.indexOf(ans),
                    explain: pick.explain
                };
            }
        },
        // --- Screen 17: Summary ---
        {
            type: 'summary',
            title: "The Binomial Expansion - Summary",
            content: '<p>You can now expand expressions of the form \\((a + b)^n\\) using the binomial theorem.</p>',
            points: [
                "The binomial theorem: \\((a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r\\)",
                "The general term is \\(T_{r+1} = \\binom{n}{r} a^{n-r} b^r\\)",
                "For \\((1+x)^n\\): \\(1 + nx + \\frac{n(n-1)}{2}x^2 + \\cdots\\)",
                "For coefficients like \\((1+bx)^n\\), raise the entire \\(bx\\) to the power",
                "Signs alternate in \\((a-b)^n\\): positive for even powers, negative for odd",
                "The expansion has \\(n + 1\\) terms"
            ]
        }
    ]
};
