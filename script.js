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
function mudarConteudoKmRunText(novoTexto, novaClasse) {
    var kmRunText = document.getElementById('kmRunText');
    kmRunText.textContent = novoTexto;
    kmRunText.className = 'km-run' + novaClasse;
}

function changeActive(link) {
    document.querySelectorAll('nav a').forEach(function(a) {
      a.classList.remove('active');
    });
    link.classList.add('active');
}
document.querySelector('.run-5k').addEventListener('click', function() {
    mudarConteudoKmRunText('5K', ' classe-5k');
});

document.querySelector('.run-10k').addEventListener('click', function() {
    mudarConteudoKmRunText('10K', ' classe-10k');
});

document.querySelector('.run-15k').addEventListener('click', function() {
    mudarConteudoKmRunText('15K', ' classe-15k');
});

document.querySelector('.run-21k').addEventListener('click', function() {
    mudarConteudoKmRunText('21K', ' classe-21k');
});
  
