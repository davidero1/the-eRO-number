"use strict";

let number = Math.trunc(Math.random()* 20 + 1); // remember trunc is used to avoid decimal numbers
// 1 is added to remove 0

const revealNum = document.querySelector(".number");

// variable for score
let score = 20;
let highscore = 0;

function displayMessage(content) {
    document.querySelector(".message").textContent = content;
}

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
       displayMessage("No input");
    } else if (guess === number) {

        revealNum.textContent = number;
        displayMessage("CORRECT!");
        document.querySelector(".hero").style.backgroundColor = "#28a745";

        // highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

    }   else if (guess !== number) {
        if (score > 1) {
            displayMessage(guess > number ? "Too high!" : "Too low");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("Game Over");
            document.querySelector(".score").textContent = 0;
        }
    }

    // console.log(guess, typeof guess); // will return as a string unless the number function is added
});

// the again button

document.querySelector(".again").addEventListener ("click", function () {
    score = 20;
    number = Math.trunc(Math.random() * 20 + 1);
    displayMessage("Start guessing...");
    document.querySelector(".guess").value = "";
    document.querySelector (".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#1d1d1d";
});