'use strict';

let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let str = prompt("Введите операцию для двух чисел (сумма, вычитание, произведение, деление)");

function sum(a, b) {
  return a + b
};

function difference(a, b) {
  return Math.max(a, b) - Math.min(a, b)
};

function multiplication(a, b) {
  return a * b
};

function division(a, b) {
  return Math.max(a, b) / Math.min(a, b)
};

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case 'сумма':
      console.log(`Сумма двух чисел "а = ${a}" и "b = ${b}" равна ${sum(arg1, arg2)}`);
      break;
    case 'вычитание':
      console.log(`Разность двух чисел "а = ${a}" и "b = ${b}" равна ${difference(arg1, arg2)}`);
      break;
    case 'произведение':
      console.log(`Произведение двух чисел "а = ${a}" и "b = ${b}" равно ${multiplication(arg1, arg2)}`);
      break;
    case 'деление':
      console.log(`Частное двух чисел "а = ${a}" и "b = ${b}" равно ${division(arg1, arg2)}`);
      break;
  }
};

mathOperation(a, b, str);