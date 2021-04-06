'use strict';

const element = document.querySelector('div');
console.log(element);

alert(element.innerHTML); 
alert(element.outerHTML); 
 
element.innerHTML += 'Простота — залог надежности';

alert(element.innerHTML);


