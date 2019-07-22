import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss']
})
export class CommissionComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.vendorcomission();
  }
  commisionData;
  vendorcomission() {
    this.appService.getVendorCommision().subscribe((res: any) => {
      this.commisionData = res.data;
      console.log(this.commisionData)
    })
  }
}
