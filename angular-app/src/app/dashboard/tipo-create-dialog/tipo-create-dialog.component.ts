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
  places: String[]
  typeN :TypeCreateRequest
  titulo = new FormControl('', [Validators.required]);
  place = new FormControl('', [Validators.required]);
  constructor(
    public dialogo: MatDialogRef<TipoCreateDialogComponent>,
    private service: AlarmMeApiService,
    @Inject(MAT_DIALOG_DATA) public data: TypeDialogData

  ) { }

  ngOnInit() {
    this.getPlaces();
    this.checkData();
  }

  getPlaces(){
    this.places=[];
    this.service.getPlaces().subscribe(resp=>{
      this.places=resp;
    });
  }

  checkData(){
    if(this.data.edit){
      this.typeN = {
        description:this.data.type.description,
        places:this.data.type.places
      }
    }else{
      this.typeN={
        description:'',
        places:''
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
    this.service.updateType(this.typeN, this.data.type._id).subscribe(resp=>{
      this.dialogo.close(true);
    }),error =>{
      this.dialogo.close(false);
    };
  }

  close(){
    this.dialogo.close(null);
  }
}
