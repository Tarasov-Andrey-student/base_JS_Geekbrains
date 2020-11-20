'use strict';

let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");

if (a >= 0 && b >= 0) {
  console.log(`Разность двух чисел "а" и "b" = ${Math.max(a, b) - Math.min(a, b)}`)
} else if (a < 0 && b < 0) {
  console.log(`Произведение двух чисел "а" и "b" = ${a * b}`)
} else if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
  console.log(`Сумма двух чисел "а" и "b" = ${a + b}`)
}