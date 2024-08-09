//Header Sticky Menu script
$(window).on('scroll',function(){

    if($(this).scrollTop()>20){
        $('.header-area').addClass('sticky');
    }
    else{
        $('.header-area').removeClass('sticky');
    }
});