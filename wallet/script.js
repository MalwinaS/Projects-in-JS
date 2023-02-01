const btnAddTransaction = document.querySelector('.add-transaction') 
const btnDeleteAll = document.querySelector('.delete-all') 
const availableMoney = document.querySelector('.avaliable-money') 
const btnLight = document.querySelector('.light') 
const btnDark = document.querySelector('.dark') 

const transaction = document.querySelectorAll('.transaction')
const incomeArea = document.querySelector('.income-area')
const expensesArea = document.querySelector('.expenses-area')
const btnDelete = document.querySelector('.delete')

const addTransactionPanel = document.querySelector('.add-transaction-panel')
const nameInput = document.querySelector('#name')
const amount = document.querySelector('#amount')
const category = document.querySelector('#category')
const btnSave = document.querySelector('.save') 
const btnCancel = document.querySelector('.cancel') 
const data = document.querySelector('.data') 
const transactionList = document.querySelector('.transaction-list') 

const root = document.querySelector(':root');

let selectedValue
let ID = 0
let moneyArr = [0]
let categoryIcon

const addTransaction = () => {
    addTransactionPanel.style.display = 'flex'
}

const cancelTransaction = () => {
    addTransactionPanel.style.display = 'none'
    clearInputs()
}

const checkTransaction = () => {
    if (nameInput.value !== '' && amount.value !== 0 && category.options[category.selectedIndex].value != 0) {
        data.textContent = ''
        saveTransaction()
    } else {
        data.textContent = 'Uzupełnij wszystkie dane'
            if (amount.value == 0) {
                data.textContent = 'Kwota transakcji nie może być równa 0'
        }
    }
}

const clearInputs = () => {
    nameInput.value = ''
    amount.value = ''
    category.selectedIndex = 0
    data.textContent = ''
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text
}

const saveTransaction = () => {
    const newTransaction = document.createElement('div')
    newTransaction.classList.add('transaction')
    newTransaction.setAttribute('id', ID)
    checkCategory(selectedValue)
    newTransaction.innerHTML =`
    <p class="transaction-name">${categoryIcon} ${nameInput.value}</p>
    <p class="transaction-amount">${amount.value} zł
        <button class="delete" onclick="deleteTransaction(${ID})">
        <i class="fas fa-times"></i></button>
    </p>`
    amount.value > 0 ? incomeArea.appendChild(newTransaction) && newTransaction.classList.add('income') : expensesArea.appendChild(newTransaction) && newTransaction.classList.add('expense')
    
    moneyArr.push(parseFloat(amount.value))
    countMoney(moneyArr)
    cancelTransaction()
    ID++
}

const checkCategory = transaction => {
    switch (transaction) {
        case '[ + ] Przychód':
            categoryIcon = `<i class="fas fa-money-bill-wave"></i>`
            break
        case '[ - ] Zakupy':
            categoryIcon = `<i class="fas fa-cart-arrow-down"></i>`
            break
        case '[ - ] Żywność':
            categoryIcon = `<i class="fas fa-hamburger"></i>`
            break
        case '[ - ] Kino':
            categoryIcon = `<i class="fas fa-film"></i>`
            break            
    }
}

const countMoney = money => {
    const newMoney = money.reduce((a, b) => a + b);
    availableMoney.textContent = `${newMoney}zł`;
}


const deleteTransaction = id => {
    const transactionToDelete = document.getElementById(id);
    const transactionAmount = parseFloat(transactionToDelete.childNodes[3].innerHTML);
    const indexOfTransaction = moneyArr.indexOf(transactionAmount);

    moneyArr.splice(indexOfTransaction, 1)

    transactionToDelete.classList.contains('income') ? incomeArea.removeChild(transactionToDelete) : expensesArea.removeChild(transactionToDelete)
    countMoney(moneyArr)
}

const deleteAllTransaction = () => { 
    const elements = Array.from(document.querySelectorAll('.transaction'))
        elements.forEach(el => {
        el.remove()  
        
        availableMoney.textContent = `0 zł`
        moneyArr = [0]
    })
}

const changeLight = () => {
    root.style.setProperty('--first-color', '#F9F9F9');
    root.style.setProperty('--second-color', '#14161F')
    root.style.setProperty('--border-color', '#14161F')
}

const changeDark = () => {
    root.style.setProperty('--first-color', '#14161F')
    root.style.setProperty('--second-color', '#F9F9F9')
    root.style.setProperty('--border-color', '#F9F9F9')
}

btnAddTransaction.addEventListener('click', addTransaction)
btnCancel.addEventListener('click', cancelTransaction)
btnSave.addEventListener('click', checkTransaction)

btnDeleteAll.addEventListener('click', deleteAllTransaction)
btnLight.addEventListener('click', changeLight)
btnDark.addEventListener('click', changeDark)
