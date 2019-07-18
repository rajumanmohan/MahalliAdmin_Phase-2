import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-addfeaturebanner',
  templateUrl: './addfeaturebanner.component.html'
})
export class AddfeaturebannerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backtofeature() {
    this.router.navigate(['/buttons/dropdowns']);

  }
}
