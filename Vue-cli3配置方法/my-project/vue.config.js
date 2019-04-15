module.exports = {
    outputDir: 'dell',
    pages: {
        index: {
            entry: 'src/index/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Index Page',
            chunks: ['chunk-vendors','chunk-common', 'index']
        },
        list: {
            entry: 'src/index/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Index Page',
            chunks: ['chunk-vendors','chunk-common', 'index']
        }
        
    }
}