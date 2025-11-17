// Select all slides 
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

//Function to go to a specific slide 
function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length; // loop around
  slides[currentSlide].classList.add('active');
}

//Auto change every 4 seconds 
let autoSlide = setInterval(() => showSlide(currentSlide + 1), 4000);

// Swipe / Drag controls 
let startX = 0;
let isDragging = false;

// Start dragging
document.querySelector('.hero-slider').addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  isDragging = true;
  clearInterval(autoSlide); // pause auto when dragging
});

// End dragging
document.querySelector('.hero-slider').addEventListener('touchend', e => {
  if (!isDragging) return;
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (Math.abs(diff) > 50) { // swipe threshold
    if (diff > 0) showSlide(currentSlide + 1);   // swipe left → next
    else showSlide(currentSlide - 1);            // swipe right → previous
  }

  isDragging = false;
  autoSlide = setInterval(() => showSlide(currentSlide + 1), 4000); // resume auto
});

//  drag with mouse 
let mouseStart = 0;
document.querySelector('.hero-slider').addEventListener('mousedown', e => {
  mouseStart = e.clientX;
  isDragging = true;
  clearInterval(autoSlide);
});

document.querySelector('.hero-slider').addEventListener('mouseup', e => {
  if (!isDragging) return;
  const diff = mouseStart - e.clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) showSlide(currentSlide + 1);
    else showSlide(currentSlide - 1);
  }
  isDragging = false;
  autoSlide = setInterval(() => showSlide(currentSlide + 1), 4000);
});
