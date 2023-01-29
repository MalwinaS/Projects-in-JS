const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')
const modalShadow = document.querySelector('.modal-shadow')

const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const infoBtn = document.querySelector('.fa-question')
const closeModalBtn = document.querySelector('.close')

const colorBtn = document.querySelector('.fa-paint-brush')
const colorPanel = document.querySelector('.colors')
const colorOne = document.querySelector('.one')
const colorTwo = document.querySelector('.two')
const colorThree = document.querySelector('.three')

let root = document.documentElement

let countTime
let minutes = 0
let seconds = 0

let timesArray = []

const startTime = () => {

    clearInterval(countTime)
    countTime = setInterval(() => {

        if(seconds < 9) {
        seconds++
        stopwatch.textContent = `${minutes}:0${seconds}`
        } else if (seconds >= 9 && seconds < 59) {
            seconds++
            stopwatch.textContent = `${minutes}:${seconds}`
        } else {
            minutes++
            seconds = 0
            stopwatch.textContent = `${minutes}:00`
        }
    }, 1000)
}

const handleStop = () => {
    time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`

    if (stopwatch.textContent !== '0:00') {
        time.style.visibility = 'visible'
        timesArray.push(stopwatch.textContent)
    }
    clearStuff()
}

const handlePause = () => {
    clearInterval(countTime);
}

const handleReset = () => {
    timesArray = []
    time.style.visibility = 'hidden'
    clearStuff()
}

const clearStuff = () => {
    clearInterval(countTime);
    stopwatch.textContent = `0:00`
    timeList.textContent = ''
    seconds = 0
    minutes = 0
}

const showHistory = () => {
    timeList.textContent = ''
    let num = 1

    timesArray.forEach(time => {
        const newTime = document.createElement('li')
        newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`

        timeList.appendChild(newTime)
        num++
    })
}

const showModal = () => {
    if(!(modalShadow.style.display === 'block')) {
        modalShadow.style.display = 'block';
    } else {
        modalShadow.style.display = 'none'
    }
    modalShadow.classList.toggle('modal-animation')
}

startBtn.addEventListener('click', startTime)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)
historyBtn.addEventListener('click', showHistory)
infoBtn.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', showModal)
window.addEventListener('click', e => e.target === modalShadow ? showModal() : false)


colorBtn.addEventListener('click', () => {
    colorPanel.classList.toggle('show-colors')
})
colorOne.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(182, 24, 7)');
})
colorTwo.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(78, 173, 23)');
})
colorThree.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(51, 18, 199)');
})
