let mySwiper = new Swiper ('.swiper-container', {
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 130,
	 navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: false,
  breakpoints: {
	  768: {
		slidesPerView: 2,
	  },
	  1200: {
		slidesPerView: 3,
    
	  }
  }
  });
  const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.header__navigation');
menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menuBtn.classList.toggle('menu-btn_active');
    nav.classList.toggle('header__navigation_active');
});

  // pagination: {
    //     el: '.swiper-pagination',
    //     // Буллеты
    //     clickable: true,
    // },