import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Car } from '../interfaces/car.interface'; // oh shoot!
// WE need this interface
import { CarsService } from '../cars.service'; // OR I can change these project folder's tree like our example folder's tree 
// Oh :) gtg gtg game starting

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor(private readonly carsService: CarsService) { }

  @Input() item: Car;

  @Output() deleteItem: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    console.log(this.carsService.getCars());
  }

  removeItem(): void {
    this.deleteItem.emit()
  }

  // Shows Cars log
  logCars(): void {
    console.log(this.carsService.getCars());
  }

}
