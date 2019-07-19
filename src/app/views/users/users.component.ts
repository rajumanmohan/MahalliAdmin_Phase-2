import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public router: Router) { }
  addusers() {
    this.router.navigate(['/userslist/addusers']);
  }
  ngOnInit() {
  }

}
