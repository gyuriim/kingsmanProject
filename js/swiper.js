var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        361: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2.5,
        },
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });