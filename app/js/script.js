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

            $('#main-menu').removeClass('active-about');
            $(this).parent().parent().parent().parent().find('.menu-about-us').slideUp();
            $('#main-menu').removeClass('active-shop');
            $('#main-menu').css('background-color', '#fff');
            $(this).parent().parent().parent().parent().find('.shop').slideUp();
        } else {

            $('#main-menu').addClass('active-shop');
            $('#main-menu').removeClass('active-about');
            $('#main-menu').css('background-color', '#fff');
            $(this).parent().parent().parent().parent().find('.menu-about-us').slideUp();
            $(this).parent().parent().parent().parent().find('.shop').slideDown();
        }

    });

    $('#about-us-label').on('click', function () {

        if ($('#main-menu').hasClass('active-about')) {
            $('#main-menu').removeClass('active-shop');
            $(this).parent().parent().parent().parent().find('.shop').slideUp();
            $('#main-menu').removeClass('active-about');
            $('#main-menu').css('background-color', '#fff');
            $(this).parent().parent().parent().parent().find('.menu-about-us').slideUp();
        } else {

            $('#main-menu').addClass('active-about');
            $('#main-menu').removeClass('active-shop');
            $('#main-menu').css('background-color', '#fff');
            $(this).parent().parent().parent().parent().find('.shop').slideUp();
            $(this).parent().parent().parent().parent().find('.menu-about-us').slideDown();
        }

    });

    var cart = $('#cart'),
        cartWrap = $('.cart__wrap');


    $('#header__cart-label').click(function () {

        if (cart.hasClass('active-cart')) {
            cart.removeClass('active-cart');
            cart.css('transform', 'translateX(100%)');
            cartWrap.delay(100).animate({"opacity": '0'}, 100);
        } else if (!cart.hasClass('active-cart')) {
            cart.addClass('active-cart');
            cart.css('transform', 'translateX(0%)');
            cartWrap.delay(100).animate({"opacity": '1'}, 100);
        }

    });

    $('#cart__close').click(function () {
        cart.removeClass('active-cart');
        cart.css('transform', 'translateX(100%)');
        cartWrap.delay(100).animate({"opacity": '0'}, 100);
    });

    $('.shop__goods__item__name__like').on('click', function () {
        let likeEmpty = $(this).find('.like-empty');
        let likeFilled = $(this).find('.like-filled');
        if (likeEmpty.css('display') === 'block') {
            likeEmpty.delay("fast").fadeOut('fast');
            likeFilled.delay("fast").fadeIn('fast');
        } else {
            likeFilled.delay("fast").fadeOut('fast');
            likeEmpty.delay("fast").fadeIn('fast');
        }
    });

    let sortList = $('.sort__list');

    $('.shop__filter_btn').on('click', function () {
        let show = sortList.css('display');

        if (show === 'none') {
            sortList.fadeIn();
        } else {
            sortList.fadeOut();
        }
    })

});

window.onscroll = function () {
    fixMyMenu()
};

var header = $("#main-menu");
var shop = $("#shop");
var aboutUs = $("#menu-about-us");
var sticky = $(header).offset().top;

function fixMyMenu() {
    if (window.pageYOffset) {
        header.addClass("fix");
        header.css('background-color', '#fff');
    } else {
        header.removeClass("fix");
        header.css('background-color', 'transparent');
        aboutUs.removeClass('active-about');
        header.removeClass('active-shop');
        shop.slideUp();
        aboutUs.slideUp();
    }
}

