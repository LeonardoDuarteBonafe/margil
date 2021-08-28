window.addEventListener("DOMContentLoaded", function () {
    /*$('.mobile-menu').click(function(){
        const mobileMenu = document.querySelector('.mobile-menu');
        const navList = document.querySelector('.nav-list');
        navList.classList.toggle('active');
    });*/

    class MobileNavbar{
        constructor(mobileMenu, navList, navLinks){
            this.mobileMenu = document.querySelector(mobileMenu);
            this.navList = document.querySelector(navList);
            this.navLinks = document.querySelectorAll(navLinks);
            this.activeClass = "active";

            this.handleClick = this.handleClick.bind(this);
        }

        animateLinks(){
            this.navLinks.forEach((link, index) => {
                link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`);
            });
        }

        handleClick(){
            this.navList.classList.toggle(this.activeClass);
            this.mobileMenu.classList.toggle(this.activeClass);
            this.animateLinks();
        }

        addClickEvent(){
            this.mobileMenu.addEventListener("click", this.handleClick);
        }

        init(){
            if(this.mobileMenu){
                this.addClickEvent();
            }
        }
    }

    const mobileNavbar = new MobileNavbar(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li",
    );

    mobileNavbar.init();

    /*function menuToggle(){
    }*/

    var gallery_swiper = new Swiper(".gallery-swiper", {
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });

    $(function(){
        if($('body').is('.page-index')){
            localStorage.setItem("clickedMaterial", "false");
        }
    });

    $('.gallery-banner').click(function(){
        //console.log("clicado: " + $(this).attr('id'));
        localStorage.setItem("nameMaterial", $(this).attr('id'));
        localStorage.setItem("clickedMaterial", "true");
        window.location.href = "materiais.php";

    });

    $(function(){
        if($('body').is('.page-materiais')){
            var nameMaterial = localStorage.getItem("nameMaterial");
            var clickedMaterial = localStorage.getItem("clickedMaterial");
            /*console.log("nome: " + nameMaterial);
            console.log("clicked: " + clickedMaterial);*/
            if(clickedMaterial == "true"){
                jQuery(function(){
                    jQuery('#' + nameMaterial).children("a").children("img").click();
                    localStorage.setItem("clickedMaterial", "false");
                });
            }
        }
    });



    $('.page-empresa .empresa .images .pequena div').click(function(){
        console.log("id: " + $(this).attr('id'));

        var imageUrl = "Images/Empresa/Galeria/";   
        var imageGrandeId = $('.page-empresa .empresa .images .grande div').attr('id');
        var imageClicadaId = $(this).attr('id');

        $('.page-empresa .empresa .images .grande div img').attr('src', imageUrl + imageClicadaId + ".webp");

        $('.page-empresa .empresa .images .grande div ').addClass('page-empresa-active');
        $('.page-empresa .empresa .images .grande div ').on("animationend", function(){
            $(this).removeClass('page-empresa-active');
        });

        $('.page-empresa .empresa .images .grande div').attr('id', imageClicadaId);

        $(this).attr('id', imageGrandeId);
        $(this).children("img").attr('src', imageUrl + imageGrandeId + ".webp");


        /*$('.page-empresa .empresa .images .grande div img').attr('src', "Images/Empresa/Galeria/" + $(this).attr('id') + ".png");
        $('.page-empresa .empresa .images .grande div').attr('id', $(this).attr('id'));

        $('.page-empresa .empresa .images .pequena div img').attr('src', "Images/Empresa/Galeria/" + $('.page-empresa .empresa .images .grande div').attr('id') + ".png");
        $('.page-empresa .empresa .images .pequena div').attr('id', $('.page-empresa .empresa .images .grande div').attr('id'))*/;
    });

    $('.buttonEmail').click(function(){
        getFormInfos();
    });

    function getFormInfos(){
        var emailMessage = "";

        var nome = document.querySelector('#nome').value;
        var email = document.querySelector('#email').value;
        var telefone = document.querySelector('#telefone').value;
        var empresa = document.querySelector('#empresa').value;
        var cidade = document.querySelector('#cidade').value;
        var estado = document.querySelector('#estado').value;
        var mensagem = document.querySelector('#mensagem').value;

        emailMessage += "Nome: " + nome + ". <br>";
        emailMessage += "Email: " + email + ". <br>";
        emailMessage += "Telefone: " + telefone + ". <br>";
        emailMessage += "Empresa: " + empresa + ". <br>";
        emailMessage += "Cidade: " + cidade + ". <br>";
        emailMessage += "Estado: " + estado + ". <br>";
        emailMessage += "Mensagem: " + mensagem + ". <br>";
        if(nome === "" || email === ""){
            var pageLanguage = localStorage.getItem("language");
            if(pageLanguage == "eng"){
                document.getElementsByName('nome')[0].placeholder='Please insert your NAME!';
                document.getElementsByName('email')[0].placeholder='Please insert your EMAIL!';
            }
            else{
                document.getElementsByName('nome')[0].placeholder='Por favor, insira seu NOME!';
                document.getElementsByName('email')[0].placeholder='Por favor, insira seu EMAIL!';
            }
            $('.form-nome').addClass('form-required');
            $('.form-email').addClass('form-required');
        }
        else{
            sendEmail(nome, email, emailMessage);
        }
    }

    function sendEmail(name, email, message){
        Email.send({
            Host: "smtp.gmail.com",
            Username: 'ldbmaildealer@gmail.com',
            Password: "jzkocqnlqfdoeuhr",
            To: `${email}`,
            From: 'ldbmaildealer@gmail.com',
            Subject: `${name} tem interesse no seu produto!`,
            Body: `${message}`,
        }).then(function(message){
            var pageLanguage = localStorage.getItem("language");
            if(pageLanguage == "eng"){
                alert("Your email was sent successfully");
            }
            else{
                alert("Seu email foi enviado com sucesso");
            }
            window.location.reload(false); 
        }); 
    } 
});