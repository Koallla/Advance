'use strict';

import '../css/style.css';
import { Navigation } from './navigation';

const nav = new Navigation('.nav__item', '.section');

nav.init();
