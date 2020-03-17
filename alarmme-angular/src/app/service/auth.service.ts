import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginDto } from '../dto/login.dto';

import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.interface';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private config: ConfigService,
    private http: HttpClient
  ) { }

login(loginDto: LoginDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      'https://alarm-me-api.herokuapp.com/api/login',
      loginDto,
      httpOptions
    );
  }

  public getToken(): string {
    return localStorage.getItem("token");
  }

  public setToken(token: string) {
    localStorage.setItem("token", token);
  }

  public clearToken() {
    localStorage.removeItem("token");
  }
}
