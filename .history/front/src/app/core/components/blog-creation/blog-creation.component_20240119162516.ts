import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ImageUploadService } from '../../services/image-upload/image-upload.service';

@Component({
  selector: 'app-blog-creation',
  templateUrl: './blog-creation.component.html',
  styleUrls: ['./blog-creation.component.css']
})
export class BlogCreationComponent {

  constructor(
    private http: HttpClient,
    private imageUpdloadService: ImageUploadService
  ) { }


  // // Método para manejar la selección de archivos
  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     this.uploadFile(file);
  //   }
  // }

  // // Método para cargar el archivo al servidor
  // uploadFile(file: File) {
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   this.http.post<any>('http://localhost/upload', formData).subscribe(
  //     (response) => {
  //       console.log('Imagen subida con éxito', response);
  //     },
  //     (error) => {
  //       console.error('Error al subir la imagen', error);
  //     }
  //   );
  // }


  getAllImages() {

    this.imageUpdloadService.getAllImages().subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
      },
      (error) => {
        console.error('Error al obtener las imágenes:', error);
      }
    );
  }

}
