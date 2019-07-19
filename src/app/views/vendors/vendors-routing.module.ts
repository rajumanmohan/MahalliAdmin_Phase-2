import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorsComponent } from './vendors.component';
import { VendorproductsComponent } from './vendorproducts.component';
import { VendorordersComponent } from './vendororders.component';
import { VendororderdetailsComponent } from './vendororderdetails.component';

const routes: Routes = [
    {
        path: '',
        component: VendorsComponent,
        data: {
            title: 'Vendors'
        }
    },
    {
        path: 'vendorproducts',
        component: VendorproductsComponent,
        data: {
            title: 'Vendors'
        }
    },
    {
        path: 'vendororders',
        component: VendorordersComponent,
        data: {
            title: 'Vendors'
        }
    },
    {
        path: 'vendorordersdetails',
        component: VendororderdetailsComponent,
        data: {
            title: 'Vendors'
        }
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VendorsRoutingModule { }
