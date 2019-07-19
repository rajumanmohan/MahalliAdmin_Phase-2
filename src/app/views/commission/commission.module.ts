import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommissionComponent } from './commission.component';
import { CommissionRoutingModule } from './commission-routing.module';
import { WholesellerComponent } from './wholeseller.component'


@NgModule({
  declarations: [CommissionComponent, WholesellerComponent],
  imports: [
    CommonModule, CommissionRoutingModule
  ]
})
export class CommissionModule { }
