'use strict';

let num = Math.round(Math.random() * 100);

console.log(num);

function isAnswer() {
  let answer = +prompt("Введите число");
  if (answer === num) {
    return console.log("Вы победили!");
} else if (answer < num) {
  console.log("Ваше число меньше загаданного...");
  isAnswer();
} else if (answer > num) {
  console.log("Ваше число больше загаданного...");
  isAnswer();
}
};

isAnswer()