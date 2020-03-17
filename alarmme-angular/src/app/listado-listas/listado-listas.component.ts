import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../service/peliculas.service';
import { Observable } from 'rxjs';
import { ListDto } from '../dto/listDto.dto';
import { Lista } from '../models/lista-interface';
import { MatDialog } from '@angular/material/dialog';
import { FormularioCrearListaComponent } from '../formulario-crear-lista/formulario-crear-lista.component';
import { SnackbarCrearListaComponent } from '../snackbar-crear-lista/snackbar-crear-lista.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-listado-listas',
  templateUrl: './listado-listas.component.html',
  styleUrls: ['./listado-listas.component.css']
})
export class ListadoListasComponent implements OnInit {
  listas :Lista[];
  lista :ListDto;
  columnsToDisplay = ['name', 'description'];

  constructor(private peliculaServicio :PeliculasService,
    public dialog: MatDialog, private snackBar :MatSnackBar

    )
     { }

  ngOnInit() {
    this.loadLists();
  }
  loadLists(){
    this.peliculaServicio.getListas(localStorage.getItem('sessionId')).subscribe(resp=>{
      console.log(resp.results);
        this.listas=resp.results;
    })
  }
  openCreateNewList(){
    const sesion=localStorage.getItem('sessionId');

    const dialogRef=this.dialog.open(FormularioCrearListaComponent);
    dialogRef.afterClosed().subscribe(resp1=>{
   
      this.peliculaServicio.postCrearLista(resp1,sesion).subscribe(resp=>{
        if(resp.success==true){
          alert("entro en open snackbar")
         this.snackBar.open(("Se ha creado correctamente la lista "+this.lista.name),
         "Cerrar",{duration: 2000});
         // alert("Se ha creado correctamente la lista "+this.lista.name);
        }else{
          alert("Ha ocurrido un problema al intentar crear la lista, vuelva a intentarlo");
        }
      });
  
    });
   

  }
  
}
