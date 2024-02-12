
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/v1/mail/';

@Injectable({
  providedIn: 'root'
})

export class BlogService {
  constructor(private http: HttpClient) { }

  // post
  postBlog(data: any): Observable<any> {
    return this.http.post(`${baseUrl}send-mail/`, data, { responseType: 'text' });
  }
}
