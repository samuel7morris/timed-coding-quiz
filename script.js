
var startBtn = document.querySelector("#start-button")
var timeEl = document.querySelector("#timer"); //makes pointers to html elements

var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Timer: " + secondsLeft;
    //if counted down to zero we stop
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

setTime();
