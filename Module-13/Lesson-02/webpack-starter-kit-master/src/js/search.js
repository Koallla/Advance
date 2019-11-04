import apiConfig from './config';
import clickOutside from './clickOutside';
import { debounce } from 'lodash';

export default function() {
  const searchForm = document.querySelector('.search');
  const searchInput = document.querySelector('.search__input');
  const { API_URL, API_KEY } = apiConfig;
  const searchListSelector = '.search__results';
  const ul = document.querySelector(searchListSelector);
  let isOpen = false;

  const getMovieListByName = async name => {
    const result = await fetch(
      `${API_URL}/search/movie?query=${name}&api_key=${API_KEY}`,
    );

    return await result.json();
  };

  const setMovieListByName = async name => {
    return await getMovieListByName(name);
  };

  const createMovieListItem = movie => {
    return `<li><a href="">${movie.original_title}</a></li>`;
  };

  const createMovieList = movieList => {
    return movieList.reduce((acc, movie) => {
      return acc + createMovieListItem(movie);
    });
  };

  const renderMovieList = movieList => {
    if (!movieList.length) {
      ul.innerHTML = '';
    } else {
      ul.innerHTML = createMovieList(movieList);
    }
  };

  const openSearchList = () => {
    isOpen = true;
    ul.classList.add('active');
  };

  const closeSearchList = () => {
    isOpen = false;
    ul.classList.remove('active');
  };

  const onInputChange = async e => {
    const name = searchInput.value;
    let results = [];
    if (name) {
      const data = await setMovieListByName(name);
      results = data.results;
    }

    renderMovieList(results);
    openSearchList();
  };

  clickOutside(searchListSelector, closeSearchList);

  searchInput.addEventListener('input', debounce(onInputChange, 200));
  searchForm.addEventListener('input', e => e.preventDefault());
}
