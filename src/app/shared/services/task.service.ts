import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskType } from '../interfaces/task-type';
@Injectable({
  providedIn: 'root'
})

export class TaskService {
  
  public newTask = new BehaviorSubject<Object>("");
  public undoneTasks = new BehaviorSubject<Object>("");
  constructor() { }

  updatetask(task:TaskType){
    this.newTask.next(task);
  }

  updateUndoneTasks(task:TaskType){
    this.undoneTasks.next(task);
  }
  
}





