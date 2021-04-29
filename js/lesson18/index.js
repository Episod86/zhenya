'use strict'

const counter = document.querySelector('.counter');
const startButton = document.querySelector('.button');
const inputNumber = document.querySelectorAll('.input-point');
const inputError = document.querySelectorAll('.error');

const textError = [
    {
        title: 'начальное',
        error: 'больше 0 и больше конечного значения',
    },
    {
        title: 'конечное',
        error: 'меньше начального, но не меньше 0',
    },
];

const color = ['red' , 'white'];

let startNumber;
let endNumber;

const checkCorrect = (i, n) => {
    inputError[i].innerHTML = ''
    if (!inputNumber[n].value) {
        inputError[n].innerHTML = `Введите  ${textError[i].title} значение`;
    } else {
        startNumber = Number(inputNumber[0].value);
        endNumber = Number(inputNumber[1].value);
        if (startNumber <= 0 || startNumber <= endNumber) {
            inputError[i].innerHTML = `Значение должно быть  ${textError[i].error}`;
        } else {
            for (i = 0; i < inputNumber.length; i++) {
                inputNumber[i].setAttribute('disabled', 'disabled');
                inputError[i].innerHTML = '';
            };
            startButton.removeAttribute('disabled');
        };
    };
};

const printNumber = (from, to) => {
    let timerId = setInterval(() => {
        if (from === to || !(counter.classList.contains("counter-active"))) {
            if (from === to) {
                startButton.setAttribute('disabled', 'disabled');
                startButton.value = 'Пуск';
                for (let i = 0; i < inputNumber.length; i++) {
                    inputNumber[i].removeAttribute('disabled');
                    inputNumber[i].value = '';
                };
                counter.innerHTML = 'Конец!';
            }
            clearInterval(timerId);
        } else {
            counter.innerHTML = `Отсчет пошел: ${from}`;
            from--;
            startNumber = from;
        }
    }, 1000);
};

const showMess = () => {
    startButton.insertAdjacentHTML('afterend', `<div class = "message"></div>`);
    const message = document.querySelector('.message');
    const coords = startButton.getBoundingClientRect();
    
    message.style.left = coords.left +"px";
    message.style.top = coords.top - 45 + "px";
    if (startButton.value === 'Пуск') {
        message.innerHTML = 'Запустить счетчик';
    } else {
        message.innerHTML = 'Остановить счетчик';
    }   
}
const clearMess = () => {
    const message = document.querySelector('.message');
    message.remove();
}

const activStyle = (i) => {
    counter.style.backgroundColor = color[i];    
}

const inputMess = (i) => {
    inputError[i].innerHTML = `Вы ввели ${inputNumber[i].value}`;
};

for (let i = 0, n = 1; i < inputNumber.length; i++, n--) {
    inputNumber[i].addEventListener('change', () => checkCorrect(i, n));
    inputNumber[i].addEventListener('input', () => inputMess(i));
};

startButton.addEventListener('click', () => {
    if (startButton.value === 'Пуск') {
        startButton.value = 'Пауза';
        counter.classList.add("counter-active");
    } else {
        startButton.value = 'Пуск';
        counter.classList.remove("counter-active");
    };
    printNumber(startNumber, endNumber);
});

startButton.addEventListener('pointerover', () => showMess());
startButton.addEventListener('pointerout', () => clearMess());

counter.addEventListener('pointerover', () => activStyle(0));
counter.addEventListener('pointerout', () => activStyle(1));