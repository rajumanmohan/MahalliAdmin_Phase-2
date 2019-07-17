import { Component } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
@Component({
  templateUrl: 'buttons.component.html'
})
export class ButtonsComponent {

  constructor(private router: Router) { }
  addbanner() {
    this.router.navigate(['/buttons/addmainbanner']);
  }
}
