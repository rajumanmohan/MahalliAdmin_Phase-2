import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { ChartJSComponent } from './chartjs.component';
import { ChartJSRoutingModule } from './chartjs-routing.module';
import { CouponmanagementComponent } from './couponmanagement.component';
import { CommonModule } from '@angular/common';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    ChartJSRoutingModule,
    ChartsModule,
    CommonModule,
    MyDatePickerModule
  ],
  declarations: [ ChartJSComponent, CouponmanagementComponent ]
})
export class ChartJSModule { }
