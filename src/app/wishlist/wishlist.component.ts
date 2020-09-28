import { Component, OnInit } from '@angular/core';
import { WishlistdataService } from '../wishlistdata.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishitems: any;

  constructor(private wishdataservice: WishlistdataService) { }

  ngOnInit() {
    this.wishitems = this.wishdataservice.getwishdata();
  }

}
