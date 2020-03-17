import { Component, OnInit } from '@angular/core';

import {PeliculasService} from "../service/peliculas.service"
import { PeliculaLatest } from '../models/peliculalatest';

@Component({
  selector: 'app-listado-peliculas-latest',
  templateUrl: './listado-peliculas-latest.component.html',
  styleUrls: ['./listado-peliculas-latest.component.css']
})
export class ListadoPeliculasLatestComponent implements OnInit {
  pelicula: PeliculaLatest; 
  constructor(private peliculaslatest : PeliculasService) { }
  enlace: String="https://image.tmdb.org/t/p/w500";
  ngOnInit() {
    this.loadPeliculasLatest();
  }
 
  ponerColorPorPuntuacion(valoracion: number){
    valoracion=valoracion*10
    if(valoracion<50){
      return 'red';
    }else if(valoracion>=50&&valoracion<70){
      return 'orange'
    }else{
      return 'green'
    }
  }
  calcularLongitudDescripcion(descripcion: String){
    return descripcion.length;
  }
  loadPeliculasLatest(){
    this.peliculaslatest.getPeliculaLatest().subscribe(resp => {
      
      this.pelicula = resp;
      if (this.pelicula.poster_path==undefined|| this.pelicula.poster_path==null){
        this.pelicula.poster_path='https://perishablepress.com/wp/wp-content/images/2019/fix-error-undefined.png';
      }else{
        this.pelicula.poster_path=this.enlace+this.pelicula.poster_path;
      }
      console.log( this.pelicula);
    });
    
  }

}
