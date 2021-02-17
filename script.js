$(function() {

   // Slick Slider
   if ($(window).width() < 992) {
        $('.team__list').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:false,
            dots:true
        });
    }

});