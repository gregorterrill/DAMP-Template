
// This script manages content stuff

(function($){

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

    $(window).resize(function() {  
        resizeDoubleCharts();
        resizeDoubleCols();
    });

    // MOVE THIS LATER
    function DetectIE7() {
       uagent = navigator.userAgent.toLowerCase();
       if (uagent.search("msie 7") > -1)
           return true;
        else
           return false;
    }
    // add external link icons for IE7
    if ( DetectIE7() ) {
        $("#mainContent a[href^='http://www']").each(function() {    
            $(this).after("<span class='extLink'>&nbsp;</span>");
        });
    }

})(jQuery);