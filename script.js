//bring in score to your final score is
//store initials to memory
//set timer to also be a trigger to stop the quiz instead of just the number of questions
//adjust timer 10 seconds for a wrong answer
//get rid of gray bar
//set up highscores to be display:none initially and changed to block after event key on final score submit button
//change up position of correct answers and test
//set up random order of questions and random order of answers within the answers
//get actual javascript questions to add
//set up highscores screen
//set up clear highscores function






var startButton = document.getElementById("StartButton");
var startScreenEl = document.getElementById("startScreen");
var startQuizEl = document.getElementById("startQuiz");
var answerButtons = document.querySelectorAll(".answer-btn");
var result = document.querySelector(".results");
var resultEl = document.getElementById('startAnswerResults');
var countdownEl = document.getElementById("countdown");
var finalScoreScreenEl = document.getElementById("finalScore");
var submitButton = document.getElementById("submit-score");
var highscoresEl = document.getElementById('highscoresScreen');

var currentQuestion = 0;
var score = 0;

var questionsArray = [{
  question: "Question #1 will be listed here.",
  answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
      { text: "False", correct: false },
      { text: "False", correct: false },
  ],
},
{
  question: "Question #2 will be listed here.",
  answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
  ],
},
{
  question: "Question #3 will be listed here.",
  answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
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


function startGame() {

  startScreenEl.style.display = "none";
  startQuiz.style.display = "block";

    showQuestion();
    countdown();
}

function showQuestion() {
  // resultEl.style.display = "none";
  if (currentQuestion < questionsArray.length) {
      var question = questionsArray[currentQuestion];
      document.getElementById("questionId").textContent = question.question;
      answerButtons.forEach((button, index) => {
          button.textContent = question.answers[index].text;
          button.dataset.correct = question.answers[index].correct;
      });
  } else {
      endgame();
  }
}

function selectedAnswer(event) {
  var selectedButton = event.target;
  var CorrectAnswer = selectedButton.dataset.correct === "true";
  if (CorrectAnswer) {
      score++;
      resultEl.style.display = "block";
      console.log(score);
  }
  showResult(CorrectAnswer);
}

function showResult(CorrectAnswer) {
  if (CorrectAnswer) {
      results.textContent = "Correct!";
  } else {
      results.textContent = "Wrong!";
  }
  setTimeout(() => {
      results.textContent = "";
      currentQuestion++;
      showQuestion();
  }, 1000);
}

function endgame() {
finalScoreScreenEl.style.display = "block";
startQuiz.style.display = "none";


}

function highscoreList (){
highscoresEl.style.display = 'block';
finalScoreScreenEl.style.display = "none";

}

// function displayMessage(){

// }

function countdown() {
// Timer that counts down from 60
    var timeLeft = 5;
  
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

// consider an event listener for a wrong answer
// document.getElementById("wrongAnswer").addEventListener("click", function () {
  
//   timerValue -= 10;
//   updateTimer();
// });