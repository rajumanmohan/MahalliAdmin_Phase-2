import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WholesellerproductsComponent } from './wholesellerproducts.component';
import { AddwholesellerproductsComponent } from './addwholesellerproducts.component';

import { WholesellerproductsRoutingModule } from './wholesellerproducts-routing.module'

@NgModule({
  declarations: [WholesellerproductsComponent, AddwholesellerproductsComponent],
  imports: [
    CommonModule, WholesellerproductsRoutingModule
  ]
})
export class WholesellerproductsModule { }
