import { TypeCreateRequest } from './../../request/type-create.interface';
import { TypeDialogData } from './../../model/type-dialog-data';
import { AlarmMeApiService } from './../../service/alarm-me-api.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Type } from 'src/app/model/type.interface';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tipo-create-dialog',
  templateUrl: './tipo-create-dialog.component.html',
  styleUrls: ['./tipo-create-dialog.component.scss']
})
export class TipoCreateDialogComponent implements OnInit {
  type :Type
  typeN :TypeCreateRequest
  titulo = new FormControl('', [Validators.required]);
  place = new FormControl('', [Validators.required]);
  constructor(
    public dialogo: MatDialogRef<TipoCreateDialogComponent>,
    private service: AlarmMeApiService,
    @Inject(MAT_DIALOG_DATA) public data: TypeDialogData

  ) { }

  ngOnInit() {
    this.checkData();
  }
  checkData(){
    if(this.data.edit){
      this.type = {
        _id:this.data.type._id,
        description:this.data.type.description,
        typePlaces:this.data.type.typePlaces
      }
    }else{
      this.typeN={
        description:'',
        typePlaces:[]
      }
    }
  }

  create(){
    this.service.createType(this.typeN).subscribe(resp=>{
      this.dialogo.close(true);
    }),error =>{
      this.dialogo.close(false);
    };
    
  }

  update(){
    this.service.updateType(this.type).subscribe(resp=>{
      this.dialogo.close(true);
    }),error =>{
      this.dialogo.close(false);
    };
  }

  close(){

  }
}
