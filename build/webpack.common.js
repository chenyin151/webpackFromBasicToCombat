const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    // entry: {
    //     'main1': './src/index.js'
    // },
    // entry: './src/index.js',//打包默认生成的名字为main.js
    entry: {
        main: './src/index.js'
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
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        }]
    }, 
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 300,
            minChunks: 1, //若有两个地方引用就进行分包
            maxAsyncRequests: 5, //打包前5个进行代码分割，超出5个就不会进行分割了
            maxInitialRequests: 3, //页面入口文件若加载多个js文件的话，前3个做代码分割，若超出就不进行代码分割了
            automaticNameDelimiter: '~', //名字之间的连接符
            name: true, //让cacheGroups里面的filename有效
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    filename: 'lodash',
                    priority: -10
                },
                default: {
                    priority: -20,
                    reuseExistingChunk: true, //若引用的模块已经被打包过，就不需要再次打包，而是直接引用之前打包的文件就可以了，举个例子来说，有a.js和b.js，a.js中引用了b.js，然后b.js在外面又被引用了一下，b.js在被a.js引用的时候已
                    // 经被打包的common.js中了，第二次被引用就不需要被打包了，直接引用直接打包的代码即可
                    filename: 'common.js'
                }

            }
        }
    },
    plugins: [
        // htmlWebpackPlugin会在打包结束后，自动生成一个HTML文件，并把打包生成的js自动引入到这个HTML文件中
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            reject: 'body',
            // chunks: ['main1']
        }),
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        }),
    ]
}