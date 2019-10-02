// module.exports =  - comonJS
import userItemTemlate from '../templates/user-card.hbs';

const userList = [
  {
    img_url: '',
    name: 'Tom Redle',
    description: 'Nice nice',
  },
  {
    img_url: '',
    name: 'Jimmy Acha',
    description: 'Good good',
  },
  {
    img_url: '',
    name: 'Zita',
    description: 'Acha acha',
  },
];

localStorage.setItem('userList', JSON.stringify(userList));
// sessionStorage.setItem('userList', JSON.stringify(userList));

export default function() {
  const userListContainer = document.querySelector('.users');

  const users = userList.reduce((acc, item) => {
    return acc + userItemTemlate(item);
  }, '');

  userListContainer.innerHTML = users;
}

const str = JSON.stringify(userList);

console.log(str, 'stringify');
console.log(JSON.parse(str), 'str');
