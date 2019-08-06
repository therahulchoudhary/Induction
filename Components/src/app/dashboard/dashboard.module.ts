import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormdashboardComponent } from './formdashboard/formdashboard.component';


@NgModule({
  declarations: [FormdashboardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FormdashboardComponent
  ]
})
export class DashboardModule { }
