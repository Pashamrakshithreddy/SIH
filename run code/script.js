function runHTMLCode(questionNumber) {
    const code = document.getElementById(`html-question-${questionNumber}`).value;
    const outputDiv = document.getElementById(`html-output-${questionNumber}`);
    outputDiv.innerHTML = code.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

function runCSSCode(questionNumber) {
    const code = document.getElementById(`css-question-${questionNumber}`).value;
    const outputDiv = document.getElementById(`css-output-${questionNumber}`);
    outputDiv.innerHTML = `
        <style>
            ${code}
        </style>
        <div class="example">
            <h1>Heading</h1>
            <p>This is a paragraph.</p>
        </div>
    `;
}

function runJSCode(questionNumber) {
    const code = document.getElementById(`js-question-${questionNumber}`).value;
    const outputDiv = document.getElementById(`js-output-${questionNumber}`);
    outputDiv.innerHTML = '';
    try {
        eval(code);
    } catch (error) {
        outputDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}
