import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {


  constructor(public router: Router, private appService: AppService) { }
  vendorproducts() {
    this.router.navigate(['/vendorslist/vendorproducts']);
  }
  editdetails() {
    this.router.navigate(['/vendorslist/editvendors']);
  }
  vendors = [];
  ngOnInit() {
    this.getVendors();
  }
  getVendors() {
    this.appService.getVendorsList().subscribe((resp: any) => {
      this.vendors = resp.data;
    })
  }
}
