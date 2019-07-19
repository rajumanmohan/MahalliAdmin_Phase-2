import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { AllusersComponent } from './views/allusers/allusers.component';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },

  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'Category',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      },
      {
        path: 'userslist',
        loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'wholeseller',
        loadChildren: () => import('./views/wholeseller/wholeseller.module').then(m => m.WholesellerModule)
      },
      {
        path: 'vendorslist',
        loadChildren: () => import('./views/vendors/vendors.module').then(m => m.VendorsModule)
      },
      {
        path: 'suggestedproducts',
        loadChildren: () => import('./views/suggestedproducts/suggestedproducts.module').then(m => m.SuggestedproductsModule)
      },
      {
        path: 'content',
        loadChildren: () => import('./views/content/content.module').then(m => m.ContentModule)
      },
      {
        path: 'commission',
        loadChildren: () => import('./views/commission/commission.module').then(m => m.CommissionModule)
      },
      {
        path: 'staff',
        loadChildren: () => import('./views/staff/staff.module').then(m => m.StaffModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./views/adminprofile/adminprofile.module').then(m => m.AdminprofileModule)
      },
      {
        path: 'allusers',
        loadChildren: () => import('./views/allusers/allusers.module').then(m => m.AllusersModule)
      }
    ]
  },
  { path: '**', component: P404Component },
];
``
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
