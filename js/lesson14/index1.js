'use strict';

const element = document.querySelector('table');

for (let i = 0; i < element.rows.length; i++) {
  let row = element.rows[i];  
  row.cells[i].style.backgroundColor = 'red';
  row.cells[element.rows.length - 1 - i].style.backgroundColor = 'red';
}