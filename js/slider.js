$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        slidesToShow:1,
        dots:true,
        responsive:[
            {breakpoint:768,
                settings:{
                    slidesToShow:1,
                    arrows:false
                }
               } ,{breakpoint:481,
                settings:{
                    slidesToShow:1,
                    arrows:false,
                }
               }
        ]
    });
    $(".slider").on('afterChange', function (event, slick, currentSlide) {
    $(".counter").text(currentSlide<3?`0${currentSlide+1}`:currentSlide+1);
    });
    $('.testimonials__slider').slick({
        arrows:true,
        slidesToShow:1
    });
    $(".testimonials__slider").on('afterChange', function (event, slick, currentSlide) {
    $(".testimonials-counter").text(currentSlide<3?`0${currentSlide+1}`:currentSlide+1);
    });
    $('.video__slider').slick({
        arrows:true,
        slidesToShow:3,
        responsive:[
            {
                breakpoint:1230,
                settings:{
                    slidesToShow:2
                } 
            }, {breakpoint:993,
                settings:{
                    slidesToShow:1
                }
               },{breakpoint:768,
                settings:{
                    slidesToShow:2
                }
               }
            ,{breakpoint:481,
                settings:{
                    slidesToShow:1,
                    arrows:false,
                }
               }
        ]
    });
    /*var $page = $('html, body');
    $('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});*/
    
});