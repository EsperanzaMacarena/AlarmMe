import { BASE_URL } from './../dashboard/commons';
import { Observable } from 'rxjs';
import { Type } from './../model/type.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
//${AuthService.getToken}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZTZiZGM2MDg2YTljOTNjZGNmNDJlZTgiLCJleHAiOjE1ODQ0NjMyMDk2ODYsInVzZXJuYW1lIjoiYWRtaW5AYWRtaW5pc3RyYWRvci5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4In0.uS47pO2wKfppd1RzDyXOWcI65bIThDHJksDYW4TBczw`
  })
};
@Injectable({
  providedIn: 'root'
})
export class AlarmMeApiService {

  constructor( private http: HttpClient) { }

  getTypes():Observable<Type[]>{
    return this.http.get<Type[]>(BASE_URL+'/type',httpOptions);
  }
}
