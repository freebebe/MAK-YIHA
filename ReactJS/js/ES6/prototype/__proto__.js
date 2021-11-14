function Point2D(x, y) {
  this.x = x;
  this.y = y;
}

const point = new Point2D(22, 301);

function findTopLevel(obj) {
  const curLevel = obj;

  while (curLevel && curLevel.__proto__) {
    curLevel = curLevel.__proto__;
  }

  return curLevel;
}

let TopPrototype = findTopLevel(point);
console.log(TopPrototype.constructor.name);

