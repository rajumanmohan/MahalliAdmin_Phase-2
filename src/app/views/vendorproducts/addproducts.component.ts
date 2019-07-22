import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.scss']
})
export class AddproductsComponent implements OnInit {

  constructor() { }
  showProductsList: boolean;
  showAddproduct: boolean;
  showcatList = true;
  ngOnInit() {


  }
  backtCatList() {
    this.showcatList = true;
    this.showProductsList = false;
    this.showAddproduct = false;

  }
  backtolist() {
    this.showProductsList = true;
    this.showcatList = false;
    this.showAddproduct = false;
  }
  showproductlist() {
    this.showProductsList = true;
    this.showcatList = false;
    this.showAddproduct = false;
  }
  addproduct() {
    this.showAddproduct = true;
    this.showcatList = false;
    this.showProductsList = false;

  }
}
