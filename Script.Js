document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('compareForm');
    const resultContainer = document.getElementById('result-container');
    const output = document.getElementById('output');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const num3 = parseFloat(document.getElementById('num3').value);

        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            showResult('Please enter valid numbers in all fields.', 'neutral');
            return;
        }

        let resultText = '';
        
        if (num1 === num2 && num2 === num3) {
            resultText = `All numbers are equal: ${num1}`;
        } else if (num1 === num2 && num1 > num3) {
            resultText = `Number 1 (${num1}) and Number 2 (${num2}) are equal and the biggest.`;
        } else if (num1 === num3 && num1 > num2) {
            resultText = `Number 1 (${num1}) and Number 3 (${num3}) are equal and the biggest.`;
        } else if (num2 === num3 && num2 > num1) {
            resultText = `Number 2 (${num2}) and Number 3 (${num3}) are equal and the biggest.`;
        } else {
            const max = Math.max(num1, num2, num3);
            if (max === num1) {
                resultText = `Number 1 (${num1}) is the biggest.`;
            } else if (max === num2) {
                resultText = `Number 2 (${num2}) is the biggest.`;
            } else {
                resultText = `Number 3 (${num3}) is the biggest.`;
            }
        }

        showResult(resultText, 'success');
    });

    function showResult(text, type) {
        output.textContent = text;
        resultContainer.className = ''; // Reset classes
        resultContainer.classList.add(type === 'success' ? 'result-success' : 'result-neutral');
        resultContainer.classList.add('show');
    }
});