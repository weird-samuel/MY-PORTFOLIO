window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = "#1f1f1f";
  } else {
    navbar.style.backgroundColor = "";
  }
});

var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link")
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('active-tab')
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwUrzt_KtK27UusAbKooQ8AtGgR__ufk4UlCi5HVJfFZz-DSe8CSVqNlcIZLhNBj0rXAQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message Sent!"
      setTimeout(function () {
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

// Scroll to section when a link is clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Page Load
let stage = document.querySelector(".stage")
let content = document.querySelector(".content")
window.addEventListener("load", () => {
  stage.style.opacity = "1";
  setTimeout(() => {
    stage.style.opacity = "0";
    setTimeout(() => {
      content.style.opacity = "0";
      setTimeout(() => {
        content.style.display = "none";
        window.scrollTo(0, 0)
      }, 600)
    }, 500)
  }, 4500)
});

//flickity
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
  cellAlign: 'left',
  contain: true
});

var carousel = document.querySelector('.carousel');
var flkty = new Flickity(carousel, {
  imagesLoaded: true,
  percentPosition: false,
});

var imgs = carousel.querySelectorAll('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

flkty.on('scroll', function () {
  flkty.slides.forEach(function (slide, i) {
    var img = imgs[i];
    var x = (slide.target + flkty.x) * -1 / 3;
    img.style[transformProp] = 'translateX(' + x + 'px)';
  });
});