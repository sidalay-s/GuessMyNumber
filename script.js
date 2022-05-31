'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let won = false;

const displayText = function(element, text) {
    document.querySelector(element).textContent = text;
}

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    
    if (!won) {
        if (!guess) {
            displayText(".message", "No number!");
        }
        else if (guess === secretNumber) {
            displayText(".message", "Correct number!");
        }
        else if (guess !== secretNumber) {
            if (score > 1) {
                guess > secretNumber ? displayText(".message", "Too high!") : displayText(".message", "Too low!");
                --score;
                displayText(".score", score);
            }
            else {
                displayText(".message", "You have lost!");
                displayText(".score", 0);
            }
        }
    }

})