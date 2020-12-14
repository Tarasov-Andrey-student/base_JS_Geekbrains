'use strict';

let basket = [];
let num = +prompt('Введите количество продуктов в корзине');
let name = '';
let price = 0;
let sum = 0;


function Cart(name, price) {
  this.name = name;
  this.price = price;
};

for (let i = 0; i < num; i++) {
  name = prompt('Введите название товара');
  price = Math.round(Math.random() * 1000);
  basket[i] = new Cart(name, price);
  sum += basket[i].price;
};

console.log(basket);
console.log(`Сумма товаров равна ${sum} руб.`);
