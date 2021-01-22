import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { DealershipPageComponent } from './dealership-page/dealership-page.component';


//generate the new component dealership-page
// ng generate component dealership-page

// I should

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'cars-page',
    component: CarsPageComponent
  },
  {
    path: 'dealership-page',
    component: DealershipPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
