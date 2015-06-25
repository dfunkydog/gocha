/*global $, jQuery, TweenMax, Power1 */

$(document).ready(function() {
    $('section').on('click', function() {
        var opele = $(this).siblings().children();
        if ( opele.hasClass('anim') ) { opele.removeClass('anim'); }
        $(this).find('.section-meta, img, .descr').toggleClass('anim');
    });

    $('section').hover(function() {
        //
    }, function() {
        var ele = $(this).find('.section-meta, img, .descr');
        if( ele.hasClass('anim') ) { ele.removeClass('anim'); }
    });
});;// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
