import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-addsubsubcat',
  templateUrl: './addsubsubcat.component.html',
  styleUrls: ['./addsubsubcat.component.scss']
})
export class AddsubsubcatComponent implements OnInit {

  constructor(public router: Router,private appService: AppService) { }
  image;
  category=[];
  subData=[];
  mainCatId;
  subCat;
  strImage;
  textarea;
  id;
  action;
  subsubCa;
  backtosubcat() {
    this.router.navigate(['/Category/subsubcategories']);
  }
  ngOnInit() {
    this.getCat();
  }
  getCat() {
    // this.spinnerService.show();
    let Data = {
      "country": "",
      "pin_code": "",
      "area": ""
    }
    this.appService.getGroceryCat(Data)
      .subscribe((resp:any) => {
        if (resp.status === 200) {
          // this.name = ""
          this.category = resp.categories;
          this.getSubCats();
          // this.spinnerService.hide();
        }
        else {

        }
      },
        error => {

          console.log(error, "error");
        })
  }
  getEcomCat() {
    let Data = {
      "country": "",
      "pin_code": "",
      "area": ""
    }
    // this.spinnerService.show();
    this.appService.getEcomCat(Data)
      .subscribe((resp:any) => {
        if (resp.status === 200) {
          // this.name = ""
          this.category = resp.categories;
          // this.spinnerService.hide();
          this.getSubCats();
        }
        else {

        }
      },
        error => {

          console.log(error, "error");
        })
  }
  showSubcats(catId) {
    // this.mainCat = catId;
    this.subData = [];
    for (var i = 0; i < this.category.length; i++) {
      if (catId == this.category[i].category_name) {
        this.mainCatId = this.category[i].id;
        // this.subArr = this.category[i].subcategory;
        // console.log(this.subArr);
      }
      for (var j = 0; j < this.category[i].subcategory.length; j++) {
        if (this.mainCatId == this.category[i].subcategory[j].category_id) {
          this.subData.push(this.category[i].subcategory[j]);
        }
      }
    }

  }
  changeSubcats1(subId) {
    this.subData = [];
    for (var i = 0; i < this.category.length; i++) {
      for (var j = 0; j < this.category[i].subcategory.length; j++) {
        if (subId == this.category[i].subcategory[j].sub_category_name) {
          this.subData.push(this.category[i].subcategory[j]);
          this.subCat = this.category[i].subcategory[j].id;
        }
      }
    }

  }

  insertSubsubCat() {
    // this.spinnerService.show();
    // "subsubcat_name" :  "abced",
    // "category_id" : "123",
    // "sub_category_id" :  " 145",
    // "Image": ,
    //       "description": "kikui",
    //       "type": "0"

    var data = {
      'sub_category_id': this.subCat,
      'category_id': this.mainCatId,
      'image': this.strImage,
      'description': this.textarea,
      "type": this.action == 'grocery' ? 0 : 1,
      "subsubcat_name": this.subsubCa,

      // "wholesaler_id": sessionStorage.wholesalerId
    }
    this.appService.addSubsub(data).subscribe(resp => {
      // this.spinnerService.hide();
      // swal(resp.message, '', 'success');
      this.router.navigate(['/subsubcat']);
    })
  }
  updateSubCat() {
    // this.spinnerService.show();
    var data = {
      'sub_category_id': this.subCat,
      'category_id': this.mainCatId,
      'image': this.strImage,
      'description': this.textarea,
      // "type": this.action == 'grocery' ? 0 : 1,
      "subsubcat_name": this.subsubCa,
      "id": this.id ? JSON.parse(this.id) : ''
    }
    this.appService.updateSubsub(data).subscribe(resp => {
      // this.spinnerService.hide();
      // swal(resp.message, '', 'success');
      this.router.navigate(['/subsubcat']);
    })
  }
  changeListener($event): void {
    this.readThis($event.target);
  }
  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
      this.strImage = this.image.split(',')[1];
    }
    myReader.readAsDataURL(file);
  }
  getSubCats() {
    this.subData = [];
    for (var i = 0; i < this.category.length; i++) {
      for (var j = 0; j < this.category[i].subcategory.length; j++) {
        this.subData.push(this.category[i].subcategory[j]);
        // if (subId == this.category[i].subcategory[j].sub_category_name) {
        //   this.subCa = this.category[i].subcategory[j].id;

        // }
      }
    }
  }
}
