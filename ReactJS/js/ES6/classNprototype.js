let foo = {
  blah: 7,
  // matToo: function () {
  matToo: () => {
    console.log(this.blah);
  },
};

let too = {
  babelTest: 99,
  // testMemo: function () {
  testMemo: () => {
    console.log(this.babelTest);
  },
};

foo.matToo();

const TooPrototype = {
  // testMemo: function () {
  testMemo: () => {
    console.log(this.babelTest);
  },
};

function Too(babelTest) {
  let ohaha = Object.create(TooPrototype);
  ohaha.babelTest = babelTest;
  return ohaha;
}

too = Too(7);
too.testMemo();
console.log(Too.prototype.__proto__ === Object.prototype);
console.log(foo.__proto__ === too.prototype);
