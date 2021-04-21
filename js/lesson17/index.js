'use strict'

const counter = document.querySelector('.counter');
const startButton = document.querySelector('.button');
const inputNumber = document.querySelectorAll('.number-start');


// for (let i = 0; i < inputNumber.length; i++) {
//     console.log(Number(inputNumber[i].getAttribute('value')))
// };

// const inputFrom = () => {
//     do {
//         a = Number(inputNumber[0].value);
//     } while (a <= 0);
//     return a; 
// };
let a, b;


let active;

startButton.addEventListener('click', () => {
    if (!(inputNumber[0].value)) {
        alert ('Введите начальное значение') 
    }
    a = inputFrom();
    console.log(inputNumber[0].value)
    console.log(Number(inputNumber[0].value))
    if (startButton.value === 'Пуск') {
        startButton.value = 'Пауза'
        active = true;
        if (a == 0) {
            a = Number(inputNumber[0].value);
            b = Number(inputNumber[0].value);
        }    
    } else {
        startButton.value = 'Пуск';
        active = false;
    };
    printNumber(a, b);
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
