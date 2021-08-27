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

    $('.gallery-banner').click(function(){
        console.log("clicado: " + $(this).attr('id'));

    });

    $('.page-empresa .empresa .images .pequena div').click(function(){
        console.log("id: " + $(this).attr('id'));
        
        var imageUrl = "Images/Empresa/Galeria/";   
        var imageGrandeId = $('.page-empresa .empresa .images .grande div').attr('id');
        var imageClicadaId = $(this).attr('id');
        
        $('.page-empresa .empresa .images .grande div img').attr('src', imageUrl + imageClicadaId + ".png");
        
        $('.page-empresa .empresa .images .grande div').attr('id', imageClicadaId);
        
        $(this).attr('id', imageGrandeId);
        $(this).children("img").attr('src', imageUrl + imageGrandeId + ".png");
        
        /*$('.page-empresa .empresa .images .grande div img').attr('src', "Images/Empresa/Galeria/" + $(this).attr('id') + ".png");
        $('.page-empresa .empresa .images .grande div').attr('id', $(this).attr('id'));
        
        $('.page-empresa .empresa .images .pequena div img').attr('src', "Images/Empresa/Galeria/" + $('.page-empresa .empresa .images .grande div').attr('id') + ".png");
        $('.page-empresa .empresa .images .pequena div').attr('id', $('.page-empresa .empresa .images .grande div').attr('id'))*/;
    });

    function getFormInfos(){
        var emailMessage = "";

        var name = document.querySelector('#name').value;
        var email = document.querySelector('#email').value;
        var phone = document.querySelector('#phone').value;
        var message = document.querySelector('#message').value;

        emailMessage += "Name: " + name + ". <br>";
        emailMessage += "Email: " + email + ". <br>";
        emailMessage += "Phone: " + phone + ". <br>";
        emailMessage += "Message: " + message + ". <br>";
        if(name === "" || email === ""){
            document.getElementsByName('name')[0].placeholder='Please insert your NAME!';
            document.getElementsByName('email')[0].placeholder='Please insert your EMAIL!';
        }
        else{
            sendEmail(name, email, emailMessage);
        }
    }

    function sendEmail(name, email, message){
        Email.send({
            Host: "smtp.gmail.com",
            Username: 'ldbmaildealer@gmail.com',
            Password: "jzkocqnlqfdoeuhr",
            To: `${email}`,
            From: 'ldbmaildealer@gmail.com',
            Subject: `${name} has interest in your product`,
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