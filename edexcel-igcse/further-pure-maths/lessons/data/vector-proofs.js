window.CURRENT_LESSON = {
    title: "Geometric Proofs with Vectors",
    subtitle: "Using vectors to prove geometric properties",
    screens: [
        // --- Screen 1: Parallel Vectors ---
        {
            type: 'concept',
            title: "Parallel Vectors",
            content: `
                <p>Two vectors are <strong>parallel</strong> if one is a scalar multiple of the other.</p>
                <p>If \\(\\mathbf{b} = k\\mathbf{a}\\) for some scalar \\(k\\), then \\(\\mathbf{a}\\) and \\(\\mathbf{b}\\) are parallel.</p>
                <p>For example:</p>
                <ul>
                    <li>\\(\\begin{pmatrix} 2 \\\\ 6 \\end{pmatrix}\\) and \\(\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}\\) are parallel (\\(k = 2\\))</li>
                    <li>\\(\\begin{pmatrix} 4 \\\\ -2 \\end{pmatrix}\\) and \\(\\begin{pmatrix} -6 \\\\ 3 \\end{pmatrix}\\) are parallel (\\(k = -\\frac{2}{3}\\))</li>
                </ul>
                <div style="text-align:center;margin:20px 0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" width="320" height="240"><defs><marker id="arrow9a" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#00e5c7"/></marker><marker id="arrow9b" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#54a0ff"/></marker></defs><line x1="30" y1="160" x2="120" y2="100" stroke="#00e5c7" stroke-width="2.5" marker-end="url(#arrow9a)"/><circle cx="30" cy="160" r="3" fill="#00e5c7"/><text x="55" y="116" style="font-family:'Space Grotesk',sans-serif;font-size:16px;fill:#00e5c7;font-weight:bold">a</text><line x1="170" y1="180" x2="290" y2="100" stroke="#54a0ff" stroke-width="2.5" marker-end="url(#arrow9b)"/><circle cx="170" cy="180" r="3" fill="#54a0ff"/><text x="220" y="120" style="font-family:'Space Grotesk',sans-serif;font-size:16px;fill:#54a0ff;font-weight:bold">2a</text><text x="60" y="200" style="font-family:'Space Grotesk',sans-serif;font-size:13px;fill:#888">Same direction,</text><text x="60" y="218" style="font-family:'Space Grotesk',sans-serif;font-size:13px;fill:#888">different lengths</text><text x="55" y="50" style="font-family:'Space Grotesk',sans-serif;font-size:14px;fill:#e0e0e0">b = 2a  -  parallel</text></svg></div>
                <div class="lesson-box">
                    <strong>Test for parallel vectors:</strong> \\(\\begin{pmatrix} a \\\\ b \\end{pmatrix}\\) is parallel to \\(\\begin{pmatrix} c \\\\ d \\end{pmatrix}\\) if and only if \\(ad = bc\\) (the cross product is zero).
                </div>
            `
        },
        // --- Screen 2: Collinear Points ---
        {
            type: 'concept',
            title: "Collinear Points",
            content: `
                <p>Three points \\(A\\), \\(B\\), \\(C\\) are <strong>collinear</strong> (lie on the same straight line) if \\(\\overrightarrow{AB}\\) is parallel to \\(\\overrightarrow{AC}\\).</p>
                <p>Equivalently, \\(\\overrightarrow{AC} = k \\cdot \\overrightarrow{AB}\\) for some scalar \\(k\\).</p>
                <div class="lesson-box">
                    <strong>To prove collinearity:</strong>
                    <ol>
                        <li>Find \\(\\overrightarrow{AB}\\) and \\(\\overrightarrow{AC}\\) (or any two vectors connecting the three points)</li>
                        <li>Show that one is a scalar multiple of the other</li>
                        <li>Since they share a common point, the points must lie on the same line</li>
                    </ol>
                </div>
            `
        },
        // --- Screen 3: Example - Proving Parallel ---
        {
            type: 'example',
            title: "Example: Proving Vectors are Parallel",
            problem: "Show that \\(\\mathbf{p} = \\begin{pmatrix} 4 \\\\ -6 \\end{pmatrix}\\) and \\(\\mathbf{q} = \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}\\) are parallel.",
            steps: [
                { text: "Check if one is a scalar multiple of the other." },
                { text: "Compare the ratios: \\(\\frac{4}{-2} = -2\\) and \\(\\frac{-6}{3} = -2\\)" },
                { text: "Since both ratios are equal to \\(-2\\), we have \\(\\mathbf{p} = -2\\mathbf{q}\\)." },
                { text: "Therefore \\(\\mathbf{p}\\) and \\(\\mathbf{q}\\) are parallel." },
                { text: "Alternatively: \\(ad = 4 \\times 3 = 12\\) and \\(bc = (-6) \\times (-2) = 12\\). Since \\(ad = bc\\), they are parallel." }
            ]
        },
        // --- Screen 4: Dividing a Line Segment in a Ratio ---
        {
            type: 'concept',
            title: "Dividing a Line in a Given Ratio",
            content: `
                <p>If point \\(P\\) divides \\(AB\\) in the ratio \\(m : n\\), then:</p>
                \\[\\mathbf{p} = \\frac{n\\mathbf{a} + m\\mathbf{b}}{m + n}\\]
                <p>Or equivalently:</p>
                \\[\\overrightarrow{AP} = \\frac{m}{m+n} \\overrightarrow{AB}\\]
                <p>so \\(\\mathbf{p} = \\mathbf{a} + \\frac{m}{m+n}(\\mathbf{b} - \\mathbf{a})\\).</p>
                <div style="text-align:center;margin:20px 0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" width="320" height="240"><defs><marker id="arrow10a" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#00e5c7"/></marker><marker id="arrow10b" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#54a0ff"/></marker></defs><circle cx="40" cy="200" r="4" fill="#e0e0e0"/><text x="24" y="220" style="font-family:'Space Grotesk',sans-serif;font-size:14px;fill:#e0e0e0;font-weight:bold">O</text><circle cx="60" cy="140" r="5" fill="#00e5c7"/><text x="34" y="130" style="font-family:'Space Grotesk',sans-serif;font-size:14px;fill:#00e5c7;font-weight:bold">A</text><circle cx="280" cy="100" r="5" fill="#54a0ff"/><text x="270" y="88" style="font-family:'Space Grotesk',sans-serif;font-size:14px;fill:#54a0ff;font-weight:bold">B</text><line x1="60" y1="140" x2="280" y2="100" stroke="#e0e0e0" stroke-width="2"/><circle cx="206" cy="113" r="6" fill="#feca57"/><text x="195" y="104" style="font-family:'Space Grotesk',sans-serif;font-size:14px;fill:#feca57;font-weight:bold">P</text><line x1="40" y1="200" x2="55" y2="145" stroke="#00e5c7" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrow10a)"/><line x1="40" y1="200" x2="274" y2="105" stroke="#54a0ff" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrow10b)"/><text x="28" y="168" style="font-family:'Space Grotesk',sans-serif;font-size:11px;fill:#00e5c7">a</text><text x="150" y="168" style="font-family:'Space Grotesk',sans-serif;font-size:11px;fill:#54a0ff">b</text><text x="110" y="115" style="font-family:'Space Grotesk',sans-serif;font-size:13px;fill:#feca57">2</text><text x="235" y="100" style="font-family:'Space Grotesk',sans-serif;font-size:13px;fill:#feca57">1</text><text x="100" y="50" style="font-family:'Space Grotesk',sans-serif;font-size:13px;fill:#e0e0e0">P divides AB in ratio 2 : 1</text></svg></div>
                <div class="lesson-box">
                    <strong>Special case:</strong> When \\(m = n\\) (ratio \\(1:1\\)), \\(P\\) is the midpoint and \\(\\mathbf{p} = \\frac{\\mathbf{a} + \\mathbf{b}}{2}\\).
                </div>
            `
        },
        // --- Screen 5: Example - Dividing in a Ratio ---
        {
            type: 'example',
            title: "Example: Dividing \\(AB\\) in Ratio \\(2:1\\)",
            problem: "Find the position vector of the point \\(P\\) that divides \\(AB\\) in the ratio \\(2:1\\), where \\(A = (1, 3)\\) and \\(B = (7, 9)\\).",
            steps: [
                { text: "\\(\\mathbf{a} = \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}\\), \\(\\mathbf{b} = \\begin{pmatrix} 7 \\\\ 9 \\end{pmatrix}\\), ratio \\(m:n = 2:1\\)" },
                { text: "\\(\\mathbf{p} = \\mathbf{a} + \\frac{m}{m+n}(\\mathbf{b} - \\mathbf{a}) = \\mathbf{a} + \\frac{2}{3}(\\mathbf{b} - \\mathbf{a})\\)" },
                { text: "\\(\\mathbf{b} - \\mathbf{a} = \\begin{pmatrix} 6 \\\\ 6 \\end{pmatrix}\\)" },
                { text: "\\(\\mathbf{p} = \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix} + \\frac{2}{3}\\begin{pmatrix} 6 \\\\ 6 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix} + \\begin{pmatrix} 4 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 7 \\end{pmatrix}\\)" },
                { text: "So \\(P = (5, 7)\\)." }
            ]
        },
        // --- Screen 6: Proving a Parallelogram ---
        {
            type: 'concept',
            title: "Proving a Shape is a Parallelogram",
            content: `
                <p>A quadrilateral \\(ABCD\\) is a <strong>parallelogram</strong> if opposite sides are parallel and equal.</p>
                <p>Using vectors, show that:</p>
                \\[\\overrightarrow{AB} = \\overrightarrow{DC}\\]
                <p>This proves that \\(AB\\) is parallel to \\(DC\\) and they have equal length.</p>
                <div class="lesson-box">
                    <strong>Methods to prove a parallelogram:</strong>
                    <ul>
                        <li>Show \\(\\overrightarrow{AB} = \\overrightarrow{DC}\\) (one pair of opposite sides equal)</li>
                        <li>Or show \\(\\overrightarrow{AB} = \\overrightarrow{DC}\\) and \\(\\overrightarrow{AD} = \\overrightarrow{BC}\\) (both pairs)</li>
                        <li>Or show the diagonals bisect each other</li>
                    </ul>
                </div>
            `
        },
        // --- Screen 7: Proving a Parallelogram Example ---
        {
            type: 'concept',
            title: "Parallelogram Proof - Worked Example",
            content: `
                <p>Show that \\(A(1,2)\\), \\(B(4,3)\\), \\(C(5,6)\\), \\(D(2,5)\\) form a parallelogram.</p>
                <p><strong>Find the side vectors:</strong></p>
                \\[\\overrightarrow{AB} = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}, \\quad \\overrightarrow{DC} = \\begin{pmatrix} 5-2 \\\\ 6-5 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}\\]
                <p>Since \\(\\overrightarrow{AB} = \\overrightarrow{DC}\\), sides \\(AB\\) and \\(DC\\) are parallel and equal in length.</p>
                <div class="lesson-box">
                    <strong>Conclusion:</strong> Since one pair of opposite sides is both parallel and equal, \\(ABCD\\) is a parallelogram.
                </div>
            `
        },
        // --- Screen 8: The Midpoint Theorem ---
        {
            type: 'concept',
            title: "The Midpoint Theorem",
            content: `
                <p>The <strong>midpoint theorem</strong> states: the line segment connecting the midpoints of two sides of a triangle is parallel to the third side and half its length.</p>
                <p><strong>Proof using vectors:</strong></p>
                <p>Let \\(M\\) be the midpoint of \\(OA\\) and \\(N\\) be the midpoint of \\(OB\\) in triangle \\(OAB\\).</p>
                \\[\\mathbf{m} = \\frac{1}{2}\\mathbf{a}, \\quad \\mathbf{n} = \\frac{1}{2}\\mathbf{b}\\]
                \\[\\overrightarrow{MN} = \\mathbf{n} - \\mathbf{m} = \\frac{1}{2}\\mathbf{b} - \\frac{1}{2}\\mathbf{a} = \\frac{1}{2}(\\mathbf{b} - \\mathbf{a}) = \\frac{1}{2}\\overrightarrow{AB}\\]
                <div class="lesson-box">
                    <strong>Result:</strong> \\(\\overrightarrow{MN} = \\frac{1}{2}\\overrightarrow{AB}\\), so \\(MN\\) is parallel to \\(AB\\) and half its length.
                </div>
            `
        },
        // --- Screen 9: Strategy for Vector Proofs ---
        {
            type: 'concept',
            title: "Strategy for Vector Proofs",
            content: `
                <p>When tackling geometric proofs with vectors:</p>
                <ol>
                    <li><strong>Set up:</strong> Define position vectors (e.g., let \\(\\overrightarrow{OA} = \\mathbf{a}\\), \\(\\overrightarrow{OB} = \\mathbf{b}\\))</li>
                    <li><strong>Express:</strong> Write all relevant vectors in terms of \\(\\mathbf{a}\\) and \\(\\mathbf{b}\\)</li>
                    <li><strong>Compare:</strong> Show the required relationship (parallel, equal, ratio)</li>
                </ol>
                <div class="lesson-box">
                    <strong>Common conclusions:</strong>
                    <ul>
                        <li>\\(\\mathbf{p} = k\\mathbf{q}\\) means \\(\\mathbf{p}\\) and \\(\\mathbf{q}\\) are parallel</li>
                        <li>\\(\\mathbf{p} = \\mathbf{q}\\) means equal length and same direction</li>
                        <li>\\(\\mathbf{p} = k\\mathbf{q}\\) with shared point means collinear</li>
                    </ul>
                </div>
            `
        },
        // --- Screen 10: Practice - Identify Parallel Vectors ---
        {
            type: 'practice',
            generate: function() {
                var bases = [
                    { x: 2, y: 3 }, { x: 1, y: 4 }, { x: 3, y: -1 },
                    { x: -2, y: 5 }, { x: 4, y: 1 }, { x: 1, y: -2 }
                ];
                var base = bases[Math.floor(Math.random() * bases.length)];
                var k = [2, 3, -2, -1][Math.floor(Math.random() * 4)];
                var px = k * base.x, py = k * base.y;
                // Correct parallel vector
                var correct = '\\begin{pmatrix} ' + px + ' \\\\ ' + py + ' \\end{pmatrix}';
                // Wrong options - not parallel
                var w1 = '\\begin{pmatrix} ' + px + ' \\\\ ' + (py + 1) + ' \\end{pmatrix}';
                var w2 = '\\begin{pmatrix} ' + (px + 1) + ' \\\\ ' + py + ' \\end{pmatrix}';
                var w3 = '\\begin{pmatrix} ' + base.y + ' \\\\ ' + base.x + ' \\end{pmatrix}';
                var opts = [correct, w1, w2, w3];
                // Shuffle
                var correctIdx = 0;
                for (var i = opts.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = opts[i]; opts[i] = opts[j]; opts[j] = tmp;
                    if (j === correctIdx) correctIdx = i;
                    else if (i === correctIdx) correctIdx = j;
                }
                return {
                    type: 'mc',
                    latex: '\\text{Which vector is parallel to } \\begin{pmatrix} ' + base.x + ' \\\\ ' + base.y + ' \\end{pmatrix}?',
                    options: opts.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: '\\begin{pmatrix} ' + px + ' \\\\ ' + py + ' \\end{pmatrix} = ' + k + '\\begin{pmatrix} ' + base.x + ' \\\\ ' + base.y + ' \\end{pmatrix} \\text{, so they are parallel.}'
                };
            }
        },
        // --- Screen 11: Practice - Collinearity ---
        {
            type: 'practice',
            generate: function() {
                var a1 = Math.floor(Math.random() * 5) + 1;
                var a2 = Math.floor(Math.random() * 5) + 1;
                var dx = Math.floor(Math.random() * 4) + 1;
                var dy = Math.floor(Math.random() * 5) - 2;
                // B = A + (dx, dy), C = A + k*(dx, dy)
                var k = Math.floor(Math.random() * 3) + 2;
                var b1 = a1 + dx, b2 = a2 + dy;
                var c1 = a1 + k * dx, c2 = a2 + k * dy;
                return {
                    type: 'mc',
                    latex: '\\text{Are } A(' + a1 + ',' + a2 + '), B(' + b1 + ',' + b2 + '), C(' + c1 + ',' + c2 + ') \\text{ collinear?}',
                    options: [
                        'Yes, because \\(\\overrightarrow{AC} = ' + k + '\\overrightarrow{AB}\\)',
                        'No, the vectors are not parallel',
                        'Yes, because \\(\\overrightarrow{AB} = \\overrightarrow{BC}\\)',
                        'Cannot be determined'
                    ],
                    correctIdx: 0,
                    explain: '\\overrightarrow{AB} = \\begin{pmatrix} ' + dx + ' \\\\ ' + dy + ' \\end{pmatrix}, \\overrightarrow{AC} = \\begin{pmatrix} ' + (k*dx) + ' \\\\ ' + (k*dy) + ' \\end{pmatrix} = ' + k + '\\overrightarrow{AB}. \\text{ Parallel with shared point, so collinear.}'
                };
            }
        },
        // --- Screen 12: Practice - Dividing in a Ratio ---
        {
            type: 'practice',
            generate: function() {
                var ratios = [
                    { m: 1, n: 2 }, { m: 2, n: 1 }, { m: 1, n: 3 }, { m: 3, n: 1 }, { m: 2, n: 3 }
                ];
                var pick = ratios[Math.floor(Math.random() * ratios.length)];
                var total = pick.m + pick.n;
                // Choose A and B so the arithmetic works out to integers
                var a1 = 0, a2 = 0;
                var b1 = total * (Math.floor(Math.random() * 3) + 1);
                var b2 = total * (Math.floor(Math.random() * 3) + 1);
                var px = a1 + (pick.m / total) * (b1 - a1);
                var py = a2 + (pick.m / total) * (b2 - a2);
                var ansStr = '(' + px + ', ' + py + ')';
                var opts = [
                    ansStr,
                    '(' + (px + 1) + ', ' + (py + 1) + ')',
                    '(' + (b1 - px) + ', ' + (b2 - py) + ')',
                    '(' + (px - 1) + ', ' + py + ')'
                ];
                var seen = {};
                for (var i = 0; i < opts.length; i++) {
                    if (seen[opts[i]]) {
                        opts[i] = '(' + (px + 2) + ', ' + (py - 1) + ')';
                    }
                    seen[opts[i]] = true;
                }
                return {
                    type: 'mc',
                    latex: '\\text{Point } P \\text{ divides } AB \\text{ in ratio } ' + pick.m + ':' + pick.n + '. \\\\ A = (' + a1 + ',' + a2 + '), B = (' + b1 + ',' + b2 + '). \\text{ Find } P.',
                    options: opts,
                    correctIdx: 0,
                    explain: 'P = A + \\frac{' + pick.m + '}{' + total + '}(B - A) = (' + px + ', ' + py + ')'
                };
            }
        },
        // --- Screen 13: Practice - Parallelogram Check ---
        {
            type: 'practice',
            generate: function() {
                var a1 = Math.floor(Math.random() * 4) + 1;
                var a2 = Math.floor(Math.random() * 4) + 1;
                var ab1 = Math.floor(Math.random() * 5) + 1;
                var ab2 = Math.floor(Math.random() * 5) - 2;
                var ad1 = Math.floor(Math.random() * 3) - 1;
                var ad2 = Math.floor(Math.random() * 5) + 1;
                // A, B = A + AB, C = A + AB + AD, D = A + AD
                var b1 = a1 + ab1, b2 = a2 + ab2;
                var d1 = a1 + ad1, d2 = a2 + ad2;
                var c1 = b1 + ad1, c2 = b2 + ad2;
                return {
                    type: 'mc',
                    latex: '\\text{Is } A(' + a1 + ',' + a2 + '), B(' + b1 + ',' + b2 + '), C(' + c1 + ',' + c2 + '), D(' + d1 + ',' + d2 + ') \\text{ a parallelogram?}',
                    options: [
                        'Yes, \\(\\overrightarrow{AB} = \\overrightarrow{DC}\\)',
                        'No, opposite sides are not equal',
                        'Yes, but only a rectangle',
                        'Cannot determine from coordinates'
                    ],
                    correctIdx: 0,
                    explain: '\\overrightarrow{AB} = \\begin{pmatrix} ' + ab1 + ' \\\\ ' + ab2 + ' \\end{pmatrix}, \\overrightarrow{DC} = \\begin{pmatrix} ' + (c1 - d1) + ' \\\\ ' + (c2 - d2) + ' \\end{pmatrix} = \\begin{pmatrix} ' + ab1 + ' \\\\ ' + ab2 + ' \\end{pmatrix}. \\text{ Equal, so ABCD is a parallelogram.}'
                };
            }
        },
        // --- Screen 14: Practice - Scalar Multiple ---
        {
            type: 'practice',
            generate: function() {
                var x = Math.floor(Math.random() * 5) + 1;
                var y = Math.floor(Math.random() * 7) - 3;
                var k = [2, 3, 4, 5, -2, -3][Math.floor(Math.random() * 6)];
                var px = k * x, py = k * y;
                return {
                    type: 'short',
                    latex: '\\text{If } \\begin{pmatrix} ' + px + ' \\\\ ' + py + ' \\end{pmatrix} = k \\begin{pmatrix} ' + x + ' \\\\ ' + y + ' \\end{pmatrix}, \\text{ find } k.',
                    answer: String(k),
                    explain: 'k = \\frac{' + px + '}{' + x + '} = ' + k + ' \\text{ (and } \\frac{' + py + '}{' + y + '} = ' + k + ' \\text{, confirming they are parallel)}'
                };
            }
        },
        // --- Screen 15: Summary ---
        {
            type: 'summary',
            title: "Geometric Proofs with Vectors - Summary",
            content: '<p>You can now use vectors to prove geometric properties about parallel lines, collinear points, and shapes.</p>',
            points: [
                "Parallel vectors: \\(\\mathbf{b} = k\\mathbf{a}\\) for some scalar \\(k\\)",
                "Test: \\(\\begin{pmatrix} a \\\\ b \\end{pmatrix} \\parallel \\begin{pmatrix} c \\\\ d \\end{pmatrix}\\) if \\(ad = bc\\)",
                "Collinear points: show two connecting vectors are parallel (and share a point)",
                "Dividing \\(AB\\) in ratio \\(m:n\\): \\(\\mathbf{p} = \\mathbf{a} + \\frac{m}{m+n}(\\mathbf{b} - \\mathbf{a})\\)",
                "Parallelogram: show one pair of opposite sides is equal (\\(\\overrightarrow{AB} = \\overrightarrow{DC}\\))",
                "Midpoint theorem: line joining midpoints of two sides is parallel to and half the length of the third side"
            ]
        }
    ]
};
