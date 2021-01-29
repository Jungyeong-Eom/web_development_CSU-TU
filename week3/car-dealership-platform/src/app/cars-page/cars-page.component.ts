import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarsService } from '../cars.service';
import { NgModule } from '@angular/core';
import { Car } from '../interfaces/car.interface'

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {

  carsShowing: boolean = true;
  msg: string = '';
  carForm: FormGroup

  cars = [];

  constructor(
    private readonly carsService: CarsService,
    private fb: FormBuilder,
    private readonly router: Router,
    ) { 
      this.cars = carsService.Cars;
      this.carForm = this.fb.group({
      make: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      model: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]], 
      year: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      color: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  @Input() item: Car;

  @Output() deleteItem: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    console.log(this.carsService.getCars());

    this.carForm.valueChanges.subscribe(val => {
      console.log('carForm val', val)

      if (this.carForm.status ==='INVALID') {
        // set p tag = "Form is invalid"
        this.msg = "Form is invalid";
      }
      else {
        // set p tag = "Form is valid"
        this.msg = "Form is valid";
      }
    })
  }

  removeCar(index): void {
    this.carsService.removeCar(index);
  }

  // Shows Cars log
  logCars(): void {
    console.log(this.carsService.getCars());
  }

  toggleCars(): void {
    // this.carForm.patchValue({
    //   make: 'Hyundai', model: 'Elantra'})
    console.log('Car Form', this.carForm);
    this.carsService.addCars(this.carForm.value);
  }

  
}
