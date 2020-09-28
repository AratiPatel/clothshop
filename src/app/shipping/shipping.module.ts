import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';
import { Routes, RouterModule } from '@angular/router';

const ship: Routes = [{
  path: '',
  component: ShippingComponent
}]

@NgModule({
  declarations: [
    ShippingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ship)
  ]
})
export class ShippingModule { }
