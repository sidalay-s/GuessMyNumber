'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let won = false;

const displayText = function(element, text) {
    document.querySelector(element).textContent = text;
}

const grabElement = function(element) {
    return document.querySelector(element);
}

grabElement(".check").addEventListener("click", function() {
    const guess = Number(grabElement(".guess").value);
    
    // if user has not won
    if (!won) {
        // empty input
        if (!guess) {
            displayText(".message", "No number!");
        }
        // correct input
        else if (guess === secretNumber) {
            won = true;
            displayText(".message", "Correct number!");
            displayText(".number", secretNumber);
            displayText(".title", "You Guessed It!");
            grabElement(".message").style.color = "#60b347";
            grabElement(".number").style.backgroundColor = "#60b347";
            grabElement(".number").style.width = "30rem";
            if (score > highscore) {
                highscore = score
                displayText(".highscore", score);
                grabElement(".highscore").style.color = "#60b347";
            }
        }
        // incorrect input
        else if (guess !== secretNumber) {
            if (score > 1) {
                guess > secretNumber ? displayText(".message", "Too high!") : displayText(".message", "Too low!");
                --score;
                displayText(".score", score);
            }
            else {
                displayText(".title", "The Number Was");
                displayText(".message", "You have lost!");
                displayText(".score", 0);
                displayText(".number", secretNumber);
                grabElement(".number").style.color = "#eee";
                grabElement(".message").style.color = "red";
                grabElement(".number").style.backgroundColor = "red";
            }
        }
    }
})

grabElement(".again").addEventListener("click", function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    won = false;
    score = 20;
    displayText(".message", "Start guessing...");
    displayText(".score", score);
    displayText(".number", "?");
    displayText(".title", "Guess My Number!");
    grabElement(".guess").value = "";
    grabElement(".number").style.backgroundColor = "#eee";
    grabElement(".number").style.color = "#222";
    grabElement(".number").style.width = "15rem";
    grabElement(".message").style.color = "#eee";
    grabElement(".highscore").style.color = "#eee";
})