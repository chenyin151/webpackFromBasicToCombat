const loaderUtils = require('loader-utils');
module.exports = function(source) {
    const options = loaderUtils.getOptions(this);
    const callback = this.async();
    setTimeout(() => {
        const result = source.replace('dell', options.name);
        callback(null, result);
    }, 1000)
    
    // return source.replace('dell', options.name);
}