import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/v1/blogs/';


@Injectable({
  providedIn: 'root'
})

export class BlogService {

  constructor(private http: HttpClient) { }

  // get
  getBlogByTitle(title: string): Observable<any> {
    return this.http.get(`${baseUrl}/${title}`);
  }

  getBlogByKeyword(keyword: string): Observable<any> {
    return this.http.get(`${baseUrl}get-keyword/${keyword}`);
  }

  getAllBlogs(): Observable<any> {
    return this.http.get(baseUrl);
  }

  // post
  postBlog(data: any): Observable<any> {
    return this.http.post(baseUrl, data, { responseType: 'text' });
  }

  // put
  updateBlog(data: any): Observable<any> {
    return this.http.put(`${baseUrl}/get-id/${data.id}`, data, { responseType: 'text' });
  }


  // remove
  deleteBlog(data: any): Observable<any> {
    return this.http.delete(`${baseUrl}/get-id/${data.id}`, data);
  }



}
