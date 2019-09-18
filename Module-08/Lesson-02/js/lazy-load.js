export default function(img) {
  const options = {
    rootMargin: '-160px',
    threshold: 0,
  };

  const loadImage = img => {
    const src = img.getAttribute('data-src');
    img.setAttribute('src', src);
  };

  const onEntry = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadImage(img);
      }
    });
  };

  const observer = new IntersectionObserver(onEntry, options);

  observer.observe(img);
}
