
// This script manages content stuff

(function($){

    //for mobile, add back to top bar
    if ($(window).width() <= 620) {
        $('#backtotop').backtotop({
            'position': 26,
            'speed' : 0,
            'toTop':500
        });
    }

    function resizeDoubleCols() {
    	//resize all double columns with sep. headings
    	$('.doubleBox').each(function(){
    		
    		//equalize header heights
    		var columnOne = $(this).children('.leftCol').children('header').css("height", "auto").height();
        	var columnTwo = $(this).children('.rightCol').children('header').css("height", "auto").height();
        	var maxNumber = Math.max(columnOne, columnTwo);
        	$(this).children('.leftCol').children('header').css("height", maxNumber + "px");
        	$(this).children('.rightCol').children('header').css("height", maxNumber + "px");	
    	});
    }

    function resizeDoubleCharts() {
    	//resize all double column charts
    	$('.twoColChart').each(function(){
    		  
    		//equalize span heights
    		var columnOne = $(this).children('.leftChart').children('span').css("height", "auto").height();
        	var columnTwo = $(this).children('.rightChart').children('span').css("height", "auto").height();
        	var maxNumber = Math.max(columnOne, columnTwo);
        	$(this).children('.leftChart').children('span').css("height", maxNumber + "px");
        	$(this).children('.rightChart').children('span').css("height", maxNumber + "px");
        	
        	//we're assuming the images are the same height
        	
        	//equalize figcaption heights
        	columnOne = $(this).children('.leftChart').children('figcaption').css("height", "auto").height();
        	columnTwo = $(this).children('.rightChart').children('figcaption').css("height", "auto").height();
        	maxNumber = Math.max(columnOne, columnTwo);
        	$(this).children('.leftChart').children('figcaption').css("height", maxNumber + "px");
        	$(this).children('.rightChart').children('figcaption').css("height", maxNumber + "px");   	
    	});
    }

    //resize double charts on first load and then again whenever the window is resized
    resizeDoubleCharts();
    resizeDoubleCols();

    $(window).on("debouncedresize", function() { 
        resizeDoubleCharts();
        resizeDoubleCols();
    });

    // add multi-line external link icons for IE7
    if ( $('html').hasClass('ie7') ) {
        $("#mainContent a[href^='http://www']").each(function() {    
            $(this).after("<span class='extLink'>&nbsp;</span>");
        });
    }

})(jQuery);