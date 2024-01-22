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
        }
      )
  };


  updateBlog() {

  };
}
