import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PeliculaDetalleComponent } from './pelicula-detalle/pelicula-detalle.component';
import { PeliculasService } from './service/peliculas.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { HttpClientModule } from '@angular/common/http';
import { ListadoPeliculasLatestComponent } from './listado-peliculas-latest/listado-peliculas-latest.component';
import { ListadoPeliculasTopComponent } from './listado-peliculas-top/listado-peliculas-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from './service/authentication.service';
import { PeliculasFavoritasComponent } from './peliculas-favoritas/peliculas-favoritas.component';
import { WatchlistListadoComponent } from './watchlist-listado/watchlist-listado.component';
import { FormularioCrearListaComponent } from './formulario-crear-lista/formulario-crear-lista.component';
import { ListadoListasComponent } from './listado-listas/listado-listas.component';
import {MatInputModule} from '@angular/material/input'; 
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatDialogModule,MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule , MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { SnackbarCrearListaComponent } from './snackbar-crear-lista/snackbar-crear-lista.component'; 
//RUTAS DE LA APP
const routes: Routes = [ 
  { path: 'populares', component: ListadoPeliculasComponent }, 
  { path: 'latest', component: ListadoPeliculasLatestComponent }, 
  { path: 'toprated', component: ListadoPeliculasTopComponent }, 
  { path: 'favoritos', component: PeliculasFavoritasComponent },
  { path: 'pelicula/:id', component: PeliculaDetalleComponent },
  { path: 'watchlist', component: WatchlistListadoComponent },
  { path: 'crear-lista', component: FormularioCrearListaComponent },
  { path: 'listas', component: ListadoListasComponent },
  { path: '', pathMatch: 'full', redirectTo: '/populares' },
  { path: '**', component: PaginaNoEncontradaComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    PeliculaDetalleComponent,
    PaginaNoEncontradaComponent,
    ListadoPeliculasLatestComponent,
    ListadoPeliculasTopComponent,
    PeliculasFavoritasComponent,
    WatchlistListadoComponent,
    FormularioCrearListaComponent,
    ListadoListasComponent,
    SnackbarCrearListaComponent
  
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
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#FDB900",
      "radius": 20,
      "maxPercent": 100,
      "unitsFontSize": "12",
      "unitsFontWeight": "700",
      "unitsColor": "#483500",
      "outerStrokeWidth": 5,
      "outerStrokeColor": "#FFFFFF",
      "innerStrokeColor": "#FFFFFF",
      "titleColor": "#483500",
      "titleFontSize": "15",
      "titleFontWeight": "600",
      "subtitleColor": "#483500",
      "animateTitle": false,
      "showSubtitle": false,
      "showInnerStroke": false,
      "startFromZero": false
    }),
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
