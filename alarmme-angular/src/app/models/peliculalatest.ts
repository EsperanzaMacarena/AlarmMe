import {ProductionCompany} from './production-company'

export interface PeliculaLatest {
    adult: boolean;
    backdrop_path?: any;
    belongs_to_collection?: any;
    budget: number;
    genres: any[];
    homepage?: any;
    id: number;
    imdb_id?: any;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: any;
    production_companies: ProductionCompany[];
    production_countries: any[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: any[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
