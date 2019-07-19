import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-couponmanagement',
  templateUrl: './couponmanagement.component.html',
  styleUrls: ['./couponmanagement.component.scss']
})
export class CouponmanagementComponent implements OnInit {
  coupon;
  total;
  disAmt;
  disPer;
  upto;
  model;
  model1;
  data = { discountType: '' };
  amount;
  percentage;
  constructor(public router: Router,private appService:AppService) { }

  ngOnInit() {
  }
  backtocoupon() {
    this.router.navigate(['/charts']);
  }
  onDateChanged(date1){
    this.model= date1.formatted;
  }
  onDateChanged2(date2){
    this.model1 = date2.formatted;
  }
  addOffer() {
    var data = {
        'voucher_code': this.coupon,
        'total_count': this.total,
        'discount_type': this.data.discountType,
        'discount_amount': this.disAmt || 0,
        'discount_percentage': this.disPer,
        'minimum_value': this.upto,
        'start_date': this.model,
        'end_date': this.model1

    }
    console.log(data);
    this.appService.addVoucher(data).subscribe((resp:any) => {
        // console.log(resp.;
        if (resp.status === 200) {
            // swal(resp.message, "", "success");
    this.router.navigate(['/charts']);
    // this.router.navigate(['/offers']);
        }
        else if (resp.status === 400) {
            // swal(resp.message, "", "error");
        }

    })
}
DisType = [
  { id: '1', name: 'Percentage' },
  { id: '2', name: 'Flat' }
]

discount(event) {
  this.data.discountType = event;
  if (this.data.discountType === '1') {
      this.amount = false;
      this.percentage = true;
      this.disAmt = '';
  } else {
      this.percentage = false;
      this.amount = true;
      this.disPer = '';
  }
}
}
