export class FavoritaNewDto{
    media_type: string;
    media_id: number;
    favorite: boolean;

    constructor(media_type: string,media_id: number,favorite: boolean){
        this.media_type=media_type;
        this.media_id=media_id;
        this.favorite=favorite;
    }
}