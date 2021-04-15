'use strict';
const div = document.querySelectorAll('div');

const a = +prompt('Введите начало отсчета', 5);

const b = +prompt('Введите конец отсчета', 0);

const printNumbers = (from, to) => {

    setTimeout(function go() {
        div[0].innerHTML = `Отсчет пошел: ${from}`;
        if (from > to) {
            setTimeout(go, 1000);
        } else if (a <= b) {
            div[0].innerHTML = `Введите первую цифру больше второй`;
        } else if (isNaN(from) || isNaN(to)) {
            div[0].innerHTML =` Введите цифры`;
        };
        from--;
    }, 1000);
};

printNumbers(a, b);