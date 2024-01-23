const runningDate = new Date('2024-05-05T00:00:00');

function updateCountdown() {
    const currentDate = new Date();
    const difference = runningDate - currentDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}
setInterval(updateCountdown, 1000);
updateCountdown();

function mudarImagem(novaSrc) {
    var imagem = document.getElementById('bannerImage');
    imagem.src = novaSrc;
  }

  function changeActive(link) {
    document.querySelectorAll('nav a').forEach(function(a) {
      a.classList.remove('active');
    });
    link.classList.add('active');
  }