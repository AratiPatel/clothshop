import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  quantity = 1;
  constructor(private http: HttpClient) { }
  addItems(product) {
    const i = this.items.findIndex(x => product.id === x.id
    );

    if (i !== -1){
      this.items[i].quantity += 1;
    }
    else{

      this.items.push(product);
    }
  }

  getItems() {
    return this.items;
  }

  clearitems() {
    this.items = [];
    return this.items;
  }

  getshippingcharge() {
    return this.http.get('assets/shipping-charge.json');
  }

}
