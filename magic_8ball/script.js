const ball = document.querySelector('.ball')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const questionInput = document.querySelector('.question')
const myRequest = new Request('answers.json');

questionInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      ball.classList.add('shake-animation')
    setTimeout(checkQuestion, 1000)
    }
  })

const startAnimate = () => {
    ball.classList.add('shake-animation')
    setTimeout(checkQuestion, 1000)
}

const checkQuestion = () => {      
    answer.textContent = ""
    const question = questionInput.value
    if (question != '' && question.slice(-1) === '?') {
        checkAnswer()
        error.textContent = ''
    } else if (question !== '' && question.slice(-1) !== '?') {
        error.textContent = "Pytanie musi być zakończone znakiem '?'"
        answer.textContent = ''
    } else {
        error.textContent = "Musisz zadać jakieś pytanie"
        answer.textContent = ''
    }
    ball.classList.remove('shake-animation') 
}

const checkAnswer = () => {
    error.textContent = ''
    
fetch(myRequest)
  .then((response) => response.json())
  .then((data) => { 

   let arr =  JSON.parse(JSON.stringify(data))
   let arrprop = (arr.answers)
   let answerRandom = arrprop[Math.floor(Math.random()*arrprop.length)];
   answer.innerHTML = `<span>Odpowiedź: </span> ${answerRandom}`
  })
}

ball.addEventListener('click', startAnimate)
