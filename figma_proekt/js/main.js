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
