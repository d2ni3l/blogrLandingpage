const mobileNav = document.getElementById("mobile-nav");
const btnMenu = document.getElementById("btn-menu");

let show = true;
function showMenu() {
  if (show) {
    mobileNav.style.display = "block";
    show = false;
  } else {
    mobileNav.style.display = "none";
    show = true;
  }
}

btnMenu.addEventListener("click", showMenu);

const dropDown1 = document.getElementById("dropdownMenu1");
const dropdownLink1 = document.getElementById("dropdownLink1");

let showDropdown1 = true;

function dropDown1Show() {
  if (showDropdown1) {
    dropDown1.style.display = "block";
    showDropdown1 = false;
  } else {
    dropDown1.style.display = "none";
    showDropdown1 = true;
  }
}

dropdownLink1.addEventListener("click", dropDown1Show);

const dropDown2 = document.getElementById("dropdownMenu2");
const dropdownLink2 = document.getElementById("dropdownLink2");

let showDropdown2 = true;

function dropDown2Show() {
  if (showDropdown2) {
    dropDown2.style.display = "block";
    showDropdown2 = false;
  } else {
    dropDown2.style.display = "none";
    showDropdown2 = true;
  }
}

dropdownLink2.addEventListener("click", dropDown2Show);

const dropDown3 = document.getElementById("dropdownMenu3");
const dropdownLink3 = document.getElementById("dropdownLink3");

let showDropdown3 = true;

function dropDown3Show() {
  if (showDropdown3) {
    dropDown3.style.display = "block";
    showDropdown3 = false;
  } else {
    dropDown3.style.display = "none";
    showDropdown3 = true;
  }
}

dropdownLink3.addEventListener("click", dropDown3Show);
