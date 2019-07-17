import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addbanners',
  templateUrl: './addbanners.component.html',
  styleUrls: ['./addbanners.component.scss']
})
export class AddbannersComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  backtobanner() {
    this.router.navigate(['/Category/categories']);
  }
}
