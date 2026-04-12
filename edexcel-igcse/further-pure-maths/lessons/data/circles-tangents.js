window.CURRENT_LESSON = {
    title: "Circles, Tangents & Normals",
    subtitle: "Equations of circles and lines that touch them",
    screens: [
        // Screen 1 - Concept: Introduction
        {
            type: 'concept',
            title: 'Circles in Coordinate Geometry',
            content: `
                <p>A circle is the set of all points at a fixed distance (the <strong>radius</strong>) from a fixed point (the <strong>centre</strong>).</p>
                <p>In coordinate geometry, we can describe a circle using an equation. This allows us to:</p>
                <ul>
                    <li>Write the equation of a circle given its centre and radius.</li>
                    <li>Find the centre and radius from a given equation.</li>
                    <li>Find equations of tangents and normals to the circle.</li>
                </ul>
                <div class="lesson-box">
                    The equation of a circle is derived directly from the distance formula: every point on the circle is exactly \\(r\\) units from the centre.
                </div>
            `
        },
        // Screen 2 - Concept: Standard Form
        {
            type: 'concept',
            title: 'Standard Form of a Circle Equation',
            content: `
                <p>A circle with centre \\((a, b)\\) and radius \\(r\\) has equation:</p>
                <div class="lesson-box">
                    \\[ (x - a)^2 + (y - b)^2 = r^2 \\]
                </div>
                <p>This comes from the distance formula: a point \\((x, y)\\) is on the circle if its distance from \\((a, b)\\) equals \\(r\\).</p>
                <p>\\(\\sqrt{(x-a)^2 + (y-b)^2} = r\\), and squaring both sides gives the standard form.</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg"><defs><marker id="circ1-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#444"/></marker></defs><line x1="30" y1="100" x2="300" y2="100" stroke="#444" stroke-width="0.5" marker-end="url(#circ1-arrow)"/><line x1="160" y1="190" x2="160" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#circ1-arrow)"/><text x="290" y="118" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">x</text><text x="140" y="20" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">y</text><circle cx="185" cy="85" r="65" fill="none" stroke="#00e5c7" stroke-width="2.5"/><circle cx="185" cy="85" r="3" fill="#feca57"/><line x1="185" y1="85" x2="237" y2="48" stroke="#54a0ff" stroke-width="1.5" stroke-dasharray="5 3"/><text x="190" y="92" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">(a, b)</text><text x="210" y="58" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#54a0ff">r</text><text x="60" y="180" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">(x-a)&#xb2; + (y-b)&#xb2; = r&#xb2;</text></svg></div>
                <p><strong>Special case:</strong> A circle centred at the origin has equation \\(x^2 + y^2 = r^2\\).</p>
            `
        },
        // Screen 3 - Example: Writing Circle Equation
        {
            type: 'example',
            title: 'Writing the Equation of a Circle',
            problem: 'Write the equation of the circle with centre \\((3, -2)\\) and radius 5.',
            steps: [
                { text: 'Use the standard form: \\((x - a)^2 + (y - b)^2 = r^2\\).' },
                { text: 'Substitute \\(a = 3\\), \\(b = -2\\), \\(r = 5\\).' },
                { text: '\\((x - 3)^2 + (y - (-2))^2 = 5^2\\).' },
                { text: '\\((x - 3)^2 + (y + 2)^2 = 25\\).' }
            ]
        },
        // Screen 4 - Practice: Write Circle Equation
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 9) - 4;
                var b = Math.floor(Math.random() * 9) - 4;
                var r = Math.floor(Math.random() * 5) + 2;
                var r2 = r * r;
                var xPart = a === 0 ? 'x' : (a > 0 ? '(x - ' + a + ')' : '(x + ' + Math.abs(a) + ')');
                var yPart = b === 0 ? 'y' : (b > 0 ? '(y - ' + b + ')' : '(y + ' + Math.abs(b) + ')');
                var correct = xPart + '^2 + ' + yPart + '^2 = ' + r2;
                var wrong1 = xPart + '^2 + ' + yPart + '^2 = ' + r;
                var aFlip = a === 0 ? 'x' : (a > 0 ? '(x + ' + a + ')' : '(x - ' + Math.abs(a) + ')');
                var wrong2 = aFlip + '^2 + ' + yPart + '^2 = ' + r2;
                var wrong3 = xPart + '^2 + ' + yPart + '^2 = ' + (r2 + 1);
                var options = [correct, wrong1, wrong2, wrong3];
                options = [...new Set(options)];
                while (options.length < 4) options.push(xPart + '^2 + ' + yPart + '^2 = ' + (r2 + options.length + 1));
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'Write the equation of the circle with centre \\((' + a + ', ' + b + ')\\) and radius \\(' + r + '\\).',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Using \\((x - a)^2 + (y - b)^2 = r^2\\) with \\(a = ' + a + '\\), \\(b = ' + b + '\\), \\(r = ' + r + '\\): \\(' + correct + '\\).'
                };
            }
        },
        // Screen 5 - Concept: Expanded Form
        {
            type: 'concept',
            title: 'Expanded (General) Form',
            content: `
                <p>Expanding the standard form gives the <strong>general form</strong>:</p>
                <div class="lesson-box">
                    \\[ x^2 + y^2 + Dx + Ey + F = 0 \\]
                </div>
                <p>For example, expanding \\((x - 3)^2 + (y + 2)^2 = 25\\):</p>
                <p>\\(x^2 - 6x + 9 + y^2 + 4y + 4 = 25\\)</p>
                <p>\\(x^2 + y^2 - 6x + 4y - 12 = 0\\)</p>
                <p>Here \\(D = -6\\), \\(E = 4\\), \\(F = -12\\).</p>
                <div class="lesson-box">
                    The general form is useful for recognising circle equations and for some algebraic manipulations, but the standard form is better for reading off the centre and radius.
                </div>
            `
        },
        // Screen 6 - Concept: Completing the Square
        {
            type: 'concept',
            title: 'Completing the Square to Find Centre & Radius',
            content: `
                <p>Given a circle equation in general form, <strong>complete the square</strong> on \\(x\\) and \\(y\\) separately to convert back to standard form.</p>
                <p><strong>Method:</strong></p>
                <ol>
                    <li>Group the \\(x\\) terms and \\(y\\) terms.</li>
                    <li>Complete the square for each group.</li>
                    <li>Rearrange to get \\((x - a)^2 + (y - b)^2 = r^2\\).</li>
                </ol>
                <div class="lesson-box">
                    Recall: \\(x^2 + px = \\left(x + \\frac{p}{2}\\right)^2 - \\left(\\frac{p}{2}\\right)^2\\)
                </div>
            `
        },
        // Screen 7 - Example: Completing the Square
        {
            type: 'example',
            title: 'Finding Centre and Radius',
            problem: 'Find the centre and radius of the circle \\(x^2 + y^2 - 6x + 4y - 12 = 0\\).',
            steps: [
                { text: 'Group: \\((x^2 - 6x) + (y^2 + 4y) = 12\\).' },
                { text: 'Complete the square for \\(x\\): \\(x^2 - 6x = (x - 3)^2 - 9\\).' },
                { text: 'Complete the square for \\(y\\): \\(y^2 + 4y = (y + 2)^2 - 4\\).' },
                { text: 'Substitute: \\((x - 3)^2 - 9 + (y + 2)^2 - 4 = 12\\).' },
                { text: '\\((x - 3)^2 + (y + 2)^2 = 25\\).' },
                { text: 'Centre: \\((3, -2)\\), Radius: \\(\\sqrt{25} = 5\\).' }
            ]
        },
        // Screen 8 - Practice: Find Centre and Radius
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 7) - 3;
                var b = Math.floor(Math.random() * 7) - 3;
                var r = Math.floor(Math.random() * 4) + 2;
                var D = -2 * a;
                var E = -2 * b;
                var F = a * a + b * b - r * r;
                var eqn = 'x^2 + y^2' +
                    (D === 0 ? '' : (D > 0 ? ' + ' + D + 'x' : ' - ' + Math.abs(D) + 'x')) +
                    (E === 0 ? '' : (E > 0 ? ' + ' + E + 'y' : ' - ' + Math.abs(E) + 'y')) +
                    (F === 0 ? '' : (F > 0 ? ' + ' + F : ' - ' + Math.abs(F))) +
                    ' = 0';
                var correctStr = '(' + a + ', ' + b + ')';
                var options = [
                    '(' + a + ', ' + b + ')',
                    '(' + (-a) + ', ' + (-b) + ')',
                    '(' + (-a) + ', ' + b + ')',
                    '(' + a + ', ' + (-b) + ')'
                ];
                options = [...new Set(options)];
                while (options.length < 4) options.push('(' + (a + options.length) + ', ' + b + ')');
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(correctStr);
                return {
                    type: 'mc',
                    latex: 'Find the centre of the circle \\(' + eqn + '\\).',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Completing the square: \\((x' + (a > 0 ? ' - ' + a : a === 0 ? '' : ' + ' + Math.abs(a)) + ')^2 + (y' + (b > 0 ? ' - ' + b : b === 0 ? '' : ' + ' + Math.abs(b)) + ')^2 = ' + (r * r) + '\\). Centre: \\((' + a + ', ' + b + ')\\), radius: \\(' + r + '\\).'
                };
            }
        },
        // Screen 9 - Practice: Find Radius
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 5) - 2;
                var b = Math.floor(Math.random() * 5) - 2;
                var r = Math.floor(Math.random() * 5) + 2;
                var D = -2 * a;
                var E = -2 * b;
                var F = a * a + b * b - r * r;
                var eqn = 'x^2 + y^2' +
                    (D === 0 ? '' : (D > 0 ? ' + ' + D + 'x' : ' - ' + Math.abs(D) + 'x')) +
                    (E === 0 ? '' : (E > 0 ? ' + ' + E + 'y' : ' - ' + Math.abs(E) + 'y')) +
                    (F === 0 ? '' : (F > 0 ? ' + ' + F : ' - ' + Math.abs(F))) +
                    ' = 0';
                var options = [r, r + 1, r - 1, r * r];
                options = [...new Set(options)];
                while (options.length < 4) options.push(r + options.length + 1);
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(r);
                return {
                    type: 'mc',
                    latex: 'Find the radius of the circle \\(' + eqn + '\\).',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Completing the square gives \\(r^2 = ' + (r * r) + '\\), so \\(r = ' + r + '\\).'
                };
            }
        },
        // Screen 10 - Concept: Tangent to a Circle
        {
            type: 'concept',
            title: 'Tangent to a Circle',
            content: `
                <p>A <strong>tangent</strong> to a circle is a line that touches the circle at exactly one point.</p>
                <div class="lesson-box">
                    The tangent at any point on a circle is <strong>perpendicular</strong> to the radius at that point.
                </div>
                <p>This is the key geometric fact that lets us find tangent equations:</p>
                <ol>
                    <li>Find the gradient of the radius from the centre to the point of contact.</li>
                    <li>The tangent gradient is the negative reciprocal of the radius gradient.</li>
                    <li>Use point-gradient form with the point of contact.</li>
                </ol>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 240" width="320" height="240" xmlns="http://www.w3.org/2000/svg"><defs><marker id="circ2-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#444"/></marker></defs><line x1="30" y1="130" x2="300" y2="130" stroke="#444" stroke-width="0.5" marker-end="url(#circ2-arrow)"/><line x1="160" y1="230" x2="160" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#circ2-arrow)"/><circle cx="160" cy="120" r="70" fill="none" stroke="#54a0ff" stroke-width="2"/><circle cx="160" cy="120" r="3" fill="#feca57"/><circle cx="214" cy="72" r="4" fill="#00e5c7"/><line x1="160" y1="120" x2="214" y2="72" stroke="#feca57" stroke-width="1.5"/><line x1="170" y1="40" x2="260" y2="100" stroke="#00e5c7" stroke-width="2.5"/><path d="M 207 79 L 200 72 L 207 65" fill="none" stroke="#ff6b6b" stroke-width="1.5"/><text x="110" y="125" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">centre</text><text x="220" y="67" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">P</text><text x="240" y="55" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">tangent</text><text x="175" y="96" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#feca57">r</text><text x="60" y="220" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">Tangent &#x22a5; radius at P</text></svg></div>
            `
        },
        // Screen 11 - Concept: Normal to a Circle
        {
            type: 'concept',
            title: 'Normal to a Circle',
            content: `
                <p>A <strong>normal</strong> to a circle at a point is a line that passes through that point and is perpendicular to the tangent there.</p>
                <div class="lesson-box">
                    The normal at any point on a circle passes through the <strong>centre</strong> of the circle.
                </div>
                <p>Since the normal has the same direction as the radius:</p>
                <ul>
                    <li>The gradient of the normal equals the gradient of the radius.</li>
                    <li>To find the normal equation, use the radius gradient and the point of contact in point-gradient form.</li>
                </ul>
            `
        },
        // Screen 12 - Example: Tangent to Circle at Origin
        {
            type: 'example',
            title: 'Finding a Tangent to a Circle',
            problem: 'Find the equation of the tangent to the circle \\(x^2 + y^2 = 25\\) at the point \\((3, 4)\\).',
            steps: [
                { text: 'The circle has centre \\((0, 0)\\) and radius 5.' },
                { text: 'Gradient of radius from \\((0, 0)\\) to \\((3, 4)\\): \\(m_r = \\frac{4 - 0}{3 - 0} = \\frac{4}{3}\\).' },
                { text: 'Tangent is perpendicular to radius: \\(m_t = -\\frac{3}{4}\\).' },
                { text: 'Use point-gradient form at \\((3, 4)\\): \\(y - 4 = -\\frac{3}{4}(x - 3)\\).' },
                { text: '\\(y - 4 = -\\frac{3}{4}x + \\frac{9}{4}\\).' },
                { text: '\\(y = -\\frac{3}{4}x + \\frac{25}{4}\\), or equivalently \\(3x + 4y = 25\\).' }
            ]
        },
        // Screen 13 - Practice: Tangent Gradient
        {
            type: 'practice',
            generate: function() {
                var triples = [
                    { px: 3, py: 4, r: 5 },
                    { px: 4, py: 3, r: 5 },
                    { px: 5, py: 12, r: 13 },
                    { px: 8, py: 6, r: 10 },
                    { px: 6, py: 8, r: 10 }
                ];
                var pick = triples[Math.floor(Math.random() * triples.length)];
                var signs = [1, -1];
                var sx = signs[Math.floor(Math.random() * 2)];
                var sy = signs[Math.floor(Math.random() * 2)];
                var px = pick.px * sx;
                var py = pick.py * sy;
                // Radius gradient: py/px, tangent gradient: -px/py
                var tNum = -px;
                var tDen = py;
                // Simplify
                var g = function(a, b) { return b === 0 ? a : g(b, a % b); };
                var gcdVal = Math.abs(g(tNum, tDen));
                tNum = tNum / gcdVal;
                tDen = tDen / gcdVal;
                if (tDen < 0) { tNum = -tNum; tDen = -tDen; }
                var tangentGrad = tDen === 1 ? '' + tNum : (tNum < 0 ? '-' : '') + '\\frac{' + Math.abs(tNum) + '}{' + tDen + '}';
                // Radius gradient for wrong answers
                var rNum = py;
                var rDen = px;
                gcdVal = Math.abs(g(rNum, rDen));
                if (gcdVal !== 0) { rNum = rNum / gcdVal; rDen = rDen / gcdVal; }
                if (rDen < 0) { rNum = -rNum; rDen = -rDen; }
                var radiusGrad = rDen === 1 ? '' + rNum : (rNum < 0 ? '-' : '') + '\\frac{' + Math.abs(rNum) + '}{' + rDen + '}';
                // Positive version of tangent grad
                var posTangent = tDen === 1 ? '' + Math.abs(tNum) : '\\frac{' + Math.abs(tNum) + '}{' + tDen + '}';
                var options = [tangentGrad, radiusGrad];
                if (options.indexOf(posTangent) === -1) options.push(posTangent);
                if (options.indexOf('-' + radiusGrad) === -1 && options.length < 4) options.push('-' + radiusGrad);
                while (options.length < 4) options.push('\\frac{' + (Math.abs(tNum) + options.length) + '}{' + tDen + '}');
                options = [...new Set(options)];
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(tangentGrad);
                return {
                    type: 'mc',
                    latex: 'Find the gradient of the tangent to the circle \\(x^2 + y^2 = ' + (pick.r * pick.r) + '\\) at the point \\((' + px + ', ' + py + ')\\).',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'Radius gradient from \\((0,0)\\) to \\((' + px + ', ' + py + ')\\) is \\(' + radiusGrad + '\\). The tangent is perpendicular, so its gradient is \\(' + tangentGrad + '\\).'
                };
            }
        },
        // Screen 14 - Example: Tangent to General Circle
        {
            type: 'example',
            title: 'Tangent to a Circle with General Centre',
            problem: 'Find the tangent to the circle \\((x - 2)^2 + (y + 1)^2 = 20\\) at the point \\((6, 1)\\).',
            steps: [
                { text: 'Centre is \\((2, -1)\\), radius is \\(\\sqrt{20}\\).' },
                { text: 'Check point is on circle: \\((6-2)^2 + (1+1)^2 = 16 + 4 = 20\\). Yes.' },
                { text: 'Gradient of radius from \\((2, -1)\\) to \\((6, 1)\\): \\(m_r = \\frac{1-(-1)}{6-2} = \\frac{2}{4} = \\frac{1}{2}\\).' },
                { text: 'Tangent gradient: \\(m_t = -\\frac{1}{1/2} = -2\\).' },
                { text: 'Tangent: \\(y - 1 = -2(x - 6)\\), so \\(y = -2x + 13\\).' }
            ]
        },
        // Screen 15 - Practice: Tangent Equation (short answer)
        {
            type: 'practice',
            generate: function() {
                // Circle x^2 + y^2 = r^2, point on circle with integer tangent gradient
                var data = [
                    { px: 3, py: 4, r2: 25 },
                    { px: 4, py: 3, r2: 25 },
                    { px: 1, py: 2, r2: 5 },
                    { px: 2, py: 1, r2: 5 }
                ];
                var pick = data[Math.floor(Math.random() * data.length)];
                // tangent at (px, py): gradient = -px/py
                // tangent: y - py = (-px/py)(x - px) => py*y - py^2 = -px*x + px^2 => px*x + py*y = r^2
                var answer = pick.px + 'x + ' + pick.py + 'y = ' + pick.r2;
                return {
                    type: 'short',
                    latex: 'Find the equation of the tangent to \\(x^2 + y^2 = ' + pick.r2 + '\\) at \\((' + pick.px + ', ' + pick.py + ')\\). Give your answer in the form \\(ax + by = c\\).',
                    answer: answer,
                    explain: 'Radius gradient: \\(\\frac{' + pick.py + '}{' + pick.px + '}\\). Tangent gradient: \\(-\\frac{' + pick.px + '}{' + pick.py + '}\\). Using point-gradient form and simplifying: \\(' + pick.px + 'x + ' + pick.py + 'y = ' + pick.r2 + '\\).'
                };
            }
        },
        // Screen 16 - Concept: Normal Equation
        {
            type: 'concept',
            title: 'Finding the Normal Equation',
            content: `
                <p>Since the normal passes through the point of contact and the centre, finding its equation is straightforward:</p>
                <ol>
                    <li>Find the gradient of the radius (this is the normal gradient).</li>
                    <li>Use point-gradient form with the point of contact.</li>
                </ol>
                <div class="lesson-box">
                    For a circle centred at the origin, the normal at \\((p, q)\\) has gradient \\(\\frac{q}{p}\\) and equation \\(y = \\frac{q}{p}x\\) (it always passes through the origin).
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 240" width="320" height="240" xmlns="http://www.w3.org/2000/svg"><defs><marker id="circ3-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#444"/></marker></defs><line x1="30" y1="130" x2="300" y2="130" stroke="#444" stroke-width="0.5" marker-end="url(#circ3-arrow)"/><line x1="160" y1="230" x2="160" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#circ3-arrow)"/><circle cx="160" cy="120" r="70" fill="none" stroke="#54a0ff" stroke-width="2"/><circle cx="160" cy="120" r="3" fill="#feca57"/><circle cx="214" cy="72" r="4" fill="#00e5c7"/><line x1="100" y1="165" x2="270" y2="25" stroke="#ff6b6b" stroke-width="2.5"/><text x="115" y="117" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#feca57">C</text><text x="220" y="80" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#00e5c7">P</text><text x="255" y="23" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#ff6b6b">normal</text><text x="45" y="220" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">Normal passes through centre</text></svg></div>
                <p>For a circle with centre \\((a, b)\\), the normal at \\((p, q)\\) has gradient \\(\\frac{q - b}{p - a}\\).</p>
            `
        },
        // Screen 17 - Practice: Normal
        {
            type: 'practice',
            generate: function() {
                var data = [
                    { px: 3, py: 4, r2: 25 },
                    { px: 4, py: 3, r2: 25 },
                    { px: 6, py: 8, r2: 100 },
                    { px: 8, py: 6, r2: 100 }
                ];
                var pick = data[Math.floor(Math.random() * data.length)];
                // Normal at (px, py) on x^2+y^2=r^2 passes through origin, gradient py/px
                var g = function(a, b) { return b === 0 ? a : g(b, a % b); };
                var gcdVal = Math.abs(g(pick.py, pick.px));
                var num = pick.py / gcdVal;
                var den = pick.px / gcdVal;
                var gradStr = den === 1 ? '' + num : '\\frac{' + num + '}{' + den + '}';
                var correct = 'y = ' + gradStr + 'x';
                var wrong1 = 'y = -' + gradStr + 'x';
                var invGrad = den === 1 ? '' + den : '\\frac{' + den + '}{' + num + '}';
                var wrong2 = 'y = -' + invGrad + 'x';
                var wrong3 = 'y = ' + invGrad + 'x';
                var options = [correct, wrong1, wrong2, wrong3];
                options = [...new Set(options)];
                while (options.length < 4) options.push('y = ' + (num + options.length) + 'x');
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(correct);
                return {
                    type: 'mc',
                    latex: 'Find the equation of the normal to the circle \\(x^2 + y^2 = ' + pick.r2 + '\\) at the point \\((' + pick.px + ', ' + pick.py + ')\\).',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: 'The normal passes through the origin and \\((' + pick.px + ', ' + pick.py + ')\\), so its gradient is \\(' + gradStr + '\\) and equation is \\(' + correct + '\\).'
                };
            }
        },
        // Screen 18 - Summary
        {
            type: 'summary',
            title: 'Summary: Circles, Tangents & Normals',
            content: '<p>You can now work with circle equations and find tangent and normal lines at points on a circle.</p>',
            points: [
                'Standard form: \\((x - a)^2 + (y - b)^2 = r^2\\) with centre \\((a, b)\\) and radius \\(r\\).',
                'General form: \\(x^2 + y^2 + Dx + Ey + F = 0\\) - complete the square to convert.',
                'The tangent at a point is perpendicular to the radius at that point.',
                'The normal at a point passes through the centre of the circle.',
                'To find tangent/normal equations: find the radius gradient, then use the perpendicular (tangent) or same (normal) gradient with point-gradient form.'
            ]
        }
    ]
};
