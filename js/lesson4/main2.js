'use strict';

// задание 1 
let number = +prompt('Введите номер месяца','')
switch (number) {
    case 1:
    case 2:
    case 12:
        alert('Время года - зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Время года - весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('Время года - лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('Время года - осень');
        break;
    default:
        alert('Введенное значение не соответствует условию');  
};


// Задание 2
let integer = +prompt('Введите целое число от 0 до 9','')
switch (integer) {
    case 0:
        alert('ноль');
        break;
    case 1:
        alert('один');
        break;
    case 2:
        alert('два');
        break;    
    case 3:
        alert('три');
        break; 
    case 4:
        alert('четыре');
        break; 
    case 5:
        alert('пять');
        break;
    case 6:
        alert('шесть');
        break; 
    case 7:
        alert('семь');
        break; 
    case 8:
        alert('восемь');
        break;
    case 9:
        alert('девять');
        break;
    default:
        alert('Введенное значение не соответствует условию');  
};


// Задание 3
let hour = new Date().getHours();

switch (true) {
    case (hour >= 6 && hour <= 10):
        alert ('Доброе утро');
        break;   
    case (hour >= 11 && hour <= 17):
        alert ('Добрый день');
        break;
    case (hour >= 18 && hour <= 23):
        alert ('Добрый вечер');
        break; 
    default:
        alert ('Доброй ночи');
};


// Задание 4
let appraisal = +prompt('Введите целое число от 1 до 5','')
switch (appraisal) {
    case 1:
        alert('плохо');
        break;
    case 2:
        alert('неудовлетворительно');
        break;    
    case 3:
        alert('удовлетворительно');
        break; 
    case 4:
        alert('хорошо');
        break; 
    case 5:
        alert('отлично');
        break;
    default:
        alert('Введенное значение не соответствует условию');  
};

// Задание 5
let N = +prompt('Введите номер единицы длины от 1 до 5','')
let L = +prompt('Длина отрезка','')
switch (N) {
    case 1:
        alert(`Длина отрезка ${L / 10} м.`);
        break;
    case 2:
        alert(`Длина отрезка ${L * 1000} м.`);
        break;   
    case 3:
        alert(`Длина отрезка ${L} м.`);
        break; 
    case 4:
        alert(`Длина отрезка ${L / 1000} м.`);
        break; 
    case 4:
        alert(`Длина отрезка ${L / 100} м.`);
        break;  
    default:
        alert('Введенное значение не соответствует условию');  
};

// Задание 6
const dayMonth = 30;
let numberDay = '', i;
let day = prompt('Введите день недели','');

switch (day) {
    case 'Понедельник':
        i = 1;
        while (i <= dayMonth) {
            numberDay = `${numberDay} ${i} `
            i = i + 7;
        };
        alert(`${numberDay}`);
        break;
    case 'Вторник':
        i = 2;
        while (i <= dayMonth) {
            numberDay = `${numberDay} ${i} `
            i = i + 7;
        };
        alert(`${numberDay}`);
        break;
    case 'Среда':
        i = 3;
        while (i <= dayMonth) {
            numberDay = `${numberDay} ${i} `
            i = i + 7;
        };
        alert(`${numberDay}`);
        break;
    case 'Четверг':
        i = 4;
        while (i <= dayMonth) {
            numberDay = `${numberDay} ${i} `
            i = i + 7;
        };
        alert(`${numberDay}`);
        break;
    case 'Пятница':
        i = 5;
        while (i <= dayMonth) {
            numberDay = `${numberDay} ${i} `
            i = i + 7;
        };
        alert(`${numberDay}`);
        break;
    case 'Суббота':
        i = 6;
        while (i <= dayMonth) {
            numberDay = `${numberDay} ${i} `
            i = i + 7;
        };
        alert(`${numberDay}`);
        break;
    case 'Воскресенье':
        i = 7;
        while (i <= dayMonth) {
            numberDay = `${numberDay} ${i} `
            i = i + 7;
        };
        alert(`${numberDay}`);
        break;
    default:
        alert('Введенное значение не соответствует условию');

};