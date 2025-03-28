const navToggler = document.querySelector('.nav__toggler');
const navList = document.querySelector('.nav__list');

navToggler.addEventListener('click', () => {
    navList.classList.toggle('active');
});


const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);