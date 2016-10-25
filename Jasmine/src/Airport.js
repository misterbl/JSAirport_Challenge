function Airport () {
  this.capacity = 2
  this.listLandedPlanes = []
};


Airport.prototype.landedPlane = function (plane) {
  this.listLandedPlanes.push(plane)
  plane.landPlane ()
};

Airport.prototype.confirmsLanded = function (plane) {
  return "The plane has landed"
};

Airport.prototype.takenOffPlane = function (plane) {
  this.listLandedPlanes.splice(this.listLandedPlanes.indexOf(plane), 1 )
  plane.takesOff ()
};

Airport.prototype.confirmsTakeOff = function (plane) {
  return "The plane has taken off"
};

// Airport.prototype.fullCapacity = function () {
//   if this.listLandedPlanes.length >= this.capacity
//   return "The airport is full, the plane can't land"
// }
