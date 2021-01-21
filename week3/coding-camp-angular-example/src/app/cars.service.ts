import { Injectable } from '@angular/core';

import { Car } from './interfaces/cars.interface';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars: Car[] = [
    {
      make: 'Toyota',
      model: 'Camri'
    },
    {
      make: 'Ford',
      model: 'F-150'
    },
    {
      make: 'Honda',
      model: 'Civic'
    }
  ];

  constructor() { }

  // Create data
  addCar(newCar: Car) {
    this.cars.push(newCar)
  }

  // Reading data
  getCars(): Car[] {
    return this.cars;
  }
  
  // Updating data
  updateCar(index: number, newCar: Car): void {
    this.cars.splice(index, 1, newCar);
  }

  // Deleting data
  removeCar(index: number): void {
    this.cars.splice(index, 1);
  }

}
