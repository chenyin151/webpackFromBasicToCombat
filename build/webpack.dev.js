const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const devConfig = {
    // devtool: 'source-map',
    devtool: 'cheap-module-eval-source-map',
    mode: 'development', //设置环境，有development和production两个值，production是生产环境，代码会被压缩
    
    devServer: {
        contentBase: './dist',
        port: 9000,
        open: true,
        hot: true, //开启hot module replacement这样的功能
        hotOnly: true
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            // modules: true //启用CSS模块功能
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js', //引入的文件的打包后的名称
    },
    optimization: {
        usedExports: true //那些js模块被引用再打包
    },
    plugins: [
        // htmlWebpackPlugin会在打包结束后，自动生成一个HTML文件，并把打包生成的js自动引入到这个HTML文件中
        new webpack.HotModuleReplacementPlugin()
    ]
}
module.exports = merge(commonConfig, devConfig);