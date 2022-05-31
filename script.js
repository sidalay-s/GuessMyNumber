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

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    
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