// Get all the slides

var slides = document.querySelectorAll('.slide');

// Set the initial slide index to 0

var currentSlideIndex = 0;

// Show the first slide

slides[currentSlideIndex].classList.add('active');

// Set an interval to show the next slide every 3 seconds

setInterval(function() {

  // Hide the current slide

  slides[currentSlideIndex].classList.remove('active');

  // Move to the next slide

  currentSlideIndex = (currentSlideIndex + 1) % slides.length;

  // Show the next slide

  slides[currentSlideIndex].classList.add('active');

}, 4000);
