import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';

import { StaffRoutingModule } from './staff-routing.module';
import { AddstaffComponent } from './addstaff.component'

@NgModule({
  declarations: [StaffComponent, AddstaffComponent],
  imports: [
    CommonModule, StaffRoutingModule
  ]
})
export class StaffModule { }
