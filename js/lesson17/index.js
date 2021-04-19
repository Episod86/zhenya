'use strict'

document.body.insertAdjacentHTML('afterbegin', '<div class = "counter"></div><input type="button">');
const counter = document.querySelector('.counter');
const startButton = document.querySelector('input')
let a, b;

const printNumber = (from, to) => {
    let timerId = setInterval(() => {
        counter.innerHTML = `Отсчет пошел: ${from}`;
        if (from === to) {
            clearInterval(timerId);
            counter.innerHTML = '<img src="bang.gif" alt="Взрыв">';
        };
        from--;
    }, 1000);
};

do {
    a = +prompt('Введите начало отсчета', 0);
} while (isNaN(a) && a <= 0);
do {
    b = +prompt('Введите конечную цифру', 0);
} while (isNaN(b) && b < 0 && b > a);

startButton.addEventListener('click', () => printNumber(a, b));
printNumber(a,b);