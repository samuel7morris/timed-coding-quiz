var startBtn = document.querySelector("#start-button")
var timeEl = document.querySelector("#timer")
var secondsLeft = 75;
var score = 0
var questions = [
    {
        question: "What is a boolean",
        answers: ["a true or false statement", "a set of numbers", "a line of text", "a pack of kittens"],
        correctAns:  "a true or false statement"
    },
    {
        question: "what is front end development",
        answers: ["the mechanics of a website", "developing grills for sports cars", "the visual aspect of a website", "the storage of data in a website"],
        correctAns:  "the visual aspect of a website"
    },
    {
        question: "What is the best type of desert",
        answers: ["Cookies and milk", "ice cream", "birthday cake", "apple pie"],
        correctAns:  "apple pie"
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
        ansBtn.setAttribute("value", ans[i])
        ansBtn.textContent = ans[i]
        document.querySelector("#questions").appendChild(ansBtn)
        ansBtn.addEventListener("click", checkAnswer)
    }
}

function checkAnswer(event) {
    var answer = event.target.textContent
    if (answer === questions[j].correctAns){
        console.log(secondsLeft)
        alert("correct")
    } else {
        secondsLeft-=10   
        console.log(secondsLeft)
        alert("incorrect")
    }
    if(j < questions.length - 1) {
        j++
        createQuestion()
    } 
    else {
        endGame()
    }
}

function counter () { 
    interval = setInterval(function() {
        document.querySelector("#timer")
        secondsLeft--
        if(secondsLeft===0) {
            clearInterval(interval)
        } else {
            timeEl.textContent = secondsLeft
            return secondsLeft
        }
    }, 1000)
}

function endGame() {
    clearInterval(counter)

    var highScoreList = JSON.parse(localStorage.getItem("highscores")) || [];

    var yourScore = document.getElementById("results")
    yourScore.textContent = secondsLeft;
    var userScore = JSON.stringify(yourScore.textContent)
    var highScoreName = prompt("What is your name")
   
    var userId = {
        score: userScore,
        initials: highScoreName
    }

    highScoreList.push(userId)

    localStorage.setItem("highscores", JSON.stringify(highScoreList))

    
    
   

    

    
}



startBtn.addEventListener("click", createQuestion)
startBtn.addEventListener("click", counter)



