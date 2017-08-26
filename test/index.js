/* global describe, it, beforeEach, before, afterEach, after, done */ 
"use strict"; 
 
var  
    should    = require('should'), 
    assert    = require('assert'), 
    request   = require('supertest'), 
 
    ferror    = require('../index'), 
    error_map = require('../sample_error_map'); 
 
describe('Error framework Test', function(){ 
    it('should get correct code and message', function(done){ 
        ferror.set_error_map(error_map); 
 
        var error = new ferror("ERROR_101"); 
        error.errorCode.should.equal("ERROR_101") 
        error.message.should.equal("Error has occured") 
        error.http_code.should.equal(400) 
        error.user_message.should.equal("Please try again later"); 
        done(); 
    }); 
 
    it('should get correct code and message with message replaced correctly', function(done){ 
        ferror.set_error_map(error_map); 
   
        var error = new ferror("DB_101", {err : "Connection Error" , err2 : "DB error"}); 
        error.msg.should.equal("Error in DB operation. Error is Connection Error") 
        error.master_code.should.equal(400); 
        error.user_message.should.equal("DB error") 
        done(); 
    }); 
}); 
