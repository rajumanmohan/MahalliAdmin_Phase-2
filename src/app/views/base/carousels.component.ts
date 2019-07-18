import { Component, OnDestroy,OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Router } from '@angular/router';
import { AppService } from './../../services/mahali/mahali-data.service';

@Component({
  templateUrl: 'carousels.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ]
})
export class CarouselsComponent implements OnInit {

  myInterval: number | false = 6000;
  slides: any[] = [];
  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;
  groceryCats;
  title;
  EcomCats;
  type;
  category;
  constructor(public router: Router,private appService:AppService) { }
  addbanner() {
    this.router.navigate(['/Category/addsubcatbanners']);
  }

  // ngOnDestroy(): void {
  // }
  ngOnInit(){
    // this.getGroceryCats();

  }
  
}
