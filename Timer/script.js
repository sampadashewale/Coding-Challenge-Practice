let timer;
let isRunning = false;
let hours = 0, minutes = 0, seconds = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStop").textContent = "Start";
    isRunning = false;
  } else {
    timer = setInterval(updateTimer, 1000);
    document.getElementById("startStop").textContent = "Stop";
    isRunning = true;
  }
}

function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  let displayString = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  document.getElementById("display").textContent = displayString;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("startStop").textContent = "Start";
}

function pad(num) {
  return (num < 10) ? ("0" + num) : num;
}
