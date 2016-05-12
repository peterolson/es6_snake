# ECMAScript 6 Snake game
Snake written in both ES5 and ES6. [Play it!](http://peterolson.github.io/es6_snake/ES6Snake.html)

# Setup

You can download the code for this project by doing a git pull or pressing the "Download ZIP" button.

The code for the ECMAScript 5 version is embeddded in the `ES5Snake.html` file. You can edit it directly.

The code for the ECMAScript 6 version is in the `src` folder, with each file corresponding to a module. `main.js` is the entry script.

To compile the ES6 code, first install all the tools needed by navigating to this project in your Node.js console and running

    npm install
    
To run the compiler, you can execute

    npm run build
    
This will automatically listen for any changes to the files in the `src` folder and rebuild when they are saved.

# Getting started

To get started, I suggest playing around with the options in the `src/options.js` file. You can make the game bigger or smaller, make the snake go faster or slower, change the colors, rate of growth, starting position, and starting direction.

# Contributing

If you find anything in the code that should be improved, feel free to submit an issue or a pull request.