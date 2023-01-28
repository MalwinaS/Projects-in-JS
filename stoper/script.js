const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')
const modalShado = document.querySelector('.modal-shadow')

const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const infoBtn = document.querySelector('.info')
const closeModalBtn = document.querySelector('.close')


let countTime
let minutes = 0
let seconds = 0

const startTime = () => {
    countTime = setInterval(() => {

        if(seconds < 9) {
        seconds++
        stopwatch.textContent = `${seconds}:0${seconds}`

        }
    }, 1000)
}



startBtn.addEventListener('click', startTime)
