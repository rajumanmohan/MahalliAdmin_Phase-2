import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-userorders',
  templateUrl: './userorders.component.html',
  styleUrls: ['./userorders.component.scss']
})
export class UserordersComponent implements OnInit {

  constructor(public router: Router,private appService: AppService) { }
  userOrds=[];
  orderdetails() {
    this.router.navigate(['/userslist/orderdetails']);
  }
  ngOnInit() {
    this.getUserOrds();
  }
  getUserOrds() {
    this.appService.getUserOrders().subscribe((res:any) => {
        this.userOrds = res.order;
    })
}
}
