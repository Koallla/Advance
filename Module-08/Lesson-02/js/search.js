export default function() {
  const searchInput = document.querySelector('.search__input');
  const paragraphList = Array.from(
    document.querySelectorAll('.navigation-section__text'),
  );

  const wrapWord = word => {
    return `<span class="search-result">${word}</span>`;
  };

  const replaceBySearchResult = (text, word) => {
    const regExp = new RegExp(word, 'g');
    return text.replace(regExp, wrapWord(word));
  };

  const insertSearchTextInParagraphs = word => {
    paragraphList.forEach((paragraph, index) => {
      paragraph.innerHTML = replaceBySearchResult(paragraph.textContent, word);
    });
  };

  searchInput.addEventListener(
    'input',
    _.debounce(event => {
      insertSearchTextInParagraphs(event.target.value);
    }),
    300,
  );
}
