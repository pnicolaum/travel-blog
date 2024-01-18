import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/v1/images'; // Actualiza con tu URL de backend

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) { }

  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);

    return this.http.post(`${baseUrl}/upload`, formData);
  }
}
