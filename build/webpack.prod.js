const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

prodConfig = {
    // devtool: 'source-map',
    devtool: 'cheap-module-source-map',
    mode: 'production', //设置环境，有development和production两个值，production是生产环境，代码会被压缩
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
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
                MiniCssExtractPlugin.loader,
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
        },]
    },
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js'
    },
    optimization: {
        minimizer: [new OptimizeCssAssetsWebpackPlugin({})]
    }
}
module.exports = prodConfig;