import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';
@Component({
  selector: 'app-editvendor',
  templateUrl: './editvendor.component.html',
  styleUrls: ['./editvendor.component.scss']
})
export class EditvendorComponent implements OnInit {
  constructor(public router: Router, private appService: AppService, ) { }

  backtovendors() {
    this.router.navigate(['/vendorslist']);
  }
  ngOnInit() {
  }

}
