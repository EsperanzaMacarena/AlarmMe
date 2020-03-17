import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { AuthenticationService } from './service/authentication.service';
import { FormularioCrearListaComponent } from './formulario-crear-lista/formulario-crear-lista.component';
import { ListadoListasComponent } from './listado-listas/listado-listas.component';
import {MatInputModule} from '@angular/material/input'; 
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatDialogModule,MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule , MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

//RUTAS DE LA APP
const routes: Routes = [ 
  { path: 'crear-lista', component: FormularioCrearListaComponent },
  { path: 'listas', component: ListadoListasComponent },
  { path: '', pathMatch: 'full', redirectTo: '/populares' },
  { path: '**', component: PaginaNoEncontradaComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    FormularioCrearListaComponent,
    ListadoListasComponent,
  
  ],
  imports: [
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
    PeliculasService,
    AuthenticationService,
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide:  MAT_SNACK_BAR_DATA, useValue: {} },
    { provide:  MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {} },
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}  ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
