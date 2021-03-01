
var quizSection = document.querySelector("#answers");
var quizTitleEl = document.getElementById("quiz-title");
var startButtonEl = document.getElementById("start-button");
var questionTitle = document.getElementById("quiz-title");
var firstAnswer = document.getElementById("firstAnswer");
var secondAnswer = document.getElementById("secondAnswer");
var thirdAnswer = document.getElementById("thirdAnswer");
var fourthAnswer = document.getElementById("fourthAnswer");

var timer = document.getElementById("timer");



var player = {
    name: "",
    points: 0,
}

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
    answer1: "<script-end>",
    answer2: "</javascript",
    answer3: "\\n",
    answer4: "</script>",
    correct: "thirdAnswer"
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
    answer2: "1999",
    answer3: "1985",
    answer4: "1995",
    correct: "fourthAnswer"
},
{
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correct: "thirdAnswer"
}
];

var i = 0;

var currentQuestion = function() {
    while(i < questions.length) {
        var current = questions[i];

        quizTitleEl.innerHTML = "<h2>" + current.question + "</h2>";

        firstAnswer.innerHTML = "<p>" + current.answer1 + "</p>";
        secondAnswer.innerHTML = "<p>" + current.answer2 + "</p>";
        thirdAnswer.innerHTML = "<p>" + current.answer3 + "</p>";
        fourthAnswer.innerHTML ="<p>" + current.answer4 + "</p>";
       
    } 
    if (i > questions.length) {
        finalScoreView();
    }
    
};

var checkAnswer = function(Answer) {
    console.log(Answer);
    if (Answer === questoins[i].correct) {
        player.points = player.points + 2;
        i++;
        currentQuestion();
    } else {
        player.points = player.points -1;
    }
}


var startQuiz = function() {
    startButtonEl.hidden = true;
    currentQuestion();

}

var finalScoreView = function() {
    quizTitleEl.innerHTML = "<h2>You finished the quiz. Youre final score was " + player.points + ". Would you like to enter your name to save your score?</h2>";

}


startButtonEl.addEventListener("click", startQuiz);