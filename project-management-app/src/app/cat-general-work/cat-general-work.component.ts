import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';  
import { TaskService } from '../task.service';
import { FormBuilder } from '@angular/forms';
import { Data } from '../interfaces/task.interface';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cat-general-work',
  templateUrl: './cat-general-work.component.html',
  styleUrls: ['../cat-all-task/cat-all-task.component.css']
})
export class CatGeneralWorkComponent implements OnInit {
  color: ThemePalette = "primary";
  newTask = '';
  currentTask: string;
  taskArray: Data[] = [];
  doneTask: Data[] = [];
  taskForm: FormGroup
  page:string = "General Work";

  // task.category == "ga.." && task.category !=='numll
  profileForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly taskService: TaskService,
    private readonly router: Router) { 
      this.taskArray = taskService.data;
      this.doneTask = taskService.finData;
      this.taskForm = this.fb.group({
        date: [null],
        category: ["General Work"],
        task: [null]
      })
    }

    // Guiho revise this
  
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
      // this.taskService.createNewTaskToLocal(this.taskArray, this.taskForm.value);
      this.newTask='';
      console.log(this.taskService.data);
      console.log(this.taskArray);
    }
  }


  deleteGeneralTask(): void {
    this.taskArray = this.taskArray.filter(el => el.category !== 'General Work');
    this.taskService.data = this.taskService.data.filter(el => el.category !== 'General Work');
    this.doneTask = this.doneTask.filter(el => el.category !== 'General Work');
    this.taskService.finData = this.taskService.finData.filter(el => el.category !== 'General Work');
    console.log(this.taskService.data);
    console.log(this.taskArray);
    // What does this do? @Jun idk you can delete it.
    // this.taskArray.splice(0);
  }

  checkedButton(task: string) {
    this.taskService.updateStatusToTrue(task);
    this.router.navigate(['/view-task']);
    console.log(task);
  }

  checkedDoneButton(task: string) {
    this.taskService.updateStatusDoneToTrue(task);
    console.log(task);
    this.router.navigate(['/view-task'])
  }

  moveToViewTask(e) { 
    console.log(this.taskService.data);
    let taskDataArr = this.taskService.data;
    let i: number = this.taskService.getCheckedTaskIndex(taskDataArr);
    if (taskDataArr[i].checked === true && e.keyCode === 13) {
        this.router.navigate(
          ['/view-task'])
    }
  }

  ngOnInit(): void {
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



