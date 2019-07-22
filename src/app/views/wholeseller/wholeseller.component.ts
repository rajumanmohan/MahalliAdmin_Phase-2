import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wholeseller',
  templateUrl: './wholeseller.component.html',
  styleUrls: ['./wholeseller.component.scss']
})
export class WholesellerComponent implements OnInit {


  constructor(public router: Router, private appService: AppService) { }
  wholeSellers = []
  addwholeseller() {
    this.router.navigate(['/wholeseller/addwholeseller']);
  }
  wholesellerproducts() {
    this.router.navigate(['/wholeseller/wholesellerproducts']);
  }
 
  getWholeSeller() {
    this.appService.getWholeSeller().subscribe((resp: any) => {
      this.wholeSellers = resp.data;
    })
  }


  ngOnInit() {
    this.getWholeSeller();
  }
  product(Id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'salerproductId': Id
      }
    }
    this.router.navigate(['wholeseller/wholesellerproducts'], navigationExtras);
  }

}
