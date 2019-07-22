import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductsComponent } from './addproducts.component';
import { MyproductsComponent } from './myproducts.component';
import { VendorproductsRoutingModule } from './vendorproducts-routing.module';

@NgModule({
  declarations: [AddproductsComponent, MyproductsComponent],
  imports: [
    CommonModule, VendorproductsRoutingModule
  ]
})
export class VendorproductsModule { }
