'use strict';
// задание 6
const n = +prompt('Введите длину шоколадки'); 
const m = +prompt('Введите ширину шоколадки');
const k = +prompt('Сколько долек Вы хотите отломить?');  
if ((k < m * n) && ((k % n === 0) || (k % n === 0))) {
    alert('Можно');
} else {
    alert('Нельзя');
};

// задание 7

const tripsOne = 1, tripsTen = 10, tripsSixty = 60;
const priceOne = 15, priceTen = 125, priceSixty = 440;
const quant = +prompt('Какое количество поездок вы планиурете совершить?');
let numOne = 0, numTen = 0, numSixty = 0, remainTrips;

remainTrips = quant;
numSixty = Math.trunc(remainTrips / tripsSixty);
remainTrips = quant - numSixty * tripsSixty;

numTen = Math.trunc(remainTrips / tripsTen);
remainTrips = quant - numSixty * tripsSixty - numTen * tripsTen;

if (remainTrips <= Math.trunc(priceTen / priceOne)) {
    numOne = remainTrips; 
} else {
    numTen ++;
};

if ((numTen * priceTen) > priceSixty){
    numSixty ++;
    numTen = 0;
    if  (quant - (numSixty * tripsSixty) > 0) {
        numOne = quant - (numSixty * tripsSixty);
    } else {
        numOne = 0;
    };
};

alert(`${numOne} билетов на 1 поездку, ${numTen} билетов на 10 поездок,${numSixty} билетов на 60 поездок`);
