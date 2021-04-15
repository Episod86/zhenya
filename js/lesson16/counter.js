let from;
do {
    from = +prompt('Введите начало отсчета', 0);
} while (isNaN(from) || from <= 0);

let to;
do {
    to = +prompt('Введите конечную цифру', 0);
} while (isNaN(to) || to < 0 || to > from);

document.body.insertAdjacentHTML('afterbegin', '<div></div>');

