var libPath = '../../lib/';

var requireConfig = {
    baseUrl: 'js/app/modules',

    shim: {
        'mousetrapMain' : {
            exports : 'Mousetrap'
        },
        'mousetrapBind' : {
            deps : ['mousetrapMain'],
            exports : 'Mousetrap'
        }
    },

    paths: {
        /**
         * Standard folder structure paths
         */
        'app' : '../app',
        'util' : '../util',
        'helper' : '../helpers',
        'lib' : libPath,
        'config' : '../config',

        /**
         * Lib file paths
         */
        'modernizer': libPath + 'modernizr-2.6.2.min',
        'jquery' : libPath + 'jquery-1.9.1.min',
        'mousetrapMain' : libPath + 'mousetrap-1.4.1',
        'mousetrapBind' : libPath + 'plugins/mousetrap-bind-dictionary',
        'lodash' : libPath + 'lodash-1.2.1'

    },
    waitSeconds: 15
}