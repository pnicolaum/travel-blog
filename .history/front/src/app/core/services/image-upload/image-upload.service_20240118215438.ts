import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/v1/images'; // Actualiza con tu URL de backend

@Injectable({
  providedIn: 'root',
})
export class ImageUpdloadService {
  constructor(private http: HttpClient) { }

  uploadImage(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', file, file.name);

    return this.http.post(`${baseUrl}/upload`, formData);
  }

  getAllImages(): Observable<any> {
    return this.http.get(baseUrl);
  }


  // Método para obtener la URL de la imagen desde el backend
  // getImageUrl(imageName: string): string {
  //   return `${this.baseUrl}/get-image/${imageName}`;
  // }

}

