const input = document.querySelector("input");
const button = document.querySelector("button");
let arr = document.querySelector(".array");
let sorted = document.querySelector(".sorted");

arr = [];
sorted = [];

input.addEventListener("change", addInput);

button.addEventListener("click", sumArray);

function addInput() {
  let number = Number(input.value);
  // проверим на число:

  if (Number.isNaN(number)) {
    sumArray();
    return;
  }

  arr.push(number);
  input.value = "";
  showArray();
}

function showArray() {
  let sum = "";

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (i === arr.length - 1) {
      sum += item + ".";
    } else {
      sum += item + ", ";
    }
  }

  //sumArray();
  //   let reduceValueOne = arr.reduce(function (previousValue, item, index, array) {
  //     return item + previousValue;
  //   }, 0);

  document.querySelector(".array").textContent = sum;

  // скопируем в массив sorted массив arr:
  sorted = [...arr];
  sorted.sort((a, b) => a - b);

  document.querySelector(".sorted").textContent = sorted;

 
}

function sumArray() {
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  document.querySelector(".sum").textContent = sum;
}

//-------------------Домашнее задание----------------------------
//---------------------------------------------------------------

//- 1. Дан массив `['js', 'css', 'html']`. Выведите на экран первый элемент.

let arrTwo = ["js", "css", "html"];
console.log(arrTwo[0]);

//- 2. Отфильтруйте массив `[0, 1, false, 2, undefined, '', 3, null]` от нежелательных значений, таких как `false`, `undefined`,
// пустые строки, `0`, `null` с помощью метода `filter`.  Ожидаемый результат: `[1, 2, 3]`.

let arrThree = [0, 1, false, 2, undefined, "", 3, null];

let result = arrThree.filter(function (item, index, array) {
  let result = Number(input.value);
  if (!Number.isNaN(result)) {
    return item;
  }
});
console.log(result);

//- 3. Дан массив `[[1,2], [1,2,3], [1,2,3,4]]`. Найдите индекс массива, длина которого `> 3`. Ожидаемый результат: `2`

let arrFour = [
  [1, 2],
  [1, 2, 3],
  [1, 2, 3, 4],
];

let resultTwo = arrFour.findIndex(function (item, index, array) {
  return item.length > 3;
});
console.log(resultTwo);
