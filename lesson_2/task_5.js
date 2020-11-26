'use strict';

let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");

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

console.log(`Сумма двух чисел "а" и "b" равна ${sum(a, b)}`);
console.log(`Разность двух чисел "а" и "b" равна ${difference(a, b)}`);
console.log(`Произведение двух чисел "а" и "b" равно ${multiplication(a, b)}`);
console.log(`Частное двух чисел "а" и "b" равно ${division(a, b)}`);