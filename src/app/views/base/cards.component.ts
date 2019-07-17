import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  templateUrl: 'cards.component.html'
})
export class CardsComponent {

  constructor(public router: Router) { }
  addbanner() {
    this.router.navigate(['/Category/addbanners']);
  }
}
