import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/v1/subscriptions/';

@Injectable({
  providedIn: 'root'
})

export class SubscriptionService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getMailByMail(mail: string): Observable<any> {
    console.log(mail);
    console.log("aaaaaaaaaaaa");
    return this.http.get(`${baseUrl}/${mail}`);
  }

  post(mail: any): Observable<any> {
    return this.http.post(baseUrl, mail, { responseType: 'text' });
  }

}
