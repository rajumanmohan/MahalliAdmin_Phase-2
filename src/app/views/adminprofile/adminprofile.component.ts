import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.scss']
})
export class AdminprofileComponent implements OnInit {

  constructor() { }
  profile;
  ngOnInit() {
    this.profile = JSON.parse(sessionStorage.getItem("profile"));
  }

}
