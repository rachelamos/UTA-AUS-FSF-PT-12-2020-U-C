// Code will build the welcome message this section will build the variables
// var timerCount = 
var timerEl = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var win = document.querySelector(".score");
// var isWin = false;
var timerCount 


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


  startButton.addEventListener("click", function() {
      startTimer()
  });


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
