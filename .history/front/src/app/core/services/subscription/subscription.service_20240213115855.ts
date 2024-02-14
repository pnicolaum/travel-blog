import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'https://localhost/api/v1/subscriptions/';

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
    return this.http.get(`${baseUrl}/mail/${mail}`);
  }

  post(mail: any): Observable<any> {
    return this.http.post(baseUrl, { mail }, { responseType: 'text' });
  }

  // remove
  deleteMail(mail: any): Observable<any> {
    const options = {
      body: { mail },
    };
    return this.http.delete(`${baseUrl}delete`, options);
  }

}
