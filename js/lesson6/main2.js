// Задание 1 
function showHello(text, name) {
    name = name || 'гость';
    return alert(`${text}, ${name}`);
}
const userName = prompt('Введите имя');
showHello("Привет", userName);

// Задание 2
function multiply(n, m) {
    return alert(n * m);
}
const numOne = +prompt('Введите число', 0);
const numTwo = +prompt('Введите число', 0);
multiply(numOne, numTwo);



// Создайте функцию foo(a,b,с) оболочку для multiply(). foo() должна принимать три аргумента.
// Выводить в консоль результат  multiply() , Возвращать результат работы multiply() возведенный в степень с.

// Создайте функцию average() , которая будет находить среднее значение по всем своим аргументам (аргументы величины числовые).
