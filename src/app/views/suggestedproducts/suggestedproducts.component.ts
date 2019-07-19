import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggestedproducts',
  templateUrl: './suggestedproducts.component.html',
  styleUrls: ['./suggestedproducts.component.scss']
})
export class SuggestedproductsComponent implements OnInit {

  constructor(public router: Router) { }

  editorder() {
    this.router.navigate(['/suggestedproducts/editsuggestedproducts']);
  }
  ngOnInit() {
  }

}
