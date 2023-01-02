function isNumberKey(event) {
  // Allow the use of the period (.) character as a decimal separator
  if (event.key === ".") {
    return true;
  }
  // Only allow numeric keys
  return !isNaN(event.key);
}

function convertCurrency() {
  if (document.getElementById("amount").value === "") {
    document.getElementById("result").innerHTML = "";
  }
  // Get the input value and ensure it's a number
  const amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount)) {
    return;
  }

  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("to-currency").value;

  // Make a request to the conversion API
  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then((response) => response.json())
    .then((data) => {
      const exchangeRate = data.rates[toCurrency];
      const result = (amount * exchangeRate).toFixed(2);
      document.getElementById("result").innerText = `${result} ${toCurrency}`;
    })
    .catch((error) => {
      console.log(error);
    });
}
