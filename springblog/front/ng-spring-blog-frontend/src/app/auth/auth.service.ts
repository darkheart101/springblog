import { Injectable } from '@angular/core';
import { RegisterPayload } from './register-payload';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }

  register(registerPayload: RegisterPayload): Observable<any>{
    return this.httpClient.post(this.url + "signup",registerPayload);
  }
}
