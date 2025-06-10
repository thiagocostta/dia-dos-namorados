// Carrossel de fotos
let current = 0;
const images = document.querySelectorAll('.carousel-img');

function showNextImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}

setInterval(showNextImage, 3000); // muda a cada 3 segundos

// Contador de tempo juntos
const startDate = new Date("2023-02-01T00:00:00"); // coloque aqui a data que vocês começaram
const timerElement = document.getElementById("timer");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 365;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  timerElement.textContent =
    `${years} anos, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

setInterval(updateTimer, 1000);
