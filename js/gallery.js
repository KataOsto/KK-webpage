// Obsługa image-gallery dla każdego projektu
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    const galleryImages = project.querySelectorAll('.gallery img');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            console.log('Obrazek kliknięty:', image.src);
        });
    });
});

// Obsługa read-more-btn dla każdego projektu
projects.forEach(project => {
    const readMoreBtn = project.querySelector('.read-more-btn');
    const longText = project.querySelector('.long-text');

    readMoreBtn.addEventListener('click', () => {
        longText.classList.toggle('expanded');
        readMoreBtn.textContent = longText.classList.contains('expanded') ? 'Czytaj mniej' : 'Czytaj więcej';
    });
});