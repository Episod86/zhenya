'use strict';

// Задание1.
// let mesage, i = 1, number, numberSquare;
// while (i <= 9) {
//     number = i;
//     numberSquare = number ** 2;
//     if (i === 1) {
//         mesage = `        Квадрат   ${number}   ${numberSquare}`;
//     } else {
//         mesage = `${mesage}
//         Квадрат   ${number}   ${numberSquare}`;
//     };    
//     i ++;
// };
// alert(mesage);


// Задание2.
// const number = +prompt('Введите целое положительное число');
// let i = 1;
// let interValue = 1;
// while (i <= number) {
//     if ((interValue % 2 == 0) && (interValue % 5 != 0)) {
//         alert (interValue);
//         i++
//         interValue++
//     } else {
//         interValue++
//     };
// };

// Задание3.
// let num, numberSum = 0;
// while (num = +prompt('Введите число')) {
//     numberSum = numberSum + num;
// }
// alert (numberSum);


// Задание4.
// const n = +prompt('Введите целое положительное число');
// let sumN = 0;
// for (let i = 0; i <= n; i++) {
//     sumN = sumN + i;
// }
// alert (sumN);

// Задание 5
const x = +prompt('Введите целое положительное число');
for (let i = 1; i <= x; i++) {
    if ( x % i == 0) {
        alert (i);
    };    
}
// let sumN = 0;

// Выведите все натуральные делители числа x в порядке возрастания (включая 1 и само число).
// Задание 6
// Вывести на экран все двузначные числа сумма цифр которых делится на  введенное число n.
