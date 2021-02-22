'use strict';

// задание 1
if (prompt('Каково «официальное» название JavaScript?','') == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? «ECMAScript»!');
};

// задание 2
let number = prompt('Введите любое число', '')

if (number > 0 ) {
    alert(`Число ${number} является положительным`);
} else if (number < 0 ) {
    alert(`Число ${number} является отрицательным`);
} else if (number === 0 ) {
    alert('Число равно 0');
} else {
    alert('Введенное значение не является числом');
};

// задание 3 
let hour = new Date().getHours();
let timeDay;
if (hour >= 6 && hour <= 10){
    timeDay = 'Доброе утро';
} else if(hour >= 11 && hour <= 17) {
    timeDay = 'Добрый день' ;
} else if(hour >= 18 && hour <= 23) {
    timeDay = 'Добрый вечер';
} else {
    timeDay = 'Доброй ночи';
};
let userName = prompt('Введите Ваше имя', '');
alert(`${timeDay}, ${userName}!`)

// задание 4
let numberFirst = prompt('Введите первое число','');
let numberSecond = prompt('Введите второе число','');

let message = (numberFirst > numberSecond) ? 1 :
  (numberFirst < numberSecond) ? 2 : 0;
alert( message );

// задание 5
let numberFirst = prompt('Введите первое число','');
let numberSecond = prompt('Введите второе число','');
let numberThird = prompt('Введите третье число','');

let message = ((numberFirst > numberSecond) && (numberFirst > numberThird)) ? numberFirst :
  ((numberSecond > numberFirst) && (numberSecond > numberThird)) ? numberSecond : numberThird;
alert( Math.round(message));