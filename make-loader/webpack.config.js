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
                    
                }, {
                    loader: path.resolve(__dirname, './loaders/replaceLoaderAsync'),
                    options: {
                        name: 'lee'
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