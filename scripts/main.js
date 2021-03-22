const timer = document.querySelector('.main__p');
const startButton = document.querySelector('#start');
const themeButton = document.querySelector('.main__theme');
let milliseconds = 0;
let timerActivity;
document.documentElement.setAttribute('theme', 'light');

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

themeButton.addEventListener('click', (e) => {
    if (document.documentElement.getAttribute('theme') === 'light') {
        document.documentElement.setAttribute('theme', 'dark');
        themeButton.style.backgroundImage = "url('moon_white.png')";
    } else {
        document.documentElement.setAttribute('theme', 'light');
        themeButton.style.backgroundImage = "url('moon_black.png')";
    }
});

document.addEventListener('click', (e) => {
    if (e.target.id === 'start') startTimer();
    if (e.target.id === 'pause') pauseTimer();
    if (e.target.id === 'reset') resetTimer();
});