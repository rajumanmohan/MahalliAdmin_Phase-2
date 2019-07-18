import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AppService } from './../../services/mahali/mahali-data.service';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule implements OnInit { 
  constructor(private appService:AppService){

  }
  role;
  Count;
  userCount;
  wholeCount;
  ngOnInit() {
    // this.getAdminCount();
    // if(this.role=='wholesaler'){
    //     this.getAdminCount();
    // }
}

}
