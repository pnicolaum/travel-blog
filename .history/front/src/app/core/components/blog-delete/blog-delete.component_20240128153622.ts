import { Component } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';


@Component({
  selector: 'app-blog-delete',
  templateUrl: './blog-delete.component.html',
  styleUrls: ['./blog-delete.component.css']
})

export class BlogDeleteComponent {

  keyword = "";
  id = "";

  constructor(
    private blogService: BlogService,
  ) { }


  getAllBlogs() {
    this.blogService.getAllBlogs()
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
    this.blogService.getBlogByKeyword(this.keyword)
      .subscribe(
        (response) => {
          this.id = response[0].id;

          const data = {
            id: this.id,
            keyword: this.keyword,
          };

          // delete
          this.blogService.deleteBlog(data)
            .subscribe(
              () => {
                console.log("Blog eliminado con exito");
              },
              (error) => {
                console.log(error);
              }
            );
        },
        (error) => {
          console.log("No existe blog con esta keyword");
          console.log(error);
        }
      );

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
