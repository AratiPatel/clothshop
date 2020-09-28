import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingcartComponent } from './shoppingcart.component';
import { RouterModule, Routes } from '@angular/router';
import {  SharedModule } from '../shared/material/shared.module';
import {  ReactiveFormsModule } from '@angular/forms';

const shopcartroute: Routes = [
  {
    path: '',
    component: ShoppingcartComponent,
  },
];

@NgModule({
  declarations: [ShoppingcartComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(shopcartroute),
  ],
})
export class ShoppingcartModule {}
