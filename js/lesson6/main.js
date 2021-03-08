"use strict"

// Задание 1 
function showMessage() {
   let message = (age > 16) ? 'добро пожаловать' : 'вы еще молоды';
   return alert(message);
}
let age = +prompt('Сколько Вам лет?');
showMessage(age);


// Задание 2 
function showNumber() {
   return alert((number > 10) ? (`${(number ** 2)}`) : (number == (8 || 9)) ? (`${--number}`) : (`Число меньше 7`));
};
let number = +prompt('Введите число');
showNumber();


// Задание 3 
function calcMin() {
    let minNumber = Math.min(a, b, c);
    alert(minNumber);
}
let a = +prompt('Введите любое число');
let b = +prompt('Введите любое число');
let c = +prompt('Введите любое число');
calcMin();

// Задание 4 

function calcDegree() {
    let numDegree = Math.pow(num, degree);
    return alert(numDegree)
}
let num = +prompt('Введите любое число');
let degree = +prompt('Введите степень, в которую необходимо возвести число');
calcDegree();

// Задание 5 
function calcCircumference() {
    let L = 2 * π * R;
    alert (L);
};
const π = 3.14;
const R = +prompt('Введите радиус окружности');
calcCircumference();

// Задание 6 *(по желанию)
function calcLength() {
   do {
      N = N / 10;
      i++
   } while (N > 1);  
   return alert(`${i}`);   
}

let N, controlN, i = 0
while (controlN != true) {
   N = +prompt('Введите число');
   controlN = (N >0) ? true : false;
}   
calcLength(N);