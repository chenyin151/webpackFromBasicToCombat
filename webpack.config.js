const path = require('path');
module.exports = {
    mode: 'development', //设置环境，有development和production两个值，production是生产环境，代码会被压缩
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}