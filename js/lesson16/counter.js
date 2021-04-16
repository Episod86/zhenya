document.body.insertAdjacentHTML('afterbegin', '<div class = "counter"></div>');
const counter = document.querySelector('.counter');

// const inputFrom = () => {
//     let a
//     do {
//         a = prompt('Введите начало отсчета', 0);
//     } while (isNaN(+a) || +a <= 0 || +a === null);
//     return +a;
// }   

const inputTo = () => {
    let b
    do {
        b = prompt('Введите конечную цифру', 0);
    } while (isNaN(b) || +b < 0 || +b > +a || +b === null);
    return +b;
};

// inputFrom()

printNumber();

function printNumber() {
    const from = () => {
        let a
        do {
            a = prompt('Введите начало отсчета', 0);
        } while (isNaN(+a) || +a <= 0 || +a === null);
        return +a;
    }   ;
    from()
    console.log(from())
    to = inputTo;

    let timerId = setInterval(() => {
        counter.innerHTML = `Отсчет пошел: ${from}`;
        if (from == to) {
            clearInterval(timerId);
        };
        from--;
    }, 1000);
}




