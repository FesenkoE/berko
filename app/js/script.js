$(document).ready(function () {

    let rtl = $('html').attr('dir');
    let dir = false;
    dir = rtl === 'rtl';

    $('.main__arrow').click(function(){
        $('html').animate({scrollTop:$('#about_us').position().top}, 1000, 'linear');
    });

    $('.goods-card__slider__mob__item').zoom();

    $('.recently__viewed__items__mob').slick({
        centerMode:false,
        draggable:false,
        arrows:false,
        // autoplay:true,
        // autoplaySpeed:3000,
        slidesToShow:2,
        slidesToScroll:1,
        dots:true,
        rtl: dir,
    });

    $('.card__also__like__items__slider').slick({
        centerMode:false,
        draggable:false,
        arrows:false,
        // autoplay:true,
        // autoplaySpeed:3000,
        slidesToShow:1,
        slidesToScroll:1,
        dots:true,
        rtl: dir,
    });

    $('.card__to__complete__slider').slick({
        centerMode:false,
        draggable:false,
        arrows:false,
        // autoplay:true,
        // autoplaySpeed:3000,
        slidesToShow:1,
        slidesToScroll:1,
        dots:true,
        rtl: dir,
    });

    $('.goods-card__slider__mob').slick({
        centerMode:false,
        draggable:false,
        arrows:false,
        // autoplay:true,
        // autoplaySpeed:3000,
        slidesToShow:1,
        slidesToScroll:1,
        dots:true,
        rtl: dir,
    });


    $('.main-slider__slider').slick({
        fade: true,
        arrows: false,
        autoplay: false,
        rtl: dir,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplaySpeed: 5000,
    });

    $('.viewed__recently__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dot: true,
        rtl: dir,
        speed: 400,
        customPaging: 30,
        draggable: true,
        infinite: true,
        prevArrow: '<div class="featured__slider-controls_prev viewed__recently__left"><i class="fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="featured__slider-controls_next viewed__recently__right"><i class="fas fa-chevron-right"></i></div>',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        rtl: dir,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // rtl: dir,
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
        rtl: dir,
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
        rtl: dir,
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

    let category = $('.blog__category__mob__list');

    $('.blog__category__mob').click(function() {
        let show = $('.blog__category__mob__list').css('display');

        if (show === 'none') {
            category.fadeIn();
        } else {
            category.fadeOut();
        }
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
    });

    let shoptList = $('.shop__menu_mob');

    $('.shop_category_btn').on('click', function () {
        let show = shoptList.css('display');

        if (show === 'none') {
            shoptList.fadeIn();
        } else {
            shoptList.fadeOut();
        }
    });

    function toggleHeader(){
        var scroll_status = $(document).scrollTop();
        if (scroll_status > 74) {
            $("#main-menu").addClass('fix');
            $(".main-slider").css('margin-top', '120px');
        } else {
            $("#main-menu").removeClass('fix');
            $('.main-slider').css('margin-top', '0');
        }
    }

    toggleHeader();

    $(document).scroll(function(){
        toggleHeader();
    });


    $('.characters__description__title').click(function () {
       $('.characters__description__text').slideToggle();
       $(this).find('.card__arrow_down').toggleClass('rotate-90');
    });

    $('.characters__more-details').click(function () {
        $('.characters__more-details__text').slideToggle();
        $(this).find('.card__arrow_down').toggleClass('rotate-90');
    });



    $('.characters__buy__amount__plus').click(function() {
        let amount = $('.characters__buy__amount__number').html();
        amount = parseInt(amount);
        amount += 1;
        $('.characters__buy__amount__number').html(amount);
    });

    $('.characters__buy__amount__minus').click(function() {
        let amount = $('.characters__buy__amount__number').html();
        amount = parseInt(amount);
        if (amount > 1) {
            amount -= 1;
        }
        $('.characters__buy__amount__number').html(amount);
    });

    $('.header__search__mob').click( function() {
        $('.search__input__mob').slideToggle('fast');
    });

    $('.search__input__mob__close').click( function() {
        $('.search__input__mob').slideToggle('fast');
    })



});
