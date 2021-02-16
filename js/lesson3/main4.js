'use strict';

let maxWidth = 1024, margin = 5, kol = 4, width;
width = (maxWidth - margin * 2 * kol) / kol; 
alert(`Ширина изображения ${width} px`);

let kolMax, kolImageRows, kolRows, kolOst;
kolMax = +prompt('Введите количество изображений', kolMax);
width = +prompt('Введите ширину изображения', width);
kolImageRows = Math.trunc( maxWidth / (width + (margin * 2)));
kolRows = Math.trunc( kolMax / kolImageRows);
kolOst = kolMax - (kolRows * kolImageRows);
alert(`В каждом ряду ${kolImageRows} изображений, полных рядов ${kolRows}, в последнем ряду ${kolOst} изображений (ие)`);
