'use strict';

// Задание1.
let mesage, i = 1;
while (i <=9) {
    (i === 1) ? mesage = `        Квадрат   ${i} =  ${i ** 2}` : 
        mesage = `${mesage}
        Квадрат   ${i} =  ${i ** 2}`;   
    i ++;
};
alert(mesage);


// Задание2.
const number = +prompt('Введите целое положительное число');
for (let i = 2; i <= number * 2; i = i + 2) {
    if (i % 5 != 0) {
        alert ( i )
    };
};

// Задание3.
let num, numberSum = 0;
while (num = +prompt('Введите число')) {
    numberSum = numberSum + num;
}
alert (numberSum);


// Задание4.
const n = +prompt('Введите целое положительное число');
let sumN = 0;
for (let i = 0; i <= n; i++) {
    sumN = sumN + i;
}
alert (sumN);

// Задание 5
const x = +prompt('Введите целое положительное число');
for (let i = 1; i <= x; i++) {
    if ( x % i == 0) {
        alert (i);
    };    
};

// Задание 6 
const y = +prompt('Введите целое положительное число');
let sumDigit;
let one, two;
for (let i = 10; (i < 100); i++) {   
    if ((Math.trunc(i / 10) + (i % 10)) === y) {
        alert( i )
    };
};

// Как перевести число в строку, потом выделить из строки нужный символ и перевести его обратно в число?
// пробовала substr, но что то пошло не так)