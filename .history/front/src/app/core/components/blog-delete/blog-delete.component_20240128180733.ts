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

  deleteBlog() {

    this.openModal()
    // sacar el id dado keyword
    if (this.keyword) {
      this.blogService.getBlogByKeyword(this.keyword)
        .subscribe(
          (response) => {
            if (response.length > 0) {
              this.id = response[0].id;

              const data = {
                id: this.id,
                keyword: this.keyword,
              };

              // delete
              this.blogService.deleteBlog(data)
                .subscribe(
                  () => {
                    this.mensaje = "Blog eliminado con exito"
                  },
                  (error) => {
                    console.log(error);
                    this.mensaje = error;
                  }
                );
            } else {
              this.mensaje = "No existe ningún blog con esta palabra clave.";
            }
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      this.mensaje = "Por favor, escriba la palabra clave"
    }


  }



  openModal() {
    this.isModalOpen = true;
  };

  closeModal() {
    this.isModalOpen = false;
  };

  preventClose(event: Event) {
    event.stopPropagation();
  };



}
