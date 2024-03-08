const runningDate = new Date("2024-05-05T08:00:00");

        function updateCountdown() {
            const currentDate = new Date();
            const difference = runningDate - currentDate;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
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

        $(".run-5k").on("click", function () {
            mudarImagem(
                "https://cdn.ticketagora.com.br/ticketagora/site/Nike-2024-SP/mapa-nike-5k.svg"
            );
            mudarConteudoKmRunText("5K", " classe-5k");
            $(".run-5k, .run-10k, .run-15k, .run-21k").removeClass("new-bg");
            $(this).addClass("new-bg");
        });

        $(".run-10k").on("click", function () {
            mudarImagem(
                "https://cdn.ticketagora.com.br/ticketagora/site/Nike-2024-SP/mapa-nike-5k.svg"
            );
            mudarConteudoKmRunText("10K", " classe-10k");
            $(".run-5k, .run-10k, .run-15k, .run-21k").removeClass("new-bg");
            $(this).addClass("new-bg");
        });

        $(".run-15k").on("click", function () {
            mudarImagem(
                "https://cdn.ticketagora.com.br/ticketagora/site/Nike-2024-SP/mapa-nike-5k.svg"
            );
            mudarConteudoKmRunText("15K", " classe-15k");
            $(".run-5k, .run-10k, .run-15k, .run-21k").removeClass("new-bg");
            $(this).addClass("new-bg");
        });

        $(".run-21k").on("click", function () {
            mudarImagem(
                "https://cdn.ticketagora.com.br/ticketagora/site/Nike-2024-SP/mapa-nike-5k.svg"
            );
            mudarConteudoKmRunText("21K", " classe-21k");
            $(".run-5k, .run-10k, .run-15k, .run-21k").removeClass("new-bg");
            $(this).addClass("new-bg");
        });

        $(".kit-corredor-basico").on("click", function () {
            $(".kit-basico").css("display", "block");
            $(".kit-premium").css("display", "none");
            kitImagem(
                "https://cdn.ticketagora.com.br/ticketagora/site/Nike-2024-SP/kit_corredor.svg"
            );
            $(".kit-corredor-basico, .kit-corredor-premium").removeClass("new-bg");
            $(this).addClass("new-bg");
        });
        $(".kit-corredor-premium").on("click", function () {
            $(".kit-basico").css("display", "none");
            $(".kit-premium").css("display", "block");
            kitImagem(
                "https://cdn.ticketagora.com.br/ticketagora/site/Nike-2024-SP/kit_corredor_premium.svg"
            );
            $(".kit-corredor-premium, .kit-corredor-basico").removeClass("new-bg");
            $(this).addClass("new-bg");
        });

        $("#submit-fale-conosco").on("click", function () {
            let nome = $("#name").val();
            let email = $("#email").val();
            let phone = $("#phone").val();
            let mensagem = $("#message").val();

            if (!nome || !email || !phone || !mensagem) {
                return alert("Verifique todos os campos e tente novamente.");
            }

            $("#submit-fale-conosco").prop("disabled", true);

            var form = document.getElementById("form-fale-conosco");
            var formdata = $(form).serialize();

            $.ajax({
                type: "POST",
                url: "/Calendario/FalarConoscoNike",
                data: formdata,
                success: function (data) {
                    $("#submit-fale-conosco").prop("disabled", false);

                    if (data) alert("Enviado com sucesso.");
                    else alert("Verifique se todos os campos estão preenchidos.");
                },
            });
        });
