window.CURRENT_LESSON = {
    title: "Definite Integrals & Areas",
    subtitle: "Evaluating integrals and finding areas under curves",
    screens: [
        // Screen 1 - Concept: Definite Integral Notation
        {
            type: 'concept',
            title: 'Definite Integral Notation',
            content: `
                <p>A <strong>definite integral</strong> has <strong>limits</strong> - a lower limit \\(a\\) and an upper limit \\(b\\):</p>
                \\[\\int_a^b f(x)\\, dx\\]
                <p>This means "integrate \\(f(x)\\) from \\(x = a\\) to \\(x = b\\)".</p>
                <div class="lesson-box">
                    A definite integral gives a <strong>numerical value</strong>, unlike an indefinite integral which gives a function + C.
                </div>
                <p>The limits \\(a\\) and \\(b\\) are written at the bottom and top of the integral sign respectively.</p>
            `
        },
        // Screen 2 - Concept: Evaluating Definite Integrals
        {
            type: 'concept',
            title: 'Evaluating Definite Integrals',
            content: `
                <p>To evaluate a definite integral, we use the <strong>Fundamental Theorem of Calculus</strong>:</p>
                <div class="lesson-box">
                    \\[\\int_a^b f(x)\\, dx = \\Big[F(x)\\Big]_a^b = F(b) - F(a)\\]
                    <br>
                    where \\(F(x)\\) is the integral (anti-derivative) of \\(f(x)\\).
                </div>
                <p>Steps:</p>
                <ol>
                    <li>Integrate \\(f(x)\\) to get \\(F(x)\\)</li>
                    <li>Write with square bracket notation: \\(\\Big[F(x)\\Big]_a^b\\)</li>
                    <li>Substitute the upper limit: \\(F(b)\\)</li>
                    <li>Subtract the lower limit: \\(F(b) - F(a)\\)</li>
                </ol>
                <div class="lesson-box warning">
                    No \\(+C\\) is needed for definite integrals! The constant cancels out: \\((F(b) + C) - (F(a) + C) = F(b) - F(a)\\).
                </div>
            `
        },
        // Screen 3 - Example: Evaluate a definite integral
        {
            type: 'example',
            title: 'Evaluating a Definite Integral',
            problem: 'Evaluate \\(\\int_1^3 (2x + 1)\\, dx\\)',
            steps: [
                { text: 'Integrate: \\(\\int (2x + 1)\\, dx = x^2 + x\\)' },
                { text: 'Write with limits: \\(\\Big[x^2 + x\\Big]_1^3\\)' },
                { text: 'Substitute upper limit (\\(x = 3\\)): \\((3)^2 + (3) = 9 + 3 = 12\\)' },
                { text: 'Substitute lower limit (\\(x = 1\\)): \\((1)^2 + (1) = 1 + 1 = 2\\)' },
                { text: 'Subtract: \\(12 - 2 = 10\\)' },
                { text: '\\(\\int_1^3 (2x + 1)\\, dx = 10\\)' }
            ]
        },
        // Screen 4 - Practice: Evaluate simple definite integral
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 4) + 1;
                var b = Math.floor(Math.random() * 5) + 1;
                var lo = Math.floor(Math.random() * 3);
                var hi = lo + Math.floor(Math.random() * 3) + 2;
                var result = a * (hi * hi - lo * lo) / 2 + b * (hi - lo);
                var isWhole = (a * (hi * hi - lo * lo)) % 2 === 0;
                var displayResult = isWhole ? result : result;
                var options = [result, result + 2, result - 2, Math.abs(result - 5)];
                options = [...new Set(options)];
                while (options.length < 4) options.push(result + options.length * 3);
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(result);
                return {
                    type: 'mc',
                    latex: 'Evaluate \\(\\int_{' + lo + '}^{' + hi + '} (' + a + 'x + ' + b + ')\\, dx\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: '\\(\\int (' + a + 'x + ' + b + ')\\,dx = \\frac{' + a + 'x^2}{2} + ' + b + 'x\\). Evaluating: \\(\\Big[\\frac{' + a + 'x^2}{2} + ' + b + 'x\\Big]_{' + lo + '}^{' + hi + '} = \\Big(\\frac{' + a + '(' + hi + ')^2}{2} + ' + b + '(' + hi + ')\\Big) - \\Big(\\frac{' + a + '(' + lo + ')^2}{2} + ' + b + '(' + lo + ')\\Big) = ' + result + '\\).'
                };
            }
        },
        // Screen 5 - Practice: Evaluate quadratic definite integral
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 3) + 1;
                var lo = 0;
                var hi = Math.floor(Math.random() * 3) + 2;
                var result = a * hi * hi * hi / 3;
                var isWhole = (a * hi * hi * hi) % 3 === 0;
                if (!isWhole) {
                    hi = 3;
                    result = a * 27 / 3;
                }
                var options = [result, result + 3, result - 3, result * 2];
                options = [...new Set(options)];
                while (options.length < 4) options.push(result + options.length * 2);
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(result);
                return {
                    type: 'mc',
                    latex: 'Evaluate \\(\\int_{0}^{' + hi + '} ' + a + 'x^2\\, dx\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: '\\(\\int ' + a + 'x^2\\,dx = \\frac{' + a + 'x^3}{3}\\). Evaluating: \\(\\Big[\\frac{' + a + 'x^3}{3}\\Big]_0^{' + hi + '} = \\frac{' + a + '(' + hi + ')^3}{3} - 0 = \\frac{' + (a*hi*hi*hi) + '}{3} = ' + result + '\\).'
                };
            }
        },
        // Screen 6 - Concept: Area Under a Curve
        {
            type: 'concept',
            title: 'Area Under a Curve',
            content: `
                <p>The definite integral \\(\\int_a^b f(x)\\, dx\\) gives the area between the curve \\(y = f(x)\\), the x-axis, and the vertical lines \\(x = a\\) and \\(x = b\\).</p>
                <div class="lesson-box">
                    When the curve is <strong>above</strong> the x-axis (\\(f(x) > 0\\)), the integral gives the area directly.
                    \\[\\text{Area} = \\int_a^b f(x)\\, dx\\]
                </div>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg"><defs><marker id="def1-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#444"/></marker></defs><line x1="40" y1="160" x2="300" y2="160" stroke="#444" stroke-width="0.5" marker-end="url(#def1-arrow)"/><line x1="40" y1="160" x2="40" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#def1-arrow)"/><text x="295" y="178" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">x</text><text x="20" y="20" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">y</text><path d="M 50 140 Q 100 120 140 70 Q 180 20 250 15" fill="none" stroke="#54a0ff" stroke-width="2.5"/><path d="M 90 160 L 90 128 Q 115 105 140 70 Q 160 42 200 25 L 200 160 Z" fill="#00e5c7" fill-opacity="0.2" stroke="none"/><line x1="90" y1="160" x2="90" y2="128" stroke="#00e5c7" stroke-width="1.5"/><line x1="200" y1="160" x2="200" y2="25" stroke="#00e5c7" stroke-width="1.5"/><text x="84" y="178" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#00e5c7">a</text><text x="194" y="178" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#00e5c7">b</text><text x="120" y="115" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#00e5c7">Area</text><text x="230" y="30" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#54a0ff">y = f(x)</text></svg></div>
                <p>This is one of the most important applications of integration - it lets us calculate areas bounded by curves, which we could not find using basic geometry.</p>
            `
        },
        // Screen 7 - Example: Area under a curve
        {
            type: 'example',
            title: 'Finding Area Under a Curve',
            problem: 'Find the area under \\(y = x^2\\) between \\(x = 0\\) and \\(x = 3\\)',
            steps: [
                { text: 'Set up the integral: Area \\(= \\int_0^3 x^2\\, dx\\)' },
                { text: 'Integrate: \\(\\Big[\\frac{x^3}{3}\\Big]_0^3\\)' },
                { text: 'Substitute upper limit: \\(\\frac{(3)^3}{3} = \\frac{27}{3} = 9\\)' },
                { text: 'Substitute lower limit: \\(\\frac{(0)^3}{3} = 0\\)' },
                { text: 'Area \\(= 9 - 0 = 9\\) square units' }
            ]
        },
        // Screen 8 - Practice: Area under a curve
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 3) + 1;
                var hi = Math.floor(Math.random() * 3) + 2;
                var area = a * hi * hi / 2;
                var options = [area, area + 2, a * hi, a * hi * hi];
                options = [...new Set(options)];
                while (options.length < 4) options.push(area + options.length);
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(area);
                return {
                    type: 'mc',
                    latex: 'Find the area under \\(y = ' + a + 'x\\) between \\(x = 0\\) and \\(x = ' + hi + '\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\) sq units'; }),
                    correctIdx: correctIdx,
                    explain: 'Area \\(= \\int_0^{' + hi + '} ' + a + 'x\\, dx = \\Big[\\frac{' + a + 'x^2}{2}\\Big]_0^{' + hi + '} = \\frac{' + a + '(' + hi + ')^2}{2} = \\frac{' + (a*hi*hi) + '}{2} = ' + area + '\\).'
                };
            }
        },
        // Screen 9 - Concept: Area Below the x-axis
        {
            type: 'concept',
            title: 'Area Below the x-axis',
            content: `
                <p>When the curve is <strong>below</strong> the x-axis (\\(f(x) < 0\\)), the definite integral gives a <strong>negative</strong> result.</p>
                <div class="lesson-box">
                    If the curve is below the x-axis, the integral is negative. To find the <strong>area</strong> (which is always positive), take the <strong>absolute value</strong>:
                    \\[\\text{Area} = \\left|\\int_a^b f(x)\\, dx\\right|\\]
                </div>
                <div class="lesson-box warning">
                    Be careful when a curve crosses the x-axis between the limits! You must split the integral at the crossing points and calculate each part separately.
                </div>
                <p>For example, if a curve is above the x-axis from \\(a\\) to \\(c\\) and below from \\(c\\) to \\(b\\), then:</p>
                <p>\\(\\text{Total area} = \\int_a^c f(x)\\, dx + \\left|\\int_c^b f(x)\\, dx\\right|\\)</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg"><defs><marker id="def2-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#444"/></marker></defs><line x1="30" y1="100" x2="300" y2="100" stroke="#444" stroke-width="0.5" marker-end="url(#def2-arrow)"/><line x1="30" y1="190" x2="30" y2="10" stroke="#444" stroke-width="0.5" marker-end="url(#def2-arrow)"/><text x="290" y="118" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">x</text><text x="12" y="20" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#e0e0e0">y</text><path d="M 50 130 Q 90 160 130 100 Q 160 55 190 40 Q 220 55 260 100" fill="none" stroke="#54a0ff" stroke-width="2.5"/><path d="M 50 100 Q 55 100 65 110 Q 80 125 90 130 Q 95 131 100 128 L 100 100 Z" fill="#ff6b6b" fill-opacity="0.2" stroke="none"/><path d="M 100 100 L 100 128 Q 110 118 130 100 Q 150 72 170 52 Q 185 40 195 42 Q 200 44 210 55 L 210 100 Z" fill="#00e5c7" fill-opacity="0.25" stroke="none"/><line x1="50" y1="100" x2="50" y2="130" stroke="#ff6b6b" stroke-width="1"/><line x1="100" y1="100" x2="100" y2="128" stroke="#e0e0e0" stroke-width="1" stroke-dasharray="3 3"/><line x1="210" y1="100" x2="210" y2="55" stroke="#00e5c7" stroke-width="1"/><text x="55" y="125" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#ff6b6b">-ve</text><text x="140" y="85" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#00e5c7">+ve</text><text x="205" y="190" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">Split at x-intercepts</text></svg></div>
            `
        },
        // Screen 10 - Concept: Area Between Curve and x-axis
        {
            type: 'concept',
            title: 'Area Enclosed Between Curve and x-axis',
            content: `
                <p>A common question is to find the area enclosed between a curve and the x-axis. This requires finding where the curve <strong>crosses</strong> the x-axis first.</p>
                <div class="lesson-box">
                    To find the area enclosed between \\(y = f(x)\\) and the x-axis:<br><br>
                    1. Find where \\(f(x) = 0\\) (the x-intercepts) - these become your limits<br>
                    2. Determine whether the curve is above or below the x-axis<br>
                    3. Integrate and take the absolute value if below
                </div>
                <p>If the curve is entirely below the x-axis in the region, the integral will be negative and you take the absolute value.</p>
            `
        },
        // Screen 11 - Example: Area enclosed between curve and x-axis
        {
            type: 'example',
            title: 'Area Enclosed Between Curve and x-axis',
            problem: 'Find the area enclosed between \\(y = x^2 - 4x\\) and the x-axis',
            steps: [
                { text: 'Find the x-intercepts: \\(x^2 - 4x = 0\\), so \\(x(x - 4) = 0\\), giving \\(x = 0\\) and \\(x = 4\\).' },
                { text: 'Between \\(x = 0\\) and \\(x = 4\\), try \\(x = 2\\): \\(4 - 8 = -4 < 0\\). The curve is below the x-axis.' },
                { text: 'Set up the integral: \\(\\int_0^4 (x^2 - 4x)\\, dx\\)' },
                { text: 'Integrate: \\(\\Big[\\frac{x^3}{3} - 2x^2\\Big]_0^4\\)' },
                { text: 'Evaluate: \\(\\Big(\\frac{64}{3} - 32\\Big) - (0) = \\frac{64}{3} - \\frac{96}{3} = -\\frac{32}{3}\\)' },
                { text: 'The integral is negative because the curve is below the x-axis.' },
                { text: 'Area \\(= \\left|-\\frac{32}{3}\\right| = \\frac{32}{3} = 10\\frac{2}{3}\\) square units' }
            ]
        },
        // Screen 12 - Practice: Area below x-axis
        {
            type: 'practice',
            generate: function() {
                var r = Math.floor(Math.random() * 3) + 2;
                var area = r * r * r / 6;
                var isWhole = (r * r * r) % 6 === 0;
                var display = isWhole ? '' + area : '\\frac{' + (r*r*r) + '}{6}';
                var wrong1 = isWhole ? '' + (area * 2) : '\\frac{' + (r*r*r) + '}{3}';
                var wrong2 = '' + (r * r);
                var wrong3 = isWhole ? '' + (area + 1) : '\\frac{' + (r*r*r + 6) + '}{6}';
                var options = [display, wrong1, wrong2, wrong3];
                options = [...new Set(options)];
                while (options.length < 4) options.push('' + (r * r + 1));
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(display);
                return {
                    type: 'mc',
                    latex: 'Find the area enclosed between \\(y = x^2 - ' + r + 'x\\) and the x-axis.',
                    options: options.map(function(o) { return '\\(' + o + '\\) sq units'; }),
                    correctIdx: correctIdx,
                    explain: 'The curve crosses the x-axis at \\(x = 0\\) and \\(x = ' + r + '\\). \\(\\int_0^{' + r + '}(x^2 - ' + r + 'x)\\,dx = \\Big[\\frac{x^3}{3} - \\frac{' + r + 'x^2}{2}\\Big]_0^{' + r + '} = \\frac{' + (r*r*r) + '}{3} - \\frac{' + (r*r*r) + '}{2} = -\\frac{' + (r*r*r) + '}{6}\\). Area \\(= \\frac{' + (r*r*r) + '}{6} = ' + display + '\\).'
                };
            }
        },
        // Screen 13 - Practice: Definite integral of polynomial
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 3) + 1;
                var b = Math.floor(Math.random() * 4) + 1;
                var lo = 1;
                var hi = Math.floor(Math.random() * 2) + 2;
                var upper = a * hi * hi * hi / 3 + b * hi;
                var lower = a * lo * lo * lo / 3 + b * lo;
                var result = upper - lower;
                var isWhole = Number.isInteger(result);
                if (!isWhole) {
                    a = 3;
                    upper = a * hi * hi * hi / 3 + b * hi;
                    lower = a / 3 + b;
                    result = upper - lower;
                }
                var options = [result, result + 2, result - 1, Math.round(result * 1.5)];
                options = [...new Set(options)];
                while (options.length < 4) options.push(result + options.length + 1);
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(result);
                return {
                    type: 'mc',
                    latex: 'Evaluate \\(\\int_{' + lo + '}^{' + hi + '} (' + a + 'x^2 + ' + b + ')\\, dx\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: '\\(\\Big[\\frac{' + a + 'x^3}{3} + ' + b + 'x\\Big]_{' + lo + '}^{' + hi + '} = \\Big(\\frac{' + a + '(' + hi + ')^3}{3} + ' + b + '(' + hi + ')\\Big) - \\Big(\\frac{' + a + '}{3} + ' + b + '\\Big) = ' + result + '\\).'
                };
            }
        },
        // Screen 14 - Practice: Area under quadratic
        {
            type: 'practice',
            generate: function() {
                var lo = 0;
                var hi = Math.floor(Math.random() * 3) + 2;
                var a = Math.floor(Math.random() * 3) + 1;
                var b = Math.floor(Math.random() * 4) + 1;
                var area = a * hi * hi / 2 + b * hi;
                var options = [area, area + 3, a * hi * hi + b * hi, area - 2];
                options = [...new Set(options)];
                while (options.length < 4) options.push(area + options.length * 2);
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(area);
                return {
                    type: 'mc',
                    latex: 'Find the area under \\(y = ' + a + 'x + ' + b + '\\) between \\(x = ' + lo + '\\) and \\(x = ' + hi + '\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\) sq units'; }),
                    correctIdx: correctIdx,
                    explain: 'Area \\(= \\int_0^{' + hi + '}(' + a + 'x + ' + b + ')\\,dx = \\Big[\\frac{' + a + 'x^2}{2} + ' + b + 'x\\Big]_0^{' + hi + '} = \\frac{' + a + '(' + hi + ')^2}{2} + ' + b + '(' + hi + ') = ' + (a*hi*hi/2) + ' + ' + (b*hi) + ' = ' + area + '\\).'
                };
            }
        },
        // Screen 15 - Practice: Area enclosed by curve
        {
            type: 'practice',
            generate: function() {
                var p = Math.floor(Math.random() * 3) + 2;
                var q = p + Math.floor(Math.random() * 2) + 1;
                var intUpper = q*q*q/3 - (p+q)*q*q/2 + p*q*q;
                var intLower = p*p*p/3 - (p+q)*p*p/2 + p*q*p;
                var rawResult = intUpper - intLower;
                var area = Math.abs(rawResult);
                var diff = q - p;
                var areaNumerator = diff * diff * diff;
                var display = areaNumerator % 6 === 0 ? '' + (areaNumerator/6) : '\\frac{' + areaNumerator + '}{6}';
                var wrong1 = '' + (p * q);
                var wrong2 = '' + (diff * diff);
                var wrong3 = areaNumerator % 6 === 0 ? '' + (areaNumerator/6 + 1) : '\\frac{' + (areaNumerator + 6) + '}{6}';
                var options = [display, wrong1, wrong2, wrong3];
                options = [...new Set(options)];
                while (options.length < 4) options.push('' + (diff * diff + 2));
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(display);
                return {
                    type: 'mc',
                    latex: 'Find the area enclosed between \\(y = (x - ' + p + ')(x - ' + q + ')\\) and the x-axis.',
                    options: options.map(function(o) { return '\\(' + o + '\\) sq units'; }),
                    correctIdx: correctIdx,
                    explain: 'The curve crosses the x-axis at \\(x = ' + p + '\\) and \\(x = ' + q + '\\). The curve is below the x-axis between these points. Integrate \\(\\int_{' + p + '}^{' + q + '}(x-' + p + ')(x-' + q + ')\\,dx\\) and take the absolute value. Area \\(= \\frac{(' + q + '-' + p + ')^3}{6} = \\frac{' + areaNumerator + '}{6} = ' + display + '\\).'
                };
            }
        },
        // Screen 16 - Practice: Definite integral with subtraction
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 4) + 1;
                var b = Math.floor(Math.random() * 5) + 1;
                var lo = 1;
                var hi = Math.floor(Math.random() * 3) + 3;
                var upper = a * hi * hi / 2 - b * hi;
                var lower = a * lo * lo / 2 - b * lo;
                var result = upper - lower;
                var options = [result, result + 2, -result, Math.abs(result + 3)];
                options = [...new Set(options)];
                while (options.length < 4) options.push(result + options.length + 1);
                for (var i = options.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
                }
                var correctIdx = options.indexOf(result);
                return {
                    type: 'mc',
                    latex: 'Evaluate \\(\\int_{' + lo + '}^{' + hi + '} (' + a + 'x - ' + b + ')\\, dx\\)',
                    options: options.map(function(o) { return '\\(' + o + '\\)'; }),
                    correctIdx: correctIdx,
                    explain: '\\(\\Big[\\frac{' + a + 'x^2}{2} - ' + b + 'x\\Big]_{' + lo + '}^{' + hi + '} = \\Big(\\frac{' + a + '(' + hi + ')^2}{2} - ' + b + '(' + hi + ')\\Big) - \\Big(\\frac{' + a + '}{2} - ' + b + '\\Big) = ' + upper + ' - (' + lower + ') = ' + result + '\\).'
                };
            }
        },
        // Screen 17 - Summary
        {
            type: 'summary',
            title: 'Definite Integrals & Areas - Key Points',
            content: '<p>You can now evaluate definite integrals and use them to find areas under and between curves.</p>',
            points: [
                'Definite integrals have limits: \\(\\int_a^b f(x)\\, dx\\)',
                'Evaluate using: \\(\\Big[F(x)\\Big]_a^b = F(b) - F(a)\\)',
                'No \\(+C\\) needed for definite integrals',
                'Area under a curve (above x-axis) = definite integral',
                'If the curve is below the x-axis, the integral is negative - take the absolute value for area',
                'For enclosed areas, find x-intercepts first to determine your limits',
                'If a curve crosses the x-axis, split the integral at the crossing points'
            ]
        }
    ]
};