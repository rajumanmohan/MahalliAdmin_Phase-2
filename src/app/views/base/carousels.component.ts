import { Component, OnDestroy, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Router } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  templateUrl: 'carousels.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ]
})
export class CarouselsComponent implements OnInit {

  myInterval: number | false = 6000;
  slides: any[] = [];
  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;
  groceryCats;
  title;
  EcomCats;
  type;
  category;
  constructor(public router: Router, private appService: AppService) { }
  grocerySubCats;
  ecomSubcats;
  actionType;
  subCategory = [];
  addbanner() {
    this.router.navigate(['/Category/addsubcatbanners']);
  }

  // ngOnDestroy(): void {
  // }
  ngOnInit() {
    this.getSubCategory();

  }
  getSubCategory() {
    this.grocerySubCats = true;
    this.ecomSubcats = false;
    this.actionType = "grocery";
    // this.spinnerService.show();
    this.appService.getSubCategery().subscribe((resp:any) => {
      // this.spinnerService.hide();
      this.subCategory = resp.result;
      // if (resp.result.length === 0) {
      //   swal("No data found, please add new one", '', 'error');
      })
    // },
    //   error => {
    //     console.log(error, "error");
    //   }
    // )
  }
  getEcomSubCategory() {
    this.grocerySubCats = false;
    this.ecomSubcats = true;
    this.actionType = "ecom";
    // this.spinnerService.show();
    this.appService.getEcomSubcats().subscribe((resp:any) => {
      // this.spinnerService.hide();
      this.subCategory = resp.result;
      if (resp.result.length === 0) {
        // swal("No data found, please add new one", '', 'error');
      }
    },
      error => {
        console.log(error, "error");
      }
    )
  }
  deleteSubCat(id) {
    // alert(id);
    // this.spinnerService.show();
    // swal("Do you want to delete?", "", "warning", {
    //   buttons: ["Cancel!", "Okay!"],
    // }).then((value) => {
    //   if (value === true) {
        var data = {
          'id': id
        }
        this.appService.deleteSubCat(data).subscribe(resp => {
          // this.spinnerService.hide();
          // swal("delete subCat successfully", '', 'success');
          this.getSubCategory();
        })
      // } 
    //   else {
    //     return;
    //   }
    // });

  }


}
