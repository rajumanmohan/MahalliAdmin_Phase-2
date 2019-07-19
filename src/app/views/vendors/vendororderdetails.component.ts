import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendororderdetails',
  templateUrl: './vendororderdetails.component.html',
  styleUrls: ['./vendororderdetails.component.scss']
})
export class VendororderdetailsComponent implements OnInit {
  constructor(public router: Router) { }
  ngOnInit() {
  }

}
