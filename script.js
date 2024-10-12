function calculate() {
    const input = document.getElementById('input').value;
    let result;

    try {
        // Replace numbers with Big instances
        const expression = input.replace(/(\d+(?:\.\d+)?)/g, 'new Big("$1")')
                                 .replace(/(\w+)\^(\w+)/g, 'Big("$1").pow(Big("$2"))'); // Handle exponentiation

        // Evaluate the expression using eval
        result = eval(expression);
    } catch (error) {
        result = "Error: " + error.message;
    }

    document.getElementById('result').innerText = result ? result.toString() : '';
}
