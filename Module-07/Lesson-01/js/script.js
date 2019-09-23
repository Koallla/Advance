'use script';

const popup = document.querySelector('.modal');
const menuBtn = document.querySelector('.menu-btn');
const popupConfirmBtn = document.querySelector('.close');

const openPopup = () => {
  popup.classList.add('modal--open');
};
const closePopup = () => {
  popup.classList.remove('modal--open');
};

menuBtn.addEventListener('click', openPopup);

popupConfirmBtn.addEventListener('click', closePopup);

popup.addEventListener('click', function(event) {
  if (event.target === this) closePopup();
});

// this равен popup

const h1 = document.createElement('h1');
const body = document.querySelector('body');
h1.textContent = 'Awesome title';
// body.appendChild(h1); //добавляем в DOM

body.insertBefore(h1, menuBtn);
// ==========================================

const ul = document.createElement('ul');
const fruits = ['apple', 'mango', 'kiwi'];

const createLi = text => {
  const li = document.createElement('li');
  li.textContent = text;
  return li;
};

fruits.forEach(item => {
  ul.appendChild(createLi(item));
});

body.insertBefore(ul, h1);

//===============================

const img =
  '<img onClick="alert(1111)" src="https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821__340.jpg">';
// h1.innerHTML = img; //Затирает все.
h1.insertAdjacentHTML('afterbegin', img);
