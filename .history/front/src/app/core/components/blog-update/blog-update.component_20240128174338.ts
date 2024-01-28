import { Component } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css']
})
export class BlogUpdateComponent {
  blogKeyword = "";
  id = "";
  title = "";
  keyword = "";
  continent = "";
  country = "";
  description = "";
  days: number = 0;
  date = "";
  formatedDate = "";

  isModalOpen: boolean = false;
  mensaje = "";

  constructor(
    private blogService: BlogService,
  ) { }


  getBlogByKeyword() {


    if (this.blogKeyword) {
      this.blogService.getBlogByKeyword(this.blogKeyword)
        .subscribe(
          (response) => {
            if (response.length > 0) {
              this.id = response[0].id;
              this.title = response[0].title;
              this.keyword = response[0].keyword
              this.continent = response[0].continent;
              this.country = response[0].country;
              this.description = response[0].description;
              this.days = response[0].days;
              this.date = response[0].date;
              this.formatedDate = this.formatDateForInput(this.date);
            } else {
              this.openModal();
              this.mensaje = "No se ha encontrado ningún blog con esta palabra clave"
            }

          },
          (error) => {
            console.log(error);
          });
    } else {
      this.openModal();

      this.mensaje = "Por favor, escriba la palabra clave"
    }

  };



  updateBlog() {

    this.openModal();

    if (this.title && this.continent && this.country && this.description && this.days && this.date) {
      // sacar el id dado keyword
      this.blogService.getBlogByKeyword(this.keyword)
        .subscribe(
          (response) => {
            this.id = response[0].id;
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );

      const data = {
        id: this.id,
        title: this.title,
        keyword: this.keyword,
        continent: this.continent,
        country: this.country,
        description: this.description,
        days: this.days,
        date: this.formatedDate
      };

      //update
      this.blogService.updateBlog(data)
        .subscribe(
          (response) => {
            console.log("Update del blog con exito");
            console.log(response);
            this.mensaje = response;
          },
          (error) => {
            console.log(error);
            this.mensaje = error;
          }
        );
    } else {
      this.mensaje = "Algunos campos son nulos, por favor rellene todos los campos";
    }

  };

  private formatDateForInput(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

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
