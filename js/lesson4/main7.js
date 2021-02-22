'use strict';
// Задание 7* (По желанию)

const number = +prompt('Введите целое число от 100 до 999');
let nameNumber = '';
let hundreds = Math.trunc(number / 100);
let dozens = Math.trunc((number - hundreds * 100) / 10);
let units = (number % 10);

switch (hundreds) {
    case 1:
        nameNumber = 'Сто';
        break;
    case 2:
        nameNumber = 'Двести';
        break;
    case 3:
        nameNumber = 'Триста';
        break;
    case 4:
        nameNumber = 'Четыреста';
        break;
    case 5:
        nameNumber = 'Пятьсот';
        break;
    case 6:
        nameNumber = 'Шестьсот';
        break;
    case 7:
        nameNumber = 'Семьсот';
        break;
    case 8:
        nameNumber = 'Восемьсот';
        break;
    case 9:
        nameNumber = 'Девятьсот';
        break;
    default:
};

switch (dozens) {
    case 2:
        nameNumber = `${nameNumber} двадцать`;
        break;
    case 3:
        nameNumber = `${nameNumber} тридцать`;
        break;
    case 4:
        nameNumber = `${nameNumber} сорок`;
        break;
    case 5:
        nameNumber = `${nameNumber} пятьдесят`;
        break;
    case 6:
        nameNumber = `${nameNumber} шестьдесят`;
        break;
    case 7:
        nameNumber = `${nameNumber} семьдесят`;
        break;
    case 8:
        nameNumber = `${nameNumber} восемьдесят`;
        break;
    case 9:
        nameNumber = `${nameNumber} девяносто`;
        break;
    case 1: 
        dozens = (number % 100);
        units = 0;
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
    default:
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