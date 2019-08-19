'use strict';

'use strict';

// const dog = "dog";

// let cat = "cat";

// const dog = "Bob";

// let cat = "Tomas";

// let password, salary;
// const userName = 'Bob';
// const userLastName = 'Dilan';
// const age = 55;
// let isLoggedIn = false;
// const VAT = 0.2;

// console.log(userName, userLastName);
// // alert(userName);
// console.log(userName / age); //NaN

// // console.log(1 === true); //false
// // console.log("" === false); //false
// // console.log(typeof userName);
// // NaN = NaN; // false

// isLoggedIn = confirm('Are you loggedin?');

// if (isLoggedIn) {
//   const salaryWithoutVAT = prompt('enter your salary');
//   salary = salaryWithoutVAT * (1 - VAT);
//   console.log(salary);
// }

// //+ перед переменной преобразует ее в число(номер);

// const foo = 9 % 3;
// let isEven = foo === 0;
// console.log(isEven);

// // Проверка на число
// let bar = Number('dasdas');
// console.log(Number.isNaN(bar));

// console.log(userName.toUpperCase());

// console.log(userLastName.indexOf('D'));

// console.log(userLastName.includes('n')); // Так как это выдаст буль, можно это использовать для if.

// const result = `Hello ${userName} ${userLastName}!!
// Your age is ${age}. Your salary ${salary}`;
// alert(result);

// if (userName && userLastName && salary) {
//   console.log('is valid');
// } else if (userName || userLastName || salary) {
//   console.log('something fullfilled');
// }

// let tax;
// const age = 20;

// const tax = age > 50 ? 10 : 5;

// // Тоже самое
// if (age > 50) {
//   tax = 10;
// } else {
//   tax = 5;
// }

// let answer;
// let userInput = prompt('Введите ваш возраст');

// if (userInput >= 10 && userInput <= 20) {
//   answer = 'child';
// } else if (userInput === '') {
//   answer = 'А ввести данные?';
// } else if (userInput === null) {
//   answer = 'Не введен возраст';
// } else if (userInput > 21 && userInput <= 50) {
//   answer = 'adult';
// } else if (userInput > 51) {
//   answer = 'granny';
// } else {
//   answer = 'ссыкун';
// }

// alert(answer);

// let apple = 10;

// // while (apple >= 0) {
// //   console.log(`apple=${apple}`);
// //   // apple--;
// //   apple = apple - 1;
// // }

// // do {
// //   console.log(`apple=${apple}`);
// // } while (apple > 200);
// // {
// //   console.log('error');
// // }

// for (let i = 0; i < apple; i++) {
//   console.log(`index=${i}`);
// }

const userName = 'Bob';
const userLastName = 'Dilan';
const userLogin = 'Bob91';
const userPassword = 'Dilan91';

let isUserLoginValid = false;
let isUserPasswordValid = false;
let userInput;

// do {
//   userInput = prompt('Введите свой логин');
// } while (userInput !== userLogin);

// while (userInput !== userLogin) {
//   userInput = prompt('Введите свой логин');
// }

// while (userInput !== userLogin) {
//   userInput = prompt('Введите свой логин');
//   if (userInput === userLogin) {
//     console.log('Woooooooooooooooooooooo');
//   }
// }

while (!isUserLoginValid) {
  userInput = prompt('Введите свой логин');

  if (userInput === userLogin) {
    isUserLoginValid = true;
    console.log('OOOOOOeeeeeeeeeeee');
  }
}
