import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'https://localhost/api/v1/sections/';


@Injectable({
  providedIn: 'root'
})

export class SectionService {

  constructor(private http: HttpClient) { }

  getSectionByTitle(title: string): Observable<any> {
    return this.http.get(`${baseUrl}/${title}`);
  }

  getSectionByKeyword(keyword: string): Observable<any> {
    return this.http.get(`${baseUrl}/get-keyword/${keyword}`);
  }

  getAllSections(): Observable<any> {
    return this.http.get(baseUrl);
  }

  postSection(data: any): Observable<any> {
    return this.http.post(baseUrl, data, { responseType: 'text' });
  }

  getSectionByBlogid(blogid: number): Observable<any> {
    return this.http.get(`${baseUrl}/get-blogid/${blogid}`);
  }


  updateSection(data: any): Observable<any> {
    console.log(`${baseUrl}/get-id`);
    return this.http.put(`${baseUrl}/get-id/${data.id}`, data, { responseType: 'text' });
  }

  // remove
  deleteSection(data: any): Observable<any> {
    return this.http.delete(`${baseUrl}/get-id/${data.id}`, data);
  }


}
