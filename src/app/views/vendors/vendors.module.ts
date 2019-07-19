import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorsComponent } from './vendors.component';
import { VendorsRoutingModule } from './vendors-routing.module';
import { VendorproductsComponent } from './vendorproducts.component';
import { VendorordersComponent } from './vendororders.component';
import { VendororderdetailsComponent } from './vendororderdetails.component';



@NgModule({
  declarations: [VendorsComponent, VendorproductsComponent, VendorordersComponent, VendororderdetailsComponent],
  imports: [
    CommonModule,VendorsRoutingModule
  ]
})
export class VendorsModule { }