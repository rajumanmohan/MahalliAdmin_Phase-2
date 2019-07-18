import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd,NavigationExtras } from '@angular/router';
// import { Router, NavigationExtras } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';


@Component({
  templateUrl: 'collapses.component.html'
})
export class CollapsesComponent  implements OnInit{
  constructor(public router: Router,private appService: AppService) { }
  actionType;
  grocerySubCats;
  ecomSubcats;
  SubsubCategory=[];
  ngOnInit(){
    this.getSubsub();
  }
  addbanner() {
    this.router.navigate(['/Category/addsubsubcategories']);
  }
  newsubsubCat(id, maincat, subcat, maincatId, action, img, des, sscID) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'subCat': subcat,
        'mainCat': maincat,
        'id': id,
        'mainCatId': maincatId,
        'action': action,
        'img': img,
        'des': des,
        'actionType': this.actionType
      }
    }
    this.router.navigate(['/newsubsub'], navigationExtras);
  }
  getSubsub() {
    this.grocerySubCats = true;
    this.ecomSubcats = false;
    this.actionType = "grocery";
    // this.spinnerService.show();
    this.appService.getSubsub().subscribe(resp => {
      // this.spinnerService.hide();
      this.SubsubCategory = resp.result;
      console.log(this.SubsubCategory);
      if (resp.result.length === 0) {
        swal("No data found, please add new one", '', 'error');
      }
    },
      error => {
        console.log(error, "error");
      }
    )
  }
  getEcomSubCategory() {
    this.grocerySubCats = false;
    this.ecomSubcats = true;
    this.actionType = "ecom";
    // this.spinnerService.show();
    this.appService.getSubsubEcom().subscribe(resp => {
      // this.spinnerService.hide();
      this.SubsubCategory = resp.result;
      if (resp.result.length === 0) {
        swal("No data found, please add new one", '', 'error');
      }
    },
      error => {
        console.log(error, "error");
      }
    )
  }
  deleteSubCat(id) {
    // alert(id);
    // // this.spinnerService.show();
    // swal("Do you want to delete?", "", "warning", {
    //   buttons: ["Cancel!", "Okay!"],
    // }).then((value) => {
    //   if (value === true) {
        this.appService.delSubsub(id).subscribe(resp => {
          // this.spinnerService.hide();
          swal("delete subCat successfully", '', 'success');
          this.getSubsub();
        })
    //   } else {
    //     return;
    //   }
    // });

  }
  addSub(id, maincat, subcat, maincatId, action, img, des, sscID, subName) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        'subCat': subcat,
        'mainCat': maincat,
        'id': id,
        'mainCatId': maincatId,
        'action': action,
        'img': img,
        'des': des,
        'actionType': this.actionType,
        'sscName': sscID,
        "subName": subName
      }
    }
    this.router.navigate(['/newsubsub'], navigationExtras);
  }
  
}
