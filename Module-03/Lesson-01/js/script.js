'use strict';

// console.log(
//   'Task_003: Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8',
// );
// // # # # #
// const total1 = [];
// const total2 = [];
// const string = ['#', ' '];
// let i = 0;
// // 0 1 0 1 0 1 0 1
// // 1 0 1 0 1 0 1 0

// while (i < 4) {
//   i += 1;
//   total1.push(string[0]);
//   total1.push(string[1]);
//   total2.push(string[1]);
//   total2.push(string[0]);
// }

// console.log(total1.join(''));
// console.log(total2.join(''));

// const hulk = {
//   name: 'Hulk',
//   color: 'green',
//   realName: 'Benner',
//   hulkTalk: function() {
//     console.log(`I am ${hulk.name}`);
//   },
//   getHulkRealName() {
//     console.log(`I am real name ${this.name}`); // this
//   },
// };

// hulk.hulkTalk();
// hulk.getHulkRealName();

// console.log(!!hulk); //Если нуже буль

// console.log(hulk['color']);

// const mickyMouse = {
//   name: 'Micky',
//   color: 'Black',
//   realName: 'Micky',
// };

// const guffy = {
//   name: 'Guffy',
//   color: 'Black',
//   realName: 'Guffy',
// };

// function getHerosByColor(color) {
//   let result = [];

//   for (let hero of dreamTeam) {
//     if (hero.color === color) {
//       result.push(hero);
//     }
//   }
//   return result;
// }

// console.log(getHerosByColor('Black'));

// const dreamTeam = [hulk, mickyMouse, guffy];

// function getHeroNameAndRealName(hero) {
//   return `${hero.name} ${hero.realName}`;
// }

// console.log(getHeroNameAndRealName(hulk));

// const totalPrice = 100;
// const limit = 150;

// const cart = {
//   storeName: 'Nike',
//   totalPrice,
//   limit,
// };

// console.log(limit);

// const a = {};
// const b = {};

// console.log(a === b);

// const mickyMouse = {
//   name: 'Micky',
//   color: 'Black',
//   realName: 'Micky',
//   getName: function() {
//     console.log(`I am ${this.name}`);
//   },
//   getColor: function() {
//     console.log(`My color ${this.color}`);
//   },
//   getNameandColor: function() {
//     console.log(`My name and color ${this.color} ${this.name}`);
//   },
//   getNameandColor2: function() {
//     this.getName();
//     this.getColor();
//   },
// };

// mickyMouse.getName();
// mickyMouse.getColor();
// mickyMouse.getNameandColor();
// mickyMouse.getNameandColor2();

const mickyMouse = {
  name: 'Micky',
  color: 'Black',
  realName: 'Micky',
  getName() {
    return this.name;
  },
};

const guffy = {
  name: 'Guffy',
  color: 'Black',
  realName: 'Guffy',
  getName() {
    return this.name;
  },
};

const hulk = {
  name: 'Hulk',
  color: 'green',
  realName: 'Benner',
  getName() {
    return this.name;
  },
};

const dreamTeam = [hulk, mickyMouse, guffy];

for (let hero of dreamTeam) {
  {
    console.log(hero.getName());
  }
}
