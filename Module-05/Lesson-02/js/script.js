'use strict';

// const dog = { bark: 'woooooo' };
// const bigDog = Object.create(dog);

// bigDog.name = 'Chaky';

// for (let key in bigDog) {
//   if (!bigDog.hasOwnProperty(key)) continue;
//   console.log(key);
// }

// console.log(bigDog);

const User = function(name, age) {
  this.name = name;
  this.age = age;
  // bad practice
  this.great = function() {
    console.log(`My name is ${this.name}`);
  };
};

User.prototype.say = function() {
  console.log(`Hello, my age is ${this.age}`);
};

const admin = new User('Ben', 25);

// admin.say();
const SuperAdmin = function(name, age, levelOfControl) {
  User.call(this, name, age);

  this.levelOfControl = levelOfControl;
};

SuperAdmin.prototype = Object.create(User.prototype); // Связываем прототип SuperAdmin с прототипом User
SuperAdmin.prototype.constructor = SuperAdmin; //Добавляем constructor

const billy = new SuperAdmin('Billy', 40, 10);
// billy.say();
console.log(billy);

class Hero {
  static sum(a, b) {
    return a + b;
  }

  constructor(name, color, power, price) {
    this.name = name;
    this.color = color;
    this._power = power;
    this._price = price;
  }

  great() {
    console.log(`My name is ${this.name}`);
  }

  get price() {
    return this._price.toFixed(2);
  }

  get power() {
    return this._power;
  }

  set power(powerType) {
    this._power = `${powerType} is amazing!`;
  }
}

const hulk = new Hero('Hulk', 'green', 'strenght', 125.5555);

// console.log(hulk.price);
// console.log(hulk.power);
// hulk.power = 'huge';
// console.log(hulk.power);
// console.log(hulk);
// // hulk.great();

console.log(Hero.sum(5, 18));

class AntiHero extends Hero {
  constructor({ name, color, power, price, antipower }) {
    super(name, color, power, price);

    this.antipower = antipower;
  }
}

const tanos = new AntiHero({
  name: 'Tanos',
  color: 'blue',
  power: 'mnogo',
  price: 999,
  antipower: 'glowes',
});

console.log(tanos);
