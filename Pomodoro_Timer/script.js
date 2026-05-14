const displayTime = document.getElementById('displayTime');
const startTime = document.getElementById('start');
const pauseTime = document.getElementById('pause');
const restartTime = document.getElementById('restart');

let timeLeft = 25 * 60;
let timer;

let isRunning = false;

function updateDisplay() {
    
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        displayTime.textContent = `${minutes} : ${seconds}`;
}

function startTimer() {  
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        timeLeft--;

        updateDisplay()

        if (timeLeft <= 0) {
            clearInterval(timer);
            timeLeft = 0;
        }    

        
    }, 1000);
}

startTime.addEventListener('click', startTimer);

pauseTime.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
})

restartTime.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60;
    updateDisplay();
    startTimer();
})

updateDisplay();