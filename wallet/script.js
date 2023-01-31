const btnAddTransaction = document.querySelector('.add-transaction') 
const btnDeleteAll = document.querySelector('.delete-all') 
const avaliableMoney = document.querySelector('.avaliable-money') 
const btnLight = document.querySelector('.light') 
const btnDark = document.querySelector('.dark') 

const transaction = document.querySelectorAll('.transaction')
const incomeArea = document.querySelector('.income-area')
const expensesArea = document.querySelector('.expenses-area')
const btnDelete = document.querySelector('.delete')

const addTransactionPanel = document.querySelector('.add-transaction-panel')
const name = document.querySelector('#name')
const amount = document.querySelector('#amount')
const category = document.querySelector('#category')
const btnSave = document.querySelector('.save') 
const btnCancel = document.querySelector('.cancel') 
const data = document.querySelector('.data') 
const transactionList = document.querySelector('.transaction-list') 

let selectedValue
let cardID = 0

const addTransaction = () => {
    addTransactionPanel.style.display = 'flex'
}

const cancelTransaction = () => {
    addTransactionPanel.style.display = 'none'
    category.selectedIndex = 0
    data.textContent = ''
    name.value = ''
    amount.value = ''
}

const checkTransaction = () => {
    if (name.value != '' && amount.value > 0 || amount.value < 0 && category.options[category.selectedIndex].value != 0 ) {
        data.textContent = ''
        saveTransaction()
    } else {
        data.textContent = 'Uzupełnij wszystkie dane'
            if (amount.value == 0) {
                data.textContent = 'Kwota transakcji nie może być równa 0'
        }
    }
    // addTransactionPanel.style.display = 'none'
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text
}


const saveTransaction = () => {
    if (amount.value > 0) {
        const newPlus = document.createElement('div')
        incomeArea.append(newPlus)
        newPlus.classList.add('transaction')
        newPlus.setAttribute('id', cardID)
        newPlus.innerHTML = `
        <p class="transaction-name"><i class="fas fa-money-bill-wave"></i>
        ${name.value}</p>
        <p class="transaction-amount">${amount.value} zł
            <button class="delete" onclick="deleteTransaction(${cardID})">
            <i class="fas fa-times"></i>
            </button>
        </p>`
        cardID++
    } else if (amount.value < 0) {
        const newMinus = document.createElement('div')
        expensesArea.append(newMinus)
        newMinus.classList.add('transaction')
        newMinus.setAttribute('id', cardID)
            if(category.options[category.selectedIndex].value == 'shoping') {
                newMinus.innerHTML = `
                <p class="transaction-name"><i class="fas fa-cart-arrow-down"></i>
                ${name.value}</p>
                <p class="transaction-amount">${amount.value} zł
                    <button class="delete" onclick="deleteTransaction(${cardID})"><i class="fas fa-times"></i></button>
                </p>`
            } else if (category.options[category.selectedIndex].value == 'food') {
                newMinus.innerHTML = `
                <div>
                <p class="transaction-name"><i class="fas fa-hamburger"></i>
                ${name.value}</p>
                <p class="transaction-amount">${amount.value} zł
                    <button class="delete" onclick="deleteTransaction(${cardID})"><i class="fas fa-times"></i></button>
                </p>`
            } else if (category.options[category.selectedIndex].value == 'cinema') {
                newMinus.innerHTML = `
                <div>
                <p class="transaction-name"><i class="fas fa-film"></i>
                ${name.value}</p>
                <p class="transaction-amount">${amount.value} zł
                    <button class="delete" onclick="deleteTransaction(${cardID})"><i class="fas fa-times"></i></button>
                </p>`
            }
        cardID++
    }
    category.selectedIndex = 0
    addTransactionPanel.style.display = 'none'
    name.value = ''
    amount.value = ''
}

const deleteTransaction = id => {
    const transactionToDelete = document.getElementById(id)
    console.log(transactionToDelete)
    // transactionToDelete.textContent = ''
    transaction.removeChild(transactionToDelete)

} 

const deleteAllTransaction = () => { 
    // transaction.forEach(trans => {
    //     trans.remove()
    // })
    incomeArea.transaction = ''
}

btnAddTransaction.addEventListener('click', addTransaction)
btnCancel.addEventListener('click', cancelTransaction)
btnSave.addEventListener('click', checkTransaction)
btnDelete.addEventListener('click', deleteTransaction)
btnDeleteAll.addEventListener('click', deleteAllTransaction)