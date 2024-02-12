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

  isModalOpen: boolean = false;
  mensaje = "";

  texto = "";
  message: { title: string, keyword: string }[] = [];
  messagek: { keyword: string }[] = [];
  clickCount: number = 0;

  constructor(private imageUploadService: ImageUploadService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  uploadImage(): void {
    if (this.selectedFile) {
      this.imageUploadService.uploadImage(this.selectedFile).subscribe(
        (response) => {
          this.openModal();
          this.mensaje = "Imagen subida con éxtio";
          console.log('Imagen subida con éxito', response);
        },
        (error) => {
          console.error('Error al subir la imagen', error);
        }
      );
    }
  }

  getAllImages() {

    this.imageUploadService.getAllImages().subscribe(
      (response) => {
        this.message = [];

        for (let i = 0; i < response.length; i++) {
          const ky = response[i].keyword;
          const blog = {
            title: response[i].title,
            keyword: response[i].keyword
          };
          this.messagek.push(ky);
          this.message.push(blog);

        }
        this.clickCount++;

        if (this.clickCount <= 1) {
          this.texto = this.messagek.join(' - ');
        }
        console.log('Respuesta del servidor:', response);
      },
      (error) => {
        console.error('Error al obtener las imágenes:', error);
      }
    );
  }

  // eliminar imagen de /uploads dando su nombre
  // *** con la extension: (js.png, abc.jpg, etc)
  deleteImage(): void {
    this.openModal();
    if (this.imageNameToDelete) {
      this.imageUploadService.deleteImage(this.imageNameToDelete).subscribe(
        (response) => {
          console.log('Imagen eliminada con éxito', response);
          if (response.length > 0) {
            this.mensaje = "Imagen eliminada con éxito";
          }

        },
        (error) => {
          this.mensaje = "Ha ocurrido algun error, revisa el nombre de la imagen"
          console.error('Error al eliminar la imagen', error);
        }
      );
    } else {
      this.mensaje = "Por favor indique el nombre de la imagen";
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  preventClose(event: Event) {
    event.stopPropagation();
  }


}
