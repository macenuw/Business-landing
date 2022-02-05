$(function () {
  $(".partners__slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
  });
})

const menuBtn = document.getElementById('openMenuBtn');
const menu = document.getElementById('menu')
const headerBtns = document.getElementById('headerBtns')

function toggleMenuActive() {
  console.log(event.target)
  event.stopPropagation();
  menu.classList.toggle('active')
  headerBtns.classList.toggle('active')
}