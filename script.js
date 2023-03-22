const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')
const dolar = 5.24
const euro = 5.7
const bitcoin = 143.11004

const convertValues = () => {
  const inputReais = document.getElementById('input-real').value
  const realValueText = document.getElementById('real-value-text')
  const dolarValueText = document.getElementById('dolar-value-text')


  realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(inputReais)

  if (select.value === "US$ Dólar") {
    dolarValueText.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(inputReais / dolar)
  }

  if (select.value === "€ Euro") {
    dolarValueText.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(inputReais / euro)
  }
  if (select.value === "Bitcoin") {
    dolarValueText.innerHTML = (inputReais / bitcoin).toFixed(7)
  }   
}

changeCurrency = () => {
  const currencyName = document.getElementById('currency-name')
  const currencyImage = document.getElementById('currency-image')

  if (select.value === 'US$ Dólar') {
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = './img/estados-unidos.png'
  }

  if (select.value === '€ Euro') {
    currencyName.innerHTML = "€ Euro"
    currencyImage.src = './img/Euro.png'
  }

  if (select.value === 'Bitcoin') {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = './img/Bit.png'
  }

  convertValues()

}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)