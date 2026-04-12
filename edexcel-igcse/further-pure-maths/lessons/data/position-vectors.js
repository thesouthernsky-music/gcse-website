window.CURRENT_LESSON = {
    title: "Position Vectors & Magnitude",
    subtitle: "Locating points and measuring vector length",
    screens: [
        // --- Screen 1: Position Vectors ---
        {
            type: 'concept',
            title: "Position Vectors",
            content: `
                <p>The <strong>position vector</strong> of a point \\(A\\) is the vector from the origin \\(O\\) to \\(A\\).</p>
                <p>If \\(A\\) has coordinates \\((a_1, a_2)\\), then the position vector of \\(A\\) is:</p>
                \\[\\overrightarrow{OA} = \\mathbf{a} = \\begin{pmatrix} a_1 \\\\ a_2 \\end{pmatrix}\\]
                <div style="text-align:center;margin:20px 0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" width="320" height="240"><defs><marker id="arrow6" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#00e5c7"/></marker></defs><line x1="40" y1="20" x2="40" y2="220" stroke="#333" stroke-width="0.5"/><line x1="20" y1="200" x2="300" y2="200" stroke="#333" stroke-width="0.5"/><line x1="40" y1="200" x2="40" y2="20" stroke="#e0e0e0" stroke-width="1.5"/><line x1="40" y1="200" x2="300" y2="200" stroke="#e0e0e0" stroke-width="1.5"/><line x1="100" y1="195" x2="100" y2="205" stroke="#e0e0e0" stroke-width="1"/><line x1="160" y1="195" x2="160" y2="205" stroke="#e0e0e0" stroke-width="1"/><line x1="220" y1="195" x2="220" y2="205" stroke="#e0e0e0" stroke-width="1"/><line x1="35" y1="140" x2="45" y2="140" stroke="#e0e0e0" stroke-width="1"/><line x1="35" y1="80" x2="45" y2="80" stroke="#e0e0e0" stroke-width="1"/><text x="96" y="218" style="font-family:'Space Grotesk',sans-serif;font-size:12px;fill:#e0e0e0">1</text><text x="156" y="218" style="font-family:'Space Grotesk',sans-serif;font-size:12px;fill:#e0e0e0">2</text><text x="216" y="218" style="font-family:'Space Grotesk',sans-serif;font-size:12px;fill:#e0e0e0">3</text><text x="20" y="144" style="font-family:'Space Grotesk',sans-serif;font-size:12px;fill:#e0e0e0">1</text><text x="20" y="84" style="font-family:'Space Grotesk',sans-serif;font-size:12px;fill:#e0e0e0">2</text><circle cx="40" cy="200" r="4" fill="#e0e0e0"/><text x="26" y="212" style="font-family:'Space Grotesk',sans-serif;font-size:14px;fill:#e0e0e0;font-weight:bold">O</text><line x1="40" y1="200" x2="213" y2="83" stroke="#00e5c7" stroke-width="2.5" marker-end="url(#arrow6)"/><circle cx="220" cy="80" r="5" fill="#00e5c7"/><text x="228" y="75" style="font-family:'Space Grotesk',sans-serif;font-size:14px;fill:#00e5c7;font-weight:bold">A (3, 2)</text><text x="100" y="130" style="font-family:'Space Grotesk',sans-serif;font-size:14px;fill:#00e5c7">OA</text></svg></div>
                <div class="lesson-box">
                    <strong>Key idea:</strong> The position vector of a point is simply its coordinates written as a column vector. The point \\((3, 5)\\) has position vector \\(\\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}\\).
                </div>
            `
        },
        // --- Screen 2: Vector Between Two Points ---
        {
            type: 'concept',
            title: "The Vector \\(\\overrightarrow{AB}\\)",
            content: `
                <p>The vector from point \\(A\\) to point \\(B\\) is found by subtracting their position vectors:</p>
                \\[\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}\\]
                <p>If \\(A = (a_1, a_2)\\) and \\(B = (b_1, b_2)\\), then:</p>
                \\[\\overrightarrow{AB} = \\begin{pmatrix} b_1 - a_1 \\\\ b_2 - a_2 \\end{pmatrix}\\]
                <div style="text-align:center;margin:20px 0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" width="320" height="240"><defs><marker id="arrow7a" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#00e5c7"/></marker><marker id="arrow7b" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#54a0ff"/></marker><marker id="arrow7c" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#feca57"/></marker></defs><line x1="40" y1="20" x2="40" y2="220" stroke="#333" stroke-width="0.5"/><line x1="20" y1="200" x2="300" y2="200" stroke="#333" stroke-width="0.5"/><line x1="40" y1="200" x2="40" y2="20" stroke="#e0e0e0" stroke-width="1.5"/><line x1="40" y1="200" x2="300" y2="200" stroke="#e0e0e0" stroke-width="1.5"/><line x1="100" y1="195" x2="100" y2="205" stroke="#e0e0e0" stroke-width="1"/><line x1="160" y1="195" x2="160" y2="205" stroke="#e0e0e0" stroke-width="1"/><line x1="220" y1="195" x2="220" y2="205" stroke="#e0e0e0" stroke-width="1"/><line x1="280" y1="195" x2="280" y2="205" stroke="#e0e0e0" stroke-width="1"/><line x1="35" y1="140" x2="45" y2="140" stroke="#e0e0e0" stroke-width="1"/><line x1="35" y1="80" x2="45" y2="80" stroke="#e0e0e0" stroke-width="1"/><line x1="35" y1="20" x2="45" y2="20" stroke="#e0e0e0" stroke-width="1"/><text x="96" y="218" style="font-family:'Space Grotesk',sans-serif;font-size:12px;fill:#e0e0e0">1</text><text x="156" y="218" style="font-family:'Space Grotesk',sans-serif;font-size:12px;fill:#e0e0e0">2</text><text x="216" y="218" style="font-family:'Space Grotesk',sans-serif;font-size:12px;fill:#e0e0e0">3</text><text x="276" y="218" style="font-family:'Space Grotesk',sans-serif;font-size:12px;fill:#e0e0e0">4</text><text x="20" y="144" style="font-family:'Space Grotesk',sans-serif;font-size:12px;fill:#e0e0e0">1</text><text x="20" y="84" style="font-family:'Space Grotesk',sans-serif;font-size:12px;fill:#e0e0e0">2</text><text x="20" y="24" style="font-family:'Space Grotesk',sans-serif;font-size:12px;fill:#e0e0e0">3</text><circle cx="40" cy="200" r="4" fill="#e0e0e0"/><text x="26" y="212" style="font-family:'Space Grotesk',sans-serif;font-size:13px;fill:#e0e0e0;font-weight:bold">O</text><line x1="40" y1="200" x2="93" y2="23" stroke="#00e5c7" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#arrow7a)"/><circle cx="100" cy="20" r="4" fill="#00e5c7"/><text x="70" y="12" style="font-family:'Space Grotesk',sans-serif;font-size:13px;fill:#00e5c7;font-weight:bold">A (1,3)</text><line x1="40" y1="200" x2="273" y2="143" stroke="#54a0ff" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#arrow7b)"/><circle cx="280" cy="140" r="4" fill="#54a0ff"/><text x="252" y="130" style="font-family:'Space Grotesk',sans-serif;font-size:13px;fill:#54a0ff;font-weight:bold">B (4,1)</text><line x1="100" y1="20" x2="273" y2="137" stroke="#feca57" stroke-width="2.5" marker-end="url(#arrow7c)"/><text x="175" y="60" style="font-family:'Space Grotesk',sans-serif;font-size:14px;fill:#feca57;font-weight:bold">AB</text><text x="40" y="120" style="font-family:'Space Grotesk',sans-serif;font-size:12px;fill:#00e5c7">OA</text><text x="165" y="188" style="font-family:'Space Grotesk',sans-serif;font-size:12px;fill:#54a0ff">OB</text></svg></div>
                <div class="lesson-box">
                    <strong>Remember:</strong> \\(\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}\\) (destination minus start). A common mistake is to subtract the wrong way around.
                </div>
            `
        },
        // --- Screen 3: Example - Find Vector AB ---
        {
            type: 'example',
            title: "Example: Find \\(\\overrightarrow{AB}\\)",
            problem: "Find \\(\\overrightarrow{AB}\\) where \\(A = (2, 3)\\) and \\(B = (5, -1)\\).",
            steps: [
                { text: "Position vector of \\(A\\): \\(\\mathbf{a} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}\\)" },
                { text: "Position vector of \\(B\\): \\(\\mathbf{b} = \\begin{pmatrix} 5 \\\\ -1 \\end{pmatrix}\\)" },
                { text: "\\(\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a} = \\begin{pmatrix} 5 - 2 \\\\ -1 - 3 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}\\)" }
            ]
        },
        // --- Screen 4: Midpoint Position Vector ---
        {
            type: 'concept',
            title: "Midpoint of Two Points",
            content: `
                <p>The position vector of the midpoint \\(M\\) of \\(A\\) and \\(B\\) is the average of their position vectors:</p>
                \\[\\mathbf{m} = \\frac{\\mathbf{a} + \\mathbf{b}}{2} = \\frac{1}{2}\\begin{pmatrix} a_1 + b_1 \\\\ a_2 + b_2 \\end{pmatrix}\\]
                <p>For \\(A = (2, 3)\\) and \\(B = (6, 7)\\):</p>
                \\[\\mathbf{m} = \\frac{1}{2}\\begin{pmatrix} 2 + 6 \\\\ 3 + 7 \\end{pmatrix} = \\frac{1}{2}\\begin{pmatrix} 8 \\\\ 10 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 5 \\end{pmatrix}\\]
                <div style="text-align:center;margin:20px 0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" width="320" height="240"><defs><marker id="arrow8" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#e0e0e0"/></marker></defs><line x1="40" y1="20" x2="40" y2="220" stroke="#333" stroke-width="0.5"/><line x1="20" y1="200" x2="300" y2="200" stroke="#333" stroke-width="0.5"/><line x1="40" y1="200" x2="40" y2="20" stroke="#e0e0e0" stroke-width="1"/><line x1="40" y1="200" x2="300" y2="200" stroke="#e0e0e0" stroke-width="1"/><circle cx="80" cy="60" r="5" fill="#00e5c7"/><text x="60" y="50" style="font-family:'Space Grotesk',sans-serif;font-size:13px;fill:#00e5c7;font-weight:bold">A (2, 3)</text><circle cx="260" cy="100" r="5" fill="#54a0ff"/><text x="232" y="90" style="font-family:'Space Grotesk',sans-serif;font-size:13px;fill:#54a0ff;font-weight:bold">B (6, 7)</text><line x1="80" y1="60" x2="260" y2="100" stroke="#e0e0e0" stroke-width="2" stroke-dasharray="6,3"/><circle cx="170" cy="80" r="6" fill="#feca57"/><text x="155" y="70" style="font-family:'Space Grotesk',sans-serif;font-size:14px;fill:#feca57;font-weight:bold">M (4, 5)</text><text x="110" y="106" style="font-family:'Space Grotesk',sans-serif;font-size:12px;fill:#888">halfway</text><text x="200" y="106" style="font-family:'Space Grotesk',sans-serif;font-size:12px;fill:#888">halfway</text><line x1="115" y1="78" x2="115" y2="72" stroke="#888" stroke-width="1"/><line x1="112" y1="75" x2="118" y2="75" stroke="#888" stroke-width="1"/><line x1="225" y1="90" x2="225" y2="84" stroke="#888" stroke-width="1"/><line x1="222" y1="87" x2="228" y2="87" stroke="#888" stroke-width="1"/></svg></div>
                <div class="lesson-box">
                    <strong>Midpoint formula:</strong> \\(M = \\left(\\frac{a_1 + b_1}{2}, \\frac{a_2 + b_2}{2}\\right)\\). This is equivalent to \\(\\mathbf{m} = \\frac{1}{2}(\\mathbf{a} + \\mathbf{b})\\).
                </div>
            `
        },
        // --- Screen 5: Magnitude of a Vector ---
        {
            type: 'concept',
            title: "Magnitude of a Vector",
            content: `
                <p>The <strong>magnitude</strong> (or length) of a vector \\(\\mathbf{v} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}\\) is:</p>
                \\[|\\mathbf{v}| = \\sqrt{x^2 + y^2}\\]
                <p>This comes directly from the Pythagorean theorem.</p>
                <p>For example:</p>
                \\[\\left|\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}\\right| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\]
                <div class="lesson-box">
                    <strong>Notation:</strong> \\(|\\mathbf{v}|\\) or \\(\\|\\mathbf{v}\\|\\) both denote the magnitude. The magnitude is always non-negative.
                </div>
            `
        },
        // --- Screen 6: Example - Find Magnitude ---
        {
            type: 'example',
            title: "Example: Find \\(|\\mathbf{v}|\\)",
            problem: "Find the magnitude of \\(\\mathbf{v} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}\\).",
            steps: [
                { text: "Use the formula: \\(|\\mathbf{v}| = \\sqrt{x^2 + y^2}\\)" },
                { text: "\\(|\\mathbf{v}| = \\sqrt{3^2 + 4^2}\\)" },
                { text: "\\(= \\sqrt{9 + 16} = \\sqrt{25}\\)" },
                { text: "\\(= 5\\)" }
            ]
        },
        // --- Screen 7: Distance Between Two Points ---
        {
            type: 'concept',
            title: "Distance Between Two Points",
            content: `
                <p>The distance between points \\(A\\) and \\(B\\) is the magnitude of \\(\\overrightarrow{AB}\\):</p>
                \\[d(A, B) = |\\overrightarrow{AB}| = \\sqrt{(b_1 - a_1)^2 + (b_2 - a_2)^2}\\]
                <p>For \\(A = (1, 2)\\) and \\(B = (4, 6)\\):</p>
                \\[d = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\]
                <div class="lesson-box">
                    <strong>Connection:</strong> The distance formula is just the magnitude of the displacement vector between the two points.
                </div>
            `
        },
        // --- Screen 8: Unit Vectors ---
        {
            type: 'concept',
            title: "Unit Vectors",
            content: `
                <p>A <strong>unit vector</strong> is a vector with magnitude 1. To find the unit vector in the direction of \\(\\mathbf{v}\\), divide by its magnitude:</p>
                \\[\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}}{|\\mathbf{v}|}\\]
                <p>For \\(\\mathbf{v} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}\\) with \\(|\\mathbf{v}| = 5\\):</p>
                \\[\\hat{\\mathbf{v}} = \\frac{1}{5}\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 0.6 \\\\ 0.8 \\end{pmatrix}\\]
                <div class="lesson-box">
                    <strong>Check:</strong> \\(|\\hat{\\mathbf{v}}| = \\sqrt{0.6^2 + 0.8^2} = \\sqrt{0.36 + 0.64} = \\sqrt{1} = 1\\) as expected.
                </div>
            `
        },
        // --- Screen 9: Example - Unit Vector ---
        {
            type: 'example',
            title: "Example: Find the Unit Vector",
            problem: "Find the unit vector in the direction of \\(\\begin{pmatrix} 5 \\\\ 12 \\end{pmatrix}\\).",
            steps: [
                { text: "Find the magnitude: \\(|\\mathbf{v}| = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13\\)" },
                { text: "Divide by the magnitude: \\(\\hat{\\mathbf{v}} = \\frac{1}{13}\\begin{pmatrix} 5 \\\\ 12 \\end{pmatrix} = \\begin{pmatrix} \\frac{5}{13} \\\\ \\frac{12}{13} \\end{pmatrix}\\)" },
                { text: "The unit vector is \\(\\begin{pmatrix} \\frac{5}{13} \\\\ \\frac{12}{13} \\end{pmatrix}\\)." }
            ]
        },
        // --- Screen 10: Special Properties of Magnitude ---
        {
            type: 'concept',
            title: "Properties of Magnitude",
            content: `
                <p>Useful properties of the magnitude:</p>
                <ul>
                    <li>\\(|\\mathbf{v}| \\geq 0\\), and \\(|\\mathbf{v}| = 0\\) only if \\(\\mathbf{v} = \\mathbf{0}\\)</li>
                    <li>\\(|k\\mathbf{v}| = |k| \\cdot |\\mathbf{v}|\\) for any scalar \\(k\\)</li>
                    <li>\\(|-\\mathbf{v}| = |\\mathbf{v}|\\)</li>
                </ul>
                <div class="lesson-box">
                    <strong>Note:</strong> The magnitude of \\(\\overrightarrow{AB}\\) equals the magnitude of \\(\\overrightarrow{BA}\\). The direction is different, but the length is the same.
                </div>
            `
        },
        // --- Screen 11: Practice - Find Vector AB ---
        {
            type: 'practice',
            generate: function() {
                var a1 = Math.floor(Math.random() * 9) - 4;
                var a2 = Math.floor(Math.random() * 9) - 4;
                var b1 = Math.floor(Math.random() * 9) - 4;
                var b2 = Math.floor(Math.random() * 9) - 4;
                var rx = b1 - a1, ry = b2 - a2;
                var opts = [
                    '\\begin{pmatrix} ' + rx + ' \\\\ ' + ry + ' \\end{pmatrix}',
                    '\\begin{pmatrix} ' + (a1 - b1) + ' \\\\ ' + (a2 - b2) + ' \\end{pmatrix}',
                    '\\begin{pmatrix} ' + (a1 + b1) + ' \\\\ ' + (a2 + b2) + ' \\end{pmatrix}',
                    '\\begin{pmatrix} ' + (rx + 2) + ' \\\\ ' + (ry - 1) + ' \\end{pmatrix}'
                ];
                var seen = {};
                for (var i = 0; i < opts.length; i++) {
                    if (seen[opts[i]]) {
                        opts[i] = '\\begin{pmatrix} ' + (rx - 3) + ' \\\\ ' + (ry + 2) + ' \\end{pmatrix}';
                    }
                    seen[opts[i]] = true;
                }
                return {
                    type: 'mc',
                    latex: '\\text{Find } \\overrightarrow{AB} \\text{ where } A = (' + a1 + ', ' + a2 + ') \\text{ and } B = (' + b1 + ', ' + b2 + ')',
                    options: opts.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: 0,
                    explain: '\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a} = \\begin{pmatrix} ' + b1 + ' - (' + a1 + ') \\\\ ' + b2 + ' - (' + a2 + ') \\end{pmatrix} = \\begin{pmatrix} ' + rx + ' \\\\ ' + ry + ' \\end{pmatrix}'
                };
            }
        },
        // --- Screen 12: Practice - Magnitude ---
        {
            type: 'practice',
            generate: function() {
                var triples = [
                    [3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17],
                    [7, 24, 25], [9, 12, 15], [4, 3, 5], [12, 5, 13]
                ];
                var pick = triples[Math.floor(Math.random() * triples.length)];
                var signs = [1, -1];
                var s1 = signs[Math.floor(Math.random() * 2)];
                var s2 = signs[Math.floor(Math.random() * 2)];
                var x = s1 * pick[0], y = s2 * pick[1], mag = pick[2];
                var opts = [mag];
                while (opts.length < 4) {
                    var wrong = mag + Math.floor(Math.random() * 11) - 5;
                    if (wrong > 0 && opts.indexOf(wrong) === -1) opts.push(wrong);
                }
                opts.sort(function(a, b) { return a - b; });
                return {
                    type: 'mc',
                    latex: '\\text{Find } \\left|\\begin{pmatrix} ' + x + ' \\\\ ' + y + ' \\end{pmatrix}\\right|',
                    options: opts.map(String),
                    correctIdx: opts.indexOf(mag),
                    explain: '\\sqrt{(' + x + ')^2 + (' + y + ')^2} = \\sqrt{' + (x*x) + ' + ' + (y*y) + '} = \\sqrt{' + (x*x + y*y) + '} = ' + mag
                };
            }
        },
        // --- Screen 13: Practice - Midpoint ---
        {
            type: 'practice',
            generate: function() {
                var a1 = Math.floor(Math.random() * 8) - 2;
                var a2 = Math.floor(Math.random() * 8) - 2;
                // Ensure even sums for integer midpoints
                var b1 = a1 + 2 * (Math.floor(Math.random() * 5) - 2);
                var b2 = a2 + 2 * (Math.floor(Math.random() * 5) - 2);
                var mx = (a1 + b1) / 2, my = (a2 + b2) / 2;
                var opts = [
                    '(' + mx + ', ' + my + ')',
                    '(' + (mx + 1) + ', ' + (my - 1) + ')',
                    '(' + (mx - 1) + ', ' + (my + 1) + ')',
                    '(' + (b1 - a1) + ', ' + (b2 - a2) + ')'
                ];
                var seen = {};
                for (var i = 0; i < opts.length; i++) {
                    if (seen[opts[i]]) {
                        opts[i] = '(' + (mx + 2) + ', ' + (my + 2) + ')';
                    }
                    seen[opts[i]] = true;
                }
                return {
                    type: 'mc',
                    latex: '\\text{Find the midpoint of } A = (' + a1 + ', ' + a2 + ') \\text{ and } B = (' + b1 + ', ' + b2 + ')',
                    options: opts,
                    correctIdx: 0,
                    explain: 'M = \\left(\\frac{' + a1 + ' + ' + b1 + '}{2}, \\frac{' + a2 + ' + ' + b2 + '}{2}\\right) = (' + mx + ', ' + my + ')'
                };
            }
        },
        // --- Screen 14: Practice - Unit Vector ---
        {
            type: 'practice',
            generate: function() {
                var triples = [[3, 4, 5], [5, 12, 13], [8, 6, 10], [8, 15, 17]];
                var pick = triples[Math.floor(Math.random() * triples.length)];
                var x = pick[0], y = pick[1], mag = pick[2];
                var ansStr = '\\begin{pmatrix} \\frac{' + x + '}{' + mag + '} \\\\ \\frac{' + y + '}{' + mag + '} \\end{pmatrix}';
                var opts = [
                    '\\begin{pmatrix} \\frac{' + x + '}{' + mag + '} \\\\ \\frac{' + y + '}{' + mag + '} \\end{pmatrix}',
                    '\\begin{pmatrix} \\frac{' + y + '}{' + mag + '} \\\\ \\frac{' + x + '}{' + mag + '} \\end{pmatrix}',
                    '\\begin{pmatrix} \\frac{' + x + '}{' + (mag+1) + '} \\\\ \\frac{' + y + '}{' + (mag+1) + '} \\end{pmatrix}',
                    '\\begin{pmatrix} ' + x + ' \\\\ ' + y + ' \\end{pmatrix}'
                ];
                return {
                    type: 'mc',
                    latex: '\\text{Find the unit vector in the direction of } \\begin{pmatrix} ' + x + ' \\\\ ' + y + ' \\end{pmatrix}',
                    options: opts.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: 0,
                    explain: '|\\mathbf{v}| = ' + mag + ', \\text{ so } \\hat{\\mathbf{v}} = \\frac{1}{' + mag + '}\\begin{pmatrix} ' + x + ' \\\\ ' + y + ' \\end{pmatrix}'
                };
            }
        },
        // --- Screen 15: Practice - Distance ---
        {
            type: 'practice',
            generate: function() {
                var triples = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17]];
                var pick = triples[Math.floor(Math.random() * triples.length)];
                var a1 = Math.floor(Math.random() * 5);
                var a2 = Math.floor(Math.random() * 5);
                var b1 = a1 + pick[0], b2 = a2 + pick[1];
                var dist = pick[2];
                var opts = [dist];
                while (opts.length < 4) {
                    var wrong = dist + Math.floor(Math.random() * 9) - 4;
                    if (wrong > 0 && opts.indexOf(wrong) === -1) opts.push(wrong);
                }
                opts.sort(function(a, b) { return a - b; });
                return {
                    type: 'mc',
                    latex: '\\text{Find the distance between } A = (' + a1 + ', ' + a2 + ') \\text{ and } B = (' + b1 + ', ' + b2 + ')',
                    options: opts.map(String),
                    correctIdx: opts.indexOf(dist),
                    explain: 'd = \\sqrt{(' + b1 + '-' + a1 + ')^2 + (' + b2 + '-' + a2 + ')^2} = \\sqrt{' + (pick[0]*pick[0]) + ' + ' + (pick[1]*pick[1]) + '} = ' + dist
                };
            }
        },
        // --- Screen 16: Summary ---
        {
            type: 'summary',
            title: "Position Vectors & Magnitude - Summary",
            content: '<p>You can now work with position vectors, find distances, and calculate unit vectors.</p>',
            points: [
                "Position vector of point \\(A = (a_1, a_2)\\) is \\(\\mathbf{a} = \\begin{pmatrix} a_1 \\\\ a_2 \\end{pmatrix}\\)",
                "Vector from \\(A\\) to \\(B\\): \\(\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}\\)",
                "Midpoint: \\(\\mathbf{m} = \\frac{1}{2}(\\mathbf{a} + \\mathbf{b})\\)",
                "Magnitude: \\(|\\mathbf{v}| = \\sqrt{x^2 + y^2}\\)",
                "Distance between two points = magnitude of the vector between them",
                "Unit vector: \\(\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}}{|\\mathbf{v}|}\\)"
            ]
        }
    ]
};
