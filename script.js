'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let won = false;

const messageText = function(text) {
    document.querySelector(".message").textContent = text;
} 
const scoreText = function(text) {
    document.querySelector(".score").textContent = text;
}

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    
    if (!won) {
        if (!guess) {
            messageText("No number!");
        }
        else if (guess === secretNumber) {
            messageText("Correct number!");
        }
        else if (guess !== secretNumber) {
            if (score > 1) {
                guess > secretNumber ? messageText("Too high!") : messageText("Too low!");
                --score;
                document.querySelector(".score").textContent = score;
            }
            else {
                messageText("You have lost!");
                document.querySelector(".score").textContent = 0;
            }
        }
    }

})