import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const imgUrl = 'http://localhost:3000/api/v1/images'; // Actualiza con tu URL de backend

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  constructor(private http: HttpClient) { }

  uploadImage(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', file, file.name);

    return this.http.post(`${imgUrl}/upload`, formData);
  }


  getAllImages(): Observable<any> {
    return this.http.get(`${imgUrl}/get-images`);
  }

  // Método para obtener la URL de la imagen desde el backend
  // getImageUrl(imageName: string): string {
  //   return `${this.baseUrl}/get-image/${imageName}`;
  // }

}
