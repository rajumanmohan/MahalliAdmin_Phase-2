import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
  }

}
