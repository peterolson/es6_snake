import Drawing from './drawing';
import {options, Game} from "./game";
import Score from "./score";

function contains(cells, cell) {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i][0] === cell[0] && cells[i][1] === cell[1]) {
            return true;
        }
    }
    return false;
}

export default class {
    constructor(x, y) {
        [this.x, this.y] = [x, y];
        [this.dx, this.dy] = [0, 0];
        this.segments = [[x, y]];
        this.newSegmentCount = 0;
        this.refreshFood();
    }
    turnRight() {
        [this.dx, this.dy] = [1, 0];
    }
    turnLeft() {
        [this.dx, this.dy] = [-1, 0];
    }
    turnDown() {
        [this.dx, this.dy] = [0, 1];
    }
    turnUp() {
        [this.dx, this.dy] = [0, -1];
    }
    move() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < 0 || this.x >= options.cols ||
            this.y < 0 || this.y >= options.rows) {
            Game.die();
            return;
        }
        let cell = [this.x, this.y];
        if (contains(this.segments, cell)) {
            Game.die();
            return;
        }
        this.segments.push(cell);
        Drawing.drawSegment(cell);
        if (contains(this.segments, this.foodLocation)) {
            this.refreshFood();
            Score.increment();
            this.newSegmentCount += options.segmentGrowth;
        }
        if (this.newSegmentCount === 0) {
            let last = this.segments.shift();
            Drawing.eraseCell(last);
        } else {
            this.newSegmentCount--;
        }
    }

    refreshFood() {
        let freeSpots = [];
        for (let x = 0; x < options.cols; x++) {
            for (let y = 0; y < options.rows; y++) {
                let cell = [x, y];
                if (!contains(this.segments, cell)) {
                    freeSpots.push(cell);
                }
            }
        }
        if (freeSpots.length === 0) {
            Game.win();
            return;
        }
        let index = Math.random() * freeSpots.length | 0;
        this.foodLocation = freeSpots[index];
        Drawing.drawFood(this.foodLocation);
    }
}