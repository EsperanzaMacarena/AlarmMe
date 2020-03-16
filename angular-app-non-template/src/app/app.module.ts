import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './service/auth.service';
import { AlarmeApiService } from './service/alarme-api.service';
import { ConfigService, configServiceInitializerFactory } from './service/config.service';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,

    BrowserAnimationsModule,
    MatSnackBarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["example.com"],
        blacklistedRoutes: ["example.com/examplebadroute/"]
      }
    }),
  ],
  providers: [AuthService,
    AlarmeApiService,
    ConfigService, {
    provide: APP_INITIALIZER,
    useFactory: configServiceInitializerFactory,
    deps: [ConfigService],
    multi: true
  },
  JwtHelperService,
  { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000 } }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
