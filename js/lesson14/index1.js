'use strict';

const element = document.querySelector('table');
console.log(element.rows)

    for (let i = 0; i < element.rows.length; i++) {
      let row = element.rows[i];
    //   let row2 = 
      console.log(row)
      row.cells[i].style.backgroundColor = 'red';
      row.cells[element.rows.length - 1-i].style.backgroundColor = 'red';
    }