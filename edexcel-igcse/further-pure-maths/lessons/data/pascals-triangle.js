window.CURRENT_LESSON = {
    title: "Pascal's Triangle & Combinations",
    subtitle: "Building the foundation for binomial expansion",
    screens: [
        // --- Screen 1: Introduction ---
        {
            type: 'concept',
            title: "What is Pascal's Triangle?",
            content: `
                <p>Pascal's Triangle is a triangular array of numbers where each entry is the sum of the two entries directly above it.</p>
                <p>It begins with a single 1 at the top, and each row starts and ends with 1:</p>
                <div style="text-align:center; font-size:1.1em; line-height:2; font-family:monospace;">
                    <div>1</div>
                    <div>1 &nbsp; 1</div>
                    <div>1 &nbsp; 2 &nbsp; 1</div>
                    <div>1 &nbsp; 3 &nbsp; 3 &nbsp; 1</div>
                    <div>1 &nbsp; 4 &nbsp; 6 &nbsp; 4 &nbsp; 1</div>
                    <div>1 &nbsp; 5 &nbsp; 10 &nbsp; 10 &nbsp; 5 &nbsp; 1</div>
                </div>
                <div class="lesson-box">
                    <strong>Key idea:</strong> Each number is formed by adding the two numbers above it. The rows are numbered starting from row 0.
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><circle cx="160" cy="18" r="14" fill="none" stroke="#feca57" stroke-width="1.5"/><text x="160" y="23" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">1</text><circle cx="140" cy="48" r="14" fill="none" stroke="#54a0ff" stroke-width="1.5"/><text x="140" y="53" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#54a0ff">1</text><circle cx="180" cy="48" r="14" fill="none" stroke="#54a0ff" stroke-width="1.5"/><text x="180" y="53" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#54a0ff">1</text><circle cx="120" cy="78" r="14" fill="none" stroke="#feca57" stroke-width="1.5"/><text x="120" y="83" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">1</text><circle cx="160" cy="78" r="14" fill="none" stroke="#00e5c7" stroke-width="1.5"/><text x="160" y="83" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">2</text><circle cx="200" cy="78" r="14" fill="none" stroke="#feca57" stroke-width="1.5"/><text x="200" y="83" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">1</text><circle cx="100" cy="108" r="14" fill="none" stroke="#54a0ff" stroke-width="1.5"/><text x="100" y="113" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#54a0ff">1</text><circle cx="140" cy="108" r="14" fill="none" stroke="#00e5c7" stroke-width="1.5"/><text x="140" y="113" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">3</text><circle cx="180" cy="108" r="14" fill="none" stroke="#00e5c7" stroke-width="1.5"/><text x="180" y="113" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">3</text><circle cx="220" cy="108" r="14" fill="none" stroke="#54a0ff" stroke-width="1.5"/><text x="220" y="113" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#54a0ff">1</text><circle cx="80" cy="138" r="14" fill="none" stroke="#feca57" stroke-width="1.5"/><text x="80" y="143" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">1</text><circle cx="120" cy="138" r="14" fill="none" stroke="#00e5c7" stroke-width="1.5"/><text x="120" y="143" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">4</text><circle cx="160" cy="138" r="14" fill="none" stroke="#ff6b6b" stroke-width="1.5"/><text x="160" y="143" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b">6</text><circle cx="200" cy="138" r="14" fill="none" stroke="#00e5c7" stroke-width="1.5"/><text x="200" y="143" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">4</text><circle cx="240" cy="138" r="14" fill="none" stroke="#feca57" stroke-width="1.5"/><text x="240" y="143" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">1</text><circle cx="60" cy="168" r="14" fill="none" stroke="#54a0ff" stroke-width="1.5"/><text x="60" y="173" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#54a0ff">1</text><circle cx="100" cy="168" r="14" fill="none" stroke="#00e5c7" stroke-width="1.5"/><text x="100" y="173" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">5</text><circle cx="140" cy="168" r="14" fill="none" stroke="#ff6b6b" stroke-width="1.5"/><text x="140" y="173" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#ff6b6b">10</text><circle cx="180" cy="168" r="14" fill="none" stroke="#ff6b6b" stroke-width="1.5"/><text x="180" y="173" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#ff6b6b">10</text><circle cx="220" cy="168" r="14" fill="none" stroke="#00e5c7" stroke-width="1.5"/><text x="220" y="173" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">5</text><circle cx="260" cy="168" r="14" fill="none" stroke="#54a0ff" stroke-width="1.5"/><text x="260" y="173" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#54a0ff">1</text><text x="30" y="23" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#666">Row 0</text><text x="30" y="53" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#666">Row 1</text><text x="30" y="83" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#666">Row 2</text><text x="30" y="113" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#666">Row 3</text><text x="30" y="143" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#666">Row 4</text><text x="30" y="173" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#666">Row 5</text></svg></div>
            `
        },
        // --- Screen 2: Building the Triangle ---
        {
            type: 'concept',
            title: "Building Pascal's Triangle",
            content: `
                <p>To construct the triangle, follow these rules:</p>
                <ol>
                    <li>Row 0 contains just the number 1.</li>
                    <li>Each subsequent row starts and ends with 1.</li>
                    <li>Every other entry is the sum of the two entries above it from the previous row.</li>
                </ol>
                <p>For example, in row 4:</p>
                <ul>
                    <li>The entry 4 comes from \\(1 + 3\\)</li>
                    <li>The entry 6 comes from \\(3 + 3\\)</li>
                </ul>
                <div class="lesson-box">
                    <strong>Addition rule:</strong> The entry in row \\(n\\), position \\(r\\) equals the sum of the entries at positions \\(r-1\\) and \\(r\\) in row \\(n-1\\).
                </div>
            `
        },
        // --- Screen 3: Symmetry ---
        {
            type: 'concept',
            title: "Symmetry in Pascal's Triangle",
            content: `
                <p>Pascal's Triangle is <strong>symmetric</strong> - it reads the same from left to right as from right to left.</p>
                <p>For example, row 5 is:</p>
                <p style="text-align:center; font-size:1.1em;">1 &nbsp; 5 &nbsp; 10 &nbsp; 10 &nbsp; 5 &nbsp; 1</p>
                <p>This symmetry means the \\(r\\)-th entry from the left equals the \\(r\\)-th entry from the right.</p>
                <div class="lesson-box">
                    <strong>Symmetry property:</strong> The entries in each row form a palindrome. This will connect to an important property of combinations.
                </div>
            `
        },
        // --- Screen 4: Factorials ---
        {
            type: 'concept',
            title: "Factorials",
            content: `
                <p>Before we define combinations, we need <strong>factorials</strong>.</p>
                <p>The factorial of a positive integer \\(n\\), written \\(n!\\), is the product of all positive integers up to \\(n\\):</p>
                \\[n! = n \\times (n-1) \\times (n-2) \\times \\cdots \\times 2 \\times 1\\]
                <p>For example:</p>
                <ul>
                    <li>\\(5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120\\)</li>
                    <li>\\(3! = 3 \\times 2 \\times 1 = 6\\)</li>
                    <li>\\(1! = 1\\)</li>
                </ul>
                <div class="lesson-box">
                    <strong>Special case:</strong> By convention, \\(0! = 1\\). This is essential for the combinations formula to work correctly.
                </div>
            `
        },
        // --- Screen 5: The nCr Formula ---
        {
            type: 'concept',
            title: "The Combinations Formula: \\(\\binom{n}{r}\\)",
            content: `
                <p>The number of ways to choose \\(r\\) items from \\(n\\) items (without regard to order) is called a <strong>combination</strong>, written \\(\\binom{n}{r}\\) or \\({}^nC_r\\).</p>
                <div class="lesson-box">
                    <strong>Combinations formula:</strong>
                    \\[\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\]
                    where \\(0 \\leq r \\leq n\\).
                </div>
                <p>This formula counts the number of subsets of size \\(r\\) from a set of size \\(n\\).</p>
            `
        },
        // --- Screen 6: Calculating nCr ---
        {
            type: 'concept',
            title: "Calculating \\(\\binom{n}{r}\\) Step by Step",
            content: `
                <p>To calculate \\(\\binom{n}{r}\\), substitute into the formula and simplify.</p>
                <p>For \\(\\binom{6}{2}\\):</p>
                \\[\\binom{6}{2} = \\frac{6!}{2! \\times 4!} = \\frac{6 \\times 5 \\times 4!}{2 \\times 1 \\times 4!} = \\frac{6 \\times 5}{2} = 15\\]
                <p>Notice how the \\(4!\\) cancels. In practice, you only need to multiply the top \\(r\\) terms of \\(n!\\) and divide by \\(r!\\).</p>
                <div class="lesson-box">
                    <strong>Shortcut:</strong> \\(\\binom{n}{r} = \\frac{n(n-1)(n-2)\\cdots(n-r+1)}{r!}\\) - multiply \\(r\\) descending terms from \\(n\\), then divide by \\(r!\\).
                </div>
            `
        },
        // --- Screen 7: Example - Calculate 5C2 ---
        {
            type: 'example',
            title: "Example: Calculate \\(\\binom{5}{2}\\)",
            problem: "Calculate \\(\\binom{5}{2}\\) using the formula.",
            steps: [
                { text: "Write the formula: \\(\\binom{5}{2} = \\frac{5!}{2!(5-2)!} = \\frac{5!}{2! \\times 3!}\\)" },
                { text: "Expand the factorials: \\(= \\frac{5 \\times 4 \\times 3!}{2 \\times 1 \\times 3!}\\)" },
                { text: "Cancel \\(3!\\): \\(= \\frac{5 \\times 4}{2}\\)" },
                { text: "Simplify: \\(= \\frac{20}{2} = 10\\)" },
                { text: "So \\(\\binom{5}{2} = 10\\). This matches the entry in row 5, position 2 of Pascal's Triangle." }
            ]
        },
        // --- Screen 8: Connection to Pascal's Triangle ---
        {
            type: 'concept',
            title: "Combinations and Pascal's Triangle",
            content: `
                <p>The entries of Pascal's Triangle <em>are</em> combinations. The entry in row \\(n\\), position \\(r\\) (counting from 0) is \\(\\binom{n}{r}\\).</p>
                <div style="text-align:center; font-size:1em; line-height:2.2;">
                    <div>\\(\\binom{0}{0}\\)</div>
                    <div>\\(\\binom{1}{0}\\) &nbsp; \\(\\binom{1}{1}\\)</div>
                    <div>\\(\\binom{2}{0}\\) &nbsp; \\(\\binom{2}{1}\\) &nbsp; \\(\\binom{2}{2}\\)</div>
                    <div>\\(\\binom{3}{0}\\) &nbsp; \\(\\binom{3}{1}\\) &nbsp; \\(\\binom{3}{2}\\) &nbsp; \\(\\binom{3}{3}\\)</div>
                    <div>\\(\\binom{4}{0}\\) &nbsp; \\(\\binom{4}{1}\\) &nbsp; \\(\\binom{4}{2}\\) &nbsp; \\(\\binom{4}{3}\\) &nbsp; \\(\\binom{4}{4}\\)</div>
                </div>
                <div class="lesson-box">
                    <strong>Key connection:</strong> Row \\(n\\) of Pascal's Triangle gives the values \\(\\binom{n}{0}, \\binom{n}{1}, \\binom{n}{2}, \\ldots, \\binom{n}{n}\\).
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><defs><marker id="pascal-ncr-arrow" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#feca57" stroke-width="1"/></marker></defs><text x="160" y="16" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">Row 4 of Pascal's Triangle</text><circle cx="80" cy="45" r="14" fill="none" stroke="#54a0ff" stroke-width="1.2"/><text x="80" y="50" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">1</text><circle cx="120" cy="45" r="14" fill="none" stroke="#54a0ff" stroke-width="1.2"/><text x="120" y="50" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">4</text><circle cx="160" cy="45" r="16" fill="#feca57" fill-opacity="0.2" stroke="#feca57" stroke-width="2"/><text x="160" y="50" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57" font-weight="bold">6</text><circle cx="200" cy="45" r="14" fill="none" stroke="#54a0ff" stroke-width="1.2"/><text x="200" y="50" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">4</text><circle cx="240" cy="45" r="14" fill="none" stroke="#54a0ff" stroke-width="1.2"/><text x="240" y="50" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">1</text><text x="80" y="78" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#666">pos 0</text><text x="120" y="78" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#666">pos 1</text><text x="160" y="78" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#feca57" font-weight="bold">pos 2</text><text x="200" y="78" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#666">pos 3</text><text x="240" y="78" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="10" fill="#666">pos 4</text><line x1="160" y1="62" x2="160" y2="95" stroke="#feca57" stroke-width="1.2" stroke-dasharray="3,2"/><rect x="100" y="100" width="120" height="45" rx="6" fill="none" stroke="#feca57" stroke-width="1.5"/><text x="160" y="120" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="14" fill="#feca57">C(4, 2) = 6</text><text x="160" y="138" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">row n = 4, position r = 2</text><text x="160" y="170" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">4! / (2! x 2!) = 24 / 4 = 6</text><text x="160" y="192" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#00e5c7">Each entry = C(n, r) = n! / (r!(n-r)!)</text></svg></div>
            `
        },
        // --- Screen 9: Properties of nCr ---
        {
            type: 'concept',
            title: "Properties of \\(\\binom{n}{r}\\)",
            content: `
                <p>Combinations have several important properties:</p>
                <ul>
                    <li><strong>Boundary values:</strong> \\(\\binom{n}{0} = 1\\) and \\(\\binom{n}{n} = 1\\)</li>
                    <li><strong>Symmetry:</strong> \\(\\binom{n}{r} = \\binom{n}{n-r}\\)</li>
                    <li><strong>Pascal's rule:</strong> \\(\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}\\)</li>
                </ul>
                <div class="lesson-box">
                    <strong>Symmetry explained:</strong> \\(\\binom{n}{r} = \\binom{n}{n-r}\\) because choosing \\(r\\) items to include is the same as choosing \\(n-r\\) items to exclude. This is why Pascal's Triangle is symmetric.
                </div>
            `
        },
        // --- Screen 10: Pascal's Rule ---
        {
            type: 'concept',
            title: "Pascal's Rule (Addition Formula)",
            content: `
                <p>Pascal's rule states:</p>
                \\[\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}\\]
                <p>This is exactly the rule we used to build Pascal's Triangle - each entry is the sum of the two above it.</p>
                <p>For example:</p>
                \\[\\binom{5}{2} = \\binom{4}{1} + \\binom{4}{2} = 4 + 6 = 10 \\checkmark\\]
                <div class="lesson-box">
                    <strong>Why it works:</strong> Pascal's rule can be proved algebraically using the factorial formula. It provides a recursive way to compute combinations without needing factorials.
                </div>
            `
        },
        // --- Screen 11: Example - Row 6 ---
        {
            type: 'example',
            title: "Example: Write Row 6 of Pascal's Triangle",
            problem: "Find all entries in row 6 of Pascal's Triangle.",
            steps: [
                { text: "Row 6 has 7 entries: \\(\\binom{6}{0}, \\binom{6}{1}, \\binom{6}{2}, \\binom{6}{3}, \\binom{6}{4}, \\binom{6}{5}, \\binom{6}{6}\\)" },
                { text: "\\(\\binom{6}{0} = 1\\) and \\(\\binom{6}{6} = 1\\)" },
                { text: "\\(\\binom{6}{1} = 6\\) and by symmetry \\(\\binom{6}{5} = 6\\)" },
                { text: "\\(\\binom{6}{2} = \\frac{6 \\times 5}{2!} = 15\\) and by symmetry \\(\\binom{6}{4} = 15\\)" },
                { text: "\\(\\binom{6}{3} = \\frac{6 \\times 5 \\times 4}{3!} = \\frac{120}{6} = 20\\)" },
                { text: "Row 6: <strong>1, 6, 15, 20, 15, 6, 1</strong>" }
            ]
        },
        // --- Screen 12: Practice - Calculate nCr ---
        {
            type: 'practice',
            generate: function() {
                var pairs = [
                    [7, 2, 21], [7, 3, 35], [8, 2, 28], [8, 3, 56], [8, 5, 56],
                    [9, 2, 36], [9, 4, 126], [10, 3, 120], [10, 2, 45], [6, 3, 20],
                    [10, 4, 210], [9, 3, 84], [7, 4, 35], [11, 2, 55], [12, 3, 220]
                ];
                var pick = pairs[Math.floor(Math.random() * pairs.length)];
                var n = pick[0], r = pick[1], ans = pick[2];
                var opts = [ans];
                while (opts.length < 4) {
                    var wrong = ans + Math.floor(Math.random() * 41) - 20;
                    if (wrong > 0 && opts.indexOf(wrong) === -1) opts.push(wrong);
                }
                opts.sort(function(a, b) { return a - b; });
                return {
                    type: 'mc',
                    latex: '\\text{Calculate } \\binom{' + n + '}{' + r + '}',
                    options: opts.map(String),
                    correctIdx: opts.indexOf(ans),
                    explain: '\\(\\binom{' + n + '}{' + r + '} = \\frac{' + n + '!}{' + r + '!' + (n - r) + '!} = ' + ans + '\\)'
                };
            }
        },
        // --- Screen 13: Practice - Identify Triangle Entry ---
        {
            type: 'practice',
            generate: function() {
                var rows = [
                    [3, [1, 3, 3, 1]],
                    [4, [1, 4, 6, 4, 1]],
                    [5, [1, 5, 10, 10, 5, 1]],
                    [6, [1, 6, 15, 20, 15, 6, 1]],
                    [7, [1, 7, 21, 35, 35, 21, 7, 1]]
                ];
                var pick = rows[Math.floor(Math.random() * rows.length)];
                var n = pick[0], row = pick[1];
                var r = Math.floor(Math.random() * (row.length - 2)) + 1;
                var ans = row[r];
                var opts = [ans];
                while (opts.length < 4) {
                    var wrong = ans + Math.floor(Math.random() * 21) - 10;
                    if (wrong > 0 && opts.indexOf(wrong) === -1) opts.push(wrong);
                }
                opts.sort(function(a, b) { return a - b; });
                return {
                    type: 'mc',
                    latex: '\\text{What is the entry at position } ' + r + ' \\text{ in row } ' + n + ' \\text{ of Pascal\\'s Triangle?}',
                    options: opts.map(String),
                    correctIdx: opts.indexOf(ans),
                    explain: '\\text{Row } ' + n + ' \\text{, position } ' + r + ' = \\binom{' + n + '}{' + r + '} = ' + ans
                };
            }
        },
        // --- Screen 14: Practice - Symmetry ---
        {
            type: 'practice',
            generate: function() {
                var pairs = [
                    [8, 3, 8, 5], [9, 2, 9, 7], [10, 4, 10, 6], [7, 1, 7, 6],
                    [11, 3, 11, 8], [12, 5, 12, 7], [6, 2, 6, 4]
                ];
                var pick = pairs[Math.floor(Math.random() * pairs.length)];
                var n = pick[0], r = pick[1], ans_n = pick[2], ans_r = pick[3];
                return {
                    type: 'mc',
                    latex: '\\text{By the symmetry property, } \\binom{' + n + '}{' + r + '} = \\binom{' + n + '}{?}',
                    options: [String(ans_r - 2), String(ans_r - 1), String(ans_r), String(ans_r + 1)],
                    correctIdx: 2,
                    explain: '\\text{By symmetry, } \\binom{' + n + '}{' + r + '} = \\binom{' + n + '}{' + (n - r) + '} \\text{ since } ' + r + ' + ' + (n - r) + ' = ' + n
                };
            }
        },
        // --- Screen 15: Practice - Pascal's Rule ---
        {
            type: 'practice',
            generate: function() {
                var cases = [
                    [5, 2, 4, 6, 10], [6, 3, 10, 10, 20], [7, 2, 6, 15, 21],
                    [7, 3, 15, 20, 35], [8, 3, 21, 35, 56], [6, 2, 5, 10, 15]
                ];
                var pick = cases[Math.floor(Math.random() * cases.length)];
                var n = pick[0], r = pick[1], left = pick[2], right = pick[3], ans = pick[4];
                var opts = [ans];
                while (opts.length < 4) {
                    var wrong = ans + Math.floor(Math.random() * 21) - 10;
                    if (wrong > 0 && opts.indexOf(wrong) === -1) opts.push(wrong);
                }
                opts.sort(function(a, b) { return a - b; });
                return {
                    type: 'mc',
                    latex: '\\text{Using Pascal\\'s rule: } \\binom{' + (n-1) + '}{' + (r-1) + '} + \\binom{' + (n-1) + '}{' + r + '} = ?',
                    options: opts.map(String),
                    correctIdx: opts.indexOf(ans),
                    explain: '\\binom{' + (n-1) + '}{' + (r-1) + '} + \\binom{' + (n-1) + '}{' + r + '} = ' + left + ' + ' + right + ' = ' + ans + ' = \\binom{' + n + '}{' + r + '}'
                };
            }
        },
        // --- Screen 16: Summary ---
        {
            type: 'summary',
            title: "Pascal's Triangle & Combinations - Summary",
            content: '<p>You have learned how Pascal\'s Triangle is constructed and how it connects to the combinations formula.</p>',
            points: [
                "Pascal's Triangle is built by adding pairs of entries from the previous row",
                "The entry in row n, position r equals \\(\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\)",
                "Symmetry: \\(\\binom{n}{r} = \\binom{n}{n-r}\\)",
                "Pascal's rule: \\(\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}\\)",
                "Boundary values: \\(\\binom{n}{0} = \\binom{n}{n} = 1\\)"
            ]
        }
    ]
};
