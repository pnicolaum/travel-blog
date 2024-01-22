import { Component } from '@angular/core';
import { BlogCreationService } from '../../services/blog-creation/blog-creation.service';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css']
})
export class BlogUpdateComponent {
  id = "";
  blogKeyword = "";
  title = "";
  keyword = "";
  continent = "";
  country = "";
  description = "";
  days: number = 0;
  date = "";
  formatedDate = "";

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

  getBlogByKeyword() {
    this.blogCreationService.getBlogByKeyword(this.blogKeyword)
      .subscribe(
        (response) => {
          console.log(this.blogKeyword);
          console.log(response[0]);
          this.id = response[0].id;
          this.title = response[0].title;
          this.keyword = response[0].keyword
          this.continent = response[0].continent;
          this.country = response[0].country;
          this.description = response[0].description;
          this.days = response[0].days;
          this.date = response[0].date;
          this.formatedDate = this.formatDateForInput(this.date);
          console.log(this.formatedDate);
        }
      )
  };



  updateBlog() {
    const data = {
      title: this.title,
      keyword: this.keyword,
      continent: this.continent,
      country: this.country,
      description: this.description,
      days: this.days,
      date: this.date
    };

    // sacar el id dado esto

    //update
    this.blogCreationService.updateBlog(data)
      .subscribe(
        (response) => {
          console.log(response);

        },
        (error) => {
          console.log(error);
        }
      )
  };



  private formatDateForInput(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
