'use strict';

const colorEl = document.querySelectorAll('ul > li');

for (let i = 0; i < colorEl.length; i++) {
    switch(i) {
        case 0: 
            colorEl[i].style.backgroundColor = 'blue';
            break;
        case 1:
            colorEl[i].style.backgroundColor = 'green';
            break;
        case 2:
            colorEl[i].style.backgroundColor = 'yellow';
            break;
        default:
            colorEl[i].style.backgroundColor = 'orange';
            break;
    };
};