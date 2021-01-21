// Using the code that you guys were working on yesterday and the day before
// [O] 1. Create a service
// [X] 2. Put the array that you were using before in that service
// [X] 3. Create a method that returns that array - Reads data
// [X] 4. Use that service in your app.component to get the data, instead of hard coding the array in your app.component

// Remember ng g s service-name to generate a service
// If you finish quick, you can make a service method that removes an item from the array and use that in your app.component
import { Injectable } from '@angular/core';

import { Car } from './interfaces/car.interface';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

// what are you writing there?
Cars: Car[] = [
    {
      make: 'Volkswagen',
      model: 'Beetle',
      year: '1992', 
      color:'yellow with taxi stickers', 
      email:'cooltaxi@gmail.com'
    }, 
    {
      make: 'Honda',
      model: 'Accord',
      year: '2021',
      color:'blue',
      email:'asdff@gmail.com'
    }, 
    {
      make: 'Honda',
      model: 'Civic',
      year: '1999',
      color:'green',
      email:'oldhonda@gmail.com'
    }
  ];

    constructor() { }

    // Creates data
    addCars(newCar: Car): void{
      this.Cars.push(newCar);
    }
    
    // Reads data
    getCars(): Car[] {
      return this.Cars;
    }
    
    // Updates data
    //pass in the car and make a new 
    updateCar(index: number, newCar: Car): void {
      this.Cars.splice(index, 1, newCar);
    }
    
    // Deletes data
    removeCar(index: number): void {
      this.Cars.splice(index, 1);
    }

    returnArray() {
      return this.Cars;
    }
}
