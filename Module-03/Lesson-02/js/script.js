'use strict';

// ====================================================================================================

// const hotels = {
//   peris: 5,
//   joni: 4,
//   hayat: 5,
//   redison: 1,
// };

// function calculateTotalStars(hotels) {
//   let sum = 0;
//   for (let hotel in hotels) {
//     sum += hotels[hotel];
//   }
//   return sum;
// }

// function logAllObjectKeys(obj) {
//   const arrOfKeys = Object.keys(obj);

//   for (let key of arrOfKeys) {
//     console.log(`Key is: ${key}`);
//   }
// }

// function logAllObjectValues(obj) {
//   const values = Object.values(obj);

//   for (let value of values) {
//     console.log(`Value is: ${value}`);
//   }
// }

// // logAllObjectValues(hotels);

// // logAllObjectKeys(hotels);

// // console.log(calculateTotalStars(hotels));

// // console.log(Object.entries(hotels));

// const fruits = ['mango', 'banana', 'apple', 'peanapple'];
// const newFruits = [...fruits];
// console.log(newFruits, newFruits === fruits);

// const arr = [1, 2, 3];

// function foo(arr) {
//   const res = [...arr]; // Для клонирования масссива

//   for (let i = 0; i < res.length; i++) {
//     res[i] = res[i] * 2;
//   }
//   return res;
// }

// console.log(arr);
// console.log(foo(arr));

// const films = [
//   {
//     rating: 9.8,
//     title: 'MIB',
//   },
//   {
//     rating: 8.8,
//     title: 'Terminator',
//   },
//   {
//     rating: 10,
//     title: 'Zashiniki',
//   },
//   {
//     rating: 0.8,
//     title: 'Avatar',
//   },
// ];

// //Мое решение
// function findMaxRating(films) {
//   // let arrFoRating = [];
//   let goodFilm = films[0];
//   for (let film of films) {
//     // console.log(film.rating);
//     if (film.rating > goodFilm.rating) {
//       goodFilm = film;
//     }
//   }
//   console.log(goodFilm);
// }

// findMaxRating(films);

// function findFilmWithMaxRating(films) {
//   let filmWithMaxRating = films.length && films[0];

//   for (let film of films) {
//     if (filmWithMaxRating.rating < film.rating) {
//       filmWithMaxRating = film;
//     }
//   }
//   return filmWithMaxRating;
// }

// console.log(findFilmWithMaxRating(films));

// const film = {
//   rating: 9.8,
//   title: 'MIB',
//   comments: ['sss', 'bbb'],
// };

// const newFilm = { ...film };

// newFilm.comments[0] = 'hello';
// console.log(film, 'old film');
// console.log(newFilm, 'old film');

// const findMax = (...rest) => {
//   // console.log(arguments);
//   return Math.max(...rest);
// };

// console.log(findMax(5, 10, 25, 33, 2, 25, 28, 99, 11));

const film = {
  rating: 9.8,
  title: 'MIB',
  comments: ['yahoo', 'bamblee'],
};

// const rating = film.rating;
// const title = film.title;
// const comments = film.comments;

const { rating, title, comments = ['default'] } = film;
const { rating: newRating, ...rest } = film;

console.log(rating, title, comments);

const [firstComment, ...second] = comments;

console.log(firstComment, second);
