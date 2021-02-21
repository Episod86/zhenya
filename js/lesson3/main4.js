'use strict';

const maxWidth = 1024, margin = 5; 
let num = 4, width;
width = (maxWidth - margin * 2 * num) / num; 
alert(`Ширина изображения ${width} px`);

let numMax, numImageRows, numRows, numOst;
let controlNumMax, controlWidth;
do {
    numMax = +prompt('Введите количество изображений', numMax);
    if (numMax > 0) {
        controlNumMax = true;
    } else {
        controlNumMax = false;
        alert ('Введенное значение не удоветворяет условию задачи!');
    }
} while (controlNumMax != true);
do {
    width = +prompt('Введите ширину изображения', width);
    if ((width > 0) && (width <= maxWidth)) {
        controlWidth = true;
    } else {
        controlWidth = false;
        alert ('Введенное значение не удоветворяет условию задачи!');
    };
} while (controlWidth != true);

// вариант 1
numImageRows = Math.trunc( maxWidth / (width + (margin * 2)));
numRows = Math.trunc( numMax / numImageRows);
numOst = (numMax - (numRows * numImageRows)) || numImageRows;

alert(`Вариант 1 изображений в ряду - ${numImageRows} , полных рядов - ${numRows}, изображений в последнем ряду ${numOst}`);

// вариант 2
numRows = ((numMax * (width + margin * 2)) - (numMax * (width + margin * 2)) % maxWidth) / maxWidth; 
numImageRows = (maxWidth  - (maxWidth %  (width + margin * 2))) /  (width + margin * 2);
if (numMax - (numRows * numImageRows) == 0) {
    numOst = numImageRows;
} else {
    numOst = numMax - (numRows * numImageRows);
};
alert(`Вариант 2 изображений в ряду - ${numImageRows} , полных рядов - ${numRows}, изображений в последнем ряду ${numOst}`);

