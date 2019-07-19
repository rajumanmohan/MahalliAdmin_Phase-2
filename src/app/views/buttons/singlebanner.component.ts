import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-singlebanner',
  templateUrl: './singlebanner.component.html',
  styleUrls: ['./singlebanner.component.scss']
})
export class SinglebannerComponent implements OnInit {

  constructor(private router: Router) { }
  addsinglebanner() {
    this.router.navigate(['/buttons/addsinglebanner']);
  }
  ngOnInit() {
  }

}
