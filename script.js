let myCarousel = document.getElementById('carouselExampleCaptions')
let carousel = new bootstrap.Carousel(myCarousel);

function fillCarouselIndicator(index) {
   carousel.pause();
   intervalID = setInterval(function () {
      if(i >= 100) {
         carousel.next();
      }
   }, 50);
}

function toggleNavButtonStyle(x) {
   let navButton = document.getElementById('nav-button-' + x);
   if(navButton.className == 'nav-button' + ' on') {
      navButton.className = 'nav-button' + ' off';
   }
   else {
      navButton.className = 'nav-button' + ' on';
   }
}
