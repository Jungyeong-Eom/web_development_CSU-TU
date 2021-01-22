import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Car } from '../interfaces/car.interface'; 
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {

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
