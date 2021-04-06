'use strict';

languages.hidden = true;

const element = document.querySelectorAll('#languages > li')
console.log(element);


for (let li = 0; li < element.length; li++) {
    alert(element[li].textContent);
}