window.CURRENT_LESSON = {
    title: "Vector Operations",
    subtitle: "Adding, subtracting, and scaling vectors",
    screens: [
        // --- Screen 1: What is a Vector? ---
        {
            type: 'concept',
            title: "What is a Vector?",
            content: `
                <p>A <strong>vector</strong> is a quantity that has both <em>magnitude</em> (size) and <em>direction</em>.</p>
                <p>Examples of vectors: displacement, velocity, force.</p>
                <p>Examples of scalars (not vectors): speed, mass, temperature.</p>
                <div style="text-align:center;margin:20px 0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" width="320" height="240"><defs><marker id="arrow1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#00e5c7"/></marker></defs><line x1="40" y1="180" x2="192" y2="66" stroke="#00e5c7" stroke-width="2.5" marker-end="url(#arrow1)"/><circle cx="40" cy="180" r="3" fill="#00e5c7"/><text x="100" y="105" style="font-family:'Space Grotesk',sans-serif;font-size:16px;fill:#00e5c7;font-weight:bold">v</text><text x="230" y="80" style="font-family:'Space Grotesk',sans-serif;font-size:14px;fill:#e0e0e0">Vector</text><text x="230" y="100" style="font-family:'Space Grotesk',sans-serif;font-size:13px;fill:#888">(magnitude + direction)</text><rect x="220" y="140" width="80" height="40" rx="6" fill="none" stroke="#feca57" stroke-width="1.5"/><text x="235" y="166" style="font-family:'Space Grotesk',sans-serif;font-size:16px;fill:#feca57;font-weight:bold">5 kg</text><text x="230" y="200" style="font-family:'Space Grotesk',sans-serif;font-size:14px;fill:#e0e0e0">Scalar</text><text x="230" y="218" style="font-family:'Space Grotesk',sans-serif;font-size:13px;fill:#888">(magnitude only)</text></svg></div>
                <div class="lesson-box">
                    <strong>Key distinction:</strong> A scalar has only magnitude. A vector has magnitude <em>and</em> direction. Two vectors are equal if and only if they have the same magnitude and direction.
                </div>
            `
        },
        // --- Screen 2: Column Vector Notation ---
        {
            type: 'concept',
            title: "Column Vector Notation",
            content: `
                <p>In 2D, a vector can be written as a <strong>column vector</strong>:</p>
                \\[\\mathbf{v} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}\\]
                <p>where \\(x\\) is the horizontal component and \\(y\\) is the vertical component.</p>
                <p>For example, \\(\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}\\) means "3 units right and 2 units up".</p>
                <div class="lesson-box">
                    <strong>Notation:</strong> Vectors are written in <strong>bold</strong> (\\(\\mathbf{a}\\)) in print, or with an underline (\\(\\underline{a}\\)) in handwriting. The arrow notation \\(\\overrightarrow{AB}\\) indicates the vector from point \\(A\\) to point \\(B\\).
                </div>
            `
        },
        // --- Screen 3: Adding Vectors ---
        {
            type: 'concept',
            title: "Adding Vectors",
            content: `
                <p>To add two vectors, add their corresponding components:</p>
                \\[\\begin{pmatrix} a \\\\ b \\end{pmatrix} + \\begin{pmatrix} c \\\\ d \\end{pmatrix} = \\begin{pmatrix} a + c \\\\ b + d \\end{pmatrix}\\]
                <p>Geometrically, this is the <strong>tip-to-tail</strong> rule: place the tail of the second vector at the tip of the first.</p>
                <p>For example:</p>
                \\[\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}\\]
                <div style="text-align:center;margin:20px 0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" width="320" height="240"><defs><marker id="arrow2a" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#00e5c7"/></marker><marker id="arrow2b" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#54a0ff"/></marker><marker id="arrow2c" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#feca57"/></marker></defs><line x1="40" y1="200" x2="152" y2="126" stroke="#00e5c7" stroke-width="2.5" marker-end="url(#arrow2a)"/><line x1="160" y1="120" x2="272" y2="154" stroke="#54a0ff" stroke-width="2.5" marker-end="url(#arrow2b)"/><line x1="40" y1="200" x2="272" y2="154" stroke="#feca57" stroke-width="2.5" stroke-dasharray="8,4" marker-end="url(#arrow2c)"/><text x="75" y="148" style="font-family:'Space Grotesk',sans-serif;font-size:16px;fill:#00e5c7;font-weight:bold">a</text><text x="220" y="122" style="font-family:'Space Grotesk',sans-serif;font-size:16px;fill:#54a0ff;font-weight:bold">b</text><text x="140" y="200" style="font-family:'Space Grotesk',sans-serif;font-size:16px;fill:#feca57;font-weight:bold">a + b</text></svg></div>
                <div class="lesson-box">
                    <strong>Tip-to-tail:</strong> The resultant vector goes from the starting point of the first vector to the endpoint of the second.
                </div>
            `
        },
        // --- Screen 4: Subtracting Vectors ---
        {
            type: 'concept',
            title: "Subtracting Vectors",
            content: `
                <p>To subtract vectors, subtract the corresponding components:</p>
                \\[\\begin{pmatrix} a \\\\ b \\end{pmatrix} - \\begin{pmatrix} c \\\\ d \\end{pmatrix} = \\begin{pmatrix} a - c \\\\ b - d \\end{pmatrix}\\]
                <p>Subtraction is the same as adding the negative: \\(\\mathbf{a} - \\mathbf{b} = \\mathbf{a} + (-\\mathbf{b})\\).</p>
                <p>For example:</p>
                \\[\\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix} - \\begin{pmatrix} 2 \\\\ 7 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}\\]
                <div style="text-align:center;margin:20px 0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" width="320" height="240"><defs><marker id="arrow3a" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#00e5c7"/></marker><marker id="arrow3b" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#54a0ff"/></marker><marker id="arrow3c" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#feca57"/></marker></defs><circle cx="40" cy="180" r="4" fill="#e0e0e0"/><text x="24" y="200" style="font-family:'Space Grotesk',sans-serif;font-size:13px;fill:#e0e0e0">O</text><line x1="40" y1="180" x2="192" y2="66" stroke="#00e5c7" stroke-width="2.5" marker-end="url(#arrow3a)"/><text x="100" y="105" style="font-family:'Space Grotesk',sans-serif;font-size:16px;fill:#00e5c7;font-weight:bold">a</text><line x1="40" y1="180" x2="154" y2="156" stroke="#54a0ff" stroke-width="2.5" marker-end="url(#arrow3b)"/><text x="85" y="180" style="font-family:'Space Grotesk',sans-serif;font-size:16px;fill:#54a0ff;font-weight:bold">b</text><line x1="160" y1="160" x2="194" y2="72" stroke="#feca57" stroke-width="2.5" stroke-dasharray="8,4" marker-end="url(#arrow3c)"/><text x="192" y="122" style="font-family:'Space Grotesk',sans-serif;font-size:16px;fill:#feca57;font-weight:bold">a - b</text></svg></div>
                <div class="lesson-box">
                    <strong>Geometrically:</strong> \\(\\mathbf{a} - \\mathbf{b}\\) is the vector from the tip of \\(\\mathbf{b}\\) to the tip of \\(\\mathbf{a}\\) (when both start from the same point).
                </div>
            `
        },
        // --- Screen 5: Scalar Multiplication ---
        {
            type: 'concept',
            title: "Scalar Multiplication",
            content: `
                <p>Multiplying a vector by a scalar \\(k\\) multiplies each component by \\(k\\):</p>
                \\[k\\begin{pmatrix} a \\\\ b \\end{pmatrix} = \\begin{pmatrix} ka \\\\ kb \\end{pmatrix}\\]
                <p>This <strong>scales</strong> the vector:</p>
                <ul>
                    <li>\\(k > 1\\): stretches the vector (makes it longer)</li>
                    <li>\\(0 < k < 1\\): shrinks the vector</li>
                    <li>\\(k < 0\\): reverses the direction and scales</li>
                </ul>
                <p>For example: \\(3\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ -3 \\end{pmatrix}\\)</p>
                <div style="text-align:center;margin:20px 0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" width="320" height="240"><defs><marker id="arrow4a" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#00e5c7"/></marker><marker id="arrow4b" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#54a0ff"/></marker><marker id="arrow4c" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#ff6b6b"/></marker></defs><circle cx="40" cy="180" r="4" fill="#e0e0e0"/><line x1="40" y1="180" x2="132" y2="106" stroke="#00e5c7" stroke-width="2.5" marker-end="url(#arrow4a)"/><text x="95" y="125" style="font-family:'Space Grotesk',sans-serif;font-size:16px;fill:#00e5c7;font-weight:bold">v</text><line x1="40" y1="180" x2="232" y2="26" stroke="#54a0ff" stroke-width="2.5" marker-end="url(#arrow4b)"/><text x="160" y="80" style="font-family:'Space Grotesk',sans-serif;font-size:16px;fill:#54a0ff;font-weight:bold">2v</text><line x1="40" y1="180" x2="132" y2="246" stroke="#ff6b6b" stroke-width="2.5" marker-end="url(#arrow4c)"/><text x="95" y="230" style="font-family:'Space Grotesk',sans-serif;font-size:16px;fill:#ff6b6b;font-weight:bold">-v</text></svg></div>
                <div class="lesson-box">
                    <strong>Key property:</strong> Scalar multiplication does not change the direction of the vector (unless \\(k\\) is negative, in which case the direction is reversed).
                </div>
            `
        },
        // --- Screen 6: Negative Vectors ---
        {
            type: 'concept',
            title: "Negative Vectors and the Zero Vector",
            content: `
                <p>The <strong>negative</strong> of a vector reverses its direction:</p>
                \\[-\\begin{pmatrix} a \\\\ b \\end{pmatrix} = \\begin{pmatrix} -a \\\\ -b \\end{pmatrix}\\]
                <p>So \\(-\\overrightarrow{AB} = \\overrightarrow{BA}\\).</p>
                <p>The <strong>zero vector</strong> \\(\\mathbf{0} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}\\) has zero magnitude and no defined direction.</p>
                <div class="lesson-box">
                    <strong>Properties:</strong>
                    <ul>
                        <li>\\(\\mathbf{a} + (-\\mathbf{a}) = \\mathbf{0}\\)</li>
                        <li>\\(\\mathbf{a} + \\mathbf{0} = \\mathbf{a}\\)</li>
                        <li>\\(0 \\cdot \\mathbf{a} = \\mathbf{0}\\)</li>
                    </ul>
                </div>
            `
        },
        // --- Screen 7: Resultant Vectors ---
        {
            type: 'concept',
            title: "Resultant Vectors",
            content: `
                <p>The <strong>resultant</strong> of two or more vectors is their sum. In route-finding problems, we chain vectors together.</p>
                <p>If you travel from \\(A\\) to \\(B\\) then from \\(B\\) to \\(C\\):</p>
                \\[\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{BC}\\]
                <p>This extends to any chain:</p>
                \\[\\overrightarrow{AD} = \\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD}\\]
                <div style="text-align:center;margin:20px 0;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" width="320" height="240"><defs><marker id="arrow5a" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#00e5c7"/></marker><marker id="arrow5b" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#54a0ff"/></marker><marker id="arrow5c" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#feca57"/></marker></defs><line x1="40" y1="200" x2="172" y2="66" stroke="#00e5c7" stroke-width="2.5" marker-end="url(#arrow5a)"/><line x1="180" y1="60" x2="272" y2="194" stroke="#54a0ff" stroke-width="2.5" marker-end="url(#arrow5b)"/><line x1="40" y1="200" x2="272" y2="194" stroke="#feca57" stroke-width="2.5" stroke-dasharray="8,4" marker-end="url(#arrow5c)"/><circle cx="40" cy="200" r="4" fill="#e0e0e0"/><circle cx="180" cy="60" r="4" fill="#e0e0e0"/><circle cx="280" cy="200" r="4" fill="#e0e0e0"/><text x="24" y="220" style="font-family:'Space Grotesk',sans-serif;font-size:15px;fill:#e0e0e0;font-weight:bold">A</text><text x="175" y="45" style="font-family:'Space Grotesk',sans-serif;font-size:15px;fill:#e0e0e0;font-weight:bold">B</text><text x="280" y="220" style="font-family:'Space Grotesk',sans-serif;font-size:15px;fill:#e0e0e0;font-weight:bold">C</text><text x="85" y="118" style="font-family:'Space Grotesk',sans-serif;font-size:14px;fill:#00e5c7">AB</text><text x="235" y="118" style="font-family:'Space Grotesk',sans-serif;font-size:14px;fill:#54a0ff">BC</text><text x="140" y="218" style="font-family:'Space Grotesk',sans-serif;font-size:14px;fill:#feca57">AC</text></svg></div>
                <div class="lesson-box">
                    <strong>Route rule:</strong> To find the vector from start to end, add up the vectors along any path connecting them.
                </div>
            `
        },
        // --- Screen 8: Linear Combinations ---
        {
            type: 'concept',
            title: "Linear Combinations of Vectors",
            content: `
                <p>A <strong>linear combination</strong> of vectors \\(\\mathbf{a}\\) and \\(\\mathbf{b}\\) is an expression of the form:</p>
                \\[\\lambda \\mathbf{a} + \\mu \\mathbf{b}\\]
                <p>where \\(\\lambda\\) and \\(\\mu\\) are scalars.</p>
                <p>For example, if \\(\\mathbf{a} = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}\\) and \\(\\mathbf{b} = \\begin{pmatrix} 1 \\\\ -3 \\end{pmatrix}\\), then:</p>
                \\[3\\mathbf{a} - 2\\mathbf{b} = 3\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix} - 2\\begin{pmatrix} 1 \\\\ -3 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 15 \\end{pmatrix} - \\begin{pmatrix} 2 \\\\ -6 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 21 \\end{pmatrix}\\]
                <div class="lesson-box">
                    <strong>Process:</strong> First multiply each vector by its scalar, then add or subtract the results component by component.
                </div>
            `
        },
        // --- Screen 9: Example - Addition ---
        {
            type: 'example',
            title: "Example: Adding Vectors",
            problem: "Find \\(\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix} + \\begin{pmatrix} -1 \\\\ 4 \\end{pmatrix}\\).",
            steps: [
                { text: "Add the \\(x\\)-components: \\(3 + (-1) = 2\\)" },
                { text: "Add the \\(y\\)-components: \\(2 + 4 = 6\\)" },
                { text: "Result: \\(\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix} + \\begin{pmatrix} -1 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 6 \\end{pmatrix}\\)" }
            ]
        },
        // --- Screen 10: Example - Linear Combination ---
        {
            type: 'example',
            title: "Example: Linear Combination",
            problem: "Given \\(\\mathbf{a} = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}\\) and \\(\\mathbf{b} = \\begin{pmatrix} 1 \\\\ -3 \\end{pmatrix}\\), find \\(3\\mathbf{a} - 2\\mathbf{b}\\).",
            steps: [
                { text: "Calculate \\(3\\mathbf{a} = 3\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 15 \\end{pmatrix}\\)" },
                { text: "Calculate \\(2\\mathbf{b} = 2\\begin{pmatrix} 1 \\\\ -3 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ -6 \\end{pmatrix}\\)" },
                { text: "Subtract: \\(\\begin{pmatrix} 6 \\\\ 15 \\end{pmatrix} - \\begin{pmatrix} 2 \\\\ -6 \\end{pmatrix} = \\begin{pmatrix} 6-2 \\\\ 15-(-6) \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 21 \\end{pmatrix}\\)" }
            ]
        },
        // --- Screen 11: Practice - Vector Addition ---
        {
            type: 'practice',
            generate: function() {
                var a1 = Math.floor(Math.random() * 9) - 4;
                var a2 = Math.floor(Math.random() * 9) - 4;
                var b1 = Math.floor(Math.random() * 9) - 4;
                var b2 = Math.floor(Math.random() * 9) - 4;
                var rx = a1 + b1, ry = a2 + b2;
                var ansStr = '\\begin{pmatrix} ' + rx + ' \\\\ ' + ry + ' \\end{pmatrix}';
                var opts = [
                    '\\begin{pmatrix} ' + rx + ' \\\\ ' + ry + ' \\end{pmatrix}',
                    '\\begin{pmatrix} ' + (rx + 2) + ' \\\\ ' + (ry - 1) + ' \\end{pmatrix}',
                    '\\begin{pmatrix} ' + (rx - 1) + ' \\\\ ' + (ry + 2) + ' \\end{pmatrix}',
                    '\\begin{pmatrix} ' + (a1 - b1) + ' \\\\ ' + (a2 - b2) + ' \\end{pmatrix}'
                ];
                // Ensure unique
                var seen = {};
                for (var i = 0; i < opts.length; i++) {
                    if (seen[opts[i]]) {
                        opts[i] = '\\begin{pmatrix} ' + (rx + 3) + ' \\\\ ' + (ry + 3) + ' \\end{pmatrix}';
                    }
                    seen[opts[i]] = true;
                }
                return {
                    type: 'mc',
                    latex: '\\text{Calculate } \\begin{pmatrix} ' + a1 + ' \\\\ ' + a2 + ' \\end{pmatrix} + \\begin{pmatrix} ' + b1 + ' \\\\ ' + b2 + ' \\end{pmatrix}',
                    options: opts.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: 0,
                    explain: '\\begin{pmatrix} ' + a1 + ' + ' + b1 + ' \\\\ ' + a2 + ' + ' + b2 + ' \\end{pmatrix} = \\begin{pmatrix} ' + rx + ' \\\\ ' + ry + ' \\end{pmatrix}'
                };
            }
        },
        // --- Screen 12: Practice - Vector Subtraction ---
        {
            type: 'practice',
            generate: function() {
                var a1 = Math.floor(Math.random() * 9) - 4;
                var a2 = Math.floor(Math.random() * 9) - 4;
                var b1 = Math.floor(Math.random() * 9) - 4;
                var b2 = Math.floor(Math.random() * 9) - 4;
                var rx = a1 - b1, ry = a2 - b2;
                var opts = [
                    '\\begin{pmatrix} ' + rx + ' \\\\ ' + ry + ' \\end{pmatrix}',
                    '\\begin{pmatrix} ' + (a1 + b1) + ' \\\\ ' + (a2 + b2) + ' \\end{pmatrix}',
                    '\\begin{pmatrix} ' + (rx + 2) + ' \\\\ ' + ry + ' \\end{pmatrix}',
                    '\\begin{pmatrix} ' + rx + ' \\\\ ' + (ry - 3) + ' \\end{pmatrix}'
                ];
                var seen = {};
                for (var i = 0; i < opts.length; i++) {
                    if (seen[opts[i]]) {
                        opts[i] = '\\begin{pmatrix} ' + (rx - 2) + ' \\\\ ' + (ry + 1) + ' \\end{pmatrix}';
                    }
                    seen[opts[i]] = true;
                }
                return {
                    type: 'mc',
                    latex: '\\text{Calculate } \\begin{pmatrix} ' + a1 + ' \\\\ ' + a2 + ' \\end{pmatrix} - \\begin{pmatrix} ' + b1 + ' \\\\ ' + b2 + ' \\end{pmatrix}',
                    options: opts.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: 0,
                    explain: '\\begin{pmatrix} ' + a1 + ' - (' + b1 + ') \\\\ ' + a2 + ' - (' + b2 + ') \\end{pmatrix} = \\begin{pmatrix} ' + rx + ' \\\\ ' + ry + ' \\end{pmatrix}'
                };
            }
        },
        // --- Screen 13: Practice - Scalar Multiplication ---
        {
            type: 'practice',
            generate: function() {
                var k = Math.floor(Math.random() * 5) + 2;
                var a1 = Math.floor(Math.random() * 7) - 3;
                var a2 = Math.floor(Math.random() * 7) - 3;
                var rx = k * a1, ry = k * a2;
                var opts = [
                    '\\begin{pmatrix} ' + rx + ' \\\\ ' + ry + ' \\end{pmatrix}',
                    '\\begin{pmatrix} ' + (rx + k) + ' \\\\ ' + ry + ' \\end{pmatrix}',
                    '\\begin{pmatrix} ' + (a1 + k) + ' \\\\ ' + (a2 + k) + ' \\end{pmatrix}',
                    '\\begin{pmatrix} ' + rx + ' \\\\ ' + (ry - k) + ' \\end{pmatrix}'
                ];
                var seen = {};
                for (var i = 0; i < opts.length; i++) {
                    if (seen[opts[i]]) {
                        opts[i] = '\\begin{pmatrix} ' + (rx - 1) + ' \\\\ ' + (ry + 1) + ' \\end{pmatrix}';
                    }
                    seen[opts[i]] = true;
                }
                return {
                    type: 'mc',
                    latex: '\\text{Calculate } ' + k + '\\begin{pmatrix} ' + a1 + ' \\\\ ' + a2 + ' \\end{pmatrix}',
                    options: opts.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: 0,
                    explain: k + '\\begin{pmatrix} ' + a1 + ' \\\\ ' + a2 + ' \\end{pmatrix} = \\begin{pmatrix} ' + k + ' \\times ' + a1 + ' \\\\ ' + k + ' \\times ' + a2 + ' \\end{pmatrix} = \\begin{pmatrix} ' + rx + ' \\\\ ' + ry + ' \\end{pmatrix}'
                };
            }
        },
        // --- Screen 14: Practice - Linear Combination ---
        {
            type: 'practice',
            generate: function() {
                var k1 = Math.floor(Math.random() * 4) + 2;
                var k2 = Math.floor(Math.random() * 3) + 1;
                var a1 = Math.floor(Math.random() * 5) + 1;
                var a2 = Math.floor(Math.random() * 7) - 3;
                var b1 = Math.floor(Math.random() * 5) + 1;
                var b2 = Math.floor(Math.random() * 7) - 3;
                var rx = k1 * a1 - k2 * b1;
                var ry = k1 * a2 - k2 * b2;
                var opts = [
                    '\\begin{pmatrix} ' + rx + ' \\\\ ' + ry + ' \\end{pmatrix}',
                    '\\begin{pmatrix} ' + (k1 * a1 + k2 * b1) + ' \\\\ ' + (k1 * a2 + k2 * b2) + ' \\end{pmatrix}',
                    '\\begin{pmatrix} ' + (rx + 2) + ' \\\\ ' + (ry - 2) + ' \\end{pmatrix}',
                    '\\begin{pmatrix} ' + (rx - 3) + ' \\\\ ' + (ry + 1) + ' \\end{pmatrix}'
                ];
                var seen = {};
                for (var i = 0; i < opts.length; i++) {
                    if (seen[opts[i]]) {
                        opts[i] = '\\begin{pmatrix} ' + (rx + 5) + ' \\\\ ' + (ry - 5) + ' \\end{pmatrix}';
                    }
                    seen[opts[i]] = true;
                }
                return {
                    type: 'mc',
                    latex: '\\text{Calculate } ' + k1 + '\\begin{pmatrix} ' + a1 + ' \\\\ ' + a2 + ' \\end{pmatrix} - ' + k2 + '\\begin{pmatrix} ' + b1 + ' \\\\ ' + b2 + ' \\end{pmatrix}',
                    options: opts.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: 0,
                    explain: '= \\begin{pmatrix} ' + (k1*a1) + ' \\\\ ' + (k1*a2) + ' \\end{pmatrix} - \\begin{pmatrix} ' + (k2*b1) + ' \\\\ ' + (k2*b2) + ' \\end{pmatrix} = \\begin{pmatrix} ' + rx + ' \\\\ ' + ry + ' \\end{pmatrix}'
                };
            }
        },
        // --- Screen 15: Practice - Resultant ---
        {
            type: 'practice',
            generate: function() {
                var ab1 = Math.floor(Math.random() * 7) - 3;
                var ab2 = Math.floor(Math.random() * 7) - 3;
                var bc1 = Math.floor(Math.random() * 7) - 3;
                var bc2 = Math.floor(Math.random() * 7) - 3;
                var rx = ab1 + bc1, ry = ab2 + bc2;
                return {
                    type: 'short',
                    latex: '\\text{If } \\overrightarrow{AB} = \\begin{pmatrix} ' + ab1 + ' \\\\ ' + ab2 + ' \\end{pmatrix} \\text{ and } \\overrightarrow{BC} = \\begin{pmatrix} ' + bc1 + ' \\\\ ' + bc2 + ' \\end{pmatrix}, \\text{ find the } x\\text{-component of } \\overrightarrow{AC}.',
                    answer: String(rx),
                    explain: '\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{BC} = \\begin{pmatrix} ' + ab1 + ' + ' + bc1 + ' \\\\ ' + ab2 + ' + ' + bc2 + ' \\end{pmatrix} = \\begin{pmatrix} ' + rx + ' \\\\ ' + ry + ' \\end{pmatrix}'
                };
            }
        },
        // --- Screen 16: Summary ---
        {
            type: 'summary',
            title: "Vector Operations - Summary",
            content: '<p>You now know how to perform the fundamental operations on vectors.</p>',
            points: [
                "A vector has both magnitude and direction, written as a column vector \\(\\begin{pmatrix} x \\\\ y \\end{pmatrix}\\)",
                "Addition: add corresponding components (tip-to-tail geometrically)",
                "Subtraction: subtract corresponding components",
                "Scalar multiplication: multiply each component by the scalar",
                "The negative of a vector reverses its direction",
                "The zero vector \\(\\mathbf{0}\\) has zero magnitude",
                "Resultant = sum of vectors along a path"
            ]
        }
    ]
};
