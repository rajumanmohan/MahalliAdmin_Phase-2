import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/mahali/mahali-data.service';


@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  constructor(private appService: AppService) { }
  aboutusData=[];
  title;
  aboutusId;
  ngOnInit() {
    this.getAboutUs();
  }
  getAboutUs() {
    var inData =
    {
      "key": "Privacy Policy"
    }

    this.appService.getFooter(inData).subscribe((resp: any) => {
      this.aboutusData = resp.data[0].description;
      this.title = resp.data[0].type;
      this.aboutusId = resp.data[0].id;
    })
  }
  updateabout() {
    // this.encodeData = btoa(this.ckeditorContent);

    var data =
    {
      "id": this.aboutusId,
      "description":  this.aboutusData

    }

    this.appService.updateFooter(data).subscribe((resp: any) => {
      if (resp.status === 200) {

      }
    })
  }
}
