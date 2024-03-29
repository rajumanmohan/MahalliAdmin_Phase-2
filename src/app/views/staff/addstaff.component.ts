import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.scss']
})
export class AddstaffComponent implements OnInit {
  catmarked = false;
  subcatmarked = false;
  couponmarked = false;
  products = false;
  userList = false;
  vendorList = false;
  wholeList = false;
  venOrd = false;
  userOrd = false;
  content = false;
  staff = false;
  notifcts = false;
  banners = false;
  role;
  address;
  city;
  area;
  zip;
  mobileNum;
  email;
  password;
  commision;
  constructor(private appService: AppService,public router: Router ) { }

  ngOnInit() {
    // console.log(this.marked);
  }
  backtostaff(){
    this.router.navigate(['/staff'])
  }
  name;
  toggleVisibility(e) {
    this.catmarked = e.target.checked;
  }
  toggleVisibility1(e) {
    this.subcatmarked = e.target.checked;
  }
  toggleVisibility2(e) {
    this.couponmarked = e.target.checked;
  }
  toggleVisibility3(e) {
    this.products = e.target.checked;
  }
  toggleVisibility4(e) {
    this.banners = e.target.checked;
  }
  toggleVisibility5(e) {
    this.userList = e.target.checked;
  }
  toggleVisibility6(e) {
    this.vendorList = e.target.checked;
  }
  toggleVisibility7(e) {
    this.wholeList = e.target.checked;
  }
  toggleVisibility8(e) {
    this.venOrd = e.target.checked;
  }
  toggleVisibility9(e) {
    this.userOrd = e.target.checked;
  }
  toggleVisibility10(e) {
    this.content = e.target.checked;
  }
  toggleVisibility11(e) {
    this.commision = e.target.checked;
  }
  toggleVisibility12(e) {
    this.notifcts = e.target.checked;
  }
  changeRole(role) {
    this.role = role
  }
  addStaff() {
    var inData = {
      "name": this.name,
      "select_city": this.city,
      "area": this.area,
      "address": this.address,
      "zip_code": this.zip,
      "mobile_number": this.mobileNum,
      "email": this.email,
      "password": this.password,
      "role_name": this.role,
      "status": 1,
      "Categories": this.catmarked,
      "SubCategory": this.subcatmarked,
      "Coupon": this.couponmarked,
      "Prodcts": this.products,
      "Banners": this.banners,
      "UserList": this.userList,
      "VendorList": this.vendorList,
      "WholeList": this.wholeList,
      "vendorOrders": this.venOrd,
      'userOrders': this.userOrd,
      "Content": this.content,
      "commision": this.commision,
      "notifications": this.notifcts
    }
    this.appService.addStaff(inData).subscribe((res: any) => {
      console.log(res);
    })
  }


}
