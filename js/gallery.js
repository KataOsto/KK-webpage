// Obsługa galerii obrazków z przyciskami nawigacyjnymi
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  const images = Array.from(project.querySelectorAll('.gallery-image'));
  let currentIndex = 0;

  // Funkcja aktualizująca widoczność obrazków
  function updateGallery() {
    images.forEach((img, index) => {
      img.style.display = (index === currentIndex) ? 'block' : 'none';
    });
  }

  // Początkowe ustawienie
  updateGallery();

  const arrowLeft = project.querySelector('.arrow-left');
  const arrowRight = project.querySelector('.arrow-right');

  arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateGallery();
  });

  arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateGallery();
  });

  // Opcjonalnie: obsługa kliknięcia na obrazek
  images.forEach(image => {
    image.addEventListener('click', () => {
      console.log('Kliknięto obrazek:', image.src);
    });
  });

  // Obsługa przycisku rozwijania tekstu
  const readMoreBtn = project.querySelector('.read-more-btn');
  const longText = project.querySelector('.long-text');

  // Ustawienie początkowego tekstu przycisku
  readMoreBtn.textContent = 'Czytaj więcej';

  readMoreBtn.addEventListener('click', () => {
    longText.classList.toggle('expanded');
    readMoreBtn.textContent = longText.classList.contains('expanded') ? 'Czytaj mniej' : 'Czytaj więcej';
  });
});
