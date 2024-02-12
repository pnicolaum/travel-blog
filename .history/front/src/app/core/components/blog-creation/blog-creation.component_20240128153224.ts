import { Component } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';


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

  isModalOpen: boolean = false;
  mensaje = "";


  constructor(
    private blogService: BlogService,

  ) { }


  postBlog() {

    this.openModal()

    if (this.title && this.keyword && this.continent && this.description && this.days && this.date) {

      const data = {
        title: this.title,
        keyword: this.keyword,
        continent: this.continent,
        country: this.country,
        description: this.description,
        days: this.days,
        date: this.date
      };

      this.blogService.postBlog(data)
        .subscribe(
          response => {
            this.data = response;
            this.mensaje = response;
          },
          error => {
            this.mensaje = error;
            console.log(error);
          });
    } else {
      this.mensaje = "Algunos campos son nulos, por favor rellene todos los campos";
    }

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
