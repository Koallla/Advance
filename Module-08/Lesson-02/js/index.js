import search from './search.js';
import scrollSpy from './scroll-spy.js';
import lazyLoad from './lazy-load.js';

search();
scrollSpy();

const lazyImage = document.querySelector('.lazy-image');
lazyLoad(lazyImage);
