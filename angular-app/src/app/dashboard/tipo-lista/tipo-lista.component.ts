import { TipoDeleteDialogComponent } from './../tipo-delete-dialog/tipo-delete-dialog.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Type } from './../../model/type.interface';
import { AlarmMeApiService } from './../../service/alarm-me-api.service';
import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TipoCreateDialogComponent } from '../tipo-create-dialog/tipo-create-dialog.component';

@Component({
  selector: 'app-tipo-lista',
  templateUrl: './tipo-lista.component.html',
  styleUrls: ['./tipo-lista.component.scss']
})
export class TipoListaComponent implements OnInit {
  displayedColumns = ['tipo', 'lugar', 'editar', 'eliminar'];

  types: Type[]

  constructor(
    private service: AlarmMeApiService,
    public dialog: MatDialog,
    @Inject(LOCALE_ID) private locale: string,
    private snackbar: MatSnackBar
  ) { }
  config: MatSnackBarConfig = {
    duration: 2500
  }
  ngOnInit() {
    this.loadTypes();
  }

  loadTypes() {
    this.service.getTypes().subscribe(resp => {
      this.types = resp;
    })
  }
  open(type: Type, edit: boolean) {
    if (edit) {
      const dialogRef = this.dialog.open(TipoCreateDialogComponent, { data: { edit: true, type: type } });
      
      dialogRef.afterClosed().subscribe(resp=>{
        if(resp!=null){
          if (resp == true) {
            this.snackbar.open("Tipo de alarma editada correctamente", "cerrar", this.config);
            window.location.reload();
          } else {
            this.snackbar.open("No se ha podido editar el tipo de alarma.\nVuelva a intenarlo.", "cerrar", this.config);
          }
         
        }
      });
    
    } else {
      const dialogRef2 = this.dialog.open(TipoCreateDialogComponent,{data: {edit:false,type: type}});
      
      dialogRef2.afterClosed().subscribe(resp => {
        if (resp != null) {
          if (resp == true) {
            this.snackbar.open("Tipo de alarma creada correctamente", "cerrar", this.config);
            window.location.reload();
          } else {
            this.snackbar.open("No se ha podido registar el nuevo tipo de alarma.\nVuelva a intentarlo.", "cerrar", this.config);
          }
        }
      })
    }
  }

  delete(type: Type) {
    const dialogRef = this.dialog.open(TipoDeleteDialogComponent,{data: {edit:false,type: type}});
    dialogRef.afterClosed().subscribe(resp=>{
      if(resp!=null){
        if (resp == true) {
          this.snackbar.open("Tipo de alarma eliminada correctamente", "cerrar", this.config);
          window.location.reload();
        } else {
          this.snackbar.open("No se ha podido eliminar el tipo de alarma.\nVuelva a intenarlo.", "cerrar", this.config);
        }
       
      }
    });
  }

}
