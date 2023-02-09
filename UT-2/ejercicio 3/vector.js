function Vector(x, y) {
  this.x = x;
  this.y = y;
  this.sumar = function (vector) {
    this.x += vector.x;
    this.y += vector.y;
  };
  this.resta = function (vector) {
    this.x -= vector.x;
    this.y -= vector.y;
  };
  this.longitud = function () {
    let longitud = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    return longitud;
  };
}
