$(document).ready(function () {

	var threshold = 200;	// Pixels before topbar	color
	var inactiveClass = 'bg-transparent';	// Active navbar class

	var navbar = $('nav');

	$(document).on('scroll', function(event) {
		var scroll = $('html').scrollTop();

    	if (scroll >= threshold) {
    		navbar.removeClass(inactiveClass);
    	} else {
    		navbar.addClass(inactiveClass);
    	}
	});
});
