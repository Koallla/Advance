'use strict';

// const array = [1, 2, 3, 4, 5];

// const sumArrayItems = function(array, callback) {
//   let result = 0;
//   for (let item of array) {
//     result += item;
//   }

//   callback(result, 2);
// };

// const muultiplyByTwo = function(value) {
//   console.log(value * 2);
// };

// sumArrayItems(array, console.log);
// sumArrayItems(array, muultiplyByTwo);
// sumArrayItems(array, (e, b) => {
//   console.log(b);
// });

// const filter = (array, test) => {
//   let filteredArray = [];
//   for (let item of array) {
//     const passed = test(item);

//     if (passed) filteredArray.push(item);
//   }
//   return filteredArray;
// };

// const valueGreaterThenZero = value => {
//   return value > 0;
// }; //Сокращенная запись

// const rawArray = [5, 0, -5, 2, 8, -10];

// console.log(rawArray, valueGreaterThenZero);

// const foo = [
//   {
//     title: 'car',
//     price: 200,
//   },
//   {
//     title: 'car2',
//     price: 100,
//   },
//   {
//     title: 'car3',
//     price: 150,
//   },
//   {
//     title: 'car4',
//     price: 350,
//   },
// ];

// const rawArray = [
//   {
//     title: 'car',
//     price: 200,
//   },
//   {
//     title: 'car2',
//     price: 100,
//   },
//   {
//     title: 'car3',
//     price: 150,
//   },
//   {
//     title: 'car4',
//     price: 350,
//   },
// ];

// const filter = (array, test) => {
//   let filteredArray = [];
//   for (let item of array) {
//     const passed = test(item);

//     if (passed) filteredArray.push(item);
//   }
//   console.log(filteredArray);
// };

// const priceGreaterThen = function(value) {
//   return value.price > 100;
// };

// filter(rawArray, priceGreaterThen);

// const createCounter = function() {
//   // Локальная переменная privateCounter, доступна только в замыкании
//   let privateCounter = 0;

//   const increment = function() {
//     privateCounter += 1;
//     console.log(privateCounter);
//   };

//   return increment;
// };

// const counterA = createCounter();

// const counterB = createCounter();

// const calc = height => width => depth => height * width * depth;

// const calc = function(height) {
//   return function(width) {
//     return function(depth) {
//       return height * width * depth;
//     };
//   };
// };

// const square = function(width) {
//   return function(height) {
//     return width * height;
//   };
// };

// const rectangle = square(100);

// console.log(rectangle(500));
// calc(500)(200)(100);

// const sum = function(a) {
//   return function(b) {
//     return a + b;
//   };
// };

// const a = sum(2);
// console.log(a(3));

const pop = function() {
  let arr = [];
  return function(hell) {
    arr.push(hell);
    return arr;
  };
};

const hell = pop();
console.log(hell(200));
console.log(hell(100));
console.log(hell(700));
