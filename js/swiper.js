(function(){
    'use strict'

    const swiper = new Swiper('.swiper_01', {
        direction: 'vertical',
        loop: true, 
        //mousewheel: true,마우스휠기능//

        slidesPerView: 1.5,
        spaceBetween: 80,
        freeMode: true,
        speed : 5000,

        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
    });

    new Swiper('.swiper_02', {
      direction: 'vertical',
      loop: true, 
      //mousewheel: true,마우스휠기능//


      slidesPerView: 2,
      spaceBetween: 440,
      freeMode: true,
      speed : 5000,

      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });

    new Swiper('.swiper_03', {
      direction: 'vertical',
      loop: true, 
      //mousewheel: true,마우스휠기능//


      slidesPerView: 1.5,
      spaceBetween: 80,
      freeMode: true,
      speed : 5000,

      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });


})();