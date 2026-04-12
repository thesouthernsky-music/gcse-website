window.CURRENT_LESSON = {
    title: "Polynomial Division",
    subtitle: "Dividing polynomials using long division and inspection",
    screens: [
        // --- CONCEPT 1: Why divide polynomials ---
        {
            type: 'concept',
            title: 'Why Divide Polynomials?',
            content: `
                <p>Polynomial division is used to:</p>
                <ul>
                    <li>Find the quotient and remainder when one polynomial is divided by another</li>
                    <li>Factorise higher-degree polynomials once one factor is known</li>
                    <li>Express improper algebraic fractions in a useful form</li>
                </ul>
                <p>The key relationship is:</p>
                \\[f(x) = (x - a) \\cdot Q(x) + R\\]
                <p>where \\(Q(x)\\) is the <strong>quotient</strong> and \\(R\\) is the <strong>remainder</strong>.</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px;width:100%"><rect x="20" y="30" width="280" height="50" rx="6" fill="none" stroke="#54a0ff" stroke-width="2"/><text x="160" y="60" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="15" fill="#e0e0e0">f(x)</text><rect x="20" y="110" width="120" height="50" rx="6" fill="none" stroke="#00e5c7" stroke-width="2"/><text x="80" y="140" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="14" fill="#e0e0e0">(x - a)</text><text x="150" y="140" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="18" fill="#feca57">x</text><rect x="165" y="110" width="95" height="50" rx="6" fill="none" stroke="#00e5c7" stroke-width="2"/><text x="212" y="140" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="14" fill="#e0e0e0">Q(x)</text><text x="270" y="140" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="18" fill="#feca57">+</text><rect x="282" y="118" width="30" height="34" rx="6" fill="none" stroke="#ff6b6b" stroke-width="2"/><text x="297" y="140" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="14" fill="#ff6b6b">R</text><text x="160" y="88" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="16" fill="#feca57">=</text><text x="80" y="180" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">divisor</text><text x="192" y="180" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">quotient</text><text x="278" y="180" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">rem.</text></svg></div>
            `
        },
        // --- CONCEPT 2: Long division method ---
        {
            type: 'concept',
            title: 'Algebraic Long Division - The Method',
            content: `
                <p>To divide \\(f(x)\\) by \\((x - a)\\) using long division:</p>
                <ol>
                    <li>Divide the leading term of \\(f(x)\\) by \\(x\\) to get the first term of the quotient</li>
                    <li>Multiply the entire divisor by this term</li>
                    <li>Subtract from \\(f(x)\\)</li>
                    <li>Bring down the next term</li>
                    <li>Repeat until the degree of the remainder is less than the degree of the divisor</li>
                </ol>
                <p>This works exactly like numerical long division - just with \\(x\\) instead of 10.</p>
            `
        },
        // --- CONCEPT 3: Step-by-step layout ---
        {
            type: 'concept',
            title: 'Setting Up Long Division',
            content: `
                <p>Write the division as:</p>
                \\[\\frac{x^3 + 2x^2 - 5x - 6}{x - 2}\\]
                <p>Important points:</p>
                <ul>
                    <li>Write terms in <strong>descending order</strong> of powers</li>
                    <li>If any power is missing, include it with a <strong>zero coefficient</strong> (e.g. \\(0x^2\\))</li>
                    <li>Align terms of the same degree in the same column</li>
                </ul>
                <p>For example, \\(x^3 + 5\\) should be written as \\(x^3 + 0x^2 + 0x + 5\\).</p>
            `
        },
        // --- EXAMPLE 1: Basic long division ---
        {
            type: 'example',
            title: 'Long Division Example',
            problem: 'Divide \\(x^3 + 2x^2 - 5x - 6\\) by \\((x - 2)\\).',
            steps: [
                { text: 'Step 1: \\(x^3 \\div x = x^2\\). Multiply: \\(x^2(x - 2) = x^3 - 2x^2\\).' },
                { text: 'Subtract: \\((x^3 + 2x^2) - (x^3 - 2x^2) = 4x^2\\). Bring down \\(-5x\\): get \\(4x^2 - 5x\\).' },
                { text: 'Step 2: \\(4x^2 \\div x = 4x\\). Multiply: \\(4x(x - 2) = 4x^2 - 8x\\).' },
                { text: 'Subtract: \\((4x^2 - 5x) - (4x^2 - 8x) = 3x\\). Bring down \\(-6\\): get \\(3x - 6\\).' },
                { text: 'Step 3: \\(3x \\div x = 3\\). Multiply: \\(3(x - 2) = 3x - 6\\).' },
                { text: 'Subtract: \\((3x - 6) - (3x - 6) = 0\\).' },
                { text: 'Quotient: \\(x^2 + 4x + 3\\), Remainder: \\(0\\).' },
                { text: 'So \\(x^3 + 2x^2 - 5x - 6 = (x - 2)(x^2 + 4x + 3) = (x - 2)(x + 1)(x + 3)\\).' }
            ]
        },
        // --- PRACTICE 1: Basic division ---
        {
            type: 'practice',
            generate: function() {
                // (x - r1)(x^2 + bx + c) where result is exact
                var r1 = [1, 2, 3, -1, -2][Math.floor(Math.random() * 5)];
                var b = Math.floor(Math.random() * 7) - 3;
                var c = Math.floor(Math.random() * 7) - 3;
                // f(x) = x^3 + (b - r1)x^2 + (c - r1*b)x + (-r1*c)
                var p = b - r1;
                var q = c - r1 * b;
                var r = -r1 * c;
                var pStr = (p >= 0 ? '+ ' + p : '- ' + (-p));
                var qStr = (q >= 0 ? '+ ' + q : '- ' + (-q));
                var rStr = (r >= 0 ? '+ ' + r : '- ' + (-r));
                var divisor = r1 > 0 ? '(x - ' + r1 + ')' : '(x + ' + (-r1) + ')';
                var bStr2 = (b >= 0 ? '+ ' + b : '- ' + (-b));
                var cStr2 = (c >= 0 ? '+ ' + c : '- ' + (-c));
                var ans = 'x^2 ' + bStr2 + 'x ' + cStr2;
                return {
                    type: 'short',
                    latex: 'Divide \\(x^3 ' + pStr + 'x^2 ' + qStr + 'x ' + rStr + '\\) by \\(' + divisor + '\\). Give the quotient.',
                    answer: ans,
                    explain: 'Using long division, \\(x^3 ' + pStr + 'x^2 ' + qStr + 'x ' + rStr + ' = ' + divisor + '(x^2 ' + bStr2 + 'x ' + cStr2 + ')\\).'
                };
            }
        },
        // --- CONCEPT 4: Division with remainder ---
        {
            type: 'concept',
            title: 'Division with a Remainder',
            content: `
                <p>When the division is not exact, there will be a non-zero remainder:</p>
                \\[f(x) = (x - a) \\cdot Q(x) + R\\]
                <p>The remainder \\(R\\) is a constant (degree 0) when dividing by a linear factor.</p>
                <p>You can verify your answer: substitute \\(x = a\\) into both sides. The left side gives \\(f(a)\\), and the right side gives \\(0 \\cdot Q(a) + R = R\\). This confirms the Remainder Theorem!</p>
            `
        },
        // --- EXAMPLE 2: Division with remainder ---
        {
            type: 'example',
            title: 'Division with Remainder',
            problem: 'Find the quotient and remainder when \\(2x^3 - x^2 + 3x - 1\\) is divided by \\((x + 1)\\).',
            steps: [
                { text: 'Step 1: \\(2x^3 \\div x = 2x^2\\). Multiply: \\(2x^2(x + 1) = 2x^3 + 2x^2\\).' },
                { text: 'Subtract: \\((2x^3 - x^2) - (2x^3 + 2x^2) = -3x^2\\). Bring down \\(+3x\\): get \\(-3x^2 + 3x\\).' },
                { text: 'Step 2: \\(-3x^2 \\div x = -3x\\). Multiply: \\(-3x(x + 1) = -3x^2 - 3x\\).' },
                { text: 'Subtract: \\((-3x^2 + 3x) - (-3x^2 - 3x) = 6x\\). Bring down \\(-1\\): get \\(6x - 1\\).' },
                { text: 'Step 3: \\(6x \\div x = 6\\). Multiply: \\(6(x + 1) = 6x + 6\\).' },
                { text: 'Subtract: \\((6x - 1) - (6x + 6) = -7\\).' },
                { text: 'Quotient: \\(2x^2 - 3x + 6\\), Remainder: \\(-7\\).' },
                { text: 'Check: \\(f(-1) = 2(-1)^3 - (-1)^2 + 3(-1) - 1 = -2 - 1 - 3 - 1 = -7\\). \\(\\checkmark\\)' }
            ]
        },
        // --- PRACTICE 2: Division with remainder ---
        {
            type: 'practice',
            generate: function() {
                var r1 = [1, -1, 2, -2][Math.floor(Math.random() * 4)];
                var b = Math.floor(Math.random() * 5) - 2;
                var c = Math.floor(Math.random() * 5) - 2;
                var rem = Math.floor(Math.random() * 9) - 4;
                if (rem === 0) rem = 3;
                // f(x) = (x - r1)(x^2 + bx + c) + rem
                var p = b - r1;
                var q = c - r1 * b;
                var r = -r1 * c + rem;
                var pStr = (p >= 0 ? '+ ' + p : '- ' + (-p));
                var qStr = (q >= 0 ? '+ ' + q : '- ' + (-q));
                var rStr = (r >= 0 ? '+ ' + r : '- ' + (-r));
                var divisor = r1 > 0 ? '(x - ' + r1 + ')' : '(x + ' + (-r1) + ')';
                return {
                    type: 'short',
                    latex: 'Find the remainder when \\(x^3 ' + pStr + 'x^2 ' + qStr + 'x ' + rStr + '\\) is divided by \\(' + divisor + '\\).',
                    answer: '' + rem,
                    explain: 'Performing long division (or using the Remainder Theorem by substituting \\(x = ' + r1 + '\\)), the remainder is \\(' + rem + '\\).'
                };
            }
        },
        // --- CONCEPT 5: Inspection method ---
        {
            type: 'concept',
            title: 'Division by Inspection (Comparing Coefficients)',
            content: `
                <p>Instead of long division, you can write:</p>
                \\[x^3 + bx^2 + cx + d = (x - a)(x^2 + px + q) + R\\]
                <p>and compare coefficients to find \\(p\\), \\(q\\), and \\(R\\).</p>
                <p>Expanding the right side:</p>
                \\[= x^3 + px^2 + qx - ax^2 - apx - aq + R\\]
                \\[= x^3 + (p - a)x^2 + (q - ap)x + (-aq + R)\\]
                <p>Matching coefficients of \\(x^2\\), \\(x\\), and the constant term gives three equations to solve.</p>
                <p>This method is often quicker for simple cases.</p>
            `
        },
        // --- PRACTICE 3: Inspection ---
        {
            type: 'practice',
            generate: function() {
                // (x - a)(x^2 + px + q) where student finds p and q
                var a = [1, 2, -1, 3][Math.floor(Math.random() * 4)];
                var p = Math.floor(Math.random() * 5) - 2;
                var q = Math.floor(Math.random() * 5) - 2;
                var coeff2 = p - a;
                var coeff1 = q - a * p;
                var coeff0 = -a * q;
                var c2Str = (coeff2 >= 0 ? '+ ' + coeff2 : '- ' + (-coeff2));
                var c1Str = (coeff1 >= 0 ? '+ ' + coeff1 : '- ' + (-coeff1));
                var c0Str = (coeff0 >= 0 ? '+ ' + coeff0 : '- ' + (-coeff0));
                var divisor = a > 0 ? '(x - ' + a + ')' : '(x + ' + (-a) + ')';
                var pStr = (p >= 0 ? '+ ' + p : '- ' + (-p));
                var qStr = (q >= 0 ? '+ ' + q : '- ' + (-q));
                return {
                    type: 'short',
                    latex: 'Given \\(x^3 ' + c2Str + 'x^2 ' + c1Str + 'x ' + c0Str + ' = ' + divisor + '(x^2 + Ax + B)\\), find \\(A\\) and \\(B\\). Write as A, B.',
                    answer: p + ', ' + q,
                    explain: 'Comparing coefficients of \\(x^2\\): \\(A - ' + a + ' = ' + coeff2 + '\\) so \\(A = ' + p + '\\). Then comparing constants: \\(-' + a + ' \\times B = ' + coeff0 + '\\) so \\(B = ' + q + '\\).'
                };
            }
        },
        // --- CONCEPT 6: Dividing by quadratics ---
        {
            type: 'concept',
            title: 'Dividing by Higher-Degree Polynomials',
            content: `
                <p>You can also divide by quadratic expressions. For example:</p>
                \\[\\frac{x^3 + 3x^2 + 5x + 7}{x^2 + x + 1}\\]
                <p>The process is the same - divide the leading term, multiply, subtract, repeat.</p>
                <p>When dividing a degree \\(n\\) polynomial by a degree \\(m\\) polynomial:</p>
                <ul>
                    <li>The quotient has degree \\(n - m\\)</li>
                    <li>The remainder has degree less than \\(m\\)</li>
                </ul>
                <p>So dividing a cubic by a quadratic gives a linear quotient and a linear (or constant) remainder.</p>
            `
        },
        // --- PRACTICE 4: Mixed ---
        {
            type: 'practice',
            generate: function() {
                // Divide 2x^3 + ... by (x - a) - with leading coefficient 2
                var a = [1, -1, 2][Math.floor(Math.random() * 3)];
                var p = Math.floor(Math.random() * 5) - 2;
                var q = Math.floor(Math.random() * 5) - 2;
                // f(x) = (x - a)(2x^2 + px + q) = 2x^3 + px^2 + qx - 2ax^2 - apx - aq
                // = 2x^3 + (p - 2a)x^2 + (q - ap)x - aq
                var c2 = p - 2 * a;
                var c1 = q - a * p;
                var c0 = -a * q;
                var c2Str = (c2 >= 0 ? '+ ' + c2 : '- ' + (-c2));
                var c1Str = (c1 >= 0 ? '+ ' + c1 : '- ' + (-c1));
                var c0Str = (c0 >= 0 ? '+ ' + c0 : '- ' + (-c0));
                var divisor = a > 0 ? '(x - ' + a + ')' : '(x + ' + (-a) + ')';
                var pStr = (p >= 0 ? '+ ' + p : '- ' + (-p));
                var qStr = (q >= 0 ? '+ ' + q : '- ' + (-q));
                return {
                    type: 'short',
                    latex: 'Divide \\(2x^3 ' + c2Str + 'x^2 ' + c1Str + 'x ' + c0Str + '\\) by \\(' + divisor + '\\). Give the quotient.',
                    answer: '2x^2 ' + pStr + 'x ' + qStr,
                    explain: 'Using long division: \\(2x^3 ' + c2Str + 'x^2 ' + c1Str + 'x ' + c0Str + ' = ' + divisor + '(2x^2 ' + pStr + 'x ' + qStr + ')\\).'
                };
            }
        },
        // --- PRACTICE 5: Find quotient and remainder ---
        {
            type: 'practice',
            generate: function() {
                var a = [1, -1, 2][Math.floor(Math.random() * 3)];
                var p = Math.floor(Math.random() * 5) - 2;
                var q = Math.floor(Math.random() * 5) - 2;
                var rem = [1, -1, 2, -2, 3, -3, 5][Math.floor(Math.random() * 7)];
                var c2 = p - a;
                var c1 = q - a * p;
                var c0 = -a * q + rem;
                var c2Str = (c2 >= 0 ? '+ ' + c2 : '- ' + (-c2));
                var c1Str = (c1 >= 0 ? '+ ' + c1 : '- ' + (-c1));
                var c0Str = (c0 >= 0 ? '+ ' + c0 : '- ' + (-c0));
                var divisor = a > 0 ? '(x - ' + a + ')' : '(x + ' + (-a) + ')';
                return {
                    type: 'short',
                    latex: 'When \\(x^3 ' + c2Str + 'x^2 ' + c1Str + 'x ' + c0Str + '\\) is divided by \\(' + divisor + '\\), what is the remainder?',
                    answer: '' + rem,
                    explain: 'By the Remainder Theorem, substitute \\(x = ' + a + '\\) to get remainder \\(= ' + rem + '\\). Or perform long division to verify.'
                };
            }
        },
        // --- SUMMARY ---
        {
            type: 'summary',
            title: 'Polynomial Division - Summary',
            content: '<p>You now have two methods for dividing polynomials - choose whichever suits the problem.</p>',
            points: [
                'Algebraic long division follows the same process as numerical long division',
                'Always write polynomials in descending order with zero placeholders for missing terms',
                '\\(f(x) = (x - a) \\cdot Q(x) + R\\) relates dividend, divisor, quotient, and remainder',
                'Inspection (comparing coefficients) can be faster for simpler divisions',
                'The remainder when dividing by a linear factor is always a constant'
            ]
        }
    ]
};
