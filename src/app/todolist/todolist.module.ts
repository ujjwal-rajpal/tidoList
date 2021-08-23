import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateToDoComponentComponent } from './create-to-do-component/create-to-do-component.component';
import { DoneListComponentComponent } from './done-list-component/done-list-component.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

import { TodoListRoutingModule } from './todolist-routing'
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CreateToDoComponentComponent,
    DoneListComponentComponent,
    ToDoListComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TodolistModule { }
