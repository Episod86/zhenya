'use strict'

const element = document.querySelector('input');

element.setAttribute('id', 'button');
console.log(`${element.hasAttribute('id')} ${element.getAttribute('id')}`);

element.setAttribute('value', 'Жми')
console.log(`${element.hasAttribute('value')} ${element.getAttribute('value')}`);

console.log(`${element.hasAttribute('maxlength')} ${element.getAttribute('maxlength')}`);

element.setAttribute('type', 'button');

element.setAttribute('onclick', 'alert("Привет!!!")');

element.removeAttribute('maxlength');
console.log(element.hasAttribute('maxlength'));

