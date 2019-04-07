const loaderUtils = require('loader-utils');
module.exports = function(source) {
    const options = loaderUtils.getOptions(this);
    return source.replace('lee', 'world');
}