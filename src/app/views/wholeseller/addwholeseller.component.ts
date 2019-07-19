import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addwholeseller',
  templateUrl: './addwholeseller.component.html',
  styleUrls: ['./addwholeseller.component.scss']
})
export class AddwholesellerComponent implements OnInit {

  constructor(public router: Router) { }

  backtowholeseller() {
    this.router.navigate(['/wholeseller']);
  }
  ngOnInit() {
  }

}
