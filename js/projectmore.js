const projectGrid = document.querySelector('.project--grid');
const projectElements = projectGrid.querySelectorAll('.project');
const showMoreBtn = document.querySelector('.btn--accent--project');

const animationDuration = 500; // czas animacji w ms

if (showMoreBtn) {
    let showAllProjects = false;

    const updateProjectsVisibility = () => {
        projectElements.forEach((project, index) => {
            if (showAllProjects || index < 2) {
                project.style.display = 'block';
                project.classList.remove('animate__fadeOutDown');
                project.classList.add('animate__animated', 'animate__fadeInUp');
            } else {
                project.classList.remove('animate__fadeInUp');
                project.classList.add('animate__animated', 'animate__fadeOutDown');
                setTimeout(() => {
                    project.style.display = 'none';
                }, animationDuration);
            }
        });
        showMoreBtn.textContent = showAllProjects ? 'Pokaż mniej' : 'Pokaż więcej';
    };

    // Ustawienie początkowe
    updateProjectsVisibility();

    showMoreBtn.addEventListener('click', () => {
        showAllProjects = !showAllProjects;
        updateProjectsVisibility();
    });
} else {
    console.error('Nie znaleziono przycisku z klasą .btn--accent--project');
}