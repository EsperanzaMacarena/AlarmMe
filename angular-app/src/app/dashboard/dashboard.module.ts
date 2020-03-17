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
import { LoginComponent } from './login/login.component';
import { ConfigService, configServiceInitializerFactory } from '../service/config.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AlarmMeApiService } from '../service/alarm-me-api.service';
export function tokenGetter() {
  return localStorage.getItem("token");
}

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
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["example.com"],
        blacklistedRoutes: ["example.com/examplebadroute/"]
      }
    })
  ],
  declarations: [DashboardComponent,LoginComponent],
  providers:[
    AlarmMeApiService,
    ConfigService,
    JwtHelperService, {
      provide: APP_INITIALIZER,
      useFactory: configServiceInitializerFactory,
      deps: [ConfigService],
      multi: true
    },
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule {}
