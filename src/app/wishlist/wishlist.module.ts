import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from './wishlist.component';
import { SharedModule } from '../shared/material/shared.module';

const wishlistroute: Routes = [{
  path: '',
  component: WishlistComponent
}];

@NgModule({
  declarations: [WishlistComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(wishlistroute)
  ]
})
export class WishlistModule { }
