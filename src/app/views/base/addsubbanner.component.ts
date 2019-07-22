import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-addsubbanner',
    templateUrl: './addsubbanner.component.html',
    styleUrls: ['./addsubbanner.component.scss']
})
export class AddsubbannerComponent implements OnInit {
    actionType;
    constructor(private appService: AppService, public router: Router, private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            // this.catname = params.name
            // this.id = params.id
            // this.pic = params.pic
            // this.des = params.des
            // this.type = params.type,
            this.actionType = params.actionType
        });
    }
    backtosubcat() {
        this.router.navigate(['/Category/subcategories']);
    }
    ngOnInit() {
        if (this.actionType == "grocery") {
            this.getCat();
        } else {
            this.getEcomCat();
        }
    }
    category = [];
    subCa;
    mainCat;
    strImage;
    textarea;
    getCat() {
        let Data = {
            "country": "",
            "pin_code": "",
            "area": ""
        }
        // this.spinnerService.show();
        this.appService.getGroceryCat(Data)
            .subscribe((resp: any) => {
                if (resp.status === 200) {
                    // this.name = ""
                    this.category = resp.categories;
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
            .subscribe((resp: any) => {
                if (resp.status === 200) {
                    // this.name = ""
                    this.category = resp.categories;
                    // this.spinnerService.hide();
                }
                else {

                }
            },
                error => {

                    console.log(error, "error");
                })
    }
    changeCat(id) {
        // this.mainCat = id;
        for (var i = 0; i < this.category.length; i++) {
            if (id == this.category[i].category_name) {
                this.mainCat = this.category[i].id;
            }
        }

    }
    image;
    insertSubCat() {
        // this.spinnerService.show();
        var data = {
            'sub_category_name': this.subCa,
            'category_id': this.mainCat,
            'image': this.strImage,
            'description': this.textarea,
            // "wholesaler_id": localStorage.wholesalerId
        }
        this.appService.insertSubCat(data).subscribe(resp => {
            // this.spinnerService.hide();
            // swal("add subCategory successfully", '', 'success');
            this.router.navigate(['/Category/subcategories']);
        })
    }

    // strImage: any;
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
    deleteSubCat(id) {
        // alert(id);
        // this.spinnerService.show();
        // swal("Do you want to delete?", "", "warning", {
        //     buttons: ["Cancel!", "Okay!"],
        // }).then((value) => {
        // if (value === true) {
        var data = {
            'id': id
        }
        this.appService.deleteSubCat(data).subscribe(resp => {
            // this.spinnerService.hide();
            // swal("delete subCat successfully", '', 'success');
            // this.getSubCategory();
        })
        //     } else {
        //         return;
        //     }
        // });

    }

}
