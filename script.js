//cleanup code
//add readme
//add comments

var startButton = document.getElementById("start_button");
var startScreenEl = document.getElementById("startScreen");
var startQuizEl = document.getElementById("startQuiz");
var answerButtons = document.querySelectorAll(".answer-btn");
var result = document.querySelector(".answer-results");
var resultEl = document.getElementById("startAnswerResults");
var countdownEl = document.getElementById("countdown");
var finalScoreScreenEl = document.getElementById("finalScore");
var submitButton = document.getElementById("submit-score");
var highscoresEl = document.getElementById("highscores");
var showScoreEl = document.getElementById("score");
var goBackButtonEl = document.getElementById("go_to_start_button");
var clearHighScoresButtonEl = document.getElementById("clear_highscores_button");
var gameoverEl = document.getElementById("gameover-msg");
var highScoresListEl = document.getElementById("highScoresList");

var currentQuestion = 0;
var score = 0;
var timeLeft = 60;
var highScores = [];
var countdownInterval;

var questionsArray = [
  {
    question: "What is JavaScript primarily used for?",
    answers: [
      { text: "Styling web pages", correct: false },
      { text: "Adding interactivity to web pages", correct: true },
      { text: "Creating server-side applications", correct: false },
      { text: "Managing databases", correct: false },
    ],
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      { text: "var", correct: true },
      { text: "variable", correct: false },
      { text: "int", correct: false },
      { text: "vartype", correct: false },
    ],
  },
  {
    question: "What is the purpose of the if statement in JavaScript?",
    answers: [
      { text: "To define a function", correct: false },
      { text: "To loop through an array", correct: false },
      { text: "To execute code conditionally", correct: true },
      { text: "To declare a variable", correct: false },
    ],
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "/* */", correct: false },
      { text: "--", correct: false },
      { text: "%%", correct: false },
    ],
  },
  {
    question:
      "Which function is used to display a message in the console in JavaScript?",
    answers: [
      { text: "print()", correct: false },
      { text: "log()", correct: true },
      { text: "display()", correct: false },
      { text: "show()", correct: false },
    ],
  },
  {
    question: "How do you declare a function in JavaScript?",
    answers: [
      { text: "func myFunction()", correct: false },
      { text: "function:myFunction()", correct: false },
      { text: "function myFunction()", correct: true },
      { text: "declare function myFunction()", correct: false },
    ],
  },
  {
    question:
      "Which loop in JavaScript is used for iterating through an array?",
    answers: [
      { text: "for-in loop", correct: true },
      { text: "while loop", correct: false },
      { text: "do-while loop", correct: false },
      { text: "if-else loop", correct: false },
    ],
  },
  {
    question: "What does DOM stand for in JavaScript?",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Data Object Model", correct: false },
      { text: "Dynamic Object Manipulation", correct: false },
      { text: "Document Object Manipulation", correct: false },
    ],
  },
  {
    question: "Which operator is used for strict equality in JavaScript?",
    answers: [
      { text: "==", correct: false },
      { text: "===", correct: true },
      { text: "!=", correct: false },
      { text: "!===", correct: false },
    ],
  },
  {
    question:
      "How do you include an external JavaScript file in an HTML document?",
    answers: [
      { text: '<script src="script.js"></script>', correct: true },
      { text: '<javascript src="script.js"></javascript>', correct: false },
      { text: '<link href="script.js" rel="script">', correct: false },
      { text: '<js src="script.js"></js>', correct: false },
    ],
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(questionsArray);
questionsArray.forEach((question) => shuffleArray(question.answers));

function homeScreen() {
  startScreenEl.style.display = "block";
  highscoresEl.style.display = "none";
  countdownEl.textContent = "60";
}

function startGame() {
  startScreenEl.style.display = "none";
  startQuizEl.style.display = "block";
  currentQuestion = 0;
  score = 0;

  showQuestion();
  countdown();
}

function showQuestion() {
  resultEl.style.display = "none";

  if (currentQuestion < questionsArray.length) {
    var question = questionsArray[currentQuestion];
    document.getElementById("questionId").textContent = question.question;
    answerButtons.forEach((button, index) => {
      button.textContent = question.answers[index].text;
      button.dataset.correct = question.answers[index].correct;
    });
  } else {
    endgame("arrayend");
  }
}

function selectedAnswer(event) {
  var selectedButton = event.target;
  var CorrectAnswer = selectedButton.dataset.correct === "true";
  if (CorrectAnswer) {
    score++;

    console.log(score);
  }

  showResult(CorrectAnswer);
}

function showResult(CorrectAnswer) {
  if (CorrectAnswer) {
    result.textContent = "Correct!";
  } else {
    result.textContent = "Wrong!";
    timeLeft -= 10;
  }
  resultEl.style.display = "block";
  setTimeout(() => {
    result.textContent = "";
    currentQuestion++;
    showQuestion();
  }, 1000);
}

function endgame(reason) {
  if (reason === "timeup") {
    gameoverEl.textContent = "Time is up!";
  } else if (reason === "arrayend") {
    clearInterval(countdownInterval);
    gameoverEl.textContent = "All done!";
  }

  finalScoreScreenEl.style.display = "block";
  startQuizEl.style.display = "none";
  showScoreEl.textContent = score;
}

function saveHighscoreFunction() {
  var initials = document.getElementById("initialsInput").value;
  var entry = { score, initials };
  var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
  console.log(highScores);
  highScores.push(entry);
  highScores.sort((a, b) => b.score - a.score);
  console.log(highScores);

  localStorage.setItem("highscores", JSON.stringify(highScores));

  highscoreListFunction();
}

function clearHighScoreFunction() {
  localStorage.removeItem("highscores");
  highscoreListFunction();
}

function highscoreListFunction() {
  startScreenEl.style.display = "none";
  startQuizEl.style.display = "none";
  highscoresEl.style.display = "block";
  finalScoreScreenEl.style.display = "none";
  var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
  highScoresListEl.innerHTML = "";
  highScores.forEach((entry, index) => {
    var li = document.createElement("li");
    li.textContent = ` ${entry.initials} - ${entry.score}`;
    highScoresListEl.appendChild(li);
  });
}

function countdown() {
  timeLeft = 60;

  countdownInterval = setInterval(function () {
    if (timeLeft > 0) {
      countdownEl.textContent = timeLeft;
      timeLeft--;
    } else {
      countdownEl.textContent = "0";
      endgame("timeup");
      clearInterval(countdownInterval);
    }
  }, 1000);
  return countdownInterval;
}

startButton.addEventListener("click", startGame);
answerButtons.forEach((button) => {
  button.addEventListener("click", selectedAnswer);
});
submitButton.addEventListener("click", saveHighscoreFunction);
clearHighScoresButtonEl.addEventListener("click", clearHighScoreFunction);
goBackButtonEl.addEventListener("click", homeScreen);
