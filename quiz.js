const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choices =document.getElementById("choices");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

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

const lastQuestion = questions.length - 1;
let runningQuestion = 0;

document.getElementById("start-button").addEventListener("click", function(){
    start.style.display ="none";
    quiz.style.display = "block";
    choices.style.display = "block";
    renderQuestion();
}); 

function renderQuestion(){
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = "<p>" + q.choiceA + "</p>";
    choiceB.innerHTML = "<p>" + q.choiceB + "</p>";
    choiceC.innerHTML = "<p>" + q.choiceC + "</p>";
};



