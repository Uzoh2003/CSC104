Function calculateInterest() {
    // Get the values from the input fields
    Const principal = parseFloat(document.getElementById(‘principal’).value);
    Const rate = parseFloat(document.getElementById(‘rate’).value);
    Const time = parseFloat(document.getElementById(‘time’).value);

    // Check if the inputs are valid numbers
    If (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        Document.getElementById(‘result’).innerText = ‘Please enter valid numbers’;
        Return;
    }

    // Calculate simple interest
    Const interest = (principal * rate * time) / 100;

    // Display the result
    Document.getElementById(‘result’).innerText = `Simple Interest: ${interest}`;
}

