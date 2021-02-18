'use strict';

let maxWidth = 1024, margin = 5, kol = 4, width;
width = (maxWidth - margin * 2 * kol) / kol; 
alert(`Ширина изображения ${width} px`);

let kolMax, kolImageRows, kolRows, kolOst;
kolMax = +prompt('Введите количество изображений', kolMax);
width = +prompt('Введите ширину изображения', width);

// вариант 1
kolImageRows = Math.trunc( maxWidth / (width + (margin * 2)));
kolRows = Math.trunc( kolMax / kolImageRows);
kolOst = kolMax - (kolRows * kolImageRows);

alert(`Вариант 1 изображений в ряду - ${kolImageRows} , полных рядов - ${kolRows}, изображений в последнем ряду ${kolOst}`);

// вариант 2
kolRows = ((kolMax * (width + margin * 2)) - (kolMax * (width + margin * 2)) % maxWidth) / maxWidth; 
kolImageRows = (maxWidth  - (maxWidth %  (width + margin * 2))) /  (width + margin * 2);
kolOst = kolMax - (kolRows * kolImageRows);
alert(`Вариант 2 изображений в ряду - ${kolImageRows} , полных рядов - ${kolRows}, изображений в последнем ряду ${kolOst}`);

