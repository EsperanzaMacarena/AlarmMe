import { Component, OnInit, Inject } from '@angular/core';
import { ListDto } from '../dto/listDto.dto';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListadoListasComponent } from '../listado-listas/listado-listas.component';
import { PeliculasService } from '../service/peliculas.service';
import { TouchSequence } from 'selenium-webdriver';

export interface DialogFormularioCrearLista{
  
}

@Component({
  selector: 'app-formulario-crear-lista',
  templateUrl: './formulario-crear-lista.component.html',
  styleUrls: ['./formulario-crear-lista.component.css']
})
export class FormularioCrearListaComponent implements OnInit{
  lista: ListDto;
  tituloDialog : string;

  constructor(public dialogReferencia :MatDialogRef<ListadoListasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogFormularioCrearLista
    ) {
      this.lista=new ListDto('','','es');
      this.tituloDialog='Crear lista';
     }

  ngOnInit() {
    
  }
 

  cerrarDialog(){
    this.dialogReferencia.close();
  }
  
}
