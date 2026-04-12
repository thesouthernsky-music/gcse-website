window.CURRENT_LESSON = {
    title: "Factorising Quadratics",
    subtitle: "Breaking quadratics into factor pairs",
    screens: [
        // --- CONCEPT SCREENS ---
        {
            type: 'concept',
            title: 'What Does Factorising Mean?',
            content: `
                <p>Factorising is the reverse of expanding brackets. We write an expression as a <strong>product of factors</strong>.</p>
                <p>For quadratics, we want to write \\(ax^2 + bx + c\\) as a product of two brackets.</p>
                <div class="lesson-box">
                    <strong>Key idea:</strong> Expanding gives us a single expression. Factorising breaks it back into brackets.
                    \\[x^2 + 5x + 6 = (x + 2)(x + 3)\\]
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><defs><marker id="fq-axis" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#e0e0e0"/></marker></defs><line x1="30" y1="130" x2="300" y2="130" stroke="#444" stroke-width="0.5"/><line x1="160" y1="20" x2="160" y2="235" stroke="#444" stroke-width="0.5"/><text x="305" y="134" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">x</text><text x="164" y="18" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">y</text><path d="M45 90 Q70 30 100 5 Q120 -5 135 5 Q145 12 160 40 Q175 68 185 90 Q210 155 245 195 Q265 215 290 230" stroke="#00e5c7" stroke-width="2.5" fill="none"/><circle cx="95" cy="130" r="6" fill="#ff6b6b"/><text x="95" y="150" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b" font-weight="bold">x = -3</text><circle cx="128" cy="130" r="6" fill="#ff6b6b"/><text x="128" y="150" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b" font-weight="bold">x = -2</text><text x="250" y="30" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">y = x^2 + 5x + 6</text><text x="250" y="48" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">= (x+2)(x+3)</text><text x="160" y="230" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">The <tspan fill="#ff6b6b">roots</tspan> show where each <tspan fill="#feca57">factor</tspan> = 0</text></svg></div>
                <p>Factorising is essential for solving quadratic equations - once in factored form, we can find the roots directly.</p>
            `
        },
        {
            type: 'concept',
            title: 'Monic Quadratics: \\(x^2 + bx + c\\)',
            content: `
                <p>A <strong>monic</strong> quadratic has a leading coefficient of 1 (i.e. \\(a = 1\\)).</p>
                <p>To factorise \\(x^2 + bx + c\\), we need two numbers that:</p>
                <div class="lesson-box">
                    <ul>
                        <li><strong>Multiply</strong> to give \\(c\\)</li>
                        <li><strong>Add</strong> to give \\(b\\)</li>
                    </ul>
                    \\[x^2 + bx + c = (x + m)(x + n)\\]
                    where \\(m \\times n = c\\) and \\(m + n = b\\).
                </div>
                <p>Think of it as finding a factor pair of \\(c\\) whose sum is \\(b\\).</p>
            `
        },
        {
            type: 'concept',
            title: 'Choosing the Right Signs',
            content: `
                <p>The signs of \\(b\\) and \\(c\\) tell us about the signs of the two numbers:</p>
                <table style="width:100%; text-align:center; border-collapse:collapse; margin:1em 0;">
                    <tr style="border-bottom:2px solid var(--text-secondary);">
                        <th style="padding:0.5em;">\\(c\\)</th><th style="padding:0.5em;">\\(b\\)</th><th style="padding:0.5em;">Signs of factors</th>
                    </tr>
                    <tr><td>\\(+\\)</td><td>\\(+\\)</td><td>Both positive</td></tr>
                    <tr><td>\\(+\\)</td><td>\\(-\\)</td><td>Both negative</td></tr>
                    <tr><td>\\(-\\)</td><td>\\(+\\)</td><td>Positive has larger magnitude</td></tr>
                    <tr><td>\\(-\\)</td><td>\\(-\\)</td><td>Negative has larger magnitude</td></tr>
                </table>
                <div class="lesson-box warning">
                    <strong>Common mistake:</strong> Forgetting that when \\(c\\) is negative, the two numbers have <em>different</em> signs.
                </div>
            `
        },
        {
            type: 'concept',
            title: 'Non-Monic Quadratics: \\(ax^2 + bx + c\\)',
            content: `
                <p>When \\(a \\neq 1\\), we use the <strong>grouping method</strong> (also called the AC method).</p>
                <div class="lesson-box">
                    <strong>Steps for grouping:</strong>
                    <ol>
                        <li>Find \\(ac\\) (multiply the first and last coefficients)</li>
                        <li>Find two numbers that multiply to \\(ac\\) and add to \\(b\\)</li>
                        <li>Rewrite the middle term using those two numbers</li>
                        <li>Factor by grouping in pairs</li>
                    </ol>
                </div>
                <p>For example, to factorise \\(2x^2 + 7x + 3\\):</p>
                <p>\\(ac = 6\\). We need two numbers that multiply to 6 and add to 7: that's 6 and 1.</p>
            `
        },
        {
            type: 'concept',
            title: 'The Grouping Method in Detail',
            content: `
                <p>Continuing with \\(2x^2 + 7x + 3\\):</p>
                <p>Rewrite: \\(2x^2 + 6x + x + 3\\)</p>
                <p>Group: \\(2x(x + 3) + 1(x + 3)\\)</p>
                <p>Factor out \\((x + 3)\\): \\((x + 3)(2x + 1)\\)</p>
                <div class="lesson-box warning">
                    <strong>Common mistake:</strong> When grouping, both brackets <em>must</em> be identical. If they are not, check your splitting or try reordering the two middle terms.
                </div>
            `
        },
        {
            type: 'concept',
            title: 'Difference of Two Squares',
            content: `
                <p>A special factorisation pattern appears when there is <strong>no middle term</strong> and the constant is subtracted:</p>
                <div class="lesson-box">
                    <strong>Difference of Two Squares (DOTS):</strong>
                    \\[x^2 - a^2 = (x + a)(x - a)\\]
                </div>
                <p>This works because when we expand \\((x + a)(x - a)\\), the middle terms cancel:</p>
                \\[(x + a)(x - a) = x^2 - ax + ax - a^2 = x^2 - a^2\\]
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:360px;width:100%"><text x="160" y="18" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0" font-weight="bold">x^2 - 9 = (x+3)(x-3)</text><rect x="40" y="35" width="120" height="120" rx="2" fill="#00e5c7" opacity="0.15" stroke="#00e5c7" stroke-width="2"/><text x="100" y="100" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="16" fill="#00e5c7" font-weight="bold">x^2</text><text x="100" y="168" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">x</text><text x="25" y="100" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">x</text><rect x="160" y="35" width="36" height="120" rx="2" fill="#ff6b6b" opacity="0" stroke="none"/><text x="210" y="38" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">Remove</text><rect x="40" y="155" width="120" height="36" rx="2" fill="#ff6b6b" opacity="0" stroke="none"/><rect x="200" y="55" width="80" height="80" rx="2" fill="#ff6b6b" opacity="0.15" stroke="#ff6b6b" stroke-width="2"/><text x="240" y="100" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="16" fill="#ff6b6b" font-weight="bold">3^2=9</text><text x="240" y="148" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b">3</text><text x="188" y="100" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b">3</text><text x="210" y="55" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">minus</text><text x="160" y="188" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">x^2 - 9 = (x+3)(x-3)</text></svg></div>
                <p>Examples:</p>
                <ul>
                    <li>\\(x^2 - 9 = (x + 3)(x - 3)\\)</li>
                    <li>\\(x^2 - 25 = (x + 5)(x - 5)\\)</li>
                    <li>\\(4x^2 - 1 = (2x + 1)(2x - 1)\\)</li>
                </ul>
            `
        },
        {
            type: 'concept',
            title: 'Solving by Factorising',
            content: `
                <p>Once a quadratic is factorised, we use the <strong>null factor law</strong>:</p>
                <div class="lesson-box">
                    If \\(A \\times B = 0\\), then \\(A = 0\\) or \\(B = 0\\).
                </div>
                <p>So to solve \\(x^2 + 5x + 6 = 0\\):</p>
                <ol>
                    <li>Factorise: \\((x + 2)(x + 3) = 0\\)</li>
                    <li>Set each factor to zero: \\(x + 2 = 0\\) or \\(x + 3 = 0\\)</li>
                    <li>Solve: \\(x = -2\\) or \\(x = -3\\)</li>
                </ol>
                <div class="lesson-box warning">
                    <strong>Common mistake:</strong> Forgetting to set the equation equal to zero first. Always rearrange to \\(\\ldots = 0\\) before factorising.
                </div>
            `
        },
        // --- EXAMPLE SCREENS ---
        {
            type: 'example',
            title: 'Example: Factorise \\(x^2 + 5x + 6\\)',
            problem: 'Factorise \\(x^2 + 5x + 6\\)',
            steps: [
                { text: 'We need two numbers that multiply to \\(6\\) and add to \\(5\\).' },
                { text: 'Factor pairs of 6: \\(1 \\times 6\\), \\(2 \\times 3\\).' },
                { text: '\\(2 + 3 = 5\\). These are our numbers.' },
                { text: '\\(x^2 + 5x + 6 = (x + 2)(x + 3)\\)' }
            ]
        },
        {
            type: 'example',
            title: 'Example: Factorise \\(x^2 - 3x - 10\\)',
            problem: 'Factorise \\(x^2 - 3x - 10\\)',
            steps: [
                { text: 'We need two numbers that multiply to \\(-10\\) and add to \\(-3\\).' },
                { text: 'Since the product is negative, the numbers have different signs.' },
                { text: 'Factor pairs of \\(-10\\): \\(-5 \\times 2\\), \\(5 \\times (-2)\\), \\(-10 \\times 1\\), \\(10 \\times (-1)\\).' },
                { text: '\\(-5 + 2 = -3\\). These are our numbers.' },
                { text: '\\(x^2 - 3x - 10 = (x - 5)(x + 2)\\)' }
            ]
        },
        {
            type: 'example',
            title: 'Example: Factorise \\(2x^2 + 7x + 3\\)',
            problem: 'Factorise \\(2x^2 + 7x + 3\\) using the grouping method.',
            steps: [
                { text: 'Find \\(ac = 2 \\times 3 = 6\\).' },
                { text: 'We need two numbers that multiply to \\(6\\) and add to \\(7\\): that is \\(6\\) and \\(1\\).' },
                { text: 'Rewrite the middle term: \\(2x^2 + 6x + x + 3\\).' },
                { text: 'Group: \\(2x(x + 3) + 1(x + 3)\\).' },
                { text: 'Factor out the common bracket: \\((x + 3)(2x + 1)\\).' }
            ]
        },
        {
            type: 'example',
            title: 'Example: Solve \\(x^2 - 9 = 0\\)',
            problem: 'Solve \\(x^2 - 9 = 0\\).',
            steps: [
                { text: 'Recognise this as a difference of two squares: \\(x^2 - 3^2\\).' },
                { text: 'Factorise: \\((x + 3)(x - 3) = 0\\).' },
                { text: 'Set each factor to zero: \\(x + 3 = 0\\) or \\(x - 3 = 0\\).' },
                { text: '\\(x = -3\\) or \\(x = 3\\).' }
            ]
        },
        {
            type: 'example',
            title: 'Example: Solve \\(3x^2 + 10x - 8 = 0\\)',
            problem: 'Solve \\(3x^2 + 10x - 8 = 0\\) by factorising.',
            steps: [
                { text: 'Find \\(ac = 3 \\times (-8) = -24\\).' },
                { text: 'We need two numbers that multiply to \\(-24\\) and add to \\(10\\): that is \\(12\\) and \\(-2\\).' },
                { text: 'Rewrite: \\(3x^2 + 12x - 2x - 8\\).' },
                { text: 'Group: \\(3x(x + 4) - 2(x + 4)\\).' },
                { text: 'Factorise: \\((x + 4)(3x - 2) = 0\\).' },
                { text: '\\(x + 4 = 0\\) gives \\(x = -4\\). \\(3x - 2 = 0\\) gives \\(x = \\dfrac{2}{3}\\).' }
            ]
        },
        // --- PRACTICE SCREENS ---
        {
            type: 'practice',
            generate: function() {
                // Monic quadratic factorising
                var m = Math.floor(Math.random() * 9) - 4; // -4 to 4
                var n = Math.floor(Math.random() * 9) - 4;
                if (m === 0) m = 1;
                if (n === 0) n = -1;
                if (m === n) n = m + 1;
                var b = m + n;
                var c = m * n;
                var bStr = b > 0 ? '+ ' + b : '- ' + Math.abs(b);
                var cStr = c > 0 ? '+ ' + c : '- ' + Math.abs(c);
                // Sort so smaller root first in answer
                var r1 = Math.min(m, n);
                var r2 = Math.max(m, n);
                var f1 = r1 >= 0 ? '(x + ' + r1 + ')' : '(x - ' + Math.abs(r1) + ')';
                var f2 = r2 >= 0 ? '(x + ' + r2 + ')' : '(x - ' + Math.abs(r2) + ')';
                var correct = f1 + f2;

                // Generate wrong options
                var wrongs = [];
                var w1r = r1 + 1, w1s = r2;
                wrongs.push((w1r >= 0 ? '(x + ' + w1r + ')' : '(x - ' + Math.abs(w1r) + ')') + (w1s >= 0 ? '(x + ' + w1s + ')' : '(x - ' + Math.abs(w1s) + ')'));
                var w2r = -r1, w2s = -r2;
                wrongs.push((w2r >= 0 ? '(x + ' + w2r + ')' : '(x - ' + Math.abs(w2r) + ')') + (w2s >= 0 ? '(x + ' + w2s + ')' : '(x - ' + Math.abs(w2s) + ')'));
                wrongs.push((r1 >= 0 ? '(x + ' + r1 + ')' : '(x - ' + Math.abs(r1) + ')') + (r2 + 1 >= 0 ? '(x + ' + (r2 + 1) + ')' : '(x - ' + Math.abs(r2 + 1) + ')'));

                // Remove duplicates of correct
                wrongs = wrongs.filter(function(w) { return w !== correct; });
                while (wrongs.length < 3) wrongs.push('(x + ' + (r1 + 2) + ')(x + ' + (r2 - 2) + ')');

                var options = [correct, wrongs[0], wrongs[1], wrongs[2]];
                // Shuffle
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = options[i]; options[i] = options[j]; options[j] = temp;
                }

                return {
                    type: 'mc',
                    latex: 'Factorise \\ x^2 ' + bStr + 'x ' + cStr,
                    options: options,
                    correctIdx: options.indexOf(correct),
                    answer: correct,
                    explain: 'We need two numbers that multiply to \\(' + c + '\\) and add to \\(' + b + '\\). Those are \\(' + r1 + '\\) and \\(' + r2 + '\\), giving \\(' + correct + '\\).'
                };
            }
        },
        {
            type: 'practice',
            generate: function() {
                // Difference of two squares
                var a = Math.floor(Math.random() * 8) + 2; // 2 to 9
                var asq = a * a;
                var correct = '(x + ' + a + ')(x - ' + a + ')';

                var options = [
                    correct,
                    '(x + ' + asq + ')(x - 1)',
                    '(x + ' + a + ')(x + ' + a + ')',
                    '(x - ' + a + ')(x - ' + a + ')'
                ];
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = options[i]; options[i] = options[j]; options[j] = temp;
                }

                return {
                    type: 'mc',
                    latex: 'Factorise \\ x^2 - ' + asq,
                    options: options,
                    correctIdx: options.indexOf(correct),
                    answer: correct,
                    explain: 'This is a difference of two squares: \\(x^2 - ' + a + '^2 = (x + ' + a + ')(x - ' + a + ')\\).'
                };
            }
        },
        {
            type: 'practice',
            generate: function() {
                // Solve monic quadratic = 0
                var r1 = Math.floor(Math.random() * 9) - 4;
                var r2 = Math.floor(Math.random() * 9) - 4;
                if (r1 === 0) r1 = 1;
                if (r2 === 0) r2 = -1;
                if (r1 === r2) r2 = r1 + 2;
                // Roots are -r1 and -r2 (since (x+r1)(x+r2)=0 gives x=-r1, x=-r2)
                var sol1 = -r1, sol2 = -r2;
                var b = r1 + r2;
                var c = r1 * r2;
                var bStr = b > 0 ? '+ ' + b : b === 0 ? '' : '- ' + Math.abs(b);
                var cStr = c > 0 ? '+ ' + c : c === 0 ? '' : '- ' + Math.abs(c);

                var small = Math.min(sol1, sol2);
                var big = Math.max(sol1, sol2);
                var correct = 'x = ' + small + ' or x = ' + big;

                var options = [
                    correct,
                    'x = ' + (-small) + ' or x = ' + (-big),
                    'x = ' + (small + 1) + ' or x = ' + (big - 1),
                    'x = ' + small + ' or x = ' + (big + 1)
                ];
                // Deduplicate
                var unique = [correct];
                for (var k = 1; k < options.length; k++) {
                    if (unique.indexOf(options[k]) === -1) unique.push(options[k]);
                }
                while (unique.length < 4) unique.push('x = ' + (big + 2) + ' or x = ' + (small - 2));
                options = unique;

                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = options[i]; options[i] = options[j]; options[j] = temp;
                }

                return {
                    type: 'mc',
                    latex: 'Solve \\ x^2 ' + bStr + 'x ' + cStr + ' = 0',
                    options: options,
                    correctIdx: options.indexOf(correct),
                    answer: correct,
                    explain: 'Factorising gives \\((x ' + (r1 >= 0 ? '+ ' + r1 : '- ' + Math.abs(r1)) + ')(x ' + (r2 >= 0 ? '+ ' + r2 : '- ' + Math.abs(r2)) + ') = 0\\). Setting each factor to zero: \\(x = ' + sol1 + '\\) or \\(x = ' + sol2 + '\\).'
                };
            }
        },
        {
            type: 'practice',
            generate: function() {
                // Non-monic factorising (short answer)
                // Generate (ax + b)(cx + d) where a*c is small
                var a = Math.floor(Math.random() * 2) + 2; // 2 or 3
                var c = 1;
                var b = Math.floor(Math.random() * 5) + 1; // 1 to 5
                var d = Math.floor(Math.random() * 5) + 1;
                if (b === d && a === 1) d = b + 1;
                var sign = Math.random() < 0.5 ? 1 : -1;
                d = d * sign;

                var A = a * c;
                var B = a * d + b * c;
                var C = b * d;

                var bStr = B > 0 ? '+ ' + B : '- ' + Math.abs(B);
                var cStr = C > 0 ? '+ ' + C : '- ' + Math.abs(C);

                var f1b = b >= 0 ? '+ ' + b : '- ' + Math.abs(b);
                var f2d = d >= 0 ? '+ ' + d : '- ' + Math.abs(d);
                var correct = '(' + a + 'x ' + f1b + ')(x ' + f2d + ')';

                return {
                    type: 'short',
                    latex: 'Factorise \\ ' + A + 'x^2 ' + bStr + 'x ' + cStr,
                    answer: correct,
                    explain: 'Using the grouping method: \\(ac = ' + (A * C) + '\\). The factorisation is \\(' + correct + '\\).'
                };
            }
        },
        {
            type: 'practice',
            generate: function() {
                // Solve using DOTS
                var a = Math.floor(Math.random() * 10) + 2;
                var asq = a * a;
                var correct = 'x = -' + a + ' or x = ' + a;
                var options = [
                    correct,
                    'x = ' + a + ' only',
                    'x = -' + a + ' only',
                    'x = -' + asq + ' or x = ' + asq
                ];
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = options[i]; options[i] = options[j]; options[j] = temp;
                }
                return {
                    type: 'mc',
                    latex: 'Solve \\ x^2 - ' + asq + ' = 0',
                    options: options,
                    correctIdx: options.indexOf(correct),
                    answer: correct,
                    explain: 'Using difference of two squares: \\(x^2 - ' + asq + ' = (x + ' + a + ')(x - ' + a + ') = 0\\), so \\(x = -' + a + '\\) or \\(x = ' + a + '\\).'
                };
            }
        },
        // --- SUMMARY ---
        {
            type: 'summary',
            title: 'Factorising Quadratics - Summary',
            content: '<p>You have learned how to factorise and solve quadratic expressions and equations.</p>',
            points: [
                'For monic quadratics \\(x^2 + bx + c\\): find two numbers that multiply to \\(c\\) and add to \\(b\\)',
                'For non-monic \\(ax^2 + bx + c\\): use the grouping (AC) method',
                'Difference of two squares: \\(x^2 - a^2 = (x + a)(x - a)\\)',
                'To solve: factorise, then set each factor equal to zero',
                'Always rearrange to \\(= 0\\) before factorising'
            ]
        }
    ]
};
