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


	$('#shop-label').on('click', function () {

		if ($('#main-menu').hasClass('active-shop')) {
			$('#main-menu').removeClass('active');
			$('#main-menu').removeClass('active-shop');
			$('#main-menu').css('background-color', '#fff');
			$(this).parent().parent().parent().parent().find('.shop').slideUp();
		} else {
			$('#main-menu').addClass('active');
			$('#main-menu').addClass('active-shop');
			$('#main-menu').css('background-color', '#fff');
			$(this).parent().parent().parent().parent().find('.shop').slideDown();
		}

	});

});

window.onscroll = function () { fixMyMenu() };

var header = $("#main-menu");
var shop = $("#shop");
var sticky = $(header).offset().top;

function fixMyMenu() {
	if (window.pageYOffset) {
		header.addClass("fix");
		header.css('background-color', '#fff');
	} else {
		header.removeClass("fix");
		header.css('background-color', 'transparent');
		header.removeClass('active');
		header.removeClass('active-shop');
		shop.slideUp();
	}
}