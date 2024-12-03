let slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1]; // Tablica dla indeksów slajdów dla 9 slajdów
let slideId = ["slideshow1", "slideshow2", "slideshow3", "slideshow4", "slideshow5", "slideshow6", "slideshow7", "slideshow8", "slideshow9"]; // Tablica ID dla slajdów

// Pokazuje pierwsze slajdy dla wszystkich projektów
for (let i = 0; i < slideIndex.length; i++) {
    showSlides(1, i); 
}

// Next/previous controls
function plusSlides(n, slideshowIndex) {
    showSlides(slideIndex[slideshowIndex] += n, slideshowIndex);
}

// Funkcja do pokazywania slajdów
function showSlides(n, slideshowIndex) {
    let i;
    let slides = document.querySelectorAll(`.mySlides[data-slideshow="${slideshowIndex + 1}"]`); // Wybiera odpowiednie slajdy

    if (n > slides.length) { slideIndex[slideshowIndex] = 1; }
    if (n < 1) { slideIndex[slideshowIndex] = slides.length; }

    // Ukrywa wszystkie slajdy
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex[slideshowIndex] - 1].style.display = "block"; // Wyświetl aktywny slajd
}