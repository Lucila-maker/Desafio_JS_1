const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value.replace(",", "."))
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // valor em dolar ou outras moedas

    console.log(currencySelect.value)
    const dolarToday = 5.2
    const euroToday = 5.9


    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    } else if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}


convertButton.addEventListener("click", convertValues)