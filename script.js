//store initials to memory
//set up highscores screen
//set up clear highscores function
//change up position of correct answers and test
//set up random order of questions and random order of answers within the answers
//get actual javascript questions to add


var startButton = document.getElementById("StartButton");
var startScreenEl = document.getElementById("startScreen");
var startQuizEl = document.getElementById("startQuiz");
var answerButtons = document.querySelectorAll(".answer-btn");
var result = document.querySelector(".answer-results");
var resultEl = document.getElementById('startAnswerResults');
var countdownEl = document.getElementById("countdown");
var finalScoreScreenEl = document.getElementById("finalScore");
var submitButton = document.getElementById("submit-score");
var highscoresEl = document.getElementById('highscoresScreen');
var showScoreEl = document.getElementById('score');
var goBackButtonEl = document.getElementById("goBack");
var gameoverEl = document.getElementById("gameover-msg");
var initialsEl = document.getElementById("initials");
var currentQuestion = 0;
var score = 0;
var timeLeft = 60;

var questionsArray = [{
  question: "4+4=",
  answers: [
      { text: "8", correct: true },
      { text: "1", correct: false },
      { text: "9", correct: false },
      { text: "7", correct: false },
  ],
},
{
  question: "5+4=",
  answers: [
      { text: "9", correct: true },
      { text: "10", correct: false },
      { text: "8", correct: false },
      { text: "7", correct: false },
  ],
},
{
  question: "11+4",
  answers: [
      { text: "15", correct: true },
      { text: "14", correct: false },
      { text: "13", correct: false },
      { text: "16", correct: false },
  ],
},
{
  question: "Question #4 will be listed here.",
  answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
  ],
},
{
  question: "Question #5 will be listed here.",
  answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
  ],
},
{
  question: "Question #6 will be listed here.",
  answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
  ],
},
{
  question: "Question #7 will be listed here.",
  answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
  ],
},
{
  question: "Question #8 will be listed here.",
  answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
  ],
},
{
  question: "Question #9 will be listed here.",
  answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
  ],
},
{
  question: "Question #10 will be listed here.",
  answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
  ],
},
];

function homeScreen() {
  startScreenEl.style.display = "block";
  highscoresEl.style.display = 'none';
}

function startGame() {

  startScreenEl.style.display = "none";
  startQuiz.style.display = "block";
  currentQuestion = 0;
  score = 0;

    showQuestion();
    countdown();
}

function showQuestion() {
  resultEl.style.display = 'none';
  
  if ((currentQuestion < questionsArray.length)) {
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
  gameoverEl.textContent = "All done!";
}

console.log (reason);
  
finalScoreScreenEl.style.display = "block";
startQuizEl.style.display = "none";
showScoreEl.textContent = score;


}

function highscoreList (){
highscoresEl.style.display = 'block';
finalScoreScreenEl.style.display = "none";
var initials = initialsEl.value;
console.log(initials);
///add local storage code


}

function countdown() {
// Timer that counts down from 60
    timeLeft = 60;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 0) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        countdownEl.textContent = timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        countdownEl.textContent = '0';
        endgame("timeup");
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        // displayMessage();
      }
    }, 1000);
  }
  
startButton.addEventListener("click", startGame);
answerButtons.forEach((button) => {
  button.addEventListener("click", selectedAnswer);
});
submitButton.addEventListener("click", highscoreList);
goBackButtonEl.addEventListener("click", homeScreen);
