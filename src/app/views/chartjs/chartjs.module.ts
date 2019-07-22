import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { ChartJSComponent } from './chartjs.component';
import { ChartJSRoutingModule } from './chartjs-routing.module';
import { CouponmanagementComponent } from './couponmanagement.component';
import { CommonModule } from '@angular/common';
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ChartJSRoutingModule,
    ChartsModule,
    CommonModule,
    MyDatePickerModule,
    FormsModule
  ],
  declarations: [ ChartJSComponent, CouponmanagementComponent ]
})
export class ChartJSModule { }
