import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-to-do-component',
  templateUrl: './create-to-do-component.component.html',
  styleUrls: ['./create-to-do-component.component.scss']
})
export class CreateToDoComponentComponent implements OnInit {

  constructor() { }
  toDolist= new FormGroup({
    id: new FormControl(Date.now()),
    taskName :new FormControl("", [Validators.required]),
    taskDescription : new FormControl("", [Validators.required]),
    repeatingTask: new FormControl("", [Validators.required])
  })

  submittedTasks=Object

  ngOnInit(): void {
    this.toDolist.statusChanges.subscribe(status => {
      if (status === 'VALID') { 
         this.submittedTasks = this.toDolist.value
         setTimeout(()=>{
           this.toDolist.reset();
         },2000)
      }
   });
  }
  

  
}
