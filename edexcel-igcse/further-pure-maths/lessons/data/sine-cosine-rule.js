window.CURRENT_LESSON = {
    title: "Sine Rule & Cosine Rule",
    subtitle: "Solving non-right-angled triangles",
    screens: [
        // Screen 1 - Concept: Introduction
        {
            type: 'concept',
            title: 'Beyond Right-Angled Triangles',
            content: `
                <p>SOHCAHTOA only works for right-angled triangles. For <strong>any</strong> triangle, we need the <strong>sine rule</strong> and <strong>cosine rule</strong>.</p>
                <p>We label a triangle with:</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" style="max-width:100%"><polygon points="160,30 60,170 270,170" fill="none" stroke="#444" stroke-width="0.5"/><line x1="160" y1="30" x2="60" y2="170" stroke="#54a0ff" stroke-width="2.5"/><line x1="60" y1="170" x2="270" y2="170" stroke="#00e5c7" stroke-width="2.5"/><line x1="270" y1="170" x2="160" y2="30" stroke="#ff6b6b" stroke-width="2.5"/><circle cx="160" cy="30" r="4" fill="#feca57"/><circle cx="60" cy="170" r="4" fill="#feca57"/><circle cx="270" cy="170" r="4" fill="#feca57"/><text x="155" y="20" font-family="'Space Grotesk',sans-serif" font-size="14" fill="#feca57" text-anchor="middle" font-weight="bold">C</text><text x="42" y="178" font-family="'Space Grotesk',sans-serif" font-size="14" fill="#feca57" font-weight="bold">A</text><text x="285" y="178" font-family="'Space Grotesk',sans-serif" font-size="14" fill="#feca57" font-weight="bold">B</text><text x="155" y="190" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#00e5c7" text-anchor="middle" font-style="italic">c</text><text x="95" y="95" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#54a0ff" font-style="italic">b</text><text x="225" y="95" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#ff6b6b" font-style="italic">a</text></svg></div>
                <ul>
                    <li>Angles \\(A\\), \\(B\\), \\(C\\) at the three vertices.</li>
                    <li>Sides \\(a\\), \\(b\\), \\(c\\) <strong>opposite</strong> to angles \\(A\\), \\(B\\), \\(C\\) respectively.</li>
                </ul>
                <div class="lesson-box">
                    Choosing the right rule depends on what information you are given. This lesson covers when to use each rule.
                </div>
            `
        },
        // Screen 2 - Concept: When to use which rule
        {
            type: 'concept',
            title: 'Choosing the Right Rule',
            content: `
                <div class="lesson-box">
                    <strong>Use the Sine Rule when you have:</strong>
                    <ul>
                        <li>Two angles and one side (AAS or ASA)</li>
                        <li>Two sides and a non-included angle (SSA) - beware the ambiguous case</li>
                    </ul>
                    <strong>Use the Cosine Rule when you have:</strong>
                    <ul>
                        <li>Two sides and the included angle (SAS) - to find the third side</li>
                        <li>Three sides (SSS) - to find an angle</li>
                    </ul>
                </div>
                <p>A quick test: if you have a <strong>matching pair</strong> (a side and its opposite angle), use the sine rule. Otherwise, use the cosine rule.</p>
            `
        },
        // Screen 3 - Concept: The Sine Rule
        {
            type: 'concept',
            title: 'The Sine Rule',
            content: `
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" style="max-width:100%"><polygon points="80,160 250,160 180,40" fill="none" stroke="#444" stroke-width="0.5"/><line x1="80" y1="160" x2="250" y2="160" stroke="#e0e0e0" stroke-width="1" stroke-dasharray="4,3"/><line x1="80" y1="160" x2="180" y2="40" stroke="#54a0ff" stroke-width="2.5"/><line x1="250" y1="160" x2="180" y2="40" stroke="#ff6b6b" stroke-width="2.5"/><path d="M100,160 A20,20 0 0,0 96,148" stroke="#feca57" stroke-width="2" fill="none"/><text x="105" y="152" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57" font-weight="bold">A</text><path d="M235,160 A15,15 0 0,1 239,150" stroke="#feca57" stroke-width="2" fill="none"/><text x="225" y="152" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57" font-weight="bold">B</text><text x="117" y="93" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#54a0ff" font-style="italic">b</text><text x="222" y="93" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#ff6b6b" font-style="italic">a</text><text x="50" y="55" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">a/sinA = b/sinB</text></svg></div>
                <p>The sine rule relates each side to the sine of its opposite angle:</p>
                <div class="lesson-box">
                    \\[ \\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} \\]
                </div>
                <p>Or equivalently (useful for finding angles):</p>
                <p>\\[ \\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c} \\]</p>
                <p>You only ever use <strong>two</strong> of the three fractions at a time. Set up the pair where you know three of the four values and solve for the unknown.</p>
            `
        },
        // Screen 4 - Example: Finding a side using sine rule
        {
            type: 'example',
            title: 'Finding a Side (Sine Rule)',
            problem: 'In triangle ABC, \\(A = 40^\\circ\\), \\(B = 75^\\circ\\), and \\(a = 12\\) cm. Find \\(b\\).',
            steps: [
                { text: 'We have a matching pair: side \\(a\\) and angle \\(A\\). We want side \\(b\\) and know angle \\(B\\).' },
                { text: 'Set up the sine rule: \\(\\frac{a}{\\sin A} = \\frac{b}{\\sin B}\\).' },
                { text: '\\(\\frac{12}{\\sin 40^\\circ} = \\frac{b}{\\sin 75^\\circ}\\)' },
                { text: '\\(b = \\frac{12 \\times \\sin 75^\\circ}{\\sin 40^\\circ}\\)' },
                { text: '\\(b = \\frac{12 \\times 0.9659}{0.6428}\\)' },
                { text: '\\(b = 18.0\\) cm (to 3 s.f.)' }
            ]
        },
        // Screen 5 - Practice: Sine rule (finding a side)
        {
            type: 'practice',
            generate: function() {
                var angleA = [30, 35, 40, 45, 50, 55, 60][Math.floor(Math.random() * 7)];
                var angleB = [65, 70, 75, 80, 85][Math.floor(Math.random() * 5)];
                var sideA = [8, 10, 12, 14, 15, 18, 20][Math.floor(Math.random() * 7)];
                var sinA = Math.sin(angleA * Math.PI / 180);
                var sinB = Math.sin(angleB * Math.PI / 180);
                var sideB = sideA * sinB / sinA;
                var correct = Math.round(sideB * 10) / 10;
                var options = [correct];
                while (options.length < 4) {
                    var d = Math.round((correct + (Math.random() * 8 - 4)) * 10) / 10;
                    if (d > 0 && options.indexOf(d) === -1 && Math.abs(d - correct) > 0.3) options.push(d);
                }
                var correctIdx = 0;
                var shuffled = options.slice();
                shuffled.sort(function() { return Math.random() - 0.5; });
                correctIdx = shuffled.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'In triangle ABC, \\(A = ' + angleA + '^\\circ\\), \\(B = ' + angleB + '^\\circ\\), \\(a = ' + sideA + '\\) cm. Find \\(b\\) to 1 d.p.',
                    options: shuffled.map(function(v) { return v.toFixed(1) + ' cm'; }),
                    correctIdx: correctIdx,
                    explain: '\\(b = \\frac{a \\sin B}{\\sin A} = \\frac{' + sideA + ' \\times \\sin ' + angleB + '^\\circ}{\\sin ' + angleA + '^\\circ} = ' + correct.toFixed(1) + '\\) cm'
                };
            }
        },
        // Screen 6 - Concept: Ambiguous case
        {
            type: 'concept',
            title: 'The Ambiguous Case (SSA)',
            content: `
                <p>When you have two sides and a non-included angle (SSA), there may be <strong>two possible triangles</strong>.</p>
                <div class="lesson-box">
                    The <strong>ambiguous case</strong> arises when using the sine rule to find an angle, because \\(\\sin\\theta = \\sin(180^\\circ - \\theta)\\).
                </div>
                <p>When you calculate \\(\\sin B = k\\) (where \\(0 < k < 1\\)):</p>
                <ul>
                    <li>\\(B = \\sin^{-1}(k)\\) gives the <strong>acute</strong> angle.</li>
                    <li>\\(B = 180^\\circ - \\sin^{-1}(k)\\) gives the <strong>obtuse</strong> angle.</li>
                </ul>
                <p>Check both: if the obtuse angle plus the given angle exceeds \\(180^\\circ\\), that solution is invalid.</p>
            `
        },
        // Screen 7 - Practice: Sine rule (finding an angle)
        {
            type: 'practice',
            generate: function() {
                var setups = [
                    { a: 10, A: 30, b: 8, expB: 23.6 },
                    { a: 15, A: 45, b: 12, expB: 34.4 },
                    { a: 20, A: 50, b: 14, expB: 32.6 },
                    { a: 12, A: 40, b: 9, expB: 28.7 },
                    { a: 18, A: 60, b: 15, expB: 46.2 },
                    { a: 14, A: 35, b: 10, expB: 24.2 }
                ];
                var s = setups[Math.floor(Math.random() * setups.length)];
                var sinB = s.b * Math.sin(s.A * Math.PI / 180) / s.a;
                var B = Math.round(Math.asin(sinB) * 180 / Math.PI * 10) / 10;
                var correct = B;
                var options = [correct];
                while (options.length < 4) {
                    var d = Math.round((correct + (Math.random() * 20 - 10)) * 10) / 10;
                    if (d > 0 && d < 180 && options.indexOf(d) === -1 && Math.abs(d - correct) > 1) options.push(d);
                }
                var correctIdx = 0;
                var shuffled = options.slice();
                shuffled.sort(function() { return Math.random() - 0.5; });
                correctIdx = shuffled.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'In triangle ABC, \\(a = ' + s.a + '\\) cm, \\(A = ' + s.A + '^\\circ\\), \\(b = ' + s.b + '\\) cm. Find the acute angle \\(B\\) to 1 d.p.',
                    options: shuffled.map(function(v) { return v.toFixed(1) + '^\\circ'; }),
                    correctIdx: correctIdx,
                    explain: '\\(\\frac{\\sin B}{b} = \\frac{\\sin A}{a}\\), so \\(\\sin B = \\frac{' + s.b + ' \\sin ' + s.A + '^\\circ}{' + s.a + '} = ' + sinB.toFixed(4) + '\\). \\(B = ' + correct.toFixed(1) + '^\\circ\\).'
                };
            }
        },
        // Screen 8 - Concept: The Cosine Rule (finding a side)
        {
            type: 'concept',
            title: 'The Cosine Rule (Finding a Side)',
            content: `
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" style="max-width:100%"><polygon points="70,165 260,165 195,40" fill="none" stroke="#444" stroke-width="0.5"/><line x1="70" y1="165" x2="260" y2="165" stroke="#54a0ff" stroke-width="2.5"/><line x1="70" y1="165" x2="195" y2="40" stroke="#00e5c7" stroke-width="2.5"/><line x1="260" y1="165" x2="195" y2="40" stroke="#ff6b6b" stroke-width="2.5" stroke-dasharray="6,4"/><path d="M95,165 A25,25 0 0,0 89.5,148.5" stroke="#feca57" stroke-width="2.5" fill="none"/><text x="100" y="155" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#feca57" font-weight="bold">A</text><text x="155" y="183" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#54a0ff" font-style="italic">c</text><text x="115" y="95" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#00e5c7" font-style="italic">b</text><text x="238" y="95" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#ff6b6b" font-style="italic">a = ?</text><text x="55" y="30" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">a\u00b2 = b\u00b2 + c\u00b2 - 2bc cosA</text></svg></div>
                <p>When you know <strong>two sides and the included angle</strong> (SAS), use the cosine rule:</p>
                <div class="lesson-box">
                    \\[ a^2 = b^2 + c^2 - 2bc\\cos A \\]
                </div>
                <p>The side you are finding (\\(a\\)) is <strong>opposite</strong> the angle you know (\\(A\\)).</p>
                <p>Equivalently:</p>
                <ul>
                    <li>\\(b^2 = a^2 + c^2 - 2ac\\cos B\\)</li>
                    <li>\\(c^2 = a^2 + b^2 - 2ab\\cos C\\)</li>
                </ul>
                <div class="lesson-box warning">
                    Note: if the angle is obtuse, \\(\\cos A\\) is negative, so the \\(-2bc\\cos A\\) term becomes positive (making the side longer).
                </div>
            `
        },
        // Screen 9 - Example: Finding a side using cosine rule
        {
            type: 'example',
            title: 'Finding a Side (Cosine Rule)',
            problem: 'In triangle ABC, \\(b = 7\\) cm, \\(c = 9\\) cm, and \\(A = 52^\\circ\\). Find side \\(a\\).',
            steps: [
                { text: 'Use \\(a^2 = b^2 + c^2 - 2bc\\cos A\\).' },
                { text: '\\(a^2 = 7^2 + 9^2 - 2(7)(9)\\cos 52^\\circ\\)' },
                { text: '\\(a^2 = 49 + 81 - 126 \\times 0.6157\\)' },
                { text: '\\(a^2 = 130 - 77.58\\)' },
                { text: '\\(a^2 = 52.42\\)' },
                { text: '\\(a = \\sqrt{52.42} = 7.24\\) cm (to 3 s.f.)' }
            ]
        },
        // Screen 10 - Practice: Cosine rule (finding a side)
        {
            type: 'practice',
            generate: function() {
                var b = [5, 6, 7, 8, 9, 10, 11, 12][Math.floor(Math.random() * 8)];
                var c = [6, 7, 8, 9, 10, 11, 12, 13][Math.floor(Math.random() * 8)];
                var A = [40, 45, 50, 55, 60, 65, 70, 75, 80, 100, 110, 120][Math.floor(Math.random() * 12)];
                var a2 = b * b + c * c - 2 * b * c * Math.cos(A * Math.PI / 180);
                var a = Math.sqrt(a2);
                var correct = Math.round(a * 10) / 10;
                var options = [correct];
                while (options.length < 4) {
                    var d = Math.round((correct + (Math.random() * 6 - 3)) * 10) / 10;
                    if (d > 0 && options.indexOf(d) === -1 && Math.abs(d - correct) > 0.3) options.push(d);
                }
                var correctIdx = 0;
                var shuffled = options.slice();
                shuffled.sort(function() { return Math.random() - 0.5; });
                correctIdx = shuffled.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'In triangle ABC, \\(b = ' + b + '\\) cm, \\(c = ' + c + '\\) cm, \\(A = ' + A + '^\\circ\\). Find \\(a\\) to 1 d.p.',
                    options: shuffled.map(function(v) { return v.toFixed(1) + ' cm'; }),
                    correctIdx: correctIdx,
                    explain: '\\(a^2 = ' + b + '^2 + ' + c + '^2 - 2(' + b + ')(' + c + ')\\cos ' + A + '^\\circ = ' + a2.toFixed(2) + '\\). \\(a = ' + correct.toFixed(1) + '\\) cm.'
                };
            }
        },
        // Screen 11 - Concept: The Cosine Rule (finding an angle)
        {
            type: 'concept',
            title: 'The Cosine Rule (Finding an Angle)',
            content: `
                <p>When you know <strong>three sides</strong> (SSS), rearrange the cosine rule to find an angle:</p>
                <div class="lesson-box">
                    \\[ \\cos A = \\frac{b^2 + c^2 - a^2}{2bc} \\]
                </div>
                <p>Then \\(A = \\cos^{-1}\\left(\\dfrac{b^2 + c^2 - a^2}{2bc}\\right)\\).</p>
                <p>If the result is negative, the angle is <strong>obtuse</strong> (between \\(90^\\circ\\) and \\(180^\\circ\\)).</p>
                <div class="lesson-box">
                    Unlike the sine rule, the cosine rule has <strong>no ambiguous case</strong> when finding angles, because \\(\\cos^{-1}\\) always gives a unique answer in \\(0^\\circ\\) to \\(180^\\circ\\).
                </div>
            `
        },
        // Screen 12 - Example: Finding an angle using cosine rule
        {
            type: 'example',
            title: 'Finding an Angle (Cosine Rule)',
            problem: 'In triangle ABC, \\(a = 8\\) cm, \\(b = 6\\) cm, \\(c = 10\\) cm. Find angle \\(A\\).',
            steps: [
                { text: 'Use \\(\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}\\).' },
                { text: '\\(\\cos A = \\frac{6^2 + 10^2 - 8^2}{2 \\times 6 \\times 10}\\)' },
                { text: '\\(\\cos A = \\frac{36 + 100 - 64}{120}\\)' },
                { text: '\\(\\cos A = \\frac{72}{120} = 0.6\\)' },
                { text: '\\(A = \\cos^{-1}(0.6) = 53.1^\\circ\\) (to 1 d.p.)' }
            ]
        },
        // Screen 13 - Practice: Cosine rule (finding an angle)
        {
            type: 'practice',
            generate: function() {
                // Generate valid triangle sides
                var sides = [
                    { a: 7, b: 8, c: 10 },
                    { a: 5, b: 6, c: 8 },
                    { a: 9, b: 7, c: 11 },
                    { a: 6, b: 8, c: 12 },
                    { a: 10, b: 12, c: 15 },
                    { a: 8, b: 9, c: 13 },
                    { a: 5, b: 7, c: 9 }
                ];
                var s = sides[Math.floor(Math.random() * sides.length)];
                var cosA = (s.b * s.b + s.c * s.c - s.a * s.a) / (2 * s.b * s.c);
                var A = Math.acos(cosA) * 180 / Math.PI;
                var correct = Math.round(A * 10) / 10;
                var options = [correct];
                while (options.length < 4) {
                    var d = Math.round((correct + (Math.random() * 30 - 15)) * 10) / 10;
                    if (d > 0 && d < 180 && options.indexOf(d) === -1 && Math.abs(d - correct) > 2) options.push(d);
                }
                var correctIdx = 0;
                var shuffled = options.slice();
                shuffled.sort(function() { return Math.random() - 0.5; });
                correctIdx = shuffled.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'In triangle ABC, \\(a = ' + s.a + '\\) cm, \\(b = ' + s.b + '\\) cm, \\(c = ' + s.c + '\\) cm. Find angle \\(A\\) to 1 d.p.',
                    options: shuffled.map(function(v) { return v.toFixed(1) + '^\\circ'; }),
                    correctIdx: correctIdx,
                    explain: '\\(\\cos A = \\frac{' + s.b + '^2 + ' + s.c + '^2 - ' + s.a + '^2}{2 \\times ' + s.b + ' \\times ' + s.c + '} = ' + cosA.toFixed(4) + '\\). \\(A = ' + correct.toFixed(1) + '^\\circ\\).'
                };
            }
        },
        // Screen 14 - Concept: Area of a triangle
        {
            type: 'concept',
            title: 'Area of a Triangle (Sine Formula)',
            content: `
                <p>For any triangle where you know two sides and the included angle:</p>
                <div class="lesson-box">
                    \\[ \\text{Area} = \\frac{1}{2}ab\\sin C \\]
                    where \\(a\\) and \\(b\\) are two sides and \\(C\\) is the <strong>included</strong> angle between them.
                </div>
                <p>This works for any pair of sides and their included angle:</p>
                <ul>
                    <li>\\(\\text{Area} = \\frac{1}{2}ab\\sin C\\)</li>
                    <li>\\(\\text{Area} = \\frac{1}{2}ac\\sin B\\)</li>
                    <li>\\(\\text{Area} = \\frac{1}{2}bc\\sin A\\)</li>
                </ul>
                <p>This is much more versatile than \\(\\frac{1}{2} \\times \\text{base} \\times \\text{height}\\) because you do not need to know the height.</p>
            `
        },
        // Screen 15 - Example: Area of a triangle
        {
            type: 'example',
            title: 'Finding the Area of a Triangle',
            problem: 'Find the area of triangle ABC where \\(b = 11\\) cm, \\(c = 8\\) cm, and \\(A = 35^\\circ\\).',
            steps: [
                { text: 'Use \\(\\text{Area} = \\frac{1}{2}bc\\sin A\\).' },
                { text: '\\(\\text{Area} = \\frac{1}{2} \\times 11 \\times 8 \\times \\sin 35^\\circ\\)' },
                { text: '\\(= 44 \\times 0.5736\\)' },
                { text: '\\(= 25.2\\) cm\\(^2\\) (to 3 s.f.)' }
            ]
        },
        // Screen 16 - Practice: Area of a triangle
        {
            type: 'practice',
            generate: function() {
                var side1 = [5, 6, 7, 8, 9, 10, 11, 12][Math.floor(Math.random() * 8)];
                var side2 = [6, 7, 8, 9, 10, 11, 12, 14][Math.floor(Math.random() * 8)];
                var angle = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 110, 120][Math.floor(Math.random() * 13)];
                var area = 0.5 * side1 * side2 * Math.sin(angle * Math.PI / 180);
                var correct = Math.round(area * 10) / 10;
                var options = [correct];
                while (options.length < 4) {
                    var d = Math.round((correct + (Math.random() * 12 - 6)) * 10) / 10;
                    if (d > 0 && options.indexOf(d) === -1 && Math.abs(d - correct) > 0.5) options.push(d);
                }
                var correctIdx = 0;
                var shuffled = options.slice();
                shuffled.sort(function() { return Math.random() - 0.5; });
                correctIdx = shuffled.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'Find the area of triangle ABC where \\(b = ' + side1 + '\\) cm, \\(c = ' + side2 + '\\) cm, \\(A = ' + angle + '^\\circ\\). Give your answer to 1 d.p.',
                    options: shuffled.map(function(v) { return v.toFixed(1) + ' cm\\(^2\\)'; }),
                    correctIdx: correctIdx,
                    explain: '\\(\\text{Area} = \\frac{1}{2} \\times ' + side1 + ' \\times ' + side2 + ' \\times \\sin ' + angle + '^\\circ = ' + correct.toFixed(1) + '\\) cm\\(^2\\).'
                };
            }
        },
        // Screen 17 - Practice: Mixed - choosing the right rule
        {
            type: 'practice',
            generate: function() {
                var problems = [
                    {
                        q: 'You know sides \\(a = 5\\), \\(b = 7\\) and angle \\(C = 60^\\circ\\) (between them). Which rule do you use to find side \\(c\\)?',
                        correct: 'Cosine rule',
                        wrong: ['Sine rule', 'Pythagoras', 'Area formula'],
                        exp: 'You have SAS (two sides and the included angle), so use the cosine rule.'
                    },
                    {
                        q: 'You know \\(A = 40^\\circ\\), \\(B = 70^\\circ\\), and \\(a = 10\\) cm. Which rule finds side \\(b\\)?',
                        correct: 'Sine rule',
                        wrong: ['Cosine rule', 'Pythagoras', 'Area formula'],
                        exp: 'You have a matching pair (\\(a\\) and \\(A\\)) plus another angle, so use the sine rule.'
                    },
                    {
                        q: 'You know all three sides: \\(a = 5\\), \\(b = 8\\), \\(c = 10\\). Which rule finds angle \\(A\\)?',
                        correct: 'Cosine rule (rearranged)',
                        wrong: ['Sine rule', 'Pythagoras', 'Area formula'],
                        exp: 'You have SSS (three sides), so use the cosine rule rearranged for the angle.'
                    },
                    {
                        q: 'You know \\(b = 9\\) cm, \\(c = 6\\) cm, and \\(A = 50^\\circ\\). What formula gives the area?',
                        correct: '\\(\\frac{1}{2}bc\\sin A\\)',
                        wrong: ['\\(\\frac{1}{2} \\times b \\times c\\)', '\\(bc\\cos A\\)', '\\(\\frac{1}{2}bc\\cos A\\)'],
                        exp: 'With two sides and the included angle, use Area = \\(\\frac{1}{2}bc\\sin A\\).'
                    }
                ];
                var p = problems[Math.floor(Math.random() * problems.length)];
                var options = [p.correct].concat(p.wrong);
                var correctIdx = 0;
                var shuffled = options.map(function(o, i) { return { o: o, i: i }; });
                shuffled.sort(function() { return Math.random() - 0.5; });
                options = shuffled.map(function(x) { return x.o; });
                correctIdx = shuffled.findIndex(function(x) { return x.i === 0; });
                return {
                    type: 'mc',
                    latex: p.q,
                    options: options,
                    correctIdx: correctIdx,
                    explain: p.exp
                };
            }
        },
        // Screen 18 - Summary
        {
            type: 'summary',
            title: 'Sine Rule & Cosine Rule - Summary',
            content: '<p>You now have the tools to solve any triangle, not just right-angled ones.</p>',
            points: [
                'Sine rule: \\(\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}\\). Use with AAS, ASA, or SSA.',
                'Beware the ambiguous case (SSA) - there may be two valid triangles.',
                'Cosine rule (side): \\(a^2 = b^2 + c^2 - 2bc\\cos A\\). Use with SAS.',
                'Cosine rule (angle): \\(\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}\\). Use with SSS.',
                'Area formula: \\(\\text{Area} = \\frac{1}{2}ab\\sin C\\) for two sides and the included angle.',
                'Always check: do you have a matching pair (side + opposite angle)? If yes, sine rule. If not, cosine rule.'
            ]
        }
    ]
};