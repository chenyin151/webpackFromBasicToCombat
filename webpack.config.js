const path = require('path');
module.exports = {
    entry: './src/index.ts',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './TypeScript/dist')
    }
}