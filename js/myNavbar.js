/* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "nav__list") {
      x.className += " responsive";
    } else {
      x.className = "nav__list";
    }
  }