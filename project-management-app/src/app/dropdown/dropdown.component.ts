import { Component, NgModule, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Category {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})

export class DropdownComponent implements OnInit {

  categoriesControl = new FormControl('', Validators.required);
  categories: Category[] = [
    {value: 'internal-communications-app-0', viewValue: 'Internal Communications App'},
    {value: 'general-work-1', viewValue: 'General Work'},
    {value: 'other-2', viewValue: 'Other'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
