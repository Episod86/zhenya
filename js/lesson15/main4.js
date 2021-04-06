'use strict';

const elementTr = document.querySelectorAll('tr');
console.log(elementTr);

console.log(elementTr[0].innerHTML)

if (elementTr[3].innerHTML === elementTr[4].innerHTML) {
    console.log ('true')
}
// В таблице допущена ошибка. Строка Петрова А.И…. вставлена в таблицу дважды.( 3 и 4 строка).  
// Исправьте эту ошибку при помощи метода   node.remove()
// Вставьте в начале и в конце раздела  tbody  HTML код, чтобы таблица приобрела вид в соответствии с образцом на рисунке
