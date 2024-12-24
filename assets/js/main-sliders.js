/**
  * @description Funcion que inicializa el slider horizontales de los programas especiales
*/
const sliderHorizontalPrograms = (slider, element_navigation) => {
    const swiper_horizontal_special_pgm = new Swiper("."+slider, {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
        rewind: true,
        preloadImages: false,
        lazy: true,        
        navigation: {
            nextEl: "."+element_navigation+" .swiper-button-next",
            prevEl: "."+element_navigation+" .swiper-button-prev",
        },
        breakpoints: {
            300: {
                slidesPerView: "auto",
            },
            310: {
                slidesPerView: "auto",
            },
            320: {
                slidesPerView: "auto",
            },
            480: {
                slidesPerView: "auto",
            },
            500: {
                slidesPerView: 2,
            },
            600: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1500: {
                slidesPerView: 3,
            },
            2100: {
                slidesPerView: 3,
            },
        },
    });
    $("body").on("click", `.${element_navigation} .content-navigation-prev`, function(){
        swiper_horizontal_special_pgm.slidePrev();
    });
    $("body").on("click", `.${element_navigation} .content-navigation-next`, function(){
        swiper_horizontal_special_pgm.slideNext(500);
    });
}
/**
  * @description Funcion que inicializa el slider vertocales de los programas especiales
*/
const sliderVerticalPrograms = (slider, element_navigation) => {
    const swiper_vertical_pgm = new Swiper("."+slider, {
        slidesPerView: 6,
        spaceBetween: 10,
        slidesPerGroup: 1,
        rewind: true,
        preloadImages: false,
        lazy: true,
        resizeObserver: true, 
        navigation: {
            nextEl: "."+element_navigation+" .slider-special-programs .content-navigation-next",
            prevEl: "."+element_navigation+" .slider-special-programs .content-navigation-prev",
        },
        breakpoints: {
            300: {
                slidesPerView: 2,
            },
            310: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            500: {
                slidesPerView: 2,
            },
            600: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 3,
            },
            950: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 5,
            },
            1500: {
                slidesPerView: 6,
            },
            2100: {
                slidesPerView: 6,
            },
        },
    });
    $("body").on("click", `.${element_navigation} .content-navigation-prev`, function(){
        swiper_vertical_pgm.slidePrev();
    });
    $("body").on("click", `.${element_navigation} .content-navigation-next`, function(){
        swiper_vertical_pgm.slideNext();
    });
}
/**
  * @description Funcion que inicializa el slider del header del index
*/
const sliderHead = () => {
    const swiper_head = new Swiper(".slider-header", {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        rewind: true,
        preloadImages: false,
        lazy: true,   
        pagination: {
            el: ".slider-head .slider-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span id="pagina-'+(index + 1)+'" title="pagina-'+(index + 1)+'" class="' + className + '"></span>';
            },
        },
    });
}
$(document).ready(function() {
    if($('.index').length){        
        sliderHead()
        sliderHorizontalPrograms('swiper-estrenos-special-programs', 'section-estrenos-special-programs');
        sliderVerticalPrograms('swiper-information-special-programs', 'section-information-special-programs');
        sliderHorizontalPrograms('swiper-series-special-programs', 'section-series-special-programs');
    }
    if($('.infomedia').length){  
        sliderHorizontalPrograms('swiper-desmentidos-pgm', 'section-desmentidos-pgm');
    }
    if($('.tv-en-vivo').length){  
        sliderHorizontalPrograms('swiper-internacional-special-programs', 'section-internacional-pgm');
    }
});