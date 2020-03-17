import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

interface Config {
  serverUrl: string,
  loginUrl: string,
  clientId: string,
  clientSecret: string
}

export function configServiceInitializerFactory(config: ConfigService): Function {
  return () => config.load();
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config: Config;

  constructor(private http: HttpClient) {}

  load(): Promise<any> {
    console.log('load resources');
    this.config = {
      serverUrl: environment.serverUrl,
      loginUrl: environment.loginUrl,
      clientId: environment.clientId,
      clientSecret: environment.clientSecret
    };
    return of().toPromise();
  }
}
