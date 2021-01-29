import { Component } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'project-management-app';
  constructor(private readonly router: Router){};
  

  moveInternal(): void {

    this.router.navigate(
      ['/internal-comms-app']
    );
  }
  moveGeneral(): void {

    this.router.navigate(
      ['/general-work']
    );
  }
  moveOther(): void {

    this.router.navigate(
      ['/other']
    );
  }
  moveAll(): void {

    this.router.navigate(
      ['']
    );
  }
  
}
