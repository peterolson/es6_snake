import Drawing from './drawing';
import Snake from "./snake";
import Score from "./score";
import options from "./options"

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

export default { die, win, init };