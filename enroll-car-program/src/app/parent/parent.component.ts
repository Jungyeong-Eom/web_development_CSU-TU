/*
  Directions: Use some input elements to make a basic form in your app component. 
  When you click the button to submit the form, it pushes that information, 
  as an object, into an array. Use *ngFor to loop over that array and show the information 
  as a list somewhere on the page. Items in that list must be a child component.

  Optional: Add a button to the child component that deletes that item from the list, 
  using the @Output decorator
*/

import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';




@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  carsShowing: boolean = true;

  carMake = ''
  carModel = '';
  carYear = '';
  carColor = '';
  email = '';

  msg:string = '';

  carForm: FormGroup

  cars = [
    {
      make: 'Honda',
      model: 'Civic',
      year:'2021',
      color:'yellow', // is this a Taxi? lololol yellow cap
      email:'asdf@gmail.com'
    }, 
    {
      make: 'Honda',
      model: 'Civic',
      year:'2021',
      color:'blue',
      email:'asdff@gmail.com'
    }, 
    {
      make: 'Honda',
      model: 'Civic',
      year:'',
      color:'',
      email:''
    }
  ];

  constructor(private fb: FormBuilder) {

    // We need to use 3 different kinds of validators
    // One of those could be the email validator  seems like completed.
    // the last one has an email validator
    this.carForm = this.fb.group({
      make: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      model: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]], 
      year: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      color: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
    });
  }
  
  toggleCars(): void {
    // this.carForm.patchValue({
    //   make: 'Hyundai', model: 'Elantra'})
    console.log('Car Form', this.carForm);
    this.cars.push(this.carForm.value);
  }


  ngOnInit(): void {
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
}