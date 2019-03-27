const commonConfig = require('./webpack.common');
const merge = require('webpack-merge');

prodConfig = {
    // devtool: 'source-map',
    devtool: 'cheap-module-source-map',
    mode: 'production', //设置环境，有development和production两个值，production是生产环境，代码会被压缩
}
module.exports = merge(commonConfig, prodConfig);