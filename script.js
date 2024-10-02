function calculate() {
    const input = document.getElementById('input').value;
    let result;

    try {
        // Handle big number calculations using BigInt
        result = eval(input.replace(/(\d+)/g, 'BigInt($1)'));
    } catch (error) {
        result = "Error: " + error.message;
    }

    document.getElementById('result').innerText = result ? result.toString() : '';
}
