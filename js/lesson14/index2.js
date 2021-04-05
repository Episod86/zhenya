'use strict';

const redEl = document.querySelector('#first');
redEl.style.backgroundColor = 'red';

const blueEl = document.querySelector('#second');
blueEl.style.backgroundColor = 'blue';

const colorEl = document.querySelectorAll('.yellow');
for (let i = 0; i < colorEl.length; i++) {
    if (i === 0 || i === colorEl.length - 1) {
        colorEl[i].style.backgroundColor = 'yellow'
    } else {
        colorEl[i].style.backgroundColor = 'green'
    };
};

