require.config(requireConfig);

// Start the main app logic.
require(['jquery', 'helloWorld/1', 'helloWorld/2'],
    function ($, hello, world) {
        console.log(hello + ' ' + world + '!');
    }
);