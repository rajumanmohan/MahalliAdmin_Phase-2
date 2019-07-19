import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WholesellerComponent } from './wholeseller.component';
import { AddwholesellerComponent } from './addwholeseller.component';
import { WholesellerproductsComponent } from './wholesellerproducts.component';

const routes: Routes = [
    {
        path: '',
        component: WholesellerComponent,
        data: {
            title: 'Whole seller'
        }
    },
    {
        path: 'addwholeseller',
        component: AddwholesellerComponent,
        data: {
            title: 'Whole seller'
        }
    },
    {
        path: 'wholesellerproducts',
        component: WholesellerproductsComponent,
        data: {
            title: 'Whole seller'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WholeSellerRoutingModule { }
