$(document).ready(function(){

    //This is show,hide and toggle Example script
    $('#btn-show').click(function(){
        $('#heading2').show(1000);
    });
    $('#btn-hide').click(function(){
        $('#heading2').hide(1000);
    });
    $('#btn-toggle').click(function(){
        $('#heading2').toggle(1000);
    });

    //This is fadein and fadeout Example Script
    $('#btn-fadein').click(function(){
        $('#heading3').fadeIn(1000);
    });
    $('#btn-fadeout').click(function(){
        $('#heading3').fadeOut(1000);
    });
    $('#btn-togglefade').click(function(){
        $('#heading3').fadeToggle();
    });

    //This is slideUp and Down Example script
    $('#slidetrigger').click(function(){
        $('#expandtext').slideToggle();
    });

    //This  is example get and set value in element.
    $('#btn-input').click(function(){
      alert($('#input').val());
    });

    //This is example of addClass and removeClass script
    $('#addclass').click(function(){
        $('#heading4').addClass('newclass');
    });

    $('#removeclass').click(function(){

        $('#heading4').removeClass('newclass');
    });


});