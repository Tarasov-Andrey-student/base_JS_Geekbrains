'use strict';

let arr = [];
let s = 0;
let i = 1;

while (i <= 100) {
  for (let k = 1; k <= i; k++) {
    if (i % k === 0) {
      s += 1;
    }
  };
  if (s <= 2) {
    arr.push(i)
  };
  s = 0;
  i++
};
console.log(arr);
