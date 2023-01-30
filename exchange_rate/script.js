const currencyOne = document.querySelector('#currency-one')
const amountOne = document.querySelector('.amount-one')
const currencyTwo = document.querySelector('#currency-two')
const amountTwo = document.querySelector('.amount-two')
const btnSwap = document.querySelector('.swap')
const rateInfo = document.querySelector('.rate-info')


const calculate = () => {
    fetch('https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}')
    .then (res => res.json())
    .then (data => 
        const currency1 = currencyOne.value
        const currency2 = currencyTwo.value
        )
}

calculate()

