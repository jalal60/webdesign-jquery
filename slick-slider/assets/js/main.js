$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        loop:true,
        autoplay:true,
        Infinite:true,
        dots: true,
        prevArrow:'<button type="button" class="slick-prev">Left </button>',
        nextArrow:'<button type="button" class="slick-next">Right </button>'

        // centerMode: true,
        

    });
  });
  