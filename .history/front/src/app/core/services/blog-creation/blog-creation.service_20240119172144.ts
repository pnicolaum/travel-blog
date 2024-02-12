import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/v1/xxxxxx/';

@Injectable({
  providedIn: 'root'
})

export class BlogCreationService {

  constructor(private http: HttpClient) { }

  getBlogByTitle(title: string): Observable<any> {
    return this.http.get(`${baseUrl}/${title}`);
  }

  // constructor(private http: HttpClient) { }

  // getAll(): Observable<any> {
  //   return this.http.get(baseUrl);
  // }

  // get(id: any): Observable<any> {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }

  // post(mail: any): Observable<any> {
  //   return this.http.post(baseUrl, mail, { responseType: 'text' });
  // }



}
