const path = require('path');
module.exports = {
    mode: "development",
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: path.resolve(__dirname, './loaders/replaceLoader'),
                    options: {
                        name: 'lee111'
                    }
                }]
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}