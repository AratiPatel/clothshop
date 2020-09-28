import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shippingcost;
  constructor(private cartservice: CartService) {}

  ngOnInit() {
    this.cartservice.getshippingcharge().subscribe(
      x => {
        console.log(x);
        this.shippingcost = x;
      },
      err => window.alert(err.message)
    );

    console.log(this.shippingcost);
  }
 
}
