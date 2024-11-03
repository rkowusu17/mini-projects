const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
const millisecondsLabel = document.getElementById("milliseconds");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const clearBtn = document.querySelector(".clear");

const lapList = document.getElementById("laplist");

/// stopwatch variables

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let statTime = false;
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
clearBtn.addEventListener("click", clearAll);

function startTimer() {
  interval = setInterval(updateTimer, 10);
  startBtn.disabled = true;
  statTime = true;
}

function stopTimer() {
  if (statTime === true) {
    clearInterval(interval);
    addToLapList();
    resetTimerData();
    startBtn.disabled = false;
    startBtn.textContent = "Start";
  }
}

function pauseTimer() {
  if (statTime === true) {
    clearInterval(interval);
    startBtn.disabled = false;
    startBtn.textContent = "Resume";
  }
}

function resetTimer() {
  clearInterval(interval);
  resetTimerData();
  startBtn.disabled = false;
  startBtn.textContent = "Start";
}

function updateTimer() {
  milliseconds++;
  if (milliseconds === 100) {
    // 1 sec= 1000 milliseconds
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  displayTimer();
}

const displayTimer = () => {
  millisecondsLabel.textContent = padTime(milliseconds);
  secondsLabel.textContent = padTime(seconds);
  minutesLabel.textContent = padTime(minutes);
};

function padTime(time) {
  return time.toString().padStart(2, "0");
}

function resetTimerData() {
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  displayTimer();
}

function addToLapList() {
  const lapTime = `${padTime(minutes)}: ${padTime(seconds)}: ${padTime(
    milliseconds
  )} `;

  const listItem = document.createElement("li");

  listItem.innerHTML = `<span> 
    Lap ${lapList.childElementCount + 1}:
  </span> 
  ${lapTime}`;
  lapList.appendChild(listItem);
}

function clearAll() {
  if (statTime === true) {
    lapList.innerHTML = `Cleared`;
    lapList.style.textAlign = "center";
    lapList.style.padding = "10px";
    // setTimeout(2000, delClear());
  }
}

function delClear() {
  lapList.innerHTML = ``;
}
