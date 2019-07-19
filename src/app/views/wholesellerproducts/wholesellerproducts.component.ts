import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wholesellerproducts',
  templateUrl: './wholesellerproducts.component.html',
  styleUrls: ['./wholesellerproducts.component.scss']
})
export class WholesellerproductsComponent implements OnInit {


  constructor(public router: Router) { }
  addproduct() {
    this.router.navigate(['/wholesellerproducts/addwholesellerproducts']);
  }



  ngOnInit() {
  }

}
