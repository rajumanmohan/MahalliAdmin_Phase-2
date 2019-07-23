import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-userorders',
  templateUrl: './userorders.component.html',
  styleUrls: ['./userorders.component.scss']
})
export class UserordersComponent implements OnInit {

  constructor(public router: Router, private appService: AppService) { }
  userOrds = [];
  type;
  wholeId;
  // orderdetails() {
  //   this.router.navigate(['/userslist/orderdetails']);
  // }
  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  ngOnInit() {
    this.getUserOrds();
  }
  getUserOrds() {
    this.appService.getUserOrders().subscribe((res: any) => {
      // this.userOrds = res.order;
      this.userOrds = res.order.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
    })
  }
  orderDetails(orderId, type) {
    this.type = type;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        orderId: orderId,
        type: this.type,
        wholeId: this.wholeId
      }
    }
    // this.router.navigate(['/userslist/orderdetails']);
    //   this.router.navigate(['/userslist/orderdetails']);
    this.router.navigate(['/userslist/orderdetails'], navigationExtras);

    // this.router.navigate(['/orderDetails'], navigationExtras)
  }
}
