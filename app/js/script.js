$(document).ready(function () {

	$('.featured__slider').slick({
		dots: false,
		infinite: true,
		speed: 400,
		slidesToShow: 3,
		slidesToScroll: 1,
		swipeToSlide: true,
		arrows: true,
		prevArrow: '<div class="featured__slider-controls_prev"><i class="fas fa-chevron-left"></i></div>',
		nextArrow: '<div class="featured__slider-controls_next"><i class="fas fa-chevron-right"></i></div>'
	});

	$('.follow__slider').slick({
		dots: false,
		infinite: true,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 1,
		swipeToSlide: true,
		arrows: true,
		prevArrow: '<div class="follow__slider-controls_prev"><i class="fas fa-chevron-left"></i></div>',
		nextArrow: '<div class="follow__slider-controls_next"><i class="fas fa-chevron-right"></i></div>'
	});

});