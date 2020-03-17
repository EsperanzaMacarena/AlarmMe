import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { ListadoListasComponent } from '../listado-listas/listado-listas.component';
import { ListDto } from '../dto/listDto.dto';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-snackbar-crear-lista',
  templateUrl: './snackbar-crear-lista.component.html',
  styleUrls: ['./snackbar-crear-lista.component.css']
})
export class SnackbarCrearListaComponent implements OnInit {
  lista :ListDto;
  constructor(public snackbar :MatSnackBarRef<ListadoListasComponent>,
   ) { 
    this.lista=new ListDto('','','');
   }

  ngOnInit() {
  }
  closeSnackBar(lista :ListDto){
    this.lista=lista;
    this.snackbar.dismiss;
    
  }
}
