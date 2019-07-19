import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addwholesellerproducts',
  templateUrl: './addwholesellerproducts.component.html',
  styleUrls: ['./addwholesellerproducts.component.scss']
})
export class AddwholesellerproductsComponent implements OnInit {

  constructor() { }
  showSkuDetails: boolean;
  ngOnInit() {
  }
  addsku() {
    this.showSkuDetails = true;
  }
  deletesku() {
    this.showSkuDetails = false;
  }
}
