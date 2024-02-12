import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/v1/sections/';


@Injectable({
  providedIn: 'root'
})

export class SectionCreationService {

  constructor(private http: HttpClient) { }

  getSectionByTitle(title: string): Observable<any> {
    return this.http.get(`${baseUrl}/${title}`);
  }

  getSectionByKeyword(keyword: string): Observable<any> {
    return this.http.get(`${baseUrl}/${keyword}`);
  }

  getAllSections(): Observable<any> {
    return this.http.get(baseUrl);
  }

  postSection(data: any): Observable<any> {
    return this.http.post(baseUrl, data, { responseType: 'text' });
  }

  getSectionByBlogid(data: any): Observable<any> {
    console.log(`${baseUrl}/get-blogid`);
    return this.http.put(`${baseUrl}/get-blogid/${data.blogid}`, data, { responseType: 'text' });
  }


  updateSection(data: any): Observable<any> {
    console.log(`${baseUrl}/get-id`);
    return this.http.put(`${baseUrl}/get-id/${data.id}`, data, { responseType: 'text' });
  }


}
