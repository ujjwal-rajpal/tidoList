  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CreateToDoComponentComponent  } from './create-to-do-component/create-to-do-component.component';
const routes: Routes=[
    {path:'home', component:CreateToDoComponentComponent },
    {path: "", redirectTo:'/home', pathMatch: 'full'}

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }