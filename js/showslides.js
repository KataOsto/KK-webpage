let slideIndex = [1, 1]; // Tablica dla indeksów slajdów
let slideId = ["slideshow1", "slideshow2"]; // Tablica ID dla slajdów

// Pokazuje pierwsze slajdy dla obu projektów
showSlides(1, 0); 
showSlides(1, 1); 

// Next/previous controls
function plusSlides(n, slideshowIndex) {
    showSlides(slideIndex[slideshowIndex] += n, slideshowIndex);
}

// Funkcja do pokazywania slajdów
function showSlides(n, slideshowIndex) {
    let i;
    let slides = document.querySelectorAll(`.mySlides[data-slideshow="${slideshowIndex + 1}"]`); // Wybiera odpowiednie slajdy
    let dots = document.getElementsByClassName("dot"); // Jeżeli używasz kropek do nawigacji

    if (n > slides.length) { slideIndex[slideshowIndex] = 1; }
    if (n < 1) { slideIndex[slideshowIndex] = slides.length; }

    // Ukrywa wszystkie slajdy
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex[slideshowIndex] - 1].style.display = "block"; // Wyświetl aktywny slajd
}