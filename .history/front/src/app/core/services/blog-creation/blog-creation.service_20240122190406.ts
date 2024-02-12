import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/v1/blogs/';


@Injectable({
  providedIn: 'root'
})

export class BlogCreationService {

  constructor(private http: HttpClient) { }

  getBlogByTitle(title: string): Observable<any> {
    return this.http.get(`${baseUrl}/${title}`);
  }

  getBlogByKeyword(keyword: string): Observable<any> {
    return this.http.get(`${baseUrl}/${keyword}`);
  }

  getAllBlogs(): Observable<any> {
    return this.http.get(baseUrl);
  }

  postBlog(data: any): Observable<any> {
    return this.http.post(baseUrl, data, { responseType: 'text' });
  }


  updateBlog(data: any): Observable<any> {
    console.log(`${baseUrl}/get-id`);
    return this.http.put(`${baseUrl}/get-id`, data, { responseType: 'text' });
  }


}
