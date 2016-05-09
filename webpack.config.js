var path = require("path");
module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                
                // Compile files in /src directory
                include: [
                    path.resolve(__dirname, "src"),
                ],

                // Babel options
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015'],
                }
            },
        ]
    }
};