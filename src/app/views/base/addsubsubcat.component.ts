import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addsubsubcat',
  templateUrl: './addsubsubcat.component.html',
  styleUrls: ['./addsubsubcat.component.scss']
})
export class AddsubsubcatComponent implements OnInit {

  constructor(public router: Router) { }
  backtosubcat() {
    this.router.navigate(['/Category/subsubcategories']);
  }
  ngOnInit() {
  }

}
