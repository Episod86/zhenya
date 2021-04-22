'use strict'

const counter = document.querySelector('.counter');
const startButton = document.querySelector('.button');
const start = document.querySelector('.start');
const end = document.querySelector('.end');


let a = 0;
let b = 0;


let active;

startButton.addEventListener('click', () => {
    getNumber()
    if (false) {
        alert('ddddd')
    } else {
        if (startButton.value === 'Пуск') {
            startButton.value = 'Пауза'
            active = true;
        } else {
            startButton.value = 'Пуск';
            active = false;
        };
        printNumber(a, b);

    }


});

const printNumber = (from, to) => {
    let timerId = setInterval(() => {
        if (from === to || !(active)) {
            clearInterval(timerId);
        } else {
            counter.innerHTML = `Отсчет пошел: ${from}`;
            from--;
            a = from;
        }
    }, 1000);
};
const getNumber = () => {

    if (!(start.value) || !(end.value) || a === 0 || a <= b) {
        return false;
    } else {
        a = Number(start.value)
        b = Number(end.value)
        return true
    }
}
