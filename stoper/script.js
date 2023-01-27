const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')

const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')
const history = document.querySelector('.history')

const actualDate = new Date();
const now = actualDate.getTime();


const playTime = () => {
    let startb=0;
    let stopb = new Date();
    let sekundy = Math.abs(stopb-startb)/1000;

    console.log(sekundy)

}



start.addEventListener('click', playTime())


