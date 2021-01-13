(function() {
  //here we have a constructor function named Vehicle, which is recieving 2 parameters
  function Vehicle(_fuelTankSize, _range) {
    // Instance property assignments
    this.fuelTankSize = _fuelTankSize;
    this.range = _range;
  }
  //we want to create a method called calculateMPG, and define it in our Vehicle.prototype
  Vehicle.prototype.calculateMpg = function() {
    // Instance method logic
    return this.range / this.fuelTankSize;
  }
  // Create a new instance and calculate the MPG for that instance. Print the output to the console.
  const Vehicle_One = new Vehicle(300, 1800);
  console.log("VehicleOne's fueltanksize ", Vehicle_One.fuelTankSize);
  console.log("VehicleOne's range ", Vehicle_One.range);
  console.log("VehicleOne's mpg ", Vehicle_One.calculateMpg());
  // write alternative code to the above example using ES6 class syntax
  class VehicleTwo {
    constructor(_fuelTankSize, _range) {
      this.fuelTankSize = _fuelTankSize;
      this.range = _range;
    }
  }    
  console.log("-----Class Declaration------");
  VehicleTwo.prototype.calculateMpg= function() {
    return this.range / this.fuelTankSize;
  }
  const main_vehicle = new VehicleTwo(300, 1800);
  console.log("VehicleTwo's fueltanksize ", main_vehicle.fuelTankSize);
  console.log("VehicleTwo's range ", main_vehicle.range);
  console.log("VehicleTwo's mpg ", main_vehicle.calculateMpg());
})();