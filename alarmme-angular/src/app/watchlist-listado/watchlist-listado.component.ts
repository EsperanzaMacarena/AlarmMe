import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../service/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from '../models/pelicula';

@Component({
  selector: 'app-watchlist-listado',
  templateUrl: './watchlist-listado.component.html',
  styleUrls: ['./watchlist-listado.component.css']
})
export class WatchlistListadoComponent implements OnInit {
  pelisporver :Pelicula[];
  sesion: string;
  enlace: String="https://image.tmdb.org/t/p/w500";
  constructor(private peliculasservice : PeliculasService,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.loadWatchlist();
  }
  loadWatchlist(){
    this.sesion=localStorage.getItem('sessionId');
    this.peliculasservice.obtenerWatchlist(this.sesion).subscribe(resp => {
      this.pelisporver = resp.results;
      console.log(this.pelisporver);
    });
  }
  desmarcarWatchlist(id: number){
    this.sesion=localStorage.getItem('sessionId');
    const es_watchlist=false;
    this.peliculasservice.postMarkFavorite(this.sesion,id,es_watchlist).subscribe(resp=>{    
      this.loadWatchlist();

    });
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
}
