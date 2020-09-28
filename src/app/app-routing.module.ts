import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('../app/productdata/productdata.module').then(mod => mod.ProductdataModule)
  },
  {
    path: 'productdetail/:productId',
    loadChildren: () => import('../app/productdetails/productdetails.module').then(mod => mod.ProductdetailsModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('../app/shoppingcart/shoppingcart.module').then(mod => mod.ShoppingcartModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('../app/wishlist/wishlist.module').then(mod => mod.WishlistModule)
  },
  {
    path: 'shipping',
    loadChildren: () => import('../app/shipping/shipping.module').then(mod => mod.ShippingModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../app/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('../app/signup/signup.module').then(mod => mod.SignupModule)
  },

  { path: '**', redirectTo: '/product', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
