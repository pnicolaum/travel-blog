import { Component } from '@angular/core';
import { BlogService } from 'src/app/core/services/blog/blog.service';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.css']
})
export class BlogAdminComponent {

  message: any[] = [];

  constructor(
    private blogService: BlogService,
  ) { }

  getAllBlogs() {
    this.blogService.getAllBlogs()
      .subscribe(
        (response) => {
          //TO DO: Guardar en un array titulo y keyword de cada response
          this.message = response;
          for (let i = 0; i < 5; i++) {
            this.message[i] = response;
          }
          console.log('Respuesta del servidor:', response);
        },
        (error) => {
          console.error('Error al obtener las blogs:', error);
        }
      )
  };
}
