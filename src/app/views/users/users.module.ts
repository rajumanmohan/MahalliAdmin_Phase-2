import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { AddusersComponent } from './addusers.component';
import { UserordersComponent } from './userorders.component';
import { OrderdetailsComponent } from './orderdetails.component';
import { MyDatePickerModule } from 'mydatepicker';


@NgModule({
  declarations: [UsersComponent, AddusersComponent, UserordersComponent, OrderdetailsComponent],
  imports: [
    CommonModule, UsersRoutingModule,MyDatePickerModule
  ]
})
export class UsersModule { }
