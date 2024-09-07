import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import {Login} from "./login";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
    this.backEndURL = this.getBackEndUrl();
  }
  backEndURL: string;

  getLogin(name:string,password:string){
    return this.http.get(`${this.backEndURL}/login/${name}/${password}`);
  }

  postLogin(login: Login): Observable<any> {
    return this.http.post(`${this.backEndURL}/login`, login);
}

  getBackEndUrl(): string {
    const segments = document.URL.split('/');
    const reggie = new RegExp(/localhost/);
    return reggie.test(segments[2]) ? 'http://localhost:8000':'http://localhost:3002';
  }
}
