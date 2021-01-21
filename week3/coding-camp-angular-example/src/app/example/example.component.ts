import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../interfaces/cars.interface';

import { CarsService } from '../cars.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @Input() item: Car;

  @Output() deleteItem: EventEmitter<any> = new EventEmitter();

  cars: Car[] = []

  constructor(private readonly carsService: CarsService) { }

  ngOnInit(): void {
    this.cars = this.carsService.getCars();
  }

  removeItem(): void {
    this.deleteItem.emit()
  }

  logCars(): void {
    console.log(this.carsService.getCars());
  }
}
