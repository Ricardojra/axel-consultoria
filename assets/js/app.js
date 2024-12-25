// Script to alternate hamburger menu
const hamburgerMenu = document.getElementById("hamburger-menu");
const nav = document.querySelector("nav");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("active"); // Toggle 'active' class to show/hide the menu
});

// Testimonials carousel variables
let currentSlide = 0;
const testimonials = document.querySelectorAll(".testimonial");
const totalSlides = testimonials.length;

// Function to update the carousel slides
function updateSlides() {
  testimonials.forEach((testimonial, index) => {
    testimonial.style.display = index === currentSlide ? "flex" : "none";
  });
}

// Functions to go to next and previous slides
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the start
  updateSlides();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop to the last slide
  updateSlides();
}

// Initialize the carousel on page load
updateSlides();

// Auto-advance slides every 5 seconds
setInterval(nextSlide, 5000);

