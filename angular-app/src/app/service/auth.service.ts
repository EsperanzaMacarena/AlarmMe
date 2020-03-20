import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginDto } from '../dto/login.dto';
import { LoginResponse } from '../model/login-response.interface';
import { Observable } from 'rxjs';
import {BASE_URL} from '../dashboard/commons';

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
     BASE_URL+'/login',loginDto,
      httpOptions
    );
  }

  

  public static getToken(): string {
    return localStorage.getItem("token");
  }

  public setToken(token: string) {
    localStorage.setItem("token", token);
  }
  public setRol(role: string) {
    localStorage.setItem("rol", role);
  }
  public setEmail(email: string) {
    localStorage.setItem("email", email);
  }

  public clearToken() {
    localStorage.removeItem("token");
  }
  public clearRol() {
    localStorage.removeItem("rol");
  }
  public clearEmail() {
    localStorage.removeItem("email");
  }

  public logOut(): void{
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    localStorage.removeItem("email");
  }


}
