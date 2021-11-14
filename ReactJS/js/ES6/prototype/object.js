function Point2D(x, y) {
  this.x = x;
  this.y = y;
}
// Point2D.prototype.toString = () => {
Point2D.prototype.toString = function () {
  this.toString = function () {
    return "[point]: (" + this.x + ", " + this.y + ")";
  };
};

const point = new Point2D(99, 81);
const point1 = new Point2D(21, 13);
console.log(point.toString === point1.toString);

