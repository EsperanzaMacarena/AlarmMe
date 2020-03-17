import { Type } from './../../model/type.interface';
import { AlarmMeApiService } from './../../service/alarm-me-api.service';
import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-tipo-lista',
  templateUrl: './tipo-lista.component.html',
  styleUrls: ['./tipo-lista.component.scss']
})
export class TipoListaComponent implements OnInit {
  displayedColumns = ['tipo', 'descripción', 'Lugar','editar','borrar'];
  
  types: Type[];

  constructor(
    private service:AlarmMeApiService,
    public dialog:MatDialog,
    @Inject(LOCALE_ID) private locale: string
  ) { }

  ngOnInit() {
    this.loadTypes();
  }
  
  loadTypes(){
    this.service.getTypes().subscribe(resp=>{
      this.types=resp;
    })
  }
  create(){
    //Crear un dialogo para crear/modificar
  }
  update(){
    //crear un dialogo para crear/modificar
  }

  delete(){
    //crear un diálogo para confirmar eliminar
  }

}
