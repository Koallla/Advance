import apiConfig from './config';
import clickOutside from './clickOutside';

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
    ul.innerHTML = createMovieList(movieList);
  };

  const openSearchList = () => {
    isOpen = true;
    ul.classList.add('active');
  };

  const closeSearchList = () => {
    isOpen = false;
    ul.classList.remove('active');
  };

  clickOutside(searchListSelector, closeSearchList);

  searchForm.addEventListener('submit', async e => {
    e.preventDefault();

    const { results } = await setMovieListByName(searchInput.value);
    renderMovieList(results);
    openSearchList();
  });
}
