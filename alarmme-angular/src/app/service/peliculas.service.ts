
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculaResponse } from '../responses/pelicula-response.interface';
import { PeliculaLatest } from '../models/peliculalatest';
import { enlaces } from '../variables/variables';
import { Injectable } from '@angular/core';
import { PeliculaDetalle } from '../models/pelicula-detalle';
import { PeliculasFavoritasResponse } from '../responses/peliculas-favoritas-response.interface';
import { MarkFavoriteResponse } from '../dto/mark-favorite-response';
import { FavoritaNewDto } from '../dto/pelicula-favorita-new.dto';
import { WatchlistListadoComponent } from '../watchlist-listado/watchlist-listado.component';
import { WatchlistResponse } from '../responses/watchlist-response';
import { WatchlistDto } from '../dto/watchlist.dto';
import { MarkWatchlistResponse } from '../responses/mark-watchlist-response';
import { ListDto } from '../dto/listDto.dto';
import { CreateListResponse } from '../responses/create-list-response';
const URL='https://api.themoviedb.org/3/movie/';
const urlcuenta='https://api.themoviedb.org/3/account/{account_id}';
const urllista='https://api.themoviedb.org/3/list'
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
    public getPelicula(): Observable<PeliculaResponse> {
        return this.http.get<PeliculaResponse>(
            URL+ 'popular'+enlaces.key,
            requestOptions
        );
    }
    public getPeliculaTopRated(): Observable<PeliculaResponse> {
      return this.http.get<PeliculaResponse>(
          URL+'top_rated'+enlaces.key,
          requestOptions
      );
    }
    public getPeliculaLatest():Observable<PeliculaLatest> {
      return this.http.get<PeliculaLatest>(
          URL + 'latest'+enlaces.key,
          requestOptions
      );
    }
    //Método para recibir una respuesta de la API (pelicula detalle) y devuelvo la URL de la película. 
    //Para ello necesito un id que será pasado en el componente.
    public getPeliculaDetalle(id: string):Observable <PeliculaDetalle>{
      return this.http.get<PeliculaDetalle>(
          URL+id+enlaces.key,
          requestOptions
      )
    }
    public getPeliculasFavoritas(sesion:string):Observable <PeliculasFavoritasResponse>{
      return this.http.get<PeliculasFavoritasResponse>(
          urlcuenta+'/favorite/movies'+enlaces.key+'&session_id='+sesion+'&language=en-US&sort_by=created_at.asc&page=1',
          requestOptions
      )
    }
    public postMarkFavorite(sesion:string, media_id: number,es_favorito:boolean):Observable<MarkFavoriteResponse>{
      const favoritadto= new FavoritaNewDto('movie',media_id,es_favorito);
      console.log(favoritadto);
      return this.http.post<MarkFavoriteResponse>(
        urlcuenta+'/favorite'+enlaces.key+'&session_id='+sesion,
        favoritadto,
        requestOptions);
    }
    public obtenerWatchlist(sesion:string):Observable<WatchlistResponse>{
      return this.http.get<WatchlistResponse>(
        urlcuenta+'/watchlist/movies'+enlaces.key+'&session_id='+sesion,
        requestOptions
      )
    }
    public postMarkWatchlist(sesion:string, media_id: number,es_ver:boolean):Observable<MarkWatchlistResponse>{
      const watchlistdto= new WatchlistDto('movie',media_id,es_ver);
      return this.http.post<MarkWatchlistResponse>(
        urlcuenta+'/watchlist'+enlaces.key+'&session_id='+sesion,
        watchlistdto,
        requestOptions

      )
    }

    public postCrearLista(listDto :ListDto,sesion:string):Observable<CreateListResponse>{
      listDto.language='es';
      return this.http.post<CreateListResponse>(
        urllista+enlaces.key+'&session_id='+sesion,
        listDto,
        requestOptions
      )
    }

    public getListas(sesion:string):Observable<ListsReponse>{
      return this.http.get<ListsReponse>(
        urlcuenta+'/lists'+enlaces.key+'&session_id='+sesion,
        requestOptions
      )
    }

    
  }