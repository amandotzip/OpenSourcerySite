
// $(document).ready(function () {
// 	/* Copyright 2013-2019 Blackrock Digital LLC. Released under MIT License */
// 	// Show the navbar when the page is scrolled up
   	var MQL = 992;

	//primary navigation slide-in effect
	if ($(window).width() > MQL) {
		var headerHeight = $('#mainNav').height();
		// Account for padding
		headerHeight += Number.parseInt($('#mainNav').css('padding-top')) +
										Number.parseInt($('#mainNav').css('padding-bottom'))
	  $(window).on('scroll', {
		  previousTop: 0
		},
		function() {
		  var currentTop = $(window).scrollTop();
		  //check if user is scrolling up
		  if (currentTop < this.previousTop) {
			//if scrolling up...
			if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
			  $('#mainNav').addClass('is-visible');
			} else {
			  $('#mainNav').removeClass('is-visible is-fixed');
			}
		  } else if (currentTop > this.previousTop) {
			//if scrolling down...
			$('#mainNav').removeClass('is-visible');
			if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
		  }
		  this.previousTop = currentTop;
		});
	}
})
