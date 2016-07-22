'use strict';

var Pipe   = require('../../../src/Edealer/Pipe');
var assert = require('chai').assert;

describe('Pipe', function () {
    describe('When piping', function () {
        it('should get Hello World', function (done) {
            var pipe   = new Pipe();
            var result = pipe
                .pipe(function(callback){
                    callback(null, "Hello");
                })
                .pipe(function(parameter, callback){
                    callback(null, parameter + " World");
                })
                .execute(function(error, result){
                    if (error) {
                        console.log(error);
                    }
                });

            assert.equal("Hello World", result);

            done();
        });
    });
});
