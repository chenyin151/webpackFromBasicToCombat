const loaderUtils = require('loader-utils');
module.exports = function(source) {
    const options = loaderUtils.getOptions(this);
    let result = source.replace('dell', options.name);
    return this.callback(null, result);
    // return source.replace('dell', options.name);
}