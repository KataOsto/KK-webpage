const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

let currentIndex = 0;

arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
});

arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
});

function updateGallery() {
    gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
}