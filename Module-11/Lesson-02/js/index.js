'use script';

const userListContainer = document.querySelector('.user-list');
const createUserTemplate = ({ name, email, phone, username }) => {
  return `<div class="user">
    <span>name: ${name}</span>
    <span>email: ${email}</span>
    <span>phone: ${phone}</span>
    <span>username: ${username}</span>
  </div>`;
};

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: 'John', age: 30 });
//   }, 2000);
// });

// promise.then(result => console.log(result));

const users = fetch('https://jsonplaceholder.typicode.com/users')
  .then(result => {
    return result.json();
  })
  .then(userList => {
    userListContainer.innerHTML = userList.reduce((acc, user) => {
      return acc + createUserTemplate(user);
    }, '');
  })
  .catch(e => console.log(e));

// const getUsersList = async () => {
//   const usersData = await fetch('https://jsonplaceholder.typicode.com/users');
//   const userList = await usersData.json();
//   console.log(userList);
//   return userList;
// };

// getUsersList();

const createPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('second promise');
    }, 2000);
  });
};

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('first promise');
  }, 2000);
});

promise
  .then(resolve => {
    console.log(resolve);
    return createPromise();
  })
  .then(resolve => {
    console.log(resolve);
  });
