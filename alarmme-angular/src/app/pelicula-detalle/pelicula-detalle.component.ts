import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../service/peliculas.service';
import { PeliculaDetalle } from '../models/pelicula-detalle';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit {
  id: string;
  pelicula :PeliculaDetalle;
  enlace: String="https://image.tmdb.org/t/p/w500";
  
  constructor(
    private route: ActivatedRoute,
    private ps: PeliculasService
  ) { }

  ngOnInit() {
    //cojo el id de la película , busco y devuelvo la peli seleccionada
    //además, seteo una imagen si es null.
    //Después solo queda html
    //en el caso de que no tuviese id el elemento, hacerlo con la url (método split, coger del array el id)
    this.route.paramMap.subscribe(params =>{
      this.id=params.get("id");
      this.ps.getPeliculaDetalle(this.id).subscribe(resp=>{
        this.pelicula=resp;
        if (this.pelicula.poster_path==undefined|| this.pelicula.poster_path==null){
          this.pelicula.poster_path='https://perishablepress.com/wp/wp-content/images/2019/fix-error-undefined.png';
        }else{
          this.pelicula.poster_path=this.enlace+this.pelicula.poster_path;
        }
      })
    })
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
}
