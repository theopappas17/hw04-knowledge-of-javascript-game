//a start button initializes
//timer and first question
//first question has multiple choice
//if answer is correct then next question
//if answer is incorrect then next question and subtract time
//if all questions are answered or timer = 0, end game
//present quiz grade
//give opportunity to add initials to document score

//Global Variables
arrayIndex = 0;
let timer;
let timeLeft = 60;

var startGame = document.querySelector("#start");



var questions = [
  {
    question: "JavaScript can be used to:",
    answers: {
      a: "change document text",
      b: "change text styles",
      c: "create website interactions",
      d: "all of the above",
    },
    correctAnswer: "d",
  },
  {
    question: "The DOM is an example of:",
    answers: {
      a: "an API",
      b: "an html page",
      c: "a domain",
      d: "none of the above",
    },
    correctAnswer: "a",
  },
  {
    question: "How do you access the DOM?",
    answers: {
      a: "using JavaScript",
      b: "using Python",
      c: "using html",
      d: "a and b",
    },
    correctAnswer: "d",
  },
];

//Functions
//game function
var clock = function () {
  document.getElementById("timerDisplay").innerHTML = timeLeft;
  timeLeft--;
  if (timeLeft < 0) {
    clearInterval(timer);
    //end quiz function to display last page with stats.
  }
 };

function jsChallenge() {
  startGame.style.display = 'none';
  timer = setInterval(clock, 1000);
  manageQuestions();
  generateAnswers();
}
//Nested Functions

//question generator function
function manageQuestions() {
  document.getElementById("questionDisplay").innerHTML = questions[arrayIndex].question;
}

function generateIndex() {
  //check if answer is correct
  //if correct update score
  //if incorrect decrease time
  //if arrayIndex > questions.length then endQuiz()
  arrayIndex++;
  manageQuestions();
  generateAnswers();
}

function generateAnswers() {
  console.log(questions[arrayIndex].answers.a)
  console.log(questions[arrayIndex].answers)
  document.getElementById("answerA").innerText = questions[arrayIndex].answers.a;
  document.getElementById('answerA').onclick = generateIndex;
  document.getElementById("answerB").innerText = questions[arrayIndex].answers.b;
  document.getElementById('answerB').onclick = generateIndex;
  document.getElementById("answerC").innerText = questions[arrayIndex].answers.c;
  document.getElementById('answerC').onclick = generateIndex;
  document.getElementById("answerD").innerText = questions[arrayIndex].answers.d;
  document.getElementById('answerD').onclick = generateIndex;
}


//Interactions
startGame.addEventListener("click", jsChallenge);
