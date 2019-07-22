import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WholesellerComponent } from './wholeseller.component';
import { WholeSellerRoutingModule } from './wholeseller-routing.module';
import { AddwholesellerComponent } from './addwholeseller.component';
import { WholesellerproductsComponent } from './wholesellerproducts.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WholesellerComponent, AddwholesellerComponent, WholesellerproductsComponent],
  imports: [
    CommonModule, WholeSellerRoutingModule,FormsModule
  ]
})
export class WholesellerModule { }
