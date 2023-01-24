const ballArea = document.querySelector('.ball-area')
const ball = document.querySelector('.ball')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const questionInput = document.querySelector('.question')
const myRequest = new Request('answers.json');


questionInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      startAnimate()
      checkQuestion()
    }
  })


const startAnimate = () => {
    ballArea.firstElementChild.classList.add('shake-animation')
    checkQuestion()
}

const checkQuestion = () => {      

    answer.textContent = ""
    const question = questionInput.value
    if (question != '') {
        let pattern = /[.!?]$/
        if(pattern.test(question)) {
            checkAnswer()
        } else {
            error.textContent = "Pytanie musi być zakończone znakiem '?'"
        }
    } else {
        error.textContent = "Musisz zadać jakieś pytanie"
    }
}

const checkAnswer = () => {
    error.textContent = ""

    
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
