import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { DealershipPageComponent } from './dealership-page/dealership-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    CarsPageComponent,
    LoginComponent,
    DealershipPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
