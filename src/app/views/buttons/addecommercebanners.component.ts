import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-addecommercebanners',
  templateUrl: './addecommercebanners.component.html'
})
export class AddecommercebannersComponent implements OnInit {

  constructor(private router: Router) { }
  backtoecombanner() {
    this.router.navigate(['/buttons/brand-buttons']);
  }
  ngOnInit() {
  }

}
