class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(type, callback) {
    if (!this.events[type]) {
      this.events[type] = []; // { 'slide:changed': []}
    }

    this.events[type].push(callback);
    // { 'slide:changed': [ () => { console.log('slide changed') ] }
  }

  emit(type, ...args) {
    if (!this.events[type]) return;
    this.events[type].forEach(fn => fn.apply(null, args));
  }
}

const listener = new EventEmitter();
listener.subscribe('slide:changed', () => {
  console.log('slide changed');
});

listener.emit('slide:changed');

const scrollSpy = new EventEmitter();
scrollSpy.subscribe('tab:changed', tabIndex => {
  console.log(tabIndex);
});

window.addEventListener('scroll', () => {
  if (100 > 200) {
    scrollSpy.emit('tab:changed', 2);
  }
});
