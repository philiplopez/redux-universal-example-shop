var path = require('path');

module.exports = {
    context: path.resolve(__dirname, '..'),
    entry: "./src/ui-web/clientApp.js",
    output: {
        path: "./dist",
        filename: "clientApp.bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel' // 'babel-loader' is also a legal name to reference
            }
        ]
    }
};