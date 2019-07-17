import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  templateUrl: 'collapses.component.html'
})
export class CollapsesComponent {
  constructor(public router: Router) { }
  addbanner() {
    this.router.navigate(['/Category/addsubsubcategories']);
  }
}
