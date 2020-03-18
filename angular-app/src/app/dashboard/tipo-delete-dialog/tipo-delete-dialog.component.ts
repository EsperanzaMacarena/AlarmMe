import { TypeDialogData } from './../../model/type-dialog-data';
import { AlarmMeApiService } from './../../service/alarm-me-api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-tipo-delete-dialog',
  templateUrl: './tipo-delete-dialog.component.html',
  styleUrls: ['./tipo-delete-dialog.component.scss']
})
export class TipoDeleteDialogComponent implements OnInit {

  constructor( public dialogo: MatDialogRef<TipoDeleteDialogComponent>,
    private service: AlarmMeApiService,
    @Inject(MAT_DIALOG_DATA) public data: TypeDialogData) { }

  ngOnInit() {
  }

  delete(){
    
  }
}
