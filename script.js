'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let won = false;

const messageText = function(message) {
    document.querySelector(".message").textContent = message;
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
            guess > secretNumber ? messageText("Too high!") : messageText("Too low!");
        }
    }
})