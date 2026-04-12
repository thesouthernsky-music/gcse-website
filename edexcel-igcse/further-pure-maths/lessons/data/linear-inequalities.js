window.CURRENT_LESSON = {
    title: "Linear Inequalities",
    subtitle: "Solving and representing linear inequalities",
    screens: [
        // --- CONCEPT 1: Inequality symbols ---
        {
            type: 'concept',
            title: 'Inequality Symbols',
            content: `
                <p>There are four inequality symbols:</p>
                <ul>
                    <li>\\(<\\) means <strong>strictly less than</strong></li>
                    <li>\\(>\\) means <strong>strictly greater than</strong></li>
                    <li>\\(\\leq\\) means <strong>less than or equal to</strong></li>
                    <li>\\(\\geq\\) means <strong>greater than or equal to</strong></li>
                </ul>
                <p>On a number line:</p>
                <ul>
                    <li>An <strong>open circle</strong> \\(\\circ\\) means the value is <em>not</em> included (\\(<\\) or \\(>\\))</li>
                    <li>A <strong>filled circle</strong> \\(\\bullet\\) means the value <em>is</em> included (\\(\\leq\\) or \\(\\geq\\))</li>
                </ul>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px;width:100%"><defs><marker id="li-arr1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#00e5c7"/></marker><marker id="li-arr2" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto"><path d="M8,0 L0,3 L8,6" fill="#54a0ff"/></marker></defs><line x1="30" y1="50" x2="290" y2="50" stroke="#444" stroke-width="0.5"/><text x="30" y="72" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">0</text><text x="90" y="72" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">1</text><text x="150" y="72" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">2</text><text x="210" y="72" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">3</text><text x="270" y="72" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">4</text><line x1="30" y1="46" x2="30" y2="54" stroke="#444" stroke-width="0.5"/><line x1="90" y1="46" x2="90" y2="54" stroke="#444" stroke-width="0.5"/><line x1="150" y1="46" x2="150" y2="54" stroke="#444" stroke-width="0.5"/><line x1="210" y1="46" x2="210" y2="54" stroke="#444" stroke-width="0.5"/><line x1="270" y1="46" x2="270" y2="54" stroke="#444" stroke-width="0.5"/><circle cx="150" cy="50" r="5" fill="none" stroke="#00e5c7" stroke-width="2"/><line x1="155" y1="50" x2="290" y2="50" stroke="#00e5c7" stroke-width="2.5" marker-end="url(#li-arr1)"/><text x="145" y="34" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#00e5c7">x > 2 (open circle)</text><line x1="30" y1="140" x2="290" y2="140" stroke="#444" stroke-width="0.5"/><text x="25" y="162" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">2</text><text x="85" y="162" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">3</text><text x="145" y="162" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">4</text><text x="205" y="162" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">5</text><text x="265" y="162" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">6</text><line x1="30" y1="136" x2="30" y2="144" stroke="#444" stroke-width="0.5"/><line x1="90" y1="136" x2="90" y2="144" stroke="#444" stroke-width="0.5"/><line x1="150" y1="136" x2="150" y2="144" stroke="#444" stroke-width="0.5"/><line x1="210" y1="136" x2="210" y2="144" stroke="#444" stroke-width="0.5"/><line x1="270" y1="136" x2="270" y2="144" stroke="#444" stroke-width="0.5"/><circle cx="210" cy="140" r="5" fill="#54a0ff" stroke="#54a0ff" stroke-width="2"/><line x1="205" y1="140" x2="30" y2="140" stroke="#54a0ff" stroke-width="2.5" marker-end="url(#li-arr2)"/><text x="120" y="124" font-family="'Space Grotesk',sans-serif" font-size="13" fill="#54a0ff">x &lt;= 5 (filled circle)</text></svg></div>
            `
        },
        // --- CONCEPT 2: Solving like equations ---
        {
            type: 'concept',
            title: 'Solving Linear Inequalities',
            content: `
                <p>Solve linear inequalities just like equations, with <strong>one critical rule</strong>:</p>
                <p style="text-align:center; font-size: 1.1em; color: var(--accent, #e74c3c);"><strong>When you multiply or divide by a negative number, reverse the inequality sign.</strong></p>
                <p>For example:</p>
                \\[-2x > 6\\]
                <p>Divide both sides by \\(-2\\) and <strong>flip</strong> the sign:</p>
                \\[x < -3\\]
                <p>All other operations (adding, subtracting, multiplying/dividing by positives) keep the inequality direction the same.</p>
            `
        },
        // --- EXAMPLE 1: Simple inequality ---
        {
            type: 'example',
            title: 'Solving a Simple Inequality',
            problem: 'Solve \\(3x - 7 > 5\\).',
            steps: [
                { text: 'Add 7 to both sides: \\(3x > 12\\)' },
                { text: 'Divide both sides by 3: \\(x > 4\\)' },
                { text: 'On a number line: open circle at 4, arrow pointing right.' }
            ]
        },
        // --- PRACTICE 1: Simple inequality ---
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 5) + 2; // 2 to 6
                var b = Math.floor(Math.random() * 11) + 1; // 1 to 11
                var rhs = Math.floor(Math.random() * 15) + 1;
                var signs = ['>', '<', '\\geq', '\\leq'];
                var signIdx = Math.floor(Math.random() * 4);
                var sign = signs[signIdx];
                var ansSign = sign;
                // ax - b > rhs => ax > rhs + b => x > (rhs+b)/a
                var sum = rhs + b;
                // Keep integer answers
                while (sum % a !== 0) {
                    rhs++;
                    sum = rhs + b;
                }
                var ans = sum / a;
                var bStr = (b >= 0 ? '- ' + b : '+ ' + (-b));
                return {
                    type: 'short',
                    latex: 'Solve \\(' + a + 'x ' + bStr + ' ' + sign + ' ' + rhs + '\\).',
                    answer: 'x ' + ansSign + ' ' + ans,
                    explain: 'Add \\(' + b + '\\) to both sides: \\(' + a + 'x ' + sign + ' ' + sum + '\\). Divide by \\(' + a + '\\): \\(x ' + ansSign + ' ' + ans + '\\).'
                };
            }
        },
        // --- EXAMPLE 2: Negative coefficient ---
        {
            type: 'example',
            title: 'Inequality with Negative Coefficient',
            problem: 'Solve \\(4 - 2x \\geq 10\\).',
            steps: [
                { text: 'Subtract 4 from both sides: \\(-2x \\geq 6\\)' },
                { text: 'Divide both sides by \\(-2\\) and <strong>reverse</strong> the inequality: \\(x \\leq -3\\)' },
                { text: 'On a number line: filled circle at \\(-3\\), arrow pointing left.' }
            ]
        },
        // --- PRACTICE 2: Negative coefficient ---
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 4) + 2; // 2, 3, 4, 5
                var c = Math.floor(Math.random() * 10) + 1;
                var signs = ['>', '<', '\\geq', '\\leq'];
                var flipped = ['<', '>', '\\leq', '\\geq'];
                var idx = Math.floor(Math.random() * 4);
                var sign = signs[idx];
                var resultSign = flipped[idx];
                // c - ax [sign] rhs => -ax [sign] rhs - c => x [flipped] (c - rhs)/a
                var ans = Math.floor(Math.random() * 7) - 3; // -3 to 3
                var rhs = c - a * ans;
                return {
                    type: 'short',
                    latex: 'Solve \\(' + c + ' - ' + a + 'x ' + sign + ' ' + rhs + '\\).',
                    answer: 'x ' + resultSign + ' ' + ans,
                    explain: 'Subtract \\(' + c + '\\): \\(-' + a + 'x ' + sign + ' ' + (rhs - c) + '\\). Divide by \\(-' + a + '\\) and flip: \\(x ' + resultSign + ' ' + ans + '\\).'
                };
            }
        },
        // --- CONCEPT 3: Compound inequalities ---
        {
            type: 'concept',
            title: 'Compound (Double) Inequalities',
            content: `
                <p>A compound inequality has the variable sandwiched between two bounds:</p>
                \\[a < f(x) < b\\]
                <p>To solve, apply the same operation to <strong>all three parts</strong> simultaneously.</p>
                <p>For example:</p>
                \\[-1 < 2x + 3 \\leq 9\\]
                <p>Subtract 3 from all parts: \\(-4 < 2x \\leq 6\\)</p>
                <p>Divide all parts by 2: \\(-2 < x \\leq 3\\)</p>
                <p>This means \\(x\\) is greater than \\(-2\\) (not including \\(-2\\)) and less than or equal to 3.</p>
                <div style="text-align:center;margin:20px 0"><svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px;width:100%"><line x1="20" y1="100" x2="300" y2="100" stroke="#444" stroke-width="0.5"/><line x1="40" y1="96" x2="40" y2="104" stroke="#444" stroke-width="0.5"/><line x1="100" y1="96" x2="100" y2="104" stroke="#444" stroke-width="0.5"/><line x1="160" y1="96" x2="160" y2="104" stroke="#444" stroke-width="0.5"/><line x1="220" y1="96" x2="220" y2="104" stroke="#444" stroke-width="0.5"/><line x1="280" y1="96" x2="280" y2="104" stroke="#444" stroke-width="0.5"/><text x="36" y="122" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">0</text><text x="96" y="122" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">1</text><text x="156" y="122" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">2</text><text x="216" y="122" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">3</text><text x="276" y="122" font-family="'Space Grotesk',sans-serif" font-size="11" fill="#e0e0e0">4</text><circle cx="100" cy="100" r="5" fill="none" stroke="#feca57" stroke-width="2"/><circle cx="280" cy="100" r="5" fill="#feca57" stroke="#feca57" stroke-width="2"/><line x1="105" y1="100" x2="275" y2="100" stroke="#feca57" stroke-width="2.5"/><text x="100" y="78" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">open</text><text x="280" y="78" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">filled</text><text x="160" y="55" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="14" fill="#feca57">1 &lt; x &lt;= 4</text><text x="160" y="155" text-anchor="middle" font-family="'Space Grotesk',sans-serif" font-size="12" fill="#e0e0e0">Compound inequality on a number line</text></svg></div>
            `
        },
        // --- EXAMPLE 3: Compound inequality ---
        {
            type: 'example',
            title: 'Solving a Compound Inequality',
            problem: 'Solve \\(-1 < 3x + 2 < 8\\).',
            steps: [
                { text: 'Subtract 2 from all three parts: \\(-3 < 3x < 6\\)' },
                { text: 'Divide all parts by 3: \\(-1 < x < 2\\)' },
                { text: 'On a number line: open circles at \\(-1\\) and \\(2\\), line segment between them.' }
            ]
        },
        // --- PRACTICE 3: Compound inequality ---
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 4) + 2; // 2 to 5
                var b = Math.floor(Math.random() * 9) - 4; // -4 to 4
                var lo = Math.floor(Math.random() * 5) - 3; // answer lower bound
                var hi = lo + Math.floor(Math.random() * 4) + 1; // answer upper bound, > lo
                // a*lo + b < ax + b < a*hi + b
                var lhs = a * lo + b;
                var rhs = a * hi + b;
                return {
                    type: 'short',
                    latex: 'Solve \\(' + lhs + ' < ' + a + 'x + ' + (b >= 0 ? b : '(' + b + ')') + ' < ' + rhs + '\\). Give your answer as ... < x < ...',
                    answer: lo + ' < x < ' + hi,
                    explain: 'Subtract \\(' + b + '\\) from all parts: \\(' + (a * lo) + ' < ' + a + 'x < ' + (a * hi) + '\\). Divide by \\(' + a + '\\): \\(' + lo + ' < x < ' + hi + '\\).'
                };
            }
        },
        // --- CONCEPT 4: Number line representation ---
        {
            type: 'concept',
            title: 'Representing on a Number Line',
            content: `
                <p>To represent an inequality on a number line:</p>
                <ul>
                    <li>\\(x > a\\): open circle at \\(a\\), arrow to the <strong>right</strong></li>
                    <li>\\(x < a\\): open circle at \\(a\\), arrow to the <strong>left</strong></li>
                    <li>\\(x \\geq a\\): filled circle at \\(a\\), arrow to the <strong>right</strong></li>
                    <li>\\(x \\leq a\\): filled circle at \\(a\\), arrow to the <strong>left</strong></li>
                    <li>\\(a < x < b\\): open circles at \\(a\\) and \\(b\\), line between</li>
                </ul>
                <p>Remember: open circle = not included, filled circle = included.</p>
            `
        },
        // --- PRACTICE 4: Identify from number line description ---
        {
            type: 'practice',
            generate: function() {
                var val = Math.floor(Math.random() * 11) - 5;
                var type = Math.floor(Math.random() * 4);
                var descriptions = [
                    'open circle at \\(' + val + '\\), arrow pointing right',
                    'filled circle at \\(' + val + '\\), arrow pointing right',
                    'open circle at \\(' + val + '\\), arrow pointing left',
                    'filled circle at \\(' + val + '\\), arrow pointing left'
                ];
                var answers = [
                    'x > ' + val,
                    'x >= ' + val,
                    'x < ' + val,
                    'x <= ' + val
                ];
                var options = ['\\(x > ' + val + '\\)', '\\(x \\geq ' + val + '\\)', '\\(x < ' + val + '\\)', '\\(x \\leq ' + val + '\\)'];
                return {
                    type: 'mc',
                    latex: 'A number line shows: ' + descriptions[type] + '. Which inequality does this represent?',
                    options: options,
                    correctIdx: type,
                    explain: 'An ' + (type % 2 === 0 ? 'open' : 'filled') + ' circle means the value is ' + (type % 2 === 0 ? 'not included' : 'included') + ', and the arrow points ' + (type < 2 ? 'right (greater)' : 'left (less)') + '.'
                };
            }
        },
        // --- CONCEPT 5: Set notation ---
        {
            type: 'concept',
            title: 'Set Notation',
            content: `
                <p>Solutions can be written in <strong>set notation</strong>:</p>
                <ul>
                    <li>\\(x > 3\\) becomes \\(\\{x : x > 3\\}\\) or equivalently \\(\\{x \\in \\mathbb{R} : x > 3\\}\\)</li>
                    <li>\\(-2 \\leq x < 5\\) becomes \\(\\{x : -2 \\leq x < 5\\}\\)</li>
                </ul>
                <p>Or in <strong>interval notation</strong>:</p>
                <ul>
                    <li>\\(x > 3\\) becomes \\((3, \\infty)\\)</li>
                    <li>\\(x \\leq -1\\) becomes \\((-\\infty, -1]\\)</li>
                    <li>\\(-2 \\leq x < 5\\) becomes \\([-2, 5)\\)</li>
                </ul>
                <p>Round brackets \\((\\,)\\) = not included. Square brackets \\([\\,]\\) = included.</p>
            `
        },
        // --- PRACTICE 5: Solve and give in set notation ---
        {
            type: 'practice',
            generate: function() {
                var a = Math.floor(Math.random() * 4) + 2;
                var b = Math.floor(Math.random() * 11) - 5;
                var rhs = Math.floor(Math.random() * 20) - 5;
                while ((rhs - b) % a !== 0) rhs++;
                var ans = (rhs - b) / a;
                var bStr = (b >= 0 ? '+ ' + b : '- ' + (-b));
                var options = [
                    '\\(\\{x : x > ' + ans + '\\}\\)',
                    '\\(\\{x : x \\geq ' + ans + '\\}\\)',
                    '\\(\\{x : x < ' + ans + '\\}\\)',
                    '\\(\\{x : x \\leq ' + ans + '\\}\\)'
                ];
                var correctIdx = Math.floor(Math.random() * 4);
                var signs = ['>', '\\geq', '<', '\\leq'];
                return {
                    type: 'mc',
                    latex: 'Solve \\(' + a + 'x ' + bStr + ' ' + signs[correctIdx] + ' ' + rhs + '\\) and select the correct set notation.',
                    options: options,
                    correctIdx: correctIdx,
                    explain: 'Subtract \\(' + b + '\\): \\(' + a + 'x ' + signs[correctIdx] + ' ' + (rhs - b) + '\\). Divide by \\(' + a + '\\): \\(x ' + signs[correctIdx] + ' ' + ans + '\\), which is \\(' + options[correctIdx].replace(/\\\(/g, '').replace(/\\\)/g, '') + '\\).'
                };
            }
        },
        // --- PRACTICE 6: Mixed difficulty ---
        {
            type: 'practice',
            generate: function() {
                // ax + b > cx + d type
                var a = Math.floor(Math.random() * 4) + 2; // 2-5
                var c = Math.floor(Math.random() * (a - 1)) + 1; // 1 to a-1 (so a-c > 0)
                var b = Math.floor(Math.random() * 11) - 5;
                var d = Math.floor(Math.random() * 11) - 5;
                while ((d - b) % (a - c) !== 0) d++;
                var ans = (d - b) / (a - c);
                var signs = ['>', '<', '\\geq', '\\leq'];
                var idx = Math.floor(Math.random() * 4);
                var sign = signs[idx];
                var bStr = (b >= 0 ? '+ ' + b : '- ' + (-b));
                var dStr = (d >= 0 ? '+ ' + d : '- ' + (-d));
                return {
                    type: 'short',
                    latex: 'Solve \\(' + a + 'x ' + bStr + ' ' + sign + ' ' + c + 'x ' + dStr + '\\).',
                    answer: 'x ' + sign + ' ' + ans,
                    explain: 'Subtract \\(' + c + 'x\\) from both sides: \\(' + (a - c) + 'x ' + bStr + ' ' + sign + ' ' + d + '\\). Subtract \\(' + b + '\\): \\(' + (a - c) + 'x ' + sign + ' ' + (d - b) + '\\). Divide by \\(' + (a - c) + '\\): \\(x ' + sign + ' ' + ans + '\\).'
                };
            }
        },
        // --- SUMMARY ---
        {
            type: 'summary',
            title: 'Linear Inequalities - Summary',
            content: '<p>You can now solve linear inequalities and represent them correctly.</p>',
            points: [
                'Solve linear inequalities using the same steps as equations',
                'Multiply or divide by a negative number: REVERSE the inequality sign',
                'Compound inequalities: apply operations to all three parts simultaneously',
                'Open circle \\(\\circ\\) = not included; filled circle \\(\\bullet\\) = included',
                'Solutions can be expressed as inequalities, set notation, or interval notation'
            ]
        }
    ]
};
