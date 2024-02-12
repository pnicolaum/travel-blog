import { Component } from '@angular/core';
import { BlogCreationService } from '../../services/blog-creation/blog-creation.service';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css']
})
export class BlogUpdateComponent {
  blogKeyword = "";
  title = "";
  keyword = "";
  continent = "";
  country = "";
  description = "";
  days: number = 0;
  date = "";

  constructor(
    private blogCreationService: BlogCreationService,
  ) { }

  getBlogByKeyword() {
    this.blogCreationService.getBlogByKeyword(this.blogKeyword)
      .subscribe(
        (response) => {
          console.log(this.blogKeyword);
          this.title = response[0].title;
          this.keyword = response[0].keyword
          this.continent = response[0].continent;

          this.country = response[0].country;
          this.description = response[0].description;
          this.days = response[0].days;
          this.date = response[0].date;
        }
      )
  };


  updateBlog() {

  };
}
