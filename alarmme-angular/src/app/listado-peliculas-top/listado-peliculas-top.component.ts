import { Component, OnInit } from '@angular/core';
import { Pelicula } from "../models/pelicula";
import {PeliculasService} from "../service/peliculas.service"

@Component({
  selector: 'app-listado-peliculas-top',
  templateUrl: './listado-peliculas-top.component.html',
  styleUrls: ['./listado-peliculas-top.component.css']
})
export class ListadoPeliculasTopComponent implements OnInit {
  peliculas: Pelicula[];
  peliculaSeleccionada: Pelicula;
  enlace: String="https://image.tmdb.org/t/p/w500";
  
  constructor(private peliculastoprated : PeliculasService) { }

  ngOnInit() {
    this.loadPeliculasTopRated();
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
  loadPeliculasTopRated(){
    this.peliculastoprated.getPeliculaTopRated().subscribe(resp => {
      this.peliculas = resp.results;
      this.peliculas.forEach(function (pelicula){
        pelicula.poster_path=this.enlace+pelicula.poster_path;
       
      })
    });
  }
}
