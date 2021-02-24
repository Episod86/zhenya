"use strict";

(function () {
  const header = document.querySelector(".js_menu");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("menu_active");
    } else if (header.classList.contains("menu_active")) {
      header.classList.remove("menu_active");
    }
  };
})();  



(function () {
  const burgerItems = document.querySelector(".burger");
  const navMenu = document.querySelector(".header_nav");
  burgerItems.addEventListener ("click", () => {
    navMenu.classList.toggle("header_nav_active");
    burgerItems.classList.toggle("burger_active");
  });
}) ();



(function () {
  const burgerItems = document.querySelector(".burger");
  const navMenu = document.querySelector(".header_nav");
  const navLinks = document.querySelectorAll(".header_nav_list a");
  burgerItems.addEventListener("click", () => {
    navMenu.classList.toggle("header_nav_active");
    burgerItems.classList.toggle("burger_active");
  });
  if (window.innerWidth <= 830) {
    for (let i = 0; i < navLinks.length; i += 1) {
      navLinks[i].addEventListener("click", () => {
        navMenu.classList.remove("header_nav_active");
        burgerItems.classList.remove("burger_active");
      });
    }
  }
})();


