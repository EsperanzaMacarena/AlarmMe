import { TypeCreateRequest } from "./../request/type-create.interface";
import { BASE_URL } from "./../dashboard/commons";
import { Observable } from "rxjs";
import { Type } from "./../model/type.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { AllUserResponse } from "../model/allUser-response.interface";
import { ChangeEnabledRequest } from "../request/changeEnabled-request.interface";
//${AuthService.getToken}
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer " + AuthService.getToken()
  })
};
@Injectable({
  providedIn: "root"
})
export class AlarmMeApiService {
  constructor(private http: HttpClient) {}

  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(BASE_URL + "/type", httpOptions);
  }

  createType(type: TypeCreateRequest): Observable<Type> {
    return this.http.post<Type>(BASE_URL + "/type", type, httpOptions);
  }

  updateType(type: TypeCreateRequest, id: String): Observable<Type> {
    return this.http.put<Type>(BASE_URL + "/type/" + id, type, httpOptions);
  }

  getPlaces(): Observable<String[]> {
    return this.http.get<String[]>(BASE_URL + "/places", httpOptions);
  }

  deleteType(id: String): Observable<any> {
    return this.http.delete(BASE_URL + "/type/" + id, httpOptions);
  }

  getAllUsers(): Observable<AllUserResponse[]> {
    return this.http.get<AllUserResponse[]>(BASE_URL + "/users", httpOptions);
  }

  changeEnabled(id: String, body: ChangeEnabledRequest): Observable<any> {
    return this.http.put<any>(BASE_URL + "/users/" + id, body, httpOptions);
  }
}
