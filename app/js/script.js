jQuery(() => {
   $('body').on('click', '.shop__goods__item__name__like', function() {
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

   $('body').on('click', '.shop__filter_btn', function () {
       let show = $('.sort__list').css('display');

       if (show === 'none') {
           $('.sort__list').fadeIn();
       } else {
           $('.sort__list').fadeOut();
       }
   })
});