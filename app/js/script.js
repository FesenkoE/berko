$(document).ready(function () {

    $('.viewed__recently__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dot: true,
        speed: 400,
        customPaging: 30,
        draggable: true,
        infinite: true,
        prevArrow: '<div class="featured__slider-controls_prev viewed__recently__left"><i class="fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="featured__slider-controls_next viewed__recently__right"><i class="fas fa-chevron-right"></i></div>'
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        dots: true
    });

    $('.featured__slider').slick({
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: true,
        prevArrow: '<div class="featured__slider-controls_prev"><i class="fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="featured__slider-controls_next"><i class="fas fa-chevron-right"></i></div>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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
        nextArrow: '<div class="follow__slider-controls_next"><i class="fas fa-chevron-right"></i></div>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('#shop-label').on('click', function () {

        if ($('#main-menu').hasClass('active-shop')) {

            $('#main-menu').removeClass('active-about');
            $(this).parent().parent().parent().parent().find('.menu-about-us').slideUp();
            $('#main-menu').removeClass('active-shop');
            $('#main-menu').css('background-color', '#fff');
            $(this).parent().parent().parent().parent().find('.menu-shop').slideUp();
        } else {

            $('#main-menu').addClass('active-shop');
            $('#main-menu').removeClass('active-about');
            $('#main-menu').css('background-color', '#fff');
            $(this).parent().parent().parent().parent().find('.menu-about-us').slideUp();
            $(this).parent().parent().parent().parent().find('.menu-shop').slideDown();
        }

    });

    $('#about-us-label').on('click', function () {

        if ($('#main-menu').hasClass('active-about')) {
            $('#main-menu').removeClass('active-shop');
            $(this).parent().parent().parent().parent().find('.menu-shop').slideUp();
            $('#main-menu').removeClass('active-about');
            $('#main-menu').css('background-color', '#fff');
            $(this).parent().parent().parent().parent().find('.menu-about-us').slideUp();
        } else {

            $('#main-menu').addClass('active-about');
            $('#main-menu').removeClass('active-shop');
            $('#main-menu').css('background-color', '#fff');
            $(this).parent().parent().parent().parent().find('.menu-shop').slideUp();
            $(this).parent().parent().parent().parent().find('.menu-about-us').slideDown();
        }

    });

    var cart = $('#cart'),
        cartWrap = $('.cart__wrap'),
        cartOverlay = $('#cart-overlay');

    $('#header__cart-label').click(function () {

        if (cart.hasClass('active-cart')) {
            cart.removeClass('active-cart');
            cartOverlay.css('opacity', '0');
            cartOverlay.css('position', '');
            cart.css('transform', 'translateX(100%)');
            cartWrap.delay(100).animate({"opacity": '0'}, 100);
        } else if (cart.not('active-cart')) {
            cartOverlay.css('opacity', '1');
            cartOverlay.css('position', 'fixed');
            cart.addClass('active-cart');
            cart.css('transform', 'translateX(0%)');
            cartWrap.delay(100).animate({"opacity": '1'}, 100);
        }

    });

    $('#cart__close').click(function () {
        cart.removeClass('active-cart');
        cartOverlay.css('opacity', '0');
        cartOverlay.css('position', '');
        cart.css('transform', 'translateX(100%)');
        cartWrap.delay(100).animate({"opacity": '0'}, 100);
    })

    var mobileMenu = $('#mobile-menu'),
        mobileMenuWrap = $('.mobile-menu__wrap'),
        mobileMenuOverlay = $('#mobile-menu-overlay');

    $('#header__navigation-button-item').click(function () {

        if (mobileMenu.hasClass('active-mobile-menu')) {
            mobileMenu.removeClass('active-mobile-menu');
            mobileMenuOverlay.css('opacity', '0');
            mobileMenuOverlay.css('position', '');
            mobileMenu.css('transform', 'translateX(-100%)');
            mobileMenuWrap.delay(100).animate({"opacity": '0'}, 100);
        } else if (mobileMenu.not('active-mobile-menu')) {
            mobileMenuOverlay.css('opacity', '1');
            mobileMenuOverlay.css('position', 'fixed');
            mobileMenu.addClass('active-mobile-menu');
            mobileMenu.css('transform', 'translateX(0%)');
            mobileMenuWrap.delay(100).animate({"opacity": '1'}, 100);
        }

    });

    $('#mobile-menu__close').click(function () {
        mobileMenu.removeClass('active-mobile-menu');
        mobileMenuOverlay.css('opacity', '0');
        mobileMenuOverlay.css('position', '');
        mobileMenu.css('transform', 'translateX(-100%)');
        mobileMenuWrap.delay(100).animate({"opacity": '0'}, 100);
    });


    $('.mobile-menu__list').css('display', 'none');

    $('.mobile-menu__elem-name').click(function () {


        if ($(this).hasClass('open-list')) {
            $(this).removeClass('open-list');
            var icon = $(this).find('i');
            icon.addClass('fa-chevron-right').removeClass('fa-chevron-down');
            $(this).next('.mobile-menu__list').slideUp();
        } else if ($(this).not('open-list')) {
            $(this).addClass('open-list');
            var icon = $(this).find('i');
            icon.addClass('fa-chevron-down').removeClass('fa-chevron-right');
            $(this).next('.mobile-menu__list').slideDown();
        }


    });


///////////////////////////////////////////////

    let wrap = $('#wrapper'),
        btn = $('.characters__size__chart'),
        btnReg = $('.header__user');
    modal = $('.cover, .modal, .modal-content, .test');

    btn.on('click', function () {
        modal.fadeIn();
    });

    btnReg.on('click', function () {
        modal.fadeIn();
    });

// close modal
    $('.modal').click(function () {
        wrap.on('click', function (event) {
            var select = $('.modal-content');
            if ($(event.target).closest(select).length)
                return;
            modal.fadeOut();
            wrap.unbind('click');
        });
    });

    $('.modal-size__close').click(function () {
        modal.fadeOut();
    });

    ////////////////////////////////////////////////

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

    $('.characters__name__like').on('click', function () {
        let likeEmpty = $(this).find('.characters__like-empty');
        let likeFilled = $(this).find('.characters__like-filled');
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

