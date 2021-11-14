function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var myCar = new Car("honda", "accord", 1988);
const a = myCar instanceof Car;
const b = myCar instanceof Object;

console.log(a);
console.log(b);
