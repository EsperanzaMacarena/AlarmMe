import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenResponse } from '../responses/token-response';
import { SessionResponse } from '../responses/session-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enlaces } from '../variables/variables';
import { SessionNewDto } from '../dto/session-new.dto';


const authURL='https://api.themoviedb.org/3/authentication';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

@Injectable({
    providedIn: 'root'
  })

export class AuthenticationService {
    
    constructor(private http: HttpClient){}
    getTokenRequest():Observable<TokenResponse>{
        return this.http.get<TokenResponse>(authURL+'/token/new'+enlaces.key);
    }
    getSessionID():Observable<SessionResponse>{
        const sessiondto=new SessionNewDto(localStorage.getItem('token'));
        return this.http.post<SessionResponse>(
            authURL+'/session/new'+enlaces.key,
            sessiondto,
            httpOptions);
    }
}