import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/v1/users/';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  /*
  post(username: any, name: any, surname: any, mail: any, password: any): Observable<any> {
    const body = {
      username: username,
      name: name,
      surname: surname,
      mail: mail,
      password: password
    };
    return this.http.post(baseUrl, body);
  }*/

  post(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }


}
