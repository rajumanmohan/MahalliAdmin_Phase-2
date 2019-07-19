import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {


  constructor(public router: Router) { }
  vendorproducts() {
    this.router.navigate(['/vendorslist/vendorproducts']);
  }
  ngOnInit() {
  }

}
