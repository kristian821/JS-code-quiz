
var quizSection = document.querySelector("#answers");
var quizTitleEl = document.getElementById("quiz-title");
var startButtonEl = document.getElementById("start-button");
var questionTitle = document.getElementById("quiz-title");
var firstAnswer = document.getElementById("firstAnswer");
var secondAnswer = document.getElementById("secondAnswer");
var thirdAnswer = document.getElementById("thirdAnswer");
var fourthAnswer = document.getElementById("fourthAnswer");
var highScore = document.getElementById("highscore");


var timer = document.getElementById("timer");



var player = {
    name: "",
    points: 0,
}
var players = [];

var questions = [ {
    question: "What are variables used for in JavaScript programs?",   
    answer1: "Storing numbers, dates, or other values",
    answer2: "Changing Values randomly", 
    answer3: "Holding placeholder text",
    answer4: "Creating scripts",
    correct: "firstAnswer"
},
{
    question: "How do you close a JavaScript tag?",
    answer1: "&lt;/script-end&gt",
    answer2: "&lt/javascript&gt",
    answer3: "\\n",
    answer4: "&lt/script&gt",
    correct: "fourthAnswer"
},
{
    question: "Which of the following is an incorrect name for variables in JavaScript?",
    answer1: "1stVariable", 
    answer2: "secondVariable",
    answer3: "ThirdVariable",
    answer4: "forth-variable",
    correct: "firstAnswer"
},
{
    question: "When was JavaScript invented?",
    answer1: "1998",
    answer2: "1995",
    answer3: "1985",
    answer4: "1999",
    correct: "secondAnswer"
},
{
    question: "What are the three phases of event propagation?",
    answer1: "Target > Capturing > Bubbling",
    answer2: "Bubbling > Target > Capturing",
    answer3: "Capturing > Target > Bubbling",
    answer4: "Target > Bubbling > Capturing",
    correct: "thirdAnswer"
}
];

var i = 0;

var currentQuestion = function() {
   
        var current = questions[i];

        quizTitleEl.innerHTML = "<h2>" + current.question + "</h2>";

        firstAnswer.innerHTML = "<button>" + current.answer1.toString() + "</button>";
        secondAnswer.innerHTML = "<button>" + current.answer2.toString() + "</button>";
        thirdAnswer.innerHTML = "<button>" + current.answer3.toString() + "</button>";
        fourthAnswer.innerHTML ="<button>" + current.answer4.toString() + "</button>";
    
};

var checkAnswer = function(Answer) {
    if (Answer === questions[i].correct) {
    
        player.points = player.points + 2;
        i++;
    
        if (i < questions.length) {
            currentQuestion();
        } else if (i >= questions.length) {
            finalScoreView();
        }
    } else {
        player.points = player.points -1;
    }
}


var startQuiz = function() {
    startButtonEl.hidden = true;
    currentQuestion();

}

var finalScoreView = function() {
    quizTitleEl.innerHTML = "<h2>You finished the quiz. Your final score was " + player.points + ". Enter your name to save your score?</h2>";
    firstAnswer.innerHTML = null;
    secondAnswer.innerHTML = null;
    thirdAnswer.innerHTML = null;
    fourthAnswer.innerHTML = null;

    var playerName = document.createElement("input");
    var enterButton = document.createElement("button");
    enterButton.id = "answers"
    enterButton.innerHTML = "<button type='submit'>Enter</button>"
    enterButton.className = "button";

    quizSection.appendChild(enterButton);
    quizTitleEl.appendChild(playerName);
    player.name = playerName.value;
    player.points = player.points;
    
    players.push(player);
    enterButton.addEventListener("submit", saveScore);
}

highScore.addEventListener("click", loadScores);

var saveScore = function() {
    localStorage.setItem("player", JSON.stringify(player));
    
}
var loadScores = function() {
    quizTitleEl.textContent = "High Scores"
    var savedScores = localStorage.getItem("player", savedScores)
    ;
    if (!savedScores) {
        return false;
    }
    savedScores = JSON.parse(savedScores);


    for (var i = 0; i < savedScores.length; i++) {
        var scoreItemEl = document.createElement("li");
        scores.innerHTML = "<p id='highscore'>" + player.name + " : " + player.points + "</p>";

        quizTitleEl.appendChild(scores);
    }

}
startButtonEl.addEventListener("click", startQuiz);