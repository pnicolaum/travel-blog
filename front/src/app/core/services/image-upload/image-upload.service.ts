import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const imgUrl = 'https://pnm.ltim.uib.es/api/v1/images'; // Actualiza con tu URL de backend

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

  deleteImage(imageName: string): Observable<any> {
    return this.http.delete(`${imgUrl}/delete-image/${imageName}`);
  }


}

