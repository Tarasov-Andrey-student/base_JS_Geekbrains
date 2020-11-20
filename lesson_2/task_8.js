'use strict';

let val = +prompt("Введите число");
let pow = +prompt("Введите степень");
let value = 1;

function power(val, pow) {
  if (pow > 1) {
    pow--;
    power(val, pow);
  };
  return value *= val;
};

console.log(power(val, pow));