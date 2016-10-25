#Airport Challenge

```
        ______
        _\____\___
=  = ==(_Lau&Franc_)
          \_____\___________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```
##Converted ruby challenge into javascript

###Airport function

``` js
function Airport () {
  this.capacity = 2
  this.listLandedPlanes = []
  this.weather = new Weather ()
};

Airport.prototype.landedPlane = function (plane) {
  if(this.isBadWeather () === true){
    throw ('The plane can\'t land due to stormy weather');
  }
  else {
    this.listLandedPlanes.push(plane)
    plane.landPlane ()
  }
};
```

###Spec tests

```js
describe('Airport', function () {
    var airport = new Airport ();
    var plane = new Plane ();
    var plane2 = new Plane ();
    var plane3 = new Plane ();

  it ('has a limited capicity of planes', function () {
    expect(airport.capacity).toEqual(2);
  });

  it ('adds landing plane to the list of landed plane', function () {
      spyOn(airport, 'isBadWeather').and.returnValue(false)
      airport.landedPlane(plane)
      expect(airport.listLandedPlanes).toContain(plane)
  });

```
