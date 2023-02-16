(function(){
    'use strict'

      /*타임라인*/
      var timelineSwiper = null;
    function makeTimeLineSwiper() {
      if(timelineSwiper) { return; }  
      $timelineFirstItem.classList.remove('visibility-hidden');    
      timelineSwiper = new Swiper("#timeline_swiper", {
        direction: "vertical",
        loop: true,
        centeredSlides: true,
        slidesPerView: 5,        
    
        loopedSlides: 0,
        spaceBetween: 15,
        
        mousewheel: true
    
      });
    }
    const $mainTimeline = document.querySelector('#main_timeline');
    const $timelineFirstItem = $mainTimeline.querySelector('.swiper-wrapper li.swiper-slide:first-child');

    let scrollTimer = null;    
    window.addEventListener('scroll', e => {
      if(!scrollTimer) {
        scrollTimer = setTimeout(function() {
          const mainTimeLineY = $mainTimeline.getBoundingClientRect().top;
          console.log(mainTimeLineY)
          if(mainTimeLineY < 0) {
            makeTimeLineSwiper();
          }

          scrollTimer = null;
        }, 200);
      }
    });

    const swiper = new Swiper('.swiper_01', {
        direction: 'vertical',
        loop: true, 
        //mousewheel: true,마우스휠기능//

        slidesPerView: 1.5,
        spaceBetween: 80,
        freeMode: true,
        speed : 10000,

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
      speed : 8000,

      autoplay: {
        delay: 0, 
        reverseDirection: true, // ------------------------- 반대 방향으로 autoplay
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
      speed : 10000,

      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });


})();