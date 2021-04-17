document.body.insertAdjacentHTML('afterbegin', '<div class = "counter"></div>');
const counter = document.querySelector('.counter');
const inputFrom = () => {
    let a;
    do {
        a = +prompt('Введите начало отсчета', 0);
    } while (isNaN(a) || a <= 0);
    return a;
}
const inputTo = (a) => {
    let b;
    do {
        b = +prompt('Введите конечную цифру', 0);
    } while (isNaN(b) || b < 0 || b > a);
    return b;
}

const printNumber = (from) => {
    const to = inputTo(from); 
    setTimeout(function go() {
        counter.innerHTML = `Отсчет пошел: ${from}`;
        if (from > to) {
          setTimeout(go, 1000);
        } else {
            counter.innerHTML = '<img src="bang.gif" alt="Взрыв">' 
        }
        from--;
      }, 1000);
};
printNumber(inputFrom());









