import { Component, OnInit } from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-productdata',
  templateUrl: './productdata.component.html',
  styleUrls: ['./productdata.component.scss']
})
export class ProductdataComponent implements OnInit {
  productList = products;

  share() {
    window.alert('product has  been shared');
  }

  ongetinfo() {
    window.alert('product is on sale');
  }
  constructor() { }

  ngOnInit() {
  }

}
