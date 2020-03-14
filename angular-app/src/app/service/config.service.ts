import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';


interface Config {
  serverUrl: string,
  loginUrl: string,
  clientId: string,
  masterKey: string
}

export function configServiceInitializerFactory(config: ConfigService): Function {
  return () => config.load();
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config: Config;

  constructor(private http: HttpClient) { }

  load(): Promise<any> {
    console.log('load resources');
    this.config = {
      serverUrl: environment.serverUrl,
      loginUrl: environment.loginUrl,
      clientId: environment.clientId,
      masterKey: environment.masterKey
    };
    return of().toPromise();
  }
}
