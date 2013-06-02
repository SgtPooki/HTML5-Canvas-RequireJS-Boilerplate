require.config(requireConfig);

// Start the main app logic.
require(
    ['jquery', 'lodash', 'util/consoleFix', 'helloWorld/hi', 'config/app.config'],
    function ($, _, util, hello, _unused)
    {
        var $window = $(window);
        var canvas = document.getElementById('canvas');

        canvas.width = $(window).width();
        canvas.height = $(window).height();

        var context = canvas.getContext('2d');


        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var radius = 70;

        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fillStyle = 'blue';
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = 'red';
        context.stroke();
    }
);