$(document).ready(function() {
	//show bio for every person
	$('.imageWrapper img, span, h2').click(function(e) {
		e.preventDefault();
	    var showElementId = this.id;
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