//a start button initializes
//timer and first question
//first question has multiple choice
//if answer is correct then next question
//if answer is incorrect then next question and subtract time
//if all questions are answered or timer = 0, end game
//present quiz grade
//give opportunity to add initials to document score

//Global Variables
let arrayIndex;
let indexArray = [];
let timer;
let timeLeft = 10;
let score = localStorage.getItem("count");

//Interactions with the DOM
let answerA = document.getElementById("answerA");
let answerB = document.getElementById("answerB");
let answerC = document.getElementById("answerC");
let answerD = document.getElementById("answerD");
let actualScore = document.getElementById("actualScore");
let startGame = document.querySelector("#start");
let answers = document.querySelector("#answers");
let docDisplay = document.querySelector("#questionDisplay");
startGame.addEventListener("click", jsChallenge);

//Functions
function clock() {
  document.getElementById("timerDisplay").innerHTML = timeLeft;
  timeLeft--;
  if (timeLeft < 0) {
    clearInterval(timer);
  }
 };

function jsChallenge() {
  startGame.style.display = 'none';
  answers.style.display = 'flex';
  questionDisplay.style.display = 'flex';
  timer = setInterval(clock, 1000);
  arrayIndex = Math.floor(Math.random()*6);
  indexArray.push(arrayIndex);
  manageQuestions();
  answersHandler();
};

function manageQuestions() {
  docDisplay.innerHTML = questions[arrayIndex].question;
};

function generateIndex(event) {
  let userAnswer = event.target.innerText;
  questions[arrayIndex].correctAnswer;
  if (userAnswer === questions[arrayIndex].correctAnswer) {
    score++;
  } else if (userAnswer !== questions[arrayIndex].correctAnswer) {
    timeLeft = timeLeft - 5;
  }
  //if arrayIndex > questions.length then endQuiz()
  if (indexArray.length === questions.length || timeLeft <= 0) {
    endQuiz();
    return;
  }
  arrayIndex = Math.floor(Math.random()*6);
  while (indexArray.includes(arrayIndex)) {
  arrayIndex = Math.floor(Math.random()*6);
 } 
  indexArray.push(arrayIndex);
  manageQuestions();
  answersHandler();
};

function answersHandler() {
  answerA.innerText = questions[arrayIndex].answers.a;
  answerB.innerText = questions[arrayIndex].answers.b;
  answerC.innerText = questions[arrayIndex].answers.c;
  answerD.innerText = questions[arrayIndex].answers.d;
  answers.onclick = generateIndex;
};

function endQuiz() {
   //end quiz function to display last page with stats.
  console.log(score);
  questionDisplay.style.display = 'none';
  answers.style.display = 'none';
  actualScore.innerHTML = score;
  localStorage.setItem("score", score);
}

//Question Object
const questions = [
  {
    question: "What can you do with JavaScript?",
    answers: {
      a: "a: change document text",
      b: "b: change text styles",
      c: "c: create website interactions",
      d: "d: all of the above",
    },
    correctAnswer: "d: all of the above",
  },
  {
    question: "What is the DOM?",
    answers: {
      a: "a: an API",
      b: "b: an html page",
      c: "c: a domain",
      d: "d: none of the above",
    },
    correctAnswer: "a: an API",
  },
  {
    question: "How do you access the DOM?",
    answers: {
      a: "a: using JavaScript",
      b: "b: using Python",
      c: "c: using html",
      d: "d: a and b",
    },
    correctAnswer: "d: a and b",
  },
  {
    question: "What is the BOM?",
    answers: {
      a: "a: another name for the DOM",
      b: "b: an important part of JavaScript",
      c: "c: an important part of ECMAScript",
      d: "d: b and c"
    },
    correctAnswer: "b: an important part of JavaScript",
  },
  {
    question: "What is ECMAScript?",
    answers: {
      a: "a: another name for JavaScript",
      b: "b: a standard maintained by ECMA International",
      c: "c: a scripting language",
      d: "d: b and c"
    },
    correctAnswer: "d: b and c",
  },
  {
    question: "What variable declarations are allowed in JavaScript?",
    answers: {
      a: "a: var",
      b: "b: const",
      c: "c: let",
      d: "d: a, b, and c"
    },
    correctAnswer: "d: a, b, and c"
  }
];