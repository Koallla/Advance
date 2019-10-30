export default function(element, cb) {
  window.addEventListener('click', event => {
    if (!event.target.closest(element)) {
      cb();
    }
  });
}
