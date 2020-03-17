import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { ConfigService } from './config.service';
import { LoginDto } from '../dto/login.dto';
import { LoginResponse } from '../model/login-response.interface';
import { Observable } from 'rxjs';



const jwtToken = 'jwtToken';

const httpOptionsLogin = {//application/x-www-form-urlencoded
  headers: new HttpHeaders().append('Authorization',
    'Basic ' + btoa(`alarmme:secret`)).append('Content-type','application/x-www-form-urlencoded')
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private config: ConfigService,
    private http: HttpClient
  ) { }

  login(loginDto? : LoginDto): Observable<LoginResponse> {
    const params = new HttpParams()
        .set('username', loginDto.email)
        .set('password', loginDto.password);
    return this.http.post<LoginResponse>("https://alarm-me-api.herokuapp.com/api/login", params,
      httpOptionsLogin
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
