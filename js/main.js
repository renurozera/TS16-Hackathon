( function(d, w, $) {
	var documentObject = $(d),
	    windowObject = $(w),
	    windowWidth = windowObject.width(),
	    navigationOn = 0,
	    leftOfNavigationDrawer,
	    isDialogVisible = false,
	    functions = {
	    	init : function() {
	    		functions.calculateLeftOfNavigationDrawer();
	    		
	    	},
	    	calculateLeftOfNavigationDrawer : function() {
	    		if(windowWidth <= 320) {
	    			leftOfNavigationDrawer = "-61%";
	    		}
	    		else if(windowWidth <= 520) {
	    			leftOfNavigationDrawer = "-35.5%";
	    		}
	    		else if(windowWidth <= 700) {
	    			leftOfNavigationDrawer = "-36%";
	    		}
	    		else if(windowWidth <= 900) {
	    			leftOfNavigationDrawer = "-22.5%";
	    		}
	    		else {
	    			leftOfNavigationDrawer = "-18.5%";
	    		}
	    		
	    	},
	        toggleNavigationDrawer : function() {
	    		if(navigationOn == 0) {
	    			$("#navigationDrawer").animate({
	    				left : "0%"
	    			}, 400);
	    			navigationOn = 1;
	    			$("#navigationDrawerSupporter").css("display", "block");
	    			$("#navigationDrawerSupporter").animate({
	    				opacity : ".2"
	    			}, 400);
	    		}
	    		else {
	    			$("#navigationDrawer").animate({
	    				left : leftOfNavigationDrawer
	    			}, 400);
	    			navigationOn = 0;
	    			$("#navigationDrawerSupporter").animate({
	    				opacity : "0"
	    			}, 400, function() {
	    				$("#navigationDrawerSupporter").css("display", "none");
	    			});
	    		}
	    		
	    	}
	    };
	documentObject.on('ready', function() {
		functions.init();
    	$('a').click(function(){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top - 120
            }, 500);
            return false;
        }); 
        $("#hamburger").click(function() {
        	functions.toggleNavigationDrawer();
        });
        $("#navigationDrawerSupporter").click(function() {
        	if(navigationOn == 1) {
        		functions.toggleNavigationDrawer();
        	}
        });
        $("#planTravel").click(function() {
        	console.log("plan a travel");
            if (person.name != "") {
            	w.location = "calendar/";
            }
            else {
            	alert("Please login");
            }
        });
	});
} (document, window, jQuery));