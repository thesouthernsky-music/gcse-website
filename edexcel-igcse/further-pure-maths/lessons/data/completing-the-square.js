window.CURRENT_LESSON = {
    title: "Completing the Square",
    subtitle: "Rewriting quadratics in vertex form",
    screens: [
        // --- CONCEPT SCREENS ---
        {
            type: 'concept',
            title: 'Why Complete the Square?',
            content: `
                <p>Completing the square rewrites a quadratic in a form that immediately reveals:</p>
                <ul>
                    <li>The <strong>turning point</strong> (vertex) of the parabola</li>
                    <li>An alternative route to <strong>solving</strong> quadratic equations</li>
                    <li>Whether the quadratic has a <strong>minimum or maximum</strong> value</li>
                </ul>
                <div class="lesson-box">
                    We aim to write \\(x^2 + bx + c\\) in the form:
                    \\[(x + p)^2 + q\\]
                </div>
                <p>This is sometimes called <strong>vertex form</strong> because the turning point is at \\((-p, q)\\).</p>
            `
        },
        {
            type: 'concept',
            title: 'The Method: Half, Square, Adjust',
            content: `
                <p>To complete the square on \\(x^2 + bx + c\\):</p>
                <div class="lesson-box">
                    <ol>
                        <li><strong>Half</strong> the coefficient of \\(x\\): this gives \\(p = \\dfrac{b}{2}\\)</li>
                        <li><strong>Square</strong> it: \\(p^2 = \\left(\\dfrac{b}{2}\\right)^2\\)</li>
                        <li><strong>Adjust</strong> the constant: \\(q = c - p^2\\)</li>
                    </ol>
                </div>
                <p>Result: \\(x^2 + bx + c = \\left(x + \\dfrac{b}{2}\\right)^2 + c - \\left(\\dfrac{b}{2}\\right)^2\\)</p>
                <p>This works because \\((x + p)^2 = x^2 + 2px + p^2\\), so we need \\(2p = b\\), i.e. \\(p = \\dfrac{b}{2}\\).</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><text x="160" y="18" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0" font-weight="bold">Completing the square: x^2 + 6x</text><rect x="20" y="30" width="90" height="90" rx="2" fill="#00e5c7" opacity="0.2" stroke="#00e5c7" stroke-width="2"/><text x="65" y="80" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="14" fill="#00e5c7">x^2</text><text x="65" y="135" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#00e5c7">x</text><text x="8" y="80" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#00e5c7">x</text><rect x="110" y="30" width="45" height="90" rx="2" fill="#54a0ff" opacity="0.2" stroke="#54a0ff" stroke-width="2"/><text x="132" y="80" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#54a0ff">3x</text><text x="132" y="135" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">3</text><rect x="20" y="120" width="90" height="45" rx="2" fill="#54a0ff" opacity="0.2" stroke="#54a0ff" stroke-width="2"/><text x="65" y="148" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#54a0ff">3x</text><text x="8" y="148" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">3</text><rect x="110" y="120" width="45" height="45" rx="2" fill="#ff6b6b" opacity="0.2" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="4,3"/><text x="132" y="148" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b">9</text><text x="175" y="90" text-anchor="start" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">Split 6x into</text><text x="175" y="105" text-anchor="start" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#54a0ff">two halves (3x + 3x)</text><text x="175" y="148" text-anchor="start" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#ff6b6b">Add 9 to complete</text><text x="175" y="163" text-anchor="start" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#ff6b6b">the square</text><rect x="20" y="30" width="135" height="135" rx="2" fill="none" stroke="#feca57" stroke-width="2.5"/><text x="87" y="195" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#feca57" font-weight="bold">(x + 3)^2</text><text x="160" y="218" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">x^2 + 6x = <tspan fill="#feca57">(x+3)^2</tspan> - <tspan fill="#ff6b6b">9</tspan></text></svg></div>
            `
        },
        {
            type: 'concept',
            title: 'Understanding the Adjustment',
            content: `
                <p>When we write \\((x + p)^2\\), we get \\(x^2 + 2px + p^2\\).</p>
                <p>But we only wanted \\(x^2 + 2px\\) (matching \\(x^2 + bx\\)). The \\(p^2\\) is extra, so we subtract it:</p>
                \\[x^2 + bx = \\left(x + \\frac{b}{2}\\right)^2 - \\left(\\frac{b}{2}\\right)^2\\]
                <p>Then we add back the original constant \\(c\\):</p>
                \\[x^2 + bx + c = \\left(x + \\frac{b}{2}\\right)^2 - \\left(\\frac{b}{2}\\right)^2 + c\\]
                <div class="lesson-box warning">
                    <strong>Common mistake:</strong> Forgetting to subtract \\(p^2\\). The square bracket introduces an extra \\(p^2\\) that must be compensated for.
                </div>
            `
        },
        {
            type: 'concept',
            title: 'When \\(a \\neq 1\\): Factor Out First',
            content: `
                <p>For \\(ax^2 + bx + c\\) where \\(a \\neq 1\\), factor out \\(a\\) from the first two terms first:</p>
                <div class="lesson-box">
                    \\[ax^2 + bx + c = a\\left(x^2 + \\frac{b}{a}x\\right) + c\\]
                    Then complete the square inside the bracket and remember the factor of \\(a\\) multiplies everything inside.
                </div>
                <p>For example: \\(2x^2 + 8x + 3\\)</p>
                <p>\\(= 2(x^2 + 4x) + 3 = 2\\left[(x + 2)^2 - 4\\right] + 3 = 2(x + 2)^2 - 8 + 3 = 2(x + 2)^2 - 5\\)</p>
            `
        },
        {
            type: 'concept',
            title: 'Finding the Turning Point',
            content: `
                <p>The completed square form directly tells us the turning point of \\(y = ax^2 + bx + c\\):</p>
                <div class="lesson-box">
                    If \\(y = a(x + p)^2 + q\\), the turning point is at \\((-p, \\ q)\\).
                    <ul>
                        <li>If \\(a > 0\\): minimum point at \\((-p, q)\\)</li>
                        <li>If \\(a < 0\\): maximum point at \\((-p, q)\\)</li>
                    </ul>
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><defs><marker id="cts-axis" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#e0e0e0"/></marker></defs><line x1="30" y1="130" x2="300" y2="130" stroke="#444" stroke-width="0.5"/><line x1="160" y1="20" x2="160" y2="230" stroke="#444" stroke-width="0.5"/><text x="305" y="134" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">x</text><text x="164" y="18" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">y</text><path d="M40 30 Q60 60 80 90 Q100 130 120 155 Q140 175 160 180 Q180 175 200 155 Q220 130 240 90 Q260 60 280 30" stroke="#00e5c7" stroke-width="2.5" fill="none"/><circle cx="160" cy="180" r="6" fill="#feca57"/><text x="160" y="198" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57" font-weight="bold">vertex (-p, q)</text><line x1="160" y1="180" x2="30" y2="180" stroke="#feca57" stroke-width="1" stroke-dasharray="4,3"/><text x="35" y="176" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">q</text><line x1="160" y1="130" x2="160" y2="230" stroke="#feca57" stroke-width="1" stroke-dasharray="4,3"/><text x="145" y="220" text-anchor="end" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">x = -p</text><text x="250" y="50" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">y = (x+p)^2 + q</text><text x="250" y="66" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">minimum at</text><text x="250" y="80" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">(-p, q)</text></svg></div>
                <p>This is because \\((x + p)^2 \\geq 0\\) always, so:</p>
                <ul>
                    <li>The smallest value of \\((x + p)^2\\) is 0, which occurs when \\(x = -p\\)</li>
                    <li>At that point, \\(y = q\\)</li>
                </ul>
            `
        },
        {
            type: 'concept',
            title: 'Solving by Completing the Square',
            content: `
                <p>We can also solve equations using the completed square form:</p>
                <p>If \\((x + p)^2 + q = 0\\), then:</p>
                \\[(x + p)^2 = -q\\]
                \\[x + p = \\pm\\sqrt{-q}\\]
                \\[x = -p \\pm \\sqrt{-q}\\]
                <div class="lesson-box warning">
                    <strong>Common mistake:</strong> Forgetting the \\(\\pm\\) when square rooting. There are always two square roots (positive and negative), giving two solutions.
                </div>
                <p>Note: If \\(-q < 0\\) (i.e. \\(q > 0\\)), there are no real solutions since we cannot square root a negative number.</p>
            `
        },
        // --- EXAMPLE SCREENS ---
        {
            type: 'example',
            title: 'Example: Complete the Square on \\(x^2 + 6x + 2\\)',
            problem: 'Write \\(x^2 + 6x + 2\\) in the form \\((x + p)^2 + q\\).',
            steps: [
                { text: 'Half the coefficient of \\(x\\): \\(\\frac{6}{2} = 3\\), so \\(p = 3\\).' },
                { text: 'Square it: \\(3^2 = 9\\).' },
                { text: 'Write the bracket and adjust: \\((x + 3)^2 - 9 + 2\\).' },
                { text: 'Simplify: \\((x + 3)^2 - 7\\).' },
                { text: 'So \\(p = 3\\) and \\(q = -7\\).' }
            ]
        },
        {
            type: 'example',
            title: 'Example: Find the Turning Point of \\(y = x^2 - 4x + 7\\)',
            problem: 'Find the turning point of \\(y = x^2 - 4x + 7\\).',
            steps: [
                { text: 'Half the coefficient of \\(x\\): \\(\\frac{-4}{2} = -2\\).' },
                { text: 'Square it: \\((-2)^2 = 4\\).' },
                { text: 'Complete the square: \\(y = (x - 2)^2 - 4 + 7 = (x - 2)^2 + 3\\).' },
                { text: 'The turning point is at \\((2, 3)\\).' },
                { text: 'Since the coefficient of \\(x^2\\) is positive, this is a <strong>minimum</strong> point.' }
            ]
        },
        {
            type: 'example',
            title: 'Example: Complete the Square on \\(2x^2 + 12x + 5\\)',
            problem: 'Write \\(2x^2 + 12x + 5\\) in the form \\(a(x + p)^2 + q\\).',
            steps: [
                { text: 'Factor out 2 from the first two terms: \\(2(x^2 + 6x) + 5\\).' },
                { text: 'Complete the square inside: \\(2[(x + 3)^2 - 9] + 5\\).' },
                { text: 'Distribute the 2: \\(2(x + 3)^2 - 18 + 5\\).' },
                { text: 'Simplify: \\(2(x + 3)^2 - 13\\).' }
            ]
        },
        // --- PRACTICE SCREENS ---
        {
            type: 'practice',
            generate: function() {
                // Complete the square: x^2 + bx + c
                var halfB = Math.floor(Math.random() * 9) - 4; // -4 to 4
                if (halfB === 0) halfB = 3;
                var b = 2 * halfB;
                var c = Math.floor(Math.random() * 13) - 6; // -6 to 6
                var q = c - halfB * halfB;

                var bStr = b > 0 ? '+ ' + b : '- ' + Math.abs(b);
                var cStr = c > 0 ? '+ ' + c : c === 0 ? '' : '- ' + Math.abs(c);
                var pStr = halfB >= 0 ? '+ ' + halfB : '- ' + Math.abs(halfB);
                var qStr = q >= 0 ? '+ ' + q : '- ' + Math.abs(q);

                var correct = '(x ' + pStr + ')^2 ' + qStr;
                var wrong1 = '(x ' + pStr + ')^2 ' + (q + halfB * halfB >= 0 ? '+ ' + (q + halfB * halfB) : '- ' + Math.abs(q + halfB * halfB));
                var wrong2 = '(x ' + (b >= 0 ? '+ ' + b : '- ' + Math.abs(b)) + ')^2 ' + (c - b * b >= 0 ? '+ ' + (c - b * b) : '- ' + Math.abs(c - b * b));
                var qFlip = -q;
                var wrong3 = '(x ' + pStr + ')^2 ' + (qFlip >= 0 ? '+ ' + qFlip : '- ' + Math.abs(qFlip));

                var options = [correct, wrong1, wrong2, wrong3];
                // Deduplicate
                var unique = [correct];
                for (var k = 1; k < options.length; k++) {
                    if (unique.indexOf(options[k]) === -1) unique.push(options[k]);
                }
                while (unique.length < 4) {
                    unique.push('(x ' + pStr + ')^2 ' + (q - 2 >= 0 ? '+ ' + (q - 2) : '- ' + Math.abs(q - 2)));
                    if (unique.length < 4) unique.push('(x ' + pStr + ')^2 ' + (q + 2 >= 0 ? '+ ' + (q + 2) : '- ' + Math.abs(q + 2)));
                }
                options = unique.slice(0, 4);

                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = options[i]; options[i] = options[j]; options[j] = temp;
                }

                return {
                    type: 'mc',
                    latex: 'Write \\ x^2 ' + bStr + 'x ' + cStr + ' \\ in the form \\ (x + p)^2 + q',
                    options: options,
                    correctIdx: options.indexOf(correct),
                    answer: correct,
                    explain: 'Half of \\(' + b + '\\) is \\(' + halfB + '\\). Squaring gives \\(' + (halfB * halfB) + '\\). So we get \\((x ' + pStr + ')^2 - ' + (halfB * halfB) + ' + ' + c + ' = ' + correct + '\\).'
                };
            }
        },
        {
            type: 'practice',
            generate: function() {
                // Find the turning point
                var p = Math.floor(Math.random() * 9) - 4;
                if (p === 0) p = 2;
                var q = Math.floor(Math.random() * 13) - 6;
                // y = (x - p)^2 + q = x^2 - 2px + p^2 + q
                var b = -2 * p;
                var c = p * p + q;

                var bStr = b > 0 ? '+ ' + b : b === 0 ? '' : '- ' + Math.abs(b);
                var cStr = c > 0 ? '+ ' + c : c === 0 ? '' : '- ' + Math.abs(c);

                var correct = '(' + p + ', ' + q + ')';
                var options = [
                    correct,
                    '(' + (-p) + ', ' + q + ')',
                    '(' + p + ', ' + (-q) + ')',
                    '(' + (-p) + ', ' + (-q) + ')'
                ];
                var unique = [correct];
                for (var k = 1; k < options.length; k++) {
                    if (unique.indexOf(options[k]) === -1) unique.push(options[k]);
                }
                while (unique.length < 4) {
                    unique.push('(' + (p + 1) + ', ' + (q + 1) + ')');
                    if (unique.length < 4) unique.push('(' + (p - 1) + ', ' + (q - 1) + ')');
                }
                options = unique.slice(0, 4);

                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = options[i]; options[i] = options[j]; options[j] = temp;
                }

                return {
                    type: 'mc',
                    latex: 'Find the turning point of \\ y = x^2 ' + bStr + 'x ' + cStr,
                    options: options,
                    correctIdx: options.indexOf(correct),
                    answer: correct,
                    explain: 'Completing the square: \\(y = (x ' + (-p >= 0 ? '+ ' + (-p) : '- ' + p) + ')^2 + ' + q + '\\). The turning point is \\((' + p + ', ' + q + ')\\).'
                };
            }
        },
        {
            type: 'practice',
            generate: function() {
                // Complete the square - short answer
                var halfB = Math.floor(Math.random() * 7) - 3;
                if (halfB === 0) halfB = -2;
                var b = 2 * halfB;
                var c = Math.floor(Math.random() * 11) - 5;
                var q = c - halfB * halfB;

                var bStr = b > 0 ? '+ ' + b : '- ' + Math.abs(b);
                var cStr = c > 0 ? '+ ' + c : c === 0 ? '' : '- ' + Math.abs(c);
                var pStr = halfB >= 0 ? '+ ' + halfB : '- ' + Math.abs(halfB);
                var qStr = q >= 0 ? '+ ' + q : '- ' + Math.abs(q);

                return {
                    type: 'short',
                    latex: 'Write \\ x^2 ' + bStr + 'x ' + cStr + ' \\ in completed square form. State the value of \\(q\\).',
                    answer: '' + q,
                    explain: 'Half of \\(' + b + '\\) is \\(' + halfB + '\\). The completed square is \\((x ' + pStr + ')^2 ' + qStr + '\\), so \\(q = ' + q + '\\).'
                };
            }
        },
        {
            type: 'practice',
            generate: function() {
                // Minimum value question
                var p = Math.floor(Math.random() * 7) - 3;
                if (p === 0) p = 1;
                var q = Math.floor(Math.random() * 11) - 2;
                var b = -2 * p;
                var c = p * p + q;

                var bStr = b > 0 ? '+ ' + b : b === 0 ? '' : '- ' + Math.abs(b);
                var cStr = c > 0 ? '+ ' + c : c === 0 ? '' : '- ' + Math.abs(c);

                var correct = '' + q;
                var options = [
                    correct,
                    '' + (-q),
                    '' + c,
                    '' + (p * p)
                ];
                var unique = [correct];
                for (var k = 1; k < options.length; k++) {
                    if (unique.indexOf(options[k]) === -1) unique.push(options[k]);
                }
                while (unique.length < 4) {
                    unique.push('' + (q + 1));
                    if (unique.length < 4) unique.push('' + (q - 1));
                }
                options = unique.slice(0, 4);

                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = options[i]; options[i] = options[j]; options[j] = temp;
                }

                return {
                    type: 'mc',
                    latex: 'What is the minimum value of \\ y = x^2 ' + bStr + 'x ' + cStr + '?',
                    options: options,
                    correctIdx: options.indexOf(correct),
                    answer: correct,
                    explain: 'Completing the square gives \\(y = (x ' + (-p >= 0 ? '+ ' + (-p) : '- ' + p) + ')^2 + ' + q + '\\). The minimum value of \\((x ' + (-p >= 0 ? '+ ' + (-p) : '- ' + p) + ')^2\\) is 0, so the minimum value of \\(y\\) is \\(' + q + '\\).'
                };
            }
        },
        // --- SUMMARY ---
        {
            type: 'summary',
            title: 'Completing the Square - Summary',
            content: '<p>You have learned to rewrite quadratics in completed square form and use it to find turning points.</p>',
            points: [
                'To complete the square on \\(x^2 + bx + c\\): half \\(b\\), square it, adjust the constant',
                'Result: \\((x + \\frac{b}{2})^2 + c - (\\frac{b}{2})^2\\)',
                'If \\(a \\neq 1\\), factor out \\(a\\) from the \\(x\\) terms first',
                'The turning point of \\(y = (x + p)^2 + q\\) is \\((-p, q)\\)',
                'Positive leading coefficient gives a minimum; negative gives a maximum'
            ]
        }
    ]
};
