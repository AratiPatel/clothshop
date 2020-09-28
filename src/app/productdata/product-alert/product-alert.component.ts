import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.scss']
})
export class ProductAlertComponent implements OnInit {
  @Input() productData: any;
  @Output() notify = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}