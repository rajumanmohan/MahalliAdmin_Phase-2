import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-couponmanagement',
  templateUrl: './couponmanagement.component.html',
  styleUrls: ['./couponmanagement.component.scss']
})
export class CouponmanagementComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  backtocoupon() {
    this.router.navigate(['/charts']);
  }
  test(){
    alert('hi');
  }
}
