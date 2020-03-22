$(document).ready(function() {
  $(".testimonial-carousel").slick({	
	infinite: !0,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
    autoplaySpeed: 2000,
	dots:true,
	fade:true,
	cssEase: 'linear',
	prevArrow: $(".testimonial-carousel-controls .prev"),
	nextArrow: $(".testimonial-carousel-controls .next"),
	responsive: [{
	  breakpoint: 1200,
	  settings: {
	    slidesToShow: 3
	  }
	}, {
	  breakpoint: 992,
	  settings: {
	    slidesToShow: 2
	  }
	}, {
	  breakpoint: 600,
	  settings: {
	    slidesToShow: 1
	  }
	}]
  });
});



