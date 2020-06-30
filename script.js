var startBtn = document.querySelector("#start-button")
var timeEl = document.querySelector("#timer")




// creates a timer that counts down from 75 when start button is pressed
function setTime() {
    var secondsLeft = 75;

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}
startBtn.addEventListener("click", setTime)

