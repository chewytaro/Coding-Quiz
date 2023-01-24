var question = document.getElementById("question"); 
var choices = Array.from( document.getElementsByClassName("choice-text"));

var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuestions = []; 

var questions = [
    {
        question: "Arrays in JavaScript can be used to store which of the following?",
        choice1: "Numbers",
        choice2: "Booleans",
        choice3: "More arrays",
        choice4: "All of the above",
        answer: 4
    },
    {
        question: "In which HTML element would we put JavaScript?",
        choice1: "js",
        choice2: "script",
        choice3: "javascript",
        choice4: "head", 
        answer: 3 
    },
    {
        question: "If we want a message to appear in the console, which of the below is the correct option?",
        choice1: "console.log(...)",
        choice2: "console.message(...)",
        choice3: "console.text(...)",
        choice4: "console.note(...)",
        answer: 1
    },
    {
        question: "Where in HTML would we have the link to CSS?",
        choice1: "At the very end",
        choice2: "In the Head element>",
        choice3: "In the Body element",
        choice4: "Anywhere is fine",
        answer: 2 
    }
];

var maxQuestions = 4;

function startGame () {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestions();
};

function getNewQuestions() {
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        return window.location.assign("./end.html"); 
    }
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length); 
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]; 
    }); 

//make it so that questions are not repeated
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true; 

};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;
        
        acceptingAnswers = false; 
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];
        getNewQuestions(); 
    });
});

startGame();