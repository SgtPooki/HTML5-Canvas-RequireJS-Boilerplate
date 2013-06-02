define(function (require) {
    var Mousetrap = require('mousetrapMain');

    Mousetrap.bind('up', function () {
        console.log('up off');
    }, 'keyup');

    Mousetrap.bind('up', function () {
        console.log('up on');
    }, 'keydown');

    Mousetrap.bind('left', function () {
        console.log('left');
    });

    Mousetrap.bind('down', function () {
        console.log('down');
    });
    Mousetrap.bind('right', function () {
        console.log('right');
    });
    Mousetrap.bind('w', function () {
        console.log('w');
    });
    Mousetrap.bind('a', function () {
        console.log('a');
    });
    Mousetrap.bind('s', function () {
        console.log('s');
    });
    Mousetrap.bind('d', function () {
        console.log('d');
    });

});