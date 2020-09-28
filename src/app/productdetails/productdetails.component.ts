import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { products } from '../products';
import { CartService } from "../cart.service";
import { WishlistdataService } from "../wishlistdata.service";


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  product;

  constructor(private route: ActivatedRoute,
    private cartservice: CartService,
    private wishlistService: WishlistdataService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }
  addItems(product) {
    window.alert("product has been added to cart");
    this.cartservice.addItems(product);

  }

  adddata(product) {
    window.alert("product has been added to wishlist");
    this.wishlistService.adddata(product);
  }




}
