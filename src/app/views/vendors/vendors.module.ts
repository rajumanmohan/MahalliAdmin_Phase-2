import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorsComponent } from './vendors.component';
import { VendorsRoutingModule } from './vendors-routing.module';
import { VendorproductsComponent } from './vendorproducts.component';
import { VendorordersComponent } from './vendororders.component';
import { VendororderdetailsComponent } from './vendororderdetails.component';
import { FormsModule } from '@angular/forms';
import { EditvendorComponent } from './editvendor.component';
import { MyDatePickerModule } from 'mydatepicker';



@NgModule({
  declarations: [VendorsComponent, VendorproductsComponent, VendorordersComponent, VendororderdetailsComponent, EditvendorComponent],
  imports: [
    CommonModule, VendorsRoutingModule, FormsModule,MyDatePickerModule
  ]
})
export class VendorsModule { }
