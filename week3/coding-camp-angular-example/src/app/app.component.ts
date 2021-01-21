import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CarsService } from './cars.service';

import { Car } from './interfaces/cars.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  carsShowing: boolean = true;

  carForm: FormGroup;

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

  // Runs before the HTML renders
  constructor(
    private readonly fb: FormBuilder,
    private readonly carsService: CarsService
  ) {
    this.carForm = this.fb.group({
      make: [null, [Validators.required]], 
      model: [null, [Validators.minLength(4)]]
    });
  }

  ngOnInit() {
    console.log(this.carsService.getCars())
    this.carForm.valueChanges.subscribe(val => {
      console.log('carForm val', val)
    });
  }

  toggleCars(): void {
    this.carForm.patchValue({
      make: '',
      model: ''
    });

    console.log('Car Form', this.carForm);

    this.cars.push(this.carForm.value);
  }

  removeCar(index: number): void {
    this.carsService.removeCar(index)
  }
}