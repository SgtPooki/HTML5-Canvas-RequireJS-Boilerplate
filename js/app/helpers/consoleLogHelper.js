//remaps the console.log function so you can call it using any other name such as "log" or something else..
define(function(require){

    //you should only use this function if you have also registered the console fix.
    require("util/consoleFix");

    return function(something){
        console.log(something);
    }
});