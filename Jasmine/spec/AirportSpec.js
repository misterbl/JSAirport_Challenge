describe('Airport', function () {
    var airport = new Airport ();
    var plane = new Plane ();
    var plane2 = new Plane ();
    var plane3 = new Plane ();
  it ('has a limited capicity of planes', function () {
    expect(airport.capacity).toEqual(2);
  });


  it ('adds landing plane to the list of landed plane', function () {
      airport.landedPlane(plane)
      expect(airport.listLandedPlanes).toContain(plane)
  });


  it ('confirms a plane has landed', function (){
    expect(airport.confirmsLanded(plane)).toEqual("The plane has landed")
  });

  it ('removes taking off plane from the list of landed plane', function () {
    airport.takenOffPlane(plane)
    expect(airport.listLandedPlanes).not.toContain(plane)
  });

  it ('confirms a plane has taken off', function (){
    expect(airport.confirmsTakeOff(plane)).toEqual("The plane has taken off")
  })

  it ('doesn\'t let a plane to land if it is full', function () {
    airport.landedPlane(plane)
    airport.landedPlane(plane2)
    airport.landedPlane(plane3)
(    expect(airport.fullCapacity()).toEqual("The airport is full, the plane can't land")
)  });
});
//
//   it "forbids planes to land if the weather is stormy" do
//   plane = double(:plane)
//   allow(plane).to receive(:plane_number).and_return('1234')
//   allow(subject).to receive(:stormy) {true}
//   expect(subject.landed_planes(plane)).to eq("The plane #{plane.plane_number} can't land due to stormy weather")
//   end
//
//   it "forbids planes to take off if the weather is stormy" do
//   plane = double(:plane)
//   allow(plane).to receive(:plane_number).and_return('1234')
//   allow(subject).to receive(:stormy) {true}
//   expect(subject.taken_off_planes(plane)).to eq("The plane #{plane.plane_number} can't take off due to stormy weather")
//   end
//
// end
