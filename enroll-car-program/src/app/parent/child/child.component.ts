import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() item;
  
  array = []; //We should make a array that passed value by parent.

  constructor() { }

  ngOnInit(): void {
    
  }


}

