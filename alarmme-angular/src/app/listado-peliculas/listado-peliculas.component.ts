import { Component, OnInit } from '@angular/core';
//import { PELICULAS } from '../models/mock-peliculas';
import { Pelicula } from "../models/pelicula";
import {PeliculasService} from "../service/peliculas.service"
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
  //peliculas: Pelicula[]=PELICULAS;
  peliculas: Pelicula[];
  //peliculaSeleccionada: Pelicula;
  enlace: String="https://image.tmdb.org/t/p/w500";
  sesion: string;
  es_favorito:boolean;
  constructor(private peliculaspopulares : PeliculasService ) { }

  ngOnInit() {
    this.loadPeliculasPopulares();
  }
  
  /*selectPelicula(pelicula: Pelicula){
    //para hacer referencia a un atributo de mi clase:
    this.peliculaSeleccionada= pelicula;
  }*/
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
  cortarTexto(){
    this.peliculas.forEach(x=>{
      if(x.overview.length>240){
        x.overview=x.overview.slice(0,240)+' ...';
      }
     
    });

  }
  loadPeliculasPopulares(){
    this.peliculaspopulares.getPelicula().subscribe(resp => {
      this.peliculas = resp.results;
      this.cortarTexto();
    });
    
  }
  marcarFavorito(id:number){
    this.sesion=localStorage.getItem('sessionId');
    this.es_favorito=true;
    this.peliculaspopulares.postMarkFavorite(this.sesion,id,this.es_favorito).subscribe(resp=>{
      if(resp.status_code===1){
        alert("Película añadida a Favoritos");
        window.location.href='http://localhost:4200/favoritos';
      }else{
        alert("Error al marcar la película como favoritos");
      }
    });
  }
  marcarWatchlist(id:number){
    this.sesion=localStorage.getItem('sessionId');
    const es_watchlist=true;
    this.peliculaspopulares.postMarkWatchlist(this.sesion,id,es_watchlist).subscribe(resp=>{
      if(resp.status_code===1){
        alert("Película añadida a Watchlist");
        window.location.href='http://localhost:4200/watchlist';
      }else{
        alert("Error al añadir la película en su Watchlist");
      }
    });
  }
 
}
