        // INICIALIZAÇÃO
        $(document).ready(function(){
            // MENU MOBILE
            $(".button-collapse").sideNav();

            //  LINK INTERNO
            $(".scrollspy").scrollSpy({
                scrollOffset: 0
            });

            // CAROUSEL
            $(".carousel.carousel-slider").carousel({
                fullWidth:true
            });
            // MODAL
            $(".modal").modal();
            // TABS
            $("ul.tabs").tabs();
            // ESCONDER MENU AO CLICAR
            $(".hide-menu").click(function(){
                 $(".button-collapse").sideNav("hide");
                 // METODO QUE ESCONDE O MENU MOBILE AO CLICAR
            });
            // AUTO PLAY
            function autoplay(){
                $(".carousel").carousel("next");
                setTimeout(autoplay, 4500);
            // FUNÇÃO PARA INICIAR AUTOMATICAMENTE O SLIDE DE FOTOS
            }

            autoplay(); // CHAMAR A FUNÇÃO
        });

        // ADICIONANDO NAVCOLOR
        $(window).on("scroll", function(){
            if($(window).scrollTop() > 650){
                $(".navbar").addClass("nav-color"); 
        // QUANDO OUVER UMA ROLAGEM MAIOR DO QUE 100 PIXELS, SERÁ ADICIONADO O NAVCOLOR À PAGINA 
            } else {
                $(".navbar").removeClass("nav-color"); 
            }
        });