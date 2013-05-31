//This utility function
define(function(require){
    var FIX_CONSOLE = true;

    var utilityMain = {
        init: function(){
            if(FIX_CONSOLE) {require('util/consoleFix');}
        }
    }

    utilityMain.init();
});