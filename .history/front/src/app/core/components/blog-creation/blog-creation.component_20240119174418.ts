import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogCreationService } from '../../services/blog-creation/blog-creation.service';


@Component({
  selector: 'app-blog-creation',
  templateUrl: './blog-creation.component.html',
  styleUrls: ['./blog-creation.component.css']
})
export class BlogCreationComponent {

  blogForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private blogCreationService: BlogCreationService, // Reemplaza BlogService con el nombre de tu servicio
    private router: Router
  ) {
    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required], // Asegúrate de tener un campo 'title' en tu formulario
      // Otros campos del formulario
    });
  }




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




}
