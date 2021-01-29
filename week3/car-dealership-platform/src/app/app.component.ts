import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
//  Importing car service into parent component
import { CarsService } from './cars.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{         //Error!

  // carsShowing: boolean = true;

  // msg: string = '';

  // carForm: FormGroup


  cars = [];

  constructor(
    // private fb: FormBuilder,
    // private readonly router: Router,
    // private carsService: CarsService
    ) {

    // We need to use 3 different kinds of validators
    // One of those could be the email validator  seems like completed.
    // the last one has an email validator
    //   this.cars = carsService.Cars;
    //   this.carForm = this.fb.group({
    //   make: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
    //   model: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]], 
    //   year: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
    //   color: [null, [Validators.required]],
    //   email: [null, [Validators.required, Validators.email]]
    // });
  }
  
  // toggleCars(): void {
  //   // this.carForm.patchValue({
  //   //   make: 'Hyundai', model: 'Elantra'})
  //   console.log('Car Form', this.carForm);
  //   this.carsService.addCars(this.carForm.value);
  // }


  ngOnInit(): void {
    

    
    // this.carForm.valueChanges.subscribe(val => {
    //   console.log('carForm val', val)

    //   if (this.carForm.status ==='INVALID') {
    //     // set p tag = "Form is invalid"
    //     this.msg = "Form is invalid";
    //   }
    //   else {
    //     // set p tag = "Form is valid"
    //     this.msg = "Form is valid";
    //   }
    // })
  }

  // login(): void {
  //   const {favoriteCar} = this.carForm.value.favoriteCar
  //   this.router.navigate(
  //     ['/dealership-page', {favoriteCar: favoriteCar }],
  //     { queryParams: { 
  //       favoriteCar
  //       } 
  //     }
  //   );
  // }

  
  
  // removeCar(index: number): void {
  //   this.carsService.removeCar(index);
  // }
}

