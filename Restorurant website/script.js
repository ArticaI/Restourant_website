document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('attivo');
}

document.querySelector('#chiudi').onclick = () =>{
  document.querySelector('#search-form').classList.remove('attivo');
}


var swiper = new Swiper(".contenitore", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});