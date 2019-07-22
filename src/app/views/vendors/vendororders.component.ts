import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-vendororders',
  templateUrl: './vendororders.component.html',
  styleUrls: ['./vendororders.component.scss']
})
export class VendorordersComponent implements OnInit {
  constructor(public router: Router, private appService: AppService,) { }

  orderdetails() {
    this.router.navigate(['/vendorslist/vendorordersdetails']);
  }
  orders = [];
  type;
  ngOnInit() {
    this.getAllVendorOrders();
  }
  getAllVendorOrders() {
    this.appService.getAllVendorOrds().subscribe((res: any) => {
      this.orders = res.Orders;
    }, error => {

    })
  }
  orderDetails(orderId) {
    // this.type = type;
    let navigationExtras: NavigationExtras = {
        queryParams: {
            orderId: orderId,
            // type: this.type,
            // wholeId: this.wholeId
        }
    }
    this.router.navigate(['vendorslist/vendorordersdetails'], navigationExtras)
}

}
