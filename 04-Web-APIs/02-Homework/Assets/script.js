// Code will build the welcome message this section will build the variables
// var timerCount = 
var timerEl = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var win = document.querySelector(".score");
// var isWin = false;
var timerCount = 60;
var index = 0;


function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.innerText = timerCount;
    //   if (timerCount >= 0) {
    //     // Clears interval
    //     clearInterval(timer);
    //     return
    //   }

      if (timerCount === 0) {
          clearInterval(timer);
      }
    }, 1000);
  }

//   function loseGame() {
      
//   }

// hide start button, then show questions and available answer choices
  startButton.addEventListener("click", function() {
      startTimer()
  });

// as user selects answer, hide question/answer, show next question/answer; keeping score with each selection
// function that shows first question + answer choices; index of questions
// click event to record user's answers
// grab answer, check to see if it's correct, if yes, alert via html banner and move on, if not, subtract time, alert via html banner, and move on
// call next function with second question;
// two total functions; need to figure out how to call multiple times without for loop
// <button class="choice" id="A" onclick="checkAnswer('A')"></button>

//   function resetQuiz() {
//     // Resets win and loss counts
//     winCounter = 0;
//     loseCounter = 0;
//     // Renders win and loss counts and sets them into client storage
//     setWins()
//     setLosses()
//   }

//   resetButton.addEventListener("click", resetQuiz);

// append the intro text to the page

// create function that appends text to the page

// create a function that starts the quiz

// create a function that runs the timer

// create a function that records the score

//
