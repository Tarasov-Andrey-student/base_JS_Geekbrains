'use strict';

let catalog =[
  {
    id: 0,
    name: 1,
    price: 22,
    img: 'img/Layer2.jpg'
  },
  {
    id: 1,
    name: 2,
    price: 33,
    img: 'img/Layer3.jpg'
  },
  {
    id: 2,
    name: 3,
    price: 44,
    img: 'img/Layer4.jpg'
  },
  {
    id: 3,
    name: 4,
    price: 55,
    img: 'img/Layer5.jpg'
  },
  {
    id: 4,
    name: 5,
    price: 66,
    img: 'img/Layer6.jpg'
  },
  {
    id: 5,
    name: 6,
    price: 77,
    img: 'img/Layer7.jpg'
  },
  {
    id: 6,
    name: 7,
    price: 88,
    img: 'img/Layer8.jpg'
  },
  {
    id: 7,
    name: 8,
    price: 99,
    img: 'img/Layer9.jpg'
  }
];
let sumEl = 0;
let score = 0;

let catalogItem = document.querySelector('#catalog');
for (let i = 0; i < catalog.length; i++) {
  score++;
  sumEl += catalog[i].price;
  catalogItem.innerHTML += `
                <div class="cart">
                <h2>Заголовок ${catalog[i].name}</h2>
                <a href="#"><img src="${catalog[i].img}" alt="foto"></a>
                <p>Цена товара ${catalog[i].price} $</p>
                <button class="button" onclick="add(i)">Купить</button>
                </div>
                `
};

const basketEl = document.querySelector('#basket');
basketEl.innerHTML = `В корзине ${score} товаров на сумму ${sumEl} руб.`
  
let but = document.querySelectorAll('button');
but = console.log(catalog);
console.log(document);
