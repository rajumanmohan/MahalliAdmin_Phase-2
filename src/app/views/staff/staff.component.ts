import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  constructor(public router: Router) { }

  addstaff() {
    this.router.navigate(['/staff/addstaff']);
  }
  ngOnInit() {
  }

}
