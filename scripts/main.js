const timer = document.querySelector('.main__p');
const startButton = document.querySelector('#start');
let milliseconds = 0;
let timerActivity;

function startTimer() {
    timerActivity = setInterval(() => {
        milliseconds += 10;
        let dateTimer = new Date(milliseconds);
        timer.textContent = 
            ('0' + dateTimer.getUTCHours()).slice(-2) + ':' + 
            ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' + 
            ('0' + dateTimer.getUTCSeconds()).slice(-2) + '.' + 
            ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1);
    }, 10);
    startButton.disabled = true;
}

function pauseTimer() {
    clearInterval(timerActivity);
    startButton.disabled = false;
}

function resetTimer() {
    clearInterval(timerActivity);
    milliseconds = 0;
    timer.textContent = "00:00:00.00";
    startButton.disabled = false;
}

document.addEventListener('click', (e) => {
    if (e.target.id === 'start') startTimer();
    if (e.target.id === 'pause') pauseTimer();
    if (e.target.id === 'reset') resetTimer();
});