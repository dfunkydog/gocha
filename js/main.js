/*global $ */

$(document).ready(function() {
    $('section').on('click', function() {
        var opele = $(this).siblings().children();
        if ( opele.hasClass('anim') ) { opele.removeClass('anim'); }
        $(this).find('.section-meta, img, .descr').toggleClass('anim');
    });

    $('section').on('mouseleave', function() {
        var ele = $(this).find('.section-meta, img, .descr');
        if( ele.hasClass('anim') ) { ele.removeClass('anim'); }
    });
});