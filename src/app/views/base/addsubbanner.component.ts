import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addsubbanner',
  templateUrl: './addsubbanner.component.html',
  styleUrls: ['./addsubbanner.component.scss']
})
export class AddsubbannerComponent implements OnInit {

  constructor(public router: Router) { }
  backtosubcat() {
    this.router.navigate(['/Category/subcategories']);
  }
  ngOnInit() {
  }

}
