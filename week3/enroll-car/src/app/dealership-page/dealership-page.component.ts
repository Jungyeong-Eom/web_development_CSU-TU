import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dealership-page',
  templateUrl: './dealership-page.component.html',
  styleUrls: ['./dealership-page.component.css']
})
export class DealershipPageComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute
  ) { }

  favoriteCar: any;

  ngOnInit(): void {


    
    this.favoriteCar = this.route.snapshot.queryParams.favoriteCar;
    // this.favoriteCar = this.route.snapshot.queryParams.favoriteCar;
      // log for the route params
      console.log("route params", this.route.snapshot); //we need to import routing module first
  }
}
