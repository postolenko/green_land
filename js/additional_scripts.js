(function($){

	$(window).on("load",function(){

		$(".scroll").mCustomScrollbar();

	});

})(jQuery);

$(document).ready(function() {

	$(function(){
		$.stellar({
			horizontalScrolling: false,
			verticalOffset: 50
		});
	});

	if( $(".testimonila-slider").length > 0 ) {

		$(".testimonila-slider").not(".slick-initialized").slick({
				dots: true,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 10000,
				appendDots: $(".testimonilals-controls-append"),
				speed: 1200,
				slidesToShow: 3,
				slidesToScroll : 1,
				responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 2
			      }
			    },
			    {
			     breakpoint: 600,
			      settings: {
			        slidesToShow: 1
			      }
			    }
			  ]
			});

	}

	
});