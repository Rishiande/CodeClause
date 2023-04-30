let timerInterval;
let timerRunning = false;
let timerTime = 0;

function startTimer() {
  timerRunning = true;
  timerInterval = setInterval(updateTimer, 10);
}

function stopTimer() {
  timerRunning = false;
  clearInterval(timerInterval);
}

function resetTimer() {
  timerTime = 0;
  updateTimerDisplay();
}

function updateTimer() {
  timerTime += 10;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const milliseconds = timerTime % 1000;
  const seconds = Math.floor((timerTime / 1000) % 60);
  const minutes = Math.floor((timerTime / 1000 / 60) % 60);
  const hours = Math.floor(timerTime / 1000 / 60 / 60);

  const millisecondsDisplay = padNumber(milliseconds, 3);
  const secondsDisplay = padNumber(seconds, 2);
  const minutesDisplay = padNumber(minutes, 2);
  const hoursDisplay = padNumber(hours, 2);

  document.getElementById('timer').innerHTML = `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}.${millisecondsDisplay}`;
}

function padNumber(number, length) {
  let str = '' + number;
  while (str.length < length) {
    str = '0' + str;
  }
  return str;
}
let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchStartTime;

function startStopwatch() {
  stopwatchRunning = true;
  stopwatchStartTime = new Date().getTime();
  stopwatchInterval = setInterval(updateStopwatch, 10);
}

function stopStopwatch() {
  stopwatchRunning = false;
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  stopStopwatch();
  document.getElementById('stopwatch').innerHTML = '00:00:00.000';
}

function updateStopwatch() {
  const stopwatchTime = new Date().getTime() - stopwatchStartTime;
  updateStopwatchDisplay(stopwatchTime);
}

function updateStopwatchDisplay(stopwatchTime) {
  const milliseconds = stopwatchTime % 1000;
  const seconds = Math.floor((stopwatchTime / 1000) % 60);
  const minutes = Math.floor((stopwatchTime / 1000 / 60) % 60);
  const hours = Math.floor(stopwatchTime / 1000 / 60 / 60);

  const millisecondsDisplay = padNumber(milliseconds, 3);
  const secondsDisplay = padNumber(seconds, 2);
  const minutesDisplay = padNumber(minutes, 2);
  const hoursDisplay = padNumber(hours, 2);

  document.getElementById('stopwatch').innerHTML = `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}.${millisecondsDisplay}`;
}

function padNumber(number, length) {
  let str = '' + number;
  while (str.length < length) {
    str = '0' + str;
  }
  return str;
}
