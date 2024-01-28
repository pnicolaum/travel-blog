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

  isModalOpen: boolean = false;
  mensaje = "";

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

    this.openModal()
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
                this.mensaje = "Blog eliminado con exito"
              },
              (error) => {
                console.log(error);
                this.mensaje = error;
              }
            );
        },
        (error) => {
          this.mensaje = "No existe ningún blog con esta palabra clave.";
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
