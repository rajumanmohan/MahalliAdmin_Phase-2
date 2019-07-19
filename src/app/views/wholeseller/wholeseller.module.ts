import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WholesellerComponent } from './wholeseller.component';
import { WholeSellerRoutingModule } from './wholeseller-routing.module';
import { AddwholesellerComponent } from './addwholeseller/addwholeseller.component';


@NgModule({
  declarations: [WholesellerComponent, AddwholesellerComponent],
  imports: [
    CommonModule, WholeSellerRoutingModule
  ]
})
export class WholesellerModule { }
