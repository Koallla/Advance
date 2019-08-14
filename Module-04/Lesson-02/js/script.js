'use strict';

// hero.sing();

// const getInfo = function(callback) {
//   const name = 'John';

//   callback();
// };

// getInfo(hero.sing);

// const fn = () => {
//   console.log(this);
// };

// const fn1 = function() {
//   console.log(this);
// };

// const person = {
//   name: 'Ban',
// };

// person.showContext = fn;
// person.showContext1 = fn1;
// person.showContext();
// person.showContext1();

// const hero = {
//   name: 'Victor Pavlik',
//   sing() {
//     console.log(`Town of green light by ${this.name}`);
//   },
// };

// const hero1 = {
//   name: 'Dodo',
//   sing: hero.sing,
// };

// const hello = hero.sing.bind(hero1);
// hello();

// const getFullName = function(message) {
//   console.log(`${message} ${this.name} ${this.lastName}`);
// };

// const user = {
//   name: 'John',
//   lastName: 'Travolta',
// };

// getFullName.call(user, 'He is');

// const arr = [1, 2, 3, 11, 1];
// const maxVal = Math.max(...arr);
// console.log(maxVal);

// const getDetails = function(descrition) {
//   return `${descrition} ${this.name}`;
// };

// const company = {
//   name: 'Bosch',
// };

// const getCompanyDetails = getDetails.bind(company, 'Our company is: ');

// console.log(getCompanyDetails());

const showNameLength = function() {
  console.log(this.name.length);
};

const store = {
  name: 'VidaXL',
  descrition: 'Nice store',
};

showNameLength.apply(store);
