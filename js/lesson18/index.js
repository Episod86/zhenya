'use strict'

const counter = document.querySelector('.counter');
const startButton = document.querySelector('.button');
const inputNumber = document.querySelectorAll('.input-point')
const inputError = document.querySelectorAll('.error');
const inputMess = document.querySelectorAll('input');

let startNumber;
let endNumber;

const checkCorrect = (i) => {
    let n = (i === 0) ? 1 : 0;
    if (!inputNumber[n].value) {
        inputMess[n].innerHTML = `Введите  ${(n === 0) ?  'начальное' : 'конечное'} значение`;
    } else {
        a = Number(inputNumber[0].value);
        b = Number(inputNumber[1].value);
        if (a === 0 || a <= b) { 
            inputMess[i].innerHTML = `Значение должно быть  ${(n === 1) ?  ' больше 0 и больше конечного значения' : 
            'меньше начального, но не меньше 0'}`;
        } else {
            for(i = 0; i < inputNumber.length; i++) {
                inputNumber[i].setAttribute('disabled','disabled');
                inputMess[i].innerHTML = '';
            };
            startButton.removeAttribute('disabled');
        };
    };    
};

const printNumber = (from, to) => {
    let timerId = setInterval(() => {
        if (from === to || !(counter.classList.contains("counter-active"))) {
            if (from === to) {
                startButton.setAttribute('disabled','disabled');
                startButton.value = 'Пуск';
                for(let i = 0; i < inputNumber.length; i++) {
                    inputNumber[i].removeAttribute('disabled');
                    inputNumber[i].value = '';
                };
                counter.innerHTML = 'Конец!';
            }
            clearInterval(timerId);
        } else {
            counter.innerHTML = `Отсчет пошел: ${from}`;
            from--;
            a = from;
        }
    }, 1000);
};

for(let i = 0; i < inputNumber.length; i++) {
    inputNumber[i].addEventListener('change', () => checkCorrect(i));
};

startButton.addEventListener('click', () => {
    if (startButton.value === 'Пуск') {
        startButton.value = 'Пауза';
        counter.classList.add("counter-active");
    } else {
        startButton.value = 'Пуск';
        counter.classList.remove("counter-active");
    };
    printNumber(a, b);
});




