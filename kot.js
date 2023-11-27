var timerInterval;
var timeLeft;
var progressBar = document.getElementById("progressBar");

function startTimer() {
  var timeInput = document.getElementById("timeInput").value;
  timeLeft = timeInput * 60;
  updateProgressBar();

  timerInterval = setInterval(function () {
    timeLeft--;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert(`Час розім'ятися, Ви працюєте ${timeInput} хвилин!`);
      resetTimer();
    } else {
      updateProgressBar();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  resetTimer();
}

function resetTimer() {
  timeLeft = 0;
  updateProgressBar();
}

function updateProgressBar() {
  var progress = (
    (timeLeft / (document.getElementById("timeInput").value * 60)) *
    100
  ).toFixed(2);
  progressBar.style.width = progress + "%";

  if (timeLeft % 2 === 0) {
    document.body.style.backgroundColor = getRandomColor();
  }

  displayTime();
}

function displayTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;
  document.getElementById("currentTime").innerText =
    "Поточний час: " + timeString;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(displayTime, 1000);
