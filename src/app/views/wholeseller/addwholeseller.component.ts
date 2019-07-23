import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';
declare var $: any;
declare var jsPDF: any;
@Component({
    selector: 'app-addwholeseller',
    templateUrl: './addwholeseller.component.html',
    styleUrls: ['./addwholeseller.component.scss']
})
export class AddwholesellerComponent implements OnInit {

    constructor(public router: Router, private appService: AppService) { }

    backtowholeseller() {
        this.router.navigate(['/wholeseller']);
    }
    ngOnInit() {
    }
    bussiness_name;
    bussiness_houseno;
    bussiness_address;
    bussiness_country;
    bussiness_area;
    bussiness_city;
    bussiness_pincode;
    first_name;
    last_name;
    email;
    password;
    mobile;
    commission_to_admin;
    currLat;
    currLng;
    from_date;
    to_date;
    account_holder_name;
    account_number;
    bank_name;
    bank_branch;
    ifsc_code;
    getLocation(getCallFun) {
        let _self = this;
        var geocoder = new google.maps.Geocoder();
        var address = this.bussiness_area;
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                this.currLat = results[0].geometry.location.lat();
                // this.latitude = currLat;
                this.currLng = results[0].geometry.location.lng();
                getCallFun(this.currLat, this.currLng)
            }
        })
    }
    addWholeSeller() {
        let _self = this;
        // var geocoder = new google.maps.Geocoder();
        // var address = this.bussiness_area;
        // geocoder.geocode({ 'address': address }, function (results, status) {
        //     if (status == google.maps.GeocoderStatus.OK) {
        //         this.currLat = results[0].geometry.location.lat();
        //         // this.latitude = currLat;
        //         this.currLng = results[0].geometry.location.lng();
        //         if (this.currLat && this.currLng) {
        _self.getLocation(function getCallFun(lat, lan) {
            this.currLat = lat;
            alert(this.currLat)
            this.currLng = lan;
        })
        var data = {
            "image_one": _self.urls[0].split(',')[1],
            "image_two": _self.urls[1].split(',')[1],
            "image_three": _self.urls[2].split(',')[1],
            "image_four": _self.urls[3].split(',')[1],
            "first_name": _self.first_name,
            "last_name": _self.last_name,
            "email": _self.email,
            "password": _self.password,
            "mobile_number": _self.mobile,
            "role": "wholesaler",
            "bussiness_name": _self.bussiness_name,
            "bussiness_houseno": _self.bussiness_houseno,
            "bussiness_address": _self.bussiness_address,
            "bussiness_country": _self.bussiness_country,
            "bussiness_area": _self.bussiness_area,
            "bussiness_city": _self.bussiness_city,
            "bussiness_pincode": _self.bussiness_pincode ? (_self.bussiness_pincode) : '',
            "commission_to_admin": _self.commission_to_admin ? (_self.commission_to_admin) : '',
            "bussiness_latitude": this.currLat,
            "bussiness_longitude": this.currLng,
            "bussiness_from_time": _self.from_date,
            "bussiness_end_time": _self.to_date,
            "account_holder_name": _self.account_holder_name,
            "account_number": _self.account_number,
            "bank_name": _self.bank_name,
            "bank_branch": _self.bank_branch,
            "ifsc_code": _self.ifsc_code
        }
        // console.log(data);
        // debugger
        _self.appService.addWholeseller(data).subscribe((resp: any) => {
            if (resp.status === 200) {
                // this.data = {};
                _self.router.navigate(['/wholeseller']);
                // swal(resp.json().message, '', 'success');
            } else if (resp.json().status == 400) {
                swal(resp.json().message, '', 'error');
            }
        })
    }
    newSkuData = [];
    skuImage;
    action;
    selectedImage;
    img;
    strImage;
    skusData;
    skuImge;
    imgSku;
    urls = [];
    images;
    ImgArr = [];
    skid;
    detectFiles(event) {
        this.urls = [];
        let files = event.target.files;
        if (files) {
            for (let file of files) {
                let reader = new FileReader();
                reader.onload = (e: any) => {
                    console.log(e.target.result)
                    this.urls.push(e.target.result);
                }
                reader.readAsDataURL(file);
            }
        }
    }
    valuechange(t) {
        alert(t.taget.value);
    }
}
