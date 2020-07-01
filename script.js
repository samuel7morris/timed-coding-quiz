var startBtn = document.querySelector("#start-button")
var timeEl = document.querySelector("#timer")
var secondsLeft = 75;
var score = 0
var questions = [
    {
        question: "What is a boolean",
        answers: ["a true or false statement", "a set of numbers", "a line of text", "a pack of kittens"],
        correctAns:  "answer1",
    },
    {
        question: "what is front end development",
        answers: ["the mechanics of a website", "developing grills for sports cars", "the visual aspect of a website", "the storage of data in a website"],
        correctAns:  "the visual aspect of a website",
    },
    {
        question: "What is the best type of desert",
        answers: ["Cookies and milk", "ice cream", "birthday cake", "apple pie"],
        correctAns:  "apple pie",
    },
]

var j = 0
var interval;

function createQuestion() {
    document.querySelector("#questions").innerHTML = "";
    document.querySelector("#quizBox").setAttribute("style", "display: block")
    startBtn.setAttribute("style", "display: none")
    var q = questions[j].question
    var ans = questions[j].answers
    var questionPart = document.createElement("h2")
    questionPart.textContent = q;
    document.querySelector("#questions").appendChild(questionPart)

    for (var i = 0; i < ans.length; i++) {
        var ansBtn = document.createElement("button")
        ansBtn.textContent = ans[i]
        document.querySelector("#questions").appendChild(ansBtn)
        ansBtn.addEventListener("click", checkAnswer)
    }
}

function checkAnswer(event) {
    if (questions[j].correctAns){
        console.log("correct")
        secondsLeft--
    } else {
        console.log("incorrect")
    }
    if(j < questions.length) {
        j++
        createQuestion()
    } else {
        endGame()
    }
}

function endGame() {
    clearInterval
    document.querySelector("#results").setAttribute("style", "display:block")
    localStorage.getItem()
}

function counter () {
    interval = setInterval(function() {
        document.querySelector("#timer")
        secondsLeft--
        if(secondsLeft===0) {
            clearInterval(interval)
        } else {
            return secondsLeft
        }
    }, 1000)
}




startBtn.addEventListener("click", createQuestion)
startBtn.addEventListener("click", counter)