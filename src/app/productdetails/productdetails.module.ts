import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductdetailsComponent } from './productdetails.component';
import {  SharedModule } from '../shared/material/shared.module';


const detailsroute: Routes = [
  {
    path: '',
    component: ProductdetailsComponent,
  },
];

@NgModule({
  declarations: [ProductdetailsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(detailsroute)],
})
export class ProductdetailsModule {}
