export class WatchlistDto {
    media_type: string;
    media_id: number;
    watchlist: boolean;
    constructor( media_type: string,media_id: number,watchlist: boolean){
        this.media_type=media_type;
        this.media_id=media_id;
        this.watchlist=watchlist;
    }
}