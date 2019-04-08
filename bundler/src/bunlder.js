const fs = require('fs');
const moduleAnalyser = (filename) => {
    const content = fs.readFileSync(filename, 'utf-8');
    console.log('111',content);
}
moduleAnalyser('./src/index.js');