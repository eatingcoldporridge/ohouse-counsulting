// DOM이 로드되면 실행하라.
$(document).ready(function(){
    $('.slider-int').slick({
        autoplay: false,
        slidesToShow: 1.96,
        autoplaySpeed: 500,
        dots: false,
        arrows: true,
        prevArrow: '.slide_prev_button',
        nextArrow: '.slide_next_button',

        pauseOnHover: true,
        /*반응형 */
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            }
            , {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.slider-res').slick({
        autoplay: true,
        slidesToShow: 2.6,
        autoplaySpeed: 800,
        dots: false,
        arrows: false,
        pauseOnHover: false
    });
    $('.slider-review').slick({
        autoplay: false,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        pauseOnHover: false
    });

});