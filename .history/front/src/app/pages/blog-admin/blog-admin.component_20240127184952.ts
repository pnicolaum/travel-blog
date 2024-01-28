import { Component } from '@angular/core';
import { BlogService } from 'src/app/core/services/blog/blog.service';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.css']
})
export class BlogAdminComponent {


  message: { title: string, keyword: string }[] = [];
  title = "";
  constructor(
    private blogService: BlogService,
  ) { }

  getAllBlogs() {
    this.blogService.getAllBlogs()
      .subscribe(
        (response) => {
          // Limpiar el array antes de llenarlo con nuevos datos
          this.message = [];

          // Iterar sobre cada respuesta y guardar título y keyword
          for (let i = 0; i < response.length; i++) {
            this.message = {
              this.title: response[i].title,
              keyword: response[i].keyword
            };
          }
          console.log(this.message);

          // //TO DO: Guardar en un array titulo y keyword de cada response
          // this.message = response;
          // for (let i = 0; i < 5; i++) {
          //   this.message[i] = response[i].keyword;
          // }
          // console.log('Respuesta del servidor:', response);
        },
        (error) => {
          console.error('Error al obtener las blogs:', error);
        }
      )
  };
}
