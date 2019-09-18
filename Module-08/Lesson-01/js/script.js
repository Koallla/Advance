'use strict';

// window.addEventListener(
//   'scroll',
//   _.throttle(e => {
//     console.log(e);
//   }, 200),
// );

// const searchInput = document.querySelector('.search__input');
// searchInput.addEventListener(
//   'input',
//   _.debounce(event => {
//     console.log(event.target.value);
//   }, 300),
// );

const navLinks = Array.from(document.querySelectorAll('.nav__link'));
const sections = Array.from(document.querySelectorAll('.navigation-section'));
let activeLink = navLinks[0];

const addActiveLink = link => {
  link.classList.add('active');
};

const removeActiveLink = link => {
  link.classList.remove('active');
};

const setActiveNavLinkByNavData = navData => {
  const activeLink = navLinks.find(
    elem => elem.getAttribute('data-nav') === navData,
  );
  addActiveLink(activeLink);
  return activeLink;
};

const options = {
  rootMargin: '50px',
  threshold: 0,
};

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionName = entry.target.getAttribute('data-section');
      removeActiveLink(activeLink);
      activeLink = setActiveNavLinkByNavData(sectionName);
    }
  });
};

const observer = new IntersectionObserver(onEntry, options);

sections.forEach(section => observer.observe(section));

addActiveLink(navLinks[0]);
