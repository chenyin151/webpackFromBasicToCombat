class CopyrightWebpackPlugin {
    // 插件和Loader本质上是不一样的，Loader是一个函数，而插件是一个类，这就解释了我们在
    // 使用插件的时候为什么要new，我在引用插件的时候传入options对象，则可以在constructor的options
    // 中获取到
    constructor(options) {
        // 当插件被实例化就会执行这里
        console.log('插件被使用了',options)
    }
    // compiler是webpack的实例，它存储了webpack的各种配置文件等一系列内容
    apply(compiler) {
        debugger;
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
            compilation.assets['copyright.txt'] = {
                source: function() {
                    return 'copyright by Dell Lee'
                },
                size: function() {
                    return 21;
                }
            }
            cb();
        })
    }
}
module.exports = CopyrightWebpackPlugin;