import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const baseUrl = 'http://localhost:3000/api/v1/users/';

interface LoginResponse {
  token: string;
  // Add other properties if present in the actual response
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }


  postRegistration(data: any): Observable<any> {
    return this.http.post(baseUrl, data, { responseType: 'text' });
  }

  postCredentials(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/check-login`, data, { responseType: 'text' });
  }

  login(username: any, password: any): Observable<any> {
    return this.http.post(`${baseUrl}/login`, { username, password }).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

}
