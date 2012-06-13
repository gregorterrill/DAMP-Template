
// This script manages all user interaction with the top blue navigation bar and its submenus

(function($){

// --------------------------------------------------------------------------------------------------------------------- add dropdown arrows
	$('.subMenu').each(function() {
		$(this).prev().append('<span class="expandicon">&nbsp;</span>');
	});

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
	$(".blueBar").bind('keydown',function(event) {
		if ( event.keyCode == key.esc ) {
			event.preventDefault();
			$(this).find('a:focus').blur();
			$('.subMenu:visible').hide();
		}
	});

	//TODO: when you start using the arrow keys, the top-level items don't stay active dark color - fix this

	//top level keypresses
	$(".blueBar > li > a").bind('keydown',function(event) {

		if ( event.keyCode == key.left ) {
			event.preventDefault();
			$(this).parent().prev().children('a').focus();

		} else if ( event.keyCode == key.right ) {
			event.preventDefault();
			$(this).parent().next().children('a').focus();

		} else if ( event.keyCode == key.down ) {
			event.preventDefault();
			if ($(this).next().hasClass('subMenu')) {
				$(this).next().find('a:first').focus();
			}
		}
	});

	//submenu keypresses
	$(".subMenu a").bind('keydown',function(event) {

		if ( event.keyCode == key.left ) {
			event.preventDefault();
			$(this).parents('.subMenu').parent().prev().children('a').focus();

		} else if ( event.keyCode == key.right ) {
			event.preventDefault();
			$(this).parents('.subMenu').parent().next().children('a').focus();

		} else if ( event.keyCode == key.up ) {
			event.preventDefault();

			//are we going to a top-level or prev submenu item?
			if ($(this).parent().prev().length == 0) {
				$(this).parents('.subMenu').prev().focus();
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
			$(this).siblings().removeClass('active').children('.subMenu').hide();
			$(this).addClass('active');
			// slide or show submenu depending on the media breakpoint
			($(window).width() <= 620) ? $('.active .subMenu').slideDown() : $('.active .subMenu').show();
		});

		// mouse out of list item
		$('.blueBar > li').on('mouseleave', function() {
			$(this).removeClass('active').children('.subMenu').hide();
		});

		// tab out of last item in submenu
		$('.subMenu').each(function() {
			$(this).children('li:last').keypress(function(event) {
				if (event.keyCode == key.tab) {
					$(this).parent('.subMenu').hide();
				}
			});
		});

		// tab out of a top level item with no submenu
		$('.blueBar').on('focusout', function() {
			$('.blueBar > li').removeClass('active');
		});

		// if you're tabbed into a submenu and click somewhere else on the screen, hide it
		$("html:not(.blueBar)").on('click', function() {
			$('.subMenu:visible').hide();
			$('.active').removeClass('active');
		});

	} else {
// --------------------------------------------------------------------------------------------------------------------- touch events
		alert("You're on a touch device");

		// tap item to open
		$('.blueBar > li').on('click', function(e) {
			
			// on first tap, open the menu. on second tap, follow the top-level link
			if (!$(this).hasClass('active')) {
				e.preventDefault();
				$(this).addClass('active').children('.subMenu').show();
			}
		});

		// TODO: if you're in a submenu and click somewhere else on the screen, hide it
		//$('html:not(.active)').on('click', function() {
		//	$('.subMenu:visible').hide();
		//});
	}

})(jQuery);