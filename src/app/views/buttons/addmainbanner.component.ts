import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-addmainbanner',
  templateUrl: './addmainbanner.component.html'
})
export class AddmainbannerComponent implements OnInit {
  constructor(private router: Router) { }
  backtobanner() {
    this.router.navigate(['/buttons']);
  }
  ngOnInit() {
  }
}
