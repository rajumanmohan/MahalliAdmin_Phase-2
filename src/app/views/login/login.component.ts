import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(private appService: AppService, private formBuilder: FormBuilder, public router: Router) { }
  loginForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.loginForm.controls; }
  adminLogin() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    // var data = {
    //     "email": this.email,
    //     "password": this.password,
    // }
    // this.loginForm.value.role = "Admin";
    this.appService.adminlogin(this.loginForm.value).subscribe((resp: any) => {
      // swal("test","","success")
      if (resp.status == 200) {
        //     swal(resp.json().message, '', 'success');
        sessionStorage.setItem("role", resp.role);
        sessionStorage.setItem("profile", JSON.stringify(resp.row));
        if (resp.role == "wholesaler") {
          sessionStorage.setItem("wholesalerId", resp.id);
        }else if(resp.role == "vendor"){
          sessionStorage.setItem("vemdorId", resp.id);

        }

        // this.redirectTo('dashboard');
        // this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        // this.router.navigate(["dashboard"])); 
        this.router.navigate(['/dashboard']);
        //     // if (resp.json().role === "wholesaler") {
        //     //     sessionStorage.setItem("wholesalerId", resp.json().id);
        //     // }
      }
      // else if (resp.status == 400) {
      // swal(resp.json().message, '', 'error');
      //     this.router.navigate(['/'])
      // }
    })
    // location.reload();
  }
  // redirectTo(uri:string){
  //   this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>
  //   this.router.navigate([uri]));}



}

