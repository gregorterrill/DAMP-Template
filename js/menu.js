
// This script manages all user interaction with the top blue navigation bar and its sub-menus

(function($){

// --------------------------------------------------------------------------------------------------------------------- add dropdown arrows
	
	var addExpandIcons = function() {
		$('.sub-menu').each(function() {
			$(this).prev().append('<span class="expandicon">&nbsp;</span>');
		});
	};
	addExpandIcons();
	
// --------------------------------------------------------------------------------------------------------------------- keyboard events

	//key index
	var key = {
		left: 37,
		right: 39,
		up: 38,
		down: 40,
		esc: 27,
		tab: 9
	};

	//escape
	$(".blueBar").on('keydown',function(event) {
		if ( event.keyCode == key.esc ) {
			event.preventDefault();
			$(this).find('a:focus').blur();
			$('.sub-menu:visible').hide();
		}
	});

	//top level keypresses
	$(".blueBar > li > a").on('keydown',function(event) {

		if ( event.keyCode == key.left ) {
			event.preventDefault();
			$(this).parent().prev().children('a').focus();

		} else if ( event.keyCode == key.right ) {
			event.preventDefault();
			$(this).parent().next().children('a').focus();

		} else if ( event.keyCode == key.down ) {
			event.preventDefault();
			if ($(this).next().hasClass('sub-menu')) {
				$(this).next().find('a:first').focus();
			}
		}
	});

	//sub-menu keypresses
	$(".sub-menu a").on('keydown',function(event) {

		if ( event.keyCode == key.left ) {
			event.preventDefault();
			$(this).parents('.sub-menu').parent().prev().children('a').focus();

		} else if ( event.keyCode == key.right ) {
			event.preventDefault();
			$(this).parents('.sub-menu').parent().next().children('a').focus();

		} else if ( event.keyCode == key.up ) {
			event.preventDefault();

			//are we going to a top-level or prev sub-menu item?
			if ($(this).parent().prev().length == 0) {
				$(this).parents('.sub-menu').prev().focus();
			} else {
				$(this).parent().prev().children('a').focus();
			}

		} else if ( event.keyCode == key.down ) {
			event.preventDefault();
			$(this).parent().next().children('a').focus();
		}
	});

// --------------------------------------------------------------------------------------------------------------------- hover/tab events

	var hasTouch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
	
	if (!hasTouch) {

		// hover or tab onto list item
		$('.blueBar > li').on('mouseenter focusin', function() {

			// deactive and hide other menus and make this one active
			$(this).siblings().removeClass('active').children('.sub-menu').hide();
			$(this).addClass('active');
			// slide or show sub-menu depending on the media breakpoint
			($(window).width() <= 620) ? $('.active .sub-menu').slideDown() : $('.active .sub-menu').show();
		});

		// mouse out of list item
		$('.blueBar > li').on('mouseleave', function() {
			$(this).removeClass('active').children('.sub-menu').hide();
		});

		// tab out of last item in sub-menu
		$('.sub-menu').each(function() {
			$(this).children('li:last').keypress(function(event) {
				if (event.keyCode == key.tab) {
					$(this).parent('.sub-menu').hide();
				}
			});
		});

		// tab out of last top level item with no sub-menu
		$('#mainContent').on('focusin', function() {
			$('.blueBar > li').removeClass('active');
		});

		// if you're tabbed into a sub-menu and click somewhere else on the screen, hide it
		$("html:not(.blueBar)").on('click', function() {
			$('.sub-menu:visible').hide();
			$('.active').removeClass('active');
		});

	} else {
// --------------------------------------------------------------------------------------------------------------------- touch events
		// if you're in a sub-menu and click somewhere else on the screen, hide it
		// note html:not doesn't seem to work on touch devices
		$('#topBlackBar,#siteHeader,#mainContent,footer').on('click', function() {
			$('.sub-menu:visible').slideUp(100);
			$('.active').removeClass('active');
		});

		// tap item to open
		$('.blueBar > li').on('click', function(e) {	
			$('.sub-menu:visible').slideUp(100);	
			$(this).siblings().removeClass('active');	
			// on first tap, just open the menu instead of following the link
			if (!$(this).hasClass('active')) {
				e.preventDefault();
				$(this).addClass('active').children('.sub-menu').slideDown(100);
			//if you clicked the expand icon (a span), close the menu instead of following the link
			} else if (e.target.nodeName == 'SPAN') {
				e.preventDefault();
				$('.sub-menu:visible').slideUp(100);
				$('.active').removeClass('active');
			}
		});
	}

// --------------------------------------------------------------------------------------------------------------------- side nav for subpages
	$('#siteHeader').on('click', function(e) {
		$('#sideNav').toggleClass('menuOpen');
	});

	//toggle menu level
	$('.navLevelToggle').on('click',function(e) {
		$('.expandicon').hide();
		var list = $(this).parents('ul');
		list.animate({
      		marginRight: (parseInt(list.css('margin-right'),10) == 0) ? list.outerWidth() : 0
        }, function() {
            list.hide().siblings().eq(0).css('margin-right','0').fadeIn();
            addExpandIcons();
		});
	});

	//populate sideNav from subNav
	$('ul.subNav').clone().removeClass('blueBar').prependTo('#sideNav').find('ul').removeClass('sub-menu');

})(jQuery);