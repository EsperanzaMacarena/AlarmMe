
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculaLatest } from '../models/peliculalatest';
import { enlaces } from '../variables/variables';
import { Injectable } from '@angular/core';
import { PeliculaDetalle } from '../models/pelicula-detalle';
import { MarkFavoriteResponse } from '../dto/mark-favorite-response';
import { FavoritaNewDto } from '../dto/pelicula-favorita-new.dto';
import { WatchlistDto } from '../dto/watchlist.dto';
import { ListDto } from '../dto/listDto.dto';
const URL='https://api.themoviedb.org/3/movie/';

const requestOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  @Injectable({
    providedIn: 'root'
  })

export class PeliculasService {
    //observable= llamada asíncrona
    constructor(private http: HttpClient) {  
    }
    /*
    public getPelicula(): Observable<PeliculaResponse> {
        return this.http.get<PeliculaResponse>(
            URL+ 'popular'+enlaces.key,
            requestOptions
        );
    }*/
    
    
  }