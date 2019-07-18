import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons.component';
import { DropdownsComponent } from './dropdowns.component';
import { BrandButtonsComponent } from './brand-buttons.component';
import { AddmainbannerComponent } from './addmainbanner.component';
import { AddfeaturebannerComponent } from './addfeaturebanner.component';
import { AddecommercebannersComponent } from './addecommercebanners.component';
import { BrandbannerComponent } from './brandbanner.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    children: [
      {
        path: '',
        redirectTo: 'buttons'
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Buttons'
        }
      },
      {
        path: 'addmainbanner',
        component: AddmainbannerComponent,
        data: {
          title: 'banner'
        }
      },
      {
        path: 'dropdowns',
        component: DropdownsComponent,
        data: {
          title: 'Dropdowns'
        }
      },
      {
        path: 'brand-buttons',
        component: BrandButtonsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'addfeaturedbuttons',
        component: AddfeaturebannerComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'addecommerce',
        component: AddecommercebannersComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'brandbanner',
        component: BrandbannerComponent,
        data: {
          title: 'Brand buttons'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule { }
