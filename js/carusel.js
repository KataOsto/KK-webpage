const carousel = document.querySelector('.tags__carousel');

if (carousel) {
    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 50; // Zmniejszamy interwał, aby karuzela przesuwała się płynniej
    let autoScrollInterval;

    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            scrollAmount += scrollStep;
            carousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
            if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
                scrollAmount = 0;
                carousel.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        }, scrollInterval);
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    startAutoScroll();

    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', startAutoScroll);
} else {
    console.error('Element .tags__carousel nie został znaleziony.');
}