const path = require("path");
const webpack = require("webpack")
module.exports = {
    entry: {
        vendors: ["react-dom", "lodash"],
        react: ["react"],
        // jquery: ["jquery"]
    },
    output: {
        filename: "[name].dll.js",
        path: path.resolve(__dirname, "../dll"),
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            name: "[name]",
            path: path.join(__dirname, "../dll/[name].manifest.json")
        })]
}