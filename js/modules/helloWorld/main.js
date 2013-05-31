define(function(require){
    var hello = require("helloWorld/1");
    var world = require("helloWorld/2");
    var log = require("helper/consoleLogHelper");

    log(hello + ' ' + world + '!');


});