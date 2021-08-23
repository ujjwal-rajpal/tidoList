import { Component, Input, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';

import { TaskService } from 'src/app/shared/services/task.service';
import { TodolistModule } from '../todolist.module';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, OnChanges {
  
  @Input() submittedTasks: object
  constructor(public task:TaskService) { }
  toDoList:any =[]
  ngOnInit(): void {
    this.task.undoneTasks.subscribe(data=>{
      if(data)
      this.toDoList.push(data)
    })
  }

  ngOnChanges(){
    if(typeof this.submittedTasks != 'function')
    this.toDoList.push(this.submittedTasks)
  }

  onSelection(event: any, index: any ){
    let deleteIndex = this.toDoList.lastIndexOf(event.option.value);
    this.toDoList.splice(deleteIndex,1)
    this.task.updatetask(event.option.value);
  }

}
