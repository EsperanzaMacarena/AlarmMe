import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PeliculasService } from './service/peliculas.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioCrearListaComponent } from './formulario-crear-lista/formulario-crear-lista.component';
import { ListadoListasComponent } from './tipo-lista/tipo-lista.component';
import {MatInputModule} from '@angular/material/input'; 
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatDialogModule,MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule , MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { AuthService } from './service/auth.service';
import { ConfigService, configServiceInitializerFactory } from './service/config.service';
import { AlarmMeApiService } from './service/alarm-me-api.service';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import {MatChipsModule} from '@angular/material/chips';
import { LoginComponent } from './login/login.component';

//RUTAS DE LA APP
const routes: Routes = [ 
  { path: 'crear-lista', component: FormularioCrearListaComponent },
  { path: 'listas', component: ListadoListasComponent },
  {path: 'login', component: LoginComponent},
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: '**', component: PaginaNoEncontradaComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    FormularioCrearListaComponent,
    ListadoListasComponent,
    LoginComponent
  
  ],
  imports: [
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [
    AuthService,
    AlarmMeApiService,
    ConfigService,{
      provide: APP_INITIALIZER,
      useFactory: configServiceInitializerFactory,
      deps: [ConfigService],
      multi: true
    },
    JwtHelperService,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000 } },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide:  MAT_SNACK_BAR_DATA, useValue: {} },
    { provide:  MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {} },
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}  ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
