'use strict';

var async = require('async');

module.exports = function() {
    this.pipes = [];

    this.pipe = function(data) {
        if (!(typeof data === 'function')) {
            return this;
        }

        this.pipes.push(data);

        return this;
    }.bind(this);

    this.execute = function(callback) {
        var data = {};

        async.waterfall(
            this.pipes,
            function(error, result){
                data = result;
                
                if (error) {
                    data = error;
                }

                callback(error, result);
            }
        );

        this.pipes = [];

        return data;
    }
}
