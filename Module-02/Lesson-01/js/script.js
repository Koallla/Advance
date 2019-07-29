'use strict';

// let userList = ['car', 'dog', 'cat'];
// // // let cat = userList[5];
// // // console.log(`Item name is ${cat}`);
// // // userList[5] = true;
// // // userList[2] = 'mouse';

// // // console.log(`Amount of users ${userList.length}`);

// userList = ['Bob Dilan', 'Jon Week', 'Tony Stark'];

// // // for (let i = 0; i < userList.length; i += 1) {
// //   console.log(`${i + 1}) User name is ${userList[i]}`);
// // }

// // for (const user of userList) {
// //   console.log(`User name is ${user}`);
// // }

// //Search for users

// for (const user of userList) {
//   if (user === 'Jon Week') {
//     console.log(`User name is ${user}`);
//     break;
//   }

//   console.log(`Found user ${user}`);
// }

// const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const number of numberList) {
//   if (number % 2 === 0) {
//     // console.log(`Number is ${number}`);
//     continue;
//   }

//   console.log(`Number ${number}`); //Выводит нечетные числа, потому что, continue прерывает дейтвие if
// }

// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(`Array item[${i}][${j}] = ${matrix[i][j]}`);
//   }
// }

// const article = 'raesent nonummy mi in odio Phasellus leo dolor tempus no';
// const wordsArray = article.split(' ');
// const outputString = wordsArray.join('_');
// console.log(wordsArray.includes('dolor')); // 7
// console.log(outputString);

// console.log(userList);

// userList.push('super user');

// console.log(userList.slice(1, 3));

// const foo = article.slice(0, 1).toUpperCase() + article.slice(1); // Первая большая буква
// console.log(foo);

// const newArray = userList.splice(1, 3, 'Man super', 'Man spider');

// console.log(newArray);
// console.log(userList);

const userList = ['Cat', 'Dog', 'Mouse'];

const user = prompt('enter UserName');

if (userList.includes(user)) {
  alert('User alredy exist');
} else {
  userList.push(user);
  //add ti user list
  alert('User was added');
}

const lol = [5, 9, 2, 100, 50];

console.log(Math.max(...lol));
