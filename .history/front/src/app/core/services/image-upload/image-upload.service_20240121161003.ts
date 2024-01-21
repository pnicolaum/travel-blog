import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const imgUrl = 'http://localhost:3000/api/v1/images'; // Actualiza con tu URL de backend
const baseUrl = 'http://localhost:3000/uploads';

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

  getImageByName(imageName: string): Observable<any> {
    console.log("Url de la imgaen: ");
    console.log(`${baseUrl}/${imageName}`);
    return this.http.get(`${baseUrl}/${imageName}`);

  }



}

