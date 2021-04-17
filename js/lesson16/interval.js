document.body.insertAdjacentHTML('afterbegin', '<div class = "counter"></div>');
const counter = document.querySelector('.counter');

let a;
do {
    a = +prompt('Введите начало отсчета', 0);
} while (isNaN(a) && a <= 0);
let b;
do {
    b = +prompt('Введите конечную цифру', 0);
} while (isNaN(b) && b < 0 && b > a);

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
printNumber(a,b);