import { Component } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
@Component({
  templateUrl: 'brand-buttons.component.html'
})
export class BrandButtonsComponent {
  constructor(private router: Router) { }
  addbanner() {
    this.router.navigate(['/buttons/addecommerce']);
  }
}
