for (let i = 0; i < 15; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (5 + Math.random() * 5) + 's';
      heart.style.opacity = Math.random();
      heart.style.transform = `scale(${0.5 + Math.random()}) rotate(-45deg)`;
      document.body.appendChild(heart);
    }

const startDate = new Date("2024-02-25T00:00:00"); // coloque a data do início do namoro aqui

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").textContent =
      `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos 💖`;
  }

setInterval(updateTimer, 1000);
updateTimer();

