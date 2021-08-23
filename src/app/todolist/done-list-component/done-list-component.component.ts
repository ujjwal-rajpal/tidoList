import { Component, Input, OnInit } from '@angular/core';

import { TaskService } from 'src/app/shared/services/task.service';
@Component({
  selector: 'app-done-list-component',
  templateUrl: './done-list-component.component.html',
  styleUrls: ['./done-list-component.component.scss']
})
export class DoneListComponentComponent implements OnInit {
  
  constructor(private task:TaskService) { }
  toDoList:any =[]
  ngOnInit(): void {
    this.task.newTask.subscribe(data=>{
      if(data)
      this.toDoList.push(data)
    })
  }

  

  onSelection(event: any, index: any ){
    let deleteIndex = this.toDoList.lastIndexOf(event.option.value);
    this.toDoList.splice(deleteIndex,1)
    this.task.updateUndoneTasks(event.option.value);
    
  }

}
