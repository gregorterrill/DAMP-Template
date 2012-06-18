(function($){
	$.fn.backtotop = function(options){
		
		var this_ = this;

		var settings = $.extend({
			'position': 1000,
			'speed' : 500,
			'toTop' : 500
		}, options);

		// settings
		var position = settings['position'];
		var speed = settings['speed'];
		var toTop = settings['toTop'];

		$(window).scroll(function(){
			var scroll_pos = $(window).scrollTop();
			if(scroll_pos >= position){
				//show
				this_.fadeIn(speed);
			}else{
				//hide
				this_.fadeOut(speed);
			}
		});

		this_.click(function(){
			 $('html, body').animate({scrollTop:0},toTop);
		});
	}
})(jQuery);