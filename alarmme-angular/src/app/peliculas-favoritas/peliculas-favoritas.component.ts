import { Component, OnInit } from '@angular/core';
import { PeliculaFavorita } from '../models/pelicula-favorita.interface';
import { PeliculasService } from '../service/peliculas.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-peliculas-favoritas',
  templateUrl: './peliculas-favoritas.component.html',
  styleUrls: ['./peliculas-favoritas.component.css']
})
export class PeliculasFavoritasComponent implements OnInit {
  peliculasfav: PeliculaFavorita[];
  id: string;
  sesion: string;
  es_favorito:boolean;
  enlace: String="https://image.tmdb.org/t/p/w500";
  constructor(private peliculasservice : PeliculasService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.loadPeliculasFavoritas();
    
  }
 
  loadPeliculasFavoritas(){
    const sesion=localStorage.getItem('sessionId');
    this.peliculasservice.getPeliculasFavoritas(sesion).subscribe(resp => {
      this.peliculasfav = resp.results;
      console.log(this.peliculasfav);
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
  desmarcarPeliculaFavorita(id:number){
    this.sesion=localStorage.getItem('sessionId');
    this.es_favorito=false;
    this.peliculasservice.postMarkFavorite(this.sesion,id,this.es_favorito).subscribe(resp=>{    
       this.loadPeliculasFavoritas();
       window.location.reload();
       
       
    });
  }
}
