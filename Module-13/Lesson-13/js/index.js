'use script';

const generator = function*() {
  console.log('generator started');
  yield 1;
  console.log('generator return first value');
  yield 2;
  yield 3;
};

const bar = generator();

console.log(bar.next());
console.log(bar.next());
console.log(bar.next());
console.log(bar.next());
