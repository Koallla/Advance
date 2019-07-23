"use strict";

// const dog = "dog";

// let cat = "cat";

// const dog = "Bob";

// let cat = "Tomas";

let password, salary;
const userName = "Bob";
const userLastName = "Dilan";
const age = 55;
let isLoggedIn = false;
const VAT = 0.2;

console.log(userName, userLastName);
// alert(userName);
console.log(userName / age); //NaN

// console.log(1 === true); //false
// console.log("" === false); //false
// console.log(typeof userName);
// NaN = NaN; // false

isLoggedIn = confirm("Are you loggedin?");

if (isLoggedIn) {
  const salaryWithoutVAT = prompt("enter your salary");
  salary = salaryWithoutVAT * (1 - VAT);
  console.log(salary);
}

//+ перед переменной преобразует ее в число(номер);

const foo = 9 % 3;
let isEven = foo === 0;
console.log(isEven);

// Проверка на число
let bar = Number("dasdas");
console.log(Number.isNaN(bar));

console.log(userName.toUpperCase());

console.log(userLastName.indexOf("D"));

console.log(userLastName.includes("n")); // Так как это выдаст буль, можно это использовать для if.

const result = `Hello ${userName} ${userLastName}!!
Your age is ${age}. Your salary ${salary}`;
alert(result);

if (userName && userLastName && salary) {
  console.log("is valid");
} else if (userName || userLastName || salary) {
  console.log("something fullfilled");
}
