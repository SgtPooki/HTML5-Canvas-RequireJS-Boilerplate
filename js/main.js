require.config(requireConfig);

// Start the main app logic.
require(['jquery', 'util/main', 'helloWorld/main', 'admin/main'],
    function ($, util, hello, admin) {
        //log('I\'m Broken...');
        admin.log('I\'m wasting both of our time!');
    }
);