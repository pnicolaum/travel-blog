import { Component } from '@angular/core';
import { BlogCreationService } from '../../services/blog-creation/blog-creation.service';


@Component({
  selector: 'app-blog-delete',
  templateUrl: './blog-delete.component.html',
  styleUrls: ['./blog-delete.component.css']
})

export class BlogDeleteComponent {

  keyword = "";
  id = "";

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
    // sacar el id dado keyword
    this.blogCreationService.getBlogByKeyword(this.keyword)
      .subscribe(
        (response) => {
          this.id = response[0].id;

          const data = {
            id: this.id,
            keyword: this.keyword,
          };

          // delete
          this.blogCreationService.deleteBlog(data)
            .subscribe(
              (response) => {
                console.log("Blog eliminado con exito");
              },
              (error) => {
                console.log(error);
                console.log("Hola");
              }
            );
        },
        (error) => {
          console.log("No existe blog con esta keyword");
          console.log(error);
        }
      );



  }



}
