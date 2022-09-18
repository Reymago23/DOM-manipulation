const startStopBtn = document.querySelector('#startStopBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resetBtn = document.querySelector('#resetBtn');
const timer = document.querySelector('#timer');

let timerInterval = null;
let seconds = 0;
let minutes = 0;
let hours = 0;

startStopBtn.addEventListener(
    'click',
    function () {
        timerInterval = window.setInterval(stopWatch, 1000);
        startStopBtn.classList.toggle('hidden');
        pauseBtn.classList.toggle('hidden');
    }
)

pauseBtn.addEventListener(
    'click',
    function () {
        startStopBtn.classList.toggle('hidden');
        pauseBtn.classList.toggle('hidden');
        window.clearInterval(timerInterval);
    }
)

resetBtn.addEventListener(
    'click',
    function () {
        startStopBtn.classList.toggle('hidden');
        pauseBtn.classList.toggle('hidden');
        window.clearInterval(timerInterval);
        hours = minutes = seconds = 0;
        timer.innerText = '00:00:00';
    }
)

function stopWatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if (hours.toString().length < 2)
        hours = hours < 10 ? '0' + hours : hours;
    if (minutes.toString().length < 2)
        minutes = minutes < 10 ? '0' + minutes : minutes;
    if (seconds.toString().length < 2)
        seconds = seconds < 10 ? '0' + seconds : seconds;

    // console.log(hours + ':' + minutes + ':' + seconds);
    timer.innerText = hours + ':' + minutes + ':' + seconds;
}

