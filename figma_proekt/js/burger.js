"use strict";

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