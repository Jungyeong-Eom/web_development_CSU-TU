// I am the king of this below territory.
// CRUD function for handling task data

import { Injectable } from '@angular/core';
import { Data } from './interfaces/task.interface'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  data: Data[] = []; // sharable object
  finData: Data[] = [];


  myStorage = window.localStorage;
  
  constructor() { }

  createNewTask(newTask: Data): void{
    this.data.push(newTask);
  }

  createNewTaskToLocal(localArr: Data[], newTask: Data): void {
    localArr.push(newTask);
  }

  createNewDoneTask(newTask: Data): void{
    this.finData.push(newTask);
  }
  //Unused
  readTask(): Data[] {
    return this.data
  }

  removeTask(index: number) {
    this.data.splice(index, 1);
  }

  // Use for DATE 
  updateTask(index: number, newTask: Data): void {
    // this.data.splice(index, 1, newTask);
    this.data.length = 0; //what is this means?
  }

  updateStatusToTrue(task: string) {
    for (let i = 0; i < this.data.length; i++) {
      if (task === this.data[i].task) {
        this.data[i].checked = true;
      }
    }
  }

  updateStatusDoneToTrue(task: string) {
    for (let i = 0; i < this.data.length; i++) {
      if (task === this.finData[i].task) {
        this.finData[i].checked = true;
      }
    }
  }

  updateStatusToFalse(task: string) {
    for (let i = 0; i < this.data.length; i++) {
      if (task === this.data[i].task) {
        this.data[i].checked = false;
      }
    }
  }

  updateStatusDoneToFalse(task: string) {
    for (let i = 0; i < this.data.length; i++) {
      if (task === this.finData[i].task) {
        this.finData[i].checked = false;
      }
    }
  }

  updateStatusToTrueByIndex(index: number) {
    this.data[index].checked = true;
  }

  updateStatusToDoneTrueByIndex(index: number) {
    this.finData[index].checked = true;
  }

  updateStatusToFalseByIndex(index: number) {
    this.data[index].checked = false;
  }

  updateStatusToDoneFalseByIndex(index: number) {
    this.finData[index].checked = false;
  }


  getCheckedTaskIndex(taskArr: Data[]): number {
    for (let i = 0; i < this.data.length; i++) {
      if (taskArr[i].checked === true) {
        return i;
      }
    }
  }

  getCheckedDoneTaskIndex(doneTaskArr: Data[]): number {
    for (let i = 0; i < this.finData.length; i++) {
      if (doneTaskArr[i].checked === true) {
        return i;
      }
    }
  }

  //Unused
  deleteTask(index: number): void {
    this.data.splice(index, 1);
  }

  updateCategory(cat: string, index: number) {
    this.data[index].category = cat;
  }

  updateDoneCategory(cat: string, index: number) {
    this.finData[index].category = cat;
  }

  updateDate(newDate: string) {
    for(let i = 0; i <= this.data.length; i++) {
      //Error:this.taskService.data[i] is undefined
      if (this.data[i].checked === true) {
        this.data[i].date = newDate;
        return
      }
    } 
  } 

  updateDoneDate(newDate: string) {
    for(let i = 0; i <= this.finData.length; i++) {
      //Error:this.taskService.data[i] is undefined
      if (this.finData[i].checked === true) {
        this.finData[i].date = newDate;
        return
      }
    } 
  } 

}

