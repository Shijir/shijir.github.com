requirejs.config({
    baseUrl: 'js',
    paths: {
        domReady: '../libs/domReady/domReady.min',
        jquery: '../libs/jquery/dist/jquery.min',
        bootstrap: '../libs/bootstrap/dist/js/bootstrap.min',
        tweenmax: '../libs/greensock/src/minified/TweenMax.min',
        scrollto: '../libs/greensock/src/minified/plugins/ScrollToPlugin.min',
        typeit: '../libs/typeit/dist/typeit.min',
        isinviewport: '../libs/isInViewport/lib/isInViewport.min',
        skrollr: '../libs/skrollr/dist/skrollr.min'
    },
    shim: {
        'scrollto': ['tweenmax', 'jquery'],
        'tweenmax': {
            deps: ['jquery'],
            exports: 'TweenMax'
        },
        'typeit': ['jquery'],
        'skrollr': ['jquery'],
        'jquery': ['domReady']
    }
});


requirejs(['production.min'], function(script) {
    script.initialize();
});