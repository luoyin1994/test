require.config({
    baseUrl: './js',
    paths  : {
        'a'     : 'a',
        'b'     : 'b',
        'c'     : 'c',
        'jQuery': 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min'
    }
});

require(['a', 'b', 'c', 'jQuery'], function(a, b, c, $ = jQuery) {
    console.log($, 'jQuery');
    console.log(123);
});
