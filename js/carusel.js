const carousel = document.querySelector('.tags__carousel');

if (carousel) {
    let scrollPosition = 0;
    const speed = 0.5;

    function autoScroll() {
        scrollPosition += speed;
        if (scrollPosition >= carousel.scrollWidth - carousel.clientWidth) {
            scrollPosition = 0;
        }
        carousel.scrollLeft = scrollPosition;
        requestAnimationFrame(autoScroll);
    }

    carousel.addEventListener('mouseenter', () => carousel.dataset.hover = 'true');
    carousel.addEventListener('mouseleave', () => {
        carousel.dataset.hover = 'false';
        requestAnimationFrame(autoScroll);
    });

    requestAnimationFrame(autoScroll);
} else {
    console.error('Element .tags__carousel nie został znaleziony.');
}
