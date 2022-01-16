(function($){
	'use script';

	// WOW JS
	new WOW().init();

  	/*---slider activation---*/
    var $slider = $('.slider-area-full');
    if($slider.length > 0){
        $slider.owlCarousel({
            animateOut: 'fadeOut',
            loop: true,
            nav: false,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 1,
            dots:true,
        });
    }


	


}(jQuery));