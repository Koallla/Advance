'use strict';

import '../css/style.css';
import search from './search';
import infiniteMovieList from './infiniteMovieList';

search();
infiniteMovieList();

const regExp = /name/;
const str = 'my name is';
console.log(str.match(regExp));
