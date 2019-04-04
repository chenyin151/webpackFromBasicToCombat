const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
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
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css'
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true, //Service Worker 被激活后使其立即获得页面控制权
            skipWaiting: true //强制等待中的 Service Worker 被激活
        })
    ]
}
module.exports = prodConfig;