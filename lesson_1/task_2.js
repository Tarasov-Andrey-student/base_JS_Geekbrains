'use strict';

let name = prompt('Введите имя пользователя'), 
    admin = '';

    admin = name;

console.log(`Значение в переменной admin - ${admin} ,Вы присвоили значение '${name}' из переменной name в переменную admin`);

function isCopy(value) {
  admin = value
};

isCopy(name);

console.log(`Значение в переменной admin - ${admin} ,Вы присвоили значение '${name}' из переменной name в переменную admin`);