const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const convertValues = async () => {
  const inputReais = document.getElementById("input-real").value
  const realValueText = document.getElementById("real-value-text")
  const dolarValueText = document.getElementById("dolar-value-text")

  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
  ).then((response) => response.json())

  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high
  const bitcoin = data.BTCBRL.high

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais)

  if (select.value === "US$ Dólar") {
    dolarValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar)
  }

  if (select.value === "€ Euro") {
    dolarValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro)
  }
  if (select.value === "Bitcoin") {
    dolarValueText.innerHTML = (inputReais / bitcoin).toFixed(7)
  }
}

changeCurrency = () => {
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.getElementById("currency-image")

  if (select.value === "US$ Dólar") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./img/estados-unidos.png"
  }

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "€ Euro"
    currencyImage.src = "./img/Euro.png"
  }

  if (select.value === "Bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./img/Bit.png"
  }

  convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)
