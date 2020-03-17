export class SessionNewDto{
    request_token:string;

    constructor(token:string){
        this.request_token=token;
    }
    /*nos podemos ahorrar lineas:
    consturctor(public request_token:string){}*/
}