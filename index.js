var 
  extendedError = require('./src/extended_error');

var ferror = function(error_code, options){
    return new extendedError(ferror.error_map, error_code, options);
}

ferror.error_map = {};

ferror.set_error_map = function(error_map){
    if (typeof(error_map) !== 'object')
        throw new Error("Error map is not a object");

    this.error_map = error_map || {}
}

module.exports = ferror;