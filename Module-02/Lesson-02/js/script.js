'use strict';

// function expresion ======================================================

// const userList = ['admin', 'manager', 'employe'];

// const isUserPresent = function(user, listOfUser) {
//   return listOfUser.includes(user);
// };

// console.log(isUserPresent('manager', userList));

// function declaration ==================================================

// const userNames = getAllUserNames(userList);
// console.log(userNames);

// function getAllUserNames(list) {
//   let result = '';
//   for (let user of list) {
//     result = result + user + ' ';
//   }
//   return result;
// }

//======================================================================

// const calculateSquare = function(width = 50, height = 100) {
//   console.log(arguments);
//   console.log(Array.from(arguments)); //Преобразовали псевдомассив
//   return width * height;
// };

// const square = calculateSquare(500, 500, 600, 5, 10);

// console.log(square);

//======================================================================

// const sumAllArguments = function(a, b, ...args) {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i];
//   }

//   console.log(args);
//   return sum;
// };

// const sum = sumAllArguments(50, 40, 30, 60, 10);
// console.log(sum);

// let userInput1 = Number(prompt());
// let userInput2 = Number(prompt());

// const sumNumber = function(a, b) {
//   return a + b;
// };

// console.log(sumNumber(userInput1, userInput2));

let userList = ['sada', 'aswacca', 'asdassdasads'];

let userInput = prompt();

const userListArray = function(input) {
  if (userInput) {
    userList.push(input);
    console.log('Вы добавлены');
  }
  return userList;
};

console.log(userListArray(userInput));
