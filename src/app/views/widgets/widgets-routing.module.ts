import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WidgetsComponent } from './widgets.component';
import { AddproductComponent } from './addproduct.component';
const routes: Routes = [
  {
    path: '',
    component: WidgetsComponent,
    data: {
      title: 'Widgets'
    }
  },
  {
    path: 'addproduct',
    component: AddproductComponent,
    data: {
      title: 'Widgets'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule {}
