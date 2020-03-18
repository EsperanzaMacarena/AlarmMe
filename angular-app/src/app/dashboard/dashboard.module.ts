import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatInputModule ,
  MatFormFieldModule,
  MatSnackBarModule,
  MatMenuModule,
  MatProgressBarModule
} from '@angular/material';

import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select'; 
import {ReactiveFormsModule} from '@angular/forms';

import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { AlarmMeApiService } from '../service/alarm-me-api.service';
import { TipoListaComponent } from './tipo-lista/tipo-lista.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { TipoCreateDialogComponent } from './tipo-create-dialog/tipo-create-dialog.component';
import { TipoDeleteDialogComponent } from './tipo-delete-dialog/tipo-delete-dialog.component';
registerLocaleData(localeEs, 'es');



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatListModule,
    MatSelectModule,
    MatInputModule ,
    MatProgressBarModule,
    MatMenuModule,
    ChartsModule,
    MatDialogModule,
    FormsModule,
    NgxDatatableModule,
    FlexLayoutModule,
    MatTableModule,
  ],
  declarations: [DashboardComponent, TipoListaComponent, TipoCreateDialogComponent, TipoDeleteDialogComponent],
  providers:[
    AlarmMeApiService,
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents:[
    TipoCreateDialogComponent,
    TipoDeleteDialogComponent
  ]
})
export class DashboardModule {}
