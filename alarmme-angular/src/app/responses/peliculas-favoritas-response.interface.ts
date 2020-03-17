import { PeliculaFavorita } from '../models/pelicula-favorita.interface';

export class PeliculasFavoritasResponse{
    page:number;
    results: PeliculaFavorita[];
    total_pages:number;
    total_results:number;

}