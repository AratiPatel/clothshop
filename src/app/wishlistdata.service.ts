import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistdataService {
  wishitems = [];

  constructor() { }
adddata(product){
  this.wishitems.push(product);
}

getwishdata(){
  return this.wishitems;
}

}
