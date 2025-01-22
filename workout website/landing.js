//tryna go through the slides and change the words and background pic
const slides = [
    {
        background: "url('manrunning2.jpg')",
        title: "Welcome to TrackStr",
        description:"There are dozens of factors to consider when changing your lifestyle. Sign in to start creating your ideal training plan today.",
    },
    {
        background:"url('parachuteguy.jpg')",
        title: "lalala",
        description: "lalaa",
    },
    {
        background: "url('bridgerunner.jpg')",
        title: "lalalalalalala",
        description: "lala??",
    }
];

let currentSlide=0;

function updateCarousel() {
    const carousel = document.getElementById("carousel");
    const title = document.getElementById("slide-title");
    const text = document.getElementById("slide-des");
  
    // Update content
    title.textContent = slides[currentSlide].title;
    text.textContent = slides[currentSlide].description;
    carousel.style.backgroundImage = slides[currentSlide].background;
  }
  
  //loops back arount to first slide of we go out of bounds
  function navigateCarousel(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    updateCarousel();
  }
  
  // Initialize the carousel
window.onload = () => {
    updateCarousel();
};