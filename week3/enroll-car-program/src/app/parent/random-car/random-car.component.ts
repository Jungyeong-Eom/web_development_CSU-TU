/*
  1. Create a component in the app directory called random-car
  2. Inside your random-car.component Create an Array of strings of car names.  Write at least 5 different cars. (example: Tesla Model X or Ford F150, Toyota Corolla 2015) 
  3. Write code that when an instance of the random-car.component is initialized, it assigns a random car string to a "car" property from an array of different possible cars.
    -hint, this should probably be in your ngOnInit(){} method
  4. This should be displayed via a paragraph tag or a header tag in your HTML
  5. Add a button that changes the car to another random car on click
  6. Add a button which deletes the name of the car,
  7. Create an input that allows for a new car to be added that can be seen when we click for a random car
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-car',
  templateUrl: './random-car.component.html',
  styleUrls: ['./random-car.component.css']
})

// It is undefined :sad
export class RandomCarComponent implements OnInit {
  listOfCars: string[] = ["Tesla Model X", "Ford Mustang", "Audi A7", "Infiniti G35", "Dodge Challenger"];
  car:string = "";

  constructor() {
   }

  ngOnInit(): void {    
    this.randomCar();
  }
  // What does this method do?

  randomCar(): void {
    //sets a random car from listOfCars to the property car
    this.car = this.listOfCars[Math.floor(Math.random() * this.listOfCars.length)];
    console.log("is the car:", this.car);
  }

  // addNewCar(): void{
  //   this.listOfCars.push();
  //   console.log("new car:");
  // }

}
