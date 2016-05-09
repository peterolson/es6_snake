
let scoreSpan = document.getElementById("score"),
    highScoreSpan = document.getElementById("highScore"),
    score = 0,
    highScore = +localStorage.getItem("highScore");

function updateHighScore() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
    }
    highScoreSpan.innerText = highScore;
}


export default {
    increment() {
        score++;
        scoreSpan.innerText = score;
        updateHighScore();
    },
    reset() {
        score = 0;
        scoreSpan.innerText = score;
        updateHighScore();
    },
    get value() {
        return score;
    }
};
