let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

const display = document.getElementById("display");
const lapList = document.getElementById("lapTimes");

function formatTime(ms) {
  const milliseconds = ms % 1000;
  const seconds = Math.floor(ms / 1000) % 60;
  const minutes = Math.floor(ms / 60000) % 60;
  const hours = Math.floor(ms / 3600000);

  return (
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0") + ":" +
    String(milliseconds).padStart(3, "0")
  );
}

function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

function startStopwatch() {
  if (isRunning) return;

  isRunning = true;
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 10);
}

function pauseStopwatch() {
  if (!isRunning) return;

  isRunning = false;
  clearInterval(timerInterval);
}

function resetStopwatch() {
  isRunning = false;
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
  lapList.innerHTML = "";
}

function recordLap() {
  if (!isRunning) return;

  const lapTime = document.createElement("li");
  lapTime.textContent = formatTime(elapsedTime);
  lapTime.className = "bg-white p-2 rounded shadow text-gray-700";
  lapList.appendChild(lapTime);
}
