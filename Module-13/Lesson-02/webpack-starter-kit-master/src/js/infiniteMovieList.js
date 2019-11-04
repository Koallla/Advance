import apiConfig from './config';
import throttle from 'lodash/throttle';

export default function() {
  const movieListContainer = document.querySelector('.movie-list');
  const { API_URL, API_KEY, IMG_SRC } = apiConfig;
  let currentPage = 1;
  let isMovieListLoading = false;
  const fetchMovieList = (page = 1) => {
    currentPage = currentPage + 1;
    return fetch(
      `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    ).then(result => result.json());
  };

  const createMovieItem = ({
    title,
    vote_average,
    vote_count,
    poster_path,
  }) => {
    return ` <div class="movie-item">
                  <img src="${IMG_SRC +
                    poster_path}" alt="${title}" class="movie-item__img" />
                  <h2 class="movie-item__title">${title}</h2>
                  <span class="movie-item__rating">Rating(${vote_count}): ${vote_average}</span>
              </div>`;
  };

  const createMovieList = movieList => {
    return movieList.reduce((acc, movie) => {
      return acc + createMovieItem(movie);
    }, '');
  };

  const getMovies = page => {
    isMovieListLoading = true;

    fetchMovieList(page)
      .then(data => {
        renderMovieList(data.results);
      })
      .catch(error => {
        throw error;
      })
      .finally(() => {
        isMovieListLoading = false;
      });
  };

  const renderMovieList = movieList => {
    movieListContainer.insertAdjacentHTML(
      'beforeend',
      createMovieList(movieList),
    );
  };

  const onScrollEvent = () => {
    if (isMovieListLoading) return;

    const movieListBottom = movieListContainer.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (movieListBottom / 2 <= windowHeight) {
      getMovies(currentPage);
    }
  };

  const addInfinityScroll = () => {
    window.addEventListener('scroll', throttle(onScrollEvent, 1000));
  };

  getMovies();
  addInfinityScroll();
}
