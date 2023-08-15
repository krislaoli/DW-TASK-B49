let hamburNavOpen = false;

function openNav() {
  let hamburNavbar = document.getElementById("hamburger-nav-container");

  if (!hamburNavOpen) {
    hamburNavbar.style.display = "block";
    hamburNavOpen = true;
  } else {
    hamburNavbar.style.display = "none";
    hamburNavOpen = false;
  }
}
