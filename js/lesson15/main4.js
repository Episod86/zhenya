'use strict';

const elementTr = document.querySelectorAll('tr');
console.log(elementTr);
for (let i = 0; i < elementTr.length - 1; i++) {                     
    if (elementTr[i].innerHTML === elementTr[i + 1].innerHTML) {         // а так вообще можно?
        elementTr[i + 1].remove(); 
    };   
};

const elNumericClone = document.querySelector('#violet').cloneNode(true); // клонируем 1-ую строку таблицы в переменную
elNumericClone.removeAttribute('id');
elNumericClone.classList.add('yellow');

const table =  document.querySelector('#graphik > tbody');
table.append(elNumericClone);                                             // вставляем узел
// вставляем HTML    
table.insertAdjacentHTML('afterbegin', '<tr class="yellow"><td></td><td colspan="31">График дежурств сотрудников на август 2020 года</td></tr>');

