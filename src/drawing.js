
import {options, ctx} from "./game";

function draw(cell, color) {
    let width = options.width / options.cols,
        height = options.height / options.rows;
    let [x, y, w, h] = [cell[0] * width, cell[1] * height, width, height].map(Math.round);
    if (color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
    } else {
        ctx.clearRect(x, y, w, h);
    }
}

export default {
    drawSegment(cell) {
        draw(cell, options.snakeColor);
    },
    drawFood(cell) {
        draw(cell, options.foodColor);
    },
    eraseCell(cell) {
        draw(cell);
    },
    reset() {
        ctx.clearRect(0, 0, options.width, options.height);
    }
};