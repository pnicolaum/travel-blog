import { Component } from '@angular/core';
import { BlogCreationService } from '../../services/blog-creation/blog-creation.service';


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


  constructor(
    private blogCreationService: BlogCreationService,
  ) { }


  postBlog() {

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

      this.blogCreationService.postBlog(data)
        .subscribe(
          response => {
            this.data = response;
            console.log(response);
          },
          error => {
            console.log(error);
          });
    } else {
      console.log('Algunos campos son nulos o 0. No se puede enviar el blog.');
    }

  }


}
