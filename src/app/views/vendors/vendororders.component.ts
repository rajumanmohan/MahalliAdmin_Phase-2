import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-vendororders',
  templateUrl: './vendororders.component.html',
  styleUrls: ['./vendororders.component.scss']
})
export class VendorordersComponent implements OnInit {
  constructor(public router: Router,private appService: AppService) { }

  orderdetails() {
    this.router.navigate(['/vendorslist/vendorordersdetails']);
  }
  orders=[];
  ngOnInit() {
    this.getAllVendorOrders();
  }
  getAllVendorOrders() {
    this.appService.getAllVendorOrds().subscribe((res:any) => {
        this.orders = res.Orders;
    }, error => {

    })
}

}
