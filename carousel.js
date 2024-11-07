const carousel = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;
const totalItems = carouselItems.length;
const itemsPerPage = 2; // Show two items per page

function showCarousel() {
  // Calculate the width of items and set transform accordingly
  const itemWidth = carouselItems[0].clientWidth;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

nextButton.addEventListener('click', () => {
  if (currentIndex < totalItems - itemsPerPage) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the beginning
  }
  showCarousel();
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - itemsPerPage; // Loop back to the end
  }
  showCarousel();
});

window.addEventListener('resize', showCarousel); // Adjust when resizing
