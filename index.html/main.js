// change navbar styles on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

var swiper = new swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//  ope and colse button

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.dispaly = "flex";
  closeBtn.style.dispaly = "none";
  menuBtn.style.dispaly = "none";
});

// close nav menu

const closeNav = () => {
  menu.style.dispaly = "none";
  closeBtn.style.dispaly = "none";
  menuBtn.style.dispaly = "inline-bock";
};

closeBtn.addEventListener("click", closeNav);
