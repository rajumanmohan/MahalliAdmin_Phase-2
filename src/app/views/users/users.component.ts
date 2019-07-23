import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public router: Router, private appService: AppService) { }
  usersList = [];
  addusers() {
    this.router.navigate(['/userslist/addusers']);
  }
  ngOnInit() {
    this.getUsersList();
  }
  key: string = 'name';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  getUsersList() {
    this.appService.getUsersList().subscribe((resp: any) => {
      // this.usersList = resp.data;
      this.usersList = resp.data.map(function (value, index) {
        value.indexValue = index;
        return value;
      })
    })
  }

}
