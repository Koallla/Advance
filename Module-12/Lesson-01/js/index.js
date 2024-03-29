'use strict';

const API_KEY = '76ed63f80dba3e42bfe198c0806fa9ba';
const IMG_SRC = 'https://image.tmdb.org/t/p/w500_and_h282_face/';

const API_URL = 'https://api.themoviedb.org/3';
const movieListContainer = document.querySelector('.movie-list');
let currentPage = 1;

//https://api.themoviedb.org/3/movie/popular?api_key=76ed63f80dba3e42bfe198c0806fa9ba&language=en-US&page=1

(function() {
  const fetchMovieList = (page = 1) => {
    currentPage = currentPage + 1;
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
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
})();

const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('.search__input');

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
  const ul = document.querySelector('.search__results');
  ul.innerHTML = createMovieList(movieList);
};

searchForm.addEventListener('submit', async e => {
  e.preventDefault();

  const { results } = await setMovieListByName(searchInput.value);
  renderMovieList(results);
});
