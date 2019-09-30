// import users from './users';
// const users = require('./users') - comonJS

import Swiper from 'swiper';
import '../css/style.css';
import Heandlebars from 'handlebars';
import Users from './users';

const sliderTemplate = document.querySelector('#slider-template').innerHTML;
const template = Heandlebars.compile(sliderTemplate);
const sliderWrapper = document.querySelector('.slider-wrapper');

const items = [
  {
    src:
      'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Slide 1',
  },
  {
    src:
      'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg',
    title: 'Slide 2',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821__340.jpg',
    title: 'Slide 3',
  },
];

sliderWrapper.innerHTML = template({ items });

const slider = new Swiper('.slider', { speed: 1000, effect: 'cube' });

Users();
