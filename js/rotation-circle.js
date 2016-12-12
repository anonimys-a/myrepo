$(document).ready(function() {
	var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
	radius = '16em', //distance from center
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
	});
});