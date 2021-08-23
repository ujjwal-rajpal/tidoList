import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule }   from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MyMaterialModule } from './material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports:[
    FlexLayoutModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
