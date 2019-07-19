import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-addsinglebanner',
  templateUrl: './addsinglebanner.component.html',
  styleUrls: ['./addsinglebanner.component.scss']
})
export class AddsinglebannerComponent implements OnInit {

  constructor(private router: Router) { }

  backtosinglebanner() {
    this.router.navigate(['/buttons/singlebanner']);
  }
  ngOnInit() {
  }

}
