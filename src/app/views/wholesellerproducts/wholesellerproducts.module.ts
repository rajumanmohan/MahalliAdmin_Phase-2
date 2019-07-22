import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WholesellerproductsComponent } from './wholesellerproducts.component';
import { AddwholesellerproductsComponent } from './addwholesellerproducts.component';
import { FormsModule } from '@angular/forms';
import { WholesellerproductsRoutingModule } from './wholesellerproducts-routing.module';
import { ProductapprovalComponent } from './productapproval.component';

@NgModule({
  declarations: [WholesellerproductsComponent, AddwholesellerproductsComponent, ProductapprovalComponent],
  imports: [
    CommonModule, WholesellerproductsRoutingModule, FormsModule
  ]
})
export class WholesellerproductsModule { }
