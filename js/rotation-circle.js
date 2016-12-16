$(document).ready(function() {
	
	var radius = '17em';
	
	// run test on initial page load
    checkSize();
    
    // run test on resize of the window
    $(window).resize(checkSize);
    
    //Function to the css rule
    function checkSize(){
    	if (Modernizr.mq("screen and (min-width:992px)") && Modernizr.mq("screen and (max-width:1199px)")) {
            //Implement jQuery/JS to handle a larger screen (i.e. Laptops/Desktops). In my case adding/removing a class to show/hide elements
    		radius = '12em';
    		console.log(radius);
    		$('li#c1 img').attr("src", "images/girl100.jpg");
    		$('li#c2 img').attr("src", "images/girl100.jpg");
    		$('li#c3 img').attr("src", "images/girl100.jpg");
    		$('li#c4 img').attr("src", "images/girl100.jpg");
    		$('li#c5 img').attr("src", "images/girl100.jpg");
    		$('li#c6 img').attr("src", "images/girl100.jpg");
    		$('li#c7 img').attr("src", "images/girl100.jpg");
    		$('li#c8 img').attr("src", "images/girl100.jpg");
    		$('li#c9 img').attr("src", "images/girl100.jpg");
    		$('li#c10 img').attr("src", "images/girl100.jpg");
    		$('li#c11 img').attr("src", "images/girl150.jpg");
    		
    		$('li.main-member-in-circle').css({"margin-top":"-37px", "margin-left":"-22px"});
    		
        } else if (Modernizr.mq("screen and (min-width:1200px)")) {
        	radius = '18em';
        	console.log('creen and (min-width:1200px)' +  radius);
        	$('li#c1 img').attr("src", "images/girl150.jpg");
    		$('li#c2 img').attr("src", "images/girl150.jpg");
    		$('li#c3 img').attr("src", "images/girl150.jpg");
    		$('li#c4 img').attr("src", "images/girl150.jpg");
    		$('li#c5 img').attr("src", "images/girl150.jpg");
    		$('li#c6 img').attr("src", "images/girl150.jpg");
    		$('li#c7 img').attr("src", "images/girl150.jpg");
    		$('li#c8 img').attr("src", "images/girl150.jpg");
    		$('li#c9 img').attr("src", "images/girl150.jpg");
    		$('li#c10 img').attr("src", "images/girl150.jpg");
    		$('li#c11 img').attr("src", "images/girl150.jpg");
    		
    		$('li.main-member-in-circle').css({"margin-top":"-4px", "margin-left":"-1px"});
        }
    }
	
	var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
//	radius = '17em', //distance from center
	start = -90, //shift start from 0
	$elements = $('li.circle-list-item:not(:first-child)'),
	numberOfElements = (type === 1) ?  $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
	slice = 360 * type / numberOfElements;
	
	$elements.each(function(i) {
		var $self = $(this),
		    rotate = slice * i + start,
		    rotateReverse = rotate * -1;
		
		$self.css({
		    'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
		});
	});

	$('li.main-member-in-circle').click(function(e) {
		e.preventDefault();
	    var showElementId = this.id;
	    $(".team-member-biografy").html($("." + showElementId).html());
	});

	
	//show bio for every person
	$('li.circle-list-item').click(function(e) {
		e.preventDefault();
	    var showElementId = this.id;
	    $(".team-member-biografy").html($("." + showElementId).html());
	    //if we want to show text in modal dialog then this is the code for that
	    
	    $('#myModal').modal({
	        show: 'true'
	    }); 
	    //set the modal body 
	    $(".modal-body").text($("." + showElementId + ' p').text()); 
	    //set the modal header
	    $(".modal-header").text($("." + showElementId + ' h2').text()); 
	});
});