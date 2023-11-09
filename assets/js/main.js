// Main
jQuery.noConflict(); 
(function($) { 
	"use strict";
	
	// Circle click function
	$('#circles').on('click', '.shape', function(e) {
		e.preventDefault();
		
		// Get circle element and color
		var $this, element;
		$this = $(this);
		element = $this.parents('.contain');
		
		// Move Element to #squares row   
		$(element).appendTo('#squares');
	});
	
	// Square Click Function
	$('#squares').on('click', '.shape', function(e) {
		e.preventDefault();
		
		// Get circle element and color
		var $this, element;
		$this = $(this);
		element = $this.parents('.contain');
		
		// Move Element to #squares row   
		$(element).prependTo('#circles');

	});
})(jQuery);