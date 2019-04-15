const path = require('path');
module.exports = {
    outputDir: 'dell',
    devServer: {
        contentBase: [path.resolve(__dirname, 'static')]
    }
}