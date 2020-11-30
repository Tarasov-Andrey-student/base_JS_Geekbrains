'use strict';

let quantity = +prompt('Введите количество товаров в корзине ');
let basket = [];
let sum = 0;

function createBasket(count, array) {
  for (let i = 0; i < count; i++) {
    array.push(+prompt('Введите стоимость товара, который Вы добавили в корзину'));
  };
};

function countBasketPrice(array) {
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  };
  return console.log(`Сумма товаров в Вашей корзине равна ${sum} руб.`)
};

createBasket(quantity, basket);
countBasketPrice(basket);