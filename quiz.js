const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choice =document.getElementsByClassName("choices");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const endContainer = document.getElementById("endContainer");
const scoreBoard = document.getElementById("scoreBoard");
const playAgain = document.getElementById("playAgain");

let questions = [
    {
        question: "What is the first option?",
        choiceA: "Option 3",
        choiceB: "Option 2",
        choiceC: "Option 1",
        correct:"C"
    },
    {
        question: "What is the second option?",
        choiceA: "Option 3",
        choiceB: "Option 2",
        choiceC: "Option 1",
        correct:"B"
    }
];

// Start Button

document.getElementById("start").addEventListener("click", function(){
    start.style.display = "none";
    quiz.style.display = "block";
    renderQuestion();
}); 

// Displaying Questions

const lastQuestion = questions.length - 1;
let runningQuestion = 0;

function renderQuestion(){
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerText = q.choiceA;
    choiceB.innerText = q.choiceB;
    choiceC.innerText = q.choiceC;
};

// Checking Answers

let score = 0;

function checkAnswer(answer){
    if(answer == questions[runningQuestion].correct){
        score++;
    } else {
    }
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    } else {
        previewScore();
    }
};

// Preview score
function previewScore(){
    quiz.style.display = "none";
    endContainer.style.display = "flex";
    scoreBoard.innerText = score;
};

// reset game
playAgain.addEventListener("click", function(){
    start.style.display = "";
    score = 0;
    runningQuestion = 0;
    endContainer.style.display = "none";
});
