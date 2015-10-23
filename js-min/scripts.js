/*global $ */

$(document).ready(function() {

/* debounce */
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

var toggleNav = debounce(function(){
     var scrollPosition = window.pageYOffset,
     offHeight =( ($('.about').outerHeight() )/2 ) + $('h2.site-description').outerHeight();
     if (position < scrollPosition){
          $('.title').slideUp();
       } else if ( (position > scrollPosition) && (scrollPosition > offHeight) ){
         $('.title').slideDown(100);
       } else {
         $('.title').slideUp(100);
       }
     position = scrollPosition;
},100);

window.addEventListener('scroll', toggleNav);
var position = 0;







    $('section').on('click', function() {
        var opele = $(this).siblings().children();
        if ( opele.hasClass('anim') ) { opele.removeClass('anim'); }
        $(this).find('.section-meta, img, .descr').toggleClass('anim');
    });

    $('section').on('mouseleave', function() {
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
