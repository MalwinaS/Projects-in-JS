const search = document.querySelector('.search');
const lists = document.querySelectorAll('li');

const searching = e => {
  const text = e.target.value.toLowerCase();
    lists.forEach(el => {
        if (el.textContent.toLowerCase().indexOf(text) !== -1) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    })
}

search.addEventListener('keyup', searching);


// second solution

// const search = document.querySelector('.search');
// const lists = document.querySelectorAll('li');

// const searching = () => {
//     lists.forEach(el => {
//         const match = new RegExp(search.value, 'i').test(el.textContent);

//         if (!match) {
//             el.style.display = 'none';
//         } else {
//             el.style.display = 'block';
//         }
// })
// }

// search.addEventListener('keyup', searching);
