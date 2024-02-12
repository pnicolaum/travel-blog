import { Component } from '@angular/core';
import { BlogCreationService } from '../../services/blog-creation/blog-creation.service';


@Component({
  selector: 'app-blog-delete',
  templateUrl: './blog-delete.component.html',
  styleUrls: ['./blog-delete.component.css']
})

export class BlogDeleteComponent {

  keyword = "";

  constructor(
    private blogCreationService: BlogCreationService,
  ) { }


  getAllBlogs() {
    this.blogCreationService.getAllBlogs()
      .subscribe(
        (response) => {
          //TO DO: Guardar en un array titulo y keyword de cada response

          console.log('Respuesta del servidor:', response);
        },
        (error) => {
          console.error('Error al obtener las blogs:', error);
        }
      )
  };

  deleteBlog() {

  }

}
