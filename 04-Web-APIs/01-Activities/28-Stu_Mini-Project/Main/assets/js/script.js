//javascript code goes here
var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");
var win = 0;
var lose = 0;
var guessesRemaining = 10;
var timer = document.querySelector(".large-font timer-count");
var words = {
    0 : "arrays",
    1 : "JavaScript",
    2 : "objects",
    3 : "modals",
    4 : "JSON",
}

// console.log(words[0][2]);

var wordSelector = Math.floor(Math.random() * 5 + 1);
console.log(wordSelector);

// eventListener for starting the game
    // define buttons used in game (this one is start)

startButton.addEventListener("click", function() {
    // create timer start
    
});

// object/array blanks matching the letters
    // JavaScript, arrays, objects, modals, JSON

// setInterval for the timer

// when user presses letter key, capture as key event and match to word (if then)

// html changes when correctly guess letter .innerHTML

// function for win - guess all letters before timer runs out; include button when user wins
    // call function to reset-win includes new word out of index; timer resets

// function for loss - lose game if not all letters for guessed before timer ends; include button when user loses
    // call function to reset-loss includes new word out of index; timer resets

// display wins and losses on the screen; getItem or setItem; define local variables