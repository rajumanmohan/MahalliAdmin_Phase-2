import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userorders',
  templateUrl: './userorders.component.html',
  styleUrls: ['./userorders.component.scss']
})
export class UserordersComponent implements OnInit {

  constructor(public router: Router) { }
  orderdetails() {
    this.router.navigate(['/userslist/orderdetails']);
  }
  ngOnInit() {
  }

}
