'use strict';

// const Hero = function(name, power, age) {
//   this.name = name;
//   this.power = power;
//   this.age = age;
//   this.incrementAge = function() {
//     this.age = this.age + 1;
//   };
// };

// const tonyStark = new Hero('Tony', 'rich', 52);
// tonyStark.incrementAge();
// console.log(tonyStark);

// const hulk = new Hero('Benner', 'green power', 40);
// console.log(hulk);

const Cart = function() {
  this.itemList = [];
  this.addItem = function(item) {
    this.itemList.push(item);
  };
  this.removeItem = function(removeItem) {
    const findElement = this.itemList.indexOf(item);
    this.itemList.splice(findElement, 1);

    // this.itemList = this.itemList.filter(item => item !== removeItem);
  };

  this.deleteAllItems = function() {
    this.itemList = [];
  };
};

const Product = function(name, price, description) {
  this.name = name;
  this.price = price;
  this.description = description;

  this.rename = function(newName) {
    this.name = newName;
  };

  this.changePrice = function(newPrice) {
    this.price = price;
  };
};

const tel = new Product('Telephone', 1000, 'Nice tel');
console.log(tel);
const tel1 = new Product('Telephone1', 2000, 'Nice tel1');
console.log(tel1);
const tel2 = new Product('Telephone2', 3000, 'Nice tel2');
console.log(tel2);

const cart = new Cart();
console.log(cart.itemList);

cart.addItem(tel);
cart.addItem(tel1);
cart.addItem(tel2);
console.log(cart.itemList);

cart.removeItem(tel1);
console.log(cart.itemList);

cart.deleteAllItems();
console.log(cart.itemList);
