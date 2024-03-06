import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetDogsComponent } from './get-dogs.component';

@NgModule({
  declarations: [
    GetDogsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GetDogsComponent
  ]
})
export class GetDogsModule { }
