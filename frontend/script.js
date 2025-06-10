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

let timer = document.getElementById('timer')

function loveTimer(){
  
  const intervalo = setInterval(() => {
    let agora = new Date()
    const diff = agora - dataInicial
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24))/ (1000 * 60 * 60)) 
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)
    
    timer.innerHTML = `<p>${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos...</p>`
  
  }, 1000)
}

let dataInicial = new Date('2024-02-25T00:00:00')
loveTimer()
