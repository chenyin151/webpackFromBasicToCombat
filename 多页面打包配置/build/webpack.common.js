const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');
const webpack = require('webpack');
const addAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const fs = require("fs");
const makePlugins = (configs) => {
    const plugins = [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        })
    ];
    console.log('111' + configs.entry)
    Object.keys(configs.entry).forEach(item => {
        plugins.push(
            new htmlWebpackPlugin({
                template: 'src/index.html',
                filename: `${item}.html`,
                chunks: ['runtime', 'vendor', item]
            })
        )
    });
    const files = fs.readdirSync(path.resolve(__dirname, "../dll"));
    files.forEach(file => {
        if (/.*\.dll.js/.test(file)) {
            plugins.push(new addAssetHtmlWebpackPlugin({
                filepath: path.resolve(__dirname, '../dll', file)
            }))
        }
        if (/.*\.manifest.json/.test(file)) {
            plugins.push(new webpack.DllReferencePlugin({
                manifest: path.resolve(__dirname, '../dll', file)
            }))
        }
    })
    return plugins;
}


const commonConfig= {
    // entry: {
    //     'main1': './src/index.js'
    // },
    // entry: './src/index.js',//打包默认生成的名字为main.js
    entry: {
        index: './src/index.js',
        list: './src/list.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        mainFiles: ["index", "child"],
    },
    module: {
        rules: [{
            test: /\.jpg$/,
            use: {
                loader: 'url-loader',
                // 若我们用原来的名称则用这种方式，【ext]就是文件的后缀
                options: {
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/', //把图片打包的指定的目录下
                    limit: 1024
                }
            }
        },
        {
            test: /\.(eot|ttf|svg|woff|woff2)$/,
            use: {
                loader: 'file-loader'
            }
        },
        {
            test: /\.jsx?$/,
            use: [
                'babel-loader',
                // 'eslint-loader'
            ],
            exclude: /node_modules/
        },
    ]}, 
    output: {
        path: path.resolve(__dirname, '../dist'),
    },
    performance: false,
    optimization: {

        // 适配老版本，新版本可不加
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            chunks: 'all', //什么是chunk?在打包文件的时候，每一个js文件就是一个chunk
            // minSize: 300,
            // minChunks: 1, //若有两个地方引用就进行分包
            // maxAsyncRequests: 5, //打包前5个进行代码分割，超出5个就不会进行分割了
            // maxInitialRequests: 3, //页面入口文件若加载多个js文件的话，前3个做代码分割，若超出就不进行代码分割了
            // automaticNameDelimiter: '~', //名字之间的连接符
            // name: true, //让cacheGroups里面的filename有效
            // cacheGroups: {
            //     vendors: {
            //         test: /[\\/]node_modules[\\/]/,
            //         filename: 'lodash1.js',
            //         priority: -10
            //     },
            //     default: {
            //         priority: -20,
            //         reuseExistingChunk: true, //若引用的模块已经被打包过，就不需要再次打包，而是直接引用之前打包的文件就可以了，举个例子来说，有a.js和b.js，a.js中引用了b.js，然后b.js在外面又被引用了一下，b.js在被a.js引用的时候已
            //         // 经被打包的common.js中了，第二次被引用就不需要被打包了，直接引用直接打包的代码即可
            //         filename: 'common.js'
            //     }
            // }
        }
    }
}
commonConfig.plugins = makePlugins(commonConfig);
module.exports = (env) => {
    if (env && env.production) {
        return merge(commonConfig, prodConfig);
    } else {
        return merge(commonConfig, devConfig);
    }
}