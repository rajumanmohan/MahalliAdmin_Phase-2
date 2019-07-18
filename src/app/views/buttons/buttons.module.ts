import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonsComponent } from './buttons.component';
import { BrandButtonsComponent } from './brand-buttons.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownsComponent } from './dropdowns.component';

// Buttons Routing
import { ButtonsRoutingModule } from './buttons-routing.module';
import { AddmainbannerComponent } from './addmainbanner.component';
import { AddfeaturebannerComponent } from './addfeaturebanner.component';
import { AddecommercebannersComponent } from './addecommercebanners.component';
import { BrandbannerComponent } from './brandbanner.component';
import { AddbrandbannersComponent } from './addbrandbanners/addbrandbanners.component';

// Angular

@NgModule({
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  declarations: [
    ButtonsComponent,
    DropdownsComponent,
    BrandButtonsComponent,
    AddmainbannerComponent,
    AddfeaturebannerComponent,
    AddecommercebannersComponent,
    BrandbannerComponent,
    AddbrandbannersComponent
  ]
})
export class ButtonsModule { }
