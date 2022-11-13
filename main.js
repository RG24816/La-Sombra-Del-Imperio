let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

  var swiper = new Swiper(".Destacado-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });


  var swiper = new Swiper(".DC-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

  
  var swiper = new Swiper(".Marvel-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

  var swiper = new Swiper(".Comics-Variados-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

  var swiper = new Swiper(".Manga-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });


 
  var x = document.getElementById("login-form");
  var y = document.getElementById("register-form");
  var z = document.getElementById("pointer-btn");
  var l = document.getElementById("login");
  var r = document.getElementById("register");
  var ac = document.getElementById("action_title");

		function register(){
      x.style.left = "-450px";
			y.style.left = "25px";
			z.style.left = "215px";
			l.style.color = "#848484";
			r.style.color = "#6a0f86";
			ac.textContent = "Registro";
		}

		function login(){
			x.style.left = "25px";
			y.style.left = "450px";
			z.style.left = "30px";
			l.style.color = "#6a0f86";
			r.style.color = "#848484";
			ac.textContent = "Inicio";
		}		
