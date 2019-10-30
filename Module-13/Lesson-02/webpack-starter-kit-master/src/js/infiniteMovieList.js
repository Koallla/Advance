import apiConfig from './config';

export default function() {
  const movieListContainer = document.querySelector('.movie-list');
  const { API_URL, API_KEY, IMG_SRC } = apiConfig;
  let currentPage = 1;
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
    fetchMovieList(page)
      .then(data => {
        renderMovieList(data.results);
      })
      .catch(error => {
        throw error;
      });
  };

  const renderMovieList = movieList => {
    movieListContainer.insertAdjacentHTML(
      'beforeend',
      createMovieList(movieList),
    );
  };

  const addInfinityScroll = () => {
    window.addEventListener('scroll', () => {
      const movieListBottom = movieListContainer.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (movieListBottom / 2 <= windowHeight) {
        console.log('rich bottom');
        getMovies(currentPage);
      }
    });
  };

  getMovies();
  addInfinityScroll();
}
