'use strict';
// Задание 7* (По желанию)

const number = +prompt('Введите целое число от 100 до 999');
let nameNumber = '';

switch (true) {
    case (number >= 100 && number < 200):
        nameNumber = 'Сто';
        remainder = number - 100;
        break;
    case (number >= 200 && number < 300):
        nameNumber = 'Двести';
        remainder = number - 200;
        break;
    case (number >= 300 && number < 400):
        nameNumber = 'Триста';
        break;
    case (number >= 400 && number < 500):
        nameNumber = 'Четыреста';
        break;
    case (number >= 500 && number < 600):
        nameNumber = 'Пятьсот';
        break;
    case (number >= 600 && number < 700):
        nameNumber = 'Шестьсот';
        break;
    case (number >= 700 && number < 800):
        nameNumber = 'Семьсот';
        break;
    case (number >= 800 && number < 900):
        nameNumber = 'Восемьсот';
        break;
    case (number >= 900 && number < 1000):
        nameNumber = 'Девятьсот';
        break;
    default:
};

let dozens = (number % 100);
let units = (number % 10);
if (dozens >=20) {
    switch (true) {
        case (dozens >= 20 && dozens < 30):
            nameNumber = `${nameNumber} двадцать`;
            break;
        case (dozens >= 30 && dozens < 40):
            nameNumber = `${nameNumber} тридцать`;
            break;
        case (dozens >= 40 && dozens < 50):
            nameNumber = `${nameNumber} сорок`;
            break;
        case (dozens >= 50 && dozens < 60):
            nameNumber = `${nameNumber} пятьдесят`;
            break;
        case (dozens >= 60 && dozens < 70):
            nameNumber = `${nameNumber} шестьдесят`;
            break;
        case (dozens >= 70 && dozens < 80):
            nameNumber = `${nameNumber} семьдесят`;
            break;
        case (dozens >= 80 && dozens < 90):
            nameNumber = `${nameNumber} восемьдесят`;
            break;
        case (dozens >= 90 && dozens < 100):
            nameNumber = `${nameNumber} девяносто`;
            break;
        default:
    }; 
} else if (dozens >=10) {
    switch (dozens) {
        case 11:
            nameNumber = `${nameNumber} одинадцать`;
            break;
        case 12:
            nameNumber = `${nameNumber} двенадцать`;
            break;
        case 13:
            nameNumber = `${nameNumber} тринадцать`;
            break;
        case 14:
            nameNumber = `${nameNumber} четырнадцать`;
            break;
        case 15:
            nameNumber = `${nameNumber} пятнадцать`;
            break;
        case 16:
            nameNumber = `${nameNumber} шестнадцать`;
            break;
        case 17:
            nameNumber = `${nameNumber} семнадцать`;
            break;
        case 18:
            nameNumber = `${nameNumber} восемнадцать`;
            break;
        case 19:
            nameNumber = `${nameNumber} деввятнадцать`;
            break;
        default:
            nameNumber = `${nameNumber} десять`;
    };
    units = 0;
};
if (units != 0) {
    switch (units) {
        case 1:
            nameNumber = `${nameNumber} один`;
            break;
        case 2:
            nameNumber = `${nameNumber} два`;
            break;
        case 3:
            nameNumber = `${nameNumber} три`;
            break;
        case 4:
            nameNumber = `${nameNumber} четыре`;
            break;
        case 5:
            nameNumber = `${nameNumber} пять`;
            break;
        case 6:
            nameNumber = `${nameNumber} шесть`;
            break;
        case 7:
            nameNumber = `${nameNumber} семь`;
            break;
        case 8:
            nameNumber = `${nameNumber} восемь`;
            break;
        default:
            nameNumber = `${nameNumber} девять`;
    };
};
alert(`${nameNumber}`)