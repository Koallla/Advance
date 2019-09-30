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

export default function() {
  const userListContainer = document.querySelector('.users');

  const users = userList.reduce((acc, item) => {
    return acc + userItemTemlate(item);
  }, '');

  userListContainer.innerHTML = users;
}
