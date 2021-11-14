function Foo() {
}

function Bar() {
  Foo.call(this);
}

Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.constructor = Bar;

function Baz() {
  Bar.call(this);
}

Baz.prototype = Object.create(Bar.prototype);
Baz.prototype.constructor = Baz;

Foo.prototype.hiTest = () => console.log("hiTest");

(new Foo().hiTest());
(new Bar().hiTest());
(new Baz().hiTest());

Bar.prototype.overTest = () => console.log("overTest");

(new Bar().overTest());
(new Baz().overTest());

// check { instance }

function testSion(name, age) {
  this.name = name;
  this.age = age;
}
testSion.prototype.logHistory = function () {
  console.log("name:" + this.name + " age:" + this.age);
};

const testSionA = new testSion("john", 40);
console.log(testSionA.__proto__ === testSion.prototype);
console.log(testSion.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);

