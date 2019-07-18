import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WholesellerComponent } from './wholeseller.component';

const routes: Routes = [
    {
        path: '',
        component: WholesellerComponent,
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
