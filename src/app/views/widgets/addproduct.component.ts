import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backtoproduct() {
    this.router.navigate(['/widgets']);
  }
}
