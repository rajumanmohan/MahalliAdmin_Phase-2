import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public router: Router,private appService: AppService) { }
  usersList=[];
  addusers() {
    this.router.navigate(['/userslist/addusers']);
  }
  ngOnInit() {
    this.getUsersList();
  }

  getUsersList() {
    this.appService.getUsersList().subscribe((resp:any) => {
      this.usersList = resp.data;
    })
  }

}
