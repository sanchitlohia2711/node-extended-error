'use strict';
var 
    util = require('util'),
    _    = require('lodash');

var extendedError = function (error_map, errorCode, options) {
  this.errorCode = errorCode;
  var mappedErrorProperties  = error_map[errorCode] || {};
   
  //Check type of mapped error properties
  if(typeof(mappedErrorProperties) !== 'object')
    throw new Error("Error map for Error Code " + errorCode+ " is not a object")
  
  //Replace variables in message. 
  //Variable in message should be like eg message = "Error in DB operation. Error is <<err>>"
  for (var mappedKey in mappedErrorProperties) {
    var value = mappedErrorProperties[mappedKey];
    if(typeof(value) === 'string'){
      _.keys(options || {}).forEach(function(key) {value = value.replace("<<" + key + ">>", options[key]);});
      mappedErrorProperties[mappedKey] = value
    }  
  }
 
  //Extend the properties of current error object
  _.extend(this, mappedErrorProperties)
   
  Error.captureStackTrace(this, extendedError);
};

util.inherits(extendedError, Error);

module.exports = extendedError;
