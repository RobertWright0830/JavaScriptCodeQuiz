var startButton = document.getElementById("StartButton");
var countdownEl = document.getElementById("countdown");
// function startGame {

//     showQuestion();
//     startTimer();
// }

// function showQuestion {

// }

// function displayMessage(){

// }

function countdown() {
// Timer that counts down from 5
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
  
startButton.addEventListener("click", countdown);