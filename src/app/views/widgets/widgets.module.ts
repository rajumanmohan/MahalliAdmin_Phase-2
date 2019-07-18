import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { AddproductComponent } from './addproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    WidgetsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
    
  ],
  declarations: [WidgetsComponent, AddproductComponent]
})
export class WidgetsModule { }
