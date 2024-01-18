import { Component } from '@angular/core';
import { ImageService } from '../../services/image/image.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  selectedFile: File | null = null;

  constructor(private imageService: ImageService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  uploadImage(): void {
    if (this.selectedFile) {
      this.imageService.uploadImage(this.selectedFile).subscribe(
        (response) => {
          console.log('Imagen subida con éxito', response);
        },
        (error) => {
          console.error('Error al subir la imagen', error);
        }
      );
    }
  }
}
