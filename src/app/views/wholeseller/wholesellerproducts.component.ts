import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-wholesellerproducts',
  templateUrl: './wholesellerproducts.component.html',
  styleUrls: ['./wholesellerproducts.component.scss']
})
export class WholesellerproductsComponent implements OnInit {

  constructor( private appService: AppService) { 
    
  }
  product;
  sellerProId;
  ngOnInit() {
  }
  getGroceryProds() {
    // this.spinnerService.show();
    // this.showGroceryProds = true;
    // this.showEcomProds = false;
    // let goodResponse = [];
    // this.pagination = [];
    // this.product = [];
    this.appService.getWholesellerProdsByGro(this.sellerProId)
        .subscribe((resp:any) => {
            // this.spinnerService.hide();
            if (resp.status === 200) {
                this.product = resp.products;
            } else if (resp.status === 400) {
                // this.noRecords = true;
            }

            // this.paginationValues = resp.json().data.pagination;
            // this.totalCount = resp.json().data.pagination.totalCount;
            // this.pages = Math.ceil(this.totalCount / 10);
            // console.log(this.pages);
            // for (var i = 0; i < this.pages; i++) {
            //     this.pagination.push(i);
            // }
        })

    error => {
        console.log(error, "error");
    }
}
getEcomProds() {
    // this.spinnerService.show();
    // this.showGroceryProds = false;
    // this.showEcomProds = true;
    // let goodResponse = [];
    // this.pagination = [];
    // this.product = [];
    this.appService.getWholesellerProdsByEcom(this.sellerProId)
        .subscribe((resp:any) => {
            // this.spinnerService.hide();
            if (resp.status === 200) {
                this.product = resp.products;
            } else if (resp.status === 400) {
                // this.noRecords1 = true;
            }

            // this.paginationValues = resp.json().data.pagination;
            // this.totalCount = resp.json().data.pagination.totalCount;
            // this.pages = Math.ceil(this.totalCount / 10);
            // console.log(this.pages);
            // for (var i = 0; i < this.pages; i++) {
            //     this.pagination.push(i);
            // }
        })

    error => {
        console.log(error, "error");
    }
}

}
