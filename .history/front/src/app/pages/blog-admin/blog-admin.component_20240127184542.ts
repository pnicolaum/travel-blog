import { Component } from '@angular/core';
import { BlogService } from 'src/app/core/services/blog/blog.service';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.css']
})
export class BlogAdminComponent {

  message: { title: string, keyword: string }[] = [];

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
            const blog = {
              title: response[i].title,
              keyword: response[i].keyword
            };
            this.message.push(blog);
            console.log('Respuesta del servidor:', response);
          },
          (error) => {
            console.error('Error al obtener las blogs:', error);
          }
      )
  };
}
