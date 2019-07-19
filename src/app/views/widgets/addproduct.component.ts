import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
    selector: 'app-addproduct',
    templateUrl: './addproduct.component.html',
    styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {


    constructor(private router: Router, private fb: FormBuilder, private appService: AppService) { }
    addProductFrom: FormGroup;
    form: FormGroup;
    wholeType;
    category = [];
    cat_id;
    subArr = [];
    submitted = false;
    subCat_id;
    organic;
    sub_sub_id;
    country;
    urls = [];
    showProds = [];
    prodsName = [];
    category_id;
    subCatId;
    subSubdata;
    ngOnInit() {
        this.addProductFrom = this.fb.group({
            category_id: ['', Validators.required],
            subcategory_id: ['', Validators.required],
            subsubcategory_id: [''],
            product_name: ['', Validators.required],
            brand: [''],
            country: [''],
            description: ['', Validators.required],
            images: ['', [Validators.required]]
        })
        this.getCat('grocery');
        this.wholeType = "grocery";
    }
    backtoproduct() {
        this.router.navigate(['/widgets']);
    }
    getCat(grocery) {
        this.wholeType = grocery;
        let Data = {
            "country": "",
            "pin_code": "",
            "area": ""
        }
        // this.wholeType = grocery;
        if (this.wholeType == "grocery") {
            this.appService.getGroceryCat(Data)
                .subscribe((resp: any) => {
                    if (resp.status === 200) {
                        this.category = resp.categories;
                        if (this.category) {
                            for (var i = 0; i < this.category.length; i++) {
                                if (this.cat_id == this.category[i].id) {
                                    this.subArr = this.category[i].subcategory;
                                    console.log(this.subArr);
                                    // debugger;
                                }
                            }
                        }
                    }
                    else {

                    }
                },
                    error => {
                        console.log(error, "error");
                    })
        } else {
            let Data = {
                "country": "",
                "pin_code": "",
                "area": ""
            }
            this.appService.getEcomCat(Data)
                .subscribe((resp: any) => {
                    if (resp.status === 200) {
                        this.category = resp.categories;
                        if (this.category) {
                            for (var i = 0; i < this.category.length; i++) {
                                if (this.cat_id == this.category[i].id) {
                                    // this.subArr = this.category[i].subcategory;
                                    // console.log(this.subArr);
                                    // debugger;
                                }
                            }
                        }
                    }
                    else {

                    }
                },
                    error => {
                        console.log(error, "error");
                    })
        }

    }
    get f() { return this.addProductFrom.controls; }
    addProductAdmin() {
        this.addProductFrom.value.category_id = this.cat_id;
        this.addProductFrom.value.subcategory_id = parseInt(this.subCat_id);
        this.addProductFrom.value.subsubcategory_id = parseInt(this.sub_sub_id);
        this.addProductFrom.value.country = this.country;
        this.addProductFrom.value.status = 1;
        this.addProductFrom.value.images = this.urls;
        this.addProductFrom.value.organic = JSON.stringify(this.organic);
        this.addProductFrom.value.type = this.wholeType == 'grocery' ? 'grocery' : 'ecommerce';


        this.submitted = true;
        if (this.addProductFrom.invalid) {
            return;
        }
        // else if(this.urls.length<4){
        // swal("Please select atleast 4 images","","warning");
        // }else {
        this.appService.insertAdminProd(this.addProductFrom.value).subscribe((res: any) => {
            if (res.json().status === 200) {
                // swal(res.json().message, "", "success");
                this.router.navigate(['/prducts']);

            } else {
                // swal(res.json().message, "", "error");

            }
        })
        // }
        // this.maxImg = false;
    }

    changeCat(name) {
        this.showProds = [];
        this.prodsName = [];
        for (var i = 0; i < this.category.length; i++) {
            if (name == this.category[i].category_name) {
                this.subArr = this.category[i].subcategory;
                this.cat_id = this.category[i].id;
                // this.addProductFrom.value.category_id.setValue(this.cat_id);
                this.category_id = this.category[i].id;
            }
        }
        // if (this.role === 'Admin') {
        //     this.appService.getsugProdForCat(this.cat_id).subscribe(res => {
        //         this.prodName = res.json().data;


        //         // for (var i = 0; i < this.prodName.length; i++) {
        //         //     this.showProds = (this.prodName[i].product_name);
        //         //     console.log(this.showProds);
        //         // }
        //     })
        // }

    }

    changeSub1(id) {
        // this.formdata.subcategoryName = id;
        for (var i = 0; i < this.category.length; i++) {
            for (var j = 0; j < this.category[i].subcategory.length; j++) {
                if (id == this.category[i].subcategory[j].sub_category_name) {
                    // this.subArr = this.category[i].subcategory;
                    // this.cat_id = this.category[i].id;
                    // // this.addProductFrom.value.category_id.setValue(this.cat_id);
                    // this.category_id = this.category[i].id;
                    this.subCat_id = this.category[i].subcategory[j].id;
                    this.subCatId = this.category[i].subcategory[j].id;
                    this.subSubdata = this.category[i].subcategory[j].subsub;
                    console.log(this.subSubdata);
                }
            }

        }
        // }



    }
    newSkuData = [];
    detectFiles(event) {
        this.urls = [];
        let files = event.target.files;
        if (files) {
            for (let file of files) {
                let reader = new FileReader();
                reader.onload = (e: any) => {
                    this.urls.push(e.target.result);
                }
                reader.readAsDataURL(file);
            }
        }
    }
    toggleVisibility(e) {
        this.organic = e.target.checked;
    }
}
