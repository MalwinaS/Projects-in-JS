const ballArea = document.querySelector('.ball-area')
const answer1 = document.querySelector('.answer')
const error = document.querySelector('.error')
const questionInput = document.querySelector('.question')
const myRequest = new Request('answers.json');


questionInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
      event.preventDefault();

      checkQuestion()
    }
  })

const checkQuestion = () => {
    ballArea.firstElementChild.classList.add('shake-animation')
    const question = questionInput.value
    if (question != '') {
        if(question.includes('?')) {
            checkAnswer()
        } else {
            error.textContent = "Brakuje znaku zapytania"
        }
    } else {
        error.textContent = "Zadaj pytanie"
    }
}

// let ranAnswers = 

// fetch(myRequest)
//   .then((response) => response.json())
//   .then((data) => {

//         console.log(data)


//   })


// .sort(function() { return .5 - Math.random();});


const checkAnswer = () => {
    // console.log(ranAnswers)
    answer1.innerHTML = ranAnswers

}
