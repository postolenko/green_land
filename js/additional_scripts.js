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
				// responsive: [
			 //    {
			 //      breakpoint: 1024,
			 //      settings: {
			 //        slidesToShow: 2
			 //      }
			 //    },
			 //    {
			 //     breakpoint: 768,
			 //      settings: {
			 //        slidesToShow: 2
			 //      }
			 //    },
			 //    {
			 //     breakpoint: 700,
			 //      settings: {
			 //        slidesToShow: 3,
			 //        vertical: false
			 //      }
			 //    },
			 //    {
			 //     breakpoint: 532,
			 //      settings: {
			 //        slidesToShow: 2,
			 //        vertical: false
			 //      }
			 //    },
			 //    {
			 //      breakpoint: 350,
			 //      settings: {
			 //        slidesToShow: 1,
			 //        vertical: false
			 //      }
			 //    }
			 //  ]
			});

	}

	
});