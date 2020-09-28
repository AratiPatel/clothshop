import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdataComponent } from './productdata.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { RouterModule,  Routes } from '@angular/router';
import { SharedModule } from '../shared/material/shared.module';


const productroute: Routes = [{
  path: '',
  component: ProductdataComponent
}];

@NgModule({
  declarations: [
    ProductdataComponent,
    ProductAlertComponent
  ],
  entryComponents: [
    ProductAlertComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(productroute),

  ]
})
export class ProductdataModule { }
