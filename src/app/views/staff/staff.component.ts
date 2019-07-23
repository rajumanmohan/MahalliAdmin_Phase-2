import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  constructor(public router: Router, private appService: AppService) { }
  key: string = 'name';
  reverse: boolean = true;
  addstaff() {
    this.router.navigate(['/staff/addstaff']);
  }
  ngOnInit() {
    this.getStaff();
  }
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  staffData = [];

  getStaff() {
    this.appService.getStaff().subscribe((res: any) => {
      // this.staffData = res.data;
      this.staffData = res.data.map(function (value, index) {

        value.indexValue = index;
        return value;
      })
    })
  }


}
