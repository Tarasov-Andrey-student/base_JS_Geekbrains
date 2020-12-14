'use strict';

let number = +prompt('Введите число в диапазоне от 0 до 999');

function getDigit (num) {
  console.log(num);
  if (num < 0 || num > 999) {
    console.log('Число должно быть в диапазоне от 0 до 999');
    return {}
  }
  return {
    hundreds: Math.floor(num / 100),
    units: num % 10,
    decades: Math.floor(num / 10) % 10
  }
};

console.log(getDigit(number));