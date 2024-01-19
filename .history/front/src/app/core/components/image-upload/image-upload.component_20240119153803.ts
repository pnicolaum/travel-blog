import { Component } from '@angular/core';
import { ImageUploadService } from '../../services/image-upload/image-upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  selectedFile: File | null = null;
  imageNameToDelete = "";
  constructor(private imageUploadService: ImageUploadService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  uploadImage(): void {
    if (this.selectedFile) {
      this.imageUploadService.uploadImage(this.selectedFile).subscribe(
        (response) => {
          console.log('Imagen subida con éxito', response);
        },
        (error) => {
          console.error('Error al subir la imagen', error);
        }
      );
    }
  }

  // eliminar imagen de /uploads dando su nombre
  // *** con la extension: (js.png, abc.jpg, etc)
  deleteImage(): void {
    if (this.imageNameToDelete) {
      this.imageService.deleteImage(this.imageNameToDelete).subscribe(
        (response) => {
          console.log('Imagen eliminada con éxito', response);
          // Realiza cualquier acción adicional después de la eliminación
        },
        (error) => {
          console.error('Error al eliminar la imagen', error);
        }
      );
    }
  }



}
