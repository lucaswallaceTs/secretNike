const runningDate = new Date("2024-07-14T08:00:00");

function updateCountdown() {
    const currentDate = new Date();
    const difference = runningDate - currentDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days > 0 ? days : 0;
    document.getElementById("hours").innerHTML = hours > 0 ? hours : 0;
    document.getElementById("minutes").innerHTML = minutes > 0 ? minutes : 0;
    document.getElementById("seconds").innerHTML = seconds > 0 ? seconds : 0;
}

setInterval(updateCountdown, 1000);
updateCountdown();

function mudarImagem(novaSrc) {
    var imagem = document.getElementById("bannerImage");
    imagem.src = novaSrc;
}

function kitImagem(novoLink) {
    var imagemKit = document.getElementById("kitImage").getElementsByTagName("img")[0];
    imagemKit.src = novoLink;
}

function mudarConteudoKmRunText(novoTexto, novaClasse) {
    var kmRunText = document.getElementById("kmRunText");
    kmRunText.textContent = novoTexto;
    kmRunText.className = "km-run" + novaClasse;
}

function changeActive(link) {
    document.querySelectorAll("nav a").forEach(function (a) {
        a.classList.remove("active");
    });
    link.classList.add("active");
}

document.querySelectorAll(".run-5k").forEach(function(element) {
    element.addEventListener("click", function () {
        mudarImagem(
            "https://cdn.ticketagora.com.br/ticketagora/site/Nike-2024-SP/mapa-nike-5k.svg"
        );
        mudarConteudoKmRunText("5K", " classe-5k");
        document.querySelectorAll(".run-5k, .run-10k, .run-15k, .run-21k").forEach(function (el) {
            el.classList.remove("new-bg");
        });
        this.classList.add("new-bg");
    });
});

document.querySelectorAll(".run-10k").forEach(function(element) {
    element.addEventListener("click", function () {
        mudarImagem(
            "https://cdn.ticketagora.com.br/ticketagora/site/Nike-2024-SP/mapa-nike-10k.svg"
        );
        mudarConteudoKmRunText("10K", " classe-10k");
        document.querySelectorAll(".run-5k, .run-10k, .run-15k, .run-21k").forEach(function (el) {
            el.classList.remove("new-bg");
        });
        this.classList.add("new-bg");
    });
});

document.querySelectorAll(".run-15k").forEach(function(element) {
    element.addEventListener("click", function () {
        mudarImagem(
            "https://cdn.ticketagora.com.br/ticketagora/site/Nike-2024-SP/mapa-nike-15k.svg"
        );
        mudarConteudoKmRunText("15K", " classe-15k");
        document.querySelectorAll(".run-5k, .run-10k, .run-15k, .run-21k").forEach(function (el) {
            el.classList.remove("new-bg");
        });
        this.classList.add("new-bg");
    });
});

document.querySelectorAll(".run-21k").forEach(function(element) {
    element.addEventListener("click", function () {
        mudarImagem(
            "https://cdn.ticketagora.com.br/ticketagora/site/Nike-2024-SP/mapa-nike-21k.svg"
        );
        mudarConteudoKmRunText("21K", " classe-21k");
        document.querySelectorAll(".run-5k, .run-10k, .run-15k, .run-21k").forEach(function (el) {
            el.classList.remove("new-bg");
        });
        this.classList.add("new-bg");
    });
});

document.querySelectorAll(".kit-corredor-basico").forEach(function(element) {
    element.addEventListener("click", function () {
        document.querySelectorAll(".kit-basico").forEach(function (el) {
            el.style.display = "block";
        });
        document.querySelectorAll(".kit-premium").forEach(function (el) {
            el.style.display = "none";
        });
        kitImagem(
            "https://cdn.ticketagora.com.br/ticketagora/site/Nike-2024-SP/kit_corredor.svg"
        );
        document.querySelectorAll(".kit-corredor-basico, .kit-corredor-premium").forEach(function (el) {
            el.classList.remove("new-bg");
        });
        this.classList.add("new-bg");
    });
});

document.querySelectorAll(".kit-corredor-premium").forEach(function(element) {
    element.addEventListener("click", function () {
        document.querySelectorAll(".kit-basico").forEach(function (el) {
            el.style.display = "none";
        });
        document.querySelectorAll(".kit-premium").forEach(function (el) {
            el.style.display = "block";
        });
        kitImagem(
            "https://cdn.ticketagora.com.br/ticketagora/site/Nike-2024-SP/kit_corredor_premium.svg"
        );
        document.querySelectorAll(".kit-corredor-premium, .kit-corredor-basico").forEach(function (el) {
            el.classList.remove("new-bg");
        });
        this.classList.add("new-bg");
    });
});

document.getElementById("submit-fale-conosco").addEventListener("click", function () {
    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let mensagem = document.getElementById("message").value;

    if (!nome || !email || !phone || !mensagem) {
        return alert("Verifique todos os campos e tente novamente.");
    }

    this.disabled = true;

    var form = document.getElementById("form-fale-conosco");
    var formdata = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/Calendario/FalarConoscoNike", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            alert("Enviado com sucesso.");
        } else {
            alert("Erro ao enviar. Verifique se todos os campos estão preenchidos corretamente.");
        }
        document.getElementById("submit-fale-conosco").disabled = false;
    };
    xhr.send(formdata);
});
