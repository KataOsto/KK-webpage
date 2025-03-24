const navToggler = document.querySelector('.nav__toggler');
const navList = document.querySelector('.nav__list');

navToggler.addEventListener('click', () => {
    navList.classList.toggle('active');
});