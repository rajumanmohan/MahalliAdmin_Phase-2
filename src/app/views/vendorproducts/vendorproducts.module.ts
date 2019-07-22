import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductsComponent } from './addproducts.component';
import { MyproductsComponent } from './myproducts.component';
import { VendorproductsRoutingModule } from './vendorproducts-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddproductsComponent, MyproductsComponent],
  imports: [
    CommonModule, VendorproductsRoutingModule,FormsModule
  ]
})
export class VendorproductsModule { }
