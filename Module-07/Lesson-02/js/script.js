'use script';

const btn = document.querySelector('.btn');
const link = document.querySelector('.link');

const logger = function() {
  console.log(this);
  //   btn.removeEventListener('click', logger); Кнопка сработает один раз
};

btn.addEventListener('click', logger);

btn.removeEventListener('click', logger); //отменяем событие

link.addEventListener('click', e => {
  //   e.preventDefault(); //Переход по ссылке запрещен
  console.log('link clicked');
});

const body = document.querySelector('body');
const form = document.querySelector('.form');
const input = document.querySelector('.input');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});

body.addEventListener('keydown', event => {
  console.log(event);
  if (event.keyCode === 27) alert('escape');
});

input.addEventListener('focus', function() {
  this.setAttribute('disabled', true);
});

const range = document.querySelector('#font-size-slider');
const text = document.querySelector('#text');

const BASE_FONT_SIZE = 14;
const FONT_SIZE_GAP = 50;

range.addEventListener('change', e => {
  const fontSize = 14 + (50 * range.value) / 100;
  text.style.fontSize = `${fontSize}px`;
  console.log(range.value);
});
