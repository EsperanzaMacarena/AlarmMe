import { TipoListaComponent } from './tipo-lista/tipo-lista.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Routes = [
  {
    path: 'type',
    component: TipoListaComponent
  }
];
