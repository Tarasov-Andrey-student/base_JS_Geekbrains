'use strict';

let Tc = prompt("Введите температуру по Цельсию");

let Tf = Math.round((9 / 5) * Tc + 32);

console.log('Температура по Фаренгейту ' + Tf + ' град.');

function isFahrenheit(Tc) {
  return Math.round((9 / 5) * Tc + 32)
};

console.log('Температура по Фаренгейту ' + isFahrenheit(Tc) + ' град.');
