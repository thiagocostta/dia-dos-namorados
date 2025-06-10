// Carrossel de fotos
let current = 0;
const images = document.querySelectorAll('.carousel-img');

function showNextImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}

setInterval(showNextImage, 6000); // muda a cada 6 segundos

function mostrarVideo() {
  document.querySelector('.carousel').style.display = 'none';
  document.getElementById('video-container').style.display = 'block';
  const video = document.getElementById('video');
  video.muted = true;   // mantém o vídeo mudo
  video.play();
}

function voltarCarrossel() {
  document.getElementById('video-container').style.display = 'none';
  document.querySelector('.carousel').style.display = 'flex';
  const video = document.getElementById('video');
  video.pause();
  video.currentTime = 0;
}


// Contador de tempo juntos
const startDate = new Date("2024-01-01T05:30:00"); // coloque aqui a data que vocês começaram
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
    `${years} ano, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

setInterval(updateTimer, 1000);
