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
  selector: 'app-cat-other',
  templateUrl: './cat-other.component.html',
  styleUrls: ['../cat-all-task/cat-all-task.component.css']
})
export class CatOtherComponent implements OnInit {

  color: ThemePalette = "primary";
  newTask = '';
  currentTask: string;
  taskArray: Data[] = [];
  doneTask: Data[] = [];
  taskForm: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private readonly taskService: TaskService,
    private readonly router: Router) { 
      this.taskArray = taskService.data;
      this.doneTask = taskService.finData;
      this.taskForm = this.fb.group({
        date: [null],
        category: [null], 
        task: [null]
      })
    }

    // Guiho revise this 
    page:string = "Other";
  
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
      }
    }
  
    deleteOtherTask(): void {

      this.taskArray = this.taskArray.filter(el => el.category !== null);
      this.taskService.data = this.taskService.data.filter(el => el.category !== null);
      this.doneTask = this.doneTask.filter(el => el.category !== null);
      this.taskService.data = this.taskService.finData.filter(el => el.category !== null);
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

    changeCheckedButton(task: string) {
      this.taskService.updateStatusToFalse(task);
    }
  
    changeCheckedDoneButton(task: string) {
      this.taskService.updateStatusDoneToFalse(task);
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


}
