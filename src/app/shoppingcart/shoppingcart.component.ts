import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { privateEncrypt } from 'crypto';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss'],
})
export class ShoppingcartComponent implements OnInit {
  total = 0;
  items: any;
  cartform: FormGroup;

  constructor(
    private cartservice: CartService,
    private formbuilder: FormBuilder
  ) {
    this.items = this.cartservice.getItems();

    this.totalprice();

    this.cartform = this.formbuilder.group({
      name: '',
      address: '',
    });
  }
  ngOnInit() {}

  totalprice() {
    this.items.forEach((x) => {
      this.total += x.price * x.quantity;
    });
    console.log(this.total);
  }
  onSubmit(buyersdata) {
    console.warn('your order has been submitted ', buyersdata);
    this.items = this.cartservice.clearitems();
    this.total = 0;
    this.cartform.reset();
  }
}
