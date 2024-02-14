
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:80/api/v1/mail/';

@Injectable({
  providedIn: 'root'
})

export class NodemailerService {
  constructor(private http: HttpClient) { }

  // post
  postMail(data: any): Observable<any> {
    return this.http.post(`${baseUrl}send-mail/`, data, { responseType: 'text' });
  }

  // post
  postConfirmationMail(data: any): Observable<any> {
    return this.http.post(`${baseUrl}confirmation/`, data, { responseType: 'text' });
  }
}
