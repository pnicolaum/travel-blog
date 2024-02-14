import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'https://pnm.ltim.uib.es/api/v1/users/';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }


  postRegistration(data: any): Observable<any> {
    return this.http.post(baseUrl, data, { responseType: 'text' });
  }

  postCredentials(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/credentials`, data, { responseType: 'text' });
  }


}
