import Drawing from './drawing';
import Snake from "./snake";
import Score from "./score";

const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");

export const options = {
    width: 500,  // pixels
    height: 500, // pixels
    rows: 25,
    cols: 25,
    timeStep: 100, // milliseconds
    startX: 2,
    startY: 2,
    startDirection: "turnRight",
    snakeColor: "blue",
    foodColor: "red",
    segmentGrowth: 5 // number of segments added when snake eats food
};

canvas.width = options.width;
canvas.height = options.height;

let timeout;
function init() {
    Drawing.reset();
    let snake = new Snake(options.startX, options.startY);
    snake[options.startDirection]();
    Score.reset();

    function nextFrame() {
        clearTimeout(timeout);
        timeout = setTimeout(nextFrame, options.timeStep);
        snake.move();
    }
    nextFrame();

    window.onkeydown = (e) => {
        let keyMethods = {
            37: "turnLeft",
            38: "turnUp",
            39: "turnRight",
            40: "turnDown"
        };
        let method = keyMethods[e.keyCode];
        if (method) {
            snake[method]();
            nextFrame();
        }
    }
}

function reset() {
    clearTimeout(timeout);
    init();
}

function die() {
    alert(`You died. Your score was ${Score.value}.`)
    reset();
}

function win() {
    alert("Congratulations, you won!");
    reset();
}

export const Game = { die, win, init };