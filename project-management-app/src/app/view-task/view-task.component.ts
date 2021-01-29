import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';  
import { TaskService } from '../task.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Data } from '../interfaces/task.interface';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
import * as Moment from 'moment'

// Serves as viewing all data from a task and as a Location tracker
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})

export class ViewTaskComponent implements OnInit {
  calcDate:any;
  currentDate = new Date();
  color: ThemePalette = "primary";
  taskArray: Data[] = [];
  doneTask: Data[] = [];
  dateForm: FormGroup;
  newDate = '';
  selectedCat ='';
  page:string = "view-task-app";
  checkedIndex:number = this.taskService.getCheckedTaskIndex(this.taskService.data);
  
  constructor(
    private location: Location,
    private taskService: TaskService,
    private readonly fb: FormBuilder,
    private readonly router: Router
    ){ 
      this.taskArray = taskService.data;
      this.doneTask = taskService.finData;
      this.dateForm= this.fb.group({  
        date:[this.taskArray[this.checkedIndex].date, [Validators.minLength(8), Validators.maxLength(15)]],
        category:[null, [Validators.required]] 
      }),
      
      this.dateForm.valueChanges.subscribe((val) => {
        console.log("Before Format the date is:",val.date);
        val.date = Moment(val.date).format("ddd, MMM DD, YYYY");
        // const date: string = Moment(val.date).format("ddd/MMM/DD/YYYY");
        console.log("After format:", val.date);
        // console.log(this.taskService.data);
        this.taskService.updateDate(val.date)
      });
      
      // how were we saving it before and to what? follow me!!!!!???????? check the view-task.html [checked]
        //check out below! handleKeyUp method
      //   data -> array
      //   console.log(this.selectedCat);
      //   if (this.selectedCat === 'Other') {
      //     this.taskService.data[this.checkedIndex].category = null;
      //   } else {
      //     this.taskService.data[this.checkedIndex].category = this.selectedCat
      //   }
      //     console.log(this.taskService.data[this.checkedIndex]);
      // }

    }
  
  ngOnInit(): void {
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.newDate);
  }

  // handleKeyUp(e) {
  //   if (this.newDate && this.dateForm.status !== 'INVALID') { 
  //     this.handleSubmit(e);
  //     console.log("event: " + e);;
  //     this.taskService.data[this.checkedIndex].date = date;
  //     this.newDate='';
  //     console.log(this.taskService.data);
  //   }
  // }

  moveView(): void {
    this.router.navigate(
      ['/view-task']
    );
  }

  deleteCurrentTask(): void {
    console.log(this.taskArray, this.taskArray.length); 
     this.taskArray = this.taskArray.filter(el => el.checked !== true);
     this.taskService.data = this.taskService.data.filter(el => el.checked !== true);
  }

  checkedButton(task: string) {
  this.taskService.updateStatusToTrue(task);
  console.log(task);
  }

  unCheckedButton(task: string) {
    this.taskService.updateStatusToFalse(task);
    console.log(task);
    }

  moveBack(): void {
    if (this.taskService.data[this.checkedIndex]) {
      this.taskService.data[this.checkedIndex].checked = false;
    }
    this.location.back(); 
  }

  catClick() {
    console.log(this.selectedCat);
    if (this.selectedCat === 'Other') {
      this.taskService.data[this.checkedIndex].category = null;
    } else {
      this.taskService.data[this.checkedIndex].category = this.selectedCat
    }
      console.log(this.taskService.data[this.checkedIndex]);
  }
}