Function convertCurrency() {
    Const amount = parseFloat(document.getElementById(‘amount’).value);
    Const fromCurrency = document.getElementById(‘fromCurrency’).value;
    Const toCurrency = document.getElementById(‘toCurrency’).value;
    
    If (isNaN(amount) || amount <= 0) {
        Document.getElementById(‘result’).textContent = ‘Please enter a valid amount’;
        Return;
    }

    Const convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
    Document.getElementById(‘result’).textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}

