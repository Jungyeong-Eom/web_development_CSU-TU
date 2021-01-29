import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TaskService } from '../task.service';
import { Data } from '../interfaces/task.interface';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {  Router } from '@angular/router';
import { MatRadioModule} from '@angular/material/radio';
import { fromEventPattern } from 'rxjs';
import { ThemePalette } from '@angular/material/core';  
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-cat-all-task',
  templateUrl: './cat-all-task.component.html',
  styleUrls: ['./cat-all-task.component.css']
})
export class CatAllTaskComponent implements OnInit {

  color: ThemePalette = "primary";
  newTask = '';
  currentDate = new Date;
  currentTask: string;
  taskArray: Data[] = [];
  doneTask: Data[] = []
  taskForm: FormGroup;
  profileForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
  });

  constructor (
    private readonly fb: FormBuilder,
    private taskService: TaskService,
    private readonly router: Router,
    private changeDetectorRef: ChangeDetectorRef
    ){
      this.taskArray = taskService.data;
      this.doneTask = taskService.finData;
      this.taskForm= this.fb.group({
        date: [null],
        category: [null],
        task: [null],
        checked: [false]
      })
    };
  

  ngOnInit(): void {
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.newTask);
  }

  handleKeyUp(e) {
    if (e.keyCode === 13 && this.newTask) {
      this.handleSubmit(e);
      console.log("event: " + e);
      this.taskService.createNewTask(this.taskForm.value);
      this.taskArray = this.taskService.data;
      this.newTask='';
      console.log(this.taskService.data);
      console.log(this.taskArray);
    }
  }

  deleteAllTask(): void {
    this.taskArray.splice(0);
    this.taskService.data.splice(0);
    this.doneTask.splice(0);
    this.taskService.finData.splice(0);
  }
    

  checkedButton(task: string) {
    this.taskService.updateStatusToTrue(task);
    console.log(task);
    this.router.navigate(['/view-task'])
  }

  checkedDoneButton(task: string) {
    this.taskService.updateStatusDoneToTrue(task);
    console.log(task);
    this.router.navigate(['/view-task'])
  }

  changeCheckedButton(task: string) {
    this.taskService.updateStatusToFalse(task);
  }

  changeCheckedDoneButton(task: string) {
    this.taskService.updateStatusDoneToFalse(task);
  }

  moveToViewTask(e) { 
    console.log(this.taskService.data);
    let i: number = this.taskService.getCheckedTaskIndex(this.taskService.data);
    if (this.taskService.data[i].checked === true && e.keyCode === 13) {
        this.router.navigate(
          ['/view-task'])
    } 
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

    
  }


};




  
  
  
  
  
