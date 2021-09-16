window.addEventListener("DOMContentLoaded", function () {

    var language = {
        eng: {
            navbar: {
                inicio: "HOME",
                empresa: "COMPANY",
                materiais: "MATERIALS",
                jazidas: "DEPOSITS",
                contato: "CONTACT",
            },
            top_carousel_info: {
                text: "Talent and competence have become characteristics of our work, attested by our customers who have become loyal, developing a relationship of partnership and friendship. We have earned the market's trust due to our history of responsibility, honesty and competence in the products delivered to our customers.",
            },
            materiais: {
                title: "MATERIALS",
                produto_1: "",
                produto_2: "",
                produto_3: "",
                produto_4: "",
                produto_5: "",
                produto_6: "",
                produto_7: "",
                produto_8: "",
                produto_9: "",
                produto_10: "",
                produto_11: "",
            },
            jazidas: {
                title: "DEPOSITS",
                text: "CONTINUOUS INVESTMENTS IN THE QUALITY AND SAFETY OF THE EXTRACTION OF OUR MATERIAL MATERIALS, ACQUA MARINE, PRETO SÃO RAFAEL, CAVALESE AND PORTINARI, HAS BEEN KEY TO OUR GUARANTEE OF SUPPLY AND THE BASIS OF OUR SUCCESS.",
                produto_1 : "",
                produto_2 : "",
                produto_3 : "",
                produto_4 : "",
            },
            form: {
                title: "CONTACT",
                nome: "NAME",
                email : "EMAIL",
                telefone : "TELEPHONE",
                empresa : "COMPANY",
                cidade : "CITY",
                estado : "STATE",
                mensagem : "MESSAGE",
                enviar: "SEND",
            },
            
        },
        pt: {

        }
    };
    
    var pageLanguage = localStorage.getItem("language");
    if(pageLanguage == "eng"){
        //navbar
        /*$('.navbar-nav').children("a").eq(0).text(language.eng.navbar.about_us);*/
        $('nav .nav-list').children("li").eq(0).children("a").text(language.eng.navbar.inicio);
        $('nav .nav-list').children("li").eq(1).children("a").text(language.eng.navbar.empresa);
        $('nav .nav-list').children("li").eq(2).children("a").text(language.eng.navbar.materiais);
        $('nav .nav-list').children("li").eq(3).children("a").text(language.eng.navbar.jazidas);
        $('nav .nav-list').children("li").eq(4).children("a").text(language.eng.navbar.contato);
        
        //top-carousel-info
        $('#top-carousel-info .text').text(language.eng.top_carousel_info.text);
        
        //materiais
        $('.materiais .title').text(language.eng.materiais.title);
        
        //jazidas
        $('.jazidas .title').text(language.eng.jazidas.title);
        $('.jazidas .text').text(language.eng.jazidas.text);
        
        //form
        $('.contato .title').text(language.eng.form.title);
        $('.form #nome').attr("placeholder", language.eng.form.nome);
        $('.form #email').attr("placeholder", language.eng.form.email);
        $('.form #telefone').attr("placeholder", language.eng.form.telefone);
        $('.form #empresa').attr("placeholder", language.eng.form.empresa);
        $('.form #cidade').attr("placeholder", language.eng.form.cidade);
        $('.form #estado').attr("placeholder", language.eng.form.estado);
        $('.form #mensagem').attr("placeholder", language.eng.form.mensagem);
        $('.buttonEmail').text(language.eng.form.enviar);
    }


    $('.btn-language').click(function(){
        localStorage.setItem("language", $(this).attr('id'));
        setTimeout(function () {
            location.reload(true);
        }, 150)
    });

    $('.whatsapp').click(function(){
        window.open('https://api.whatsapp.com/send?phone=5528999187924&text=Ol%C3%A1%2C+tenho+interesse+no+seu+produto!', '_blank'); 
    });
    
    $('.instagram').click(function(){
        window.open('https://www.instagram.com/margilgranitos/', '_blank'); 
    });
    
    $('.facebook').click(function(){
        window.open('https://www.facebook.com/MARGILGRANITOSEMARMORES', '_blank'); 
    });

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
        localStorage.setItem("nameMaterial", $(this).attr('id'));
        localStorage.setItem("clickedMaterial", "true");
        window.location.href = "materiais.php";

    });
    
    $('.destaques .box').click(function(){
        localStorage.setItem("nameMaterial", $(this).attr('id'));
        localStorage.setItem("clickedMaterial", "true");
        window.location.href = "materiais.php";

    });

    $(function(){
        if($('body').is('.page-materiais')){
            var nameMaterial = localStorage.getItem("nameMaterial");
            var clickedMaterial = localStorage.getItem("clickedMaterial");
            if(clickedMaterial == "true"){
                jQuery(function(){
                    jQuery('#' + nameMaterial).children("a").children("img").click();
                    localStorage.setItem("clickedMaterial", "false");
                });
            }
        }
    });

    $('.page-empresa .empresa .images .pequena div').click(function(){
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

    $('#top-carousel .carousel-indicators li').click(function(){
        /*$('#top-carousel-info .carousel-indicators #' + $(this).attr('id')).addClass('active').siblings().removeClass('active');*/
        var indicatorID = $(this).attr('id');
        jQuery(function(){
            jQuery('#top-carousel-info .carousel-indicators #' + indicatorID).click();
        });
    });

});