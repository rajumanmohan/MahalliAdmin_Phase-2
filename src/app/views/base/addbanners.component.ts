import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addbanners',
  templateUrl: './addbanners.component.html',
  styleUrls: ['./addbanners.component.scss']
})
export class AddbannersComponent implements OnInit {

  constructor(public router: Router, private appService: AppService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      // this.catname = params.name
      // this.id = params.id
      // this.pic = params.pic
      // this.des = params.des
      // this.type = params.type,
      this.typeVal = params.typeVal
    });
  }
  image;
  strImage;
  textarea;
  typeVal;
  showCat;
  data = [];
  ngOnInit() {
  }
  backtobanner() {
    this.router.navigate(['/Category/categories']);
  }
  addCat(name) {
    // this.spinnerService.show();
    // if (this.strImage = this.textarea === '') {
    //     swal("Required filelds are missing", "", "warning");
    // }
    var data = {
      'name': name,
      'image': this.strImage,
      'description': this.textarea,
      'type': this.typeVal,
      "show_in_user": this.showCat
      // "wholesaler_id": localStorage.wholesalerId
    }
    this.appService.addCat(data)
      .subscribe((resp: any) => {
        if (resp.message === 'Success') {
          this.data = resp.result;
          // this.spinnerService.hide();
          // swal('Category added', '', 'success');
          this.router.navigate(['/Category/categories']);

        }
        else if (resp.status === 400) {
          // swal(resp.json().err_field, '', 'error');
        }
      },
        error => {
          console.log(error, "error");
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
}
