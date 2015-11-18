var path = require('path');

module.exports = {
    context: path.resolve(__dirname, '..'),
    entry: "./src/ui-web/clientApp.js",
    output: {
        path: "./dist",
        filename: "clientApp.bundle.js"
    }
};