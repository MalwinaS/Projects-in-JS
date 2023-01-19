const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const btnCount = document.querySelector('.btn-count');
const costInfo = document.querySelector('.cost-info');
const costSpan = document.querySelector('.cost');
const errorInfo = document.querySelector('.error');


const checkElements = () => {
    if (price.value !== '' && people.value !== '' && tip.value !== '' ) {
        countBill();
        errorInfo.textContent = '';
    } 
    else {
        errorInfo.textContent = 'Uzupełnij wszystkie pola!';
        costInfo.style.display='none';
    }
}

const countBill = () => {
    const a = parseFloat(price.value);
    const b = parseInt(people.value);
    const c = parseFloat(tip.value);

    const cost = (a + (a * c)) / b;

    costInfo.style.display = 'block';

    costSpan.textContent = cost.toFixed(2);

}

btnCount.addEventListener('click', checkElements);