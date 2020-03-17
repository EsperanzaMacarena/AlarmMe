import { Routes } from '@angular/router';

import { AdminLayoutComponent, AuthLayoutComponent } from './core';
import { LoginComponent } from './dashboard/login/login.component';

export const AppRoutes: Routes = [
  {
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }]
}, /*{
  path: '',
  component: LoginComponent,
  children: [{
    path: 'session',
    loadChildren: './session/session.module#SessionModule'
  }]
},*/ {
  path: '**',
  redirectTo: 'session/404'
}];
