import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-brandbanner',
  templateUrl: './brandbanner.component.html'
})
export class BrandbannerComponent implements OnInit {
  constructor(private router: Router) { }
  addbrandbanner() {
    this.router.navigate(['/buttons/addbrnadbanner']);
  }
  ngOnInit() {
  }

}
