let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function start() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateDisplay, 1000);
    }
}

function pause() {
    isRunning = false;
    clearInterval(timer);
}

function reset() {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('display').innerText = "00:00:00";
    document.getElementById('laps').innerHTML = "";
}

function lap() {
    if (isRunning) {
        const lapTime = document.createElement('div');
        lapTime.innerText = document.getElementById('display').innerText;
        document.getElementById('laps').appendChild(lapTime);
    }
}

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    const sec = seconds < 10 ? 0${seconds} : seconds;
    const min = minutes < 10 ? 0${minutes} : minutes;
    const hr = hours < 10 ? 0${hours} : hours;
    document.getElementById('display').innerText = ${hr}:${min}:${sec};
}