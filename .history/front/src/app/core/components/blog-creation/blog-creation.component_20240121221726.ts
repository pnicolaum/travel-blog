import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogCreationService } from '../../services/blog-creation/blog-creation.service';


@Component({
  selector: 'app-blog-creation',
  templateUrl: './blog-creation.component.html',
  styleUrls: ['./blog-creation.component.css']
})
export class BlogCreationComponent {

  title = "";
  keyword = "";
  continent = "";
  country = "";
  description = "";
  days: number = 0;
  date = "";

  data: any;


  blogForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private blogCreationService: BlogCreationService, // Reemplaza BlogService con el nombre de tu servicio
    private router: Router
  ) {
    // this.blogForm = this.formBuilder.group({
    //   title: ['', Validators.required], // Asegúrate de tener un campo 'title' en tu formulario
    // });
  }


  postBlog() {
    const data = {
      title: this.title,
      keyword: this.keyword,
      continent: this.continent,
      country: this.country,
      description: this.description,
      days: this.days,
      date: this.date
    };

    this.blogCreationService.postBlog(data)
      .subscribe(
        response => {
          this.data = response;
          console.log(response);
        },
        error => {
          console.log(error);
        });

  }

  //this.router.navigate(['/blogs', blog.title]);

  // Método para cargar el blog al servidor
  // uploadBlog(): void {
  //   if (this.blogForm.valid) {
  //     const blogTitle = this.blogForm.value.title;

  //     // Lógica para subir el blog al servicio
  //     this.BlogCreationService.uploadBlog(this.blogForm.value).subscribe(
  //       (response) => {
  //         console.log('Blog subido con éxito', response);

  //         // Después de que el blog se haya subido correctamente,
  //         // navegar a la página de detalles del blog
  //         this.router.navigate(['/blog-creation-admin', 'blog', blogTitle]);
  //       },
  //       (error) => {
  //         console.error('Error al subir el blog', error);
  //       }
  //     );
  //   }
  // }


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
