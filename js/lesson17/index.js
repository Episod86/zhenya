'use strict'

const counter = document.querySelector('.counter');
const startButton = document.querySelector('.button');
const startInput = document.querySelector('.start');
const endInput = document.querySelector('.end');

let a = 0;
let b = 0;

let active;


startButton.addEventListener('click', () => {

    if (startButton.classList.contains("counter-active")) {
        if (startButton.value === 'Пуск') {
            // startButton.classList.toggle("counter-active")
            startButton.value = 'Пауза'
            active = true;
        } else {
            // if (from = to) {
            startButton.classList.remove("counter-active")
            // }
            startButton.value = 'Пуск';
            active = false;
        };
        printNumber(a, b);
    } else {
        getNumbers()

    }


});

const printNumber = (from, to) => {
    let timerId = setInterval(() => {
        if (from === to || !(active)) {
            if (from = to) {
                startButton.classList.remove("counter-active")
            }
            clearInterval(timerId);
        } else {
            counter.innerHTML = `Отсчет пошел: ${from}`;
            from--;
            a = from;
        }
    }, 1000);
};
const getNumbers = () => {
    if (!startInput.value || !endInput.value) {
        return alert('error1')
    } else {
        a = Number(startInput.value)
        b = Number(endInput.value)
        if (a === 0 || a <= b) {
            return alert('error2')
        } else {
            startButton.classList.add("counter-active")
        }
    }

}
