import { Pelicula } from '../models/pelicula';

export interface PeliculaResponse {
    count: number;
    next: string;
    previous?: any;
    results: Pelicula[];
}