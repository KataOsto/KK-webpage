const projectGrid = document.querySelector('.project--grid');
const projectElements = projectGrid.querySelectorAll('.project');
const showMoreBtn = document.querySelector('.btn--accent--project');

if (showMoreBtn) {
    let showAllProjects = false;

    showMoreBtn.addEventListener('click', () => {
        showAllProjects = !showAllProjects;

        projectElements.forEach((project, index) => {
            if (showAllProjects || index < 2) {
                project.classList.remove('animate__fadeOutDown', 'animate__animated');
                project.classList.add('animate__fadeInUp', 'animate__animated');
                project.style.display = 'block';
            } else {
                project.classList.remove('animate__fadeInUp');
                project.classList.add('animate__fadeOutDown', 'animate__animated');
                setTimeout(() => {
                    project.style.display = 'none';
                }, 1000); // Czekaj 1000ms (czas trwania animacji)
            }
        });

        showMoreBtn.textContent = showAllProjects ? 'Pokaż mniej' : 'Pokaż więcej';
    });
} else {
    console.error('Nie znaleziono przycisku z klasą .btn--accent--project');
}