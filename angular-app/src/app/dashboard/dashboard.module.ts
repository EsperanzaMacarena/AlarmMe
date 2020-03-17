import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatInputModule ,
  MatFormFieldModule,
  MatMenuModule,
  MatProgressBarModule
} from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule,APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { AlarmMeApiService } from '../service/alarm-me-api.service';
import { TipoListaComponent } from './tipo-lista/tipo-lista.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
registerLocaleData(localeEs, 'es');



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule ,
    MatProgressBarModule,
    MatMenuModule,
    ChartsModule,
    FormsModule,
    NgxDatatableModule,
    FlexLayoutModule,
    
  ],
  declarations: [DashboardComponent, TipoListaComponent],
  providers:[
    AlarmMeApiService,
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule {}
