// Biblioteca Swiper para carrosel de imagens
const swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      sableOnInteraction: false,
      },
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

// Timer do tempo de namoro
let timer = document.getElementById('timer')

function loveTimer(){
  
  const intervalo = setInterval(() => {
    let agora = new Date()
    const diff = agora - dataInicial
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24))/ (1000 * 60 * 60)) 
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)
    
    timer.innerHTML = `<p>${days} dias, ${hours} horas, ${minutes} minutos e<br>${seconds} segundos...</p>`
  
  }, 1000)
}

let dataInicial = new Date('2024-02-25T00:00:00')
loveTimer()

// Encaminhar mensagem no WhatsApp conforme texto no textarea
const whatsappBtn = document.getElementById('whatsapp-btn')

whatsappBtn.addEventListener('click', () => {
  const numero = '5515991713819'
  const mensagem = document.getElementById('mensagem-amor').value

  if (mensagem.trim() === ''){
    alert('Vai mandar nenhuma mensagem para mim amor...  :(')
    return
  }

  const textoCodificado = encodeURIComponent(mensagem)
  const link = `https://wa.me/${numero}?text=${textoCodificado}`

  window.open(link, '_blank')

})

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';

  const side = Math.random() > 0.5 ? 'left' : 'right';
  const topPosition = Math.random() * window.innerHeight;

  if (side === 'left') {
    heart.style.left = '-30px';
    heart.classList.add('left');
  } else {
    heart.style.right = '-30px';
    heart.classList.add('right');
  }

  heart.style.top = `${topPosition}px`;
  heart.style.fontSize = `${Math.random() * 20 + 20}px`;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 500);

