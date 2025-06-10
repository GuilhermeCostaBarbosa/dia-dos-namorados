const swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidePerView: 1,
        spaceBetween: 18
      }
    }
});