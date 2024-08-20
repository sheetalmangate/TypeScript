// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle {
  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)

  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;
  
  // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    constructor(
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      wheels: Wheel[],
      towingCapacity: number,
    ) {

      super();
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.topSpeed = topSpeed;
      if(wheels.length === 4 ) {
        this.wheels = wheels;
      } else {
        this.wheels = [ new Wheel(), new Wheel(), new Wheel(), new Wheel()];
      }
      this.towingCapacity = towingCapacity;

    }

  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck ): void {
    // TODO: Get the make an model of the vehicle if it exists
    let make = vehicle.make;
    let model = vehicle.model;
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
   if( vehicle.weight >= this.towingCapacity ){
      // TODO: If it is, log that the vehicle is being towed
      console.log(` {make} {model} is towed by truck`);
    } else {
      // TODO: If it is not, log that the vehicle is too heavy to be towed
      console.log(` {make} {model} is not towed by truck`);
    }
  }

  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    console.log(`------------Printing Truck Details------------`);
    console.log(`VIN : ${this.vin}`);
    console.log(`Make : ${this.make}`);
    console.log(`Model : ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    this.wheels.forEach((wheel,index) => {
      console.log(`Wheel ${index} inch with a ${wheel.getTireBrand}`);
    });
    super.printDetails();
  }

    
    
}

// Export the Truck class as the default export
export default Truck;
