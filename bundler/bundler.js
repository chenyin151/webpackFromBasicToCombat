const fs = require('fs');
const parser = require('@babel/parser');
const path = require('path');
const babel = require('@babel/core');
const traverse = require('@babel/traverse').default; //默认是ESModule,若想使用export default语法则必须.default
const moduleAnalyser = (filename) => {
    const content = fs.readFileSync(filename, 'utf-8');
    const dependencies = {};
    const ast = parser.parse(content, {
        sourceType: 'module'
    });
    // 这里对抽象语法树进行遍历,然后我们需要找出类型为ImportDeclaration这样的元素
    traverse(ast, {
        ImportDeclaration( { node }) {
            // 只要抽象语法树包含这样的引入的函数语句的时候就执行这条语句,参数是有这条语句的节点,
            // 我们创建一个数组，把这些依赖的文件名存入就行了
            // dependencies.push(node.source.value);
            const dirname = path.dirname(filename);
            const newFile = './' + path.join(dirname, node.source.value);
            dependencies[node.source.value] = newFile;
        }
    })
    // 这个api可以把抽象语法树转换成浏览器可识别的代码,这个code就是这个文件的源代码，它可以被浏览器识别
    const { code } = babel.transformFromAst(ast, null, {
        presets: ['@babel/preset-env']
    })
    // console.log(filename, dependencies)
    return {
        filename,
        dependencies,
        code
    }
}
    // const dependencies = [];

const makeDependenciesGraph = (entry) => {
    
    const entryModule = moduleAnalyser(entry);
    // console.log('hello')
    const graphArray = [entryModule];
    for (let i = 0; i < graphArray.length;i++){
        const item = graphArray[i];
        const { dependencies } = item;
        // console.log('deeee', dependencies);
        if (dependencies) {
            for (let j in dependencies) {
                graphArray.push(moduleAnalyser(dependencies[j]));
            }
        }
    }
    const graph = {};
    graphArray.forEach(item => {
        graph[item.filename] = {
            dependencies: item.dependencies,
            code: item.code
        }
    })
    console.log('graph', graph)
    return graph;
}
const generateCode = (entry) => {
    const graph = JSON.stringify(makeDependenciesGraph(entry));
    debugger;
    console.log('graph', graph['./src/index.js'])
    return `
        (function(graph) {
            function require(module){
                function localRequire(relativePath) {
                    return require(graph[module].dependencies[relativePath])
                }
                var exports = {};
                (function(require,exports,code){
                    eval(code)
                })(localRequire, exports, graph[module].code);
                return exports;
            };
            require('${entry}')
        })(${graph});
    `
}
// moduleAnalyser('./src/index.js'); 
// const graphInfo = makeDependenciesGraph('./src/index.js');
// console.log(graphInfo)
const code = generateCode('./src/index.js');
console.log('code', code);