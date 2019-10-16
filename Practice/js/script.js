'use script';

// Замыкание

// function wow() {
//   let a = 5;

//   return function() {
//     console.log(a++);
//   };
// }

// const pop = wow();
// pop();
// pop();
// pop();
// pop();
// pop();

// =================================================

function wow() {
  let userList = [{ name: 'hi', age: 20 }, { name: 'by', age: 40 }];

  return function(age) {
    return userList.filter(user => user.age === age);
  };
}

const pop = wow();
console.log(pop(20));
console.log(pop(40));
console.log(pop(0));

const mmm = {
  name: 'MMM',
  run() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

mmm.run();
