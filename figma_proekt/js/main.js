'use strict'

(function () {
    const header = document.querySelector('.menu');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('.js_menu');
        }
        else if (header.classList.contains("js_menu")) {
            header.classList.remove("js_menu");
        }
    };
} () );